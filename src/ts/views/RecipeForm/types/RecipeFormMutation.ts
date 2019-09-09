/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { RecipeInput, LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL mutation operation: RecipeFormMutation
// ====================================================

export interface RecipeFormMutation_updateRecipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormMutation_updateRecipe_author_imageUrl {
  url: string;
}

export interface RecipeFormMutation_updateRecipe_author {
  id: string;
  username: string;
  imageUrl: RecipeFormMutation_updateRecipe_author_imageUrl | null;
}

export interface RecipeFormMutation_updateRecipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface RecipeFormMutation_updateRecipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormMutation_updateRecipe_ingredients_thumbnail {
  url: string;
}

export interface RecipeFormMutation_updateRecipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormMutation_updateRecipe_ingredients {
  name: RecipeFormMutation_updateRecipe_ingredients_name[] | null;
  amount: number;
  customUnit: string | null;
  gramWeight: number | null;
  thumbnail: RecipeFormMutation_updateRecipe_ingredients_thumbnail | null;
  description: RecipeFormMutation_updateRecipe_ingredients_description[] | null;
}

export interface RecipeFormMutation_updateRecipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormMutation_updateRecipe_instructions_image {
  url: string;
}

export interface RecipeFormMutation_updateRecipe_instructions_notes {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormMutation_updateRecipe_instructions {
  step: number;
  text: RecipeFormMutation_updateRecipe_instructions_text[];
  image: RecipeFormMutation_updateRecipe_instructions_image | null;
  notes: RecipeFormMutation_updateRecipe_instructions_notes[] | null;
}

export interface RecipeFormMutation_updateRecipe_coverImage {
  url: string;
}

export interface RecipeFormMutation_updateRecipe {
  id: string;
  title: RecipeFormMutation_updateRecipe_title[];
  serving: number;
  slug: string;
  author: RecipeFormMutation_updateRecipe_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: RecipeFormMutation_updateRecipe_timing;
  ingredients: RecipeFormMutation_updateRecipe_ingredients[];
  instructions: RecipeFormMutation_updateRecipe_instructions[];
  coverImage: RecipeFormMutation_updateRecipe_coverImage | null;
  createdAt: any;
  updatedAt: any;
}

export interface RecipeFormMutation {
  updateRecipe: RecipeFormMutation_updateRecipe;
}

export interface RecipeFormMutationVariables {
  id: string;
  recipe: RecipeInput;
}
