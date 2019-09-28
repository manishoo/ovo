/*
 * common.ts
 * Copyright: Ouranos Studio 2019
 */

import { LanguageCode } from 'src/ts/models/global-types'


export enum Routes {
  Home = 'Home',
  mealDetails = 'mealDetails',
  food = 'food',
  selectDialog = 'selectDialog',
  mealPlan = '/meal-plan',
  settings = '/settings',

  /**
   * Recipes
   * */
  recipe = '/recipe',
  recipeForm = '/create-recipe',

  /**
   * Meals
   * */
  meal = '/meal',
  mealForm = '/create-meal',

  home = '/',
  // profile = '/',
  feed = 'feed',
  login = '/login',
  register = '/join-caloria',
  shoppingList = 'shopping-list',
}

export interface Translation {
  text: string
  locale: LanguageCode
}
