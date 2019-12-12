/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL mutation operation: MealItemComponentMutation
// ====================================================

export interface MealItemComponentMutation_suggestMealItem_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_customUnit {
  gramWeight: number | null;
  name: MealItemComponentMutation_suggestMealItem_customUnit_name[];
}

export interface MealItemComponentMutation_suggestMealItem_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealItemComponentMutation_suggestMealItem_unit_Weight_name[];
}

export interface MealItemComponentMutation_suggestMealItem_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItemComponentMutation_suggestMealItem_unit_CustomUnit_name[];
}

export type MealItemComponentMutation_suggestMealItem_unit = MealItemComponentMutation_suggestMealItem_unit_Weight | MealItemComponentMutation_suggestMealItem_unit_CustomUnit;

export interface MealItemComponentMutation_suggestMealItem_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealItemComponentMutation_suggestMealItem_item_Food_weights_name[];
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_image {
  url: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_thumbnail {
  url: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_nutrition {
  calories: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_calories | null;
  proteins: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_proteins | null;
  carbsByDifference: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealItemComponentMutation_suggestMealItem_item_Food_nutrition_fats | null;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_item_Food_origFoodGroups {
  id: string;
  name: MealItemComponentMutation_suggestMealItem_item_Food_origFoodGroups_name[];
}

export interface MealItemComponentMutation_suggestMealItem_item_Food {
  id: string;
  name: MealItemComponentMutation_suggestMealItem_item_Food_name[];
  description: MealItemComponentMutation_suggestMealItem_item_Food_description[] | null;
  weights: MealItemComponentMutation_suggestMealItem_item_Food_weights[];
  image: MealItemComponentMutation_suggestMealItem_item_Food_image | null;
  thumbnail: MealItemComponentMutation_suggestMealItem_item_Food_thumbnail | null;
  nutrition: MealItemComponentMutation_suggestMealItem_item_Food_nutrition | null;
  origFoodGroups: MealItemComponentMutation_suggestMealItem_item_Food_origFoodGroups[][];
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_image {
  url: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_timing {
  totalTime: number;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_thumbnail {
  url: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_customUnit_name[];
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_unit = MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_unit_Weight | MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_unit_CustomUnit;

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_name[];
  description: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_weights[];
  image: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item = MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Food | MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item_Recipe;

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_unit | null;
  item: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients_item | null;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_author_avatar {
  url: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealItemComponentMutation_suggestMealItem_item_Recipe_author_avatar | null;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition {
  calories: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_calories | null;
  proteins: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_proteins | null;
  carbsByDifference: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition_fats | null;
}

export interface MealItemComponentMutation_suggestMealItem_item_Recipe {
  id: string;
  slug: string;
  title: MealItemComponentMutation_suggestMealItem_item_Recipe_title[];
  image: MealItemComponentMutation_suggestMealItem_item_Recipe_image | null;
  timing: MealItemComponentMutation_suggestMealItem_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealItemComponentMutation_suggestMealItem_item_Recipe_thumbnail | null;
  ingredients: MealItemComponentMutation_suggestMealItem_item_Recipe_ingredients[];
  author: MealItemComponentMutation_suggestMealItem_item_Recipe_author;
  nutrition: MealItemComponentMutation_suggestMealItem_item_Recipe_nutrition | null;
}

export type MealItemComponentMutation_suggestMealItem_item = MealItemComponentMutation_suggestMealItem_item_Food | MealItemComponentMutation_suggestMealItem_item_Recipe;

export interface MealItemComponentMutation_suggestMealItem {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItemComponentMutation_suggestMealItem_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItemComponentMutation_suggestMealItem_description[] | null;
  amount: number | null;
  customUnit: MealItemComponentMutation_suggestMealItem_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItemComponentMutation_suggestMealItem_unit | null;
  isOptional: boolean | null;
  item: MealItemComponentMutation_suggestMealItem_item | null;
}

export interface MealItemComponentMutation {
  suggestMealItem: MealItemComponentMutation_suggestMealItem;
}

export interface MealItemComponentMutationVariables {
  userMealId: string;
  mealItemId: string;
  date: any;
}
