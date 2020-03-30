/*
 * get-default-meal-item.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import {
  FoodPreviewMealItem,
  FoodPreviewMealItem_item,
  FoodPreviewMealItem_item_Food,
  FoodPreviewMealItem_item_Recipe
} from '@Common/FoodPickerDialog/components/types/FoodPreviewMealItem'
import { createId } from '@Utils/create-id'


export function determineIfIsFood(toBeDetermined: Partial<FoodPreviewMealItem_item_Food | FoodPreviewMealItem_item_Recipe>): toBeDetermined is FoodPreviewMealItem_item_Food {
  // @ts-ignore __typename
  return toBeDetermined.__typename === 'Food'
}

export default function getDefaultMealItem(foodOrRecipe: FoodPreviewMealItem_item) {
  let unit
  let amount = 1

  if (determineIfIsFood(foodOrRecipe)) {
    const food = foodOrRecipe as FoodPreviewMealItem_item_Food

    if (food.weights.length > 0) {
      unit = food.weights[0]
    } else {
      amount = 100
    }
  } else {
  }

  return {
    isOptional: false,
    description: [{ text: 'shit', locale: 'en' }],
    id: createId(),
    amount,
    unit,
    customUnit: null,
    name: [],
    item: foodOrRecipe,
    hasAlternatives: false,
  } as FoodPreviewMealItem
}
