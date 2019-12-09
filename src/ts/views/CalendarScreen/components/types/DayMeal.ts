/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealAvailableTime, MealSize, LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL fragment: DayMeal
// ====================================================

export interface DayMeal_userMeal {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface DayMeal_items_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_customUnit {
  gramWeight: number | null;
  name: DayMeal_items_customUnit_name[];
}

export interface DayMeal_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: DayMeal_items_unit_Weight_name[];
}

export interface DayMeal_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_unit_CustomUnit {
  gramWeight: number | null;
  name: DayMeal_items_unit_CustomUnit_name[];
}

export type DayMeal_items_unit = DayMeal_items_unit_Weight | DayMeal_items_unit_CustomUnit;

export interface DayMeal_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: DayMeal_items_item_Food_weights_name[];
}

export interface DayMeal_items_item_Food_image {
  url: string;
}

export interface DayMeal_items_item_Food_thumbnail {
  url: string;
}

export interface DayMeal_items_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Food_nutrition {
  calories: DayMeal_items_item_Food_nutrition_calories | null;
}

export interface DayMeal_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Food_origFoodGroups {
  id: string;
  name: DayMeal_items_item_Food_origFoodGroups_name[];
}

export interface DayMeal_items_item_Food {
  id: string;
  name: DayMeal_items_item_Food_name[];
  description: DayMeal_items_item_Food_description[] | null;
  weights: DayMeal_items_item_Food_weights[];
  image: DayMeal_items_item_Food_image | null;
  thumbnail: DayMeal_items_item_Food_thumbnail | null;
  nutrition: DayMeal_items_item_Food_nutrition;
  origFoodGroups: DayMeal_items_item_Food_origFoodGroups[][];
}

export interface DayMeal_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_image {
  url: string;
}

export interface DayMeal_items_item_Recipe_timing {
  totalTime: number;
}

export interface DayMeal_items_item_Recipe_thumbnail {
  url: string;
}

export interface DayMeal_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: DayMeal_items_item_Recipe_ingredients_customUnit_name[];
}

export interface DayMeal_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: DayMeal_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface DayMeal_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: DayMeal_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type DayMeal_items_item_Recipe_ingredients_unit = DayMeal_items_item_Recipe_ingredients_unit_Weight | DayMeal_items_item_Recipe_ingredients_unit_CustomUnit;

export interface DayMeal_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: DayMeal_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_nutrition {
  calories: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition_calories | null;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: DayMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface DayMeal_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: DayMeal_items_item_Recipe_ingredients_item_Food_name[];
  description: DayMeal_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: DayMeal_items_item_Recipe_ingredients_item_Food_weights[];
  image: DayMeal_items_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: DayMeal_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: DayMeal_items_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: DayMeal_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface DayMeal_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: DayMeal_items_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface DayMeal_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: DayMeal_items_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: DayMeal_items_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type DayMeal_items_item_Recipe_ingredients_item = DayMeal_items_item_Recipe_ingredients_item_Food | DayMeal_items_item_Recipe_ingredients_item_Recipe;

export interface DayMeal_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: DayMeal_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: DayMeal_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: DayMeal_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: DayMeal_items_item_Recipe_ingredients_unit | null;
  item: DayMeal_items_item_Recipe_ingredients_item | null;
}

export interface DayMeal_items_item_Recipe_author_avatar {
  url: string;
}

export interface DayMeal_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: DayMeal_items_item_Recipe_author_avatar | null;
}

export interface DayMeal_items_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface DayMeal_items_item_Recipe_nutrition {
  calories: DayMeal_items_item_Recipe_nutrition_calories | null;
}

export interface DayMeal_items_item_Recipe {
  id: string;
  slug: string;
  title: DayMeal_items_item_Recipe_title[];
  image: DayMeal_items_item_Recipe_image | null;
  timing: DayMeal_items_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: DayMeal_items_item_Recipe_thumbnail | null;
  ingredients: DayMeal_items_item_Recipe_ingredients[];
  author: DayMeal_items_item_Recipe_author;
  nutrition: DayMeal_items_item_Recipe_nutrition;
}

export type DayMeal_items_item = DayMeal_items_item_Food | DayMeal_items_item_Recipe;

export interface DayMeal_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: DayMeal_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: DayMeal_items_description[] | null;
  amount: number | null;
  customUnit: DayMeal_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: DayMeal_items_unit | null;
  isOptional: boolean | null;
  item: DayMeal_items_item | null;
}

export interface DayMeal {
  id: any;
  userMeal: DayMeal_userMeal;
  time: any | null;
  items: DayMeal_items[];
}
