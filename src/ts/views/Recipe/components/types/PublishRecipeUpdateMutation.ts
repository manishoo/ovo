/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { RecipeInput, LanguageCode, RecipeDifficulty, RecipeStatus } from "./../../../../models/global-types";

// ====================================================
// GraphQL mutation operation: PublishRecipeUpdateMutation
// ====================================================

export interface PublishRecipeUpdateMutation_updateRecipe_title {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_author_avatar {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_author {
  id: string;
  username: string;
  avatar: PublishRecipeUpdateMutation_updateRecipe_author_avatar | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_thumbnail {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_food_weights_name[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_food_image {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_food_thumbnail {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_food_nutrition {
  calories: PublishRecipeUpdateMutation_updateRecipe_ingredients_food_nutrition_calories | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_food_origFoodGroups {
  id: string;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_food_origFoodGroups_name[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_food {
  id: string;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_food_name[];
  description: PublishRecipeUpdateMutation_updateRecipe_ingredients_food_description[] | null;
  weights: PublishRecipeUpdateMutation_updateRecipe_ingredients_food_weights[];
  image: PublishRecipeUpdateMutation_updateRecipe_ingredients_food_image | null;
  thumbnail: PublishRecipeUpdateMutation_updateRecipe_ingredients_food_thumbnail | null;
  nutrition: PublishRecipeUpdateMutation_updateRecipe_ingredients_food_nutrition;
  origFoodGroups: PublishRecipeUpdateMutation_updateRecipe_ingredients_food_origFoodGroups[][];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_weight_name[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients {
  thumbnail: PublishRecipeUpdateMutation_updateRecipe_ingredients_thumbnail | null;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_name[] | null;
  description: PublishRecipeUpdateMutation_updateRecipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: PublishRecipeUpdateMutation_updateRecipe_ingredients_food | null;
  weight: PublishRecipeUpdateMutation_updateRecipe_ingredients_weight | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_instructions_image {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_instructions_notes {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_instructions {
  step: number;
  text: PublishRecipeUpdateMutation_updateRecipe_instructions_text[];
  image: PublishRecipeUpdateMutation_updateRecipe_instructions_image | null;
  notes: PublishRecipeUpdateMutation_updateRecipe_instructions_notes[] | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_description {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_image {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe {
  id: string;
  title: PublishRecipeUpdateMutation_updateRecipe_title[];
  serving: number;
  slug: string;
  author: PublishRecipeUpdateMutation_updateRecipe_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: PublishRecipeUpdateMutation_updateRecipe_timing;
  ingredients: PublishRecipeUpdateMutation_updateRecipe_ingredients[];
  instructions: PublishRecipeUpdateMutation_updateRecipe_instructions[];
  difficulty: RecipeDifficulty | null;
  description: PublishRecipeUpdateMutation_updateRecipe_description[] | null;
  image: PublishRecipeUpdateMutation_updateRecipe_image | null;
  tags: string[] | null;
  createdAt: any;
  updatedAt: any;
  status: RecipeStatus;
}

export interface PublishRecipeUpdateMutation {
  updateRecipe: PublishRecipeUpdateMutation_updateRecipe;
}

export interface PublishRecipeUpdateMutationVariables {
  id: any;
  recipe: RecipeInput;
}
