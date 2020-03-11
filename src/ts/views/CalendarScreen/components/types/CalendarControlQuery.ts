/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CalendarControlQuery
// ====================================================

export interface CalendarControlQuery_calendar_nutritionProfile {
  id: any;
  calories: number;
}

export interface CalendarControlQuery_calendar_meals {
  time: any | null;
}

export interface CalendarControlQuery_calendar {
  id: string;
  date: any;
  nutritionProfile: CalendarControlQuery_calendar_nutritionProfile;
  meals: CalendarControlQuery_calendar_meals[];
}

export interface CalendarControlQuery {
  calendar: CalendarControlQuery_calendar[];
}

export interface CalendarControlQueryVariables {
  dates: any[];
}
