/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../../../models/global-types'

// ====================================================
// GraphQL query operation: ProfileRecipesQuery
// ====================================================

export interface ProfileRecipesQuery_recipes_recipes_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_servingName {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface ProfileRecipesQuery_recipes_recipes_thumbnail {
  url: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_customUnit {
  gramWeight: number | null;
  name: ProfileRecipesQuery_recipes_recipes_ingredients_customUnit_name[];
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: ProfileRecipesQuery_recipes_recipes_ingredients_unit_Weight_name[];
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: ProfileRecipesQuery_recipes_recipes_ingredients_unit_CustomUnit_name[];
}

export type ProfileRecipesQuery_recipes_recipes_ingredients_unit =
  ProfileRecipesQuery_recipes_recipes_ingredients_unit_Weight
  | ProfileRecipesQuery_recipes_recipes_ingredients_unit_CustomUnit;

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_weights_name[];
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_thumbnail {
  url: string;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_origFoodGroups {
  id: string;
  name: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_origFoodGroups_name[];
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Food {
  id: string;
  name: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_name[];
  description: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_description[] | null;
  weights: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_weights[];
  thumbnail: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: ProfileRecipesQuery_recipes_recipes_ingredients_item_Food_origFoodGroups[][];
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: ProfileRecipesQuery_recipes_recipes_ingredients_item_Recipe_title[];
}

export type ProfileRecipesQuery_recipes_recipes_ingredients_item =
  ProfileRecipesQuery_recipes_recipes_ingredients_item_Food
  | ProfileRecipesQuery_recipes_recipes_ingredients_item_Recipe;

export interface ProfileRecipesQuery_recipes_recipes_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: ProfileRecipesQuery_recipes_recipes_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: ProfileRecipesQuery_recipes_recipes_ingredients_description[] | null;
  amount: number | null;
  customUnit: ProfileRecipesQuery_recipes_recipes_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: ProfileRecipesQuery_recipes_recipes_ingredients_unit | null;
  item: ProfileRecipesQuery_recipes_recipes_ingredients_item | null;
}

export interface ProfileRecipesQuery_recipes_recipes_author_avatar {
  url: string;
}

export interface ProfileRecipesQuery_recipes_recipes_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: ProfileRecipesQuery_recipes_recipes_author_avatar | null;
}

export interface ProfileRecipesQuery_recipes_recipes {
  id: string;
  slug: string;
  title: ProfileRecipesQuery_recipes_recipes_title[];
  servingName: ProfileRecipesQuery_recipes_recipes_servingName[] | null;
  timing: ProfileRecipesQuery_recipes_recipes_timing;
  status: RecipeStatus;
  thumbnail: ProfileRecipesQuery_recipes_recipes_thumbnail | null;
  ingredients: ProfileRecipesQuery_recipes_recipes_ingredients[];
  author: ProfileRecipesQuery_recipes_recipes_author;
}

export interface ProfileRecipesQuery_recipes_pagination {
  hasNext: boolean;
  lastId: string | null;
}

export interface ProfileRecipesQuery_recipes {
  recipes: ProfileRecipesQuery_recipes_recipes[];
  pagination: ProfileRecipesQuery_recipes_pagination;
}

export interface ProfileRecipesQuery {
  recipes: ProfileRecipesQuery_recipes;
}

export interface ProfileRecipesQueryVariables {
  lastId?: any | null;
  userId?: any | null;
  size?: number | null;
}
