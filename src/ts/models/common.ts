/*
 * common.ts
 * Copyright: Ouranos Studio 2019
 */

import { LanguageCode } from '@Models/global-types'
import gql from 'graphql-tag'


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
  mealPlanSettings = '/meal-plan-settings',

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
