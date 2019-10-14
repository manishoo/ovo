/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from './../../../../../models/global-types'

// ====================================================
// GraphQL query operation: ProfileMealsQuery
// ====================================================

export interface ProfileMealsQuery_meals_meals_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_food_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_food_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: ProfileMealsQuery_meals_meals_items_food_weights_name[];
}

export interface ProfileMealsQuery_meals_meals_items_food_image {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_food_thumbnail {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_food {
  id: string;
  name: ProfileMealsQuery_meals_meals_items_food_name[];
  description: ProfileMealsQuery_meals_meals_items_food_description[] | null;
  weights: ProfileMealsQuery_meals_meals_items_food_weights[];
  image: ProfileMealsQuery_meals_meals_items_food_image;
  thumbnail: ProfileMealsQuery_meals_meals_items_food_thumbnail;
}

export interface ProfileMealsQuery_meals_meals_items_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_recipe_image {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_recipe_timing {
  totalTime: number;
}

export interface ProfileMealsQuery_meals_meals_items_recipe_thumbnail {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_recipe_author_avatar {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_recipe_author {
  id: string;
  username: string;
  avatar: ProfileMealsQuery_meals_meals_items_recipe_author_avatar | null;
}

export interface ProfileMealsQuery_meals_meals_items_recipe {
  id: string;
  slug: string;
  title: ProfileMealsQuery_meals_meals_items_recipe_title[];
  image: ProfileMealsQuery_meals_meals_items_recipe_image | null;
  timing: ProfileMealsQuery_meals_meals_items_recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: ProfileMealsQuery_meals_meals_items_recipe_thumbnail | null;
  author: ProfileMealsQuery_meals_meals_items_recipe_author;
}

export interface ProfileMealsQuery_meals_meals_items_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_weight {
  name: ProfileMealsQuery_meals_meals_items_weight_name[];
  amount: number;
  gramWeight: number;
  id: string;
}

export interface ProfileMealsQuery_meals_meals_items_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_food_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_food_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_food_weights_name[];
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_food_image {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_food_thumbnail {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_food {
  id: string;
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_food_name[];
  description: ProfileMealsQuery_meals_meals_items_alternativeMealItems_food_description[] | null;
  weights: ProfileMealsQuery_meals_meals_items_alternativeMealItems_food_weights[];
  image: ProfileMealsQuery_meals_meals_items_alternativeMealItems_food_image;
  thumbnail: ProfileMealsQuery_meals_meals_items_alternativeMealItems_food_thumbnail;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_description {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_recipe_image {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_recipe_timing {
  totalTime: number;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_recipe_thumbnail {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_recipe_author_avatar {
  url: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_recipe_author {
  id: string;
  username: string;
  avatar: ProfileMealsQuery_meals_meals_items_alternativeMealItems_recipe_author_avatar | null;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_recipe {
  id: string;
  slug: string;
  title: ProfileMealsQuery_meals_meals_items_alternativeMealItems_recipe_title[];
  image: ProfileMealsQuery_meals_meals_items_alternativeMealItems_recipe_image | null;
  timing: ProfileMealsQuery_meals_meals_items_alternativeMealItems_recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: ProfileMealsQuery_meals_meals_items_alternativeMealItems_recipe_thumbnail | null;
  author: ProfileMealsQuery_meals_meals_items_alternativeMealItems_recipe_author;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems_weight {
  name: ProfileMealsQuery_meals_meals_items_alternativeMealItems_weight_name[];
  amount: number;
  gramWeight: number;
  id: string;
}

export interface ProfileMealsQuery_meals_meals_items_alternativeMealItems {
  amount: number;
  food: ProfileMealsQuery_meals_meals_items_alternativeMealItems_food | null;
  customUnit: string | null;
  gramWeight: number | null;
  description: ProfileMealsQuery_meals_meals_items_alternativeMealItems_description[] | null;
  recipe: ProfileMealsQuery_meals_meals_items_alternativeMealItems_recipe | null;
  weight: ProfileMealsQuery_meals_meals_items_alternativeMealItems_weight | null;
}

export interface ProfileMealsQuery_meals_meals_items {
  amount: number;
  food: ProfileMealsQuery_meals_meals_items_food | null;
  recipe: ProfileMealsQuery_meals_meals_items_recipe | null;
  weight: ProfileMealsQuery_meals_meals_items_weight | null;
  customUnit: string | null;
  gramWeight: number | null;
  description: ProfileMealsQuery_meals_meals_items_description[] | null;
  alternativeMealItems: ProfileMealsQuery_meals_meals_items_alternativeMealItems[] | null;
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
  totalTime: number;
}

export interface ProfileMealsQuery_meals_meals {
  id: string;
  name: ProfileMealsQuery_meals_meals_name[] | null;
  likedByUser: boolean | null;
  likesCount: number;
  items: ProfileMealsQuery_meals_meals_items[];
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
  userId?: string | null;
}
