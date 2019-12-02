/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealAvailableTime, MealSize, LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL fragment: Day
// ====================================================

export interface Day_meals_userMeal {
  id: string;
  availableTime: MealAvailableTime | null;
  size: MealSize | null;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface Day_meals_items_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_recipe_image {
  url: string;
}

export interface Day_meals_items_recipe_timing {
  totalTime: number;
}

export interface Day_meals_items_recipe_thumbnail {
  url: string;
}

export interface Day_meals_items_recipe_ingredients_thumbnail {
  url: string;
}

export interface Day_meals_items_recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_recipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_recipe_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_recipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_recipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: Day_meals_items_recipe_ingredients_food_weights_name[];
}

export interface Day_meals_items_recipe_ingredients_food_image {
  url: string;
}

export interface Day_meals_items_recipe_ingredients_food_thumbnail {
  url: string;
}

export interface Day_meals_items_recipe_ingredients_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface Day_meals_items_recipe_ingredients_food_nutrition {
  calories: Day_meals_items_recipe_ingredients_food_nutrition_calories | null;
}

export interface Day_meals_items_recipe_ingredients_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_recipe_ingredients_food_origFoodGroups {
  id: string;
  name: Day_meals_items_recipe_ingredients_food_origFoodGroups_name[];
}

export interface Day_meals_items_recipe_ingredients_food {
  id: string;
  name: Day_meals_items_recipe_ingredients_food_name[];
  description: Day_meals_items_recipe_ingredients_food_description[] | null;
  weights: Day_meals_items_recipe_ingredients_food_weights[];
  image: Day_meals_items_recipe_ingredients_food_image | null;
  thumbnail: Day_meals_items_recipe_ingredients_food_thumbnail | null;
  nutrition: Day_meals_items_recipe_ingredients_food_nutrition;
  origFoodGroups: Day_meals_items_recipe_ingredients_food_origFoodGroups[][];
}

export interface Day_meals_items_recipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_recipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: Day_meals_items_recipe_ingredients_weight_name[];
}

export interface Day_meals_items_recipe_ingredients {
  thumbnail: Day_meals_items_recipe_ingredients_thumbnail | null;
  name: Day_meals_items_recipe_ingredients_name[] | null;
  description: Day_meals_items_recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: Day_meals_items_recipe_ingredients_food | null;
  weight: Day_meals_items_recipe_ingredients_weight | null;
}

export interface Day_meals_items_recipe_author_avatar {
  url: string;
}

export interface Day_meals_items_recipe_author {
  id: string;
  username: string;
  avatar: Day_meals_items_recipe_author_avatar | null;
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
  slug: string;
  title: Day_meals_items_recipe_title[];
  image: Day_meals_items_recipe_image | null;
  timing: Day_meals_items_recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: Day_meals_items_recipe_thumbnail | null;
  ingredients: Day_meals_items_recipe_ingredients[];
  author: Day_meals_items_recipe_author;
  nutrition: Day_meals_items_recipe_nutrition | null;
}

export interface Day_meals_items_food_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_food_description {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_food_origFoodGroups {
  id: string;
  name: Day_meals_items_food_origFoodGroups_name[];
}

export interface Day_meals_items_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: Day_meals_items_food_weights_name[];
}

export interface Day_meals_items_food_image {
  url: string;
}

export interface Day_meals_items_food_thumbnail {
  url: string;
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
  name: Day_meals_items_food_name[];
  description: Day_meals_items_food_description[] | null;
  origFoodGroups: Day_meals_items_food_origFoodGroups[][];
  weights: Day_meals_items_food_weights[];
  image: Day_meals_items_food_image | null;
  thumbnail: Day_meals_items_food_thumbnail | null;
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
  amount: number | null;
  recipe: Day_meals_items_recipe | null;
  food: Day_meals_items_food | null;
  customUnit: string | null;
  gramWeight: number | null;
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
