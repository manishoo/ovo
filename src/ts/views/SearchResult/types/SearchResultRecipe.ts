/*
 * SearchResultRecipe.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from './../../../models/global-types'

// ====================================================
// GraphQL fragment: SearchResultRecipe
// ====================================================

export interface SearchResultRecipe_title {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_image {
  url: string;
}

export interface SearchResultRecipe_timing {
  totalTime: number;
}

export interface SearchResultRecipe_thumbnail {
  url: string;
}

export interface SearchResultRecipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_ingredients_customUnit {
  gramWeight: number | null;
  name: SearchResultRecipe_ingredients_customUnit_name[];
}

export interface SearchResultRecipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: SearchResultRecipe_ingredients_unit_Weight_name[];
}

export interface SearchResultRecipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: SearchResultRecipe_ingredients_unit_CustomUnit_name[];
}

export type SearchResultRecipe_ingredients_unit =
  SearchResultRecipe_ingredients_unit_Weight
  | SearchResultRecipe_ingredients_unit_CustomUnit;

export interface SearchResultRecipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: SearchResultRecipe_ingredients_item_Food_weights_name[];
}

export interface SearchResultRecipe_ingredients_item_Food_image {
  url: string;
}

export interface SearchResultRecipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface SearchResultRecipe_ingredients_item_Food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface SearchResultRecipe_ingredients_item_Food_nutrition {
  calories: SearchResultRecipe_ingredients_item_Food_nutrition_calories | null;
}

export interface SearchResultRecipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: SearchResultRecipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface SearchResultRecipe_ingredients_item_Food {
  id: string;
  name: SearchResultRecipe_ingredients_item_Food_name[];
  description: SearchResultRecipe_ingredients_item_Food_description[] | null;
  weights: SearchResultRecipe_ingredients_item_Food_weights[];
  image: SearchResultRecipe_ingredients_item_Food_image | null;
  thumbnail: SearchResultRecipe_ingredients_item_Food_thumbnail | null;
  nutrition: SearchResultRecipe_ingredients_item_Food_nutrition;
  origFoodGroups: SearchResultRecipe_ingredients_item_Food_origFoodGroups[][];
}

export interface SearchResultRecipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultRecipe_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface SearchResultRecipe_ingredients_item_Recipe_nutrition {
  calories: SearchResultRecipe_ingredients_item_Recipe_nutrition_calories | null;
}

export interface SearchResultRecipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: SearchResultRecipe_ingredients_item_Recipe_title[];
  nutrition: SearchResultRecipe_ingredients_item_Recipe_nutrition;
}

export type SearchResultRecipe_ingredients_item =
  SearchResultRecipe_ingredients_item_Food
  | SearchResultRecipe_ingredients_item_Recipe;

export interface SearchResultRecipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: SearchResultRecipe_ingredients_name[];
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: SearchResultRecipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: SearchResultRecipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: SearchResultRecipe_ingredients_unit | null;
  item: SearchResultRecipe_ingredients_item | null;
}

export interface SearchResultRecipe_author_avatar {
  url: string;
}

export interface SearchResultRecipe_author {
  id: string;
  username: string;
  avatar: SearchResultRecipe_author_avatar | null;
}

export interface SearchResultRecipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface SearchResultRecipe_nutrition {
  calories: SearchResultRecipe_nutrition_calories | null;
}

export interface SearchResultRecipe {
  id: string;
  slug: string;
  title: SearchResultRecipe_title[];
  image: SearchResultRecipe_image | null;
  timing: SearchResultRecipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: SearchResultRecipe_thumbnail | null;
  ingredients: SearchResultRecipe_ingredients[];
  author: SearchResultRecipe_author;
  nutrition: SearchResultRecipe_nutrition;
}
