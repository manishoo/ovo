/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL query operation: MealFormQuery
// ====================================================

export interface MealFormQuery_meal_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_customUnit {
  gramWeight: number | null;
  name: MealFormQuery_meal_items_customUnit_name[];
}

export interface MealFormQuery_meal_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormQuery_meal_items_unit_Weight_name[];
}

export interface MealFormQuery_meal_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormQuery_meal_items_unit_CustomUnit_name[];
}

export type MealFormQuery_meal_items_unit = MealFormQuery_meal_items_unit_Weight | MealFormQuery_meal_items_unit_CustomUnit;

export interface MealFormQuery_meal_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormQuery_meal_items_item_Food_weights_name[];
}

export interface MealFormQuery_meal_items_item_Food_image {
  url: string;
}

export interface MealFormQuery_meal_items_item_Food_thumbnail {
  url: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Food_nutrition {
  calories: MealFormQuery_meal_items_item_Food_nutrition_calories | null;
  proteins: MealFormQuery_meal_items_item_Food_nutrition_proteins | null;
  carbsByDifference: MealFormQuery_meal_items_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealFormQuery_meal_items_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealFormQuery_meal_items_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealFormQuery_meal_items_item_Food_nutrition_fats | null;
}

export interface MealFormQuery_meal_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Food_origFoodGroups {
  id: string;
  name: MealFormQuery_meal_items_item_Food_origFoodGroups_name[];
}

export interface MealFormQuery_meal_items_item_Food {
  id: string;
  name: MealFormQuery_meal_items_item_Food_name[];
  description: MealFormQuery_meal_items_item_Food_description[] | null;
  weights: MealFormQuery_meal_items_item_Food_weights[];
  image: MealFormQuery_meal_items_item_Food_image | null;
  thumbnail: MealFormQuery_meal_items_item_Food_thumbnail | null;
  nutrition: MealFormQuery_meal_items_item_Food_nutrition | null;
  origFoodGroups: MealFormQuery_meal_items_item_Food_origFoodGroups[][];
}

export interface MealFormQuery_meal_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_image {
  url: string;
}

export interface MealFormQuery_meal_items_item_Recipe_timing {
  totalTime: number;
}

export interface MealFormQuery_meal_items_item_Recipe_thumbnail {
  url: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealFormQuery_meal_items_item_Recipe_ingredients_customUnit_name[];
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormQuery_meal_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormQuery_meal_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealFormQuery_meal_items_item_Recipe_ingredients_unit = MealFormQuery_meal_items_item_Recipe_ingredients_unit_Weight | MealFormQuery_meal_items_item_Recipe_ingredients_unit_CustomUnit;

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_name[];
  description: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_weights[];
  image: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: MealFormQuery_meal_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealFormQuery_meal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealFormQuery_meal_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealFormQuery_meal_items_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealFormQuery_meal_items_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type MealFormQuery_meal_items_item_Recipe_ingredients_item = MealFormQuery_meal_items_item_Recipe_ingredients_item_Food | MealFormQuery_meal_items_item_Recipe_ingredients_item_Recipe;

export interface MealFormQuery_meal_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormQuery_meal_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormQuery_meal_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealFormQuery_meal_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormQuery_meal_items_item_Recipe_ingredients_unit | null;
  item: MealFormQuery_meal_items_item_Recipe_ingredients_item | null;
}

export interface MealFormQuery_meal_items_item_Recipe_author_avatar {
  url: string;
}

export interface MealFormQuery_meal_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealFormQuery_meal_items_item_Recipe_author_avatar | null;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_item_Recipe_nutrition {
  calories: MealFormQuery_meal_items_item_Recipe_nutrition_calories | null;
  proteins: MealFormQuery_meal_items_item_Recipe_nutrition_proteins | null;
  carbsByDifference: MealFormQuery_meal_items_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: MealFormQuery_meal_items_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealFormQuery_meal_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: MealFormQuery_meal_items_item_Recipe_nutrition_fats | null;
}

export interface MealFormQuery_meal_items_item_Recipe {
  id: string;
  slug: string;
  title: MealFormQuery_meal_items_item_Recipe_title[];
  image: MealFormQuery_meal_items_item_Recipe_image | null;
  timing: MealFormQuery_meal_items_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealFormQuery_meal_items_item_Recipe_thumbnail | null;
  ingredients: MealFormQuery_meal_items_item_Recipe_ingredients[];
  author: MealFormQuery_meal_items_item_Recipe_author;
  nutrition: MealFormQuery_meal_items_item_Recipe_nutrition | null;
}

export type MealFormQuery_meal_items_item = MealFormQuery_meal_items_item_Food | MealFormQuery_meal_items_item_Recipe;

export interface MealFormQuery_meal_items_alternativeMealItems_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_customUnit {
  gramWeight: number | null;
  name: MealFormQuery_meal_items_alternativeMealItems_customUnit_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormQuery_meal_items_alternativeMealItems_unit_Weight_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormQuery_meal_items_alternativeMealItems_unit_CustomUnit_name[];
}

export type MealFormQuery_meal_items_alternativeMealItems_unit = MealFormQuery_meal_items_alternativeMealItems_unit_Weight | MealFormQuery_meal_items_alternativeMealItems_unit_CustomUnit;

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormQuery_meal_items_alternativeMealItems_item_Food_weights_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_image {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_thumbnail {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition {
  calories: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_calories | null;
  proteins: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_proteins | null;
  carbsByDifference: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition_fats | null;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food_origFoodGroups {
  id: string;
  name: MealFormQuery_meal_items_alternativeMealItems_item_Food_origFoodGroups_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Food {
  id: string;
  name: MealFormQuery_meal_items_alternativeMealItems_item_Food_name[];
  description: MealFormQuery_meal_items_alternativeMealItems_item_Food_description[] | null;
  weights: MealFormQuery_meal_items_alternativeMealItems_item_Food_weights[];
  image: MealFormQuery_meal_items_alternativeMealItems_item_Food_image | null;
  thumbnail: MealFormQuery_meal_items_alternativeMealItems_item_Food_thumbnail | null;
  nutrition: MealFormQuery_meal_items_alternativeMealItems_item_Food_nutrition | null;
  origFoodGroups: MealFormQuery_meal_items_alternativeMealItems_item_Food_origFoodGroups[][];
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_image {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_timing {
  totalTime: number;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_thumbnail {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_unit = MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight | MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit;

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name[];
  description: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights[];
  image: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item = MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Food | MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe;

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_unit | null;
  item: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients_item | null;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_author_avatar {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_author_avatar | null;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition {
  calories: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_calories | null;
  proteins: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_proteins | null;
  carbsByDifference: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition_fats | null;
}

export interface MealFormQuery_meal_items_alternativeMealItems_item_Recipe {
  id: string;
  slug: string;
  title: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_title[];
  image: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_image | null;
  timing: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_thumbnail | null;
  ingredients: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_ingredients[];
  author: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_author;
  nutrition: MealFormQuery_meal_items_alternativeMealItems_item_Recipe_nutrition | null;
}

export type MealFormQuery_meal_items_alternativeMealItems_item = MealFormQuery_meal_items_alternativeMealItems_item_Food | MealFormQuery_meal_items_alternativeMealItems_item_Recipe;

export interface MealFormQuery_meal_items_alternativeMealItems {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormQuery_meal_items_alternativeMealItems_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormQuery_meal_items_alternativeMealItems_description[] | null;
  amount: number | null;
  customUnit: MealFormQuery_meal_items_alternativeMealItems_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormQuery_meal_items_alternativeMealItems_unit | null;
  item: MealFormQuery_meal_items_alternativeMealItems_item | null;
}

export interface MealFormQuery_meal_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormQuery_meal_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormQuery_meal_items_description[] | null;
  amount: number | null;
  customUnit: MealFormQuery_meal_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormQuery_meal_items_unit | null;
  isOptional: boolean | null;
  item: MealFormQuery_meal_items_item | null;
  alternativeMealItems: MealFormQuery_meal_items_alternativeMealItems[];
}

export interface MealFormQuery_meal_author_avatar {
  url: string;
}

export interface MealFormQuery_meal_author {
  id: string;
  username: string;
  avatar: MealFormQuery_meal_author_avatar | null;
}

export interface MealFormQuery_meal_timing {
  totalTime: number;
}

export interface MealFormQuery_meal {
  id: string;
  name: MealFormQuery_meal_name[] | null;
  likedByUser: boolean | null;
  likesCount: number;
  items: MealFormQuery_meal_items[];
  instanceOf: any;
  author: MealFormQuery_meal_author;
  timing: MealFormQuery_meal_timing;
}

export interface MealFormQuery {
  meal: MealFormQuery_meal;
}

export interface MealFormQueryVariables {
  id: any;
}
