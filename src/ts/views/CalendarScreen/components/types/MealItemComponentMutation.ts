/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL mutation operation: MealItemComponentMutation
// ====================================================

export interface MealItemComponentMutation_suggestMealItem_recipe_thumbnail {
  url: string;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_nutrition {
  calories: MealItemComponentMutation_suggestMealItem_recipe_nutrition_calories | null;
}

export interface MealItemComponentMutation_suggestMealItem_recipe {
  id: string;
  thumbnail: MealItemComponentMutation_suggestMealItem_recipe_thumbnail | null;
  title: MealItemComponentMutation_suggestMealItem_recipe_title[];
  timing: MealItemComponentMutation_suggestMealItem_recipe_timing;
  nutrition: MealItemComponentMutation_suggestMealItem_recipe_nutrition | null;
}

export interface MealItemComponentMutation_suggestMealItem_food_thumbnail {
  url: string;
}

export interface MealItemComponentMutation_suggestMealItem_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_food_nutrition {
  calories: MealItemComponentMutation_suggestMealItem_food_nutrition_calories | null;
}

export interface MealItemComponentMutation_suggestMealItem_food {
  id: string;
  thumbnail: MealItemComponentMutation_suggestMealItem_food_thumbnail | null;
  name: MealItemComponentMutation_suggestMealItem_food_name[];
  nutrition: MealItemComponentMutation_suggestMealItem_food_nutrition;
}

export interface MealItemComponentMutation_suggestMealItem_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealItemComponentMutation_suggestMealItem_weight_name[];
}

export interface MealItemComponentMutation_suggestMealItem {
  id: any;
  amount: number;
  recipe: MealItemComponentMutation_suggestMealItem_recipe | null;
  food: MealItemComponentMutation_suggestMealItem_food | null;
  customUnit: string | null;
  description: MealItemComponentMutation_suggestMealItem_description[] | null;
  weight: MealItemComponentMutation_suggestMealItem_weight | null;
}

export interface MealItemComponentMutation {
  suggestMealItem: MealItemComponentMutation_suggestMealItem;
}

export interface MealItemComponentMutationVariables {
  userMealId: string;
  mealItemId: string;
  date: any;
}
