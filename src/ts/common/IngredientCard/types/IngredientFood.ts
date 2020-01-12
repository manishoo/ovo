/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL fragment: IngredientFood
// ====================================================

export interface IngredientFood_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientFood_description {
  text: string;
  locale: LanguageCode;
}

export interface IngredientFood_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientFood_weights {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: IngredientFood_weights_name[];
}

export interface IngredientFood_image {
  url: string;
}

export interface IngredientFood_thumbnail {
  url: string;
}

export interface IngredientFood_nutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientFood_nutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientFood_nutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientFood_nutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientFood_nutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientFood_nutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface IngredientFood_nutrition {
  calories: IngredientFood_nutrition_calories | null;
  proteins: IngredientFood_nutrition_proteins | null;
  carbsByDifference: IngredientFood_nutrition_carbsByDifference | null;
  totalCarbs: IngredientFood_nutrition_totalCarbs | null;
  totalAvailableCarbs: IngredientFood_nutrition_totalAvailableCarbs | null;
  fats: IngredientFood_nutrition_fats | null;
}

export interface IngredientFood_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientFood_origFoodGroups {
  id: string;
  name: IngredientFood_origFoodGroups_name[];
}

export interface IngredientFood {
  id: string;
  name: IngredientFood_name[];
  description: IngredientFood_description[] | null;
  weights: IngredientFood_weights[];
  image: IngredientFood_image | null;
  thumbnail: IngredientFood_thumbnail | null;
  nutrition: IngredientFood_nutrition | null;
  origFoodGroups: IngredientFood_origFoodGroups[][];
}
