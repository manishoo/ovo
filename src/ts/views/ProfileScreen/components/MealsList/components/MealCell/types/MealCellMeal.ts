/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from './../../../../../../../models/global-types'

// ====================================================
// GraphQL fragment: MealCellMeal
// ====================================================

export interface MealCellMeal_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_customUnit {
  gramWeight: number | null;
  name: MealCellMeal_items_customUnit_name[];
}

export interface MealCellMeal_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: MealCellMeal_items_unit_Weight_name[];
}

export interface MealCellMeal_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_unit_CustomUnit {
  gramWeight: number | null;
  name: MealCellMeal_items_unit_CustomUnit_name[];
}

export type MealCellMeal_items_unit = MealCellMeal_items_unit_Weight | MealCellMeal_items_unit_CustomUnit;

export interface MealCellMeal_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Food_thumbnail {
  url: string;
}

export interface MealCellMeal_items_item_Food {
  name: MealCellMeal_items_item_Food_name[];
  description: MealCellMeal_items_item_Food_description[] | null;
  thumbnail: MealCellMeal_items_item_Food_thumbnail | null;
}

export interface MealCellMeal_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealCellMeal_items_item_Recipe_thumbnail {
  url: string;
}

export interface MealCellMeal_items_item_Recipe {
  title: MealCellMeal_items_item_Recipe_title[];
  thumbnail: MealCellMeal_items_item_Recipe_thumbnail | null;
}

export type MealCellMeal_items_item = MealCellMeal_items_item_Food | MealCellMeal_items_item_Recipe;

export interface MealCellMeal_items {
  id: any;
  isOptional: boolean | null;
  amount: number | null;
  customUnit: MealCellMeal_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: MealCellMeal_items_unit | null;
  item: MealCellMeal_items_item | null;
}

export interface MealCellMeal_author_avatar {
  url: string;
}

export interface MealCellMeal_author {
  id: string;
  username: string;
  avatar: MealCellMeal_author_avatar | null;
}

export interface MealCellMeal_timing {
  totalTime: number | null;
}

export interface MealCellMeal {
  id: string;
  name: MealCellMeal_name[] | null;
  likedByUser: boolean | null;
  likesCount: number;
  items: MealCellMeal_items[];
  hasPermutations: boolean | null;
  author: MealCellMeal_author;
  timing: MealCellMeal_timing;
}
