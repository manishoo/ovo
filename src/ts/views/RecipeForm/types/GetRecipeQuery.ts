/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL query operation: GetRecipeQuery
// ====================================================

export interface GetRecipeQuery_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface GetRecipeQuery_recipe_author_imageUrl {
  url: string;
}

export interface GetRecipeQuery_recipe_author {
  id: string;
  username: string;
  imageUrl: GetRecipeQuery_recipe_author_imageUrl | null;
}

export interface GetRecipeQuery_recipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface GetRecipeQuery_recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface GetRecipeQuery_recipe_ingredients_thumbnail {
  url: string;
}

export interface GetRecipeQuery_recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface GetRecipeQuery_recipe_ingredients {
  name: GetRecipeQuery_recipe_ingredients_name[] | null;
  amount: number;
  customUnit: string | null;
  gramWeight: number | null;
  thumbnail: GetRecipeQuery_recipe_ingredients_thumbnail | null;
  description: GetRecipeQuery_recipe_ingredients_description[] | null;
}

export interface GetRecipeQuery_recipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface GetRecipeQuery_recipe_instructions_image {
  url: string;
}

export interface GetRecipeQuery_recipe_instructions_notes {
  text: string;
  locale: LanguageCode;
}

export interface GetRecipeQuery_recipe_instructions {
  step: number;
  text: GetRecipeQuery_recipe_instructions_text[];
  image: GetRecipeQuery_recipe_instructions_image | null;
  notes: GetRecipeQuery_recipe_instructions_notes[] | null;
}

export interface GetRecipeQuery_recipe_coverImage {
  url: string;
}

export interface GetRecipeQuery_recipe {
  id: string;
  title: GetRecipeQuery_recipe_title[];
  serving: number;
  slug: string;
  author: GetRecipeQuery_recipe_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: GetRecipeQuery_recipe_timing;
  ingredients: GetRecipeQuery_recipe_ingredients[];
  instructions: GetRecipeQuery_recipe_instructions[];
  coverImage: GetRecipeQuery_recipe_coverImage | null;
  createdAt: any;
  updatedAt: any;
}

export interface GetRecipeQuery {
  recipe: GetRecipeQuery_recipe;
}

export interface GetRecipeQueryVariables {
  slug: string;
}
