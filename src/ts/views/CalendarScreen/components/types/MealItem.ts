/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL fragment: MealItem
// ====================================================

export interface MealItem_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_customUnit {
  gramWeight: number | null;
  name: MealItem_customUnit_name[];
}

export interface MealItem_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealItem_unit_Weight_name[];
}

export interface MealItem_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItem_unit_CustomUnit_name[];
}

export type MealItem_unit = MealItem_unit_Weight | MealItem_unit_CustomUnit;

export interface MealItem_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealItem_item_Food_weights_name[];
}

export interface MealItem_item_Food_image {
  url: string;
}

export interface MealItem_item_Food_thumbnail {
  url: string;
}

export interface MealItem_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItem_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItem_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItem_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItem_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItem_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItem_item_Food_nutrition {
  calories: MealItem_item_Food_nutrition_calories | null;
  proteins: MealItem_item_Food_nutrition_proteins | null;
  carbsByDifference: MealItem_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealItem_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealItem_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealItem_item_Food_nutrition_fats | null;
}

export interface MealItem_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Food_origFoodGroups {
  id: string;
  name: MealItem_item_Food_origFoodGroups_name[];
}

export interface MealItem_item_Food {
  id: string;
  name: MealItem_item_Food_name[];
  description: MealItem_item_Food_description[] | null;
  weights: MealItem_item_Food_weights[];
  image: MealItem_item_Food_image | null;
  thumbnail: MealItem_item_Food_thumbnail | null;
  nutrition: MealItem_item_Food_nutrition | null;
  origFoodGroups: MealItem_item_Food_origFoodGroups[][];
}

export interface MealItem_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_image {
  url: string;
}

export interface MealItem_item_Recipe_timing {
  totalTime: number;
}

export interface MealItem_item_Recipe_thumbnail {
  url: string;
}

export interface MealItem_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealItem_item_Recipe_ingredients_customUnit_name[];
}

export interface MealItem_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealItem_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealItem_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItem_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealItem_item_Recipe_ingredients_unit = MealItem_item_Recipe_ingredients_unit_Weight | MealItem_item_Recipe_ingredients_unit_CustomUnit;

export interface MealItem_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealItem_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealItem_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealItem_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: MealItem_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: MealItem_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealItem_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealItem_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealItem_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface MealItem_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealItem_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealItem_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealItem_item_Recipe_ingredients_item_Food_name[];
  description: MealItem_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealItem_item_Recipe_ingredients_item_Food_weights[];
  image: MealItem_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealItem_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: MealItem_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: MealItem_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealItem_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItem_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealItem_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealItem_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealItem_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealItem_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type MealItem_item_Recipe_ingredients_item = MealItem_item_Recipe_ingredients_item_Food | MealItem_item_Recipe_ingredients_item_Recipe;

export interface MealItem_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItem_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItem_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealItem_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItem_item_Recipe_ingredients_unit | null;
  item: MealItem_item_Recipe_ingredients_item | null;
}

export interface MealItem_item_Recipe_author_avatar {
  url: string;
}

export interface MealItem_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealItem_item_Recipe_author_avatar | null;
}

export interface MealItem_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItem_item_Recipe_nutrition {
  calories: MealItem_item_Recipe_nutrition_calories | null;
  proteins: MealItem_item_Recipe_nutrition_proteins | null;
  carbsByDifference: MealItem_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: MealItem_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealItem_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: MealItem_item_Recipe_nutrition_fats | null;
}

export interface MealItem_item_Recipe {
  id: string;
  slug: string;
  title: MealItem_item_Recipe_title[];
  image: MealItem_item_Recipe_image | null;
  timing: MealItem_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealItem_item_Recipe_thumbnail | null;
  ingredients: MealItem_item_Recipe_ingredients[];
  author: MealItem_item_Recipe_author;
  nutrition: MealItem_item_Recipe_nutrition | null;
}

export type MealItem_item = MealItem_item_Food | MealItem_item_Recipe;

export interface MealItem {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItem_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItem_description[] | null;
  amount: number | null;
  customUnit: MealItem_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItem_unit | null;
  isOptional: boolean | null;
  item: MealItem_item | null;
}
