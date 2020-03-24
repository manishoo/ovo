/*
 * common.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { LanguageCode } from '@Models/global-types'


export enum Routes {
  mealDetails = 'mealDetails',
  selectDialog = 'selectDialog',
  mealPlan = '/meal-plan',
  settings = '/settings',

  calendar = '/eat',

  introduction = '/introduction',

  /**
   * Recipes
   * */
  recipe = 'recipe',
  recipeForm = '/create-recipe',
  searchRecipes = '/recipes',

  assistant = '/assistant',

  /**
   * Foods
   * */
  food = '/food',

  /**
   * Meals
   * */
  meal = '/meal',
  mealForm = '/create-meal',
  mealSettings = '/meal-settings',
  mealPlanSettings = '/meal-plan-settings',

  home = '/',
  // profile = '/',
  feed = 'feed',
  login = '/login',
  register = '/join-prana',
  membership = '/membership',
  shoppingList = '/shopping-list',

  forgotPassword = '/forgot-password',
  newPassword = '/new-password',
}

export interface Translation {
  text: string
  locale: LanguageCode
}
