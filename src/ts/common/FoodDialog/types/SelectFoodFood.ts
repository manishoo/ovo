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

export interface SelectFoodFood_imageUrl {
  url: string;
}

export interface SelectFoodFood_thumbnailUrl {
  url: string;
}

export interface SelectFoodFood {
  id: string;
  name: SelectFoodFood_name[];
  weights: SelectFoodFood_weights[];
  imageUrl: SelectFoodFood_imageUrl;
  thumbnailUrl: SelectFoodFood_thumbnailUrl;
}
