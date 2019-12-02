/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeDifficulty, RecipeStatus } from "./../../../../../models/global-types";

// ====================================================
// GraphQL query operation: ProfileRecipesQuery
// ====================================================

export interface ProfileRecipesQuery_recipes_recipes_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_author_avatar {
  url: string;
}

export interface ProfileRecipesQuery_recipes_recipes_author {
  id: string;
  username: string;
  avatar: ProfileRecipesQuery_recipes_recipes_author_avatar | null;
}

export interface ProfileRecipesQuery_recipes_recipes_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_thumbnail {
  url: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_food_description {
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

export interface ProfileRecipesQuery_recipes_recipes_ingredients_food_image {
  url: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_food_thumbnail {
  url: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_food_nutrition {
  calories: ProfileRecipesQuery_recipes_recipes_ingredients_food_nutrition_calories | null;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_food_origFoodGroups {
  id: string;
  name: ProfileRecipesQuery_recipes_recipes_ingredients_food_origFoodGroups_name[];
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_food {
  id: string;
  name: ProfileRecipesQuery_recipes_recipes_ingredients_food_name[];
  description: ProfileRecipesQuery_recipes_recipes_ingredients_food_description[] | null;
  weights: ProfileRecipesQuery_recipes_recipes_ingredients_food_weights[];
  image: ProfileRecipesQuery_recipes_recipes_ingredients_food_image | null;
  thumbnail: ProfileRecipesQuery_recipes_recipes_ingredients_food_thumbnail | null;
  nutrition: ProfileRecipesQuery_recipes_recipes_ingredients_food_nutrition;
  origFoodGroups: ProfileRecipesQuery_recipes_recipes_ingredients_food_origFoodGroups[][];
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
  thumbnail: ProfileRecipesQuery_recipes_recipes_ingredients_thumbnail | null;
  name: ProfileRecipesQuery_recipes_recipes_ingredients_name[] | null;
  description: ProfileRecipesQuery_recipes_recipes_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
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

export interface ProfileRecipesQuery_recipes_recipes_image {
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
  image: ProfileRecipesQuery_recipes_recipes_image | null;
  tags: string[] | null;
  createdAt: any;
  updatedAt: any;
  status: RecipeStatus;
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
  lastId?: any | null;
  userId?: any | null;
  size?: number | null;
}
