/*
 * MealComponent.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ExecutionResult, gql, useMutation } from '@apollo/client'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import { FoodPickerMealItem, FoodTypes } from '@Common/FoodPickerDialog/FoodPicker'
import { showFoodPicker } from '@Common/FoodPickerDialog/FoodPickerDialog'
import HoverView from '@Common/HoverView/HoverButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import MenuItem from '@Common/MenuItem/MenuItem'
import Text from '@Common/Text/Text'
import CalendarService from '@Services/CalendarService'
import { transformMealItemToMealItemInput } from '@Utils/transformers/meal.transformer'
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
import RX from 'reactxp'
import MealItemComponent from './MealItemComponent'
import { DayMeal, DayMeal_items } from './types/DayMeal'


interface MealComponentCommonProps {
  style?: any,
  meal: DayMeal,
  dayId?: string,
}

interface MealComponentProps extends MealComponentCommonProps {
  onMealRegenerate: () => Promise<ExecutionResult<MealComponentSuggestMealMutation>>,
  mealRegenerating?: boolean,
  logMealLoading?: boolean,
  onLogMeal: (variables: MealComponentLogMealMutationVariables, previousMeal: DayMeal) => Promise<ExecutionResult<MealComponentLogMealMutation>>,
}

const MealComponent = ({ style, mealRegenerating, dayId, meal, onMealRegenerate, logMealLoading, onLogMeal }: MealComponentProps) => {
  const _onAddMealItem = (mealItem: FoodPickerMealItem) => {
    const mealItems: DayMeal_items[] = [
      ...meal.items,
      mealItem,
    ]

    return onLogMeal({
      date: meal.time,
      userMealId: meal.userMeal.id,
      mealItems: mealItems.map(mealItem => transformMealItemToMealItemInput(mealItem))
    }, {
      ...meal,
      items: mealItems,
    })
  }

  const _onMealItemChange = (mealItem: FoodPickerMealItem) => {
    const mealItems: DayMeal_items[] = meal.items.map(item => {
      if (item.id === mealItem.id) {
        return mealItem
      }

      return item
    })

    return onLogMeal({
      date: meal.time,
      userMealId: meal.userMeal.id,
      mealItems: mealItems.map(mealItem => transformMealItemToMealItemInput(mealItem))
    }, {
      ...meal,
      items: mealItems,
    })
  }

  const _onRemoveMealItem = (mealItemId: string) => {
    const mealItems: DayMeal_items[] = meal.items.filter(p => p.id !== mealItemId)

    return onLogMeal({
      date: meal.time,
      userMealId: meal.userMeal.id,
      mealItems: mealItems.map(mealItem => transformMealItemToMealItemInput(mealItem))
    }, {
      ...meal,
      items: mealItems,
    })
  }

  const _onClearMealItems = () => {
    return onLogMeal({
      date: meal.time,
      userMealId: meal.userMeal.id,
      mealItems: []
    }, {
      ...meal,
      items: [],
    })
  }

  const _onMealRegenerate = () => {
    if (mealRegenerating) return

    return onMealRegenerate()
  }

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <HoverView
          style={{
            padding: 10,
            paddingTop: 5,
          }}
          onRenderChild={isHovering => (
            <RX.View
              style={[
                styles.container,
                {
                  backgroundColor: theme.colors.mealCardBackgroundColor,
                  borderColor: theme.colors.borderLight,
                },
                isHovering ? shadowStyle : {},
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
                        style={styles.mealCalorie}>{CalendarService.calculateMealTotalCalorie(meal)} {translate(translate.keys.Calories)}</Text>
                    </RX.View>

                    <ItemControl
                      visible={isHovering || mealRegenerating}
                      onRegenerate={_onMealRegenerate}
                      regenerating={mealRegenerating}
                      style={{
                        position: 'absolute',
                        [Styles.values.end]: Styles.values.spacing,
                      }}
                    >
                      <MenuItem
                        label={translate('Add Meal Item')}
                        onPress={() => showFoodPicker({
                          foodTypes: [FoodTypes.all, FoodTypes.food, FoodTypes.recipe],
                          onDismiss: () => null,
                          onSubmit: _onAddMealItem,
                          submitButtonLabel: translate('Add Meal Item')
                        })}
                      />
                      <MenuItem
                        label={translate('Edit Meal Settings')}
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
                        label={translate('Clear Meals Items')}
                        onPress={_onClearMealItems}
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
                    onMealItemChange={_onMealItemChange}
                    onMealItemRemove={() => _onRemoveMealItem(mealItem.id)}
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

const MealComponentContainer = (props: MealComponentCommonProps) => {
  const [logMeal, { loading: logMealLoading }] = useMutation<MealComponentLogMealMutation, MealComponentLogMealMutationVariables>(MealComponentContainer.operations.logMeal, {})
  const [suggestMeal, { loading: suggestMealLoading }] = useMutation<MealComponentSuggestMealMutation, MealComponentSuggestMealMutationVariables>(MealComponentContainer.operations.suggestMeal, {})

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
        update: (proxy, { data }) => data && props.dayId && CalendarService.setMeal(props.dayId, data.logMeal),
      })}
      onMealRegenerate={() => suggestMeal({
        variables: {
          date: props.meal.time,
          userMealId: props.meal.userMeal.id,
        },
        update: (proxy, { data }) => data && props.dayId && CalendarService.setMeal(props.dayId, data.suggestMeal),
      })}
    />
  )
}

MealComponentContainer.fragments = {
  dayMeal: gql`
    fragment DayMeal on DayMeal {
      id
      userMeal {
        ...MealSettingsMeal
      }
      time
      ate
      items {
        ...MealItem
      }
    }

    ${MealItemComponent.fragments.mealItem}
    ${MealSettingsScreen.fragments.mealSettingsMeal}
  `
}

MealComponentContainer.operations = {
  suggestMeal: gql`
    mutation MealComponentSuggestMealMutation($userMealId: String!, $date: DateTime!) {
      suggestMeal(userMealId: $userMealId, date: $date) {
        ...DayMeal
      }
    }

    ${MealComponentContainer.fragments.dayMeal}
  `,
  logMeal: gql`
    mutation MealComponentLogMealMutation($date: DateTime!, $userMealId: String!, $mealItems: [MealItemInput!]!) {
      logMeal(date: $date, userMealId: $userMealId, mealItems: $mealItems) {
        ...DayMeal
      }
    }

    ${MealComponentContainer.fragments.dayMeal}
  `,
}

export default MealComponentContainer

const shadowStyle = RX.Styles.createViewStyle({
  shadowColor: 'rgba(0, 0, 0, .3)',
  shadowRadius: 5,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: -1
})

const styles = {
  container: RX.Styles.createViewStyle({
    // @ts-ignore
    transition: 'all 0.5s',
    borderWidth: 1,
    borderRadius: 10,
    paddingBottom: Styles.values.spacing,
    paddingHorizontal: Styles.values.spacing / 2,
  }),
  mealName: RX.Styles.createTextStyle({
    fontSize: 20,
    fontWeight: 'bold',
    [Styles.values.start]: Styles.values.spacing,
    marginTop: Styles.values.spacingLarge,
    marginBottom: Styles.values.spacing / 4,
  }),
  mealCalorie: RX.Styles.createTextStyle({
    fontSize: 11,
    fontWeight: '100',
    [Styles.values.start]: Styles.values.spacing,
    marginBottom: Styles.values.spacing,
  }),
  moreButton: RX.Styles.createViewStyle({
    position: 'absolute',
    top: 28,
    [Styles.values.end]: 20,
  })
}
