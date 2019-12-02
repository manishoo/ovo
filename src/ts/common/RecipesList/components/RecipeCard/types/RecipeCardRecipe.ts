/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../../models/global-types";

// ====================================================
// GraphQL fragment: RecipeCardRecipe
// ====================================================

export interface RecipeCardRecipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeCardRecipe_image {
  url: string;
}

export interface RecipeCardRecipe_timing {
  totalTime: number;
}

export interface RecipeCardRecipe_thumbnail {
  url: string;
}

export interface RecipeCardRecipe_ingredients_thumbnail {
  url: string;
}

export interface RecipeCardRecipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeCardRecipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeCardRecipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeCardRecipe_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeCardRecipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeCardRecipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: RecipeCardRecipe_ingredients_food_weights_name[];
}

export interface RecipeCardRecipe_ingredients_food_image {
  url: string;
}

export interface RecipeCardRecipe_ingredients_food_thumbnail {
  url: string;
}

export interface RecipeCardRecipe_ingredients_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface RecipeCardRecipe_ingredients_food_nutrition {
  calories: RecipeCardRecipe_ingredients_food_nutrition_calories | null;
}

export interface RecipeCardRecipe_ingredients_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeCardRecipe_ingredients_food_origFoodGroups {
  id: string;
  name: RecipeCardRecipe_ingredients_food_origFoodGroups_name[];
}

export interface RecipeCardRecipe_ingredients_food {
  id: string;
  name: RecipeCardRecipe_ingredients_food_name[];
  description: RecipeCardRecipe_ingredients_food_description[] | null;
  weights: RecipeCardRecipe_ingredients_food_weights[];
  image: RecipeCardRecipe_ingredients_food_image | null;
  thumbnail: RecipeCardRecipe_ingredients_food_thumbnail | null;
  nutrition: RecipeCardRecipe_ingredients_food_nutrition;
  origFoodGroups: RecipeCardRecipe_ingredients_food_origFoodGroups[][];
}

export interface RecipeCardRecipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeCardRecipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: RecipeCardRecipe_ingredients_weight_name[];
}

export interface RecipeCardRecipe_ingredients {
  thumbnail: RecipeCardRecipe_ingredients_thumbnail | null;
  name: RecipeCardRecipe_ingredients_name[] | null;
  description: RecipeCardRecipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: RecipeCardRecipe_ingredients_food | null;
  weight: RecipeCardRecipe_ingredients_weight | null;
}

export interface RecipeCardRecipe_author_avatar {
  url: string;
}

export interface RecipeCardRecipe_author {
  id: string;
  username: string;
  avatar: RecipeCardRecipe_author_avatar | null;
}

export interface RecipeCardRecipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface RecipeCardRecipe_nutrition {
  calories: RecipeCardRecipe_nutrition_calories | null;
}

export interface RecipeCardRecipe {
  id: string;
  slug: string;
  title: RecipeCardRecipe_title[];
  image: RecipeCardRecipe_image | null;
  timing: RecipeCardRecipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: RecipeCardRecipe_thumbnail | null;
  ingredients: RecipeCardRecipe_ingredients[];
  author: RecipeCardRecipe_author;
  nutrition: RecipeCardRecipe_nutrition | null;
}
