/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../../../../models/global-types";

// ====================================================
// GraphQL fragment: MealItemGridIngredient
// ====================================================

export interface MealItemGridIngredient_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_customUnit {
  gramWeight: number | null;
  name: MealItemGridIngredient_customUnit_name[];
}

export interface MealItemGridIngredient_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemGridIngredient_unit_Weight_name[];
}

export interface MealItemGridIngredient_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItemGridIngredient_unit_CustomUnit_name[];
}

export type MealItemGridIngredient_unit = MealItemGridIngredient_unit_Weight | MealItemGridIngredient_unit_CustomUnit;

export interface MealItemGridIngredient_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemGridIngredient_item_Food_weights_name[];
}

export interface MealItemGridIngredient_item_Food_image {
  url: string;
}

export interface MealItemGridIngredient_item_Food_thumbnail {
  url: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemGridIngredient_item_Food_nutrition {
  calories: MealItemGridIngredient_item_Food_nutrition_calories | null;
  proteins: MealItemGridIngredient_item_Food_nutrition_proteins | null;
  carbsByDifference: MealItemGridIngredient_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealItemGridIngredient_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealItemGridIngredient_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealItemGridIngredient_item_Food_nutrition_fats | null;
}

export interface MealItemGridIngredient_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Food_origFoodGroups {
  id: string;
  name: MealItemGridIngredient_item_Food_origFoodGroups_name[];
}

export interface MealItemGridIngredient_item_Food {
  id: string;
  name: MealItemGridIngredient_item_Food_name[];
  description: MealItemGridIngredient_item_Food_description[] | null;
  weights: MealItemGridIngredient_item_Food_weights[];
  image: MealItemGridIngredient_item_Food_image | null;
  thumbnail: MealItemGridIngredient_item_Food_thumbnail | null;
  nutrition: MealItemGridIngredient_item_Food_nutrition | null;
  origFoodGroups: MealItemGridIngredient_item_Food_origFoodGroups[][];
}

export interface MealItemGridIngredient_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_image {
  url: string;
}

export interface MealItemGridIngredient_item_Recipe_timing {
  totalTime: number;
}

export interface MealItemGridIngredient_item_Recipe_thumbnail {
  url: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealItemGridIngredient_item_Recipe_ingredients_customUnit_name[];
}

export interface MealItemGridIngredient_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemGridIngredient_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealItemGridIngredient_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItemGridIngredient_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealItemGridIngredient_item_Recipe_ingredients_unit = MealItemGridIngredient_item_Recipe_ingredients_unit_Weight | MealItemGridIngredient_item_Recipe_ingredients_unit_CustomUnit;

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemGridIngredient_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealItemGridIngredient_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealItemGridIngredient_item_Recipe_ingredients_item_Food_name[];
  description: MealItemGridIngredient_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealItemGridIngredient_item_Recipe_ingredients_item_Food_weights[];
  image: MealItemGridIngredient_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealItemGridIngredient_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: MealItemGridIngredient_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: MealItemGridIngredient_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealItemGridIngredient_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealItemGridIngredient_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealItemGridIngredient_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealItemGridIngredient_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type MealItemGridIngredient_item_Recipe_ingredients_item = MealItemGridIngredient_item_Recipe_ingredients_item_Food | MealItemGridIngredient_item_Recipe_ingredients_item_Recipe;

export interface MealItemGridIngredient_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItemGridIngredient_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItemGridIngredient_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealItemGridIngredient_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItemGridIngredient_item_Recipe_ingredients_unit | null;
  item: MealItemGridIngredient_item_Recipe_ingredients_item | null;
}

export interface MealItemGridIngredient_item_Recipe_author_avatar {
  url: string;
}

export interface MealItemGridIngredient_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealItemGridIngredient_item_Recipe_author_avatar | null;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface MealItemGridIngredient_item_Recipe_nutrition {
  calories: MealItemGridIngredient_item_Recipe_nutrition_calories | null;
  proteins: MealItemGridIngredient_item_Recipe_nutrition_proteins | null;
  carbsByDifference: MealItemGridIngredient_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: MealItemGridIngredient_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: MealItemGridIngredient_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: MealItemGridIngredient_item_Recipe_nutrition_fats | null;
}

export interface MealItemGridIngredient_item_Recipe {
  id: string;
  slug: string;
  title: MealItemGridIngredient_item_Recipe_title[];
  image: MealItemGridIngredient_item_Recipe_image | null;
  timing: MealItemGridIngredient_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealItemGridIngredient_item_Recipe_thumbnail | null;
  ingredients: MealItemGridIngredient_item_Recipe_ingredients[];
  author: MealItemGridIngredient_item_Recipe_author;
  nutrition: MealItemGridIngredient_item_Recipe_nutrition | null;
}

export type MealItemGridIngredient_item = MealItemGridIngredient_item_Food | MealItemGridIngredient_item_Recipe;

export interface MealItemGridIngredient {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItemGridIngredient_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItemGridIngredient_description[] | null;
  amount: number | null;
  customUnit: MealItemGridIngredient_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItemGridIngredient_unit | null;
  isOptional: boolean | null;
  item: MealItemGridIngredient_item | null;
}
