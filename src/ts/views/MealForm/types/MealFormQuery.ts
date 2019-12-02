/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL query operation: MealFormQuery
// ====================================================

export interface MealFormQuery_meal_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_food_origFoodGroups {
  id: string;
  name: MealFormQuery_meal_items_food_origFoodGroups_name[];
}

export interface MealFormQuery_meal_items_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealFormQuery_meal_items_food_weights_name[];
}

export interface MealFormQuery_meal_items_food_image {
  url: string;
}

export interface MealFormQuery_meal_items_food_thumbnail {
  url: string;
}

export interface MealFormQuery_meal_items_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_food_nutrition {
  calories: MealFormQuery_meal_items_food_nutrition_calories | null;
}

export interface MealFormQuery_meal_items_food {
  id: string;
  name: MealFormQuery_meal_items_food_name[];
  description: MealFormQuery_meal_items_food_description[] | null;
  origFoodGroups: MealFormQuery_meal_items_food_origFoodGroups[][];
  weights: MealFormQuery_meal_items_food_weights[];
  image: MealFormQuery_meal_items_food_image | null;
  thumbnail: MealFormQuery_meal_items_food_thumbnail | null;
  nutrition: MealFormQuery_meal_items_food_nutrition;
}

export interface MealFormQuery_meal_items_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_recipe_image {
  url: string;
}

export interface MealFormQuery_meal_items_recipe_timing {
  totalTime: number;
}

export interface MealFormQuery_meal_items_recipe_thumbnail {
  url: string;
}

export interface MealFormQuery_meal_items_recipe_ingredients_thumbnail {
  url: string;
}

export interface MealFormQuery_meal_items_recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_recipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_recipe_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_recipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_recipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealFormQuery_meal_items_recipe_ingredients_food_weights_name[];
}

export interface MealFormQuery_meal_items_recipe_ingredients_food_image {
  url: string;
}

export interface MealFormQuery_meal_items_recipe_ingredients_food_thumbnail {
  url: string;
}

export interface MealFormQuery_meal_items_recipe_ingredients_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_recipe_ingredients_food_nutrition {
  calories: MealFormQuery_meal_items_recipe_ingredients_food_nutrition_calories | null;
}

export interface MealFormQuery_meal_items_recipe_ingredients_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_recipe_ingredients_food_origFoodGroups {
  id: string;
  name: MealFormQuery_meal_items_recipe_ingredients_food_origFoodGroups_name[];
}

export interface MealFormQuery_meal_items_recipe_ingredients_food {
  id: string;
  name: MealFormQuery_meal_items_recipe_ingredients_food_name[];
  description: MealFormQuery_meal_items_recipe_ingredients_food_description[] | null;
  weights: MealFormQuery_meal_items_recipe_ingredients_food_weights[];
  image: MealFormQuery_meal_items_recipe_ingredients_food_image | null;
  thumbnail: MealFormQuery_meal_items_recipe_ingredients_food_thumbnail | null;
  nutrition: MealFormQuery_meal_items_recipe_ingredients_food_nutrition;
  origFoodGroups: MealFormQuery_meal_items_recipe_ingredients_food_origFoodGroups[][];
}

export interface MealFormQuery_meal_items_recipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_recipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealFormQuery_meal_items_recipe_ingredients_weight_name[];
}

export interface MealFormQuery_meal_items_recipe_ingredients {
  thumbnail: MealFormQuery_meal_items_recipe_ingredients_thumbnail | null;
  name: MealFormQuery_meal_items_recipe_ingredients_name[] | null;
  description: MealFormQuery_meal_items_recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: MealFormQuery_meal_items_recipe_ingredients_food | null;
  weight: MealFormQuery_meal_items_recipe_ingredients_weight | null;
}

export interface MealFormQuery_meal_items_recipe_author_avatar {
  url: string;
}

export interface MealFormQuery_meal_items_recipe_author {
  id: string;
  username: string;
  avatar: MealFormQuery_meal_items_recipe_author_avatar | null;
}

export interface MealFormQuery_meal_items_recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_recipe_nutrition {
  calories: MealFormQuery_meal_items_recipe_nutrition_calories | null;
}

export interface MealFormQuery_meal_items_recipe {
  id: string;
  slug: string;
  title: MealFormQuery_meal_items_recipe_title[];
  image: MealFormQuery_meal_items_recipe_image | null;
  timing: MealFormQuery_meal_items_recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealFormQuery_meal_items_recipe_thumbnail | null;
  ingredients: MealFormQuery_meal_items_recipe_ingredients[];
  author: MealFormQuery_meal_items_recipe_author;
  nutrition: MealFormQuery_meal_items_recipe_nutrition | null;
}

export interface MealFormQuery_meal_items_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_weight {
  name: MealFormQuery_meal_items_weight_name[];
  amount: number;
  gramWeight: number;
  id: string;
}

export interface MealFormQuery_meal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_food_origFoodGroups {
  id: string;
  name: MealFormQuery_meal_items_alternativeMealItems_food_origFoodGroups_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealFormQuery_meal_items_alternativeMealItems_food_weights_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_food_image {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_food_thumbnail {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_food_nutrition {
  calories: MealFormQuery_meal_items_alternativeMealItems_food_nutrition_calories | null;
}

export interface MealFormQuery_meal_items_alternativeMealItems_food {
  id: string;
  name: MealFormQuery_meal_items_alternativeMealItems_food_name[];
  description: MealFormQuery_meal_items_alternativeMealItems_food_description[] | null;
  origFoodGroups: MealFormQuery_meal_items_alternativeMealItems_food_origFoodGroups[][];
  weights: MealFormQuery_meal_items_alternativeMealItems_food_weights[];
  image: MealFormQuery_meal_items_alternativeMealItems_food_image | null;
  thumbnail: MealFormQuery_meal_items_alternativeMealItems_food_thumbnail | null;
  nutrition: MealFormQuery_meal_items_alternativeMealItems_food_nutrition;
}

export interface MealFormQuery_meal_items_alternativeMealItems_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_image {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_timing {
  totalTime: number;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_thumbnail {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_thumbnail {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food_weights_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food_image {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food_thumbnail {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food_nutrition {
  calories: MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food_nutrition_calories | null;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food_origFoodGroups {
  id: string;
  name: MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food_origFoodGroups_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food {
  id: string;
  name: MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food_name[];
  description: MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food_description[] | null;
  weights: MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food_weights[];
  image: MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food_image | null;
  thumbnail: MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food_thumbnail | null;
  nutrition: MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food_nutrition;
  origFoodGroups: MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food_origFoodGroups[][];
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_weight_name[];
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients {
  thumbnail: MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_thumbnail | null;
  name: MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_name[] | null;
  description: MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_food | null;
  weight: MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients_weight | null;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_author_avatar {
  url: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_author {
  id: string;
  username: string;
  avatar: MealFormQuery_meal_items_alternativeMealItems_recipe_author_avatar | null;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe_nutrition {
  calories: MealFormQuery_meal_items_alternativeMealItems_recipe_nutrition_calories | null;
}

export interface MealFormQuery_meal_items_alternativeMealItems_recipe {
  id: string;
  slug: string;
  title: MealFormQuery_meal_items_alternativeMealItems_recipe_title[];
  image: MealFormQuery_meal_items_alternativeMealItems_recipe_image | null;
  timing: MealFormQuery_meal_items_alternativeMealItems_recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealFormQuery_meal_items_alternativeMealItems_recipe_thumbnail | null;
  ingredients: MealFormQuery_meal_items_alternativeMealItems_recipe_ingredients[];
  author: MealFormQuery_meal_items_alternativeMealItems_recipe_author;
  nutrition: MealFormQuery_meal_items_alternativeMealItems_recipe_nutrition | null;
}

export interface MealFormQuery_meal_items_alternativeMealItems_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormQuery_meal_items_alternativeMealItems_weight {
  name: MealFormQuery_meal_items_alternativeMealItems_weight_name[];
  amount: number;
  gramWeight: number;
  id: string;
}

export interface MealFormQuery_meal_items_alternativeMealItems {
  amount: number | null;
  food: MealFormQuery_meal_items_alternativeMealItems_food | null;
  customUnit: string | null;
  gramWeight: number | null;
  description: MealFormQuery_meal_items_alternativeMealItems_description[] | null;
  recipe: MealFormQuery_meal_items_alternativeMealItems_recipe | null;
  weight: MealFormQuery_meal_items_alternativeMealItems_weight | null;
}

export interface MealFormQuery_meal_items {
  amount: number | null;
  food: MealFormQuery_meal_items_food | null;
  recipe: MealFormQuery_meal_items_recipe | null;
  weight: MealFormQuery_meal_items_weight | null;
  customUnit: string | null;
  gramWeight: number | null;
  description: MealFormQuery_meal_items_description[] | null;
  alternativeMealItems: MealFormQuery_meal_items_alternativeMealItems[] | null;
}

export interface MealFormQuery_meal_author_avatar {
  url: string;
}

export interface MealFormQuery_meal_author {
  id: string;
  username: string;
  avatar: MealFormQuery_meal_author_avatar | null;
}

export interface MealFormQuery_meal_timing {
  totalTime: number;
}

export interface MealFormQuery_meal {
  id: string;
  name: MealFormQuery_meal_name[] | null;
  likedByUser: boolean | null;
  likesCount: number;
  items: MealFormQuery_meal_items[];
  author: MealFormQuery_meal_author;
  timing: MealFormQuery_meal_timing;
}

export interface MealFormQuery {
  meal: MealFormQuery_meal;
}

export interface MealFormQueryVariables {
  id: any;
}
