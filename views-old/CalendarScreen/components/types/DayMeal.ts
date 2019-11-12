/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealType, LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL fragment: DayMeal
// ====================================================

export interface DayMeal_items_recipe_thumbnail {
  url: string;
}

export interface DayMeal_items_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number;
}

export interface DayMeal_items_recipe {
  id: string;
  thumbnail: DayMeal_items_recipe_thumbnail | null;
  title: DayMeal_items_recipe_title[];
  timing: DayMeal_items_recipe_timing;
}

export interface DayMeal_items_food_thumbnail {
  url: string;
}

export interface DayMeal_items_food_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_food {
  id: string;
  thumbnail: DayMeal_items_food_thumbnail | null;
  name: DayMeal_items_food_name[];
}

export interface DayMeal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: DayMeal_items_weight_name[];
}

export interface DayMeal_items {
  id: any;
  amount: number;
  recipe: DayMeal_items_recipe | null;
  food: DayMeal_items_food | null;
  customUnit: string | null;
  description: DayMeal_items_description[] | null;
  weight: DayMeal_items_weight | null;
}

export interface DayMeal {
  name: string | null;
  type: MealType;
  time: any | null;
  items: DayMeal_items[];
}
