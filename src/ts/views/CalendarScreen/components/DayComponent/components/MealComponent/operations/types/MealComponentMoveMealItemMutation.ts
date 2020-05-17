/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MealComponentMoveMealItemMutation
// ====================================================

export interface MealComponentMoveMealItemMutation {
  moveMealItem: boolean;
}

export interface MealComponentMoveMealItemMutationVariables {
  dayId: any;
  fromUserMealId: string;
  toUserMealId: string;
  toIndex: number;
  mealItemId: any;
  planId: any;
}
