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
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { TagType } from 'src/ts/models/global-types'
import { capitalize } from 'src/ts/utilities/capitalize'
import {
  TagInputMutation,
  TagInputMutation_addTag,
  TagInputMutationVariables
} from 'src/ts/views/RecipeForm/components/TagsInput/types/TagInputMutation'
import { TagsInputQuery, TagsInputQuery_tags } from 'src/ts/views/RecipeForm/components/TagsInput/types/TagsInputQuery'


export default function TagsInputContainer(props: TagsInputCommonProps) {
  const { data } = useQuery<TagsInputQuery>(TAGS_INPUT_QUERY, {
    fetchPolicy: 'cache-first'
  })

  return (
    <TagsInput
      {...props}
      tags={data ? data.tags : []}
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
}

interface TagsInputProps extends TagsInputCommonProps {
  tags: TagsInputQuery_tags[]
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
            style={{
              marginBottom: Styles.values.spacing,
              padding: Styles.values.spacing,
              borderWidth: 1,
              borderColor: '#eee',
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 16, marginBottom: Styles.values.spacing }}>{capitalize(key)}</Text>

            <RX.View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {tags.map(tag => (
                <FlatButton
                  labelTranslations={tag.title}
                  onPress={() => props.onTagsChange(props.selectedTags.find(p => p === tag.slug)
                    ? props.selectedTags.filter(p => p !== tag.slug)
                    : [...props.selectedTags, tag.slug]
                  )}
                  style={[setLabelStyle(tag).style, { [Styles.values.marginEnd]: Styles.values.spacing / 2 }]}
                  labelStyle={setLabelStyle(tag).labelStyle}
                />
              ))}
            </RX.View>
          </RX.View>
        )
      })}
      <TagInput
        onSubmit={tag => props.onTagsChange([
          ...props.selectedTags,
          tag.slug,
        ])}
      />
    </RX.View>
  )
}

export function TagInput(props: { onSubmit: (tag: TagInputMutation_addTag) => any }) {
  const [tag, setTag] = useState<TagsInputQuery_tags>({
    type: TagType.other,
    title: [],
    info: [],
    slug: null,
  })
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
          [Styles.values.marginEnd]: Styles.values.spacing / 2
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
          [Styles.values.marginEnd]: Styles.values.spacing / 2
        }}
      />
      <FilledButton label={getLocalizedText('Add Tag')} onPress={addTag} />
    </RX.View>
  )
}
