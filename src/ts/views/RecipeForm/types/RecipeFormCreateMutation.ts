/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { RecipeInput, LanguageCode, RecipeDifficulty, RecipeStatus } from "./../../../models/global-types";

// ====================================================
// GraphQL mutation operation: RecipeFormCreateMutation
// ====================================================

export interface RecipeFormCreateMutation_createRecipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_author_avatar {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_author {
  id: string;
  username: string;
  avatar: RecipeFormCreateMutation_createRecipe_author_avatar | null;
}

export interface RecipeFormCreateMutation_createRecipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_thumbnail {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: RecipeFormCreateMutation_createRecipe_ingredients_food_weights_name[];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_food_image {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_food_thumbnail {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_food {
  id: string;
  name: RecipeFormCreateMutation_createRecipe_ingredients_food_name[];
  description: RecipeFormCreateMutation_createRecipe_ingredients_food_description[] | null;
  weights: RecipeFormCreateMutation_createRecipe_ingredients_food_weights[];
  image: RecipeFormCreateMutation_createRecipe_ingredients_food_image | null;
  thumbnail: RecipeFormCreateMutation_createRecipe_ingredients_food_thumbnail | null;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: RecipeFormCreateMutation_createRecipe_ingredients_weight_name[];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients {
  thumbnail: RecipeFormCreateMutation_createRecipe_ingredients_thumbnail | null;
  name: RecipeFormCreateMutation_createRecipe_ingredients_name[] | null;
  description: RecipeFormCreateMutation_createRecipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: RecipeFormCreateMutation_createRecipe_ingredients_food | null;
  weight: RecipeFormCreateMutation_createRecipe_ingredients_weight | null;
}

export interface RecipeFormCreateMutation_createRecipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_instructions_image {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_instructions_notes {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_instructions {
  step: number;
  text: RecipeFormCreateMutation_createRecipe_instructions_text[];
  image: RecipeFormCreateMutation_createRecipe_instructions_image | null;
  notes: RecipeFormCreateMutation_createRecipe_instructions_notes[] | null;
}

export interface RecipeFormCreateMutation_createRecipe_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_image {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe {
  id: string;
  title: RecipeFormCreateMutation_createRecipe_title[];
  serving: number;
  slug: string;
  author: RecipeFormCreateMutation_createRecipe_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: RecipeFormCreateMutation_createRecipe_timing;
  ingredients: RecipeFormCreateMutation_createRecipe_ingredients[];
  instructions: RecipeFormCreateMutation_createRecipe_instructions[];
  difficulty: RecipeDifficulty | null;
  description: RecipeFormCreateMutation_createRecipe_description[] | null;
  image: RecipeFormCreateMutation_createRecipe_image | null;
  tags: string[] | null;
  createdAt: any;
  updatedAt: any;
  status: RecipeStatus;
}

export interface RecipeFormCreateMutation {
  createRecipe: RecipeFormCreateMutation_createRecipe;
}

export interface RecipeFormCreateMutationVariables {
  recipe: RecipeInput;
}
