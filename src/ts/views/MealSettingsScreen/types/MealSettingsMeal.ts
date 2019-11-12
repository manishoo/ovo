/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealAvailableTime, MealSize } from "./../../../models/global-types";

// ====================================================
// GraphQL fragment: MealSettingsMeal
// ====================================================

export interface MealSettingsMeal {
  id: string;
  availableTime: MealAvailableTime | null;
  size: MealSize | null;
  cook: boolean | null;
  time: string;
  name: string;
}
