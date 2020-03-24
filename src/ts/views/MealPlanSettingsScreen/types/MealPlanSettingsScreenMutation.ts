/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MealAvailableTime, MealSize, UserMealInput } from './../../../models/global-types'

// ====================================================
// GraphQL mutation operation: MealPlanSettingsScreenMutation
// ====================================================

export interface MealPlanSettingsScreenMutation_updateUserMeals {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface MealPlanSettingsScreenMutation {
  updateUserMeals: MealPlanSettingsScreenMutation_updateUserMeals[];
}

export interface MealPlanSettingsScreenMutationVariables {
  userMeals: UserMealInput[];
}
