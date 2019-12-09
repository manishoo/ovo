/*
 * recipe.transformer.ts
 * Copyright: Ouranos Studio 2019
 */

import {
  FoodPreviewMealItem_item,
  FoodPreviewMealItem_item_Food,
  FoodPreviewMealItem_unit,
  FoodPreviewMealItem_unit_Weight
} from '@Common/FoodPickerDialog/components/types/FoodPreviewMealItem'
import { IngredientInput, InstructionInput, RecipeInput } from '@Models/global-types'
import { getOrigId } from '@Utils/create-id'
import { RecipeFormQuery_recipe } from '@Views/RecipeForm/types/RecipeFormQuery'
import { Recipe } from '@Views/RecipeScreen/types/Recipe'


export function determineIfIsWeight(toBeDetermined: Partial<FoodPreviewMealItem_unit>): toBeDetermined is FoodPreviewMealItem_unit_Weight {
  return toBeDetermined.hasOwnProperty('id')
}

function determineIfIsFood(toBeDetermined: Partial<FoodPreviewMealItem_item>): toBeDetermined is FoodPreviewMealItem_item_Food {
  return toBeDetermined.hasOwnProperty('weights')
}

export function transformRecipeToRecipeInput(recipe: RecipeFormQuery_recipe | Recipe, image?: any, thumbnail?: any): RecipeInput {
  function isRecipeFormQuery_recipe(recipe: RecipeFormQuery_recipe | Recipe): recipe is RecipeFormQuery_recipe {
    return recipe.hasOwnProperty('tags')
  }

  return {
    title: recipe.title.map(i => ({ locale: i.locale, text: i.text })),
    description: recipe.description && recipe.description.map(i => ({ locale: i.locale, text: i.text })),
    ingredients: recipe.ingredients.map(ingredient => ({
      amount: ingredient.amount,
      customUnit: ingredient.customUnit,
      isOptional: ingredient.isOptional,
      name: ingredient.name,
      id: getOrigId(ingredient.id),
      food: ingredient.item && (determineIfIsFood(ingredient.item) ? ingredient.item.id : null),
      recipe: ingredient.item && (determineIfIsFood(ingredient.item) ? null: ingredient.item.id),
      unit: ingredient.unit ? (determineIfIsWeight(ingredient.unit) ? ingredient.unit.id : 'customUnit') : 'g',
      description: ingredient.description && ingredient.description.map(i => ({ locale: i.locale, text: i.text })),
    }) as IngredientInput),
    instructions: recipe.instructions.map(instruction => ({
      text: instruction.text.map(i => ({ locale: i.locale, text: i.text })),
      step: instruction.step,
    }) as InstructionInput).filter(p => p.text.length > 0),
    serving: recipe.serving,
    timing: {
      totalTime: recipe.timing.totalTime,
      prepTime: recipe.timing.prepTime,
      cookTime: recipe.timing.cookTime,
    },
    tags: isRecipeFormQuery_recipe(recipe) ? recipe.tags : undefined,
    difficulty: recipe.difficulty,
    slug: recipe.slug,
    status: recipe.status,
    image,
    thumbnail,
  }
}
