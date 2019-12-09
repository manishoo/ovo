/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL query operation: ProfileMealsQuery
// ====================================================

export interface ProfileMealsQuery_meals_meals_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_customUnit {
  gramWeight: number | null;
  name: ProfileMealsQuery_meals_meals_items_customUnit_name[];
}

export interface ProfileMealsQuery_meals_meals_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: ProfileMealsQuery_meals_meals_items_unit_Weight_name[];
}

export interface ProfileMealsQuery_meals_meals_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_unit_CustomUnit {
  gramWeight: number | null;
  name: ProfileMealsQuery_meals_meals_items_unit_CustomUnit_name[];
}

export type ProfileMealsQuery_meals_meals_items_unit = ProfileMealsQuery_meals_meals_items_unit_Weight | ProfileMealsQuery_meals_meals_items_unit_CustomUnit;

export interface ProfileMealsQuery_meals_meals_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: ProfileMealsQuery_meals_meals_items_item_Food_weights_name[];
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_image {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_thumbnail {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_nutrition {
  calories: ProfileMealsQuery_meals_meals_items_item_Food_nutrition_calories | null;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_origFoodGroups {
  id: string;
  name: ProfileMealsQuery_meals_meals_items_item_Food_origFoodGroups_name[];
}

export interface ProfileMealsQuery_meals_meals_items_item_Food {
  id: string;
  name: ProfileMealsQuery_meals_meals_items_item_Food_name[];
  description: ProfileMealsQuery_meals_meals_items_item_Food_description[] | null;
  weights: ProfileMealsQuery_meals_meals_items_item_Food_weights[];
  image: ProfileMealsQuery_meals_meals_items_item_Food_image | null;
  thumbnail: ProfileMealsQuery_meals_meals_items_item_Food_thumbnail | null;
  nutrition: ProfileMealsQuery_meals_meals_items_item_Food_nutrition;
  origFoodGroups: ProfileMealsQuery_meals_meals_items_item_Food_origFoodGroups[][];
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_image {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_timing {
  totalTime: number;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_thumbnail {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_customUnit_name[];
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_unit_Weight_name[];
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_unit = ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_unit_Weight | ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_unit_CustomUnit;

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food_nutrition {
  calories: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food_nutrition_calories | null;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food {
  id: string;
  name: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food_name[];
  description: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food_description[] | null;
  weights: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food_weights[];
  image: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item = ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Food | ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item_Recipe;

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_unit | null;
  item: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients_item | null;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_author_avatar {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_author {
  id: string;
  username: string;
  avatar: ProfileMealsQuery_meals_meals_items_item_Recipe_author_avatar | null;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition {
  calories: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition_calories | null;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe {
  id: string;
  slug: string;
  title: ProfileMealsQuery_meals_meals_items_item_Recipe_title[];
  image: ProfileMealsQuery_meals_meals_items_item_Recipe_image | null;
  timing: ProfileMealsQuery_meals_meals_items_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: ProfileMealsQuery_meals_meals_items_item_Recipe_thumbnail | null;
  ingredients: ProfileMealsQuery_meals_meals_items_item_Recipe_ingredients[];
  author: ProfileMealsQuery_meals_meals_items_item_Recipe_author;
  nutrition: ProfileMealsQuery_meals_meals_items_item_Recipe_nutrition;
}

export type ProfileMealsQuery_meals_meals_items_item = ProfileMealsQuery_meals_meals_items_item_Food | ProfileMealsQuery_meals_meals_items_item_Recipe;

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_customUnit {
  gramWeight: number | null;
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_customUnit_name[];
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_unit_Weight_name[];
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_unit_CustomUnit {
  gramWeight: number | null;
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_unit_CustomUnit_name[];
}

export type ProfileMealsQuery_meals_meals_items_alternativeMealItems_unit = ProfileMealsQuery_meals_meals_items_alternativeMealItems_unit_Weight | ProfileMealsQuery_meals_meals_items_alternativeMealItems_unit_CustomUnit;

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_weights_name[];
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_image {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_thumbnail {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition {
  calories: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition_calories | null;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_origFoodGroups {
  id: string;
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_origFoodGroups_name[];
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food {
  id: string;
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_name[];
  description: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_description[] | null;
  weights: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_weights[];
  image: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_image | null;
  thumbnail: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_thumbnail | null;
  nutrition: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_nutrition;
  origFoodGroups: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food_origFoodGroups[][];
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_image {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_timing {
  totalTime: number;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_thumbnail {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_customUnit {
  gramWeight: number | null;
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_customUnit_name[];
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight_name[];
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit_name[];
}

export type ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_unit = ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_unit_Weight | ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_unit_CustomUnit;

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights_name[];
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food_image {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition {
  calories: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition_calories | null;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food {
  id: string;
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food_name[];
  description: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food_description[] | null;
  weights: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food_weights[];
  image: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food_image | null;
  thumbnail: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food_thumbnail | null;
  nutrition: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food_nutrition;
  origFoodGroups: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food_origFoodGroups[][];
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition {
  calories: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_title[];
  nutrition: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe_nutrition;
}

export type ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item = ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Food | ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item_Recipe;

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_unit | null;
  item: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients_item | null;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_author_avatar {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_author {
  id: string;
  username: string;
  avatar: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_author_avatar | null;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition {
  calories: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition_calories | null;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe {
  id: string;
  slug: string;
  title: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_title[];
  image: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_image | null;
  timing: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_thumbnail | null;
  ingredients: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_ingredients[];
  author: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_author;
  nutrition: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe_nutrition;
}

export type ProfileMealsQuery_meals_meals_items_alternativeMealItems_item = ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Food | ProfileMealsQuery_meals_meals_items_alternativeMealItems_item_Recipe;

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: ProfileMealsQuery_meals_meals_items_alternativeMealItems_description[] | null;
  amount: number | null;
  customUnit: ProfileMealsQuery_meals_meals_items_alternativeMealItems_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: ProfileMealsQuery_meals_meals_items_alternativeMealItems_unit | null;
  item: ProfileMealsQuery_meals_meals_items_alternativeMealItems_item | null;
}

export interface ProfileMealsQuery_meals_meals_items {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: ProfileMealsQuery_meals_meals_items_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: ProfileMealsQuery_meals_meals_items_description[] | null;
  amount: number | null;
  customUnit: ProfileMealsQuery_meals_meals_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: ProfileMealsQuery_meals_meals_items_unit | null;
  isOptional: boolean | null;
  item: ProfileMealsQuery_meals_meals_items_item | null;
  alternativeMealItems: ProfileMealsQuery_meals_meals_items_alternativeMealItems[];
}

export interface ProfileMealsQuery_meals_meals_author_avatar {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_author {
  id: string;
  username: string;
  avatar: ProfileMealsQuery_meals_meals_author_avatar | null;
}

export interface ProfileMealsQuery_meals_meals_timing {
  totalTime: number;
}

export interface ProfileMealsQuery_meals_meals {
  id: string;
  name: ProfileMealsQuery_meals_meals_name[] | null;
  likedByUser: boolean | null;
  likesCount: number;
  items: ProfileMealsQuery_meals_meals_items[];
  author: ProfileMealsQuery_meals_meals_author;
  timing: ProfileMealsQuery_meals_meals_timing;
}

export interface ProfileMealsQuery_meals_pagination {
  hasNext: boolean;
  lastId: string | null;
}

export interface ProfileMealsQuery_meals {
  meals: ProfileMealsQuery_meals_meals[];
  pagination: ProfileMealsQuery_meals_pagination;
}

export interface ProfileMealsQuery {
  meals: ProfileMealsQuery_meals;
}

export interface ProfileMealsQueryVariables {
  lastId?: string | null;
  userId?: any | null;
}
