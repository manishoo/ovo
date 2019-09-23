/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL fragment: SearchResultFood
// ====================================================

export interface SearchResultFood_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultFood_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultFood_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: SearchResultFood_weights_name[];
}

export interface SearchResultFood_imageUrl {
  url: string;
}

export interface SearchResultFood_thumbnailUrl {
  url: string;
}

export interface SearchResultFood {
  id: string;
  name: SearchResultFood_name[];
  weights: SearchResultFood_weights[];
  imageUrl: SearchResultFood_imageUrl;
  thumbnailUrl: SearchResultFood_thumbnailUrl;
}
