/*
 * TagsInput.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useMutation, useQuery } from '@apollo/react-hooks'
import FilledButton from 'common/FilledButton/FilledButton'
import FlatButton from 'common/FlatButton/FlatButton'
import IntlInput from 'common/Input/IntlInput'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import Select from 'common/Select/Select'
import Text from 'common/Text/Text'
import gql from 'graphql-tag'
import { useContext, useState } from 'react'
import { ExecutionResult } from 'react-apollo'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { TagType, Role } from 'src/ts/models/global-types'
import ToastStore, { ToastTypes } from 'src/ts/stores/ToastStore'
import { capitalize } from 'src/ts/utilities/capitalize'
import {
  TagsInputDeleteMutation,
  TagsInputDeleteMutationVariables
} from 'src/ts/views/RecipeForm/components/TagsInput/types/TagsInputDeleteMutation'
import { Me } from 'src/ts/views/Register/types/Me'
import { TagInputMutation, TagInputMutation_addTag, TagInputMutationVariables } from './types/TagInputMutation'
import { TagsInputQuery, TagsInputQuery_tags } from './types/TagsInputQuery'


export default function TagsInputContainer(props: TagsInputCommonProps) {
  const { data } = useQuery<TagsInputQuery>(TAGS_INPUT_QUERY, {
    fetchPolicy: 'cache-first'
  })
  const [deleteTag] = useMutation<TagsInputDeleteMutation, TagsInputDeleteMutationVariables>(gql`
    mutation TagsInputDeleteMutation($slug: String!) {
      deleteTag(tagSlug: $slug)
    }
  `)

  return (
    <TagsInput
      {...props}
      tags={data && data.tags && data.tags.length > 0 ? data.tags : []}
      onTagDelete={variables => deleteTag({
        variables,
        update: (proxy, mutationResult) => {
          const { tags } = proxy.readQuery<TagsInputQuery>({
            query: TAGS_INPUT_QUERY,
          })

          proxy.writeQuery<TagsInputQuery>({
            query: TAGS_INPUT_QUERY,
            data: {
              tags: tags.filter(tag => tag.slug !== mutationResult.data.deleteTag)
            }
          })
        }
      })}
    />
  )
}

TagsInputContainer.fragments = {
  tag: gql`
    fragment Tag on Tag {
      slug
      title { locale text }
      info { locale text }
      type
      user
    }
  `
}

const TAGS_INPUT_QUERY = gql`
  query TagsInputQuery {
    tags {
      ...Tag
    }
  }

  ${TagsInputContainer.fragments.tag}
`

interface TagsInputCommonProps {
  style?: any,
  selectedTags: string[],
  onTagsChange: (selectedTags: string[]) => void,
  me: Me,
}

interface TagsInputProps extends TagsInputCommonProps {
  tags: TagsInputQuery_tags[],
  onTagDelete: (variables: TagsInputDeleteMutationVariables) => Promise<ExecutionResult<TagsInputDeleteMutation>>
}

export function TagsInput(props: TagsInputProps) {
  const { theme } = useContext(ThemeContext)

  const setLabelStyle = (tag: TagsInputQuery_tags) => {
    return {
      style: props.selectedTags.find(p => p === tag.slug) ? {
        /**
         * Active
         * */
        backgroundColor: theme.colors.filledButtonBG,
      } : {
        /**
         * Inactive
         * */
      },
      labelStyle: props.selectedTags.find(p => p === tag.slug) ? {
        /**
         * Active
         * */
        color: theme.colors.filledButtonText,
      } : {
        /**
         * Inactive
         * */
      },
    }
  }

  return (
    <RX.View>
      <Text style={{ fontSize: 16, marginBottom: Styles.values.spacing }}>Tell us more about the recipe</Text>

      {Object.keys(TagType).map(key => {
        const tags = props.tags.filter(i => i.type === TagType[key])
        if (tags.length === 0) return null

        return (
          <RX.View
            style={styles.panel}
          >
            <Text style={{ fontSize: 16, marginBottom: Styles.values.spacing }}>{capitalize(key)}</Text>

            <RX.View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {
                tags.map(tag => (
                  <FlatButton
                    labelTranslations={tag.title}
                    onPress={() => props.onTagsChange(props.selectedTags.find(p => p === tag.slug)
                      ? props.selectedTags.filter(p => p !== tag.slug)
                      : [...props.selectedTags, tag.slug]
                    )}
                    style={[setLabelStyle(tag).style, { [Styles.values.marginEnd]: Styles.values.spacing / 2 }]}
                    labelStyle={setLabelStyle(tag).labelStyle}
                  >
                    {
                      (
                        tag.user === props.me.id ||
                        props.me.role === Role.operator
                      ) &&
                      <FilledButton
                        label={'x'}
                        onPress={(e) => {
                          e.stopPropagation()
                          e.preventDefault()

                          RX.Alert.show(getLocalizedText('deleteTag?'), undefined, [{
                            text: getLocalizedText('yes'),
                            onPress: () => {
                              props.onTagDelete({
                                slug: tag.slug,
                              })
                                .then(() => {
                                  props.onTagsChange(props.selectedTags.filter(t => t !== tag.slug))
                                  ToastStore.toast({
                                    message: 'Tag deleted successfully',
                                    type: ToastTypes.Success,
                                  })
                                })
                            }
                          }, { text: getLocalizedText('no') }])
                        }}
                        style={{
                          [Styles.values.marginStart]: Styles.values.spacing / 2,
                          width: 20,
                          height: 20,
                        }}
                      />
                    }
                  </FlatButton>
                ))
              }
            </RX.View>
          </RX.View>
        )
      })}
      <RX.View
        style={styles.panel}
      >
        <TagInput
          onSubmit={tag => props.onTagsChange([
            ...props.selectedTags,
            tag.slug,
          ])}
        />
      </RX.View>
    </RX.View>
  )
}

export function TagInput(props: { onSubmit: (tag: TagInputMutation_addTag) => any }) {
  const defaultState = {
    type: TagType.other,
    title: [],
    info: [],
    slug: null,
  }
  const [tag, setTag] = useState<Omit<TagsInputQuery_tags, 'user'>>(defaultState)
  const [addTag] = useMutation<TagInputMutation, TagInputMutationVariables>(gql`
    mutation TagInputMutation($tag: TagInput!) {
      addTag(tag: $tag) {
        ...Tag
      }
    }

    ${TagsInputContainer.fragments.tag}
  `, {
    variables: {
      tag
    },
    update: (proxy, { data }) => {
      const { tags } = proxy.readQuery({ query: TAGS_INPUT_QUERY })

      proxy.writeQuery({
        query: TAGS_INPUT_QUERY,
        data: {
          tags: [
            ...tags,
            data.addTag,
          ],
        }
      })
      props.onSubmit(data.addTag)
      setTag(defaultState)
    }
  })

  return (
    <RX.View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
      <IntlInput
        translations={tag.title}
        onTranslationsChange={translations => setTag({
          ...tag,
          title: translations,
        })}
        style={{
          minWidth: 200,
          [Styles.values.marginEnd]: Styles.values.spacing / 2,
          marginBottom: 0,
        }}
      />
      <Select
        value={tag.type}
        options={[
          {
            value: undefined,
            text: <Text translate>Select Tag Type</Text>,
          },
          ...Object.keys(TagType).map(key => ({
            value: TagType[key],
            text: <Text>{key}</Text>,
          }))
        ]}
        onChange={value => setTag({
          ...tag,
          type: value
        })}
        style={{
          minWidth: 100,
          [Styles.values.marginEnd]: Styles.values.spacing / 2,
          marginBottom: 0,
        }}
      />
      <FilledButton label={getLocalizedText('Add Tag')} onPress={() => addTag()} style={{ padding: 7 }} />
    </RX.View>
  )
}

const styles = {
  panel: RX.Styles.createViewStyle({
    marginBottom: Styles.values.spacing,
    padding: Styles.values.spacing,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
  }),
}
