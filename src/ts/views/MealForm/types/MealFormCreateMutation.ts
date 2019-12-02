/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealInput, LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL mutation operation: MealFormCreateMutation
// ====================================================

export interface MealFormCreateMutation_createMeal_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_food_origFoodGroups {
  id: string;
  name: MealFormCreateMutation_createMeal_items_food_origFoodGroups_name[];
}

export interface MealFormCreateMutation_createMeal_items_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealFormCreateMutation_createMeal_items_food_weights_name[];
}

export interface MealFormCreateMutation_createMeal_items_food_image {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_food_thumbnail {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_food_nutrition {
  calories: MealFormCreateMutation_createMeal_items_food_nutrition_calories | null;
}

export interface MealFormCreateMutation_createMeal_items_food {
  id: string;
  name: MealFormCreateMutation_createMeal_items_food_name[];
  description: MealFormCreateMutation_createMeal_items_food_description[] | null;
  origFoodGroups: MealFormCreateMutation_createMeal_items_food_origFoodGroups[][];
  weights: MealFormCreateMutation_createMeal_items_food_weights[];
  image: MealFormCreateMutation_createMeal_items_food_image | null;
  thumbnail: MealFormCreateMutation_createMeal_items_food_thumbnail | null;
  nutrition: MealFormCreateMutation_createMeal_items_food_nutrition;
}

export interface MealFormCreateMutation_createMeal_items_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_recipe_image {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_recipe_timing {
  totalTime: number;
}

export interface MealFormCreateMutation_createMeal_items_recipe_thumbnail {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_recipe_ingredients_thumbnail {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_recipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_recipe_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_recipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_recipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealFormCreateMutation_createMeal_items_recipe_ingredients_food_weights_name[];
}

export interface MealFormCreateMutation_createMeal_items_recipe_ingredients_food_image {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_recipe_ingredients_food_thumbnail {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_recipe_ingredients_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_recipe_ingredients_food_nutrition {
  calories: MealFormCreateMutation_createMeal_items_recipe_ingredients_food_nutrition_calories | null;
}

export interface MealFormCreateMutation_createMeal_items_recipe_ingredients_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_recipe_ingredients_food_origFoodGroups {
  id: string;
  name: MealFormCreateMutation_createMeal_items_recipe_ingredients_food_origFoodGroups_name[];
}

export interface MealFormCreateMutation_createMeal_items_recipe_ingredients_food {
  id: string;
  name: MealFormCreateMutation_createMeal_items_recipe_ingredients_food_name[];
  description: MealFormCreateMutation_createMeal_items_recipe_ingredients_food_description[] | null;
  weights: MealFormCreateMutation_createMeal_items_recipe_ingredients_food_weights[];
  image: MealFormCreateMutation_createMeal_items_recipe_ingredients_food_image | null;
  thumbnail: MealFormCreateMutation_createMeal_items_recipe_ingredients_food_thumbnail | null;
  nutrition: MealFormCreateMutation_createMeal_items_recipe_ingredients_food_nutrition;
  origFoodGroups: MealFormCreateMutation_createMeal_items_recipe_ingredients_food_origFoodGroups[][];
}

export interface MealFormCreateMutation_createMeal_items_recipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_recipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealFormCreateMutation_createMeal_items_recipe_ingredients_weight_name[];
}

export interface MealFormCreateMutation_createMeal_items_recipe_ingredients {
  thumbnail: MealFormCreateMutation_createMeal_items_recipe_ingredients_thumbnail | null;
  name: MealFormCreateMutation_createMeal_items_recipe_ingredients_name[] | null;
  description: MealFormCreateMutation_createMeal_items_recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: MealFormCreateMutation_createMeal_items_recipe_ingredients_food | null;
  weight: MealFormCreateMutation_createMeal_items_recipe_ingredients_weight | null;
}

export interface MealFormCreateMutation_createMeal_items_recipe_author_avatar {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_recipe_author {
  id: string;
  username: string;
  avatar: MealFormCreateMutation_createMeal_items_recipe_author_avatar | null;
}

export interface MealFormCreateMutation_createMeal_items_recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_recipe_nutrition {
  calories: MealFormCreateMutation_createMeal_items_recipe_nutrition_calories | null;
}

export interface MealFormCreateMutation_createMeal_items_recipe {
  id: string;
  slug: string;
  title: MealFormCreateMutation_createMeal_items_recipe_title[];
  image: MealFormCreateMutation_createMeal_items_recipe_image | null;
  timing: MealFormCreateMutation_createMeal_items_recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealFormCreateMutation_createMeal_items_recipe_thumbnail | null;
  ingredients: MealFormCreateMutation_createMeal_items_recipe_ingredients[];
  author: MealFormCreateMutation_createMeal_items_recipe_author;
  nutrition: MealFormCreateMutation_createMeal_items_recipe_nutrition | null;
}

export interface MealFormCreateMutation_createMeal_items_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_weight {
  name: MealFormCreateMutation_createMeal_items_weight_name[];
  amount: number;
  gramWeight: number;
  id: string;
}

export interface MealFormCreateMutation_createMeal_items_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_food_origFoodGroups {
  id: string;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_food_origFoodGroups_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_food_weights_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_food_image {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_food_thumbnail {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_food_nutrition {
  calories: MealFormCreateMutation_createMeal_items_alternativeMealItems_food_nutrition_calories | null;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_food {
  id: string;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_food_name[];
  description: MealFormCreateMutation_createMeal_items_alternativeMealItems_food_description[] | null;
  origFoodGroups: MealFormCreateMutation_createMeal_items_alternativeMealItems_food_origFoodGroups[][];
  weights: MealFormCreateMutation_createMeal_items_alternativeMealItems_food_weights[];
  image: MealFormCreateMutation_createMeal_items_alternativeMealItems_food_image | null;
  thumbnail: MealFormCreateMutation_createMeal_items_alternativeMealItems_food_thumbnail | null;
  nutrition: MealFormCreateMutation_createMeal_items_alternativeMealItems_food_nutrition;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_image {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_timing {
  totalTime: number;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_thumbnail {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_thumbnail {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food_weights_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food_image {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food_thumbnail {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food_nutrition {
  calories: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food_nutrition_calories | null;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food_origFoodGroups {
  id: string;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food_origFoodGroups_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food {
  id: string;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food_name[];
  description: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food_description[] | null;
  weights: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food_weights[];
  image: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food_image | null;
  thumbnail: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food_thumbnail | null;
  nutrition: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food_nutrition;
  origFoodGroups: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food_origFoodGroups[][];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_weight_name[];
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients {
  thumbnail: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_thumbnail | null;
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_name[] | null;
  description: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_food | null;
  weight: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients_weight | null;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_author_avatar {
  url: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_author {
  id: string;
  username: string;
  avatar: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_author_avatar | null;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_nutrition {
  calories: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_nutrition_calories | null;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe {
  id: string;
  slug: string;
  title: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_title[];
  image: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_image | null;
  timing: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_thumbnail | null;
  ingredients: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_ingredients[];
  author: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_author;
  nutrition: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe_nutrition | null;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems_weight {
  name: MealFormCreateMutation_createMeal_items_alternativeMealItems_weight_name[];
  amount: number;
  gramWeight: number;
  id: string;
}

export interface MealFormCreateMutation_createMeal_items_alternativeMealItems {
  amount: number | null;
  food: MealFormCreateMutation_createMeal_items_alternativeMealItems_food | null;
  customUnit: string | null;
  gramWeight: number | null;
  description: MealFormCreateMutation_createMeal_items_alternativeMealItems_description[] | null;
  recipe: MealFormCreateMutation_createMeal_items_alternativeMealItems_recipe | null;
  weight: MealFormCreateMutation_createMeal_items_alternativeMealItems_weight | null;
}

export interface MealFormCreateMutation_createMeal_items {
  amount: number | null;
  food: MealFormCreateMutation_createMeal_items_food | null;
  recipe: MealFormCreateMutation_createMeal_items_recipe | null;
  weight: MealFormCreateMutation_createMeal_items_weight | null;
  customUnit: string | null;
  gramWeight: number | null;
  description: MealFormCreateMutation_createMeal_items_description[] | null;
  alternativeMealItems: MealFormCreateMutation_createMeal_items_alternativeMealItems[] | null;
}

export interface MealFormCreateMutation_createMeal_author_avatar {
  url: string;
}

export interface MealFormCreateMutation_createMeal_author {
  id: string;
  username: string;
  avatar: MealFormCreateMutation_createMeal_author_avatar | null;
}

export interface MealFormCreateMutation_createMeal_timing {
  totalTime: number;
}

export interface MealFormCreateMutation_createMeal {
  id: string;
  name: MealFormCreateMutation_createMeal_name[] | null;
  likedByUser: boolean | null;
  likesCount: number;
  items: MealFormCreateMutation_createMeal_items[];
  author: MealFormCreateMutation_createMeal_author;
  timing: MealFormCreateMutation_createMeal_timing;
}

export interface MealFormCreateMutation {
  createMeal: MealFormCreateMutation_createMeal[];
}

export interface MealFormCreateMutationVariables {
  meal: MealInput;
  bulkCreate?: boolean | null;
}
