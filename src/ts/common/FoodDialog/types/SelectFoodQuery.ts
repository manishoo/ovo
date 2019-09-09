/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL query operation: SelectFoodQuery
// ====================================================

export interface SelectFoodQuery_foods_foods_name {
  text: string;
  locale: LanguageCode;
}

export interface SelectFoodQuery_foods_foods_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface SelectFoodQuery_foods_foods_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: SelectFoodQuery_foods_foods_weights_name[];
}

export interface SelectFoodQuery_foods_foods_imageUrl {
  url: string;
}

export interface SelectFoodQuery_foods_foods_thumbnailUrl {
  url: string;
}

export interface SelectFoodQuery_foods_foods {
  id: string;
  name: SelectFoodQuery_foods_foods_name[];
  weights: SelectFoodQuery_foods_foods_weights[];
  imageUrl: SelectFoodQuery_foods_foods_imageUrl;
  thumbnailUrl: SelectFoodQuery_foods_foods_thumbnailUrl;
}

export interface SelectFoodQuery_foods {
  foods: SelectFoodQuery_foods_foods[];
}

export interface SelectFoodQuery {
  foods: SelectFoodQuery_foods;
}

export interface SelectFoodQueryVariables {
  nameSearchQuery?: string | null;
}
