/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NutritionProfileMode } from './../../../models/global-types'

// ====================================================
// GraphQL fragment: NutritionProfileFormNutritionProfile
// ====================================================

export interface NutritionProfileFormNutritionProfile_carbs {
  max: number;
  min: number;
  percentage: number | null;
}

export interface NutritionProfileFormNutritionProfile_fat {
  max: number;
  min: number;
  percentage: number | null;
}

export interface NutritionProfileFormNutritionProfile_protein {
  max: number;
  min: number;
  percentage: number | null;
}

export interface NutritionProfileFormNutritionProfile {
  id: any;
  calories: number;
  carbs: NutritionProfileFormNutritionProfile_carbs;
  fat: NutritionProfileFormNutritionProfile_fat;
  protein: NutritionProfileFormNutritionProfile_protein;
  isStrict: boolean;
  mode: NutritionProfileMode;
}
