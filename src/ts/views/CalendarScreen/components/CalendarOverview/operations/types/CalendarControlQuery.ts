/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CalendarOverviewQuery
// ====================================================

export interface CalendarOverviewQuery_calendar_meals {
  id: any;
  time: any | null;
  ate: boolean | null;
}

export interface CalendarOverviewQuery_calendar {
  id: any;
  date: any | null;
  meals: CalendarOverviewQuery_calendar_meals[];
}

export interface CalendarOverviewQuery {
  calendar: CalendarOverviewQuery_calendar[];
}

export interface CalendarOverviewQueryVariables {
  dates: any[];
  planId: any;
}
