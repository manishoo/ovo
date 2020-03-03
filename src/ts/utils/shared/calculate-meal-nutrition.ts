/*
 * calculate-meal-nutrition.ts
 * Copyright: Ouranos Studio 2019
 */

import { Nutrition } from '@Models/types/Nutrition'
import { calculateNutrition, scaleFoodNutrition, scaleRecipeNutrition } from '@Utils/shared/calculate-nutrition'
import { determineIfIsFood } from '@Utils/transformers/meal.transformer'
import { determineIfIsWeight } from '@Utils/transformers/recipe.transformer'
import { Day, Day_meals_items } from '@Views/CalendarScreen/components/types/Day'


export function calculateMealItemNutrition(mealItem: Day_meals_items): Nutrition {
  /**
   * Iterate meal items and calculate their nutrition
   * and add to {totalNutrition}
   * */
  if (!mealItem.item) throw new Error('something went wrong')
  if (determineIfIsFood(mealItem.item)) {
    if (mealItem.item.nutrition && mealItem.amount) {
      if (!mealItem.amount || !mealItem.item) throw new Error('something went wrong')

      let weightId
      let gramWeight

      if (mealItem.unit) {
        if (determineIfIsWeight(mealItem.unit)) {
          weightId = mealItem.unit.id.toString()
        } else {
          gramWeight = mealItem.unit.gramWeight
        }
      }

      return scaleFoodNutrition(mealItem.item, mealItem.amount, weightId, gramWeight || undefined)
    }
  } else {
    if (mealItem.item.nutrition && mealItem.amount) {
      return scaleRecipeNutrition(mealItem.item, mealItem.amount)
    }
  }

  console.log(mealItem)
  throw new Error('something went wrong')
}

export function calculateMealItemsNutrition(mealItems: Day_meals_items[]): Nutrition {
  let totalNutrition: Partial<Nutrition> = {}

  /**
   * Iterate meal items and calculate their nutrition
   * and add to {totalNutrition}
   * */
  mealItems.map(mealItem => {
    calculateNutrition(calculateMealItemNutrition(mealItem), totalNutrition)
  })

  return totalNutrition as Nutrition
}

export function calculateDayNutrition(day: Day): Nutrition {
  let totalNutrition: Partial<Nutrition> = {}

  day.meals.map(meal => {
    calculateNutrition(calculateMealItemsNutrition(meal.items), totalNutrition)
  })

  return totalNutrition as Nutrition
}
