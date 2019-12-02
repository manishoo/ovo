/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { RecipeInput, LanguageCode, RecipeDifficulty, RecipeStatus } from "./../../../models/global-types";

// ====================================================
// GraphQL mutation operation: RecipeFormUpdateMutation
// ====================================================

export interface RecipeFormUpdateMutation_updateRecipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_author_avatar {
  url: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_author {
  id: string;
  username: string;
  avatar: RecipeFormUpdateMutation_updateRecipe_author_avatar | null;
}

export interface RecipeFormUpdateMutation_updateRecipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_thumbnail {
  url: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_food_weights_name[];
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_food_image {
  url: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_food_thumbnail {
  url: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_food_nutrition {
  calories: RecipeFormUpdateMutation_updateRecipe_ingredients_food_nutrition_calories | null;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_food_origFoodGroups {
  id: string;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_food_origFoodGroups_name[];
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_food {
  id: string;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_food_name[];
  description: RecipeFormUpdateMutation_updateRecipe_ingredients_food_description[] | null;
  weights: RecipeFormUpdateMutation_updateRecipe_ingredients_food_weights[];
  image: RecipeFormUpdateMutation_updateRecipe_ingredients_food_image | null;
  thumbnail: RecipeFormUpdateMutation_updateRecipe_ingredients_food_thumbnail | null;
  nutrition: RecipeFormUpdateMutation_updateRecipe_ingredients_food_nutrition;
  origFoodGroups: RecipeFormUpdateMutation_updateRecipe_ingredients_food_origFoodGroups[][];
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_weight_name[];
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients {
  thumbnail: RecipeFormUpdateMutation_updateRecipe_ingredients_thumbnail | null;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_name[] | null;
  description: RecipeFormUpdateMutation_updateRecipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: RecipeFormUpdateMutation_updateRecipe_ingredients_food | null;
  weight: RecipeFormUpdateMutation_updateRecipe_ingredients_weight | null;
}

export interface RecipeFormUpdateMutation_updateRecipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_instructions_image {
  url: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_instructions_notes {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_instructions {
  step: number;
  text: RecipeFormUpdateMutation_updateRecipe_instructions_text[];
  image: RecipeFormUpdateMutation_updateRecipe_instructions_image | null;
  notes: RecipeFormUpdateMutation_updateRecipe_instructions_notes[] | null;
}

export interface RecipeFormUpdateMutation_updateRecipe_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_image {
  url: string;
}

export interface RecipeFormUpdateMutation_updateRecipe {
  id: string;
  title: RecipeFormUpdateMutation_updateRecipe_title[];
  serving: number;
  slug: string;
  author: RecipeFormUpdateMutation_updateRecipe_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: RecipeFormUpdateMutation_updateRecipe_timing;
  ingredients: RecipeFormUpdateMutation_updateRecipe_ingredients[];
  instructions: RecipeFormUpdateMutation_updateRecipe_instructions[];
  difficulty: RecipeDifficulty | null;
  description: RecipeFormUpdateMutation_updateRecipe_description[] | null;
  image: RecipeFormUpdateMutation_updateRecipe_image | null;
  tags: string[] | null;
  createdAt: any;
  updatedAt: any;
  status: RecipeStatus;
}

export interface RecipeFormUpdateMutation {
  updateRecipe: RecipeFormUpdateMutation_updateRecipe;
}

export interface RecipeFormUpdateMutationVariables {
  id: any;
  recipe: RecipeInput;
}
