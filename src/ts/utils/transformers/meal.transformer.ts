/*
 * meal.transformer.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import {
  FoodPreviewMealItem_item,
  FoodPreviewMealItem_item_Food,
  FoodPreviewMealItem_unit,
  FoodPreviewMealItem_unit_Weight
} from '@Common/FoodPickerDialog/components/types/FoodPreviewMealItem'
import { MealInput, MealItemInput } from '@Models/global-types'
import { getOrigId } from '@Utils/create-id'
import trimTypeName from '@Utils/trim-type-name'
import { DayMeal_items } from '@Views/CalendarScreen/components/types/DayMeal'
import { MealFormMeal, MealFormMeal_items } from '@Views/MealForm/types/MealFormMeal'


export function determineIfIsWeight(toBeDetermined: Partial<FoodPreviewMealItem_unit>): toBeDetermined is FoodPreviewMealItem_unit_Weight {
  // @ts-ignore __typename
  return toBeDetermined.__typename === 'Weight'
}

export function determineIfIsFood(toBeDetermined: Partial<FoodPreviewMealItem_item>): toBeDetermined is FoodPreviewMealItem_item_Food {
  // @ts-ignore __typename
  return toBeDetermined.__typename === 'Food'
}

export function transformMealItemToMealItemInput(mealItem: MealFormMeal_items | DayMeal_items): MealItemInput {
  function determineIfMealItemIsMealFormMeal_items(mealItem: MealFormMeal_items | DayMeal_items): mealItem is MealFormMeal_items {
    return mealItem.hasOwnProperty('alternativeMealItems')
  }

  return {
    name: [],
    food: mealItem.item && (determineIfIsFood(mealItem.item) ? mealItem.item.id : null),
    recipe: mealItem.item && (determineIfIsFood(mealItem.item) ? null : mealItem.item.id),
    unit: mealItem.unit ? (determineIfIsWeight(mealItem.unit) ? mealItem.unit.id : 'customUnit') : 'g',
    // description: mealItem.description && mealItem.description.map(t => trimTypeName(t)),
    customUnit: mealItem.customUnit ? {
      name: mealItem.customUnit.name.map(t => trimTypeName(t)),
      gramWeight: mealItem.customUnit.gramWeight,
    } : undefined,
    id: getOrigId(mealItem.id),
    amount: mealItem.amount,
    alternativeMealItems: determineIfMealItemIsMealFormMeal_items(mealItem) ? mealItem.alternativeMealItems.map(alternativeMealItem => ({
      name: [],
      food: alternativeMealItem.item && (determineIfIsFood(alternativeMealItem.item) ? alternativeMealItem.item.id : null),
      recipe: alternativeMealItem.item && (determineIfIsFood(alternativeMealItem.item) ? null : alternativeMealItem.item.id),
      unit: alternativeMealItem.unit ? (determineIfIsWeight(alternativeMealItem.unit) ? alternativeMealItem.unit.id : 'customUnit') : 'g',
      // description: alternativeMealItem.description && alternativeMealItem.description.map(t => trimTypeName(t)),
      customUnit: alternativeMealItem.customUnit ? {
        name: alternativeMealItem.customUnit.name.map(t => trimTypeName(t)),
        gramWeight: alternativeMealItem.customUnit.gramWeight,
      } : undefined,
      id: getOrigId(alternativeMealItem.id),
      amount: alternativeMealItem.amount,
    })) : []
  }
}

export function transformMealToMealInput(meal: MealFormMeal): MealInput {
  return {
    items: meal.items.map(mealItem => transformMealItemToMealItemInput(mealItem)),
  }
}
