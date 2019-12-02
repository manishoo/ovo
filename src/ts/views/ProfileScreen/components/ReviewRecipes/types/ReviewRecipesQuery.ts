/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeDifficulty, RecipeStatus } from "./../../../../../models/global-types";

// ====================================================
// GraphQL query operation: ReviewRecipesQuery
// ====================================================

export interface ReviewRecipesQuery_recipes_recipes_title {
  text: string;
  locale: LanguageCode;
}

export interface ReviewRecipesQuery_recipes_recipes_author_avatar {
  url: string;
}

export interface ReviewRecipesQuery_recipes_recipes_author {
  id: string;
  username: string;
  avatar: ReviewRecipesQuery_recipes_recipes_author_avatar | null;
}

export interface ReviewRecipesQuery_recipes_recipes_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface ReviewRecipesQuery_recipes_recipes_ingredients_thumbnail {
  url: string;
}

export interface ReviewRecipesQuery_recipes_recipes_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface ReviewRecipesQuery_recipes_recipes_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface ReviewRecipesQuery_recipes_recipes_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface ReviewRecipesQuery_recipes_recipes_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface ReviewRecipesQuery_recipes_recipes_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface ReviewRecipesQuery_recipes_recipes_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: ReviewRecipesQuery_recipes_recipes_ingredients_food_weights_name[];
}

export interface ReviewRecipesQuery_recipes_recipes_ingredients_food_image {
  url: string;
}

export interface ReviewRecipesQuery_recipes_recipes_ingredients_food_thumbnail {
  url: string;
}

export interface ReviewRecipesQuery_recipes_recipes_ingredients_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface ReviewRecipesQuery_recipes_recipes_ingredients_food_nutrition {
  calories: ReviewRecipesQuery_recipes_recipes_ingredients_food_nutrition_calories | null;
}

export interface ReviewRecipesQuery_recipes_recipes_ingredients_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface ReviewRecipesQuery_recipes_recipes_ingredients_food_origFoodGroups {
  id: string;
  name: ReviewRecipesQuery_recipes_recipes_ingredients_food_origFoodGroups_name[];
}

export interface ReviewRecipesQuery_recipes_recipes_ingredients_food {
  id: string;
  name: ReviewRecipesQuery_recipes_recipes_ingredients_food_name[];
  description: ReviewRecipesQuery_recipes_recipes_ingredients_food_description[] | null;
  weights: ReviewRecipesQuery_recipes_recipes_ingredients_food_weights[];
  image: ReviewRecipesQuery_recipes_recipes_ingredients_food_image | null;
  thumbnail: ReviewRecipesQuery_recipes_recipes_ingredients_food_thumbnail | null;
  nutrition: ReviewRecipesQuery_recipes_recipes_ingredients_food_nutrition;
  origFoodGroups: ReviewRecipesQuery_recipes_recipes_ingredients_food_origFoodGroups[][];
}

export interface ReviewRecipesQuery_recipes_recipes_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface ReviewRecipesQuery_recipes_recipes_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: ReviewRecipesQuery_recipes_recipes_ingredients_weight_name[];
}

export interface ReviewRecipesQuery_recipes_recipes_ingredients {
  thumbnail: ReviewRecipesQuery_recipes_recipes_ingredients_thumbnail | null;
  name: ReviewRecipesQuery_recipes_recipes_ingredients_name[] | null;
  description: ReviewRecipesQuery_recipes_recipes_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: ReviewRecipesQuery_recipes_recipes_ingredients_food | null;
  weight: ReviewRecipesQuery_recipes_recipes_ingredients_weight | null;
}

export interface ReviewRecipesQuery_recipes_recipes_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface ReviewRecipesQuery_recipes_recipes_instructions_image {
  url: string;
}

export interface ReviewRecipesQuery_recipes_recipes_instructions_notes {
  text: string;
  locale: LanguageCode;
}

export interface ReviewRecipesQuery_recipes_recipes_instructions {
  step: number;
  text: ReviewRecipesQuery_recipes_recipes_instructions_text[];
  image: ReviewRecipesQuery_recipes_recipes_instructions_image | null;
  notes: ReviewRecipesQuery_recipes_recipes_instructions_notes[] | null;
}

export interface ReviewRecipesQuery_recipes_recipes_description {
  text: string;
  locale: LanguageCode;
}

export interface ReviewRecipesQuery_recipes_recipes_image {
  url: string;
}

export interface ReviewRecipesQuery_recipes_recipes {
  id: string;
  title: ReviewRecipesQuery_recipes_recipes_title[];
  serving: number;
  slug: string;
  author: ReviewRecipesQuery_recipes_recipes_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: ReviewRecipesQuery_recipes_recipes_timing;
  ingredients: ReviewRecipesQuery_recipes_recipes_ingredients[];
  instructions: ReviewRecipesQuery_recipes_recipes_instructions[];
  difficulty: RecipeDifficulty | null;
  description: ReviewRecipesQuery_recipes_recipes_description[] | null;
  image: ReviewRecipesQuery_recipes_recipes_image | null;
  tags: string[] | null;
  createdAt: any;
  updatedAt: any;
  status: RecipeStatus;
}

export interface ReviewRecipesQuery_recipes_pagination {
  hasNext: boolean;
  lastId: string | null;
}

export interface ReviewRecipesQuery_recipes {
  recipes: ReviewRecipesQuery_recipes_recipes[];
  pagination: ReviewRecipesQuery_recipes_pagination;
}

export interface ReviewRecipesQuery {
  recipes: ReviewRecipesQuery_recipes;
}

export interface ReviewRecipesQueryVariables {
  lastId?: any | null;
  size?: number | null;
}
