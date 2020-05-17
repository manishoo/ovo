/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../global-types'

// ====================================================
// GraphQL fragment: IngredientRecipe
// ====================================================

export interface IngredientRecipe_title {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_servingName {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface IngredientRecipe_thumbnail {
  url: string;
}

export interface IngredientRecipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_ingredients_customUnit {
  gramWeight: number | null;
  name: IngredientRecipe_ingredients_customUnit_name[];
}

export interface IngredientRecipe_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: IngredientRecipe_ingredients_unit_Weight_name[];
}

export interface IngredientRecipe_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: IngredientRecipe_ingredients_unit_CustomUnit_name[];
}

export type IngredientRecipe_ingredients_unit =
  IngredientRecipe_ingredients_unit_Weight
  | IngredientRecipe_ingredients_unit_CustomUnit;

export interface IngredientRecipe_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: IngredientRecipe_ingredients_item_Food_weights_name[];
}

export interface IngredientRecipe_ingredients_item_Food_thumbnail {
  url: string;
}

export interface IngredientRecipe_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_ingredients_item_Food_origFoodGroups {
  id: string;
  name: IngredientRecipe_ingredients_item_Food_origFoodGroups_name[];
}

export interface IngredientRecipe_ingredients_item_Food {
  id: string;
  name: IngredientRecipe_ingredients_item_Food_name[];
  description: IngredientRecipe_ingredients_item_Food_description[] | null;
  weights: IngredientRecipe_ingredients_item_Food_weights[];
  thumbnail: IngredientRecipe_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: IngredientRecipe_ingredients_item_Food_origFoodGroups[][];
}

export interface IngredientRecipe_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: IngredientRecipe_ingredients_item_Recipe_title[];
}

export type IngredientRecipe_ingredients_item =
  IngredientRecipe_ingredients_item_Food
  | IngredientRecipe_ingredients_item_Recipe;

export interface IngredientRecipe_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: IngredientRecipe_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: IngredientRecipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: IngredientRecipe_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: IngredientRecipe_ingredients_unit | null;
  item: IngredientRecipe_ingredients_item | null;
}

export interface IngredientRecipe_author_avatar {
  url: string;
}

export interface IngredientRecipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: IngredientRecipe_author_avatar | null;
}

export interface IngredientRecipe {
  id: string;
  slug: string;
  title: IngredientRecipe_title[];
  servingName: IngredientRecipe_servingName[] | null;
  timing: IngredientRecipe_timing;
  status: RecipeStatus;
  thumbnail: IngredientRecipe_thumbnail | null;
  ingredients: IngredientRecipe_ingredients[];
  author: IngredientRecipe_author;
}
