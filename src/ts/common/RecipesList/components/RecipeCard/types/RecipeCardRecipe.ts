/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from './../../../../../models/global-types'

// ====================================================
// GraphQL fragment: RecipeCardRecipe
// ====================================================

export interface RecipeCardRecipe_title {
  text: string;
  locale: LanguageCode;
}

export interface RecipeCardRecipe_image {
  url: string;
}

export interface RecipeCardRecipe_timing {
  totalTime: number;
}

export interface RecipeCardRecipe_thumbnail {
  url: string;
}

export interface RecipeCardRecipe_author_avatar {
  url: string;
}

export interface RecipeCardRecipe_author {
  id: string;
  username: string;
  avatar: RecipeCardRecipe_author_avatar | null;
}

export interface RecipeCardRecipe {
  id: string;
  slug: string;
  title: RecipeCardRecipe_title[];
  image: RecipeCardRecipe_image | null;
  timing: RecipeCardRecipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: RecipeCardRecipe_thumbnail | null;
  author: RecipeCardRecipe_author;
}
