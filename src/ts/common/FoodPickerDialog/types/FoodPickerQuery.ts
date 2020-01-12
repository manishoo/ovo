/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL query operation: FoodPickerQuery
// ====================================================

export interface FoodPickerQuery_foods_foods_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_foods_foods_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_foods_foods_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_foods_foods_origFoodGroups {
  id: string;
  name: FoodPickerQuery_foods_foods_origFoodGroups_name[];
}

export interface FoodPickerQuery_foods_foods_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_foods_foods_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: FoodPickerQuery_foods_foods_weights_name[];
}

export interface FoodPickerQuery_foods_foods_image {
  url: string;
}

export interface FoodPickerQuery_foods_foods_thumbnail {
  url: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface FoodPickerQuery_foods_foods_nutrition {
  calories: FoodPickerQuery_foods_foods_nutrition_calories | null;
  proteins: FoodPickerQuery_foods_foods_nutrition_proteins | null;
  carbsByDifference: FoodPickerQuery_foods_foods_nutrition_carbsByDifference | null;
  totalCarbs: FoodPickerQuery_foods_foods_nutrition_totalCarbs | null;
  totalAvailableCarbs: FoodPickerQuery_foods_foods_nutrition_totalAvailableCarbs | null;
  fats: FoodPickerQuery_foods_foods_nutrition_fats | null;
}

export interface FoodPickerQuery_foods_foods {
  id: string;
  name: FoodPickerQuery_foods_foods_name[];
  description: FoodPickerQuery_foods_foods_description[] | null;
  origFoodGroups: FoodPickerQuery_foods_foods_origFoodGroups[][];
  weights: FoodPickerQuery_foods_foods_weights[];
  image: FoodPickerQuery_foods_foods_image | null;
  thumbnail: FoodPickerQuery_foods_foods_thumbnail | null;
  nutrition: FoodPickerQuery_foods_foods_nutrition | null;
}

export interface FoodPickerQuery_foods {
  foods: FoodPickerQuery_foods_foods[];
}

export interface FoodPickerQuery_recipes_recipes_title {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_recipes_recipes_image {
  url: string;
}

export interface FoodPickerQuery_recipes_recipes_timing {
  totalTime: number;
}

export interface FoodPickerQuery_recipes_recipes_thumbnail {
  url: string;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_customUnit {
  gramWeight: number | null;
  name: FoodPickerQuery_recipes_recipes_ingredients_customUnit_name[];
}

export interface FoodPickerQuery_recipes_recipes_ingredients_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: FoodPickerQuery_recipes_recipes_ingredients_unit_Weight_name[];
}

export interface FoodPickerQuery_recipes_recipes_ingredients_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_unit_CustomUnit {
  gramWeight: number | null;
  name: FoodPickerQuery_recipes_recipes_ingredients_unit_CustomUnit_name[];
}

export type FoodPickerQuery_recipes_recipes_ingredients_unit = FoodPickerQuery_recipes_recipes_ingredients_unit_Weight | FoodPickerQuery_recipes_recipes_ingredients_unit_CustomUnit;

export interface FoodPickerQuery_recipes_recipes_ingredients_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_item_Food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_item_Food_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: FoodPickerQuery_recipes_recipes_ingredients_item_Food_weights_name[];
}

export interface FoodPickerQuery_recipes_recipes_ingredients_item_Food_image {
  url: string;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_item_Food_thumbnail {
  url: string;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_item_Food_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_item_Food_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_item_Food_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_item_Food_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_item_Food_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_item_Food_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_item_Food_nutrition {
  calories: FoodPickerQuery_recipes_recipes_ingredients_item_Food_nutrition_calories | null;
  proteins: FoodPickerQuery_recipes_recipes_ingredients_item_Food_nutrition_proteins | null;
  carbsByDifference: FoodPickerQuery_recipes_recipes_ingredients_item_Food_nutrition_carbsByDifference | null;
  totalCarbs: FoodPickerQuery_recipes_recipes_ingredients_item_Food_nutrition_totalCarbs | null;
  totalAvailableCarbs: FoodPickerQuery_recipes_recipes_ingredients_item_Food_nutrition_totalAvailableCarbs | null;
  fats: FoodPickerQuery_recipes_recipes_ingredients_item_Food_nutrition_fats | null;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_item_Food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_item_Food_origFoodGroups {
  id: string;
  name: FoodPickerQuery_recipes_recipes_ingredients_item_Food_origFoodGroups_name[];
}

export interface FoodPickerQuery_recipes_recipes_ingredients_item_Food {
  id: string;
  name: FoodPickerQuery_recipes_recipes_ingredients_item_Food_name[];
  description: FoodPickerQuery_recipes_recipes_ingredients_item_Food_description[] | null;
  weights: FoodPickerQuery_recipes_recipes_ingredients_item_Food_weights[];
  image: FoodPickerQuery_recipes_recipes_ingredients_item_Food_image | null;
  thumbnail: FoodPickerQuery_recipes_recipes_ingredients_item_Food_thumbnail | null;
  nutrition: FoodPickerQuery_recipes_recipes_ingredients_item_Food_nutrition | null;
  origFoodGroups: FoodPickerQuery_recipes_recipes_ingredients_item_Food_origFoodGroups[][];
}

export interface FoodPickerQuery_recipes_recipes_ingredients_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_item_Recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_item_Recipe_nutrition {
  calories: FoodPickerQuery_recipes_recipes_ingredients_item_Recipe_nutrition_calories | null;
}

export interface FoodPickerQuery_recipes_recipes_ingredients_item_Recipe {
  id: string;
  slug: string;
  title: FoodPickerQuery_recipes_recipes_ingredients_item_Recipe_title[];
  nutrition: FoodPickerQuery_recipes_recipes_ingredients_item_Recipe_nutrition | null;
}

export type FoodPickerQuery_recipes_recipes_ingredients_item = FoodPickerQuery_recipes_recipes_ingredients_item_Food | FoodPickerQuery_recipes_recipes_ingredients_item_Recipe;

export interface FoodPickerQuery_recipes_recipes_ingredients {
  id: any;
  /**
   * The plain name of the ingredient in the case it was not associated with a food or recipe
   */
  name: FoodPickerQuery_recipes_recipes_ingredients_name[] | null;
  /**
   * Additional descriptions or hints for this ingredient
   */
  description: FoodPickerQuery_recipes_recipes_ingredients_description[] | null;
  amount: number | null;
  customUnit: FoodPickerQuery_recipes_recipes_ingredients_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: FoodPickerQuery_recipes_recipes_ingredients_unit | null;
  item: FoodPickerQuery_recipes_recipes_ingredients_item | null;
}

export interface FoodPickerQuery_recipes_recipes_author_avatar {
  url: string;
}

export interface FoodPickerQuery_recipes_recipes_author {
  id: string;
  username: string;
  avatar: FoodPickerQuery_recipes_recipes_author_avatar | null;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface FoodPickerQuery_recipes_recipes_nutrition {
  calories: FoodPickerQuery_recipes_recipes_nutrition_calories | null;
  proteins: FoodPickerQuery_recipes_recipes_nutrition_proteins | null;
  carbsByDifference: FoodPickerQuery_recipes_recipes_nutrition_carbsByDifference | null;
  totalCarbs: FoodPickerQuery_recipes_recipes_nutrition_totalCarbs | null;
  totalAvailableCarbs: FoodPickerQuery_recipes_recipes_nutrition_totalAvailableCarbs | null;
  fats: FoodPickerQuery_recipes_recipes_nutrition_fats | null;
}

export interface FoodPickerQuery_recipes_recipes {
  id: string;
  slug: string;
  title: FoodPickerQuery_recipes_recipes_title[];
  image: FoodPickerQuery_recipes_recipes_image | null;
  timing: FoodPickerQuery_recipes_recipes_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: FoodPickerQuery_recipes_recipes_thumbnail | null;
  ingredients: FoodPickerQuery_recipes_recipes_ingredients[];
  author: FoodPickerQuery_recipes_recipes_author;
  nutrition: FoodPickerQuery_recipes_recipes_nutrition | null;
}

export interface FoodPickerQuery_recipes {
  recipes: FoodPickerQuery_recipes_recipes[];
}

export interface FoodPickerQuery {
  foods: FoodPickerQuery_foods;
  recipes: FoodPickerQuery_recipes;
}

export interface FoodPickerQueryVariables {
  nameSearchQuery?: string | null;
}
