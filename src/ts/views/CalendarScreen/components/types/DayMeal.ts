/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealAvailableTime, MealSize, LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL fragment: DayMeal
// ====================================================

export interface DayMeal_userMeal {
  id: string;
  availableTime: MealAvailableTime | null;
  size: MealSize | null;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface DayMeal_items_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_recipe_image {
  url: string;
}

export interface DayMeal_items_recipe_timing {
  totalTime: number;
}

export interface DayMeal_items_recipe_thumbnail {
  url: string;
}

export interface DayMeal_items_recipe_ingredients_thumbnail {
  url: string;
}

export interface DayMeal_items_recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_recipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_recipe_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_recipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_recipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: DayMeal_items_recipe_ingredients_food_weights_name[];
}

export interface DayMeal_items_recipe_ingredients_food_image {
  url: string;
}

export interface DayMeal_items_recipe_ingredients_food_thumbnail {
  url: string;
}

export interface DayMeal_items_recipe_ingredients_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface DayMeal_items_recipe_ingredients_food_nutrition {
  calories: DayMeal_items_recipe_ingredients_food_nutrition_calories | null;
}

export interface DayMeal_items_recipe_ingredients_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_recipe_ingredients_food_origFoodGroups {
  id: string;
  name: DayMeal_items_recipe_ingredients_food_origFoodGroups_name[];
}

export interface DayMeal_items_recipe_ingredients_food {
  id: string;
  name: DayMeal_items_recipe_ingredients_food_name[];
  description: DayMeal_items_recipe_ingredients_food_description[] | null;
  weights: DayMeal_items_recipe_ingredients_food_weights[];
  image: DayMeal_items_recipe_ingredients_food_image | null;
  thumbnail: DayMeal_items_recipe_ingredients_food_thumbnail | null;
  nutrition: DayMeal_items_recipe_ingredients_food_nutrition;
  origFoodGroups: DayMeal_items_recipe_ingredients_food_origFoodGroups[][];
}

export interface DayMeal_items_recipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_recipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: DayMeal_items_recipe_ingredients_weight_name[];
}

export interface DayMeal_items_recipe_ingredients {
  thumbnail: DayMeal_items_recipe_ingredients_thumbnail | null;
  name: DayMeal_items_recipe_ingredients_name[] | null;
  description: DayMeal_items_recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: DayMeal_items_recipe_ingredients_food | null;
  weight: DayMeal_items_recipe_ingredients_weight | null;
}

export interface DayMeal_items_recipe_author_avatar {
  url: string;
}

export interface DayMeal_items_recipe_author {
  id: string;
  username: string;
  avatar: DayMeal_items_recipe_author_avatar | null;
}

export interface DayMeal_items_recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface DayMeal_items_recipe_nutrition {
  calories: DayMeal_items_recipe_nutrition_calories | null;
}

export interface DayMeal_items_recipe {
  id: string;
  slug: string;
  title: DayMeal_items_recipe_title[];
  image: DayMeal_items_recipe_image | null;
  timing: DayMeal_items_recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: DayMeal_items_recipe_thumbnail | null;
  ingredients: DayMeal_items_recipe_ingredients[];
  author: DayMeal_items_recipe_author;
  nutrition: DayMeal_items_recipe_nutrition | null;
}

export interface DayMeal_items_food_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_food_description {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_food_origFoodGroups {
  id: string;
  name: DayMeal_items_food_origFoodGroups_name[];
}

export interface DayMeal_items_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: DayMeal_items_food_weights_name[];
}

export interface DayMeal_items_food_image {
  url: string;
}

export interface DayMeal_items_food_thumbnail {
  url: string;
}

export interface DayMeal_items_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface DayMeal_items_food_nutrition {
  calories: DayMeal_items_food_nutrition_calories | null;
}

export interface DayMeal_items_food {
  id: string;
  name: DayMeal_items_food_name[];
  description: DayMeal_items_food_description[] | null;
  origFoodGroups: DayMeal_items_food_origFoodGroups[][];
  weights: DayMeal_items_food_weights[];
  image: DayMeal_items_food_image | null;
  thumbnail: DayMeal_items_food_thumbnail | null;
  nutrition: DayMeal_items_food_nutrition;
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
  amount: number | null;
  recipe: DayMeal_items_recipe | null;
  food: DayMeal_items_food | null;
  customUnit: string | null;
  gramWeight: number | null;
  description: DayMeal_items_description[] | null;
  weight: DayMeal_items_weight | null;
}

export interface DayMeal {
  id: any;
  userMeal: DayMeal_userMeal | null;
  time: any | null;
  items: DayMeal_items[];
}
