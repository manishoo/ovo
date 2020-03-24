/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCode } from './../../../models/global-types'

// ====================================================
// GraphQL fragment: FoodScreenFoodClass
// ====================================================

export interface FoodScreenFoodClass_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenFoodClass_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenFoodClass_image {
  url: string;
}

export interface FoodScreenFoodClass_foodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenFoodClass_foodGroups {
  id: string;
  name: FoodScreenFoodClass_foodGroups_name[];
}

export interface FoodScreenFoodClass {
  id: string;
  name: FoodScreenFoodClass_name[];
  description: FoodScreenFoodClass_description[] | null;
  image: FoodScreenFoodClass_image | null;
  foodGroups: FoodScreenFoodClass_foodGroups[][];
}
