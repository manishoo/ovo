/*
 * create-day-input.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { DayInput } from '@Models/global-types'
import { Me_meals, Me_nutritionProfile } from '@Models/graphql/me/types/Me'
import trimTypeName from '@Utils/trim-type-name'
import { DayComponentNewDayMutation_newDay } from '@Views/CalendarScreen/components/DayComponent/types/DayComponentNewDayMutation'


const ObjectId = require('@Utils/object-id.js')

export const createDayInput = (date: Date, meals: Me_meals[], nutritionProfile: Me_nutritionProfile, optimistic?: boolean) => {
  const day = {
    meals: meals.map(userMeal => {
      const mealDate = date

      mealDate.setHours(Number(userMeal.time.split(':')[0]))
      mealDate.setMinutes(Number(userMeal.time.split(':')[1]))

      return {
        items: [],
        userMeal: trimTypeName(userMeal),
        time: mealDate.toISOString(),
        id: ObjectId(),
        ate: false,
      }
    }),
    id: ObjectId(),
    date: date.toISOString(),
    nutritionProfile: trimTypeName(nutritionProfile),
  } as DayInput

  if (optimistic) {
    // @ts-ignore
    day.__typename = 'Day'
    day.meals = day.meals.map(dayMeal => {
      // @ts-ignore
      dayMeal.__typename = 'DayMeal'
      // @ts-ignore
      dayMeal.mealId = null
      return dayMeal
    })
  }

  return day as DayComponentNewDayMutation_newDay & DayInput
}
