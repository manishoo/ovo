/*
 * NutritionInfoNutrition.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: NutritionInfoNutrition
// ====================================================

export interface NutritionInfoNutrition_calories {
  amount: number;
  id: string | null;
  unit: string;
}

export interface NutritionInfoNutrition_proteins {
  amount: number;
  id: string | null;
  unit: string;
}

export interface NutritionInfoNutrition_carbsByDifference {
  amount: number;
  id: string | null;
  unit: string;
}

export interface NutritionInfoNutrition_totalCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface NutritionInfoNutrition_totalAvailableCarbs {
  amount: number;
  id: string | null;
  unit: string;
}

export interface NutritionInfoNutrition_fats {
  amount: number;
  id: string | null;
  unit: string;
}

export interface NutritionInfoNutrition {
  calories: NutritionInfoNutrition_calories | null;
  proteins: NutritionInfoNutrition_proteins | null;
  carbsByDifference: NutritionInfoNutrition_carbsByDifference | null;
  totalCarbs: NutritionInfoNutrition_totalCarbs | null;
  totalAvailableCarbs: NutritionInfoNutrition_totalAvailableCarbs | null;
  fats: NutritionInfoNutrition_fats | null;
}
