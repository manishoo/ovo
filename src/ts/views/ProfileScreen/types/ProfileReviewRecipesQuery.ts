/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../../../models/global-types'

// ====================================================
// GraphQL query operation: ProfileReviewRecipesQuery
// ====================================================

export interface ProfileReviewRecipesQuery_recipes_recipes_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_timing {
  totalTime: number | null;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_thumbnail {
  url: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_author_avatar {
  url: string;
}

export interface ProfileReviewRecipesQuery_recipes_recipes_author {
  id: string;
  username: string;
  avatar: ProfileReviewRecipesQuery_recipes_recipes_author_avatar | null;
}

export interface ProfileReviewRecipesQuery_recipes_recipes {
  id: string;
  slug: string;
  title: ProfileReviewRecipesQuery_recipes_recipes_title[];
  timing: ProfileReviewRecipesQuery_recipes_recipes_timing;
  status: RecipeStatus;
  thumbnail: ProfileReviewRecipesQuery_recipes_recipes_thumbnail | null;
  author: ProfileReviewRecipesQuery_recipes_recipes_author;
}

export interface ProfileReviewRecipesQuery_recipes_pagination {
  hasNext: boolean;
  lastId: string | null;
}

export interface ProfileReviewRecipesQuery_recipes {
  recipes: ProfileReviewRecipesQuery_recipes_recipes[];
  pagination: ProfileReviewRecipesQuery_recipes_pagination;
}

export interface ProfileReviewRecipesQuery {
  recipes: ProfileReviewRecipesQuery_recipes;
}

export interface ProfileReviewRecipesQueryVariables {
  lastId?: any | null;
  size?: number | null;
}
