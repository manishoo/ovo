/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeDifficulty } from './../../../models/global-types'

// ====================================================
// GraphQL query operation: SearchResultQuery
// ====================================================

export interface SearchResultQuery_recipes_recipes_title {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_author_avatar {
  url: string;
}

export interface SearchResultQuery_recipes_recipes_author {
  id: string;
  username: string;
  avatar: SearchResultQuery_recipes_recipes_author_avatar | null;
}

export interface SearchResultQuery_recipes_recipes_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface SearchResultQuery_recipes_recipes_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_thumbnail {
  url: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: SearchResultQuery_recipes_recipes_ingredients_food_weights_name[];
}

export interface SearchResultQuery_recipes_recipes_ingredients_food_image {
  url: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_food_thumbnail {
  url: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_food {
  id: string;
  name: SearchResultQuery_recipes_recipes_ingredients_food_name[];
  description: SearchResultQuery_recipes_recipes_ingredients_food_description[] | null;
  weights: SearchResultQuery_recipes_recipes_ingredients_food_weights[];
  image: SearchResultQuery_recipes_recipes_ingredients_food_image;
  thumbnail: SearchResultQuery_recipes_recipes_ingredients_food_thumbnail;
}

export interface SearchResultQuery_recipes_recipes_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: SearchResultQuery_recipes_recipes_ingredients_weight_name[];
}

export interface SearchResultQuery_recipes_recipes_ingredients {
  name: SearchResultQuery_recipes_recipes_ingredients_name[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  thumbnail: SearchResultQuery_recipes_recipes_ingredients_thumbnail | null;
  description: SearchResultQuery_recipes_recipes_ingredients_description[] | null;
  food: SearchResultQuery_recipes_recipes_ingredients_food | null;
  weight: SearchResultQuery_recipes_recipes_ingredients_weight | null;
}

export interface SearchResultQuery_recipes_recipes_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_instructions_image {
  url: string;
}

export interface SearchResultQuery_recipes_recipes_instructions_notes {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_instructions {
  step: number;
  text: SearchResultQuery_recipes_recipes_instructions_text[];
  image: SearchResultQuery_recipes_recipes_instructions_image | null;
  notes: SearchResultQuery_recipes_recipes_instructions_notes[] | null;
}

export interface SearchResultQuery_recipes_recipes_description {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_image {
  url: string;
}

export interface SearchResultQuery_recipes_recipes {
  id: string;
  title: SearchResultQuery_recipes_recipes_title[];
  serving: number;
  slug: string;
  author: SearchResultQuery_recipes_recipes_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: SearchResultQuery_recipes_recipes_timing;
  ingredients: SearchResultQuery_recipes_recipes_ingredients[];
  instructions: SearchResultQuery_recipes_recipes_instructions[];
  difficulty: RecipeDifficulty | null;
  description: SearchResultQuery_recipes_recipes_description[] | null;
  image: SearchResultQuery_recipes_recipes_image | null;
  tags: string[] | null;
  createdAt: any;
  updatedAt: any;
}

export interface SearchResultQuery_recipes_pagination {
  hasNext: boolean;
  lastId: string | null;
}

export interface SearchResultQuery_recipes {
  recipes: SearchResultQuery_recipes_recipes[];
  pagination: SearchResultQuery_recipes_pagination;
}

export interface SearchResultQuery {
  recipes: SearchResultQuery_recipes;
}

export interface SearchResultQueryVariables {
  nameSearchQuery: string;
  lastId?: string | null;
  tags?: string[] | null;
}
