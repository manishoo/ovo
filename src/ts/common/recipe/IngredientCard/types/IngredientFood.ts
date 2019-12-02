/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../models/global-types";

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
  gramWeight: number;
  id: string;
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
  unit: string;
}

export interface IngredientFood_nutrition {
  calories: IngredientFood_nutrition_calories | null;
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
  nutrition: IngredientFood_nutrition;
  origFoodGroups: IngredientFood_origFoodGroups[][];
}
