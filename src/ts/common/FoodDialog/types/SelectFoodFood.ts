/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL fragment: SelectFoodFood
// ====================================================

export interface SelectFoodFood_name {
  text: string;
  locale: LanguageCode;
}

export interface SelectFoodFood_description {
  text: string;
  locale: LanguageCode;
}

export interface SelectFoodFood_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface SelectFoodFood_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: SelectFoodFood_weights_name[];
}

export interface SelectFoodFood_image {
  url: string;
}

export interface SelectFoodFood_thumbnail {
  url: string;
}

export interface SelectFoodFood {
  id: string;
  name: SelectFoodFood_name[];
  description: SelectFoodFood_description[] | null;
  weights: SelectFoodFood_weights[];
  image: SelectFoodFood_image | null;
  thumbnail: SelectFoodFood_thumbnail | null;
}
