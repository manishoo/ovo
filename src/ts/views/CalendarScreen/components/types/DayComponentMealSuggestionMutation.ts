/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL mutation operation: DayComponentMealSuggestionMutation
// ====================================================

export interface DayComponentMealSuggestionMutation_suggestDay_meals_userMeal {
  id: string;
  name: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_thumbnail {
  url: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_nutrition {
  calories: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_nutrition_calories | null;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe {
  id: string;
  thumbnail: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_thumbnail | null;
  title: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_title[];
  timing: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_timing;
  nutrition: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_nutrition | null;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_food_thumbnail {
  url: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_food_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_food_nutrition {
  calories: DayComponentMealSuggestionMutation_suggestDay_meals_items_food_nutrition_calories | null;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_food {
  id: string;
  thumbnail: DayComponentMealSuggestionMutation_suggestDay_meals_items_food_thumbnail | null;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_food_name[];
  nutrition: DayComponentMealSuggestionMutation_suggestDay_meals_items_food_nutrition;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_description {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_weight_name[];
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items {
  id: any;
  amount: number;
  recipe: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe | null;
  food: DayComponentMealSuggestionMutation_suggestDay_meals_items_food | null;
  customUnit: string | null;
  description: DayComponentMealSuggestionMutation_suggestDay_meals_items_description[] | null;
  weight: DayComponentMealSuggestionMutation_suggestDay_meals_items_weight | null;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals {
  id: any;
  userMeal: DayComponentMealSuggestionMutation_suggestDay_meals_userMeal | null;
  time: any | null;
  items: DayComponentMealSuggestionMutation_suggestDay_meals_items[];
}

export interface DayComponentMealSuggestionMutation_suggestDay {
  id: string;
  date: any;
  meals: DayComponentMealSuggestionMutation_suggestDay_meals[] | null;
}

export interface DayComponentMealSuggestionMutation {
  suggestDay: DayComponentMealSuggestionMutation_suggestDay;
}

export interface DayComponentMealSuggestionMutationVariables {
  date: any;
}
