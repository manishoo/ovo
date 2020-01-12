/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealInput, LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL mutation operation: MealFormUpdateMutation
// ====================================================

export interface MealFormUpdateMutation_updateMeal_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_customUnit {
  gramWeight: number | null;
  name: MealFormUpdateMutation_updateMeal_items_customUnit_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormUpdateMutation_updateMeal_items_unit_Weight_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormUpdateMutation_updateMeal_items_unit_CustomUnit_name[];
}

export type MealFormUpdateMutation_updateMeal_items_unit = MealFormUpdateMutation_updateMeal_items_unit_Weight | MealFormUpdateMutation_updateMeal_items_unit_CustomUnit;

export interface MealFormUpdateMutation_updateMeal_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormUpdateMutation_updateMeal_items_item_Food_weights_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_image {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_thumbnail {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_nutrition {
  calories: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_calories | null;
  proteins: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_proteins | null;
  carbsByDifference: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition_fats | null;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food_origFoodGroups {
  id: string;
  name: MealFormUpdateMutation_updateMeal_items_item_Food_origFoodGroups_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_item_Food {
  id: string;
  name: MealFormUpdateMutation_updateMeal_items_item_Food_name[];
  description: MealFormUpdateMutation_updateMeal_items_item_Food_description[] | null;
  weights: MealFormUpdateMutation_updateMeal_items_item_Food_weights[];
  image: MealFormUpdateMutation_updateMeal_items_item_Food_image | null;
  thumbnail: MealFormUpdateMutation_updateMeal_items_item_Food_thumbnail | null;
  nutrition: MealFormUpdateMutation_updateMeal_items_item_Food_nutrition | null;
  origFoodGroups: MealFormUpdateMutation_updateMeal_items_item_Food_origFoodGroups[][];
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_image {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_timing {
  totalTime: number;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_thumbnail {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_customUnit_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_unit = MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_unit_Weight | MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_unit_CustomUnit;

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_name[];
  description: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_weights[];
  image: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item = MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Food | MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item_Recipe;

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_unit | null;
  item: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients_item | null;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_author_avatar {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealFormUpdateMutation_updateMeal_items_item_Recipe_author_avatar | null;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition {
  calories: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_calories | null;
  proteins: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_proteins | null;
  carbsByDifference: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition_fats | null;
}

export interface MealFormUpdateMutation_updateMeal_items_item_Recipe {
  id: string;
  slug: string;
  title: MealFormUpdateMutation_updateMeal_items_item_Recipe_title[];
  image: MealFormUpdateMutation_updateMeal_items_item_Recipe_image | null;
  timing: MealFormUpdateMutation_updateMeal_items_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealFormUpdateMutation_updateMeal_items_item_Recipe_thumbnail | null;
  ingredients: MealFormUpdateMutation_updateMeal_items_item_Recipe_ingredients[];
  author: MealFormUpdateMutation_updateMeal_items_item_Recipe_author;
  nutrition: MealFormUpdateMutation_updateMeal_items_item_Recipe_nutrition | null;
}

export type MealFormUpdateMutation_updateMeal_items_item = MealFormUpdateMutation_updateMeal_items_item_Food | MealFormUpdateMutation_updateMeal_items_item_Recipe;

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_customUnit {
  gramWeight: number | null;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_customUnit_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_unit_Weight_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_unit_CustomUnit_name[];
}

export type MealFormUpdateMutation_updateMeal_items_alternativeMealItems_unit = MealFormUpdateMutation_updateMeal_items_alternativeMealItems_unit_Weight | MealFormUpdateMutation_updateMeal_items_alternativeMealItems_unit_CustomUnit;

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_weights_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_image {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_thumbnail {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition {
  calories: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_calories | null;
  proteins: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_proteins | null;
  carbsByDifference: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition_fats | null;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_origFoodGroups {
  id: string;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_origFoodGroups_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food {
  id: string;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_name[];
  description: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_description[] | null;
  weights: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_weights[];
  image: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_image | null;
  thumbnail: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_thumbnail | null;
  nutrition: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_nutrition | null;
  origFoodGroups: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food_origFoodGroups[][];
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_image {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_timing {
  totalTime: number;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_thumbnail {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_unit = MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight | MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit;

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name[];
  description: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights[];
  image: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item = MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food | MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe;

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_unit | null;
  item: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients_item | null;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_author_avatar {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_author_avatar | null;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition {
  calories: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_calories | null;
  proteins: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_proteins | null;
  carbsByDifference: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition_fats | null;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe {
  id: string;
  slug: string;
  title: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_title[];
  image: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_image | null;
  timing: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_thumbnail | null;
  ingredients: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_ingredients[];
  author: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_author;
  nutrition: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe_nutrition | null;
}

export type MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item = MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Food | MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item_Recipe;

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_description[] | null;
  amount: number | null;
  customUnit: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_unit | null;
  item: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_item | null;
}

export interface MealFormUpdateMutation_updateMeal_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormUpdateMutation_updateMeal_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormUpdateMutation_updateMeal_items_description[] | null;
  amount: number | null;
  customUnit: MealFormUpdateMutation_updateMeal_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormUpdateMutation_updateMeal_items_unit | null;
  isOptional: boolean | null;
  item: MealFormUpdateMutation_updateMeal_items_item | null;
  alternativeMealItems: MealFormUpdateMutation_updateMeal_items_alternativeMealItems[];
}

export interface MealFormUpdateMutation_updateMeal_author_avatar {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_author {
  id: string;
  username: string;
  avatar: MealFormUpdateMutation_updateMeal_author_avatar | null;
}

export interface MealFormUpdateMutation_updateMeal_timing {
  totalTime: number;
}

export interface MealFormUpdateMutation_updateMeal {
  id: string;
  name: MealFormUpdateMutation_updateMeal_name[] | null;
  likedByUser: boolean | null;
  likesCount: number;
  items: MealFormUpdateMutation_updateMeal_items[];
  instanceOf: any | null;
  author: MealFormUpdateMutation_updateMeal_author;
  timing: MealFormUpdateMutation_updateMeal_timing;
}

export interface MealFormUpdateMutation {
  updateMeal: MealFormUpdateMutation_updateMeal;
}

export interface MealFormUpdateMutationVariables {
  id: any;
  meal: MealInput;
}
