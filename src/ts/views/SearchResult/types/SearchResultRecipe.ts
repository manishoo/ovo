/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeDifficulty } from "./../../../models/global-types";

// ====================================================
// GraphQL fragment: SearchResultRecipe
// ====================================================

export interface SearchResultRecipe_title {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_author_avatar {
  url: string;
}

export interface SearchResultRecipe_author {
  id: string;
  username: string;
  avatar: SearchResultRecipe_author_avatar | null;
}

export interface SearchResultRecipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface SearchResultRecipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_ingredients_thumbnail {
  url: string;
}

export interface SearchResultRecipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: SearchResultRecipe_ingredients_food_weights_name[];
}

export interface SearchResultRecipe_ingredients_food_image {
  url: string;
}

export interface SearchResultRecipe_ingredients_food_thumbnail {
  url: string;
}

export interface SearchResultRecipe_ingredients_food {
  id: string;
  name: SearchResultRecipe_ingredients_food_name[];
  description: SearchResultRecipe_ingredients_food_description[] | null;
  weights: SearchResultRecipe_ingredients_food_weights[];
  image: SearchResultRecipe_ingredients_food_image;
  thumbnail: SearchResultRecipe_ingredients_food_thumbnail;
}

export interface SearchResultRecipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: SearchResultRecipe_ingredients_weight_name[];
}

export interface SearchResultRecipe_ingredients {
  name: SearchResultRecipe_ingredients_name[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  thumbnail: SearchResultRecipe_ingredients_thumbnail | null;
  description: SearchResultRecipe_ingredients_description[] | null;
  food: SearchResultRecipe_ingredients_food | null;
  weight: SearchResultRecipe_ingredients_weight | null;
}

export interface SearchResultRecipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_instructions_image {
  url: string;
}

export interface SearchResultRecipe_instructions_notes {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_instructions {
  step: number;
  text: SearchResultRecipe_instructions_text[];
  image: SearchResultRecipe_instructions_image | null;
  notes: SearchResultRecipe_instructions_notes[] | null;
}

export interface SearchResultRecipe_description {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_image {
  url: string;
}

export interface SearchResultRecipe {
  id: string;
  title: SearchResultRecipe_title[];
  serving: number;
  slug: string;
  author: SearchResultRecipe_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: SearchResultRecipe_timing;
  ingredients: SearchResultRecipe_ingredients[];
  instructions: SearchResultRecipe_instructions[];
  difficulty: RecipeDifficulty | null;
  description: SearchResultRecipe_description[] | null;
  image: SearchResultRecipe_image | null;
  tags: string[] | null;
  createdAt: any;
  updatedAt: any;
}
