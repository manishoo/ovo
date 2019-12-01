/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL mutation operation: MealComponentMutation
// ====================================================

export interface MealComponentMutation_suggestMeal_userMeal {
  id: string;
  name: string;
}

export interface MealComponentMutation_suggestMeal_items_recipe_thumbnail {
  url: string;
}

export interface MealComponentMutation_suggestMeal_items_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentMutation_suggestMeal_items_recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number;
}

export interface MealComponentMutation_suggestMeal_items_recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealComponentMutation_suggestMeal_items_recipe_nutrition {
  calories: MealComponentMutation_suggestMeal_items_recipe_nutrition_calories | null;
}

export interface MealComponentMutation_suggestMeal_items_recipe {
  id: string;
  thumbnail: MealComponentMutation_suggestMeal_items_recipe_thumbnail | null;
  title: MealComponentMutation_suggestMeal_items_recipe_title[];
  timing: MealComponentMutation_suggestMeal_items_recipe_timing;
  nutrition: MealComponentMutation_suggestMeal_items_recipe_nutrition | null;
}

export interface MealComponentMutation_suggestMeal_items_food_thumbnail {
  url: string;
}

export interface MealComponentMutation_suggestMeal_items_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentMutation_suggestMeal_items_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealComponentMutation_suggestMeal_items_food_nutrition {
  calories: MealComponentMutation_suggestMeal_items_food_nutrition_calories | null;
}

export interface MealComponentMutation_suggestMeal_items_food {
  id: string;
  thumbnail: MealComponentMutation_suggestMeal_items_food_thumbnail | null;
  name: MealComponentMutation_suggestMeal_items_food_name[];
  nutrition: MealComponentMutation_suggestMeal_items_food_nutrition;
}

export interface MealComponentMutation_suggestMeal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentMutation_suggestMeal_items_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentMutation_suggestMeal_items_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealComponentMutation_suggestMeal_items_weight_name[];
}

export interface MealComponentMutation_suggestMeal_items {
  id: any;
  amount: number;
  recipe: MealComponentMutation_suggestMeal_items_recipe | null;
  food: MealComponentMutation_suggestMeal_items_food | null;
  customUnit: string | null;
  description: MealComponentMutation_suggestMeal_items_description[] | null;
  weight: MealComponentMutation_suggestMeal_items_weight | null;
}

export interface MealComponentMutation_suggestMeal {
  id: any;
  userMeal: MealComponentMutation_suggestMeal_userMeal | null;
  time: any | null;
  items: MealComponentMutation_suggestMeal_items[];
}

export interface MealComponentMutation {
  suggestMeal: MealComponentMutation_suggestMeal;
}

export interface MealComponentMutationVariables {
  userMealId: string;
  date: any;
}
