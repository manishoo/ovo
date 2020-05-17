/*
 * create-day-input.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { DayInput } from '@Models/global-types'
import { Me } from '@Models/graphql/me/types/Me'
import { createId } from '@Utils/create-id'
import trimTypeName from '@Utils/trim-type-name'
import { DayComponentNewDayMutation_newDay } from '@Views/CalendarScreen/components/DayComponent/types/DayComponentNewDayMutation'


const ObjectId = require('@Utils/object-id.js')

export const createDayInput = (me: Me, date?: Date, optimistic?: boolean, planId?: string) => {
  const day = {
    meals: me.meals.map(userMeal => {
      const mealDate = new Date() // FIXME

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
    // id: createId(),
    date: date ? date.toISOString() : undefined,
    planId: planId || me.plan,
  } as DayInput

  if (optimistic) {
    // @ts-ignore
    day.__typename = 'Day'
    day.id = createId()
    day.meals = day.meals.map(dayMeal => {
      dayMeal.userMeal = {
        ...dayMeal.userMeal,
        // @ts-ignore
        __typename: 'UserMeal',
      }

      // @ts-ignore
      dayMeal.__typename = 'DayMeal'
      // @ts-ignore
      dayMeal.mealId = null
      return dayMeal
    })
  }

  return day as DayComponentNewDayMutation_newDay & DayInput
}
