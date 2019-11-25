/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL fragment: MealItem
// ====================================================

export interface MealItem_recipe_thumbnail {
  url: string;
}

export interface MealItem_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number;
}

export interface MealItem_recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItem_recipe_nutrition {
  calories: MealItem_recipe_nutrition_calories | null;
}

export interface MealItem_recipe {
  id: string;
  thumbnail: MealItem_recipe_thumbnail | null;
  title: MealItem_recipe_title[];
  timing: MealItem_recipe_timing;
  nutrition: MealItem_recipe_nutrition | null;
}

export interface MealItem_food_thumbnail {
  url: string;
}

export interface MealItem_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItem_food_nutrition {
  calories: MealItem_food_nutrition_calories | null;
}

export interface MealItem_food {
  id: string;
  thumbnail: MealItem_food_thumbnail | null;
  name: MealItem_food_name[];
  nutrition: MealItem_food_nutrition;
}

export interface MealItem_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealItem_weight_name[];
}

export interface MealItem {
  id: any;
  amount: number;
  recipe: MealItem_recipe | null;
  food: MealItem_food | null;
  customUnit: string | null;
  description: MealItem_description[] | null;
  weight: MealItem_weight | null;
}
