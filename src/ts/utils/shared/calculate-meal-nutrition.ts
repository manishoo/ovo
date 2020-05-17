/*
 * calculate-meal-nutrition.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { Nutrition } from '@Models/types/Nutrition'
import { calculateNutrition, scaleFoodNutrition, scaleRecipeNutrition } from '@Utils/shared/calculate-nutrition'
import { determineIfIsFood } from '@Utils/transformers/meal.transformer'
import { determineIfIsWeight } from '@Utils/transformers/recipe.transformer'
import { DayComponentDay } from '@Views/CalendarScreen/components/DayComponent/types/DayComponentDay'


export function calculateMealItemNutrition(mealItem: any): Nutrition | null {
  /**
   * Iterate meal items and calculate their nutrition
   * and add to {totalNutrition}
   * */
  if (!mealItem.item) return null
  if (determineIfIsFood(mealItem.item)) {
    if (mealItem.item.nutrition) {
      if (!mealItem.item) return null

      let weightId
      let gramWeight

      if (mealItem.unit) {
        if (determineIfIsWeight(mealItem.unit)) {
          weightId = mealItem.unit.id.toString()
        } else {
          gramWeight = mealItem.unit.gramWeight
        }
      }

      return scaleFoodNutrition(mealItem.item, mealItem.amount || 0, weightId, gramWeight || undefined)
    }
  } else {
    if (mealItem.item.nutrition) {
      return scaleRecipeNutrition(mealItem.item, mealItem.amount || 0)
    }
  }

  return null
}

export function calculateMealItemsNutrition(mealItems: any[]): Nutrition {
  let totalNutrition: Partial<Nutrition> = {}

  /**
   * Iterate meal items and calculate their nutrition
   * and add to {totalNutrition}
   * */
  mealItems.map(mealItem => {
    const mealItemNutrition = calculateMealItemNutrition(mealItem)
    if (!mealItemNutrition) return

    calculateNutrition(mealItemNutrition, totalNutrition)
  })

  return totalNutrition as Nutrition
}

export function calculateDayNutrition(day: DayComponentDay): Nutrition {
  let totalNutrition: Partial<Nutrition> = {}

  day.meals.map(meal => {
    calculateNutrition(calculateMealItemsNutrition(meal.items), totalNutrition)
  })

  return totalNutrition as Nutrition
}
