/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../../../models/global-types'

// ====================================================
// GraphQL query operation: SearchResultQuery
// ====================================================

export interface SearchResultQuery_recipes_recipes_title {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_servingName {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface SearchResultQuery_recipes_recipes_thumbnail {
  url: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_customUnit {
  gramWeight: number | null;
  name: SearchResultQuery_recipes_recipes_ingredients_customUnit_name[];
}

export interface SearchResultQuery_recipes_recipes_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: SearchResultQuery_recipes_recipes_ingredients_unit_Weight_name[];
}

export interface SearchResultQuery_recipes_recipes_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: SearchResultQuery_recipes_recipes_ingredients_unit_CustomUnit_name[];
}

export type SearchResultQuery_recipes_recipes_ingredients_unit =
  SearchResultQuery_recipes_recipes_ingredients_unit_Weight
  | SearchResultQuery_recipes_recipes_ingredients_unit_CustomUnit;

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: SearchResultQuery_recipes_recipes_ingredients_item_Food_weights_name[];
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_thumbnail {
  url: string;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food_origFoodGroups {
  id: string;
  name: SearchResultQuery_recipes_recipes_ingredients_item_Food_origFoodGroups_name[];
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Food {
  id: string;
  name: SearchResultQuery_recipes_recipes_ingredients_item_Food_name[];
  description: SearchResultQuery_recipes_recipes_ingredients_item_Food_description[] | null;
  weights: SearchResultQuery_recipes_recipes_ingredients_item_Food_weights[];
  thumbnail: SearchResultQuery_recipes_recipes_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: SearchResultQuery_recipes_recipes_ingredients_item_Food_origFoodGroups[][];
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: SearchResultQuery_recipes_recipes_ingredients_item_Recipe_title[];
}

export type SearchResultQuery_recipes_recipes_ingredients_item =
  SearchResultQuery_recipes_recipes_ingredients_item_Food
  | SearchResultQuery_recipes_recipes_ingredients_item_Recipe;

export interface SearchResultQuery_recipes_recipes_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: SearchResultQuery_recipes_recipes_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: SearchResultQuery_recipes_recipes_ingredients_description[] | null;
  amount: number | null;
  customUnit: SearchResultQuery_recipes_recipes_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: SearchResultQuery_recipes_recipes_ingredients_unit | null;
  item: SearchResultQuery_recipes_recipes_ingredients_item | null;
}

export interface SearchResultQuery_recipes_recipes_author_avatar {
  url: string;
}

export interface SearchResultQuery_recipes_recipes_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: SearchResultQuery_recipes_recipes_author_avatar | null;
}

export interface SearchResultQuery_recipes_recipes {
  id: string;
  slug: string;
  title: SearchResultQuery_recipes_recipes_title[];
  servingName: SearchResultQuery_recipes_recipes_servingName[] | null;
  timing: SearchResultQuery_recipes_recipes_timing;
  status: RecipeStatus;
  thumbnail: SearchResultQuery_recipes_recipes_thumbnail | null;
  ingredients: SearchResultQuery_recipes_recipes_ingredients[];
  author: SearchResultQuery_recipes_recipes_author;
}

export interface SearchResultQuery_recipes_pagination {
  hasNext: boolean;
  lastId: string | null;
}

export interface SearchResultQuery_recipes {
  recipes: SearchResultQuery_recipes_recipes[];
  pagination: SearchResultQuery_recipes_pagination;
}

export interface SearchResultQuery {
  recipes: SearchResultQuery_recipes;
}

export interface SearchResultQueryVariables {
  nameSearchQuery: string;
  lastId?: any | null;
  tags?: string[] | null;
}
