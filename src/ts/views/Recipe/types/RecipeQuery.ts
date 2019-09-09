/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeDifficulty } from "./../../../models/global-types";

// ====================================================
// GraphQL query operation: RecipeQuery
// ====================================================

export interface RecipeQuery_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_author_imageUrl {
  url: string;
}

export interface RecipeQuery_recipe_author {
  id: string;
  username: string;
  imageUrl: RecipeQuery_recipe_author_imageUrl | null;
}

export interface RecipeQuery_recipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface RecipeQuery_recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_thumbnail {
  url: string;
}

export interface RecipeQuery_recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: RecipeQuery_recipe_ingredients_food_weights_name[];
}

export interface RecipeQuery_recipe_ingredients_food_imageUrl {
  url: string;
}

export interface RecipeQuery_recipe_ingredients_food_thumbnailUrl {
  url: string;
}

export interface RecipeQuery_recipe_ingredients_food {
  id: string;
  name: RecipeQuery_recipe_ingredients_food_name[];
  weights: RecipeQuery_recipe_ingredients_food_weights[];
  imageUrl: RecipeQuery_recipe_ingredients_food_imageUrl;
  thumbnailUrl: RecipeQuery_recipe_ingredients_food_thumbnailUrl;
}

export interface RecipeQuery_recipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: RecipeQuery_recipe_ingredients_weight_name[];
}

export interface RecipeQuery_recipe_ingredients {
  name: RecipeQuery_recipe_ingredients_name[] | null;
  amount: number;
  customUnit: string | null;
  gramWeight: number | null;
  thumbnail: RecipeQuery_recipe_ingredients_thumbnail | null;
  description: RecipeQuery_recipe_ingredients_description[] | null;
  food: RecipeQuery_recipe_ingredients_food | null;
  weight: RecipeQuery_recipe_ingredients_weight | null;
}

export interface RecipeQuery_recipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_instructions_image {
  url: string;
}

export interface RecipeQuery_recipe_instructions_notes {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_instructions {
  step: number;
  text: RecipeQuery_recipe_instructions_text[];
  image: RecipeQuery_recipe_instructions_image | null;
  notes: RecipeQuery_recipe_instructions_notes[] | null;
}

export interface RecipeQuery_recipe_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_coverImage {
  url: string;
}

export interface RecipeQuery_recipe {
  id: string;
  title: RecipeQuery_recipe_title[];
  serving: number;
  slug: string;
  author: RecipeQuery_recipe_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: RecipeQuery_recipe_timing;
  ingredients: RecipeQuery_recipe_ingredients[];
  instructions: RecipeQuery_recipe_instructions[];
  difficulty: RecipeDifficulty | null;
  description: RecipeQuery_recipe_description[] | null;
  coverImage: RecipeQuery_recipe_coverImage | null;
  createdAt: any;
  updatedAt: any;
}

export interface RecipeQuery {
  recipe: RecipeQuery_recipe;
}

export interface RecipeQueryVariables {
  slug: string;
}
