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

export interface PublicRecipe_author_imageUrl {
  url: string;
}

export interface PublicRecipe_author {
  id: string;
  username: string;
  imageUrl: PublicRecipe_author_imageUrl | null;
}

export interface PublicRecipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface PublicRecipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface PublicRecipe_ingredients_thumbnail {
  url: string;
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

export interface PublicRecipe_ingredients_food_imageUrl {
  url: string;
}

export interface PublicRecipe_ingredients_food_thumbnailUrl {
  url: string;
}

export interface PublicRecipe_ingredients_food {
  id: string;
  name: PublicRecipe_ingredients_food_name[];
  description: PublicRecipe_ingredients_food_description[] | null;
  weights: PublicRecipe_ingredients_food_weights[];
  imageUrl: PublicRecipe_ingredients_food_imageUrl;
  thumbnailUrl: PublicRecipe_ingredients_food_thumbnailUrl;
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
  name: PublicRecipe_ingredients_name[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  thumbnail: PublicRecipe_ingredients_thumbnail | null;
  description: PublicRecipe_ingredients_description[] | null;
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

export interface PublicRecipe_description {
  text: string;
  locale: LanguageCode;
}

export interface PublicRecipe_coverImage {
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
  difficulty: RecipeDifficulty | null;
  description: PublicRecipe_description[] | null;
  coverImage: PublicRecipe_coverImage | null;
  createdAt: any;
  updatedAt: any;
}
