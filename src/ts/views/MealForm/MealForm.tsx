/*
 * MealForm.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useMutation, useQuery } from '@apollo/react-hooks'
import Styles from '@App/Styles'
import CenterAlignedPageView from '@Common/CenterAlignedPageView'
import Checkbox from '@Common/Checkbox/Checkbox'
import FilledButton from '@Common/FilledButton/FilledButton'
import { showFoodModal } from '@Common/FoodDialog/FoodDialog'
import { SelectFoodMealItem } from '@Common/FoodDialog/SelectFood'
import Input from '@Common/Input/Input'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Navbar from '@Common/Navbar/Navbar'
import Text from '@Common/Text/Text'
import { FoodTypes } from '@Models/FoodModels'
import { MealInput, Role } from '@Models/global-types'
import LocationStore from '@Services/LocationStore'
import UserStore from '@Services/UserStore'
import { getParam } from '@Utils'
import getGraphQLUserInputErrors from '@Utils/get-graphql-user-input-errors'
import trimTypeName from '@Utils/trim-type-name'
import MealItemRow from '@Views/MealForm/components/MealItemRow/MealItemRow'
import { MealFormCreateMutation, MealFormCreateMutationVariables } from '@Views/MealForm/types/MealFormCreateMutation'
import { MealFormDeleteMutation, MealFormDeleteMutationVariables } from '@Views/MealForm/types/MealFormDeleteMutation'
import { MealFormQuery, MealFormQueryVariables } from '@Views/MealForm/types/MealFormQuery'
import { MealFormUpdateMutation, MealFormUpdateMutationVariables } from '@Views/MealForm/types/MealFormUpdateMutation'
import { PROFILE_MEALS_QUERY } from '@Views/ProfileScreen/components/ProfileMeals/ProfileMeals'
import { ProfileMealsFragments } from '@Views/ProfileScreen/components/ProfileMeals/ProfileMealsFragments'
import {
  MyMeal as RealMyMeal,
  MyMeal_items,
  MyMeal_items_alternativeMealItems
} from '@Views/ProfileScreen/components/ProfileMeals/types/MyMeal'
import {
  ProfileMealsQuery,
  ProfileMealsQueryVariables
} from '@Views/ProfileScreen/components/ProfileMeals/types/ProfileMealsQuery'
import { Me } from '@Views/Register/types/Me'
import gql from 'graphql-tag'
import { ExecutionResult } from 'react-apollo'
import RX from 'reactxp'
import { ComponentBase } from 'resub'


export interface MyMealItem extends Omit<MyMeal_items, 'alternativeMealItems'> {
  id: string
  alternativeMealItems?: (MyMeal_items_alternativeMealItems & { id: string })[]
}

export interface MyMeal extends Omit<RealMyMeal, 'items'> {
  items: MyMealItem[];
}

interface MealFormProps {
  style?: any,
  onCreate: (variables: MealFormCreateMutationVariables, userId: string) => Promise<ExecutionResult<MealFormCreateMutation>>,
  onUpdate: (variables: MealFormUpdateMutationVariables, userId: string) => Promise<ExecutionResult<MealFormUpdateMutation>>,
  onDelete: (variables: MealFormDeleteMutationVariables, userId: string) => Promise<ExecutionResult<MealFormDeleteMutation>>,
  fieldErrors: { [k: string]: string }
  meal?: RealMyMeal
}

interface MealFormState {
  meal: MealInput,
  mealItems: MyMealItem[],

  me?: Me,
  bulkCreate?: boolean,
}

class MealForm extends ComponentBase<MealFormProps, MealFormState> {
  constructor(props) {
    super(props)

    if (props.meal) {
      this.state = {
        me: UserStore.getUser(),
        mealItems: props.meal.items.map(mealItem => ({
          amount: mealItem.amount,
          food: mealItem.food,
          recipe: mealItem.recipe,
          weight: mealItem.weight,
          alternativeMealItems: mealItem.alternativeMealItems.map(altMealItem => ({
            ...altMealItem,
            id: String(Math.random()),
          })),
          customUnit: mealItem.customUnit,
          gramWeight: mealItem.gramWeight,
          description: mealItem.description,
          id: String(Math.random()),
        })),
        meal: {
          name: props.meal.name,
          description: props.meal.description,
          items: [],
        }
      }
    } else {
      this.state = {
        me: UserStore.getUser(),
        mealItems: [],
        meal: {
          name: [],
          description: [],
          items: [],
        }
      }
    }
  }

  public componentWillMount(): void {
    if (!this.props.meal) {
      this._loadStateFromStorage()
    }
  }

  public render() {
    const { fieldErrors } = this.props

    return (
      <CenterAlignedPageView>
        <Navbar title={translate('Create Meal')} />

        {
          this.props.meal &&
          (
            this.state.me.id === this.props.meal.author.id ||
            this.state.me.role === Role.operator
          ) &&
          <RX.View style={{ flexDirection: 'row', paddingBottom: Styles.values.spacing }}>
            <FilledButton
              label={translate('Delete')}
              onPress={this._onDelete}
              mode={FilledButton.mode.danger}
            />
          </RX.View>
        }

        {/*<IntlInput
            label={translate('Name')}
            translations={meal.name}
            onTranslationsChange={translations => this.setState(ps => ({
              meal: {
                ...ps.meal,
                name: translations
              }
            }))}
          />*/}

        {/**
         * Ingredient input
         * */}
        <Input
          label={translate('Meal Items')}
          placeholder={translate('e.g. Banana')}
          onFocus={() => showFoodModal({
            autoFocus: true,
            foodTypes: [FoodTypes.food, FoodTypes.recipe],
            onDismiss: () => null,
            onSubmit: this._onMealItemCreation,
          })}
          errorMessage={fieldErrors['items']}
          style={{ marginBottom: Styles.values.spacing * 2 }}
        />

        {
          this.state.mealItems.map(mealItem => (
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

        <FilledButton label={translate(translate.keys.Submit)} onPress={this._onSubmit} />
      </CenterAlignedPageView>
    )
  }

  protected _buildState(props: MealFormProps, initialBuild: boolean): Partial<MealFormState> | undefined {
    // if (props.meal && this.state.mealItems.length === 0) {
    //   return {
    //     mealItems: props.meal.items.map(mealItem => ({
    //       amount: mealItem.amount,
    //       food: mealItem.food,
    //       recipe: mealItem.recipe,
    //       weight: mealItem.weight,
    //       alternativeMealItems: mealItem.alternativeMealItems.map(altMealItem => ({
    //         ...altMealItem,
    //         id: String(Math.random()),
    //       })),
    //       customUnit: mealItem.customUnit,
    //       gramWeight: mealItem.gramWeight,
    //       description: mealItem.description,
    //       id: String(Math.random()),
    //     })),
    //   }
    // }

    return {
      me: UserStore.getUser(),
    }
  }

  private _getMeal = (): MealInput => {
    const { meal, mealItems } = this.state

    return {
      ...meal,
      items: mealItems.map(mealItem => ({
        food: mealItem.food ? mealItem.food.id : undefined,
        recipe: mealItem.recipe ? mealItem.recipe.id : undefined,
        amount: mealItem.amount,
        description: mealItem.description.map(t => trimTypeName(t)),
        weight: mealItem.weight ? mealItem.weight.id : undefined,
        customUnit: mealItem.customUnit,
        gramWeight: mealItem.gramWeight,
        alternativeMealItems: mealItem.alternativeMealItems.map(alternativeMealItem => ({
          food: alternativeMealItem.food ? alternativeMealItem.food.id : undefined,
          recipe: alternativeMealItem.recipe ? alternativeMealItem.recipe.id : undefined,
          amount: alternativeMealItem.amount,
          weight: alternativeMealItem.weight ? alternativeMealItem.weight.id : undefined,
        }))
      }))
    } as MealInput
  }

  private _onSubmit = () => {
    if (this.props.meal) {
      /**
       * On Update
       * */
      this.props.onUpdate({
        id: this.props.meal.id,
        meal: this._getMeal(),
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
        meal: this._getMeal(),
        bulkCreate: this.state.bulkCreate,
      }, this.state.me.id)
        .then(() => {
          this._clearStateStorage()
          LocationStore.navigate(this.props, 'back')
        })
    }
  }

  private _onDelete = () => {
    RX.Alert.show(translate('areyousure?'), undefined, [
      {
        text: translate('Delete'),
        style: 'cancel',
        onPress: () => this.props.onDelete({
          bulkDelete: false,
          id: this.props.meal.id,
        }, this.state.me.id).then(() => LocationStore.navigate(this.props, 'back'))
      },
      {
        text: translate('Delete All Instances'),
        style: 'cancel',
        onPress: () => this.props.onDelete({
          bulkDelete: true,
          id: this.props.meal.id,
        }, this.state.me.id).then(() => LocationStore.navigate(this.props, 'back'))
      }, {
        text: translate('cancel'),
        style: 'default',
      }
    ])
  }

  private _onMealItemDelete = (mealItemId: string) => {
    this.setState(ps => ({
      mealItems: ps.mealItems.map(item => {
        item.alternativeMealItems = item.alternativeMealItems.filter(alternativeMealItem => mealItemId !== alternativeMealItem.id)

        if (mealItemId === item.id) {
          return null
        }

        return item
      }).filter(Boolean)
    }), this._saveStateToStorage)
  }

  private _onMealItemChange = (mealItem: MyMealItem) => {
    this.setState(ps => ({
      mealItems: ps.mealItems.map(item => {
        if (mealItem.id === item.id) {
          mealItem.alternativeMealItems.map(alternativeMealItem => {
            if (mealItem.id === alternativeMealItem.id) {
              return mealItem
            }

            return alternativeMealItem
          })

          return mealItem
        }

        return item
      })
    }), this._saveStateToStorage)
  }

  private _onMealItemCreation = (mealItem: SelectFoodMealItem) => {
    this.setState(ps => ({
      mealItems: [
        {
          amount: mealItem.amount,
          description: mealItem.description,
          food: mealItem.food,
          recipe: mealItem.recipe,
          weight: mealItem.weight,
          customUnit: mealItem.customUnit,
          gramWeight: mealItem.gramWeight,
          alternativeMealItems: [],
          id: mealItem.id || String(Math.random()),
        },
        ...ps.mealItems,
      ]
    }), this._saveStateToStorage)
  }

  private _saveStateToStorage = () => {
    const { meal, mealItems } = this.state

    RX.Storage.setItem('_MealForm_meal', JSON.stringify(meal))
    RX.Storage.setItem('_MealForm_mealItems', JSON.stringify(mealItems))
  }

  private _clearStateStorage = () => {
    RX.Storage.removeItem('_MealForm_meal')
    RX.Storage.removeItem('_MealForm_mealItems')
  }

  private _loadStateFromStorage = async () => {
    const mealStringified = await RX.Storage.getItem('_MealForm_meal')
    const mealItemsStringified = await RX.Storage.getItem('_MealForm_mealItems')

    let meal
    let mealItems

    if (mealStringified) {
      meal = JSON.parse(mealStringified)
    }
    if (mealItemsStringified) {
      mealItems = JSON.parse(mealItemsStringified)
    }

    if (meal && mealItems) {
      this.setState({
        meal,
        mealItems,
      })
    }
  }
}

const MealFormContainer = (props: MealFormProps) => {
  const { data } = useQuery<MealFormQuery, MealFormQueryVariables>(gql`
    query MealFormQuery($id: ObjectId!) {
      meal(id: $id) {
        ...MyMeal
      }
    }

    ${ProfileMealsFragments.myMeal}
  `, {
    variables: {
      id: getParam(props, 'id'),
    },
    skip: !getParam(props, 'id'),
    fetchPolicy: 'cache-and-network',
  })

  const [createMeal, { error: createRecipeError }] = useMutation<MealFormCreateMutation, MealFormCreateMutationVariables>(gql`
    mutation MealFormCreateMutation ($meal: MealInput!, $bulkCreate: Boolean) {
      createMeal(meal: $meal, bulkCreate: $bulkCreate) {
        ...MyMeal
      }
    }

    ${ProfileMealsFragments.myMeal}
  `)
  const [updateMeal, { error: updateRecipeError }] = useMutation<MealFormUpdateMutation, MealFormUpdateMutationVariables>(gql`
    mutation MealFormUpdateMutation ($id: ObjectId!, $meal: MealInput!) {
      updateMeal(id: $id, data: $meal) {
        ...MyMeal
      }
    }

    ${ProfileMealsFragments.myMeal}
  `)
  const [deleteMeal, { error: deleteMealError }] = useMutation<MealFormDeleteMutation, MealFormDeleteMutationVariables>(gql`
    mutation MealFormDeleteMutation ($id: ObjectId!, $bulkDelete: Boolean) {
      deleteMeal(id: $id, bulkDelete: $bulkDelete)
    }
  `)

  return (
    <MealForm
      fieldErrors={getGraphQLUserInputErrors(deleteMealError || createRecipeError || updateRecipeError)}
      meal={data && data.meal}
      onCreate={(variables, userId) => createMeal({
        variables,
        update: ((proxy, { data: { createMeal } }) => {
          const queryOptions = {
            query: PROFILE_MEALS_QUERY,
            variables: {
              userId,
            }
          }

          const { meals } = proxy.readQuery<ProfileMealsQuery, ProfileMealsQueryVariables>(queryOptions)

          proxy.writeQuery<ProfileMealsQuery, ProfileMealsQueryVariables>({
            ...queryOptions,
            data: {
              meals: {
                ...meals,
                meals: [
                  ...createMeal,
                  ...meals.meals,
                ]
              }
            }
          })
        })
      })}
      onDelete={(variables, userId) => deleteMeal({
        variables,
        update: ((proxy, { data: { deleteMeal } }) => {
          const queryOptions = {
            query: PROFILE_MEALS_QUERY,
            variables: {
              userId,
            }
          }

          const { meals } = proxy.readQuery<ProfileMealsQuery, ProfileMealsQueryVariables>(queryOptions)

          proxy.writeQuery<ProfileMealsQuery, ProfileMealsQueryVariables>({
            ...queryOptions,
            data: {
              meals: {
                ...meals,
                meals: meals.meals.filter(meal => !deleteMeal.find(id => id === meal.id))
              }
            }
          })
        })
      })}
      onUpdate={(variables, userId) => updateMeal({
        variables,
        update: ((proxy, { data: { updateMeal } }) => {
          const queryOptions = {
            query: PROFILE_MEALS_QUERY,
            variables: {
              userId,
            }
          }

          const { meals } = proxy.readQuery<ProfileMealsQuery, ProfileMealsQueryVariables>(queryOptions)

          proxy.writeQuery<ProfileMealsQuery, ProfileMealsQueryVariables>({
            ...queryOptions,
            data: {
              meals: {
                ...meals,
                meals: meals.meals.map(meal => {
                  if (meal.id === updateMeal.id) {
                    return updateMeal
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
