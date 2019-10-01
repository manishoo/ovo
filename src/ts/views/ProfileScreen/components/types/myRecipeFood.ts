/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL fragment: myRecipeFood
// ====================================================

export interface myRecipeFood_name {
  text: string;
  locale: LanguageCode;
}

export interface myRecipeFood_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface myRecipeFood_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: myRecipeFood_weights_name[];
}

export interface myRecipeFood_imageUrl {
  url: string;
}

export interface myRecipeFood_thumbnailUrl {
  url: string;
}

export interface myRecipeFood {
  id: string;
  name: myRecipeFood_name[];
  weights: myRecipeFood_weights[];
  imageUrl: myRecipeFood_imageUrl;
  thumbnailUrl: myRecipeFood_thumbnailUrl;
}
