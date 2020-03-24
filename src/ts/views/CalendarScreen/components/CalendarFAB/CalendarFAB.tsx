/*
 * CalendarFAB.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { useMutation } from '@apollo/client'
import FilledButton from '@Common/FilledButton/FilledButton'
import { FoodTypes } from '@Common/FoodPickerDialog/FoodPicker'
import { showFoodPicker } from '@Common/FoodPickerDialog/FoodPickerDialog'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import CalendarService from '@Services/CalendarService'
import { transformMealItemToMealItemInput } from '@Utils/transformers/meal.transformer'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import RX from 'reactxp'
import { DayComponentDay } from '../DayComponent/types/DayComponentDay'
import MealComponent from '../MealComponent/MealComponent'
import {
  MealComponentLogMealMutation,
  MealComponentLogMealMutationVariables
} from '../MealComponent/types/MealComponentLogMealMutation'


interface CalendarFABProps {
  style?: any,
  day: DayComponentDay
}

const CalendarFAB = ({ style, day }: CalendarFABProps) => {
  const now = new Date()
  let date = new Date()
  let closestMealDiff = Infinity
  let closestMealId: string | undefined = undefined

  const _options = day.meals.map(meal => {
    const diff = Math.abs(differenceInMinutes(now, new Date(meal.time)))

    if (diff < closestMealDiff) {
      closestMealDiff = diff
      closestMealId = meal.userMeal.id
    }

    return {
      text: meal.userMeal.name,
      value: meal.userMeal.id
    }
  })
  const _defaultValue = closestMealId

  // log meal
  const [logMeal, { loading: logMealLoading }] = useMutation<MealComponentLogMealMutation, MealComponentLogMealMutationVariables>(MealComponent.operations.logMeal, {})

  return (
    <FilledButton
      label={<Text style={{ fontSize: 40, bottom: 3 }}>+</Text>}
      onPress={() => showFoodPicker({
        foodTypes: [FoodTypes.all, FoodTypes.food, FoodTypes.recipe],
        onDismiss: () => null,
        onSubmit: (mealItem, userMealId) => logMeal({
          variables: {
            userMealId: userMealId!,
            date,
            mealItems: [
              ...day.meals.find(dayMeal => dayMeal.userMeal.id === userMealId)!.items.map(transformMealItemToMealItemInput),
              transformMealItemToMealItemInput(mealItem),
            ]
          },
          optimisticResponse: () => ({
            logMeal: {
              ...day.meals.find(dayMeal => dayMeal.userMeal.id === userMealId)!,
              items: [
                ...day.meals.find(dayMeal => dayMeal.userMeal.id === userMealId)!.items,
                {
                  ...mealItem,
                  // @ts-ignore
                  __typename: 'MealItem'
                }
              ]
            }
          }),
          update: (proxy, { data }) => data && day.id && CalendarService.setMeal(proxy, data.logMeal),
        }),
        selectProps: {
          defaultValue: _defaultValue,
          options: _options,
        },
        submitButtonLabel: translate('Log Meal')
      })}
      containerStyle={style}
      style={styles.fab}
    />
  )
}

export default CalendarFAB

const styles = {
  fab: RX.Styles.createButtonStyle({
    width: 70,
    height: 70,
    borderRadius: 35,
  })
}
