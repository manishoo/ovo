/*
 * calculate-meal-nutrition.ts
 * Copyright: Ouranos Studio 2019
 */

import { calculateNutrition, scaleFoodNutrition, scaleRecipeNutrition } from '@Utils/shared/calculate-nutrition'
import { determineIfIsFood } from '@Utils/transformers/meal.transformer'
import { determineIfIsWeight } from '@Utils/transformers/recipe.transformer'
import { NutritionInfoNutrition } from '@Views/CalendarScreen/components/NutritionInfo/types/NutritionInfoNutrition'
import { Day, Day_meals } from '@Views/CalendarScreen/components/types/Day'


export function calculateMealNutrition(meal: Day_meals): Partial<NutritionInfoNutrition> {
  let totalNutrition: Partial<NutritionInfoNutrition> = {}

  /**
   * Iterate meal items and calculate their nutrition
   * and add to {totalNutrition}
   * */
  meal.items.map(mealItem => {
    if (!mealItem.item) return
    if (determineIfIsFood(mealItem.item)) {
      if (mealItem.item.nutrition && mealItem.amount) {
        if (!mealItem.amount || !mealItem.item) return

        let weightId
        let gramWeight

        if (mealItem.unit) {
          if (determineIfIsWeight(mealItem.unit)) {
            weightId = mealItem.unit.id.toString()
          } else {
            gramWeight = mealItem.unit.gramWeight
          }
        }

        calculateNutrition(scaleFoodNutrition(mealItem.item, mealItem.amount, weightId, gramWeight || undefined), totalNutrition)
      }
    } else {
      if (mealItem.item.nutrition && mealItem.amount) {
        calculateNutrition(scaleRecipeNutrition(mealItem.item, mealItem.amount), totalNutrition)
      }
    }
  })

  return totalNutrition as NutritionInfoNutrition
}

export function calculateDayNutrition(day: Day): NutritionInfoNutrition {
  let totalNutrition: Partial<NutritionInfoNutrition> = {}

  day.meals.map(meal => {
    calculateNutrition(calculateMealNutrition(meal), totalNutrition)
  })

  return totalNutrition as NutritionInfoNutrition
}
