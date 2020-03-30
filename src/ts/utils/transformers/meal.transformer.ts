/*
 * meal.transformer.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import {
  FoodPreviewMealItem_item_Food,
  FoodPreviewMealItem_item_Recipe,
  FoodPreviewMealItem_unit,
  FoodPreviewMealItem_unit_Weight
} from '@Common/FoodPickerDialog/components/types/FoodPreviewMealItem'
import { IngredientInput, MealInput, MealItemInput } from '@Models/global-types'
import { getOrigId } from '@Utils/create-id'
import trimTypeName from '@Utils/trim-type-name'
import { MealComponentDayMeal_items } from '@Views/CalendarScreen/components/DayComponent/components/MealComponent/operations/types/MealComponentDayMeal'
import { MealFormMeal, MealFormMeal_items } from '@Views/MealForm/types/MealFormMeal'


export function determineIfIsWeight(toBeDetermined: Partial<FoodPreviewMealItem_unit>): toBeDetermined is FoodPreviewMealItem_unit_Weight {
  // @ts-ignore __typename
  return toBeDetermined.__typename === 'Weight'
}

export function determineIfIsFood(toBeDetermined: Partial<FoodPreviewMealItem_item_Food | FoodPreviewMealItem_item_Recipe>): toBeDetermined is FoodPreviewMealItem_item_Food {
  // @ts-ignore __typename
  return toBeDetermined.__typename === 'Food'
}

export function transformMealItemToIngredientInput(mealItem: MealFormMeal_items | MealComponentDayMeal_items): IngredientInput {
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
  }
}

export function transformMealItemToMealItemInput(mealItem: MealFormMeal_items): MealItemInput {
  return {
    ...transformMealItemToIngredientInput(mealItem),
    alternativeMealItems: mealItem.alternativeMealItems.map(alternativeMealItem => transformMealItemToIngredientInput(alternativeMealItem))
  }
}

export function transformMealToMealInput(meal: MealFormMeal): MealInput {
  return {
    items: meal.items.map(mealItem => transformMealItemToMealItemInput(mealItem)),
  }
}
