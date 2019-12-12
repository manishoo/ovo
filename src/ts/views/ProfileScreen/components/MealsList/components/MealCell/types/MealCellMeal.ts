/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../../../../models/global-types";

// ====================================================
// GraphQL fragment: MealCellMeal
// ====================================================

export interface MealCellMeal_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_customUnit {
  gramWeight: number | null;
  name: MealCellMeal_items_customUnit_name[];
}

export interface MealCellMeal_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealCellMeal_items_unit_Weight_name[];
}

export interface MealCellMeal_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_unit_CustomUnit {
  gramWeight: number | null;
  name: MealCellMeal_items_unit_CustomUnit_name[];
}

export type MealCellMeal_items_unit = MealCellMeal_items_unit_Weight | MealCellMeal_items_unit_CustomUnit;

export interface MealCellMeal_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealCellMeal_items_item_Food_weights_name[];
}

export interface MealCellMeal_items_item_Food_image {
  url: string;
}

export interface MealCellMeal_items_item_Food_thumbnail {
  url: string;
}

export interface MealCellMeal_items_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_item_Food_nutrition {
  calories: MealCellMeal_items_item_Food_nutrition_calories | null;
  proteins: MealCellMeal_items_item_Food_nutrition_proteins | null;
  carbsByDifference: MealCellMeal_items_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealCellMeal_items_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealCellMeal_items_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealCellMeal_items_item_Food_nutrition_fats | null;
}

export interface MealCellMeal_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Food_origFoodGroups {
  id: string;
  name: MealCellMeal_items_item_Food_origFoodGroups_name[];
}

export interface MealCellMeal_items_item_Food {
  id: string;
  name: MealCellMeal_items_item_Food_name[];
  description: MealCellMeal_items_item_Food_description[] | null;
  weights: MealCellMeal_items_item_Food_weights[];
  image: MealCellMeal_items_item_Food_image | null;
  thumbnail: MealCellMeal_items_item_Food_thumbnail | null;
  nutrition: MealCellMeal_items_item_Food_nutrition | null;
  origFoodGroups: MealCellMeal_items_item_Food_origFoodGroups[][];
}

export interface MealCellMeal_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_image {
  url: string;
}

export interface MealCellMeal_items_item_Recipe_timing {
  totalTime: number;
}

export interface MealCellMeal_items_item_Recipe_thumbnail {
  url: string;
}

export interface MealCellMeal_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealCellMeal_items_item_Recipe_ingredients_customUnit_name[];
}

export interface MealCellMeal_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealCellMeal_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealCellMeal_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealCellMeal_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealCellMeal_items_item_Recipe_ingredients_unit = MealCellMeal_items_item_Recipe_ingredients_unit_Weight | MealCellMeal_items_item_Recipe_ingredients_unit_CustomUnit;

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealCellMeal_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealCellMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: MealCellMeal_items_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: MealCellMeal_items_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealCellMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealCellMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealCellMeal_items_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealCellMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealCellMeal_items_item_Recipe_ingredients_item_Food_name[];
  description: MealCellMeal_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealCellMeal_items_item_Recipe_ingredients_item_Food_weights[];
  image: MealCellMeal_items_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealCellMeal_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: MealCellMeal_items_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: MealCellMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealCellMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealCellMeal_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealCellMeal_items_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealCellMeal_items_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type MealCellMeal_items_item_Recipe_ingredients_item = MealCellMeal_items_item_Recipe_ingredients_item_Food | MealCellMeal_items_item_Recipe_ingredients_item_Recipe;

export interface MealCellMeal_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealCellMeal_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealCellMeal_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealCellMeal_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealCellMeal_items_item_Recipe_ingredients_unit | null;
  item: MealCellMeal_items_item_Recipe_ingredients_item | null;
}

export interface MealCellMeal_items_item_Recipe_author_avatar {
  url: string;
}

export interface MealCellMeal_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealCellMeal_items_item_Recipe_author_avatar | null;
}

export interface MealCellMeal_items_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_item_Recipe_nutrition {
  calories: MealCellMeal_items_item_Recipe_nutrition_calories | null;
  proteins: MealCellMeal_items_item_Recipe_nutrition_proteins | null;
  carbsByDifference: MealCellMeal_items_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: MealCellMeal_items_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealCellMeal_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: MealCellMeal_items_item_Recipe_nutrition_fats | null;
}

export interface MealCellMeal_items_item_Recipe {
  id: string;
  slug: string;
  title: MealCellMeal_items_item_Recipe_title[];
  image: MealCellMeal_items_item_Recipe_image | null;
  timing: MealCellMeal_items_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealCellMeal_items_item_Recipe_thumbnail | null;
  ingredients: MealCellMeal_items_item_Recipe_ingredients[];
  author: MealCellMeal_items_item_Recipe_author;
  nutrition: MealCellMeal_items_item_Recipe_nutrition | null;
}

export type MealCellMeal_items_item = MealCellMeal_items_item_Food | MealCellMeal_items_item_Recipe;

export interface MealCellMeal_items_alternativeMealItems_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_description {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_customUnit {
  gramWeight: number | null;
  name: MealCellMeal_items_alternativeMealItems_customUnit_name[];
}

export interface MealCellMeal_items_alternativeMealItems_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealCellMeal_items_alternativeMealItems_unit_Weight_name[];
}

export interface MealCellMeal_items_alternativeMealItems_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_unit_CustomUnit {
  gramWeight: number | null;
  name: MealCellMeal_items_alternativeMealItems_unit_CustomUnit_name[];
}

export type MealCellMeal_items_alternativeMealItems_unit = MealCellMeal_items_alternativeMealItems_unit_Weight | MealCellMeal_items_alternativeMealItems_unit_CustomUnit;

export interface MealCellMeal_items_alternativeMealItems_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealCellMeal_items_alternativeMealItems_item_Food_weights_name[];
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_image {
  url: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_thumbnail {
  url: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_nutrition {
  calories: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_calories | null;
  proteins: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_proteins | null;
  carbsByDifference: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealCellMeal_items_alternativeMealItems_item_Food_nutrition_fats | null;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Food_origFoodGroups {
  id: string;
  name: MealCellMeal_items_alternativeMealItems_item_Food_origFoodGroups_name[];
}

export interface MealCellMeal_items_alternativeMealItems_item_Food {
  id: string;
  name: MealCellMeal_items_alternativeMealItems_item_Food_name[];
  description: MealCellMeal_items_alternativeMealItems_item_Food_description[] | null;
  weights: MealCellMeal_items_alternativeMealItems_item_Food_weights[];
  image: MealCellMeal_items_alternativeMealItems_item_Food_image | null;
  thumbnail: MealCellMeal_items_alternativeMealItems_item_Food_thumbnail | null;
  nutrition: MealCellMeal_items_alternativeMealItems_item_Food_nutrition | null;
  origFoodGroups: MealCellMeal_items_alternativeMealItems_item_Food_origFoodGroups[][];
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_image {
  url: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_timing {
  totalTime: number;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_thumbnail {
  url: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name[];
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_unit = MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight | MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit;

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name[];
  description: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights[];
  image: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item = MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food | MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe;

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_unit | null;
  item: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients_item | null;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_author_avatar {
  url: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealCellMeal_items_alternativeMealItems_item_Recipe_author_avatar | null;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition {
  calories: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_calories | null;
  proteins: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_proteins | null;
  carbsByDifference: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition_fats | null;
}

export interface MealCellMeal_items_alternativeMealItems_item_Recipe {
  id: string;
  slug: string;
  title: MealCellMeal_items_alternativeMealItems_item_Recipe_title[];
  image: MealCellMeal_items_alternativeMealItems_item_Recipe_image | null;
  timing: MealCellMeal_items_alternativeMealItems_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealCellMeal_items_alternativeMealItems_item_Recipe_thumbnail | null;
  ingredients: MealCellMeal_items_alternativeMealItems_item_Recipe_ingredients[];
  author: MealCellMeal_items_alternativeMealItems_item_Recipe_author;
  nutrition: MealCellMeal_items_alternativeMealItems_item_Recipe_nutrition | null;
}

export type MealCellMeal_items_alternativeMealItems_item = MealCellMeal_items_alternativeMealItems_item_Food | MealCellMeal_items_alternativeMealItems_item_Recipe;

export interface MealCellMeal_items_alternativeMealItems {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealCellMeal_items_alternativeMealItems_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealCellMeal_items_alternativeMealItems_description[] | null;
  amount: number | null;
  customUnit: MealCellMeal_items_alternativeMealItems_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealCellMeal_items_alternativeMealItems_unit | null;
  item: MealCellMeal_items_alternativeMealItems_item | null;
}

export interface MealCellMeal_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealCellMeal_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealCellMeal_items_description[] | null;
  amount: number | null;
  customUnit: MealCellMeal_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealCellMeal_items_unit | null;
  isOptional: boolean | null;
  item: MealCellMeal_items_item | null;
  alternativeMealItems: MealCellMeal_items_alternativeMealItems[];
}

export interface MealCellMeal_author_avatar {
  url: string;
}

export interface MealCellMeal_author {
  id: string;
  username: string;
  avatar: MealCellMeal_author_avatar | null;
}

export interface MealCellMeal_timing {
  totalTime: number;
}

export interface MealCellMeal {
  id: string;
  name: MealCellMeal_name[] | null;
  likedByUser: boolean | null;
  likesCount: number;
  items: MealCellMeal_items[];
  author: MealCellMeal_author;
  timing: MealCellMeal_timing;
}
