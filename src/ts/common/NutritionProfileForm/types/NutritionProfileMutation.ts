/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { NutritionProfileInput, NutritionProfileMode } from "./../../../models/global-types";

// ====================================================
// GraphQL mutation operation: NutritionProfileMutation
// ====================================================

export interface NutritionProfileMutation_updateNutritionProfile_carbs {
  max: number;
  min: number;
  percentage: number | null;
}

export interface NutritionProfileMutation_updateNutritionProfile_fat {
  max: number;
  min: number;
  percentage: number | null;
}

export interface NutritionProfileMutation_updateNutritionProfile_protein {
  max: number;
  min: number;
  percentage: number | null;
}

export interface NutritionProfileMutation_updateNutritionProfile {
  calories: number;
  carbs: NutritionProfileMutation_updateNutritionProfile_carbs;
  fat: NutritionProfileMutation_updateNutritionProfile_fat;
  protein: NutritionProfileMutation_updateNutritionProfile_protein;
  isStrict: boolean;
  mode: NutritionProfileMode;
}

export interface NutritionProfileMutation {
  updateNutritionProfile: NutritionProfileMutation_updateNutritionProfile;
}

export interface NutritionProfileMutationVariables {
  nutritionProfile: NutritionProfileInput;
}
