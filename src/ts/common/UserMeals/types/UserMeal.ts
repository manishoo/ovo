/*
 * UserMeal.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealAvailableTime } from './../../../models/global-types'

// ====================================================
// GraphQL fragment: UserMeal
// ====================================================

export interface UserMeal {
  id: string;
  availableTime: MealAvailableTime | null;
  cook: boolean | null;
  time: string;
  name: string;
}
