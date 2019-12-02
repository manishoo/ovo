/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { UserMealInput, MealAvailableTime, MealSize } from "./../../../models/global-types";

// ====================================================
// GraphQL mutation operation: MealSettingsScreenMutation
// ====================================================

export interface MealSettingsScreenMutation_updateMealSetting {
  id: string;
  availableTime: MealAvailableTime | null;
  size: MealSize | null;
  cook: boolean | null;
  time: string;
  name: string;
}

export interface MealSettingsScreenMutation {
  updateMealSetting: MealSettingsScreenMutation_updateMealSetting;
}

export interface MealSettingsScreenMutationVariables {
  userMeal: UserMealInput;
}
