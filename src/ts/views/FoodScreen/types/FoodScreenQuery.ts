/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from './../../../models/global-types'

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

export interface FoodScreenQuery_food_foodGroup_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenQuery_food_foodGroup {
  id: string;
  name: FoodScreenQuery_food_foodGroup_name[];
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
  image: FoodScreenQuery_food_image;
  foodGroup: FoodScreenQuery_food_foodGroup;
  nutrition: FoodScreenQuery_food_nutrition;
  foodClass: FoodScreenQuery_food_foodClass;
}

export interface FoodScreenQuery {
  food: FoodScreenQuery_food;
}

export interface FoodScreenQueryVariables {
  id: string;
}
