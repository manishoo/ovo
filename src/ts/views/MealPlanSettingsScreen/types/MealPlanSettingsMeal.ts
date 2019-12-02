/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealAvailableTime, MealSize } from "./../../../models/global-types";

// ====================================================
// GraphQL fragment: MealPlanSettingsMeal
// ====================================================

export interface MealPlanSettingsMeal {
  id: string;
  availableTime: MealAvailableTime | null;
  size: MealSize | null;
  cook: boolean | null;
  time: string;
  name: string;
}
