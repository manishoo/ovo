/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealAvailableTime, MealSize, LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL mutation operation: MealComponentSuggestMealMutation
// ====================================================

export interface MealComponentSuggestMealMutation_suggestMeal_userMeal {
  id: string;
  availableTime: MealAvailableTime | null;
  size: MealSize | null;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_image {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_timing {
  totalTime: number;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_thumbnail {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_thumbnail {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food_weights_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food_image {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food_thumbnail {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food_nutrition {
  calories: MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food_nutrition_calories | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food_origFoodGroups {
  id: string;
  name: MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food_origFoodGroups_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food {
  id: string;
  name: MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food_name[];
  description: MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food_description[] | null;
  weights: MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food_weights[];
  image: MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food_image | null;
  thumbnail: MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food_thumbnail | null;
  nutrition: MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food_nutrition;
  origFoodGroups: MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food_origFoodGroups[][];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_weight_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients {
  thumbnail: MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_thumbnail | null;
  name: MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_name[] | null;
  description: MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_food | null;
  weight: MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients_weight | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_author_avatar {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_author {
  id: string;
  username: string;
  avatar: MealComponentSuggestMealMutation_suggestMeal_items_recipe_author_avatar | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe_nutrition {
  calories: MealComponentSuggestMealMutation_suggestMeal_items_recipe_nutrition_calories | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_recipe {
  id: string;
  slug: string;
  title: MealComponentSuggestMealMutation_suggestMeal_items_recipe_title[];
  image: MealComponentSuggestMealMutation_suggestMeal_items_recipe_image | null;
  timing: MealComponentSuggestMealMutation_suggestMeal_items_recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealComponentSuggestMealMutation_suggestMeal_items_recipe_thumbnail | null;
  ingredients: MealComponentSuggestMealMutation_suggestMeal_items_recipe_ingredients[];
  author: MealComponentSuggestMealMutation_suggestMeal_items_recipe_author;
  nutrition: MealComponentSuggestMealMutation_suggestMeal_items_recipe_nutrition | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_food_origFoodGroups {
  id: string;
  name: MealComponentSuggestMealMutation_suggestMeal_items_food_origFoodGroups_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealComponentSuggestMealMutation_suggestMeal_items_food_weights_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_food_image {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_food_thumbnail {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_food_nutrition {
  calories: MealComponentSuggestMealMutation_suggestMeal_items_food_nutrition_calories | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_food {
  id: string;
  name: MealComponentSuggestMealMutation_suggestMeal_items_food_name[];
  description: MealComponentSuggestMealMutation_suggestMeal_items_food_description[] | null;
  origFoodGroups: MealComponentSuggestMealMutation_suggestMeal_items_food_origFoodGroups[][];
  weights: MealComponentSuggestMealMutation_suggestMeal_items_food_weights[];
  image: MealComponentSuggestMealMutation_suggestMeal_items_food_image | null;
  thumbnail: MealComponentSuggestMealMutation_suggestMeal_items_food_thumbnail | null;
  nutrition: MealComponentSuggestMealMutation_suggestMeal_items_food_nutrition;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealComponentSuggestMealMutation_suggestMeal_items_weight_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items {
  id: any;
  amount: number | null;
  recipe: MealComponentSuggestMealMutation_suggestMeal_items_recipe | null;
  food: MealComponentSuggestMealMutation_suggestMeal_items_food | null;
  customUnit: string | null;
  gramWeight: number | null;
  description: MealComponentSuggestMealMutation_suggestMeal_items_description[] | null;
  weight: MealComponentSuggestMealMutation_suggestMeal_items_weight | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal {
  id: any;
  userMeal: MealComponentSuggestMealMutation_suggestMeal_userMeal | null;
  time: any | null;
  items: MealComponentSuggestMealMutation_suggestMeal_items[];
}

export interface MealComponentSuggestMealMutation {
  suggestMeal: MealComponentSuggestMealMutation_suggestMeal;
}

export interface MealComponentSuggestMealMutationVariables {
  userMealId: string;
  date: any;
}
