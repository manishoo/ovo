/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeDifficulty, RecipeStatus } from "./../../../models/global-types";

// ====================================================
// GraphQL fragment: Recipe
// ====================================================

export interface Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_author_avatar {
  url: string;
}

export interface Recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  avatar: Recipe_author_avatar | null;
}

export interface Recipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: Recipe_ingredients_customUnit_name[];
}

export interface Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: Recipe_ingredients_unit_Weight_name[];
}

export interface Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: Recipe_ingredients_unit_CustomUnit_name[];
}

export type Recipe_ingredients_unit = Recipe_ingredients_unit_Weight | Recipe_ingredients_unit_CustomUnit;

export interface Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: Recipe_ingredients_item_Food_weights_name[];
}

export interface Recipe_ingredients_item_Food_image {
  url: string;
}

export interface Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Food_nutrition {
  calories: Recipe_ingredients_item_Food_nutrition_calories | null;
}

export interface Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface Recipe_ingredients_item_Food {
  id: string;
  name: Recipe_ingredients_item_Food_name[];
  description: Recipe_ingredients_item_Food_description[] | null;
  weights: Recipe_ingredients_item_Food_weights[];
  image: Recipe_ingredients_item_Food_image | null;
  thumbnail: Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_image {
  url: string;
}

export interface Recipe_ingredients_item_Recipe_timing {
  totalTime: number;
}

export interface Recipe_ingredients_item_Recipe_thumbnail {
  url: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: Recipe_ingredients_item_Recipe_ingredients_customUnit_name[];
}

export interface Recipe_ingredients_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: Recipe_ingredients_item_Recipe_ingredients_unit_Weight_name[];
}

export interface Recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: Recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type Recipe_ingredients_item_Recipe_ingredients_unit = Recipe_ingredients_item_Recipe_ingredients_unit_Weight | Recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit;

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: Recipe_ingredients_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition {
  calories: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calories | null;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: Recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Food {
  id: string;
  name: Recipe_ingredients_item_Recipe_ingredients_item_Food_name[];
  description: Recipe_ingredients_item_Recipe_ingredients_item_Food_description[] | null;
  weights: Recipe_ingredients_item_Recipe_ingredients_item_Food_weights[];
  image: Recipe_ingredients_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: Recipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: Recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: Recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: Recipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface Recipe_ingredients_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: Recipe_ingredients_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: Recipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type Recipe_ingredients_item_Recipe_ingredients_item = Recipe_ingredients_item_Recipe_ingredients_item_Food | Recipe_ingredients_item_Recipe_ingredients_item_Recipe;

export interface Recipe_ingredients_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: Recipe_ingredients_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: Recipe_ingredients_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: Recipe_ingredients_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: Recipe_ingredients_item_Recipe_ingredients_unit | null;
  item: Recipe_ingredients_item_Recipe_ingredients_item | null;
}

export interface Recipe_ingredients_item_Recipe_author_avatar {
  url: string;
}

export interface Recipe_ingredients_item_Recipe_author {
  id: string;
  username: string;
  avatar: Recipe_ingredients_item_Recipe_author_avatar | null;
}

export interface Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface Recipe_ingredients_item_Recipe_nutrition {
  calories: Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: Recipe_ingredients_item_Recipe_title[];
  image: Recipe_ingredients_item_Recipe_image | null;
  timing: Recipe_ingredients_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: Recipe_ingredients_item_Recipe_thumbnail | null;
  ingredients: Recipe_ingredients_item_Recipe_ingredients[];
  author: Recipe_ingredients_item_Recipe_author;
  nutrition: Recipe_ingredients_item_Recipe_nutrition;
}

export type Recipe_ingredients_item = Recipe_ingredients_item_Food | Recipe_ingredients_item_Recipe;

export interface Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: Recipe_ingredients_unit | null;
  isOptional: boolean | null;
  item: Recipe_ingredients_item | null;
}

export interface Recipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_instructions {
  step: number;
  text: Recipe_instructions_text[];
}

export interface Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Recipe_nutrition {
  calories: Recipe_nutrition_calories | null;
  proteins: Recipe_nutrition_proteins | null;
  totalCarbs: Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: Recipe_nutrition_totalAvailableCarbs | null;
  carbsByDifference: Recipe_nutrition_carbsByDifference | null;
  fats: Recipe_nutrition_fats | null;
}

export interface Recipe_description {
  text: string;
  locale: LanguageCode;
}

export interface Recipe_image {
  url: string;
}

export interface Recipe {
  id: string;
  title: Recipe_title[];
  serving: number;
  slug: string;
  author: Recipe_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: Recipe_timing;
  ingredients: Recipe_ingredients[];
  instructions: Recipe_instructions[];
  nutrition: Recipe_nutrition;
  difficulty: RecipeDifficulty | null;
  description: Recipe_description[] | null;
  image: Recipe_image | null;
  createdAt: any;
  updatedAt: any;
  status: RecipeStatus;
  tags: string[];
}
