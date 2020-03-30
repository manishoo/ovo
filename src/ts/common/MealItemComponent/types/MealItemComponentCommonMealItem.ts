/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../../../models/global-types'

// ====================================================
// GraphQL fragment: MealItemComponentCommonMealItem
// ====================================================

export interface MealItemComponentCommonMealItem_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentCommonMealItem_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentCommonMealItem_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentCommonMealItem_customUnit {
  gramWeight: number | null;
  name: MealItemComponentCommonMealItem_customUnit_name[];
}

export interface MealItemComponentCommonMealItem_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentCommonMealItem_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemComponentCommonMealItem_unit_Weight_name[];
}

export interface MealItemComponentCommonMealItem_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentCommonMealItem_unit_CustomUnit {
  gramWeight: number | null;
  name: MealItemComponentCommonMealItem_unit_CustomUnit_name[];
}

export type MealItemComponentCommonMealItem_unit =
  MealItemComponentCommonMealItem_unit_Weight
  | MealItemComponentCommonMealItem_unit_CustomUnit;

export interface MealItemComponentCommonMealItem_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentCommonMealItem_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentCommonMealItem_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentCommonMealItem_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealItemComponentCommonMealItem_item_Food_weights_name[];
}

export interface MealItemComponentCommonMealItem_item_Food_thumbnail {
  url: string;
}

export interface MealItemComponentCommonMealItem_item_Food {
  id: string;
  name: MealItemComponentCommonMealItem_item_Food_name[];
  description: MealItemComponentCommonMealItem_item_Food_description[] | null;
  weights: MealItemComponentCommonMealItem_item_Food_weights[];
  thumbnail: MealItemComponentCommonMealItem_item_Food_thumbnail | null;
  origFoodClassSlug: string;
}

export interface MealItemComponentCommonMealItem_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentCommonMealItem_item_Recipe_timing {
  totalTime: number | null;
}

export interface MealItemComponentCommonMealItem_item_Recipe_thumbnail {
  url: string;
}

export interface MealItemComponentCommonMealItem_item_Recipe_author_avatar {
  url: string;
}

export interface MealItemComponentCommonMealItem_item_Recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: MealItemComponentCommonMealItem_item_Recipe_author_avatar | null;
}

export interface MealItemComponentCommonMealItem_item_Recipe {
  id: string;
  slug: string;
  title: MealItemComponentCommonMealItem_item_Recipe_title[];
  timing: MealItemComponentCommonMealItem_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: MealItemComponentCommonMealItem_item_Recipe_thumbnail | null;
  author: MealItemComponentCommonMealItem_item_Recipe_author;
}

export type MealItemComponentCommonMealItem_item =
  MealItemComponentCommonMealItem_item_Food
  | MealItemComponentCommonMealItem_item_Recipe;

export interface MealItemComponentCommonMealItem {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: MealItemComponentCommonMealItem_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: MealItemComponentCommonMealItem_description[] | null;
  amount: number | null;
  customUnit: MealItemComponentCommonMealItem_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealItemComponentCommonMealItem_unit | null;
  isOptional: boolean | null;
  hasAlternatives: boolean | null;
  item: MealItemComponentCommonMealItem_item | null;
}
