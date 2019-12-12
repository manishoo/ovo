/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL fragment: MealFormMeal
// ====================================================

export interface MealFormMeal_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_customUnit {
  gramWeight: number | null;
  name: MealFormMeal_items_customUnit_name[];
}

export interface MealFormMeal_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormMeal_items_unit_Weight_name[];
}

export interface MealFormMeal_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormMeal_items_unit_CustomUnit_name[];
}

export type MealFormMeal_items_unit = MealFormMeal_items_unit_Weight | MealFormMeal_items_unit_CustomUnit;

export interface MealFormMeal_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormMeal_items_item_Food_weights_name[];
}

export interface MealFormMeal_items_item_Food_image {
  url: string;
}

export interface MealFormMeal_items_item_Food_thumbnail {
  url: string;
}

export interface MealFormMeal_items_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_item_Food_nutrition {
  calories: MealFormMeal_items_item_Food_nutrition_calories | null;
  proteins: MealFormMeal_items_item_Food_nutrition_proteins | null;
  carbsByDifference: MealFormMeal_items_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealFormMeal_items_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealFormMeal_items_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealFormMeal_items_item_Food_nutrition_fats | null;
}

export interface MealFormMeal_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Food_origFoodGroups {
  id: string;
  name: MealFormMeal_items_item_Food_origFoodGroups_name[];
}

export interface MealFormMeal_items_item_Food {
  id: string;
  name: MealFormMeal_items_item_Food_name[];
  description: MealFormMeal_items_item_Food_description[] | null;
  weights: MealFormMeal_items_item_Food_weights[];
  image: MealFormMeal_items_item_Food_image | null;
  thumbnail: MealFormMeal_items_item_Food_thumbnail | null;
  nutrition: MealFormMeal_items_item_Food_nutrition | null;
  origFoodGroups: MealFormMeal_items_item_Food_origFoodGroups[][];
}

export interface MealFormMeal_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_image {
  url: string;
}

export interface MealFormMeal_items_item_Recipe_timing {
  totalTime: number;
}

export interface MealFormMeal_items_item_Recipe_thumbnail {
  url: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealFormMeal_items_item_Recipe_ingredients_customUnit_name[];
}

export interface MealFormMeal_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormMeal_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealFormMeal_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormMeal_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealFormMeal_items_item_Recipe_ingredients_unit = MealFormMeal_items_item_Recipe_ingredients_unit_Weight | MealFormMeal_items_item_Recipe_ingredients_unit_CustomUnit;

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormMeal_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealFormMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealFormMeal_items_item_Recipe_ingredients_item_Food_name[];
  description: MealFormMeal_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealFormMeal_items_item_Recipe_ingredients_item_Food_weights[];
  image: MealFormMeal_items_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealFormMeal_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: MealFormMeal_items_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: MealFormMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealFormMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealFormMeal_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealFormMeal_items_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealFormMeal_items_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type MealFormMeal_items_item_Recipe_ingredients_item = MealFormMeal_items_item_Recipe_ingredients_item_Food | MealFormMeal_items_item_Recipe_ingredients_item_Recipe;

export interface MealFormMeal_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormMeal_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormMeal_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealFormMeal_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormMeal_items_item_Recipe_ingredients_unit | null;
  item: MealFormMeal_items_item_Recipe_ingredients_item | null;
}

export interface MealFormMeal_items_item_Recipe_author_avatar {
  url: string;
}

export interface MealFormMeal_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealFormMeal_items_item_Recipe_author_avatar | null;
}

export interface MealFormMeal_items_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_item_Recipe_nutrition {
  calories: MealFormMeal_items_item_Recipe_nutrition_calories | null;
  proteins: MealFormMeal_items_item_Recipe_nutrition_proteins | null;
  carbsByDifference: MealFormMeal_items_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: MealFormMeal_items_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealFormMeal_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: MealFormMeal_items_item_Recipe_nutrition_fats | null;
}

export interface MealFormMeal_items_item_Recipe {
  id: string;
  slug: string;
  title: MealFormMeal_items_item_Recipe_title[];
  image: MealFormMeal_items_item_Recipe_image | null;
  timing: MealFormMeal_items_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealFormMeal_items_item_Recipe_thumbnail | null;
  ingredients: MealFormMeal_items_item_Recipe_ingredients[];
  author: MealFormMeal_items_item_Recipe_author;
  nutrition: MealFormMeal_items_item_Recipe_nutrition | null;
}

export type MealFormMeal_items_item = MealFormMeal_items_item_Food | MealFormMeal_items_item_Recipe;

export interface MealFormMeal_items_alternativeMealItems_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_customUnit {
  gramWeight: number | null;
  name: MealFormMeal_items_alternativeMealItems_customUnit_name[];
}

export interface MealFormMeal_items_alternativeMealItems_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormMeal_items_alternativeMealItems_unit_Weight_name[];
}

export interface MealFormMeal_items_alternativeMealItems_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormMeal_items_alternativeMealItems_unit_CustomUnit_name[];
}

export type MealFormMeal_items_alternativeMealItems_unit = MealFormMeal_items_alternativeMealItems_unit_Weight | MealFormMeal_items_alternativeMealItems_unit_CustomUnit;

export interface MealFormMeal_items_alternativeMealItems_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormMeal_items_alternativeMealItems_item_Food_weights_name[];
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_image {
  url: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_thumbnail {
  url: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_nutrition {
  calories: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_calories | null;
  proteins: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_proteins | null;
  carbsByDifference: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealFormMeal_items_alternativeMealItems_item_Food_nutrition_fats | null;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Food_origFoodGroups {
  id: string;
  name: MealFormMeal_items_alternativeMealItems_item_Food_origFoodGroups_name[];
}

export interface MealFormMeal_items_alternativeMealItems_item_Food {
  id: string;
  name: MealFormMeal_items_alternativeMealItems_item_Food_name[];
  description: MealFormMeal_items_alternativeMealItems_item_Food_description[] | null;
  weights: MealFormMeal_items_alternativeMealItems_item_Food_weights[];
  image: MealFormMeal_items_alternativeMealItems_item_Food_image | null;
  thumbnail: MealFormMeal_items_alternativeMealItems_item_Food_thumbnail | null;
  nutrition: MealFormMeal_items_alternativeMealItems_item_Food_nutrition | null;
  origFoodGroups: MealFormMeal_items_alternativeMealItems_item_Food_origFoodGroups[][];
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_image {
  url: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_timing {
  totalTime: number;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_thumbnail {
  url: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name[];
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_unit = MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight | MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit;

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name[];
  description: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights[];
  image: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item = MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food | MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe;

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_unit | null;
  item: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients_item | null;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_author_avatar {
  url: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealFormMeal_items_alternativeMealItems_item_Recipe_author_avatar | null;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition {
  calories: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_calories | null;
  proteins: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_proteins | null;
  carbsByDifference: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition_fats | null;
}

export interface MealFormMeal_items_alternativeMealItems_item_Recipe {
  id: string;
  slug: string;
  title: MealFormMeal_items_alternativeMealItems_item_Recipe_title[];
  image: MealFormMeal_items_alternativeMealItems_item_Recipe_image | null;
  timing: MealFormMeal_items_alternativeMealItems_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealFormMeal_items_alternativeMealItems_item_Recipe_thumbnail | null;
  ingredients: MealFormMeal_items_alternativeMealItems_item_Recipe_ingredients[];
  author: MealFormMeal_items_alternativeMealItems_item_Recipe_author;
  nutrition: MealFormMeal_items_alternativeMealItems_item_Recipe_nutrition | null;
}

export type MealFormMeal_items_alternativeMealItems_item = MealFormMeal_items_alternativeMealItems_item_Food | MealFormMeal_items_alternativeMealItems_item_Recipe;

export interface MealFormMeal_items_alternativeMealItems {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormMeal_items_alternativeMealItems_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormMeal_items_alternativeMealItems_description[] | null;
  amount: number | null;
  customUnit: MealFormMeal_items_alternativeMealItems_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormMeal_items_alternativeMealItems_unit | null;
  item: MealFormMeal_items_alternativeMealItems_item | null;
}

export interface MealFormMeal_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormMeal_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormMeal_items_description[] | null;
  amount: number | null;
  customUnit: MealFormMeal_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormMeal_items_unit | null;
  isOptional: boolean | null;
  item: MealFormMeal_items_item | null;
  alternativeMealItems: MealFormMeal_items_alternativeMealItems[];
}

export interface MealFormMeal_author_avatar {
  url: string;
}

export interface MealFormMeal_author {
  id: string;
  username: string;
  avatar: MealFormMeal_author_avatar | null;
}

export interface MealFormMeal_timing {
  totalTime: number;
}

export interface MealFormMeal {
  id: string;
  name: MealFormMeal_name[] | null;
  likedByUser: boolean | null;
  likesCount: number;
  items: MealFormMeal_items[];
  instanceOf: any;
  author: MealFormMeal_author;
  timing: MealFormMeal_timing;
}
