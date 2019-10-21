/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL fragment: IngredientCardIngredient
// ====================================================

export interface IngredientCardIngredient_thumbnail {
  url: string;
}

export interface IngredientCardIngredient_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_description {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_food_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_food_description {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: IngredientCardIngredient_food_weights_name[];
}

export interface IngredientCardIngredient_food_image {
  url: string;
}

export interface IngredientCardIngredient_food_thumbnail {
  url: string;
}

export interface IngredientCardIngredient_food {
  id: string;
  name: IngredientCardIngredient_food_name[];
  description: IngredientCardIngredient_food_description[] | null;
  weights: IngredientCardIngredient_food_weights[];
  image: IngredientCardIngredient_food_image | null;
  thumbnail: IngredientCardIngredient_food_thumbnail | null;
}

export interface IngredientCardIngredient_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface IngredientCardIngredient_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: IngredientCardIngredient_weight_name[];
}

export interface IngredientCardIngredient {
  thumbnail: IngredientCardIngredient_thumbnail | null;
  name: IngredientCardIngredient_name[] | null;
  description: IngredientCardIngredient_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: IngredientCardIngredient_food | null;
  weight: IngredientCardIngredient_weight | null;
}
