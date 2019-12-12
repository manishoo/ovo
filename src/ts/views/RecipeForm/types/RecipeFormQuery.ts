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
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  avatar: RecipeFormQuery_recipe_author_avatar | null;
}

export interface RecipeFormQuery_recipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface RecipeFormQuery_recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: RecipeFormQuery_recipe_ingredients_customUnit_name[];
}

export interface RecipeFormQuery_recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: RecipeFormQuery_recipe_ingredients_unit_Weight_name[];
}

export interface RecipeFormQuery_recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: RecipeFormQuery_recipe_ingredients_unit_CustomUnit_name[];
}

export type RecipeFormQuery_recipe_ingredients_unit = RecipeFormQuery_recipe_ingredients_unit_Weight | RecipeFormQuery_recipe_ingredients_unit_CustomUnit;

export interface RecipeFormQuery_recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: RecipeFormQuery_recipe_ingredients_item_Food_weights_name[];
}

export interface RecipeFormQuery_recipe_ingredients_item_Food_image {
  url: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Food_nutrition {
  calories: RecipeFormQuery_recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: RecipeFormQuery_recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: RecipeFormQuery_recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: RecipeFormQuery_recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: RecipeFormQuery_recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: RecipeFormQuery_recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface RecipeFormQuery_recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: RecipeFormQuery_recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface RecipeFormQuery_recipe_ingredients_item_Food {
  id: string;
  name: RecipeFormQuery_recipe_ingredients_item_Food_name[];
  description: RecipeFormQuery_recipe_ingredients_item_Food_description[] | null;
  weights: RecipeFormQuery_recipe_ingredients_item_Food_weights[];
  image: RecipeFormQuery_recipe_ingredients_item_Food_image | null;
  thumbnail: RecipeFormQuery_recipe_ingredients_item_Food_thumbnail | null;
  nutrition: RecipeFormQuery_recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: RecipeFormQuery_recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_image {
  url: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_timing {
  totalTime: number;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_thumbnail {
  url: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_customUnit_name[];
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_unit_Weight_name[];
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_unit = RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_unit_Weight | RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_unit_CustomUnit;

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition {
  calories: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food {
  id: string;
  name: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_name[];
  description: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_description[] | null;
  weights: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_weights[];
  image: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item = RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Food | RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item_Recipe;

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_unit | null;
  item: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients_item | null;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_author_avatar {
  url: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_author {
  id: string;
  username: string;
  avatar: RecipeFormQuery_recipe_ingredients_item_Recipe_author_avatar | null;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe_nutrition {
  calories: RecipeFormQuery_recipe_ingredients_item_Recipe_nutrition_calories | null;
  proteins: RecipeFormQuery_recipe_ingredients_item_Recipe_nutrition_proteins | null;
  carbsByDifference: RecipeFormQuery_recipe_ingredients_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: RecipeFormQuery_recipe_ingredients_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: RecipeFormQuery_recipe_ingredients_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: RecipeFormQuery_recipe_ingredients_item_Recipe_nutrition_fats | null;
}

export interface RecipeFormQuery_recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: RecipeFormQuery_recipe_ingredients_item_Recipe_title[];
  image: RecipeFormQuery_recipe_ingredients_item_Recipe_image | null;
  timing: RecipeFormQuery_recipe_ingredients_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: RecipeFormQuery_recipe_ingredients_item_Recipe_thumbnail | null;
  ingredients: RecipeFormQuery_recipe_ingredients_item_Recipe_ingredients[];
  author: RecipeFormQuery_recipe_ingredients_item_Recipe_author;
  nutrition: RecipeFormQuery_recipe_ingredients_item_Recipe_nutrition | null;
}

export type RecipeFormQuery_recipe_ingredients_item = RecipeFormQuery_recipe_ingredients_item_Food | RecipeFormQuery_recipe_ingredients_item_Recipe;

export interface RecipeFormQuery_recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: RecipeFormQuery_recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: RecipeFormQuery_recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: RecipeFormQuery_recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: RecipeFormQuery_recipe_ingredients_unit | null;
  isOptional: boolean | null;
  item: RecipeFormQuery_recipe_ingredients_item | null;
}

export interface RecipeFormQuery_recipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormQuery_recipe_instructions {
  step: number;
  text: RecipeFormQuery_recipe_instructions_text[];
}

export interface RecipeFormQuery_recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormQuery_recipe_nutrition {
  calories: RecipeFormQuery_recipe_nutrition_calories | null;
  proteins: RecipeFormQuery_recipe_nutrition_proteins | null;
  totalCarbs: RecipeFormQuery_recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: RecipeFormQuery_recipe_nutrition_totalAvailableCarbs | null;
  carbsByDifference: RecipeFormQuery_recipe_nutrition_carbsByDifference | null;
  fats: RecipeFormQuery_recipe_nutrition_fats | null;
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
  nutrition: RecipeFormQuery_recipe_nutrition | null;
  difficulty: RecipeDifficulty | null;
  description: RecipeFormQuery_recipe_description[] | null;
  image: RecipeFormQuery_recipe_image | null;
  createdAt: any;
  updatedAt: any;
  status: RecipeStatus;
  tags: string[];
}

export interface RecipeFormQuery {
  recipe: RecipeFormQuery_recipe;
}

export interface RecipeFormQueryVariables {
  slug: string;
}
