/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MealAvailableTime, MealSize, UserMealInput } from './../../../models/global-types'

// ====================================================
// GraphQL mutation operation: MealSettingsScreenMutation
// ====================================================

export interface MealSettingsScreenMutation_updateMealSetting {
  id: string;
  availableTime: MealAvailableTime;
  size: MealSize;
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
