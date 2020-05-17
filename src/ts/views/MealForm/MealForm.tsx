/*
 * MealForm.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, useMutation, useQuery } from '@apollo/client'
import AppConfig from '@App/AppConfig'
import Storage from '@App/Storage/Storage'
import Styles from '@App/Styles'
import { useTheme } from '@App/ThemeContext'
import Checkbox from '@Common/Checkbox/Checkbox'
import FilledButton from '@Common/FilledButton/FilledButton'
import { FoodPreviewOnSubmit } from '@Common/FoodPickerDialog/components/FoodPreview'
import { FoodPreviewMealItem } from '@Common/FoodPickerDialog/components/types/FoodPreviewMealItem'
import { FoodPickerMealItem, FoodTypes } from '@Common/FoodPickerDialog/FoodPicker'
import { showFoodPicker } from '@Common/FoodPickerDialog/FoodPickerDialog'
import Input from '@Common/Input/Input'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
import { translate } from '@Common/LocalizedText/LocalizedText'
import MealHeader from '@Common/MealHeader/MealHeader'
import Navbar from '@Common/Navbar/Navbar'
import Page from '@Common/Page'
import Text from '@Common/Text/Text'
import { Role } from '@Models/global-types'
import { useMe } from '@Models/graphql/me/me'
import { Me } from '@Models/graphql/me/types/Me'
import CalendarService from '@Services/CalendarService'
import LocationStore from '@Services/LocationStore'
import ServiceConsumer from '@Services/utils/ServiceConsumer'
import { getParam } from '@Utils'
import { createId } from '@Utils/create-id'
import getGraphQLUserInputErrors from '@Utils/get-graphql-user-input-errors'
import useMealItemDragAndDrop from '@Utils/hooks/useMealItemDragAndDrop'
import { transformMealToMealInput } from '@Utils/transformers/meal.transformer'
import { MealItemRowMealItem } from '@Views/MealForm/components/MealItemRow/types/MealItemRowMealItem'
import { MealFormCreateMutation, MealFormCreateMutationVariables } from '@Views/MealForm/types/MealFormCreateMutation'
import { MealFormDeleteMutation, MealFormDeleteMutationVariables } from '@Views/MealForm/types/MealFormDeleteMutation'
import { MealFormMeal, MealFormMeal_items } from '@Views/MealForm/types/MealFormMeal'
import { MealFormQuery, MealFormQueryVariables } from '@Views/MealForm/types/MealFormQuery'
import { MealFormUpdateMutation, MealFormUpdateMutationVariables } from '@Views/MealForm/types/MealFormUpdateMutation'
import MealCell from '@Views/ProfileScreen/components/MealsList/components/MealCell/MealCell'
import { ProfileMealsQuery, ProfileMealsQueryVariables } from '@Views/ProfileScreen/types/ProfileMealsQuery'
import { PROFILE_MEALS_QUERY } from '@Views/ProfileScreen/useProfileTabs.hook'
import { ExecutionResult } from 'graphql'
import debounce from 'lodash/debounce'
import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react'
import RX from 'reactxp'
import SortableList from 'src/ts/modules/SortableList/index.web'
import MealItemRow from './components/MealItemRow/MealItemRow'


interface MealFormCommonProps extends RX.CommonProps {
  style?: any,
  meal?: MealFormMeal,
}

interface MealFormProps extends MealFormCommonProps {
  onCreate: (variables: MealFormCreateMutationVariables, userId: string) => Promise<ExecutionResult<MealFormCreateMutation>>,
  onUpdate: (variables: MealFormUpdateMutationVariables, userId: string) => Promise<ExecutionResult<MealFormUpdateMutation>>,
  onDelete: (variables: MealFormDeleteMutationVariables, userId: string) => Promise<ExecutionResult<MealFormDeleteMutation>>,
  fieldErrors: { [k: string]: string }

  createRecipeLoading?: boolean,
  updateRecipeLoading?: boolean,
  deleteMealLoading?: boolean,
  me: Me,

  draggingItem?: FoodPreviewMealItem,
}

interface MealFormState {
  meal: MealFormMeal,
  bulkCreate?: boolean,
  spaceIndex?: number,
}

function usePersistedState<S>(initialState: S | (() => S), key: string): [S, Dispatch<SetStateAction<S>>, () => void, string] {
  const [state, setState] = useState(initialState)

  const stringifiedState = JSON.stringify(state)

  const _saveStateToStorage = useCallback(debounce((state: S) => {
    Storage.setItem(key, JSON.stringify(state))
  }, 500), [])

  const _clearStateStorage = useCallback(() => {
    Storage.removeItem(key)
  }, [])

  const _loadStateFromStorage = useCallback(async () => {
    const stateStringified: string | undefined = await Storage.getItem(key)
    if (stateStringified) {
      setState(JSON.parse(stateStringified))
    }
  }, [])

  const count = useRef(0)
  count.current++

  useEffect(() => {
    if (count.current > 1 && state) {
      _saveStateToStorage(state)
    }
  }, [stringifiedState])

  useEffect(() => {
    _loadStateFromStorage()
  }, [])

  return [
    state,
    setState,
    _clearStateStorage,
    stringifiedState,
  ]
}

export function showDeletePrmopt(onAccept: () => void,) {
  const buttons: RX.Types.AlertButtonSpec[] = [
    {
      text: translate('Delete'),
      style: 'cancel',
      onPress: onAccept
    },
    {
      text: translate('cancel'),
      style: 'default',
    }
  ]

  RX.Alert.show(translate('areyousure?'), undefined, buttons)
}

const MealForm = (props: MealFormProps) => {
  const {
    fieldErrors,
    createRecipeLoading,
    updateRecipeLoading,
    draggingItem,
    me,
  } = props

  const { current: defaultMeal } = useRef({
    id: createId(),
    name: [],
    items: [],
    likedByUser: false,
    instanceOf: false,
    hasPermutations: false,
    likesCount: 0,
    author: me,
    timing: {
      totalTime: 0
    }
  })
  const [meal, setMeal, clearMeal, stringifiedMeal] = usePersistedState(props.meal || defaultMeal, 'MealForm:meal')
  const [bulkCreate, setBulkCreate] = useState(false)
  const [spaceIndex, setSpaceIndex] = useState<number>()
  const theme = useTheme()

  useEffect(() => {
    if (meal.items.length === 0 && props.meal) {
      setMeal(props.meal)
    }
  }, [meal.items.length, !!props.meal])

  const _onSubmit = useCallback(() => {
    const mealInput = transformMealToMealInput(meal)

    if (props.meal) {
      /**
       * On Update
       * */
      props.onUpdate({
        id: meal.id,
        meal: mealInput,
      }, me.id)
        .then(() => {
          LocationStore.navigate(props, 'back')
        })
    } else {
      /**
       * On Create
       * */
      props.onCreate({
        meal: mealInput,
        bulkCreate: bulkCreate,
      }, me.id)
        .then(() => {
          clearMeal()
          LocationStore.navigate(props, 'back')
        })
    }
  }, [stringifiedMeal])

  const _onDelete = useCallback(() => {
    if (!props.meal) return null

    showDeletePrmopt(
      () => props.onDelete({
        id: meal.id,
      }, me.id).then(() => LocationStore.navigate(props, 'back'))
    )
  }, [stringifiedMeal])

  const _onMealItemDelete = useCallback((mealItemId: string) => {
    setMeal({
      ...meal,
      items: (meal.items.map(item => {
        if (item.alternativeMealItems) {
          item.alternativeMealItems = item.alternativeMealItems.filter(alternativeMealItem => mealItemId !== alternativeMealItem.id)
        }

        if (mealItemId === item.id) {
          return null
        }

        return item
      }) as MealFormMeal_items[]).filter(Boolean)
    })
  }, [stringifiedMeal])

  const _onMealItemChange = useCallback((mealItem: MealItemRowMealItem) => {
    setMeal({
      ...meal,
      items: meal.items.map(item => {
        if (mealItem.id === item.id) {
          return mealItem
        }

        return item
      })
    })
  }, [stringifiedMeal])

  const _onMealItemCreation = useCallback((mealItem: FoodPickerMealItem, userMealId?: string, index: number = 0) => {
    const mealItems = [...meal.items]

    mealItems.splice(
      index,
      0,
      {
        ...mealItem,
        id: mealItem.id || createId(),
        alternativeMealItems: [],
        // @ts-ignore
        __typename: 'MealItem',
      }
    )
    setMeal({
      ...meal,
      items: mealItems
    })
  }, [stringifiedMeal])

  let mealItems = [...meal.items]

  if (spaceIndex !== undefined && draggingItem) {
    mealItems
      .splice(spaceIndex || 0, 0, {
        ...draggingItem,
        alternativeMealItems: [],
        hasAlternatives: false,
      })
  }

  const {
    onDrop,
    onDragOver,
    onDragLeave,
    onDragEnter,
  } = useMealItemDragAndDrop({
    setSpaceIndex: index => setSpaceIndex(index),
    onMealItemDropped: (mealItem, index) => _onMealItemCreation(mealItem, undefined, index),
    spaceIndex,
  })

  const _renderItem = useCallback((mealItem: MealFormMeal_items, index: number) => (
    <MealItemRow
      onDragEnter={onDragEnter(index)}
      mealItem={mealItem}
      onMealItemDelete={_onMealItemDelete}
      onMealItemChange={_onMealItemChange}
      editable={!props.meal}
      draggingItem={draggingItem}
    />
  ), [draggingItem, !!props.meal, _onMealItemDelete, _onMealItemChange])

  const _showFoodPicker = useCallback((onSubmit: FoodPreviewOnSubmit) => () => showFoodPicker({
    foodTypes: [FoodTypes.all, FoodTypes.food, FoodTypes.recipe],
    onDismiss: () => null,
    onSubmit,
    showOptional: true,
    submitButtonLabel: translate('Add Meal Item')
  }), [])

  return (
    <Page
      maxWidth={800}
    >
      <Navbar
        title={
          props.meal ?
            translate('Meal') :
            translate('Create Meal')
        }
      >
        {
          props.meal &&
          (
            me.id === meal.author.id ||
            me.role === Role.operator
          ) ?
            <FilledButton
              label={translate('Delete')}
              onPress={_onDelete}
              mode={FilledButton.mode.danger}
            /> :
            <FilledButton
              label={translate(translate.keys.Create)}
              onPress={_onSubmit}
              loading={createRecipeLoading || updateRecipeLoading}
              disabled={meal.items.length === 0}
            />
        }
      </Navbar>

      {/**
       * Ingredient input
       * */}
      {
        !props.meal &&
        <Input
          label={translate('Meal Items')}
          placeholder={translate('e.g. Banana')}
          onFocus={_showFoodPicker(_onMealItemCreation)}
          errorMessage={fieldErrors['items']}
        />
      }

      <RX.View
        style={RX.Styles.createViewStyle({
          backgroundColor: theme.colors.cardBg,
          borderWidth: 1,
          borderColor: theme.colors.borderLight,
          paddingVertical: Styles.values.spacing / 2,
          borderRadius: 10,
          minHeight: 81 + Styles.values.spacing,
          justifyContent: mealItems.length === 0 ? 'center' : undefined,
        }, false)}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDragEnter={meal.items.length === 0 ? onDragEnter(0) : undefined}
      >
        {
          mealItems.length > 0 &&
          <MealHeader
            meal={meal}
          />
        }

        {
          mealItems.length === 0 &&
          <Text
            translate={AppConfig.isTouchInterface() ? 'mealEmptyUseInput' : 'dragOrInput'}
            style={RX.Styles.createTextStyle({
              color: theme.colors.subtitle,
              alignSelf: 'center',
            }, false)}
          />
        }

        <SortableList
          items={mealItems}
          disabled={true}
          renderItem={_renderItem}
          onItemsChange={items => setMeal({
            ...meal,
            items,
          })}
        />
      </RX.View>

      {
        !meal &&
        me.role !== Role.user &&
        <RX.View
          style={{
            flexDirection: 'row',
            marginTop: Styles.values.spacing,
            marginBottom: Styles.values.spacing,
          }}
        >
          <Checkbox
            size={20}
            onChange={checked => setBulkCreate(checked)}
            value={bulkCreate}
          />
          <Text
            style={{ [Styles.values.marginStart]: Styles.values.spacing / 2 }}
            translate
          >Bulk create</Text>
        </RX.View>
      }
    </Page>
  )
}

MealForm.fragments = {
  meal: gql`
    fragment MealFormMeal on Meal {
      ...MealCellMeal
      instanceOf
    }

    ${MealItemRow.fragments.mealItem}
    ${MealCell.fragments.meal}
  `
}

export function useMealDelete(userId: string) {
  return useMutation<MealFormDeleteMutation, MealFormDeleteMutationVariables>(gql`
    mutation MealFormDeleteMutation ($id: ObjectId!) {
      deleteMeal(id: $id)
    }
  `, {
    update: ((proxy, { data }) => {
      const queryOptions = {
        query: PROFILE_MEALS_QUERY,
        variables: {
          userId,
        }
      }
      if (!data) return

      const profileMealsQuery = proxy.readQuery<ProfileMealsQuery, ProfileMealsQueryVariables>(queryOptions)
      if (!profileMealsQuery) return

      proxy.writeQuery<ProfileMealsQuery, ProfileMealsQueryVariables>({
        ...queryOptions,
        data: {
          meals: {
            ...profileMealsQuery.meals,
            meals: profileMealsQuery.meals.meals.filter(meal => data.deleteMeal !== meal.id)
          }
        }
      })
    })
  })
}

const MealFormContainer = (props: MealFormCommonProps) => {
  const mealId = getParam(props, 'id')

  const me = useMe()!
  const { data: mealFormQueryData, loading: mealFormQueryLoading } = useQuery<MealFormQuery, MealFormQueryVariables>(gql`
    query MealFormQuery($id: ObjectId!) {
      meal(id: $id) {
        ...MealFormMeal
      }
    }

    ${MealForm.fragments.meal}
  `, {
    variables: {
      id: mealId,
    },
    skip: !mealId,
    fetchPolicy: 'no-cache',
  })

  const [deleteMeal, { loading: deleteMealLoading, error: deleteMealError }] = useMealDelete(me.id)
  const [createMeal, { error: createRecipeError, loading: createRecipeLoading }] = useMutation<MealFormCreateMutation, MealFormCreateMutationVariables>(gql`
    mutation MealFormCreateMutation ($meal: MealInput!, $bulkCreate: Boolean) {
      createMeal(meal: $meal, bulkCreate: $bulkCreate) {
        ...MealFormMeal
      }
    }

    ${MealForm.fragments.meal}
  `)
  const [updateMeal, { error: updateRecipeError, loading: updateRecipeLoading }] = useMutation<MealFormUpdateMutation, MealFormUpdateMutationVariables>(gql`
    mutation MealFormUpdateMutation ($id: ObjectId!, $meal: MealInput!) {
      updateMeal(id: $id, data: $meal) {
        ...MealFormMeal
      }
    }

    ${MealForm.fragments.meal}
  `)

  /**
   * If this was the update page, show loading until u actually load
   * */
  if (!mealFormQueryData && mealId) return null
  if (mealFormQueryLoading) return <LoadingIndicator />

  return (
    <ServiceConsumer
      state={{
        draggingItem: () => CalendarService.getDraggingMealItem(),
      }}
    >
      {({ draggingItem }) => (
        <MealForm
          draggingItem={draggingItem}
          me={me}
          fieldErrors={getGraphQLUserInputErrors(deleteMealError || createRecipeError || updateRecipeError)}
          meal={mealFormQueryData && mealFormQueryData.meal}
          createRecipeLoading={createRecipeLoading}
          updateRecipeLoading={updateRecipeLoading}
          deleteMealLoading={deleteMealLoading}
          onCreate={(variables, userId) => createMeal({
            variables,
            update: ((proxy, { data }) => {
              if (!data) return

              const queryOptions = {
                query: PROFILE_MEALS_QUERY,
                variables: {
                  userId,
                }
              }

              const profileMealsQuery = proxy.readQuery<ProfileMealsQuery, ProfileMealsQueryVariables>(queryOptions)
              if (!profileMealsQuery) return

              proxy.writeQuery<ProfileMealsQuery, ProfileMealsQueryVariables>({
                ...queryOptions,
                data: {
                  meals: {
                    ...profileMealsQuery.meals,
                    meals: [
                      data.createMeal,
                      ...profileMealsQuery.meals.meals,
                    ]
                  }
                }
              })
            })
          })}
          onDelete={(variables, userId) => deleteMeal({
            variables,
          })}
          onUpdate={(variables, userId) => updateMeal({
            variables,
            update: ((proxy, { data }) => {
              const queryOptions = {
                query: PROFILE_MEALS_QUERY,
                variables: {
                  userId,
                }
              }
              if (!data) return

              const profileMealsQuery = proxy.readQuery<ProfileMealsQuery, ProfileMealsQueryVariables>(queryOptions)
              if (!profileMealsQuery) return

              proxy.writeQuery<ProfileMealsQuery, ProfileMealsQueryVariables>({
                ...queryOptions,
                data: {
                  meals: {
                    ...profileMealsQuery.meals,
                    meals: profileMealsQuery.meals.meals.map(meal => {
                      if (meal.id === data.updateMeal.id) {
                        return data.updateMeal
                      }

                      return meal
                    })
                  }
                }
              })
            })
          })}
        />
      )}
    </ServiceConsumer>
  )
}

export default MealFormContainer
