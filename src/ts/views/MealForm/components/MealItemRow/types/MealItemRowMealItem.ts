/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../../models/global-types";

// ====================================================
// GraphQL fragment: MealItemRowMealItem
// ====================================================

export interface MealItemRowMealItem_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_customUnit {
  gramWeight: number | null;
  name: MealItemRowMealItem_customUnit_name[];
}

export interface MealItemRowMealItem_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemRowMealItem_unit_Weight_name[];
}

export interface MealItemRowMealItem_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItemRowMealItem_unit_CustomUnit_name[];
}

export type MealItemRowMealItem_unit = MealItemRowMealItem_unit_Weight | MealItemRowMealItem_unit_CustomUnit;

export interface MealItemRowMealItem_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemRowMealItem_item_Food_weights_name[];
}

export interface MealItemRowMealItem_item_Food_image {
  url: string;
}

export interface MealItemRowMealItem_item_Food_thumbnail {
  url: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_item_Food_nutrition {
  calories: MealItemRowMealItem_item_Food_nutrition_calories | null;
  proteins: MealItemRowMealItem_item_Food_nutrition_proteins | null;
  carbsByDifference: MealItemRowMealItem_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealItemRowMealItem_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealItemRowMealItem_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealItemRowMealItem_item_Food_nutrition_fats | null;
}

export interface MealItemRowMealItem_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_item_Food_origFoodGroups {
  id: string;
  name: MealItemRowMealItem_item_Food_origFoodGroups_name[];
}

export interface MealItemRowMealItem_item_Food {
  id: string;
  name: MealItemRowMealItem_item_Food_name[];
  description: MealItemRowMealItem_item_Food_description[] | null;
  weights: MealItemRowMealItem_item_Food_weights[];
  image: MealItemRowMealItem_item_Food_image | null;
  thumbnail: MealItemRowMealItem_item_Food_thumbnail | null;
  nutrition: MealItemRowMealItem_item_Food_nutrition | null;
  origFoodGroups: MealItemRowMealItem_item_Food_origFoodGroups[][];
}

export interface MealItemRowMealItem_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_item_Recipe_image {
  url: string;
}

export interface MealItemRowMealItem_item_Recipe_timing {
  totalTime: number;
}

export interface MealItemRowMealItem_item_Recipe_thumbnail {
  url: string;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealItemRowMealItem_item_Recipe_ingredients_customUnit_name[];
}

export interface MealItemRowMealItem_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemRowMealItem_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealItemRowMealItem_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItemRowMealItem_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealItemRowMealItem_item_Recipe_ingredients_unit = MealItemRowMealItem_item_Recipe_ingredients_unit_Weight | MealItemRowMealItem_item_Recipe_ingredients_unit_CustomUnit;

export interface MealItemRowMealItem_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemRowMealItem_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealItemRowMealItem_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealItemRowMealItem_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: MealItemRowMealItem_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: MealItemRowMealItem_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealItemRowMealItem_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealItemRowMealItem_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealItemRowMealItem_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealItemRowMealItem_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealItemRowMealItem_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealItemRowMealItem_item_Recipe_ingredients_item_Food_name[];
  description: MealItemRowMealItem_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealItemRowMealItem_item_Recipe_ingredients_item_Food_weights[];
  image: MealItemRowMealItem_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealItemRowMealItem_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: MealItemRowMealItem_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: MealItemRowMealItem_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealItemRowMealItem_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealItemRowMealItem_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealItemRowMealItem_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealItemRowMealItem_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealItemRowMealItem_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type MealItemRowMealItem_item_Recipe_ingredients_item = MealItemRowMealItem_item_Recipe_ingredients_item_Food | MealItemRowMealItem_item_Recipe_ingredients_item_Recipe;

export interface MealItemRowMealItem_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItemRowMealItem_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItemRowMealItem_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealItemRowMealItem_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItemRowMealItem_item_Recipe_ingredients_unit | null;
  item: MealItemRowMealItem_item_Recipe_ingredients_item | null;
}

export interface MealItemRowMealItem_item_Recipe_author_avatar {
  url: string;
}

export interface MealItemRowMealItem_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealItemRowMealItem_item_Recipe_author_avatar | null;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_item_Recipe_nutrition {
  calories: MealItemRowMealItem_item_Recipe_nutrition_calories | null;
  proteins: MealItemRowMealItem_item_Recipe_nutrition_proteins | null;
  carbsByDifference: MealItemRowMealItem_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: MealItemRowMealItem_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealItemRowMealItem_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: MealItemRowMealItem_item_Recipe_nutrition_fats | null;
}

export interface MealItemRowMealItem_item_Recipe {
  id: string;
  slug: string;
  title: MealItemRowMealItem_item_Recipe_title[];
  image: MealItemRowMealItem_item_Recipe_image | null;
  timing: MealItemRowMealItem_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealItemRowMealItem_item_Recipe_thumbnail | null;
  ingredients: MealItemRowMealItem_item_Recipe_ingredients[];
  author: MealItemRowMealItem_item_Recipe_author;
  nutrition: MealItemRowMealItem_item_Recipe_nutrition | null;
}

export type MealItemRowMealItem_item = MealItemRowMealItem_item_Food | MealItemRowMealItem_item_Recipe;

export interface MealItemRowMealItem_alternativeMealItems_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_customUnit {
  gramWeight: number | null;
  name: MealItemRowMealItem_alternativeMealItems_customUnit_name[];
}

export interface MealItemRowMealItem_alternativeMealItems_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemRowMealItem_alternativeMealItems_unit_Weight_name[];
}

export interface MealItemRowMealItem_alternativeMealItems_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItemRowMealItem_alternativeMealItems_unit_CustomUnit_name[];
}

export type MealItemRowMealItem_alternativeMealItems_unit = MealItemRowMealItem_alternativeMealItems_unit_Weight | MealItemRowMealItem_alternativeMealItems_unit_CustomUnit;

export interface MealItemRowMealItem_alternativeMealItems_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemRowMealItem_alternativeMealItems_item_Food_weights_name[];
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_image {
  url: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_thumbnail {
  url: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_nutrition {
  calories: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_calories | null;
  proteins: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_proteins | null;
  carbsByDifference: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition_fats | null;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food_origFoodGroups {
  id: string;
  name: MealItemRowMealItem_alternativeMealItems_item_Food_origFoodGroups_name[];
}

export interface MealItemRowMealItem_alternativeMealItems_item_Food {
  id: string;
  name: MealItemRowMealItem_alternativeMealItems_item_Food_name[];
  description: MealItemRowMealItem_alternativeMealItems_item_Food_description[] | null;
  weights: MealItemRowMealItem_alternativeMealItems_item_Food_weights[];
  image: MealItemRowMealItem_alternativeMealItems_item_Food_image | null;
  thumbnail: MealItemRowMealItem_alternativeMealItems_item_Food_thumbnail | null;
  nutrition: MealItemRowMealItem_alternativeMealItems_item_Food_nutrition | null;
  origFoodGroups: MealItemRowMealItem_alternativeMealItems_item_Food_origFoodGroups[][];
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_image {
  url: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_timing {
  totalTime: number;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_thumbnail {
  url: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_customUnit_name[];
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_unit = MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_unit_Weight | MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit;

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_name[];
  description: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_weights[];
  image: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item = MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Food | MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item_Recipe;

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_unit | null;
  item: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients_item | null;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_author_avatar {
  url: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealItemRowMealItem_alternativeMealItems_item_Recipe_author_avatar | null;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition {
  calories: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_calories | null;
  proteins: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_proteins | null;
  carbsByDifference: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition_fats | null;
}

export interface MealItemRowMealItem_alternativeMealItems_item_Recipe {
  id: string;
  slug: string;
  title: MealItemRowMealItem_alternativeMealItems_item_Recipe_title[];
  image: MealItemRowMealItem_alternativeMealItems_item_Recipe_image | null;
  timing: MealItemRowMealItem_alternativeMealItems_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealItemRowMealItem_alternativeMealItems_item_Recipe_thumbnail | null;
  ingredients: MealItemRowMealItem_alternativeMealItems_item_Recipe_ingredients[];
  author: MealItemRowMealItem_alternativeMealItems_item_Recipe_author;
  nutrition: MealItemRowMealItem_alternativeMealItems_item_Recipe_nutrition | null;
}

export type MealItemRowMealItem_alternativeMealItems_item = MealItemRowMealItem_alternativeMealItems_item_Food | MealItemRowMealItem_alternativeMealItems_item_Recipe;

export interface MealItemRowMealItem_alternativeMealItems {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItemRowMealItem_alternativeMealItems_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItemRowMealItem_alternativeMealItems_description[] | null;
  amount: number | null;
  customUnit: MealItemRowMealItem_alternativeMealItems_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItemRowMealItem_alternativeMealItems_unit | null;
  item: MealItemRowMealItem_alternativeMealItems_item | null;
}

export interface MealItemRowMealItem {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItemRowMealItem_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItemRowMealItem_description[] | null;
  amount: number | null;
  customUnit: MealItemRowMealItem_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItemRowMealItem_unit | null;
  isOptional: boolean | null;
  item: MealItemRowMealItem_item | null;
  alternativeMealItems: MealItemRowMealItem_alternativeMealItems[];
}
