/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealAvailableTime, MealSize, LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL query operation: CalendarQuery
// ====================================================

export interface CalendarQuery_calendar_meals_userMeal {
  id: string;
  availableTime: MealAvailableTime | null;
  size: MealSize | null;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface CalendarQuery_calendar_meals_items_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_recipe_image {
  url: string;
}

export interface CalendarQuery_calendar_meals_items_recipe_timing {
  totalTime: number;
}

export interface CalendarQuery_calendar_meals_items_recipe_thumbnail {
  url: string;
}

export interface CalendarQuery_calendar_meals_items_recipe_ingredients_thumbnail {
  url: string;
}

export interface CalendarQuery_calendar_meals_items_recipe_ingredients_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_recipe_ingredients_description {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_recipe_ingredients_food_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_recipe_ingredients_food_description {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_recipe_ingredients_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_recipe_ingredients_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: CalendarQuery_calendar_meals_items_recipe_ingredients_food_weights_name[];
}

export interface CalendarQuery_calendar_meals_items_recipe_ingredients_food_image {
  url: string;
}

export interface CalendarQuery_calendar_meals_items_recipe_ingredients_food_thumbnail {
  url: string;
}

export interface CalendarQuery_calendar_meals_items_recipe_ingredients_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_recipe_ingredients_food_nutrition {
  calories: CalendarQuery_calendar_meals_items_recipe_ingredients_food_nutrition_calories | null;
}

export interface CalendarQuery_calendar_meals_items_recipe_ingredients_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_recipe_ingredients_food_origFoodGroups {
  id: string;
  name: CalendarQuery_calendar_meals_items_recipe_ingredients_food_origFoodGroups_name[];
}

export interface CalendarQuery_calendar_meals_items_recipe_ingredients_food {
  id: string;
  name: CalendarQuery_calendar_meals_items_recipe_ingredients_food_name[];
  description: CalendarQuery_calendar_meals_items_recipe_ingredients_food_description[] | null;
  weights: CalendarQuery_calendar_meals_items_recipe_ingredients_food_weights[];
  image: CalendarQuery_calendar_meals_items_recipe_ingredients_food_image | null;
  thumbnail: CalendarQuery_calendar_meals_items_recipe_ingredients_food_thumbnail | null;
  nutrition: CalendarQuery_calendar_meals_items_recipe_ingredients_food_nutrition;
  origFoodGroups: CalendarQuery_calendar_meals_items_recipe_ingredients_food_origFoodGroups[][];
}

export interface CalendarQuery_calendar_meals_items_recipe_ingredients_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_recipe_ingredients_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: CalendarQuery_calendar_meals_items_recipe_ingredients_weight_name[];
}

export interface CalendarQuery_calendar_meals_items_recipe_ingredients {
  thumbnail: CalendarQuery_calendar_meals_items_recipe_ingredients_thumbnail | null;
  name: CalendarQuery_calendar_meals_items_recipe_ingredients_name[] | null;
  description: CalendarQuery_calendar_meals_items_recipe_ingredients_description[] | null;
  amount: number | null;
  customUnit: string | null;
  gramWeight: number | null;
  food: CalendarQuery_calendar_meals_items_recipe_ingredients_food | null;
  weight: CalendarQuery_calendar_meals_items_recipe_ingredients_weight | null;
}

export interface CalendarQuery_calendar_meals_items_recipe_author_avatar {
  url: string;
}

export interface CalendarQuery_calendar_meals_items_recipe_author {
  id: string;
  username: string;
  avatar: CalendarQuery_calendar_meals_items_recipe_author_avatar | null;
}

export interface CalendarQuery_calendar_meals_items_recipe_nutrition_calories {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_recipe_nutrition {
  calories: CalendarQuery_calendar_meals_items_recipe_nutrition_calories | null;
}

export interface CalendarQuery_calendar_meals_items_recipe {
  id: string;
  slug: string;
  title: CalendarQuery_calendar_meals_items_recipe_title[];
  image: CalendarQuery_calendar_meals_items_recipe_image | null;
  timing: CalendarQuery_calendar_meals_items_recipe_timing;
  likesCount: number;
  userLikedRecipe: boolean | null;
  thumbnail: CalendarQuery_calendar_meals_items_recipe_thumbnail | null;
  ingredients: CalendarQuery_calendar_meals_items_recipe_ingredients[];
  author: CalendarQuery_calendar_meals_items_recipe_author;
  nutrition: CalendarQuery_calendar_meals_items_recipe_nutrition | null;
}

export interface CalendarQuery_calendar_meals_items_food_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_food_description {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_food_origFoodGroups {
  id: string;
  name: CalendarQuery_calendar_meals_items_food_origFoodGroups_name[];
}

export interface CalendarQuery_calendar_meals_items_food_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_food_weights {
  amount: number;
  gramWeight: number;
  id: string;
  name: CalendarQuery_calendar_meals_items_food_weights_name[];
}

export interface CalendarQuery_calendar_meals_items_food_image {
  url: string;
}

export interface CalendarQuery_calendar_meals_items_food_thumbnail {
  url: string;
}

export interface CalendarQuery_calendar_meals_items_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface CalendarQuery_calendar_meals_items_food_nutrition {
  calories: CalendarQuery_calendar_meals_items_food_nutrition_calories | null;
}

export interface CalendarQuery_calendar_meals_items_food {
  id: string;
  name: CalendarQuery_calendar_meals_items_food_name[];
  description: CalendarQuery_calendar_meals_items_food_description[] | null;
  origFoodGroups: CalendarQuery_calendar_meals_items_food_origFoodGroups[][];
  weights: CalendarQuery_calendar_meals_items_food_weights[];
  image: CalendarQuery_calendar_meals_items_food_image | null;
  thumbnail: CalendarQuery_calendar_meals_items_food_thumbnail | null;
  nutrition: CalendarQuery_calendar_meals_items_food_nutrition;
}

export interface CalendarQuery_calendar_meals_items_description {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: CalendarQuery_calendar_meals_items_weight_name[];
}

export interface CalendarQuery_calendar_meals_items {
  id: any;
  amount: number | null;
  recipe: CalendarQuery_calendar_meals_items_recipe | null;
  food: CalendarQuery_calendar_meals_items_food | null;
  customUnit: string | null;
  gramWeight: number | null;
  description: CalendarQuery_calendar_meals_items_description[] | null;
  weight: CalendarQuery_calendar_meals_items_weight | null;
}

export interface CalendarQuery_calendar_meals {
  id: any;
  userMeal: CalendarQuery_calendar_meals_userMeal | null;
  time: any | null;
  items: CalendarQuery_calendar_meals_items[];
}

export interface CalendarQuery_calendar {
  id: string;
  date: any;
  meals: CalendarQuery_calendar_meals[] | null;
}

export interface CalendarQuery {
  calendar: CalendarQuery_calendar[];
}

export interface CalendarQueryVariables {
  startDate: any;
  endDate: any;
}
