/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MealType, LanguageCode } from "./../../../models/global-types";

// ====================================================
// GraphQL query operation: CalendarQuery
// ====================================================

export interface CalendarQuery_calendar_meals_items_recipe_thumbnail {
  url: string;
}

export interface CalendarQuery_calendar_meals_items_recipe_title {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_recipe_timing {
  cookTime: number | null;
  prepTime: number | null;
  totalTime: number;
}

export interface CalendarQuery_calendar_meals_items_recipe {
  id: string;
  thumbnail: CalendarQuery_calendar_meals_items_recipe_thumbnail | null;
  title: CalendarQuery_calendar_meals_items_recipe_title[];
  timing: CalendarQuery_calendar_meals_items_recipe_timing;
}

export interface CalendarQuery_calendar_meals_items_food_thumbnail {
  url: string;
}

export interface CalendarQuery_calendar_meals_items_food_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_food {
  id: string;
  thumbnail: CalendarQuery_calendar_meals_items_food_thumbnail | null;
  name: CalendarQuery_calendar_meals_items_food_name[];
}

export interface CalendarQuery_calendar_meals_items_description {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_weight_name {
  text: string;
  locale: LanguageCode;
}

export interface CalendarQuery_calendar_meals_items_weight {
  amount: number;
  gramWeight: number;
  id: string;
  name: CalendarQuery_calendar_meals_items_weight_name[];
}

export interface CalendarQuery_calendar_meals_items {
  id: any;
  amount: number;
  recipe: CalendarQuery_calendar_meals_items_recipe | null;
  food: CalendarQuery_calendar_meals_items_food | null;
  customUnit: string | null;
  description: CalendarQuery_calendar_meals_items_description[] | null;
  weight: CalendarQuery_calendar_meals_items_weight | null;
}

export interface CalendarQuery_calendar_meals {
  name: string | null;
  type: MealType;
  time: any | null;
  items: CalendarQuery_calendar_meals_items[];
}

export interface CalendarQuery_calendar {
  id: string;
  date: any;
  meals: CalendarQuery_calendar_meals[] | null;
}

export interface CalendarQuery {
  calendar: CalendarQuery_calendar[];
}

export interface CalendarQueryVariables {
  startDate: any;
  endDate: any;
}
