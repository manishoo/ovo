/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../global-types'

// ====================================================
// GraphQL fragment: IngredientRecipe
// ====================================================

export interface IngredientRecipe_title {
  text: string;
  locale: LanguageCode;
}

export interface IngredientRecipe_timing {
  totalTime: number | null;
}

export interface IngredientRecipe_thumbnail {
  url: string;
}

export interface IngredientRecipe_author_avatar {
  url: string;
}

export interface IngredientRecipe_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: IngredientRecipe_author_avatar | null;
}

export interface IngredientRecipe {
  id: string;
  slug: string;
  title: IngredientRecipe_title[];
  timing: IngredientRecipe_timing;
  status: RecipeStatus;
  thumbnail: IngredientRecipe_thumbnail | null;
  author: IngredientRecipe_author;
}
