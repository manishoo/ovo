/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL mutation operation: MealItemComponentMutation
// ====================================================

export interface MealItemComponentMutation_suggestMealItem_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_image {
  url: string;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_timing {
  totalTime: number;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_thumbnail {
  url: string;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_ingredients_thumbnail {
  url: string;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealItemComponentMutation_suggestMealItem_recipe_ingredients_food_weights_name[];
}

export interface MealItemComponentMutation_suggestMealItem_recipe_ingredients_food_image {
  url: string;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_ingredients_food_thumbnail {
  url: string;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_ingredients_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_ingredients_food_nutrition {
  calories: MealItemComponentMutation_suggestMealItem_recipe_ingredients_food_nutrition_calories | null;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_ingredients_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_ingredients_food_origFoodGroups {
  id: string;
  name: MealItemComponentMutation_suggestMealItem_recipe_ingredients_food_origFoodGroups_name[];
}

export interface MealItemComponentMutation_suggestMealItem_recipe_ingredients_food {
  id: string;
  name: MealItemComponentMutation_suggestMealItem_recipe_ingredients_food_name[];
  description: MealItemComponentMutation_suggestMealItem_recipe_ingredients_food_description[] | null;
  weights: MealItemComponentMutation_suggestMealItem_recipe_ingredients_food_weights[];
  image: MealItemComponentMutation_suggestMealItem_recipe_ingredients_food_image | null;
  thumbnail: MealItemComponentMutation_suggestMealItem_recipe_ingredients_food_thumbnail | null;
  nutrition: MealItemComponentMutation_suggestMealItem_recipe_ingredients_food_nutrition;
  origFoodGroups: MealItemComponentMutation_suggestMealItem_recipe_ingredients_food_origFoodGroups[][];
}

export interface MealItemComponentMutation_suggestMealItem_recipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealItemComponentMutation_suggestMealItem_recipe_ingredients_weight_name[];
}

export interface MealItemComponentMutation_suggestMealItem_recipe_ingredients {
  thumbnail: MealItemComponentMutation_suggestMealItem_recipe_ingredients_thumbnail | null;
  name: MealItemComponentMutation_suggestMealItem_recipe_ingredients_name[] | null;
  description: MealItemComponentMutation_suggestMealItem_recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: MealItemComponentMutation_suggestMealItem_recipe_ingredients_food | null;
  weight: MealItemComponentMutation_suggestMealItem_recipe_ingredients_weight | null;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_author_avatar {
  url: string;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_author {
  id: string;
  username: string;
  avatar: MealItemComponentMutation_suggestMealItem_recipe_author_avatar | null;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_recipe_nutrition {
  calories: MealItemComponentMutation_suggestMealItem_recipe_nutrition_calories | null;
}

export interface MealItemComponentMutation_suggestMealItem_recipe {
  id: string;
  slug: string;
  title: MealItemComponentMutation_suggestMealItem_recipe_title[];
  image: MealItemComponentMutation_suggestMealItem_recipe_image | null;
  timing: MealItemComponentMutation_suggestMealItem_recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: MealItemComponentMutation_suggestMealItem_recipe_thumbnail | null;
  ingredients: MealItemComponentMutation_suggestMealItem_recipe_ingredients[];
  author: MealItemComponentMutation_suggestMealItem_recipe_author;
  nutrition: MealItemComponentMutation_suggestMealItem_recipe_nutrition | null;
}

export interface MealItemComponentMutation_suggestMealItem_food_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_food_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_food_origFoodGroups {
  id: string;
  name: MealItemComponentMutation_suggestMealItem_food_origFoodGroups_name[];
}

export interface MealItemComponentMutation_suggestMealItem_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealItemComponentMutation_suggestMealItem_food_weights_name[];
}

export interface MealItemComponentMutation_suggestMealItem_food_image {
  url: string;
}

export interface MealItemComponentMutation_suggestMealItem_food_thumbnail {
  url: string;
}

export interface MealItemComponentMutation_suggestMealItem_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface MealItemComponentMutation_suggestMealItem_food_nutrition {
  calories: MealItemComponentMutation_suggestMealItem_food_nutrition_calories | null;
}

export interface MealItemComponentMutation_suggestMealItem_food {
  id: string;
  name: MealItemComponentMutation_suggestMealItem_food_name[];
  description: MealItemComponentMutation_suggestMealItem_food_description[] | null;
  origFoodGroups: MealItemComponentMutation_suggestMealItem_food_origFoodGroups[][];
  weights: MealItemComponentMutation_suggestMealItem_food_weights[];
  image: MealItemComponentMutation_suggestMealItem_food_image | null;
  thumbnail: MealItemComponentMutation_suggestMealItem_food_thumbnail | null;
  nutrition: MealItemComponentMutation_suggestMealItem_food_nutrition;
}

export interface MealItemComponentMutation_suggestMealItem_description {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface MealItemComponentMutation_suggestMealItem_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: MealItemComponentMutation_suggestMealItem_weight_name[];
}

export interface MealItemComponentMutation_suggestMealItem {
  id: any;
  amount: number | null;
  recipe: MealItemComponentMutation_suggestMealItem_recipe | null;
  food: MealItemComponentMutation_suggestMealItem_food | null;
  customUnit: string | null;
  gramWeight: number | null;
  description: MealItemComponentMutation_suggestMealItem_description[] | null;
  weight: MealItemComponentMutation_suggestMealItem_weight | null;
}

export interface MealItemComponentMutation {
  suggestMealItem: MealItemComponentMutation_suggestMealItem;
}

export interface MealItemComponentMutationVariables {
  userMealId: string;
  mealItemId: string;
  date: any;
}
