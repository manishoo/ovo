/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealType, LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL query operation: DayComponentMealSuggestionQuery
// ====================================================

export interface DayComponentMealSuggestionQuery_suggestDay_meals_items_recipe_thumbnail {
  url: string;
}

export interface DayComponentMealSuggestionQuery_suggestDay_meals_items_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionQuery_suggestDay_meals_items_recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number;
}

export interface DayComponentMealSuggestionQuery_suggestDay_meals_items_recipe {
  id: string;
  thumbnail: DayComponentMealSuggestionQuery_suggestDay_meals_items_recipe_thumbnail | null;
  title: DayComponentMealSuggestionQuery_suggestDay_meals_items_recipe_title[];
  timing: DayComponentMealSuggestionQuery_suggestDay_meals_items_recipe_timing;
}

export interface DayComponentMealSuggestionQuery_suggestDay_meals_items_food_thumbnail {
  url: string;
}

export interface DayComponentMealSuggestionQuery_suggestDay_meals_items_food_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionQuery_suggestDay_meals_items_food {
  id: string;
  thumbnail: DayComponentMealSuggestionQuery_suggestDay_meals_items_food_thumbnail | null;
  name: DayComponentMealSuggestionQuery_suggestDay_meals_items_food_name[];
}

export interface DayComponentMealSuggestionQuery_suggestDay_meals_items_description {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionQuery_suggestDay_meals_items_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionQuery_suggestDay_meals_items_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: DayComponentMealSuggestionQuery_suggestDay_meals_items_weight_name[];
}

export interface DayComponentMealSuggestionQuery_suggestDay_meals_items {
  id: any;
  amount: number;
  recipe: DayComponentMealSuggestionQuery_suggestDay_meals_items_recipe | null;
  food: DayComponentMealSuggestionQuery_suggestDay_meals_items_food | null;
  customUnit: string | null;
  description: DayComponentMealSuggestionQuery_suggestDay_meals_items_description[] | null;
  weight: DayComponentMealSuggestionQuery_suggestDay_meals_items_weight | null;
}

export interface DayComponentMealSuggestionQuery_suggestDay_meals {
  name: string | null;
  type: MealType;
  time: any | null;
  items: DayComponentMealSuggestionQuery_suggestDay_meals_items[];
}

export interface DayComponentMealSuggestionQuery_suggestDay {
  id: string;
  date: any;
  meals: DayComponentMealSuggestionQuery_suggestDay_meals[] | null;
}

export interface DayComponentMealSuggestionQuery {
  suggestDay: DayComponentMealSuggestionQuery_suggestDay;
}

export interface DayComponentMealSuggestionQueryVariables {
  skip: boolean;
}
