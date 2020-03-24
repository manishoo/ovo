/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode, RecipeStatus } from './../../../models/global-types'

// ====================================================
// GraphQL query operation: SearchResultQuery
// ====================================================

export interface SearchResultQuery_recipes_recipes_title {
  text: string;
  locale: LanguageCode;
}

export interface SearchResultQuery_recipes_recipes_timing {
  totalTime: number | null;
}

export interface SearchResultQuery_recipes_recipes_thumbnail {
  url: string;
}

export interface SearchResultQuery_recipes_recipes_author_avatar {
  url: string;
}

export interface SearchResultQuery_recipes_recipes_author {
  id: string;
  username: string;
  avatar: SearchResultQuery_recipes_recipes_author_avatar | null;
}

export interface SearchResultQuery_recipes_recipes {
  id: string;
  slug: string;
  title: SearchResultQuery_recipes_recipes_title[];
  timing: SearchResultQuery_recipes_recipes_timing;
  status: RecipeStatus;
  thumbnail: SearchResultQuery_recipes_recipes_thumbnail | null;
  author: SearchResultQuery_recipes_recipes_author;
}

export interface SearchResultQuery_recipes_pagination {
  hasNext: boolean;
  lastId: string | null;
}

export interface SearchResultQuery_recipes {
  recipes: SearchResultQuery_recipes_recipes[];
  pagination: SearchResultQuery_recipes_pagination;
}

export interface SearchResultQuery {
  recipes: SearchResultQuery_recipes;
}

export interface SearchResultQueryVariables {
  nameSearchQuery: string;
  lastId?: any | null;
  tags?: string[] | null;
}
