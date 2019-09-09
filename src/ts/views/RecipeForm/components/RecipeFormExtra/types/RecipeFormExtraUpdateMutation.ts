/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { RecipeInput, LanguageCode, RecipeDifficulty } from "./../../../../../models/global-types";

// ====================================================
// GraphQL mutation operation: RecipeFormExtraUpdateMutation
// ====================================================

export interface RecipeFormExtraUpdateMutation_updateRecipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_author_imageUrl {
  url: string;
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_author {
  id: string;
  username: string;
  imageUrl: RecipeFormExtraUpdateMutation_updateRecipe_author_imageUrl | null;
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_ingredients_thumbnail {
  url: string;
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: RecipeFormExtraUpdateMutation_updateRecipe_ingredients_food_weights_name[];
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_ingredients_food_imageUrl {
  url: string;
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_ingredients_food_thumbnailUrl {
  url: string;
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_ingredients_food {
  id: string;
  name: RecipeFormExtraUpdateMutation_updateRecipe_ingredients_food_name[];
  weights: RecipeFormExtraUpdateMutation_updateRecipe_ingredients_food_weights[];
  imageUrl: RecipeFormExtraUpdateMutation_updateRecipe_ingredients_food_imageUrl;
  thumbnailUrl: RecipeFormExtraUpdateMutation_updateRecipe_ingredients_food_thumbnailUrl;
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: RecipeFormExtraUpdateMutation_updateRecipe_ingredients_weight_name[];
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_ingredients {
  name: RecipeFormExtraUpdateMutation_updateRecipe_ingredients_name[] | null;
  amount: number;
  customUnit: string | null;
  gramWeight: number | null;
  thumbnail: RecipeFormExtraUpdateMutation_updateRecipe_ingredients_thumbnail | null;
  description: RecipeFormExtraUpdateMutation_updateRecipe_ingredients_description[] | null;
  food: RecipeFormExtraUpdateMutation_updateRecipe_ingredients_food | null;
  weight: RecipeFormExtraUpdateMutation_updateRecipe_ingredients_weight | null;
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_instructions_image {
  url: string;
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_instructions_notes {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_instructions {
  step: number;
  text: RecipeFormExtraUpdateMutation_updateRecipe_instructions_text[];
  image: RecipeFormExtraUpdateMutation_updateRecipe_instructions_image | null;
  notes: RecipeFormExtraUpdateMutation_updateRecipe_instructions_notes[] | null;
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormExtraUpdateMutation_updateRecipe_coverImage {
  url: string;
}

export interface RecipeFormExtraUpdateMutation_updateRecipe {
  id: string;
  title: RecipeFormExtraUpdateMutation_updateRecipe_title[];
  serving: number;
  slug: string;
  author: RecipeFormExtraUpdateMutation_updateRecipe_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: RecipeFormExtraUpdateMutation_updateRecipe_timing;
  ingredients: RecipeFormExtraUpdateMutation_updateRecipe_ingredients[];
  instructions: RecipeFormExtraUpdateMutation_updateRecipe_instructions[];
  difficulty: RecipeDifficulty | null;
  description: RecipeFormExtraUpdateMutation_updateRecipe_description[] | null;
  coverImage: RecipeFormExtraUpdateMutation_updateRecipe_coverImage | null;
  tags: string[] | null;
  createdAt: any;
  updatedAt: any;
}

export interface RecipeFormExtraUpdateMutation {
  updateRecipe: RecipeFormExtraUpdateMutation_updateRecipe;
}

export interface RecipeFormExtraUpdateMutationVariables {
  id: string;
  recipe: RecipeInput;
}
