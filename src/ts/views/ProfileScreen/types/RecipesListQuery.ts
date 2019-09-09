/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeDifficulty } from "./../../../models/global-types";

// ====================================================
// GraphQL query operation: RecipesListQuery
// ====================================================

export interface RecipesListQuery_recipes_recipes_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipesListQuery_recipes_recipes_author_imageUrl {
  url: string;
}

export interface RecipesListQuery_recipes_recipes_author {
  id: string;
  username: string;
  imageUrl: RecipesListQuery_recipes_recipes_author_imageUrl | null;
}

export interface RecipesListQuery_recipes_recipes_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface RecipesListQuery_recipes_recipes_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipesListQuery_recipes_recipes_ingredients_thumbnail {
  url: string;
}

export interface RecipesListQuery_recipes_recipes_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipesListQuery_recipes_recipes_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipesListQuery_recipes_recipes_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipesListQuery_recipes_recipes_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: RecipesListQuery_recipes_recipes_ingredients_food_weights_name[];
}

export interface RecipesListQuery_recipes_recipes_ingredients_food_imageUrl {
  url: string;
}

export interface RecipesListQuery_recipes_recipes_ingredients_food_thumbnailUrl {
  url: string;
}

export interface RecipesListQuery_recipes_recipes_ingredients_food {
  id: string;
  name: RecipesListQuery_recipes_recipes_ingredients_food_name[];
  weights: RecipesListQuery_recipes_recipes_ingredients_food_weights[];
  imageUrl: RecipesListQuery_recipes_recipes_ingredients_food_imageUrl;
  thumbnailUrl: RecipesListQuery_recipes_recipes_ingredients_food_thumbnailUrl;
}

export interface RecipesListQuery_recipes_recipes_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipesListQuery_recipes_recipes_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: RecipesListQuery_recipes_recipes_ingredients_weight_name[];
}

export interface RecipesListQuery_recipes_recipes_ingredients {
  name: RecipesListQuery_recipes_recipes_ingredients_name[] | null;
  amount: number;
  customUnit: string | null;
  gramWeight: number | null;
  thumbnail: RecipesListQuery_recipes_recipes_ingredients_thumbnail | null;
  description: RecipesListQuery_recipes_recipes_ingredients_description[] | null;
  food: RecipesListQuery_recipes_recipes_ingredients_food | null;
  weight: RecipesListQuery_recipes_recipes_ingredients_weight | null;
}

export interface RecipesListQuery_recipes_recipes_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface RecipesListQuery_recipes_recipes_instructions_image {
  url: string;
}

export interface RecipesListQuery_recipes_recipes_instructions_notes {
  text: string;
  locale: LanguageCode;
}

export interface RecipesListQuery_recipes_recipes_instructions {
  step: number;
  text: RecipesListQuery_recipes_recipes_instructions_text[];
  image: RecipesListQuery_recipes_recipes_instructions_image | null;
  notes: RecipesListQuery_recipes_recipes_instructions_notes[] | null;
}

export interface RecipesListQuery_recipes_recipes_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipesListQuery_recipes_recipes_coverImage {
  url: string;
}

export interface RecipesListQuery_recipes_recipes {
  id: string;
  title: RecipesListQuery_recipes_recipes_title[];
  serving: number;
  slug: string;
  author: RecipesListQuery_recipes_recipes_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: RecipesListQuery_recipes_recipes_timing;
  ingredients: RecipesListQuery_recipes_recipes_ingredients[];
  instructions: RecipesListQuery_recipes_recipes_instructions[];
  difficulty: RecipeDifficulty | null;
  description: RecipesListQuery_recipes_recipes_description[] | null;
  coverImage: RecipesListQuery_recipes_recipes_coverImage | null;
  tags: string[] | null;
  createdAt: any;
  updatedAt: any;
}

export interface RecipesListQuery_recipes_pagination {
  hasNext: boolean;
  lastId: string | null;
}

export interface RecipesListQuery_recipes {
  recipes: RecipesListQuery_recipes_recipes[];
  pagination: RecipesListQuery_recipes_pagination;
}

export interface RecipesListQuery {
  recipes: RecipesListQuery_recipes;
}

export interface RecipesListQueryVariables {
  lastId?: string | null;
  userId?: string | null;
}
