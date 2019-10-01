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

export interface SelectFoodQuery_foods_foods_description {
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
  description: SelectFoodQuery_foods_foods_description[] | null;
  weights: SelectFoodQuery_foods_foods_weights[];
  imageUrl: SelectFoodQuery_foods_foods_imageUrl;
  thumbnailUrl: SelectFoodQuery_foods_foods_thumbnailUrl;
}

export interface SelectFoodQuery_foods {
  foods: SelectFoodQuery_foods_foods[];
}

export interface SelectFoodQuery_recipes_recipes_title {
  text: string;
  locale: LanguageCode;
}

export interface SelectFoodQuery_recipes_recipes_coverImage {
  url: string;
}

export interface SelectFoodQuery_recipes_recipes_timing {
  totalTime: number;
}

export interface SelectFoodQuery_recipes_recipes_thumbnail {
  url: string;
}

export interface SelectFoodQuery_recipes_recipes_author_imageUrl {
  url: string;
}

export interface SelectFoodQuery_recipes_recipes_author {
  id: string;
  username: string;
  imageUrl: SelectFoodQuery_recipes_recipes_author_imageUrl | null;
}

export interface SelectFoodQuery_recipes_recipes {
  id: string;
  slug: string;
  title: SelectFoodQuery_recipes_recipes_title[];
  coverImage: SelectFoodQuery_recipes_recipes_coverImage | null;
  timing: SelectFoodQuery_recipes_recipes_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: SelectFoodQuery_recipes_recipes_thumbnail | null;
  author: SelectFoodQuery_recipes_recipes_author;
}

export interface SelectFoodQuery_recipes {
  recipes: SelectFoodQuery_recipes_recipes[];
}

export interface SelectFoodQuery {
  foods: SelectFoodQuery_foods;
  recipes: SelectFoodQuery_recipes;
}

export interface SelectFoodQueryVariables {
  nameSearchQuery?: string | null;
}
