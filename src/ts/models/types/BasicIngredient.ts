/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../global-types'

// ====================================================
// GraphQL fragment: BasicIngredient
// ====================================================

export interface BasicIngredient_name {
  text: string;
  locale: LanguageCode;
}

export interface BasicIngredient_description {
  text: string;
  locale: LanguageCode;
}

export interface BasicIngredient_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface BasicIngredient_customUnit {
  gramWeight: number | null;
  name: BasicIngredient_customUnit_name[];
}

export interface BasicIngredient_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface BasicIngredient_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: BasicIngredient_unit_Weight_name[];
}

export interface BasicIngredient_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface BasicIngredient_unit_CustomUnit {
  gramWeight: number | null;
  name: BasicIngredient_unit_CustomUnit_name[];
}

export type BasicIngredient_unit = BasicIngredient_unit_Weight | BasicIngredient_unit_CustomUnit;

export interface BasicIngredient_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface BasicIngredient_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface BasicIngredient_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface BasicIngredient_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: BasicIngredient_item_Food_weights_name[];
}

export interface BasicIngredient_item_Food_thumbnail {
  url: string;
}

export interface BasicIngredient_item_Food {
  id: string;
  name: BasicIngredient_item_Food_name[];
  description: BasicIngredient_item_Food_description[] | null;
  weights: BasicIngredient_item_Food_weights[];
  thumbnail: BasicIngredient_item_Food_thumbnail | null;
  origFoodClassSlug: string;
}

export interface BasicIngredient_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface BasicIngredient_item_Recipe_timing {
  totalTime: number | null;
}

export interface BasicIngredient_item_Recipe_thumbnail {
  url: string;
}

export interface BasicIngredient_item_Recipe_author_avatar {
  url: string;
}

export interface BasicIngredient_item_Recipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: BasicIngredient_item_Recipe_author_avatar | null;
}

export interface BasicIngredient_item_Recipe {
  id: string;
  slug: string;
  title: BasicIngredient_item_Recipe_title[];
  timing: BasicIngredient_item_Recipe_timing;
  status: RecipeStatus;
  thumbnail: BasicIngredient_item_Recipe_thumbnail | null;
  author: BasicIngredient_item_Recipe_author;
}

export type BasicIngredient_item = BasicIngredient_item_Food | BasicIngredient_item_Recipe;

export interface BasicIngredient {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: BasicIngredient_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: BasicIngredient_description[] | null;
  amount: number | null;
  customUnit: BasicIngredient_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: BasicIngredient_unit | null;
  isOptional: boolean | null;
  item: BasicIngredient_item | null;
}
