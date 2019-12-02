/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeDifficulty, RecipeStatus } from "./../../../models/global-types";

// ====================================================
// GraphQL query operation: RecipeFormQuery
// ====================================================

export interface RecipeFormQuery_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_author_avatar {
  url: string;
}

export interface RecipeFormQuery_recipe_author {
  id: string;
  username: string;
  avatar: RecipeFormQuery_recipe_author_avatar | null;
}

export interface RecipeFormQuery_recipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface RecipeFormQuery_recipe_ingredients_thumbnail {
  url: string;
}

export interface RecipeFormQuery_recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: RecipeFormQuery_recipe_ingredients_food_weights_name[];
}

export interface RecipeFormQuery_recipe_ingredients_food_image {
  url: string;
}

export interface RecipeFormQuery_recipe_ingredients_food_thumbnail {
  url: string;
}

export interface RecipeFormQuery_recipe_ingredients_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_ingredients_food_nutrition {
  calories: RecipeFormQuery_recipe_ingredients_food_nutrition_calories | null;
}

export interface RecipeFormQuery_recipe_ingredients_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_food_origFoodGroups {
  id: string;
  name: RecipeFormQuery_recipe_ingredients_food_origFoodGroups_name[];
}

export interface RecipeFormQuery_recipe_ingredients_food {
  id: string;
  name: RecipeFormQuery_recipe_ingredients_food_name[];
  description: RecipeFormQuery_recipe_ingredients_food_description[] | null;
  weights: RecipeFormQuery_recipe_ingredients_food_weights[];
  image: RecipeFormQuery_recipe_ingredients_food_image | null;
  thumbnail: RecipeFormQuery_recipe_ingredients_food_thumbnail | null;
  nutrition: RecipeFormQuery_recipe_ingredients_food_nutrition;
  origFoodGroups: RecipeFormQuery_recipe_ingredients_food_origFoodGroups[][];
}

export interface RecipeFormQuery_recipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: RecipeFormQuery_recipe_ingredients_weight_name[];
}

export interface RecipeFormQuery_recipe_ingredients {
  thumbnail: RecipeFormQuery_recipe_ingredients_thumbnail | null;
  name: RecipeFormQuery_recipe_ingredients_name[] | null;
  description: RecipeFormQuery_recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: RecipeFormQuery_recipe_ingredients_food | null;
  weight: RecipeFormQuery_recipe_ingredients_weight | null;
}

export interface RecipeFormQuery_recipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_instructions_image {
  url: string;
}

export interface RecipeFormQuery_recipe_instructions_notes {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_instructions {
  step: number;
  text: RecipeFormQuery_recipe_instructions_text[];
  image: RecipeFormQuery_recipe_instructions_image | null;
  notes: RecipeFormQuery_recipe_instructions_notes[] | null;
}

export interface RecipeFormQuery_recipe_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_image {
  url: string;
}

export interface RecipeFormQuery_recipe {
  id: string;
  title: RecipeFormQuery_recipe_title[];
  serving: number;
  slug: string;
  author: RecipeFormQuery_recipe_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: RecipeFormQuery_recipe_timing;
  ingredients: RecipeFormQuery_recipe_ingredients[];
  instructions: RecipeFormQuery_recipe_instructions[];
  difficulty: RecipeDifficulty | null;
  description: RecipeFormQuery_recipe_description[] | null;
  image: RecipeFormQuery_recipe_image | null;
  tags: string[] | null;
  createdAt: any;
  updatedAt: any;
  status: RecipeStatus;
}

export interface RecipeFormQuery {
  recipe: RecipeFormQuery_recipe;
}

export interface RecipeFormQueryVariables {
  slug: string;
}
