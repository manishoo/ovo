/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealAvailableTime, MealSize, LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL mutation operation: MealComponentSuggestMealMutation
// ====================================================

export interface MealComponentSuggestMealMutation_suggestMeal_userMeal {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_customUnit {
  gramWeight: number | null;
  name: MealComponentSuggestMealMutation_suggestMeal_items_customUnit_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealComponentSuggestMealMutation_suggestMeal_items_unit_Weight_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_unit_CustomUnit {
  gramWeight: number | null;
  name: MealComponentSuggestMealMutation_suggestMeal_items_unit_CustomUnit_name[];
}

export type MealComponentSuggestMealMutation_suggestMeal_items_unit = MealComponentSuggestMealMutation_suggestMeal_items_unit_Weight | MealComponentSuggestMealMutation_suggestMeal_items_unit_CustomUnit;

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_weights_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_image {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_thumbnail {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition {
  calories: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_calories | null;
  proteins: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_proteins | null;
  carbsByDifference: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition_fats | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food_origFoodGroups {
  id: string;
  name: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_origFoodGroups_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Food {
  id: string;
  name: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_name[];
  description: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_description[] | null;
  weights: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_weights[];
  image: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_image | null;
  thumbnail: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_thumbnail | null;
  nutrition: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_nutrition | null;
  origFoodGroups: MealComponentSuggestMealMutation_suggestMeal_items_item_Food_origFoodGroups[][];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_image {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_timing {
  totalTime: number;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_thumbnail {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_customUnit_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_unit = MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_unit_Weight | MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_unit_CustomUnit;

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_name[];
  description: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_weights[];
  image: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item = MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Food | MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item_Recipe;

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_unit | null;
  item: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients_item | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_author_avatar {
  url: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_author_avatar | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition {
  calories: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_calories | null;
  proteins: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_proteins | null;
  carbsByDifference: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition_fats | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe {
  id: string;
  slug: string;
  title: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_title[];
  image: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_image | null;
  timing: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_thumbnail | null;
  ingredients: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_ingredients[];
  author: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_author;
  nutrition: MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe_nutrition | null;
}

export type MealComponentSuggestMealMutation_suggestMeal_items_item = MealComponentSuggestMealMutation_suggestMeal_items_item_Food | MealComponentSuggestMealMutation_suggestMeal_items_item_Recipe;

export interface MealComponentSuggestMealMutation_suggestMeal_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealComponentSuggestMealMutation_suggestMeal_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealComponentSuggestMealMutation_suggestMeal_items_description[] | null;
  amount: number | null;
  customUnit: MealComponentSuggestMealMutation_suggestMeal_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealComponentSuggestMealMutation_suggestMeal_items_unit | null;
  isOptional: boolean | null;
  item: MealComponentSuggestMealMutation_suggestMeal_items_item | null;
}

export interface MealComponentSuggestMealMutation_suggestMeal {
  id: any;
  userMeal: MealComponentSuggestMealMutation_suggestMeal_userMeal;
  time: any | null;
  items: MealComponentSuggestMealMutation_suggestMeal_items[];
}

export interface MealComponentSuggestMealMutation {
  suggestMeal: MealComponentSuggestMealMutation_suggestMeal;
}

export interface MealComponentSuggestMealMutationVariables {
  userMealId: string;
  date: any;
}
