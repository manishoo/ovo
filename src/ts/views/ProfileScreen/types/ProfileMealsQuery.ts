/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from './../../../models/global-types'

// ====================================================
// GraphQL query operation: ProfileMealsQuery
// ====================================================

export interface ProfileMealsQuery_meals_meals_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_customUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_customUnit {
  gramWeight: number | null;
  name: ProfileMealsQuery_meals_meals_items_customUnit_name[];
}

export interface ProfileMealsQuery_meals_meals_items_unit_Weight_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_unit_Weight {
  amount: number;
  gramWeight: number | null;
  id: any;
  name: ProfileMealsQuery_meals_meals_items_unit_Weight_name[];
}

export interface ProfileMealsQuery_meals_meals_items_unit_CustomUnit_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_unit_CustomUnit {
  gramWeight: number | null;
  name: ProfileMealsQuery_meals_meals_items_unit_CustomUnit_name[];
}

export type ProfileMealsQuery_meals_meals_items_unit = ProfileMealsQuery_meals_meals_items_unit_Weight | ProfileMealsQuery_meals_meals_items_unit_CustomUnit;

export interface ProfileMealsQuery_meals_meals_items_item_Food_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food_thumbnail {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Food {
  name: ProfileMealsQuery_meals_meals_items_item_Food_name[];
  description: ProfileMealsQuery_meals_meals_items_item_Food_description[] | null;
  thumbnail: ProfileMealsQuery_meals_meals_items_item_Food_thumbnail | null;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe_thumbnail {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_item_Recipe {
  title: ProfileMealsQuery_meals_meals_items_item_Recipe_title[];
  thumbnail: ProfileMealsQuery_meals_meals_items_item_Recipe_thumbnail | null;
}

export type ProfileMealsQuery_meals_meals_items_item = ProfileMealsQuery_meals_meals_items_item_Food | ProfileMealsQuery_meals_meals_items_item_Recipe;

export interface ProfileMealsQuery_meals_meals_items {
  id: any;
  isOptional: boolean | null;
  amount: number | null;
  customUnit: ProfileMealsQuery_meals_meals_items_customUnit | null;
  /**
   * The active unit for this ingredient. Empty value means grams
   */
  unit: ProfileMealsQuery_meals_meals_items_unit | null;
  item: ProfileMealsQuery_meals_meals_items_item | null;
}

export interface ProfileMealsQuery_meals_meals_author_avatar {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_author {
  id: string;
  username: string;
  avatar: ProfileMealsQuery_meals_meals_author_avatar | null;
}

export interface ProfileMealsQuery_meals_meals_timing {
  totalTime: number | null;
}

export interface ProfileMealsQuery_meals_meals {
  id: string;
  name: ProfileMealsQuery_meals_meals_name[] | null;
  likedByUser: boolean | null;
  likesCount: number;
  items: ProfileMealsQuery_meals_meals_items[];
  hasPermutations: boolean | null;
  author: ProfileMealsQuery_meals_meals_author;
  timing: ProfileMealsQuery_meals_meals_timing;
}

export interface ProfileMealsQuery_meals_pagination {
  hasNext: boolean;
  lastId: string | null;
}

export interface ProfileMealsQuery_meals {
  meals: ProfileMealsQuery_meals_meals[];
  pagination: ProfileMealsQuery_meals_pagination;
}

export interface ProfileMealsQuery {
  meals: ProfileMealsQuery_meals;
}

export interface ProfileMealsQueryVariables {
  lastId?: string | null;
  userId?: any | null;
}
