/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode } from './../global-types'

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

export interface IngredientFood_thumbnail {
  url: string;
}

export interface IngredientFood {
  id: string;
  name: IngredientFood_name[];
  description: IngredientFood_description[] | null;
  weights: IngredientFood_weights[];
  thumbnail: IngredientFood_thumbnail | null;
  origFoodClassSlug: string;
}
