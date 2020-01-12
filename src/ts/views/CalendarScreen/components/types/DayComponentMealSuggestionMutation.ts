/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealAvailableTime, MealSize, LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL mutation operation: DayComponentMealSuggestionMutation
// ====================================================

export interface DayComponentMealSuggestionMutation_suggestDay_meals_userMeal {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_description {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_customUnit {
  gramWeight: number | null;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_customUnit_name[];
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_unit_Weight_name[];
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_unit_CustomUnit {
  gramWeight: number | null;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_unit_CustomUnit_name[];
}

export type DayComponentMealSuggestionMutation_suggestDay_meals_items_unit = DayComponentMealSuggestionMutation_suggestDay_meals_items_unit_Weight | DayComponentMealSuggestionMutation_suggestDay_meals_items_unit_CustomUnit;

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_weights_name[];
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_image {
  url: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_thumbnail {
  url: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_nutrition {
  calories: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_nutrition_calories | null;
  proteins: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_nutrition_proteins | null;
  carbsByDifference: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_nutrition_totalAvailableCarbs | null;
  fats: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_nutrition_fats | null;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_origFoodGroups {
  id: string;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_origFoodGroups_name[];
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food {
  id: string;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_name[];
  description: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_description[] | null;
  weights: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_weights[];
  image: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_image | null;
  thumbnail: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_thumbnail | null;
  nutrition: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_nutrition | null;
  origFoodGroups: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food_origFoodGroups[][];
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_image {
  url: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_timing {
  totalTime: number;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_thumbnail {
  url: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_customUnit_name[];
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_unit = DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_unit_Weight | DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_unit_CustomUnit;

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_nutrition {
  calories: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_name[];
  description: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_weights[];
  image: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item = DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Food | DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item_Recipe;

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_unit | null;
  item: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients_item | null;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_author_avatar {
  url: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_author_avatar | null;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_nutrition {
  calories: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_nutrition_calories | null;
  proteins: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_nutrition_proteins | null;
  carbsByDifference: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_nutrition_fats | null;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe {
  id: string;
  slug: string;
  title: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_title[];
  image: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_image | null;
  timing: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_thumbnail | null;
  ingredients: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_ingredients[];
  author: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_author;
  nutrition: DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe_nutrition | null;
}

export type DayComponentMealSuggestionMutation_suggestDay_meals_items_item = DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Food | DayComponentMealSuggestionMutation_suggestDay_meals_items_item_Recipe;

export interface DayComponentMealSuggestionMutation_suggestDay_meals_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: DayComponentMealSuggestionMutation_suggestDay_meals_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: DayComponentMealSuggestionMutation_suggestDay_meals_items_description[] | null;
  amount: number | null;
  customUnit: DayComponentMealSuggestionMutation_suggestDay_meals_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: DayComponentMealSuggestionMutation_suggestDay_meals_items_unit | null;
  isOptional: boolean | null;
  item: DayComponentMealSuggestionMutation_suggestDay_meals_items_item | null;
}

export interface DayComponentMealSuggestionMutation_suggestDay_meals {
  id: any;
  userMeal: DayComponentMealSuggestionMutation_suggestDay_meals_userMeal;
  time: any | null;
  items: DayComponentMealSuggestionMutation_suggestDay_meals_items[];
}

export interface DayComponentMealSuggestionMutation_suggestDay {
  id: string;
  date: any;
  meals: DayComponentMealSuggestionMutation_suggestDay_meals[];
}

export interface DayComponentMealSuggestionMutation {
  suggestDay: DayComponentMealSuggestionMutation_suggestDay;
}

export interface DayComponentMealSuggestionMutationVariables {
  date: any;
}
