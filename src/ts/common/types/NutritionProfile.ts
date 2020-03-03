/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: NutritionProfile
// ====================================================

export interface NutritionProfile_carb {
  max: number;
  min: number;
}

export interface NutritionProfile_fat {
  max: number;
  min: number;
}

export interface NutritionProfile_protein {
  max: number;
  min: number;
}

export interface NutritionProfile {
  calories: number;
  carbs: NutritionProfile_carb;
  fat: NutritionProfile_fat;
  protein: NutritionProfile_protein;
}
