/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CalendarCircleDay
// ====================================================

export interface CalendarCircleDay_nutritionProfile {
  id: any;
  calories: number;
}

export interface CalendarCircleDay_meals {
  time: any | null;
}

export interface CalendarCircleDay {
  id: string;
  date: any;
  nutritionProfile: CalendarCircleDay_nutritionProfile;
  meals: CalendarCircleDay_meals[];
}
