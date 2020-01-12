/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealAvailableTime, MealSize, LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL fragment: Day
// ====================================================

export interface Day_meals_userMeal {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface Day_meals_items_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_description {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_customUnit {
  gramWeight: number | null;
  name: Day_meals_items_customUnit_name[];
}

export interface Day_meals_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: Day_meals_items_unit_Weight_name[];
}

export interface Day_meals_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_unit_CustomUnit {
  gramWeight: number | null;
  name: Day_meals_items_unit_CustomUnit_name[];
}

export type Day_meals_items_unit = Day_meals_items_unit_Weight | Day_meals_items_unit_CustomUnit;

export interface Day_meals_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: Day_meals_items_item_Food_weights_name[];
}

export interface Day_meals_items_item_Food_image {
  url: string;
}

export interface Day_meals_items_item_Food_thumbnail {
  url: string;
}

export interface Day_meals_items_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Day_meals_items_item_Food_nutrition {
  calories: Day_meals_items_item_Food_nutrition_calories | null;
  proteins: Day_meals_items_item_Food_nutrition_proteins | null;
  carbsByDifference: Day_meals_items_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: Day_meals_items_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: Day_meals_items_item_Food_nutrition_totalAvailableCarbs | null;
  fats: Day_meals_items_item_Food_nutrition_fats | null;
}

export interface Day_meals_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Food_origFoodGroups {
  id: string;
  name: Day_meals_items_item_Food_origFoodGroups_name[];
}

export interface Day_meals_items_item_Food {
  id: string;
  name: Day_meals_items_item_Food_name[];
  description: Day_meals_items_item_Food_description[] | null;
  weights: Day_meals_items_item_Food_weights[];
  image: Day_meals_items_item_Food_image | null;
  thumbnail: Day_meals_items_item_Food_thumbnail | null;
  nutrition: Day_meals_items_item_Food_nutrition | null;
  origFoodGroups: Day_meals_items_item_Food_origFoodGroups[][];
}

export interface Day_meals_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_image {
  url: string;
}

export interface Day_meals_items_item_Recipe_timing {
  totalTime: number;
}

export interface Day_meals_items_item_Recipe_thumbnail {
  url: string;
}

export interface Day_meals_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: Day_meals_items_item_Recipe_ingredients_customUnit_name[];
}

export interface Day_meals_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: Day_meals_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface Day_meals_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: Day_meals_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type Day_meals_items_item_Recipe_ingredients_unit = Day_meals_items_item_Recipe_ingredients_unit_Weight | Day_meals_items_item_Recipe_ingredients_unit_CustomUnit;

export interface Day_meals_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: Day_meals_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_nutrition {
  calories: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: Day_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface Day_meals_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: Day_meals_items_item_Recipe_ingredients_item_Food_name[];
  description: Day_meals_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: Day_meals_items_item_Recipe_ingredients_item_Food_weights[];
  image: Day_meals_items_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: Day_meals_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: Day_meals_items_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: Day_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface Day_meals_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: Day_meals_items_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface Day_meals_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: Day_meals_items_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: Day_meals_items_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type Day_meals_items_item_Recipe_ingredients_item = Day_meals_items_item_Recipe_ingredients_item_Food | Day_meals_items_item_Recipe_ingredients_item_Recipe;

export interface Day_meals_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: Day_meals_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: Day_meals_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: Day_meals_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: Day_meals_items_item_Recipe_ingredients_unit | null;
  item: Day_meals_items_item_Recipe_ingredients_item | null;
}

export interface Day_meals_items_item_Recipe_author_avatar {
  url: string;
}

export interface Day_meals_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: Day_meals_items_item_Recipe_author_avatar | null;
}

export interface Day_meals_items_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface Day_meals_items_item_Recipe_nutrition {
  calories: Day_meals_items_item_Recipe_nutrition_calories | null;
  proteins: Day_meals_items_item_Recipe_nutrition_proteins | null;
  carbsByDifference: Day_meals_items_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: Day_meals_items_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: Day_meals_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: Day_meals_items_item_Recipe_nutrition_fats | null;
}

export interface Day_meals_items_item_Recipe {
  id: string;
  slug: string;
  title: Day_meals_items_item_Recipe_title[];
  image: Day_meals_items_item_Recipe_image | null;
  timing: Day_meals_items_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: Day_meals_items_item_Recipe_thumbnail | null;
  ingredients: Day_meals_items_item_Recipe_ingredients[];
  author: Day_meals_items_item_Recipe_author;
  nutrition: Day_meals_items_item_Recipe_nutrition | null;
}

export type Day_meals_items_item = Day_meals_items_item_Food | Day_meals_items_item_Recipe;

export interface Day_meals_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: Day_meals_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: Day_meals_items_description[] | null;
  amount: number | null;
  customUnit: Day_meals_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: Day_meals_items_unit | null;
  isOptional: boolean | null;
  item: Day_meals_items_item | null;
}

export interface Day_meals {
  id: any;
  userMeal: Day_meals_userMeal;
  time: any | null;
  items: Day_meals_items[];
}

export interface Day {
  id: string;
  date: any;
  meals: Day_meals[];
}
