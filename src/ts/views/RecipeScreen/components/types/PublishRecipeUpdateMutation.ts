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
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  avatar: PublishRecipeUpdateMutation_updateRecipe_author_avatar | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_timing {
  prepTime: number | null;
  cookTime: number | null;
  totalTime: number;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_customUnit {
  gramWeight: number | null;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_customUnit_name[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_unit_Weight_name[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_unit_CustomUnit_name[];
}

export type PublishRecipeUpdateMutation_updateRecipe_ingredients_unit = PublishRecipeUpdateMutation_updateRecipe_ingredients_unit_Weight | PublishRecipeUpdateMutation_updateRecipe_ingredients_unit_CustomUnit;

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_weights_name[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_image {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition {
  calories: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition_calories | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food {
  id: string;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_name[];
  description: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_description[] | null;
  weights: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_weights[];
  image: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_image | null;
  thumbnail: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_thumbnail | null;
  nutrition: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_nutrition;
  origFoodGroups: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food_origFoodGroups[][];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_image {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_timing {
  totalTime: number;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_thumbnail {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_customUnit_name[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_Weight_name[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit = PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_Weight | PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit_CustomUnit;

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition {
  calories: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition_calories | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food {
  id: string;
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_name[];
  description: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_description[] | null;
  weights: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_weights[];
  image: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item = PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Food | PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item_Recipe;

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_unit | null;
  item: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients_item | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_author_avatar {
  url: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_author {
  id: string;
  username: string;
  avatar: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_author_avatar | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition {
  calories: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_title[];
  image: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_image | null;
  timing: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_thumbnail | null;
  ingredients: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_ingredients[];
  author: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_author;
  nutrition: PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe_nutrition;
}

export type PublishRecipeUpdateMutation_updateRecipe_ingredients_item = PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Food | PublishRecipeUpdateMutation_updateRecipe_ingredients_item_Recipe;

export interface PublishRecipeUpdateMutation_updateRecipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: PublishRecipeUpdateMutation_updateRecipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: PublishRecipeUpdateMutation_updateRecipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: PublishRecipeUpdateMutation_updateRecipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: PublishRecipeUpdateMutation_updateRecipe_ingredients_unit | null;
  isOptional: boolean | null;
  item: PublishRecipeUpdateMutation_updateRecipe_ingredients_item | null;
}

export interface PublishRecipeUpdateMutation_updateRecipe_instructions_text {
  text: string;
  locale: LanguageCode;
}

export interface PublishRecipeUpdateMutation_updateRecipe_instructions {
  step: number;
  text: PublishRecipeUpdateMutation_updateRecipe_instructions_text[];
}

export interface PublishRecipeUpdateMutation_updateRecipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface PublishRecipeUpdateMutation_updateRecipe_nutrition {
  calories: PublishRecipeUpdateMutation_updateRecipe_nutrition_calories | null;
  proteins: PublishRecipeUpdateMutation_updateRecipe_nutrition_proteins | null;
  totalCarbs: PublishRecipeUpdateMutation_updateRecipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: PublishRecipeUpdateMutation_updateRecipe_nutrition_totalAvailableCarbs | null;
  carbsByDifference: PublishRecipeUpdateMutation_updateRecipe_nutrition_carbsByDifference | null;
  fats: PublishRecipeUpdateMutation_updateRecipe_nutrition_fats | null;
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
  nutrition: PublishRecipeUpdateMutation_updateRecipe_nutrition;
  difficulty: RecipeDifficulty | null;
  description: PublishRecipeUpdateMutation_updateRecipe_description[] | null;
  image: PublishRecipeUpdateMutation_updateRecipe_image | null;
  createdAt: any;
  updatedAt: any;
  status: RecipeStatus;
  tags: string[];
}

export interface PublishRecipeUpdateMutation {
  updateRecipe: PublishRecipeUpdateMutation_updateRecipe;
}

export interface PublishRecipeUpdateMutationVariables {
  id: any;
  recipe: RecipeInput;
}
