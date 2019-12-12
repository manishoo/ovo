/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeDifficulty, RecipeStatus } from "./../../../models/global-types";

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

export interface RecipeQuery_recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: RecipeQuery_recipe_ingredients_customUnit_name[];
}

export interface RecipeQuery_recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: RecipeQuery_recipe_ingredients_unit_Weight_name[];
}

export interface RecipeQuery_recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: RecipeQuery_recipe_ingredients_unit_CustomUnit_name[];
}

export type RecipeQuery_recipe_ingredients_unit = RecipeQuery_recipe_ingredients_unit_Weight | RecipeQuery_recipe_ingredients_unit_CustomUnit;

export interface RecipeQuery_recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: RecipeQuery_recipe_ingredients_item_Food_weights_name[];
}

export interface RecipeQuery_recipe_ingredients_item_Food_image {
  url: string;
}

export interface RecipeQuery_recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface RecipeQuery_recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_ingredients_item_Food_nutrition {
  calories: RecipeQuery_recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: RecipeQuery_recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: RecipeQuery_recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: RecipeQuery_recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: RecipeQuery_recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: RecipeQuery_recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface RecipeQuery_recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: RecipeQuery_recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface RecipeQuery_recipe_ingredients_item_Food {
  id: string;
  name: RecipeQuery_recipe_ingredients_item_Food_name[];
  description: RecipeQuery_recipe_ingredients_item_Food_description[] | null;
  weights: RecipeQuery_recipe_ingredients_item_Food_weights[];
  image: RecipeQuery_recipe_ingredients_item_Food_image | null;
  thumbnail: RecipeQuery_recipe_ingredients_item_Food_thumbnail | null;
  nutrition: RecipeQuery_recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: RecipeQuery_recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_image {
  url: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_timing {
  totalTime: number;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_thumbnail {
  url: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_customUnit_name[];
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_unit_Weight_name[];
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type RecipeQuery_recipe_ingredients_item_Recipe_ingredients_unit = RecipeQuery_recipe_ingredients_item_Recipe_ingredients_unit_Weight | RecipeQuery_recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit;

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition {
  calories: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food {
  id: string;
  name: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_name[];
  description: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_description[] | null;
  weights: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_weights[];
  image: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item = RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Food | RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe;

export interface RecipeQuery_recipe_ingredients_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_unit | null;
  item: RecipeQuery_recipe_ingredients_item_Recipe_ingredients_item | null;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_author_avatar {
  url: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_author {
  id: string;
  username: string;
  avatar: RecipeQuery_recipe_ingredients_item_Recipe_author_avatar | null;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe_nutrition {
  calories: RecipeQuery_recipe_ingredients_item_Recipe_nutrition_calories | null;
  proteins: RecipeQuery_recipe_ingredients_item_Recipe_nutrition_proteins | null;
  carbsByDifference: RecipeQuery_recipe_ingredients_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: RecipeQuery_recipe_ingredients_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: RecipeQuery_recipe_ingredients_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: RecipeQuery_recipe_ingredients_item_Recipe_nutrition_fats | null;
}

export interface RecipeQuery_recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: RecipeQuery_recipe_ingredients_item_Recipe_title[];
  image: RecipeQuery_recipe_ingredients_item_Recipe_image | null;
  timing: RecipeQuery_recipe_ingredients_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: RecipeQuery_recipe_ingredients_item_Recipe_thumbnail | null;
  ingredients: RecipeQuery_recipe_ingredients_item_Recipe_ingredients[];
  author: RecipeQuery_recipe_ingredients_item_Recipe_author;
  nutrition: RecipeQuery_recipe_ingredients_item_Recipe_nutrition | null;
}

export type RecipeQuery_recipe_ingredients_item = RecipeQuery_recipe_ingredients_item_Food | RecipeQuery_recipe_ingredients_item_Recipe;

export interface RecipeQuery_recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: RecipeQuery_recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: RecipeQuery_recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: RecipeQuery_recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: RecipeQuery_recipe_ingredients_unit | null;
  isOptional: boolean | null;
  item: RecipeQuery_recipe_ingredients_item | null;
}

export interface RecipeQuery_recipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface RecipeQuery_recipe_instructions {
  step: number;
  text: RecipeQuery_recipe_instructions_text[];
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
  status: RecipeStatus;
  tags: string[];
}

export interface RecipeQuery {
  recipe: RecipeQuery_recipe;
}

export interface RecipeQueryVariables {
  slug: string;
}
