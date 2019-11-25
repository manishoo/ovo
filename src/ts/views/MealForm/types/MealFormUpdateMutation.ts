/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealInput, LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL mutation operation: MealFormUpdateMutation
// ====================================================

export interface MealFormUpdateMutation_updateMeal_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealFormUpdateMutation_updateMeal_items_food_weights_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_food_image {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_food_thumbnail {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_food {
  id: string;
  name: MealFormUpdateMutation_updateMeal_items_food_name[];
  description: MealFormUpdateMutation_updateMeal_items_food_description[] | null;
  weights: MealFormUpdateMutation_updateMeal_items_food_weights[];
  image: MealFormUpdateMutation_updateMeal_items_food_image | null;
  thumbnail: MealFormUpdateMutation_updateMeal_items_food_thumbnail | null;
}

export interface MealFormUpdateMutation_updateMeal_items_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_recipe_image {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_recipe_timing {
  totalTime: number;
}

export interface MealFormUpdateMutation_updateMeal_items_recipe_thumbnail {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_recipe_author_avatar {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_recipe_author {
  id: string;
  username: string;
  avatar: MealFormUpdateMutation_updateMeal_items_recipe_author_avatar | null;
}

export interface MealFormUpdateMutation_updateMeal_items_recipe {
  id: string;
  slug: string;
  title: MealFormUpdateMutation_updateMeal_items_recipe_title[];
  image: MealFormUpdateMutation_updateMeal_items_recipe_image | null;
  timing: MealFormUpdateMutation_updateMeal_items_recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealFormUpdateMutation_updateMeal_items_recipe_thumbnail | null;
  author: MealFormUpdateMutation_updateMeal_items_recipe_author;
}

export interface MealFormUpdateMutation_updateMeal_items_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_weight {
  name: MealFormUpdateMutation_updateMeal_items_weight_name[];
  amount: number;
  gramWeight: number;
  id: string;
}

export interface MealFormUpdateMutation_updateMeal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_food_weights_name[];
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_food_image {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_food_thumbnail {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_food {
  id: string;
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_food_name[];
  description: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_food_description[] | null;
  weights: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_food_weights[];
  image: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_food_image | null;
  thumbnail: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_food_thumbnail | null;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_recipe_image {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_recipe_timing {
  totalTime: number;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_recipe_thumbnail {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_recipe_author_avatar {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_recipe_author {
  id: string;
  username: string;
  avatar: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_recipe_author_avatar | null;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_recipe {
  id: string;
  slug: string;
  title: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_recipe_title[];
  image: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_recipe_image | null;
  timing: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_recipe_thumbnail | null;
  author: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_recipe_author;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems_weight {
  name: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_weight_name[];
  amount: number;
  gramWeight: number;
  id: string;
}

export interface MealFormUpdateMutation_updateMeal_items_alternativeMealItems {
  amount: number;
  food: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_food | null;
  customUnit: string | null;
  gramWeight: number | null;
  description: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_description[] | null;
  recipe: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_recipe | null;
  weight: MealFormUpdateMutation_updateMeal_items_alternativeMealItems_weight | null;
}

export interface MealFormUpdateMutation_updateMeal_items {
  amount: number;
  food: MealFormUpdateMutation_updateMeal_items_food | null;
  recipe: MealFormUpdateMutation_updateMeal_items_recipe | null;
  weight: MealFormUpdateMutation_updateMeal_items_weight | null;
  customUnit: string | null;
  gramWeight: number | null;
  description: MealFormUpdateMutation_updateMeal_items_description[] | null;
  alternativeMealItems: MealFormUpdateMutation_updateMeal_items_alternativeMealItems[] | null;
}

export interface MealFormUpdateMutation_updateMeal_author_avatar {
  url: string;
}

export interface MealFormUpdateMutation_updateMeal_author {
  id: string;
  username: string;
  avatar: MealFormUpdateMutation_updateMeal_author_avatar | null;
}

export interface MealFormUpdateMutation_updateMeal_timing {
  totalTime: number;
}

export interface MealFormUpdateMutation_updateMeal {
  id: string;
  name: MealFormUpdateMutation_updateMeal_name[] | null;
  likedByUser: boolean | null;
  likesCount: number;
  items: MealFormUpdateMutation_updateMeal_items[];
  author: MealFormUpdateMutation_updateMeal_author;
  timing: MealFormUpdateMutation_updateMeal_timing;
}

export interface MealFormUpdateMutation {
  updateMeal: MealFormUpdateMutation_updateMeal;
}

export interface MealFormUpdateMutationVariables {
  id: any;
  meal: MealInput;
}
