/*
 * Meal.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useMutation } from '@apollo/react-hooks'
import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import { FoodPickerMealItem } from '@Common/FoodPickerDialog/FoodPicker'
import { showFoodPicker } from '@Common/FoodPickerDialog/FoodPickerDialog'
import HoverView from '@Common/HoverView/HoverButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import MenuItem from '@Common/MenuItem/MenuItem'
import Text from '@Common/Text/Text'
import { FoodTypes } from '@Models/FoodModels'
import CalendarService from '@Services/CalendarService'
import { getOrigId } from '@Utils/create-id'
import trimTypeName from '@Utils/trim-type-name'
import ItemControl from '@Views/CalendarScreen/components/ItemControl'
import {
  MealComponentLogMealMutation,
  MealComponentLogMealMutationVariables
} from '@Views/CalendarScreen/components/types/MealComponentLogMealMutation'
import {
  MealComponentSuggestMealMutation,
  MealComponentSuggestMealMutationVariables
} from '@Views/CalendarScreen/components/types/MealComponentSuggestMealMutation'
import MealSettingsScreen from '@Views/MealSettingsScreen/MealSettingsScreen'
import gql from 'graphql-tag'
import { ExecutionResult } from 'react-apollo'
import RX from 'reactxp'
import MealItemComponent from './MealItemComponent'
import { DayMeal, DayMeal_items } from './types/DayMeal'


interface MealComponentCommonProps {
  style?: any,
  meal: DayMeal,
  dayId: string,
}

interface MealComponentProps extends MealComponentCommonProps {
  onMealRegenerate: () => Promise<ExecutionResult<MealComponentSuggestMealMutation>>,
  mealRegenerating?: boolean,
  logMealLoading?: boolean,
  onLogMeal: (variables: MealComponentLogMealMutationVariables, previousMeal: DayMeal) => Promise<ExecutionResult<MealComponentLogMealMutation>>,
}

// interface MealComponentState {
//   meal: DayMeal,
// }

class MealComponent extends RX.Component<MealComponentProps> {
  static fragments = {
    dayMeal: gql`
      fragment DayMeal on DayMeal {
        id
        userMeal {
          ...MealSettingsMeal
        }
        time
        items {
          ...MealItem
        }
      }

      ${MealItemComponent.fragments.mealItem}
      ${MealSettingsScreen.fragments.mealSettingsMeal}
    `
  }
  static operations = {
    suggestMeal: gql`
      mutation MealComponentSuggestMealMutation($userMealId: String!, $date: DateTime!) {
        suggestMeal(userMealId: $userMealId, date: $date) {
          ...DayMeal
        }
      }

      ${MealComponent.fragments.dayMeal}
    `,
    logMeal: gql`
      mutation MealComponentLogMealMutation($date: DateTime!, $userMealId: String!, $mealItems: [MealItemInput!]!) {
        logMeal(date: $date, userMealId: $userMealId, mealItems: $mealItems) {
          ...DayMeal
        }
      }

      ${MealComponent.fragments.dayMeal}
    `,
  }

  public render() {
    const { style, mealRegenerating, dayId, meal } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <HoverView
            onRenderChild={isHovering => (
              <RX.View
                style={[
                  styles.container,
                  {
                    backgroundColor: theme.colors.mealCardBackgroundColor,
                    borderColor: theme.colors.borderLight,
                  },
                  isHovering ? RX.Styles.createViewStyle(Styles.values.defaultShadow) : {},
                  style,
                ]}
              >
                <HoverView
                  onRenderChild={isHovering => (
                    <RX.View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <RX.View
                        style={{ flex: 1 }}
                      >
                        <Text style={styles.mealName}>{meal.userMeal.name}</Text>
                        <Text
                          style={styles.mealCalorie}>{this._calculateMealNutrition()} {translate(translate.keys.Calories)}</Text>
                      </RX.View>

                      <ItemControl
                        visible={isHovering || mealRegenerating}
                        onRegenerate={this._onMealRegenerate}
                        regenerating={mealRegenerating}
                        style={{
                          position: 'absolute',
                          [Styles.values.end]: Styles.values.spacing,
                        }}
                      >
                        <MenuItem
                          label={'Add Meal Item'}
                          onPress={() => showFoodPicker({
                            autoFocus: true,
                            foodTypes: [FoodTypes.food, FoodTypes.recipe],
                            onDismiss: () => null,
                            onSubmit: this._onAddMealItem,
                          })}
                        />
                        <MenuItem
                          label={'Edit Meal Settings'}
                          onPress={() => MealSettingsScreen.showModal({
                            theme,
                            meal: meal.userMeal,
                            submitMustSave: true,
                            onSubmit: meal => {
                              //
                            }
                          })}
                        />
                        <MenuItem
                          label={'Clear Meals Items'}
                          onPress={this._onClearMealItems}
                        />
                      </ItemControl>
                    </RX.View>
                  )}
                />

                {
                  meal.items.map(mealItem => (
                    <MealItemComponent
                      meal={meal}
                      dayId={dayId}
                      mealItem={mealItem}
                      onMealItemRemove={() => this._onRemoveMealItem(mealItem.id)}
                    />
                  ))
                }
              </RX.View>
            )}
          />
        )}
      </ThemeContext.Consumer>
    )
  }

  private _getMealItemInputFromMealItem = (mealItem) => {
    return {
      food: mealItem.food ? mealItem.food.id : undefined,
      recipe: mealItem.recipe ? mealItem.recipe.id : undefined,
      amount: mealItem.amount,
      id: getOrigId(mealItem.id),
      // alternativeMealItems:
      weight: mealItem.weight ? mealItem.weight.id : undefined,
      customUnit: mealItem.customUnit,
      description: mealItem.description ? mealItem.description.map(t => trimTypeName(t)) : null,
      gramWeight: mealItem.gramWeight,
    }
  }

  private _onAddMealItem = (mealItem: FoodPickerMealItem) => {
    const mealItems: DayMeal_items[] = [
      ...this.props.meal.items,
      {
        id: mealItem.id,
        amount: mealItem.amount,
        recipe: mealItem.recipe,
        food: mealItem.food,
        customUnit: mealItem.customUnit,
        gramWeight: mealItem.gramWeight,
        description: mealItem.description,
        weight: mealItem.weight,
      },
    ]

    this.props.onLogMeal({
      date: this.props.meal.time,
      userMealId: this.props.meal.userMeal.id,
      mealItems: mealItems.map(this._getMealItemInputFromMealItem)
    }, {
      ...this.props.meal,
      items: mealItems,
    })
  }

  private _onRemoveMealItem = (mealItemId: string) => {
    const mealItems: DayMeal_items[] = this.props.meal.items.filter(p => p.id !== mealItemId)

    this.props.onLogMeal({
      date: this.props.meal.time,
      userMealId: this.props.meal.userMeal.id,
      mealItems: mealItems.map(this._getMealItemInputFromMealItem)
    }, {
      ...this.props.meal,
      items: mealItems,
    })
  }

  private _onClearMealItems = () => {
    this.props.onLogMeal({
      date: this.props.meal.time,
      userMealId: this.props.meal.userMeal.id,
      mealItems: []
    }, {
      ...this.props.meal,
      items: [],
    })
  }

  private _onMealRegenerate = () => {
    if (this.props.mealRegenerating) return

    this.props.onMealRegenerate()
  }

  private _calculateMealNutrition = () => {
    let totalCalorie = 0
    let unit = AppConfig.calorieMeasurementUnit

    this.props.meal.items.forEach(item => {
      if (!item.food.nutrition.calories) return

      if (item.food) {
        if (item.food.nutrition.calories.unit == unit) {
          totalCalorie += item.food.nutrition.calories.amount
        }
      } else if (item.recipe) {
        if (item.recipe.nutrition.calories.unit == unit) {
          totalCalorie += item.recipe.nutrition.calories.amount
        }
      }
    })
    return totalCalorie
  }
}

const MealComponentContainer = (props: MealComponentCommonProps) => {
  const [logMeal, { loading: logMealLoading, data: logMealData }] = useMutation<MealComponentLogMealMutation, MealComponentLogMealMutationVariables>(MealComponent.operations.logMeal, {})
  const [suggestMeal, { loading: suggestMealLoading, data: suggestMealData }] = useMutation<MealComponentSuggestMealMutation, MealComponentSuggestMealMutationVariables>(MealComponent.operations.suggestMeal, {})

  return (
    <MealComponent
      {...props}
      logMealLoading={logMealLoading}
      mealRegenerating={suggestMealLoading}
      onLogMeal={(variables, mealOptimisticResponse) => logMeal({
        variables,
        optimisticResponse: () => ({
          logMeal: mealOptimisticResponse
        }),
        update: (proxy, { data: { logMeal: logMealData } }) => CalendarService.setMeal(props.dayId, logMealData),
      })}
      onMealRegenerate={() => suggestMeal({
        variables: {
          date: props.meal.time,
          userMealId: props.meal.userMeal.id,
        },
        update: (proxy, { data: { suggestMeal: suggestMealData } }) => CalendarService.setMeal(props.dayId, suggestMealData),
      })}
    />
  )
}

MealComponentContainer.operations = MealComponent.operations
MealComponentContainer.fragments = MealComponent.fragments

export default MealComponentContainer

const styles = {
  container: RX.Styles.createViewStyle({
    // @ts-ignore
    transition: 'all 0.5s',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: Styles.values.spacing,
  }),
  mealName: RX.Styles.createTextStyle({
    fontSize: 20,
    fontWeight: '100',
    [Styles.values.start]: Styles.values.spacingLarge,
    marginTop: Styles.values.spacingLarge,
    marginBottom: Styles.values.spacing / 2,
  }),
  mealCalorie: RX.Styles.createTextStyle({
    fontSize: 11,
    fontWeight: '100',
    [Styles.values.start]: Styles.values.spacingLarge,
    marginBottom: Styles.values.spacing,
  }),
  moreButton: RX.Styles.createViewStyle({
    position: 'absolute',
    top: 28,
    [Styles.values.end]: 20,
  })
}
