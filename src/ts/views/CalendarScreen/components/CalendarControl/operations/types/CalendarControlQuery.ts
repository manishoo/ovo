/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CalendarControlQuery
// ====================================================

export interface CalendarControlQuery_calendar_meals {
  id: any;
  time: any | null;
  ate: boolean | null;
}

export interface CalendarControlQuery_calendar {
  id: any;
  date: any;
  meals: CalendarControlQuery_calendar_meals[];
}

export interface CalendarControlQuery {
  calendar: CalendarControlQuery_calendar[];
}

export interface CalendarControlQueryVariables {
  dates: any[];
}
