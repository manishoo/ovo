/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealInput, LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL mutation operation: MealFormCreateMutation
// ====================================================

export interface MealFormCreateMutation_createMeal_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_customUnit {
  gramWeight: number | null;
  name: MealFormCreateMutation_createMeal_items_customUnit_name[];
}

export interface MealFormCreateMutation_createMeal_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormCreateMutation_createMeal_items_unit_Weight_name[];
}

export interface MealFormCreateMutation_createMeal_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormCreateMutation_createMeal_items_unit_CustomUnit_name[];
}

export type MealFormCreateMutation_createMeal_items_unit = MealFormCreateMutation_createMeal_items_unit_Weight | MealFormCreateMutation_createMeal_items_unit_CustomUnit;

export interface MealFormCreateMutation_createMeal_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormCreateMutation_createMeal_items_item_Food_weights_name[];
}

export interface MealFormCreateMutation_createMeal_items_item_Food_image {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_thumbnail {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_nutrition {
  calories: MealFormCreateMutation_createMeal_items_item_Food_nutrition_calories | null;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Food_origFoodGroups {
  id: string;
  name: MealFormCreateMutation_createMeal_items_item_Food_origFoodGroups_name[];
}

export interface MealFormCreateMutation_createMeal_items_item_Food {
  id: string;
  name: MealFormCreateMutation_createMeal_items_item_Food_name[];
  description: MealFormCreateMutation_createMeal_items_item_Food_description[] | null;
  weights: MealFormCreateMutation_createMeal_items_item_Food_weights[];
  image: MealFormCreateMutation_createMeal_items_item_Food_image | null;
  thumbnail: MealFormCreateMutation_createMeal_items_item_Food_thumbnail | null;
  nutrition: MealFormCreateMutation_createMeal_items_item_Food_nutrition;
  origFoodGroups: MealFormCreateMutation_createMeal_items_item_Food_origFoodGroups[][];
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_image {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_timing {
  totalTime: number;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_thumbnail {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_customUnit_name[];
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_unit = MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_unit_Weight | MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_unit_CustomUnit;

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories | null;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_name[];
  description: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_weights[];
  image: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item = MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Food | MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item_Recipe;

export interface MealFormCreateMutation_createMeal_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_unit | null;
  item: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients_item | null;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_author_avatar {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealFormCreateMutation_createMeal_items_item_Recipe_author_avatar | null;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe_nutrition {
  calories: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition_calories | null;
}

export interface MealFormCreateMutation_createMeal_items_item_Recipe {
  id: string;
  slug: string;
  title: MealFormCreateMutation_createMeal_items_item_Recipe_title[];
  image: MealFormCreateMutation_createMeal_items_item_Recipe_image | null;
  timing: MealFormCreateMutation_createMeal_items_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealFormCreateMutation_createMeal_items_item_Recipe_thumbnail | null;
  ingredients: MealFormCreateMutation_createMeal_items_item_Recipe_ingredients[];
  author: MealFormCreateMutation_createMeal_items_item_Recipe_author;
  nutrition: MealFormCreateMutation_createMeal_items_item_Recipe_nutrition;
}

export type MealFormCreateMutation_createMeal_items_item = MealFormCreateMutation_createMeal_items_item_Food | MealFormCreateMutation_createMeal_items_item_Recipe;

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_customUnit {
  gramWeight: number | null;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_customUnit_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_unit_Weight_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_unit_CustomUnit_name[];
}

export type MealFormCreateMutation_createMeal_items_alternativeMealItems_unit = MealFormCreateMutation_createMeal_items_alternativeMealItems_unit_Weight | MealFormCreateMutation_createMeal_items_alternativeMealItems_unit_CustomUnit;

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_weights_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_image {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_thumbnail {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition {
  calories: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition_calories | null;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_origFoodGroups {
  id: string;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_origFoodGroups_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food {
  id: string;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_name[];
  description: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_description[] | null;
  weights: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_weights[];
  image: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_image | null;
  thumbnail: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_thumbnail | null;
  nutrition: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_nutrition;
  origFoodGroups: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food_origFoodGroups[][];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_image {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_timing {
  totalTime: number;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_thumbnail {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_unit = MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight | MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit;

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition {
  calories: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calories | null;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food {
  id: string;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name[];
  description: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description[] | null;
  weights: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights[];
  image: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item = MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Food | MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe;

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_unit | null;
  item: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients_item | null;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_author_avatar {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_author {
  id: string;
  username: string;
  avatar: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_author_avatar | null;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition {
  calories: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition_calories | null;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe {
  id: string;
  slug: string;
  title: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_title[];
  image: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_image | null;
  timing: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_thumbnail | null;
  ingredients: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_ingredients[];
  author: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_author;
  nutrition: MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe_nutrition;
}

export type MealFormCreateMutation_createMeal_items_alternativeMealItems_item = MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Food | MealFormCreateMutation_createMeal_items_alternativeMealItems_item_Recipe;

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormCreateMutation_createMeal_items_alternativeMealItems_description[] | null;
  amount: number | null;
  customUnit: MealFormCreateMutation_createMeal_items_alternativeMealItems_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormCreateMutation_createMeal_items_alternativeMealItems_unit | null;
  item: MealFormCreateMutation_createMeal_items_alternativeMealItems_item | null;
}

export interface MealFormCreateMutation_createMeal_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealFormCreateMutation_createMeal_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealFormCreateMutation_createMeal_items_description[] | null;
  amount: number | null;
  customUnit: MealFormCreateMutation_createMeal_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealFormCreateMutation_createMeal_items_unit | null;
  isOptional: boolean | null;
  item: MealFormCreateMutation_createMeal_items_item | null;
  alternativeMealItems: MealFormCreateMutation_createMeal_items_alternativeMealItems[];
}

export interface MealFormCreateMutation_createMeal_author_avatar {
  url: string;
}

export interface MealFormCreateMutation_createMeal_author {
  id: string;
  username: string;
  avatar: MealFormCreateMutation_createMeal_author_avatar | null;
}

export interface MealFormCreateMutation_createMeal_timing {
  totalTime: number;
}

export interface MealFormCreateMutation_createMeal {
  id: string;
  name: MealFormCreateMutation_createMeal_name[] | null;
  likedByUser: boolean | null;
  likesCount: number;
  items: MealFormCreateMutation_createMeal_items[];
  instanceOf: any | null;
  author: MealFormCreateMutation_createMeal_author;
  timing: MealFormCreateMutation_createMeal_timing;
}

export interface MealFormCreateMutation {
  createMeal: MealFormCreateMutation_createMeal[];
}

export interface MealFormCreateMutationVariables {
  meal: MealInput;
  bulkCreate?: boolean | null;
}
