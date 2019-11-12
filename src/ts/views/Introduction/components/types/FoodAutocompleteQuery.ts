/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { LanguageCode } from "./../../../../models/global-types";

// ====================================================
// GraphQL query operation: FoodAutocompleteQuery
// ====================================================

export interface FoodAutocompleteQuery_foods_foods_name {
  text: string;
  locale: LanguageCode;
}

export interface FoodAutocompleteQuery_foods_foods {
  id: string;
  name: FoodAutocompleteQuery_foods_foods_name[];
}

export interface FoodAutocompleteQuery_foods {
  foods: FoodAutocompleteQuery_foods_foods[];
}

export interface FoodAutocompleteQuery {
  foods: FoodAutocompleteQuery_foods;
}

export interface FoodAutocompleteQueryVariables {
  q: string;
}
