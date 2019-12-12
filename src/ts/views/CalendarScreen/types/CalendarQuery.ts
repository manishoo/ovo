/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealAvailableTime, MealSize, LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL query operation: CalendarQuery
// ====================================================

export interface CalendarQuery_calendar_meals_userMeal {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface CalendarQuery_calendar_meals_items_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_description {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_customUnit {
  gramWeight: number | null;
  name: CalendarQuery_calendar_meals_items_customUnit_name[];
}

export interface CalendarQuery_calendar_meals_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: CalendarQuery_calendar_meals_items_unit_Weight_name[];
}

export interface CalendarQuery_calendar_meals_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_unit_CustomUnit {
  gramWeight: number | null;
  name: CalendarQuery_calendar_meals_items_unit_CustomUnit_name[];
}

export type CalendarQuery_calendar_meals_items_unit = CalendarQuery_calendar_meals_items_unit_Weight | CalendarQuery_calendar_meals_items_unit_CustomUnit;

export interface CalendarQuery_calendar_meals_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: CalendarQuery_calendar_meals_items_item_Food_weights_name[];
}

export interface CalendarQuery_calendar_meals_items_item_Food_image {
  url: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_thumbnail {
  url: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Food_nutrition {
  calories: CalendarQuery_calendar_meals_items_item_Food_nutrition_calories | null;
  proteins: CalendarQuery_calendar_meals_items_item_Food_nutrition_proteins | null;
  carbsByDifference: CalendarQuery_calendar_meals_items_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: CalendarQuery_calendar_meals_items_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: CalendarQuery_calendar_meals_items_item_Food_nutrition_totalAvailableCarbs | null;
  fats: CalendarQuery_calendar_meals_items_item_Food_nutrition_fats | null;
}

export interface CalendarQuery_calendar_meals_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_item_Food_origFoodGroups {
  id: string;
  name: CalendarQuery_calendar_meals_items_item_Food_origFoodGroups_name[];
}

export interface CalendarQuery_calendar_meals_items_item_Food {
  id: string;
  name: CalendarQuery_calendar_meals_items_item_Food_name[];
  description: CalendarQuery_calendar_meals_items_item_Food_description[] | null;
  weights: CalendarQuery_calendar_meals_items_item_Food_weights[];
  image: CalendarQuery_calendar_meals_items_item_Food_image | null;
  thumbnail: CalendarQuery_calendar_meals_items_item_Food_thumbnail | null;
  nutrition: CalendarQuery_calendar_meals_items_item_Food_nutrition | null;
  origFoodGroups: CalendarQuery_calendar_meals_items_item_Food_origFoodGroups[][];
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_image {
  url: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_timing {
  totalTime: number;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_thumbnail {
  url: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_customUnit_name[];
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type CalendarQuery_calendar_meals_items_item_Recipe_ingredients_unit = CalendarQuery_calendar_meals_items_item_Recipe_ingredients_unit_Weight | CalendarQuery_calendar_meals_items_item_Recipe_ingredients_unit_CustomUnit;

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_nutrition {
  calories: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_nutrition_calories | null;
  proteins: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_nutrition_fats | null;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_name[];
  description: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_weights[];
  image: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_nutrition | null;
  origFoodGroups: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Recipe_nutrition | null;
}

export type CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item = CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Food | CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item_Recipe;

export interface CalendarQuery_calendar_meals_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_unit | null;
  item: CalendarQuery_calendar_meals_items_item_Recipe_ingredients_item | null;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_author_avatar {
  url: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: CalendarQuery_calendar_meals_items_item_Recipe_author_avatar | null;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe_nutrition {
  calories: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_calories | null;
  proteins: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_proteins | null;
  carbsByDifference: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_carbsByDifference | null;
  totalCarbs: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_totalCarbs | null;
  totalAvailableCarbs: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_totalAvailableCarbs | null;
  fats: CalendarQuery_calendar_meals_items_item_Recipe_nutrition_fats | null;
}

export interface CalendarQuery_calendar_meals_items_item_Recipe {
  id: string;
  slug: string;
  title: CalendarQuery_calendar_meals_items_item_Recipe_title[];
  image: CalendarQuery_calendar_meals_items_item_Recipe_image | null;
  timing: CalendarQuery_calendar_meals_items_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: CalendarQuery_calendar_meals_items_item_Recipe_thumbnail | null;
  ingredients: CalendarQuery_calendar_meals_items_item_Recipe_ingredients[];
  author: CalendarQuery_calendar_meals_items_item_Recipe_author;
  nutrition: CalendarQuery_calendar_meals_items_item_Recipe_nutrition | null;
}

export type CalendarQuery_calendar_meals_items_item = CalendarQuery_calendar_meals_items_item_Food | CalendarQuery_calendar_meals_items_item_Recipe;

export interface CalendarQuery_calendar_meals_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: CalendarQuery_calendar_meals_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: CalendarQuery_calendar_meals_items_description[] | null;
  amount: number | null;
  customUnit: CalendarQuery_calendar_meals_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: CalendarQuery_calendar_meals_items_unit | null;
  isOptional: boolean | null;
  item: CalendarQuery_calendar_meals_items_item | null;
}

export interface CalendarQuery_calendar_meals {
  id: any;
  userMeal: CalendarQuery_calendar_meals_userMeal;
  time: any | null;
  items: CalendarQuery_calendar_meals_items[];
}

export interface CalendarQuery_calendar {
  id: string;
  date: any;
  meals: CalendarQuery_calendar_meals[];
}

export interface CalendarQuery {
  calendar: CalendarQuery_calendar[];
}

export interface CalendarQueryVariables {
  startDate: any;
  endDate: any;
}
