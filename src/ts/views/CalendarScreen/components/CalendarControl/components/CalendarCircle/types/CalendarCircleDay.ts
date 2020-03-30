/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CalendarCircleDay
// ====================================================

export interface CalendarCircleDay_meals {
  id: any;
  time: any | null;
  ate: boolean | null;
}

export interface CalendarCircleDay {
  id: any;
  date: any;
  meals: CalendarCircleDay_meals[];
}
