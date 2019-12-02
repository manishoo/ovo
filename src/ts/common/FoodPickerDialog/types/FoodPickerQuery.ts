/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL query operation: FoodPickerQuery
// ====================================================

export interface FoodPickerQuery_foods_foods_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_foods_foods_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_foods_foods_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_foods_foods_origFoodGroups {
  id: string;
  name: FoodPickerQuery_foods_foods_origFoodGroups_name[];
}

export interface FoodPickerQuery_foods_foods_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_foods_foods_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: FoodPickerQuery_foods_foods_weights_name[];
}

export interface FoodPickerQuery_foods_foods_image {
  url: string;
}

export interface FoodPickerQuery_foods_foods_thumbnail {
  url: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_calories {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition {
  calories: FoodPickerQuery_foods_foods_nutrition_calories | null;
}

export interface FoodPickerQuery_foods_foods {
  id: string;
  name: FoodPickerQuery_foods_foods_name[];
  description: FoodPickerQuery_foods_foods_description[] | null;
  origFoodGroups: FoodPickerQuery_foods_foods_origFoodGroups[][];
  weights: FoodPickerQuery_foods_foods_weights[];
  image: FoodPickerQuery_foods_foods_image | null;
  thumbnail: FoodPickerQuery_foods_foods_thumbnail | null;
  nutrition: FoodPickerQuery_foods_foods_nutrition;
}

export interface FoodPickerQuery_foods {
  foods: FoodPickerQuery_foods_foods[];
}

export interface FoodPickerQuery_recipes_recipes_title {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_recipes_recipes_image {
  url: string;
}

export interface FoodPickerQuery_recipes_recipes_timing {
  totalTime: number;
}

export interface FoodPickerQuery_recipes_recipes_thumbnail {
  url: string;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_thumbnail {
  url: string;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: FoodPickerQuery_recipes_recipes_ingredients_food_weights_name[];
}

export interface FoodPickerQuery_recipes_recipes_ingredients_food_image {
  url: string;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_food_thumbnail {
  url: string;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_food_nutrition {
  calories: FoodPickerQuery_recipes_recipes_ingredients_food_nutrition_calories | null;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_food_origFoodGroups {
  id: string;
  name: FoodPickerQuery_recipes_recipes_ingredients_food_origFoodGroups_name[];
}

export interface FoodPickerQuery_recipes_recipes_ingredients_food {
  id: string;
  name: FoodPickerQuery_recipes_recipes_ingredients_food_name[];
  description: FoodPickerQuery_recipes_recipes_ingredients_food_description[] | null;
  weights: FoodPickerQuery_recipes_recipes_ingredients_food_weights[];
  image: FoodPickerQuery_recipes_recipes_ingredients_food_image | null;
  thumbnail: FoodPickerQuery_recipes_recipes_ingredients_food_thumbnail | null;
  nutrition: FoodPickerQuery_recipes_recipes_ingredients_food_nutrition;
  origFoodGroups: FoodPickerQuery_recipes_recipes_ingredients_food_origFoodGroups[][];
}

export interface FoodPickerQuery_recipes_recipes_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: FoodPickerQuery_recipes_recipes_ingredients_weight_name[];
}

export interface FoodPickerQuery_recipes_recipes_ingredients {
  thumbnail: FoodPickerQuery_recipes_recipes_ingredients_thumbnail | null;
  name: FoodPickerQuery_recipes_recipes_ingredients_name[] | null;
  description: FoodPickerQuery_recipes_recipes_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: FoodPickerQuery_recipes_recipes_ingredients_food | null;
  weight: FoodPickerQuery_recipes_recipes_ingredients_weight | null;
}

export interface FoodPickerQuery_recipes_recipes_author_avatar {
  url: string;
}

export interface FoodPickerQuery_recipes_recipes_author {
  id: string;
  username: string;
  avatar: FoodPickerQuery_recipes_recipes_author_avatar | null;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_calories {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition {
  calories: FoodPickerQuery_recipes_recipes_nutrition_calories | null;
}

export interface FoodPickerQuery_recipes_recipes {
  id: string;
  slug: string;
  title: FoodPickerQuery_recipes_recipes_title[];
  image: FoodPickerQuery_recipes_recipes_image | null;
  timing: FoodPickerQuery_recipes_recipes_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: FoodPickerQuery_recipes_recipes_thumbnail | null;
  ingredients: FoodPickerQuery_recipes_recipes_ingredients[];
  author: FoodPickerQuery_recipes_recipes_author;
  nutrition: FoodPickerQuery_recipes_recipes_nutrition | null;
}

export interface FoodPickerQuery_recipes {
  recipes: FoodPickerQuery_recipes_recipes[];
}

export interface FoodPickerQuery {
  foods: FoodPickerQuery_foods;
  recipes: FoodPickerQuery_recipes;
}

export interface FoodPickerQueryVariables {
  nameSearchQuery?: string | null;
}
