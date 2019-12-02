/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealItemInput, MealAvailableTime, MealSize, LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL mutation operation: MealComponentLogMealMutation
// ====================================================

export interface MealComponentLogMealMutation_logMeal_userMeal {
  id: string;
  availableTime: MealAvailableTime | null;
  size: MealSize | null;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_image {
  url: string;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_timing {
  totalTime: number;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_thumbnail {
  url: string;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_ingredients_thumbnail {
  url: string;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food_weights_name[];
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food_image {
  url: string;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food_thumbnail {
  url: string;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food_nutrition {
  calories: MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food_nutrition_calories | null;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food_origFoodGroups {
  id: string;
  name: MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food_origFoodGroups_name[];
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food {
  id: string;
  name: MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food_name[];
  description: MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food_description[] | null;
  weights: MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food_weights[];
  image: MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food_image | null;
  thumbnail: MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food_thumbnail | null;
  nutrition: MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food_nutrition;
  origFoodGroups: MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food_origFoodGroups[][];
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealComponentLogMealMutation_logMeal_items_recipe_ingredients_weight_name[];
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_ingredients {
  thumbnail: MealComponentLogMealMutation_logMeal_items_recipe_ingredients_thumbnail | null;
  name: MealComponentLogMealMutation_logMeal_items_recipe_ingredients_name[] | null;
  description: MealComponentLogMealMutation_logMeal_items_recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: MealComponentLogMealMutation_logMeal_items_recipe_ingredients_food | null;
  weight: MealComponentLogMealMutation_logMeal_items_recipe_ingredients_weight | null;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_author_avatar {
  url: string;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_author {
  id: string;
  username: string;
  avatar: MealComponentLogMealMutation_logMeal_items_recipe_author_avatar | null;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe_nutrition {
  calories: MealComponentLogMealMutation_logMeal_items_recipe_nutrition_calories | null;
}

export interface MealComponentLogMealMutation_logMeal_items_recipe {
  id: string;
  slug: string;
  title: MealComponentLogMealMutation_logMeal_items_recipe_title[];
  image: MealComponentLogMealMutation_logMeal_items_recipe_image | null;
  timing: MealComponentLogMealMutation_logMeal_items_recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealComponentLogMealMutation_logMeal_items_recipe_thumbnail | null;
  ingredients: MealComponentLogMealMutation_logMeal_items_recipe_ingredients[];
  author: MealComponentLogMealMutation_logMeal_items_recipe_author;
  nutrition: MealComponentLogMealMutation_logMeal_items_recipe_nutrition | null;
}

export interface MealComponentLogMealMutation_logMeal_items_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_food_origFoodGroups {
  id: string;
  name: MealComponentLogMealMutation_logMeal_items_food_origFoodGroups_name[];
}

export interface MealComponentLogMealMutation_logMeal_items_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealComponentLogMealMutation_logMeal_items_food_weights_name[];
}

export interface MealComponentLogMealMutation_logMeal_items_food_image {
  url: string;
}

export interface MealComponentLogMealMutation_logMeal_items_food_thumbnail {
  url: string;
}

export interface MealComponentLogMealMutation_logMeal_items_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealComponentLogMealMutation_logMeal_items_food_nutrition {
  calories: MealComponentLogMealMutation_logMeal_items_food_nutrition_calories | null;
}

export interface MealComponentLogMealMutation_logMeal_items_food {
  id: string;
  name: MealComponentLogMealMutation_logMeal_items_food_name[];
  description: MealComponentLogMealMutation_logMeal_items_food_description[] | null;
  origFoodGroups: MealComponentLogMealMutation_logMeal_items_food_origFoodGroups[][];
  weights: MealComponentLogMealMutation_logMeal_items_food_weights[];
  image: MealComponentLogMealMutation_logMeal_items_food_image | null;
  thumbnail: MealComponentLogMealMutation_logMeal_items_food_thumbnail | null;
  nutrition: MealComponentLogMealMutation_logMeal_items_food_nutrition;
}

export interface MealComponentLogMealMutation_logMeal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentLogMealMutation_logMeal_items_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealComponentLogMealMutation_logMeal_items_weight_name[];
}

export interface MealComponentLogMealMutation_logMeal_items {
  id: any;
  amount: number | null;
  recipe: MealComponentLogMealMutation_logMeal_items_recipe | null;
  food: MealComponentLogMealMutation_logMeal_items_food | null;
  customUnit: string | null;
  gramWeight: number | null;
  description: MealComponentLogMealMutation_logMeal_items_description[] | null;
  weight: MealComponentLogMealMutation_logMeal_items_weight | null;
}

export interface MealComponentLogMealMutation_logMeal {
  id: any;
  userMeal: MealComponentLogMealMutation_logMeal_userMeal | null;
  time: any | null;
  items: MealComponentLogMealMutation_logMeal_items[];
}

export interface MealComponentLogMealMutation {
  logMeal: MealComponentLogMealMutation_logMeal;
}

export interface MealComponentLogMealMutationVariables {
  date: any;
  userMealId: string;
  mealItems: MealItemInput[];
}
