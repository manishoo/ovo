/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeDifficulty } from "./../../../models/global-types";

// ====================================================
// GraphQL fragment: PublicRecipe
// ====================================================

export interface PublicRecipe_title {
  text: string;
  locale: LanguageCode;
}

export interface PublicRecipe_author_avatar {
  url: string;
}

export interface PublicRecipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  avatar: PublicRecipe_author_avatar | null;
}

export interface PublicRecipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface PublicRecipe_ingredients_thumbnail {
  url: string;
}

export interface PublicRecipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface PublicRecipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface PublicRecipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface PublicRecipe_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface PublicRecipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface PublicRecipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: PublicRecipe_ingredients_food_weights_name[];
}

export interface PublicRecipe_ingredients_food_image {
  url: string;
}

export interface PublicRecipe_ingredients_food_thumbnail {
  url: string;
}

export interface PublicRecipe_ingredients_food {
  id: string;
  name: PublicRecipe_ingredients_food_name[];
  description: PublicRecipe_ingredients_food_description[] | null;
  weights: PublicRecipe_ingredients_food_weights[];
  image: PublicRecipe_ingredients_food_image;
  thumbnail: PublicRecipe_ingredients_food_thumbnail;
}

export interface PublicRecipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface PublicRecipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: PublicRecipe_ingredients_weight_name[];
}

export interface PublicRecipe_ingredients {
  thumbnail: PublicRecipe_ingredients_thumbnail | null;
  name: PublicRecipe_ingredients_name[] | null;
  description: PublicRecipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: PublicRecipe_ingredients_food | null;
  weight: PublicRecipe_ingredients_weight | null;
}

export interface PublicRecipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface PublicRecipe_instructions_image {
  url: string;
}

export interface PublicRecipe_instructions_notes {
  text: string;
  locale: LanguageCode;
}

export interface PublicRecipe_instructions {
  step: number;
  text: PublicRecipe_instructions_text[];
  image: PublicRecipe_instructions_image | null;
  notes: PublicRecipe_instructions_notes[] | null;
}

export interface PublicRecipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface PublicRecipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface PublicRecipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface PublicRecipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface PublicRecipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface PublicRecipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface PublicRecipe_nutrition {
  calories: PublicRecipe_nutrition_calories | null;
  proteins: PublicRecipe_nutrition_proteins | null;
  totalCarbs: PublicRecipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: PublicRecipe_nutrition_totalAvailableCarbs | null;
  carbsByDifference: PublicRecipe_nutrition_carbsByDifference | null;
  fats: PublicRecipe_nutrition_fats | null;
}

export interface PublicRecipe_description {
  text: string;
  locale: LanguageCode;
}

export interface PublicRecipe_image {
  url: string;
}

export interface PublicRecipe {
  id: string;
  title: PublicRecipe_title[];
  serving: number;
  slug: string;
  author: PublicRecipe_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: PublicRecipe_timing;
  ingredients: PublicRecipe_ingredients[];
  instructions: PublicRecipe_instructions[];
  nutrition: PublicRecipe_nutrition | null;
  difficulty: RecipeDifficulty | null;
  description: PublicRecipe_description[] | null;
  image: PublicRecipe_image | null;
  createdAt: any;
  updatedAt: any;
}
