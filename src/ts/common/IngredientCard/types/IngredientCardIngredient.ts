/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL fragment: IngredientCardIngredient
// ====================================================

export interface IngredientCardIngredient_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_description {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_customUnit {
  gramWeight: number | null;
  name: IngredientCardIngredient_customUnit_name[];
}

export interface IngredientCardIngredient_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: IngredientCardIngredient_unit_Weight_name[];
}

export interface IngredientCardIngredient_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_unit_CustomUnit {
  gramWeight: number | null;
  name: IngredientCardIngredient_unit_CustomUnit_name[];
}

export type IngredientCardIngredient_unit = IngredientCardIngredient_unit_Weight | IngredientCardIngredient_unit_CustomUnit;

export interface IngredientCardIngredient_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: IngredientCardIngredient_item_Food_weights_name[];
}

export interface IngredientCardIngredient_item_Food_image {
  url: string;
}

export interface IngredientCardIngredient_item_Food_thumbnail {
  url: string;
}

export interface IngredientCardIngredient_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientCardIngredient_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientCardIngredient_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientCardIngredient_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientCardIngredient_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientCardIngredient_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientCardIngredient_item_Food_nutrition {
  calories: IngredientCardIngredient_item_Food_nutrition_calories | null;
  proteins: IngredientCardIngredient_item_Food_nutrition_proteins | null;
  carbsByDifference: IngredientCardIngredient_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: IngredientCardIngredient_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: IngredientCardIngredient_item_Food_nutrition_totalAvailableCarbs | null;
  fats: IngredientCardIngredient_item_Food_nutrition_fats | null;
}

export interface IngredientCardIngredient_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_item_Food_origFoodGroups {
  id: string;
  name: IngredientCardIngredient_item_Food_origFoodGroups_name[];
}

export interface IngredientCardIngredient_item_Food {
  id: string;
  name: IngredientCardIngredient_item_Food_name[];
  description: IngredientCardIngredient_item_Food_description[] | null;
  weights: IngredientCardIngredient_item_Food_weights[];
  image: IngredientCardIngredient_item_Food_image | null;
  thumbnail: IngredientCardIngredient_item_Food_thumbnail | null;
  nutrition: IngredientCardIngredient_item_Food_nutrition | null;
  origFoodGroups: IngredientCardIngredient_item_Food_origFoodGroups[][];
}

export interface IngredientCardIngredient_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_item_Recipe_image {
  url: string;
}

export interface IngredientCardIngredient_item_Recipe_timing {
  totalTime: number;
}

export interface IngredientCardIngredient_item_Recipe_thumbnail {
  url: string;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: IngredientCardIngredient_item_Recipe_ingredients_customUnit_name[];
}

export interface IngredientCardIngredient_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: IngredientCardIngredient_item_Recipe_ingredients_unit_Weight_name[];
}

export interface IngredientCardIngredient_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: IngredientCardIngredient_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type IngredientCardIngredient_item_Recipe_ingredients_unit = IngredientCardIngredient_item_Recipe_ingredients_unit_Weight | IngredientCardIngredient_item_Recipe_ingredients_unit_CustomUnit;

export interface IngredientCardIngredient_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: IngredientCardIngredient_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface IngredientCardIngredient_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_item_Food_nutrition {
  calories: IngredientCardIngredient_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: IngredientCardIngredient_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: IngredientCardIngredient_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: IngredientCardIngredient_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: IngredientCardIngredient_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: IngredientCardIngredient_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: IngredientCardIngredient_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface IngredientCardIngredient_item_Recipe_ingredients_item_Food {
  id: string;
  name: IngredientCardIngredient_item_Recipe_ingredients_item_Food_name[];
  description: IngredientCardIngredient_item_Recipe_ingredients_item_Food_description[] | null;
  weights: IngredientCardIngredient_item_Recipe_ingredients_item_Food_weights[];
  image: IngredientCardIngredient_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: IngredientCardIngredient_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: IngredientCardIngredient_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: IngredientCardIngredient_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface IngredientCardIngredient_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: IngredientCardIngredient_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface IngredientCardIngredient_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: IngredientCardIngredient_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: IngredientCardIngredient_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type IngredientCardIngredient_item_Recipe_ingredients_item = IngredientCardIngredient_item_Recipe_ingredients_item_Food | IngredientCardIngredient_item_Recipe_ingredients_item_Recipe;

export interface IngredientCardIngredient_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: IngredientCardIngredient_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: IngredientCardIngredient_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: IngredientCardIngredient_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: IngredientCardIngredient_item_Recipe_ingredients_unit | null;
  item: IngredientCardIngredient_item_Recipe_ingredients_item | null;
}

export interface IngredientCardIngredient_item_Recipe_author_avatar {
  url: string;
}

export interface IngredientCardIngredient_item_Recipe_author {
  id: string;
  username: string;
  avatar: IngredientCardIngredient_item_Recipe_author_avatar | null;
}

export interface IngredientCardIngredient_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientCardIngredient_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientCardIngredient_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientCardIngredient_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientCardIngredient_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientCardIngredient_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientCardIngredient_item_Recipe_nutrition {
  calories: IngredientCardIngredient_item_Recipe_nutrition_calories | null;
  proteins: IngredientCardIngredient_item_Recipe_nutrition_proteins | null;
  carbsByDifference: IngredientCardIngredient_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: IngredientCardIngredient_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: IngredientCardIngredient_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: IngredientCardIngredient_item_Recipe_nutrition_fats | null;
}

export interface IngredientCardIngredient_item_Recipe {
  id: string;
  slug: string;
  title: IngredientCardIngredient_item_Recipe_title[];
  image: IngredientCardIngredient_item_Recipe_image | null;
  timing: IngredientCardIngredient_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: IngredientCardIngredient_item_Recipe_thumbnail | null;
  ingredients: IngredientCardIngredient_item_Recipe_ingredients[];
  author: IngredientCardIngredient_item_Recipe_author;
  nutrition: IngredientCardIngredient_item_Recipe_nutrition | null;
}

export type IngredientCardIngredient_item = IngredientCardIngredient_item_Food | IngredientCardIngredient_item_Recipe;

export interface IngredientCardIngredient {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: IngredientCardIngredient_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: IngredientCardIngredient_description[] | null;
  amount: number | null;
  customUnit: IngredientCardIngredient_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: IngredientCardIngredient_unit | null;
  isOptional: boolean | null;
  item: IngredientCardIngredient_item | null;
}
