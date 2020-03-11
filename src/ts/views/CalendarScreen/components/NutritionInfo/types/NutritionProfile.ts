/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { NutritionProfileMode } from './../../../../../models/global-types'

// ====================================================
// GraphQL fragment: NutritionProfile
// ====================================================

export interface NutritionProfile_carbs {
  max: number;
  min: number;
  percentage: number | null;
}

export interface NutritionProfile_fat {
  max: number;
  min: number;
  percentage: number | null;
}

export interface NutritionProfile_protein {
  max: number;
  min: number;
  percentage: number | null;
}

export interface NutritionProfile {
  id: any;
  calories: number;
  carbs: NutritionProfile_carbs;
  fat: NutritionProfile_fat;
  protein: NutritionProfile_protein;
  isStrict: boolean;
  mode: NutritionProfileMode;
}
