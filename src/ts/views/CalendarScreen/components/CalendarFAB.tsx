/*
 * CalendarFAB.tsx
 * Copyright: Ouranos Studio 2020
 */

import { useMutation } from '@apollo/react-hooks'
import Styles from '@App/Styles'
import FilledButton from '@Common/FilledButton/FilledButton'
import { FoodTypes } from '@Common/FoodPickerDialog/FoodPicker'
import { showFoodPicker } from '@Common/FoodPickerDialog/FoodPickerDialog'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Select, { Option } from '@Common/Select/Select'
import Text from '@Common/Text/Text'
import CalendarService from '@Services/CalendarService'
import { transformMealItemToMealItemInput } from '@Utils/transformers/meal.transformer'
import {
  MealComponentLogMealMutation,
  MealComponentLogMealMutationVariables
} from '@Views/CalendarScreen/components/types/MealComponentLogMealMutation'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
import { useState } from 'react'
import RX from 'reactxp'
import { MealComponent } from './MealComponent'
import { Day } from './types/Day'


interface CalendarFABProps {
  style?: any,
  day: Day
}

const CalendarFAB = ({ style, day }: CalendarFABProps) => {
  const now = new Date()
  let date = new Date()
  let closestMealDiff = Infinity
  let closestMealId: string | undefined = undefined

  const _options = day.meals.map(meal => {
    date = setHours(date, Number(meal.userMeal.time.split(':')[0]))
    date = setMinutes(date, Number(meal.userMeal.time.split(':')[1]))

    const diff = Math.abs(differenceInMinutes(now, date))

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
                mealItem
              ]
            }
          }),
          update: (proxy, { data }) => data && day.id && CalendarService.setMeal(day.id, data.logMeal),
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
