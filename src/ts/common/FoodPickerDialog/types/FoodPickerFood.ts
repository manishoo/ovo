/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL fragment: FoodPickerFood
// ====================================================

export interface FoodPickerFood_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerFood_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerFood_origFoodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerFood_origFoodGroups {
  id: string;
  name: FoodPickerFood_origFoodGroups_name[];
}

export interface FoodPickerFood_weights_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodPickerFood_weights {
  amount: number;
  gramWeight: number | null;
  id: string;
  name: FoodPickerFood_weights_name[];
}

export interface FoodPickerFood_image {
  url: string;
}

export interface FoodPickerFood_thumbnail {
  url: string;
}

export interface FoodPickerFood_nutrition_calories {
  amount: number;
  unit: string;
}

export interface FoodPickerFood_nutrition {
  calories: FoodPickerFood_nutrition_calories | null;
}

export interface FoodPickerFood {
  id: string;
  name: FoodPickerFood_name[];
  description: FoodPickerFood_description[] | null;
  origFoodGroups: FoodPickerFood_origFoodGroups[][];
  weights: FoodPickerFood_weights[];
  image: FoodPickerFood_image | null;
  thumbnail: FoodPickerFood_thumbnail | null;
  nutrition: FoodPickerFood_nutrition;
}
