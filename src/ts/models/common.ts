/*
 * common.ts
 * Copyright: Ouranos Studio 2019
 */

import { LanguageCode } from '@Models/global-types'


export enum Routes {
  mealDetails = 'mealDetails',
  selectDialog = 'selectDialog',
  mealPlan = '/meal-plan',
  settings = '/settings',

  calendar = '/timeline',

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

  home = '/',
  // profile = '/',
  feed = 'feed',
  login = '/login',
  register = '/join-prana',
  shoppingList = '/shopping-list',
}

export interface Translation {
  text: string
  locale: LanguageCode
}
