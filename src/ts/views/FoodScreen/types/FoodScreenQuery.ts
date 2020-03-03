/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL query operation: FoodScreenQuery
// ====================================================

export interface FoodScreenQuery_foodClass_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenQuery_foodClass_description {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenQuery_foodClass_image {
  url: string;
}

export interface FoodScreenQuery_foodClass_foodGroups_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodScreenQuery_foodClass_foodGroups {
  id: string;
  name: FoodScreenQuery_foodClass_foodGroups_name[];
}

export interface FoodScreenQuery_foodClass {
  id: string;
  name: FoodScreenQuery_foodClass_name[];
  description: FoodScreenQuery_foodClass_description[] | null;
  image: FoodScreenQuery_foodClass_image | null;
  foodGroups: FoodScreenQuery_foodClass_foodGroups[][];
}

export interface FoodScreenQuery {
  foodClass: FoodScreenQuery_foodClass;
}

export interface FoodScreenQueryVariables {
  slug: string;
}
