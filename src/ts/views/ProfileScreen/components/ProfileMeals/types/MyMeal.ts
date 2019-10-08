/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../../models/global-types";

// ====================================================
// GraphQL fragment: MyMeal
// ====================================================

export interface MyMeal_name {
  text: string;
  locale: LanguageCode;
}

export interface MyMeal_items_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MyMeal_items_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MyMeal_items_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MyMeal_items_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MyMeal_items_food_weights_name[];
}

export interface MyMeal_items_food_image {
  url: string;
}

export interface MyMeal_items_food_thumbnail {
  url: string;
}

export interface MyMeal_items_food {
  id: string;
  name: MyMeal_items_food_name[];
  description: MyMeal_items_food_description[] | null;
  weights: MyMeal_items_food_weights[];
  image: MyMeal_items_food_image;
  thumbnail: MyMeal_items_food_thumbnail;
}

export interface MyMeal_items_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MyMeal_items_recipe_image {
  url: string;
}

export interface MyMeal_items_recipe_timing {
  totalTime: number;
}

export interface MyMeal_items_recipe_thumbnail {
  url: string;
}

export interface MyMeal_items_recipe_author_avatar {
  url: string;
}

export interface MyMeal_items_recipe_author {
  id: string;
  username: string;
  avatar: MyMeal_items_recipe_author_avatar | null;
}

export interface MyMeal_items_recipe {
  id: string;
  slug: string;
  title: MyMeal_items_recipe_title[];
  image: MyMeal_items_recipe_image | null;
  timing: MyMeal_items_recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MyMeal_items_recipe_thumbnail | null;
  author: MyMeal_items_recipe_author;
}

export interface MyMeal_items_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MyMeal_items_weight {
  name: MyMeal_items_weight_name[];
  amount: number;
  gramWeight: number;
  id: string;
}

export interface MyMeal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface MyMeal_items_alternativeMealItems_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MyMeal_items_alternativeMealItems_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MyMeal_items_alternativeMealItems_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MyMeal_items_alternativeMealItems_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MyMeal_items_alternativeMealItems_food_weights_name[];
}

export interface MyMeal_items_alternativeMealItems_food_image {
  url: string;
}

export interface MyMeal_items_alternativeMealItems_food_thumbnail {
  url: string;
}

export interface MyMeal_items_alternativeMealItems_food {
  id: string;
  name: MyMeal_items_alternativeMealItems_food_name[];
  description: MyMeal_items_alternativeMealItems_food_description[] | null;
  weights: MyMeal_items_alternativeMealItems_food_weights[];
  image: MyMeal_items_alternativeMealItems_food_image;
  thumbnail: MyMeal_items_alternativeMealItems_food_thumbnail;
}

export interface MyMeal_items_alternativeMealItems_description {
  text: string;
  locale: LanguageCode;
}

export interface MyMeal_items_alternativeMealItems_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MyMeal_items_alternativeMealItems_recipe_image {
  url: string;
}

export interface MyMeal_items_alternativeMealItems_recipe_timing {
  totalTime: number;
}

export interface MyMeal_items_alternativeMealItems_recipe_thumbnail {
  url: string;
}

export interface MyMeal_items_alternativeMealItems_recipe_author_avatar {
  url: string;
}

export interface MyMeal_items_alternativeMealItems_recipe_author {
  id: string;
  username: string;
  avatar: MyMeal_items_alternativeMealItems_recipe_author_avatar | null;
}

export interface MyMeal_items_alternativeMealItems_recipe {
  id: string;
  slug: string;
  title: MyMeal_items_alternativeMealItems_recipe_title[];
  image: MyMeal_items_alternativeMealItems_recipe_image | null;
  timing: MyMeal_items_alternativeMealItems_recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MyMeal_items_alternativeMealItems_recipe_thumbnail | null;
  author: MyMeal_items_alternativeMealItems_recipe_author;
}

export interface MyMeal_items_alternativeMealItems_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MyMeal_items_alternativeMealItems_weight {
  name: MyMeal_items_alternativeMealItems_weight_name[];
  amount: number;
  gramWeight: number;
  id: string;
}

export interface MyMeal_items_alternativeMealItems {
  amount: number;
  food: MyMeal_items_alternativeMealItems_food | null;
  customUnit: string | null;
  gramWeight: number | null;
  description: MyMeal_items_alternativeMealItems_description[] | null;
  recipe: MyMeal_items_alternativeMealItems_recipe | null;
  weight: MyMeal_items_alternativeMealItems_weight | null;
}

export interface MyMeal_items {
  amount: number;
  food: MyMeal_items_food | null;
  recipe: MyMeal_items_recipe | null;
  weight: MyMeal_items_weight | null;
  customUnit: string | null;
  gramWeight: number | null;
  description: MyMeal_items_description[] | null;
  alternativeMealItems: MyMeal_items_alternativeMealItems[] | null;
}

export interface MyMeal_author_avatar {
  url: string;
}

export interface MyMeal_author {
  id: string;
  username: string;
  avatar: MyMeal_author_avatar | null;
}

export interface MyMeal_timing {
  totalTime: number;
}

export interface MyMeal {
  id: string;
  name: MyMeal_name[] | null;
  likedByUser: boolean | null;
  likesCount: number;
  items: MyMeal_items[];
  author: MyMeal_author;
  timing: MyMeal_timing;
}
