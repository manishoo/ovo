/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL fragment: FoodPreviewMealItem
// ====================================================

export interface FoodPreviewMealItem_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_customUnit {
  gramWeight: number | null;
  name: FoodPreviewMealItem_customUnit_name[];
}

export interface FoodPreviewMealItem_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: FoodPreviewMealItem_unit_Weight_name[];
}

export interface FoodPreviewMealItem_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_unit_CustomUnit {
  gramWeight: number | null;
  name: FoodPreviewMealItem_unit_CustomUnit_name[];
}

export type FoodPreviewMealItem_unit = FoodPreviewMealItem_unit_Weight | FoodPreviewMealItem_unit_CustomUnit;

export interface FoodPreviewMealItem_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: FoodPreviewMealItem_item_Food_weights_name[];
}

export interface FoodPreviewMealItem_item_Food_image {
  url: string;
}

export interface FoodPreviewMealItem_item_Food_thumbnail {
  url: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Food_nutrition {
  calories: FoodPreviewMealItem_item_Food_nutrition_calories | null;
}

export interface FoodPreviewMealItem_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_item_Food_origFoodGroups {
  id: string;
  name: FoodPreviewMealItem_item_Food_origFoodGroups_name[];
}

export interface FoodPreviewMealItem_item_Food {
  id: string;
  name: FoodPreviewMealItem_item_Food_name[];
  description: FoodPreviewMealItem_item_Food_description[] | null;
  weights: FoodPreviewMealItem_item_Food_weights[];
  image: FoodPreviewMealItem_item_Food_image | null;
  thumbnail: FoodPreviewMealItem_item_Food_thumbnail | null;
  nutrition: FoodPreviewMealItem_item_Food_nutrition;
  origFoodGroups: FoodPreviewMealItem_item_Food_origFoodGroups[][];
}

export interface FoodPreviewMealItem_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_item_Recipe_image {
  url: string;
}

export interface FoodPreviewMealItem_item_Recipe_timing {
  totalTime: number;
}

export interface FoodPreviewMealItem_item_Recipe_thumbnail {
  url: string;
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: FoodPreviewMealItem_item_Recipe_ingredients_customUnit_name[];
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: FoodPreviewMealItem_item_Recipe_ingredients_unit_Weight_name[];
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: FoodPreviewMealItem_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type FoodPreviewMealItem_item_Recipe_ingredients_unit = FoodPreviewMealItem_item_Recipe_ingredients_unit_Weight | FoodPreviewMealItem_item_Recipe_ingredients_unit_CustomUnit;

export interface FoodPreviewMealItem_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: FoodPreviewMealItem_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_item_Food_nutrition {
  calories: FoodPreviewMealItem_item_Recipe_ingredients_item_Food_nutrition_calories | null;
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: FoodPreviewMealItem_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_item_Food {
  id: string;
  name: FoodPreviewMealItem_item_Recipe_ingredients_item_Food_name[];
  description: FoodPreviewMealItem_item_Recipe_ingredients_item_Food_description[] | null;
  weights: FoodPreviewMealItem_item_Recipe_ingredients_item_Food_weights[];
  image: FoodPreviewMealItem_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: FoodPreviewMealItem_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: FoodPreviewMealItem_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: FoodPreviewMealItem_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: FoodPreviewMealItem_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface FoodPreviewMealItem_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: FoodPreviewMealItem_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: FoodPreviewMealItem_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type FoodPreviewMealItem_item_Recipe_ingredients_item = FoodPreviewMealItem_item_Recipe_ingredients_item_Food | FoodPreviewMealItem_item_Recipe_ingredients_item_Recipe;

export interface FoodPreviewMealItem_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: FoodPreviewMealItem_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: FoodPreviewMealItem_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: FoodPreviewMealItem_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: FoodPreviewMealItem_item_Recipe_ingredients_unit | null;
  item: FoodPreviewMealItem_item_Recipe_ingredients_item | null;
}

export interface FoodPreviewMealItem_item_Recipe_author_avatar {
  url: string;
}

export interface FoodPreviewMealItem_item_Recipe_author {
  id: string;
  username: string;
  avatar: FoodPreviewMealItem_item_Recipe_author_avatar | null;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface FoodPreviewMealItem_item_Recipe_nutrition {
  calories: FoodPreviewMealItem_item_Recipe_nutrition_calories | null;
}

export interface FoodPreviewMealItem_item_Recipe {
  id: string;
  slug: string;
  title: FoodPreviewMealItem_item_Recipe_title[];
  image: FoodPreviewMealItem_item_Recipe_image | null;
  timing: FoodPreviewMealItem_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: FoodPreviewMealItem_item_Recipe_thumbnail | null;
  ingredients: FoodPreviewMealItem_item_Recipe_ingredients[];
  author: FoodPreviewMealItem_item_Recipe_author;
  nutrition: FoodPreviewMealItem_item_Recipe_nutrition;
}

export type FoodPreviewMealItem_item = FoodPreviewMealItem_item_Food | FoodPreviewMealItem_item_Recipe;

export interface FoodPreviewMealItem {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: FoodPreviewMealItem_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: FoodPreviewMealItem_description[] | null;
  amount: number | null;
  customUnit: FoodPreviewMealItem_customUnit | null;
  isOptional: boolean | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: FoodPreviewMealItem_unit | null;
  item: FoodPreviewMealItem_item | null;
}
