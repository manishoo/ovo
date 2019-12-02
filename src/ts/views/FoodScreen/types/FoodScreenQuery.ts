/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL query operation: FoodScreenQuery
// ====================================================

export interface FoodScreenQuery_food_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenQuery_food_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenQuery_food_image {
  url: string;
}

export interface FoodScreenQuery_food_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenQuery_food_origFoodGroups {
  id: string;
  name: FoodScreenQuery_food_origFoodGroups_name[];
}

export interface FoodScreenQuery_food_nutrition_calories {
  amount: number;
  unit: string;
}

export interface FoodScreenQuery_food_nutrition {
  calories: FoodScreenQuery_food_nutrition_calories | null;
}

export interface FoodScreenQuery_food_foodClass_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenQuery_food_foodClass_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenQuery_food_foodClass {
  id: string;
  name: FoodScreenQuery_food_foodClass_name[];
  description: FoodScreenQuery_food_foodClass_description[] | null;
}

export interface FoodScreenQuery_food {
  id: string;
  name: FoodScreenQuery_food_name[];
  description: FoodScreenQuery_food_description[] | null;
  image: FoodScreenQuery_food_image | null;
  origFoodGroups: FoodScreenQuery_food_origFoodGroups[][];
  nutrition: FoodScreenQuery_food_nutrition;
  foodClass: FoodScreenQuery_food_foodClass;
}

export interface FoodScreenQuery {
  food: FoodScreenQuery_food;
}

export interface FoodScreenQueryVariables {
  id: any;
}
