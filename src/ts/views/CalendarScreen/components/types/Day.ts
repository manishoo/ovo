/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL fragment: Day
// ====================================================

export interface Day_meals_userMeal {
  id: string;
  name: string;
}

export interface Day_meals_items_recipe_thumbnail {
  url: string;
}

export interface Day_meals_items_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number;
}

export interface Day_meals_items_recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface Day_meals_items_recipe_nutrition {
  calories: Day_meals_items_recipe_nutrition_calories | null;
}

export interface Day_meals_items_recipe {
  id: string;
  thumbnail: Day_meals_items_recipe_thumbnail | null;
  title: Day_meals_items_recipe_title[];
  timing: Day_meals_items_recipe_timing;
  nutrition: Day_meals_items_recipe_nutrition | null;
}

export interface Day_meals_items_food_thumbnail {
  url: string;
}

export interface Day_meals_items_food_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface Day_meals_items_food_nutrition {
  calories: Day_meals_items_food_nutrition_calories | null;
}

export interface Day_meals_items_food {
  id: string;
  thumbnail: Day_meals_items_food_thumbnail | null;
  name: Day_meals_items_food_name[];
  nutrition: Day_meals_items_food_nutrition;
}

export interface Day_meals_items_description {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: Day_meals_items_weight_name[];
}

export interface Day_meals_items {
  id: any;
  amount: number;
  recipe: Day_meals_items_recipe | null;
  food: Day_meals_items_food | null;
  customUnit: string | null;
  description: Day_meals_items_description[] | null;
  weight: Day_meals_items_weight | null;
}

export interface Day_meals {
  id: any;
  userMeal: Day_meals_userMeal | null;
  time: any | null;
  items: Day_meals_items[];
}

export interface Day {
  id: string;
  date: any;
  meals: Day_meals[] | null;
}
