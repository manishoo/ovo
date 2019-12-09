/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { RecipeInput, LanguageCode, RecipeDifficulty, RecipeStatus } from "./../../../models/global-types";

// ====================================================
// GraphQL mutation operation: RecipeFormCreateMutation
// ====================================================

export interface RecipeFormCreateMutation_createRecipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_author_avatar {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  avatar: RecipeFormCreateMutation_createRecipe_author_avatar | null;
}

export interface RecipeFormCreateMutation_createRecipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_customUnit {
  gramWeight: number | null;
  name: RecipeFormCreateMutation_createRecipe_ingredients_customUnit_name[];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: RecipeFormCreateMutation_createRecipe_ingredients_unit_Weight_name[];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: RecipeFormCreateMutation_createRecipe_ingredients_unit_CustomUnit_name[];
}

export type RecipeFormCreateMutation_createRecipe_ingredients_unit = RecipeFormCreateMutation_createRecipe_ingredients_unit_Weight | RecipeFormCreateMutation_createRecipe_ingredients_unit_CustomUnit;

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_weights_name[];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_image {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition {
  calories: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition_calories | null;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Food {
  id: string;
  name: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_name[];
  description: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_description[] | null;
  weights: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_weights[];
  image: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_image | null;
  thumbnail: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_thumbnail | null;
  nutrition: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_nutrition;
  origFoodGroups: RecipeFormCreateMutation_createRecipe_ingredients_item_Food_origFoodGroups[][];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_image {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_timing {
  totalTime: number;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_thumbnail {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_customUnit_name[];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_unit_Weight_name[];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_unit = RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_unit_Weight | RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_unit_CustomUnit;

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition {
  calories: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calories | null;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food {
  id: string;
  name: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_name[];
  description: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_description[] | null;
  weights: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_weights[];
  image: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item = RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Food | RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item_Recipe;

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_unit | null;
  item: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients_item | null;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_author_avatar {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_author {
  id: string;
  username: string;
  avatar: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_author_avatar | null;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition {
  calories: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_title[];
  image: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_image | null;
  timing: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_thumbnail | null;
  ingredients: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_ingredients[];
  author: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_author;
  nutrition: RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe_nutrition;
}

export type RecipeFormCreateMutation_createRecipe_ingredients_item = RecipeFormCreateMutation_createRecipe_ingredients_item_Food | RecipeFormCreateMutation_createRecipe_ingredients_item_Recipe;

export interface RecipeFormCreateMutation_createRecipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: RecipeFormCreateMutation_createRecipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: RecipeFormCreateMutation_createRecipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: RecipeFormCreateMutation_createRecipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: RecipeFormCreateMutation_createRecipe_ingredients_unit | null;
  isOptional: boolean | null;
  item: RecipeFormCreateMutation_createRecipe_ingredients_item | null;
}

export interface RecipeFormCreateMutation_createRecipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_instructions {
  step: number;
  text: RecipeFormCreateMutation_createRecipe_instructions_text[];
}

export interface RecipeFormCreateMutation_createRecipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface RecipeFormCreateMutation_createRecipe_nutrition {
  calories: RecipeFormCreateMutation_createRecipe_nutrition_calories | null;
  proteins: RecipeFormCreateMutation_createRecipe_nutrition_proteins | null;
  totalCarbs: RecipeFormCreateMutation_createRecipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: RecipeFormCreateMutation_createRecipe_nutrition_totalAvailableCarbs | null;
  carbsByDifference: RecipeFormCreateMutation_createRecipe_nutrition_carbsByDifference | null;
  fats: RecipeFormCreateMutation_createRecipe_nutrition_fats | null;
}

export interface RecipeFormCreateMutation_createRecipe_description {
  text: string;
  locale: LanguageCode;
}

export interface RecipeFormCreateMutation_createRecipe_image {
  url: string;
}

export interface RecipeFormCreateMutation_createRecipe {
  id: string;
  title: RecipeFormCreateMutation_createRecipe_title[];
  serving: number;
  slug: string;
  author: RecipeFormCreateMutation_createRecipe_author;
  likesCount: number;
  userLikedRecipe: boolean | null;
  timing: RecipeFormCreateMutation_createRecipe_timing;
  ingredients: RecipeFormCreateMutation_createRecipe_ingredients[];
  instructions: RecipeFormCreateMutation_createRecipe_instructions[];
  nutrition: RecipeFormCreateMutation_createRecipe_nutrition;
  difficulty: RecipeDifficulty | null;
  description: RecipeFormCreateMutation_createRecipe_description[] | null;
  image: RecipeFormCreateMutation_createRecipe_image | null;
  createdAt: any;
  updatedAt: any;
  status: RecipeStatus;
  tags: string[];
}

export interface RecipeFormCreateMutation {
  createRecipe: RecipeFormCreateMutation_createRecipe;
}

export interface RecipeFormCreateMutationVariables {
  recipe: RecipeInput;
}
