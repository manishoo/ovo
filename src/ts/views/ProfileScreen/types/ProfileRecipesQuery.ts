/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeDifficulty } from "./../../../models/global-types";

// ====================================================
// GraphQL query operation: ProfileRecipesQuery
// ====================================================

export interface ProfileRecipesQuery_recipes_recipes_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_author_imageUrl {
  url: string;
}

export interface ProfileRecipesQuery_recipes_recipes_author {
  id: string;
  username: string;
  imageUrl: ProfileRecipesQuery_recipes_recipes_author_imageUrl | null;
}

export interface ProfileRecipesQuery_recipes_recipes_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_thumbnail {
  url: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: ProfileRecipesQuery_recipes_recipes_ingredients_food_weights_name[];
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_food_imageUrl {
  url: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_food_thumbnailUrl {
  url: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_food {
  id: string;
  name: ProfileRecipesQuery_recipes_recipes_ingredients_food_name[];
  weights: ProfileRecipesQuery_recipes_recipes_ingredients_food_weights[];
  imageUrl: ProfileRecipesQuery_recipes_recipes_ingredients_food_imageUrl;
  thumbnailUrl: ProfileRecipesQuery_recipes_recipes_ingredients_food_thumbnailUrl;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: ProfileRecipesQuery_recipes_recipes_ingredients_weight_name[];
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients {
  name: ProfileRecipesQuery_recipes_recipes_ingredients_name[] | null;
  amount: number;
  customUnit: string | null;
  gramWeight: number | null;
  thumbnail: ProfileRecipesQuery_recipes_recipes_ingredients_thumbnail | null;
  description: ProfileRecipesQuery_recipes_recipes_ingredients_description[] | null;
  food: ProfileRecipesQuery_recipes_recipes_ingredients_food | null;
  weight: ProfileRecipesQuery_recipes_recipes_ingredients_weight | null;
}

export interface ProfileRecipesQuery_recipes_recipes_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_instructions_image {
  url: string;
}

export interface ProfileRecipesQuery_recipes_recipes_instructions_notes {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_instructions {
  step: number;
  text: ProfileRecipesQuery_recipes_recipes_instructions_text[];
  image: ProfileRecipesQuery_recipes_recipes_instructions_image | null;
  notes: ProfileRecipesQuery_recipes_recipes_instructions_notes[] | null;
}

export interface ProfileRecipesQuery_recipes_recipes_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_coverImage {
  url: string;
}

export interface ProfileRecipesQuery_recipes_recipes {
  id: string;
  title: ProfileRecipesQuery_recipes_recipes_title[];
  serving: number;
  slug: string;
  author: ProfileRecipesQuery_recipes_recipes_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: ProfileRecipesQuery_recipes_recipes_timing;
  ingredients: ProfileRecipesQuery_recipes_recipes_ingredients[];
  instructions: ProfileRecipesQuery_recipes_recipes_instructions[];
  difficulty: RecipeDifficulty | null;
  description: ProfileRecipesQuery_recipes_recipes_description[] | null;
  coverImage: ProfileRecipesQuery_recipes_recipes_coverImage | null;
  tags: string[] | null;
  createdAt: any;
  updatedAt: any;
}

export interface ProfileRecipesQuery_recipes_pagination {
  hasNext: boolean;
  lastId: string | null;
}

export interface ProfileRecipesQuery_recipes {
  recipes: ProfileRecipesQuery_recipes_recipes[];
  pagination: ProfileRecipesQuery_recipes_pagination;
}

export interface ProfileRecipesQuery {
  recipes: ProfileRecipesQuery_recipes;
}

export interface ProfileRecipesQueryVariables {
  lastId?: string | null;
  userId?: string | null;
}
