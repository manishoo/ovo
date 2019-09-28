/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../../models/global-types";

// ====================================================
// GraphQL fragment: RecipeCardRecipe
// ====================================================

export interface RecipeCardRecipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeCardRecipe_coverImage {
  url: string;
}

export interface RecipeCardRecipe_timing {
  totalTime: number;
}

export interface RecipeCardRecipe_thumbnail {
  url: string;
}

export interface RecipeCardRecipe_author_imageUrl {
  url: string;
}

export interface RecipeCardRecipe_author {
  id: string;
  username: string;
  imageUrl: RecipeCardRecipe_author_imageUrl | null;
}

export interface RecipeCardRecipe {
  id: string;
  slug: string;
  title: RecipeCardRecipe_title[];
  coverImage: RecipeCardRecipe_coverImage | null;
  timing: RecipeCardRecipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: RecipeCardRecipe_thumbnail | null;
  author: RecipeCardRecipe_author;
}
