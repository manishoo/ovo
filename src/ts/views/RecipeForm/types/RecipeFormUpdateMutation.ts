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
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  avatar: RecipeFormUpdateMutation_updateRecipe_author_avatar | null;
}

export interface RecipeFormUpdateMutation_updateRecipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_customUnit {
  gramWeight: number | null;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_customUnit_name[];
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_unit_Weight_name[];
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_unit_CustomUnit_name[];
}

export type RecipeFormUpdateMutation_updateRecipe_ingredients_unit = RecipeFormUpdateMutation_updateRecipe_ingredients_unit_Weight | RecipeFormUpdateMutation_updateRecipe_ingredients_unit_CustomUnit;

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_weights_name[];
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_image {
  url: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_nutrition {
  calories: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_calories | null;
  proteins: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_fats | null;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food {
  id: string;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_name[];
  description: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_description[] | null;
  weights: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_weights[];
  image: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_image | null;
  thumbnail: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_thumbnail | null;
  nutrition: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food_origFoodGroups[][];
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_image {
  url: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_timing {
  totalTime: number;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_thumbnail {
  url: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_customUnit_name[];
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_Weight_name[];
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit = RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_Weight | RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_CustomUnit;

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition {
  calories: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food {
  id: string;
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_name[];
  description: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_description[] | null;
  weights: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_weights[];
  image: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item = RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food | RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe;

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit | null;
  item: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item | null;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_author_avatar {
  url: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_author {
  id: string;
  username: string;
  avatar: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_author_avatar | null;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition {
  calories: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_calories | null;
  proteins: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_proteins | null;
  carbsByDifference: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_fats | null;
}

export interface RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_title[];
  image: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_image | null;
  timing: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_thumbnail | null;
  ingredients: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients[];
  author: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_author;
  nutrition: RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition | null;
}

export type RecipeFormUpdateMutation_updateRecipe_ingredients_item = RecipeFormUpdateMutation_updateRecipe_ingredients_item_Food | RecipeFormUpdateMutation_updateRecipe_ingredients_item_Recipe;

export interface RecipeFormUpdateMutation_updateRecipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: RecipeFormUpdateMutation_updateRecipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: RecipeFormUpdateMutation_updateRecipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: RecipeFormUpdateMutation_updateRecipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: RecipeFormUpdateMutation_updateRecipe_ingredients_unit | null;
  isOptional: boolean | null;
  item: RecipeFormUpdateMutation_updateRecipe_ingredients_item | null;
}

export interface RecipeFormUpdateMutation_updateRecipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormUpdateMutation_updateRecipe_instructions {
  step: number;
  text: RecipeFormUpdateMutation_updateRecipe_instructions_text[];
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormUpdateMutation_updateRecipe_nutrition {
  calories: RecipeFormUpdateMutation_updateRecipe_nutrition_calories | null;
  proteins: RecipeFormUpdateMutation_updateRecipe_nutrition_proteins | null;
  totalCarbs: RecipeFormUpdateMutation_updateRecipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: RecipeFormUpdateMutation_updateRecipe_nutrition_totalAvailableCarbs | null;
  carbsByDifference: RecipeFormUpdateMutation_updateRecipe_nutrition_carbsByDifference | null;
  fats: RecipeFormUpdateMutation_updateRecipe_nutrition_fats | null;
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
  nutrition: RecipeFormUpdateMutation_updateRecipe_nutrition | null;
  difficulty: RecipeDifficulty | null;
  description: RecipeFormUpdateMutation_updateRecipe_description[] | null;
  image: RecipeFormUpdateMutation_updateRecipe_image | null;
  createdAt: any;
  updatedAt: any;
  status: RecipeStatus;
  tags: string[];
}

export interface RecipeFormUpdateMutation {
  updateRecipe: RecipeFormUpdateMutation_updateRecipe;
}

export interface RecipeFormUpdateMutationVariables {
  id: any;
  recipe: RecipeInput;
}
