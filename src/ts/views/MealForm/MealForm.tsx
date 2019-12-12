/*
 * MealForm.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useMutation, useQuery } from '@apollo/react-hooks'
import Styles from '@App/Styles'
import CenterAlignedPageView from '@Common/CenterAlignedPageView'
import Checkbox from '@Common/Checkbox/Checkbox'
import FilledButton from '@Common/FilledButton/FilledButton'
import { FoodPickerMealItem, FoodTypes } from '@Common/FoodPickerDialog/FoodPicker'
import { showFoodPicker } from '@Common/FoodPickerDialog/FoodPickerDialog'
import Input from '@Common/Input/Input'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Navbar from '@Common/Navbar/Navbar'
import Text from '@Common/Text/Text'
import { Role } from '@Models/global-types'
import LocationStore from '@Services/LocationStore'
import { Me } from '@Services/types/Me'
import UserStore from '@Services/UserService'
import { getParam } from '@Utils'
import { createId } from '@Utils/create-id'
import getGraphQLUserInputErrors from '@Utils/get-graphql-user-input-errors'
import { transformMealToMealInput } from '@Utils/transformers/meal.transformer'
import MealItemRow from '@Views/MealForm/components/MealItemRow/MealItemRow'
import { MealItemRowMealItem } from '@Views/MealForm/components/MealItemRow/types/MealItemRowMealItem'
import { MealFormCreateMutation, MealFormCreateMutationVariables } from '@Views/MealForm/types/MealFormCreateMutation'
import { MealFormDeleteMutation, MealFormDeleteMutationVariables } from '@Views/MealForm/types/MealFormDeleteMutation'
import { MealFormMeal, MealFormMeal_items } from '@Views/MealForm/types/MealFormMeal'
import { MealFormQuery, MealFormQueryVariables } from '@Views/MealForm/types/MealFormQuery'
import { MealFormUpdateMutation, MealFormUpdateMutationVariables } from '@Views/MealForm/types/MealFormUpdateMutation'
import { ProfileMealsQuery, ProfileMealsQueryVariables } from '@Views/ProfileScreen/types/ProfileMealsQuery'
import { PROFILE_MEALS_QUERY } from '@Views/ProfileScreen/useProfileTabs.hook'
import gql from 'graphql-tag'
import { ExecutionResult } from 'react-apollo'
import RX from 'reactxp'
import { ComponentBase } from 'resub'


interface MealFormProps {
  style?: any,
  onCreate: (variables: MealFormCreateMutationVariables, userId: string) => Promise<ExecutionResult<MealFormCreateMutation>>,
  onUpdate: (variables: MealFormUpdateMutationVariables, userId: string) => Promise<ExecutionResult<MealFormUpdateMutation>>,
  onDelete: (variables: MealFormDeleteMutationVariables, userId: string) => Promise<ExecutionResult<MealFormDeleteMutation>>,
  fieldErrors: { [k: string]: string }
  meal?: MealFormMeal,

  createRecipeLoading?: boolean,
  updateRecipeLoading?: boolean,
  deleteMealLoading?: boolean,
}

interface MealFormState {
  meal: MealFormMeal,
  me: Me,
  bulkCreate?: boolean,
}

class MealForm extends ComponentBase<MealFormProps, MealFormState> {
  constructor(props: MealFormProps) {
    super(props)

    const me = UserStore.getUser()!

    if (props.meal) {
      this.state = {
        me,
        meal: props.meal,
      }
    } else {
      this.state = {
        me,
        meal: {
          id: createId(),
          name: [],
          items: [],
          likedByUser: false,
          instanceOf: false,
          likesCount: 0,
          author: me,
          timing: {
            totalTime: 0
          }
        }
      }
    }
  }

  public componentWillReceiveProps(nextProps: Readonly<MealFormProps>, nextContext: any): void {
    if (this.state.meal.items.length === 0 && nextProps.meal) {
      this.setState({
        meal: nextProps.meal,
      })
    }
  }

  public componentWillMount(): void {
    if (!this.props.meal) {
      this._loadStateFromStorage()
    }
  }

  public render() {
    const { fieldErrors, createRecipeLoading, updateRecipeLoading } = this.props
    const { meal } = this.state

    return (
      <CenterAlignedPageView>
        <Navbar
          title={
            this.props.meal ?
              translate('Update Meal') :
              translate('Create Meal')
          }
        >
          {
            this.props.meal &&
            (
              this.state.me.id === this.props.meal.author.id ||
              this.state.me.role === Role.operator
            ) &&
            <FilledButton
              label={translate('Delete')}
              onPress={this._onDelete}
              mode={FilledButton.mode.danger}
            />
          }
        </Navbar>

        {/**
         * Ingredient input
         * */}
        <Input
          label={translate('Meal Items')}
          placeholder={translate('e.g. Banana')}
          onFocus={() => showFoodPicker({
            autoFocus: true,
            foodTypes: [FoodTypes.food, FoodTypes.recipe],
            onDismiss: () => null,
            onSubmit: this._onMealItemCreation,
          })}
          errorMessage={fieldErrors['items']}
          style={{ marginBottom: Styles.values.spacing * 2 }}
        />

        {
          meal.items.map(mealItem => (
            <MealItemRow
              key={mealItem.id}
              mealItem={mealItem}
              onMealItemChange={this._onMealItemChange}
              onMealItemDelete={this._onMealItemDelete}
            />
          ))
        }

        {
          !this.props.meal &&
          this.state.me.role !== Role.user &&
          <RX.View
            style={{
              flexDirection: 'row',
              marginTop: Styles.values.spacing,
              marginBottom: Styles.values.spacing,
            }}
          >
            <Checkbox
              size={20}
              onChange={checked => this.setState({ bulkCreate: checked })}
              value={this.state.bulkCreate}
            />
            <Text
              style={{ [Styles.values.marginStart]: Styles.values.spacing / 2 }}
              translate
            >Bulk create</Text>
          </RX.View>
        }

        <FilledButton
          label={translate(translate.keys.Submit)}
          onPress={this._onSubmit}
          suffix={(
            (createRecipeLoading || updateRecipeLoading) &&
            <LoadingIndicator size={17} />
          )}
        />
      </CenterAlignedPageView>
    )
  }

  private _onSubmit = () => {
    const mealInput = transformMealToMealInput(this.state.meal)

    if (this.props.meal) {
      /**
       * On Update
       * */
      this.props.onUpdate({
        id: this.props.meal.id,
        meal: mealInput,
      }, this.state.me.id)
        .then(() => {
          this._clearStateStorage()
          LocationStore.navigate(this.props, 'back')
        })
    } else {
      /**
       * On Create
       * */
      this.props.onCreate({
        meal: mealInput,
        bulkCreate: this.state.bulkCreate,
      }, this.state.me.id)
        .then(() => {
          this._clearStateStorage()
          LocationStore.navigate(this.props, 'back')
        })
    }
  }

  private _onDelete = () => {
    const meal = this.props.meal
    if (!meal) return null

    const buttons: RX.Types.AlertButtonSpec[] = [
      {
        text: translate('Delete'),
        style: 'cancel',
        onPress: () => this.props.onDelete({
          bulkDelete: false,
          id: meal.id,
        }, this.state.me.id).then(() => LocationStore.navigate(this.props, 'back'))
      },
      {
        text: translate('cancel'),
        style: 'default',
      }
    ]

    if (meal.instanceOf) {
      buttons.splice(1, 0, {
        text: translate('Delete All Instances'),
        style: 'cancel',
        onPress: () => this.props.onDelete({
          bulkDelete: true,
          id: meal.id,
        }, this.state.me.id).then(() => LocationStore.navigate(this.props, 'back'))
      })
    }

    RX.Alert.show(translate('areyousure?'), undefined, buttons)
  }

  private _onMealItemDelete = (mealItemId: string) => {
    this.setState(ps => ({
      meal: {
        ...ps.meal,
        items: (ps.meal.items.map(item => {
          if (item.alternativeMealItems) {
            item.alternativeMealItems = item.alternativeMealItems.filter(alternativeMealItem => mealItemId !== alternativeMealItem.id)
          }

          if (mealItemId === item.id) {
            return null
          }

          return item
        }) as MealFormMeal_items[]).filter(Boolean)
      }
    }), this._saveStateToStorage)
  }

  private _onMealItemChange = (mealItem: MealItemRowMealItem) => {
    this.setState(ps => ({
      meal: {
        ...ps.meal,
        items: ps.meal.items.map(item => {
          if (mealItem.id === item.id) {
            return mealItem
          }

          // if (item.alternativeMealItems) {
          //   item.alternativeMealItems = item.alternativeMealItems.map(alternativeMealItem => {
          //     if (mealItem.id === alternativeMealItem.id) {
          //       return mealItem
          //     }
          //
          //     return alternativeMealItem
          //   })
          // }

          return item
        })
      }
    }), this._saveStateToStorage)
  }

  private _onMealItemCreation = (mealItem: FoodPickerMealItem) => {
    this.setState(ps => ({
      meal: {
        ...ps.meal,
        items: [
          {
            ...mealItem,
            alternativeMealItems: [],
            id: mealItem.id || createId(),
          },
          ...ps.meal.items,
        ]
      },
    }), this._saveStateToStorage)
  }

  private _saveStateToStorage = () => {
    const { meal } = this.state

    RX.Storage.setItem('_MealForm_meal', JSON.stringify(meal))
  }

  private _clearStateStorage = () => {
    RX.Storage.removeItem('_MealForm_meal')
    RX.Storage.removeItem('_MealForm_mealItems')
  }

  private _loadStateFromStorage = async () => {
    const mealStringified = await RX.Storage.getItem('_MealForm_meal')

    let meal

    if (mealStringified) {
      meal = JSON.parse(mealStringified)
    }

    if (meal) {
      this.setState({
        meal,
      })
    }
  }

  static fragments = {
    meal: gql`
      fragment MealFormMeal on Meal {
        id
        name {text locale}
        likedByUser
        likesCount
        items {
          ...MealItemRowMealItem
        }
        instanceOf
        author {
          id
          username
          avatar {url}
        }
        timing {
          totalTime
        }
      }

      ${MealItemRow.fragments.mealItem}
    `

  }
}

const MealFormContainer = (props: MealFormProps) => {
  const mealId = getParam(props, 'id')

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
  const [deleteMeal, { error: deleteMealError, loading: deleteMealLoading }] = useMutation<MealFormDeleteMutation, MealFormDeleteMutationVariables>(gql`
    mutation MealFormDeleteMutation ($id: ObjectId!, $bulkDelete: Boolean) {
      deleteMeal(id: $id, bulkDelete: $bulkDelete)
    }
  `)

  /**
   * If this was the update page, show loading until u actually load
   * */
  if (!mealFormQueryData && mealId) return null
  if (mealFormQueryLoading) return <LoadingIndicator />

  return (
    <MealForm
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
                  ...data.createMeal,
                  ...profileMealsQuery.meals.meals,
                ]
              }
            }
          })
        })
      })}
      onDelete={(variables, userId) => deleteMeal({
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
                meals: profileMealsQuery.meals.meals.filter(meal => !data.deleteMeal.find(id => id === meal.id))
              }
            }
          })
        })
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
  )
}

export default MealFormContainer
