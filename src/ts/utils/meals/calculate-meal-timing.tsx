/*
 * calculate-meal-timing.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { determineIfIsFood } from '@Utils/transformers/meal.transformer'
import { MealCellMeal } from '@Views/ProfileScreen/components/MealsList/components/MealCell/types/MealCellMeal'
import { Recipe_timing } from '@Views/RecipeScreen/types/Recipe'

// FIXME imports
export default function calculateMealTiming(meal: MealCellMeal): Recipe_timing {
  const timing: Recipe_timing = {
    totalTime: 0,
    prepTime: 0,
    cookTime: 0,
  }

  meal.items.map(mealItem => {
    if (!mealItem.item) return

    if (determineIfIsFood(mealItem.item)) {
      return
    } else {
      timing.totalTime! += mealItem.item.timing.totalTime || 0
      timing.prepTime! += mealItem.item.timing.prepTime || 0
      timing.cookTime! += mealItem.item.timing.cookTime || 0
    }
  })

  return timing
}
