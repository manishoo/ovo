/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeDifficulty } from './../../../models/global-types'

// ====================================================
// GraphQL query operation: RecipeQuery
// ====================================================

export interface RecipeQuery_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_author_avatar {
  url: string;
}

export interface RecipeQuery_recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  avatar: RecipeQuery_recipe_author_avatar | null;
}

export interface RecipeQuery_recipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface RecipeQuery_recipe_ingredients_thumbnail {
  url: string;
}

export interface RecipeQuery_recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_food_description {
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

export interface RecipeQuery_recipe_ingredients_food_image {
  url: string;
}

export interface RecipeQuery_recipe_ingredients_food_thumbnail {
  url: string;
}

export interface RecipeQuery_recipe_ingredients_food {
  id: string;
  name: RecipeQuery_recipe_ingredients_food_name[];
  description: RecipeQuery_recipe_ingredients_food_description[] | null;
  weights: RecipeQuery_recipe_ingredients_food_weights[];
  image: RecipeQuery_recipe_ingredients_food_image;
  thumbnail: RecipeQuery_recipe_ingredients_food_thumbnail;
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
  thumbnail: RecipeQuery_recipe_ingredients_thumbnail | null;
  name: RecipeQuery_recipe_ingredients_name[] | null;
  description: RecipeQuery_recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
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

export interface RecipeQuery_recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_nutrition {
  calories: RecipeQuery_recipe_nutrition_calories | null;
  proteins: RecipeQuery_recipe_nutrition_proteins | null;
  totalCarbs: RecipeQuery_recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: RecipeQuery_recipe_nutrition_totalAvailableCarbs | null;
  carbsByDifference: RecipeQuery_recipe_nutrition_carbsByDifference | null;
  fats: RecipeQuery_recipe_nutrition_fats | null;
}

export interface RecipeQuery_recipe_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_image {
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
  nutrition: RecipeQuery_recipe_nutrition | null;
  difficulty: RecipeDifficulty | null;
  description: RecipeQuery_recipe_description[] | null;
  image: RecipeQuery_recipe_image | null;
  createdAt: any;
  updatedAt: any;
}

export interface RecipeQuery {
  recipe: RecipeQuery_recipe;
}

export interface RecipeQueryVariables {
  slug: string;
}
