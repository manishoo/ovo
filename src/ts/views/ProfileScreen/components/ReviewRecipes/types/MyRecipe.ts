/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeDifficulty, RecipeStatus } from "./../../../../../models/global-types";

// ====================================================
// GraphQL fragment: MyRecipe
// ====================================================

export interface MyRecipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MyRecipe_author_avatar {
  url: string;
}

export interface MyRecipe_author {
  id: string;
  username: string;
  avatar: MyRecipe_author_avatar | null;
}

export interface MyRecipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface MyRecipe_ingredients_thumbnail {
  url: string;
}

export interface MyRecipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MyRecipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MyRecipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MyRecipe_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MyRecipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MyRecipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MyRecipe_ingredients_food_weights_name[];
}

export interface MyRecipe_ingredients_food_image {
  url: string;
}

export interface MyRecipe_ingredients_food_thumbnail {
  url: string;
}

export interface MyRecipe_ingredients_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MyRecipe_ingredients_food_nutrition {
  calories: MyRecipe_ingredients_food_nutrition_calories | null;
}

export interface MyRecipe_ingredients_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MyRecipe_ingredients_food_origFoodGroups {
  id: string;
  name: MyRecipe_ingredients_food_origFoodGroups_name[];
}

export interface MyRecipe_ingredients_food {
  id: string;
  name: MyRecipe_ingredients_food_name[];
  description: MyRecipe_ingredients_food_description[] | null;
  weights: MyRecipe_ingredients_food_weights[];
  image: MyRecipe_ingredients_food_image | null;
  thumbnail: MyRecipe_ingredients_food_thumbnail | null;
  nutrition: MyRecipe_ingredients_food_nutrition;
  origFoodGroups: MyRecipe_ingredients_food_origFoodGroups[][];
}

export interface MyRecipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MyRecipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: MyRecipe_ingredients_weight_name[];
}

export interface MyRecipe_ingredients {
  thumbnail: MyRecipe_ingredients_thumbnail | null;
  name: MyRecipe_ingredients_name[] | null;
  description: MyRecipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: MyRecipe_ingredients_food | null;
  weight: MyRecipe_ingredients_weight | null;
}

export interface MyRecipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface MyRecipe_instructions_image {
  url: string;
}

export interface MyRecipe_instructions_notes {
  text: string;
  locale: LanguageCode;
}

export interface MyRecipe_instructions {
  step: number;
  text: MyRecipe_instructions_text[];
  image: MyRecipe_instructions_image | null;
  notes: MyRecipe_instructions_notes[] | null;
}

export interface MyRecipe_description {
  text: string;
  locale: LanguageCode;
}

export interface MyRecipe_image {
  url: string;
}

export interface MyRecipe {
  id: string;
  title: MyRecipe_title[];
  serving: number;
  slug: string;
  author: MyRecipe_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: MyRecipe_timing;
  ingredients: MyRecipe_ingredients[];
  instructions: MyRecipe_instructions[];
  difficulty: RecipeDifficulty | null;
  description: MyRecipe_description[] | null;
  image: MyRecipe_image | null;
  tags: string[] | null;
  createdAt: any;
  updatedAt: any;
  status: RecipeStatus;
}
