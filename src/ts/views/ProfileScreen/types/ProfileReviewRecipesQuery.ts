/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../../../models/global-types'

// ====================================================
// GraphQL query operation: ProfileReviewRecipesQuery
// ====================================================

export interface ProfileReviewRecipesQuery_recipes_recipes_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_servingName {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number | null;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_thumbnail {
  url: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_customUnit {
  gramWeight: number | null;
  name: ProfileReviewRecipesQuery_recipes_recipes_ingredients_customUnit_name[];
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: ProfileReviewRecipesQuery_recipes_recipes_ingredients_unit_Weight_name[];
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: ProfileReviewRecipesQuery_recipes_recipes_ingredients_unit_CustomUnit_name[];
}

export type ProfileReviewRecipesQuery_recipes_recipes_ingredients_unit =
  ProfileReviewRecipesQuery_recipes_recipes_ingredients_unit_Weight
  | ProfileReviewRecipesQuery_recipes_recipes_ingredients_unit_CustomUnit;

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_weights_name[];
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_thumbnail {
  url: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_origFoodGroups {
  id: string;
  name: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_origFoodGroups_name[];
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food {
  id: string;
  name: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_name[];
  description: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_description[] | null;
  weights: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_weights[];
  thumbnail: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_thumbnail | null;
  origFoodClassSlug: string;
  origFoodGroups: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food_origFoodGroups[][];
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Recipe_title[];
}

export type ProfileReviewRecipesQuery_recipes_recipes_ingredients_item =
  ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Food
  | ProfileReviewRecipesQuery_recipes_recipes_ingredients_item_Recipe;

export interface ProfileReviewRecipesQuery_recipes_recipes_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: ProfileReviewRecipesQuery_recipes_recipes_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: ProfileReviewRecipesQuery_recipes_recipes_ingredients_description[] | null;
  amount: number | null;
  customUnit: ProfileReviewRecipesQuery_recipes_recipes_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: ProfileReviewRecipesQuery_recipes_recipes_ingredients_unit | null;
  item: ProfileReviewRecipesQuery_recipes_recipes_ingredients_item | null;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_author_avatar {
  url: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: ProfileReviewRecipesQuery_recipes_recipes_author_avatar | null;
}

export interface ProfileReviewRecipesQuery_recipes_recipes {
  id: string;
  slug: string;
  title: ProfileReviewRecipesQuery_recipes_recipes_title[];
  servingName: ProfileReviewRecipesQuery_recipes_recipes_servingName[] | null;
  timing: ProfileReviewRecipesQuery_recipes_recipes_timing;
  status: RecipeStatus;
  thumbnail: ProfileReviewRecipesQuery_recipes_recipes_thumbnail | null;
  ingredients: ProfileReviewRecipesQuery_recipes_recipes_ingredients[];
  author: ProfileReviewRecipesQuery_recipes_recipes_author;
}

export interface ProfileReviewRecipesQuery_recipes_pagination {
  hasNext: boolean;
  lastId: string | null;
}

export interface ProfileReviewRecipesQuery_recipes {
  recipes: ProfileReviewRecipesQuery_recipes_recipes[];
  pagination: ProfileReviewRecipesQuery_recipes_pagination;
}

export interface ProfileReviewRecipesQuery {
  recipes: ProfileReviewRecipesQuery_recipes;
}

export interface ProfileReviewRecipesQueryVariables {
  lastId?: any | null;
  size?: number | null;
}
