/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL fragment: MealItem
// ====================================================

export interface MealItem_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_recipe_image {
  url: string;
}

export interface MealItem_recipe_timing {
  totalTime: number;
}

export interface MealItem_recipe_thumbnail {
  url: string;
}

export interface MealItem_recipe_ingredients_thumbnail {
  url: string;
}

export interface MealItem_recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_recipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_recipe_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_recipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_recipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealItem_recipe_ingredients_food_weights_name[];
}

export interface MealItem_recipe_ingredients_food_image {
  url: string;
}

export interface MealItem_recipe_ingredients_food_thumbnail {
  url: string;
}

export interface MealItem_recipe_ingredients_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItem_recipe_ingredients_food_nutrition {
  calories: MealItem_recipe_ingredients_food_nutrition_calories | null;
}

export interface MealItem_recipe_ingredients_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_recipe_ingredients_food_origFoodGroups {
  id: string;
  name: MealItem_recipe_ingredients_food_origFoodGroups_name[];
}

export interface MealItem_recipe_ingredients_food {
  id: string;
  name: MealItem_recipe_ingredients_food_name[];
  description: MealItem_recipe_ingredients_food_description[] | null;
  weights: MealItem_recipe_ingredients_food_weights[];
  image: MealItem_recipe_ingredients_food_image | null;
  thumbnail: MealItem_recipe_ingredients_food_thumbnail | null;
  nutrition: MealItem_recipe_ingredients_food_nutrition;
  origFoodGroups: MealItem_recipe_ingredients_food_origFoodGroups[][];
}

export interface MealItem_recipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_recipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealItem_recipe_ingredients_weight_name[];
}

export interface MealItem_recipe_ingredients {
  thumbnail: MealItem_recipe_ingredients_thumbnail | null;
  name: MealItem_recipe_ingredients_name[] | null;
  description: MealItem_recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: MealItem_recipe_ingredients_food | null;
  weight: MealItem_recipe_ingredients_weight | null;
}

export interface MealItem_recipe_author_avatar {
  url: string;
}

export interface MealItem_recipe_author {
  id: string;
  username: string;
  avatar: MealItem_recipe_author_avatar | null;
}

export interface MealItem_recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItem_recipe_nutrition {
  calories: MealItem_recipe_nutrition_calories | null;
}

export interface MealItem_recipe {
  id: string;
  slug: string;
  title: MealItem_recipe_title[];
  image: MealItem_recipe_image | null;
  timing: MealItem_recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealItem_recipe_thumbnail | null;
  ingredients: MealItem_recipe_ingredients[];
  author: MealItem_recipe_author;
  nutrition: MealItem_recipe_nutrition | null;
}

export interface MealItem_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_food_origFoodGroups {
  id: string;
  name: MealItem_food_origFoodGroups_name[];
}

export interface MealItem_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealItem_food_weights_name[];
}

export interface MealItem_food_image {
  url: string;
}

export interface MealItem_food_thumbnail {
  url: string;
}

export interface MealItem_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItem_food_nutrition {
  calories: MealItem_food_nutrition_calories | null;
}

export interface MealItem_food {
  id: string;
  name: MealItem_food_name[];
  description: MealItem_food_description[] | null;
  origFoodGroups: MealItem_food_origFoodGroups[][];
  weights: MealItem_food_weights[];
  image: MealItem_food_image | null;
  thumbnail: MealItem_food_thumbnail | null;
  nutrition: MealItem_food_nutrition;
}

export interface MealItem_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItem_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealItem_weight_name[];
}

export interface MealItem {
  id: any;
  amount: number | null;
  recipe: MealItem_recipe | null;
  food: MealItem_food | null;
  customUnit: string | null;
  gramWeight: number | null;
  description: MealItem_description[] | null;
  weight: MealItem_weight | null;
}
