/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../../../models/global-types'

// ====================================================
// GraphQL query operation: ProfileRecipesQuery
// ====================================================

export interface ProfileRecipesQuery_recipes_recipes_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileRecipesQuery_recipes_recipes_timing {
  totalTime: number | null;
}

export interface ProfileRecipesQuery_recipes_recipes_thumbnail {
  url: string;
}

export interface ProfileRecipesQuery_recipes_recipes_author_avatar {
  url: string;
}

export interface ProfileRecipesQuery_recipes_recipes_author {
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  avatar: ProfileRecipesQuery_recipes_recipes_author_avatar | null;
}

export interface ProfileRecipesQuery_recipes_recipes {
  id: string;
  slug: string;
  title: ProfileRecipesQuery_recipes_recipes_title[];
  timing: ProfileRecipesQuery_recipes_recipes_timing;
  status: RecipeStatus;
  thumbnail: ProfileRecipesQuery_recipes_recipes_thumbnail | null;
  author: ProfileRecipesQuery_recipes_recipes_author;
}

export interface ProfileRecipesQuery_recipes_pagination {
  hasNext: boolean;
  lastId: string | null;
}

export interface ProfileRecipesQuery_recipes {
  recipes: ProfileRecipesQuery_recipes_recipes[];
  pagination: ProfileRecipesQuery_recipes_pagination;
}

export interface ProfileRecipesQuery {
  recipes: ProfileRecipesQuery_recipes;
}

export interface ProfileRecipesQueryVariables {
  lastId?: any | null;
  userId?: any | null;
  size?: number | null;
}
