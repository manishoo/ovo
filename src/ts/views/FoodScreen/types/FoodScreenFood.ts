/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL fragment: FoodScreenFood
// ====================================================

export interface FoodScreenFood_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenFood_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenFood_imageUrl {
  url: string;
}

export interface FoodScreenFood_foodGroup_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenFood_foodGroup {
  id: string;
  name: FoodScreenFood_foodGroup_name[];
}

export interface FoodScreenFood_nutrition_calories {
  amount: number;
  unit: string;
}

export interface FoodScreenFood_nutrition {
  calories: FoodScreenFood_nutrition_calories | null;
}

export interface FoodScreenFood_foodClass_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenFood_foodClass_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenFood_foodClass {
  id: string;
  name: FoodScreenFood_foodClass_name[];
  description: FoodScreenFood_foodClass_description[] | null;
}

export interface FoodScreenFood {
  id: string;
  name: FoodScreenFood_name[];
  description: FoodScreenFood_description[] | null;
  imageUrl: FoodScreenFood_imageUrl;
  foodGroup: FoodScreenFood_foodGroup;
  nutrition: FoodScreenFood_nutrition;
  foodClass: FoodScreenFood_foodClass;
}
