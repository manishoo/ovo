/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealAvailableTime, MealSize, LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL mutation operation: DayComponentMealSuggestionMutation
// ====================================================

export interface DayComponentMealSuggestionMutation_suggestDay_meals_userMeal {
  id: string;
  availableTime: MealAvailableTime | null;
  size: MealSize | null;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_image {
  url: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_timing {
  totalTime: number;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_thumbnail {
  url: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_thumbnail {
  url: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food_weights_name[];
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food_image {
  url: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food_thumbnail {
  url: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food_nutrition {
  calories: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food_nutrition_calories | null;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food_origFoodGroups {
  id: string;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food_origFoodGroups_name[];
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food {
  id: string;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food_name[];
  description: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food_description[] | null;
  weights: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food_weights[];
  image: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food_image | null;
  thumbnail: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food_thumbnail | null;
  nutrition: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food_nutrition;
  origFoodGroups: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food_origFoodGroups[][];
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_weight_name[];
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients {
  thumbnail: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_thumbnail | null;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_name[] | null;
  description: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_food | null;
  weight: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients_weight | null;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_author_avatar {
  url: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_author {
  id: string;
  username: string;
  avatar: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_author_avatar | null;
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
  slug: string;
  title: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_title[];
  image: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_image | null;
  timing: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_thumbnail | null;
  ingredients: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_ingredients[];
  author: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_author;
  nutrition: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe_nutrition | null;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_food_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_food_description {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_food_origFoodGroups {
  id: string;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_food_origFoodGroups_name[];
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_food_weights_name[];
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_food_image {
  url: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_food_thumbnail {
  url: string;
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
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_food_name[];
  description: DayComponentMealSuggestionMutation_suggestDay_meals_items_food_description[] | null;
  origFoodGroups: DayComponentMealSuggestionMutation_suggestDay_meals_items_food_origFoodGroups[][];
  weights: DayComponentMealSuggestionMutation_suggestDay_meals_items_food_weights[];
  image: DayComponentMealSuggestionMutation_suggestDay_meals_items_food_image | null;
  thumbnail: DayComponentMealSuggestionMutation_suggestDay_meals_items_food_thumbnail | null;
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
  amount: number | null;
  recipe: DayComponentMealSuggestionMutation_suggestDay_meals_items_recipe | null;
  food: DayComponentMealSuggestionMutation_suggestDay_meals_items_food | null;
  customUnit: string | null;
  gramWeight: number | null;
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
