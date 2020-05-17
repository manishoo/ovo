/*
 * common.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { LanguageCode } from '@Models/global-types'


export enum Routes {
  about = '/about',
  terms = '/terms',
  team = '/team',
  recipeDevelopers = '/recipe-developers',
  privacy = '/privacy-policy',
  healthProfessionals = '/health-professionals',
  fitnessTrainers = '/fitness-trainers',
  faq = '/faq',
  corporations = '/corporations',
  cookies = '/how-we-use-cookies',

  findYourPlan = '/find-your-plan',
  mealDetails = 'mealDetails',
  selectDialog = 'selectDialog',
  newPlan = '/new-plan',
  plan = '/meal-plan',
  settings = '/settings',

  calendar = '/eat',

  setupProcess = '/setup',

  /**
   * Recipes
   * */
  recipe = '/recipe',
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
  mealForm = '/meal',
  mealSettings = '/meal-settings',
  planSettings = '/meal-plan-settings',

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
