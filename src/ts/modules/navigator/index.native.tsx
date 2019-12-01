/*
 * navigator.ios.tsx
 * Copyright: Ouranos Studio 2019
 */

import SelectDialog from '@Common/Select/components/SelectDialog'
import { Routes } from '@Models/common'
import AuthLoadingScreen from '@Views/AuthLoadingScreen/AuthLoadingScreen'
import FoodScreen from '@Views/FoodScreen/FoodScreen'
import Introduction from '@Views/Introduction/Introduction'
import LandingScreen from '@Views/LandingScreen/LandingScreen'
import LoginScreen from '@Views/Login/LoginScreen'
import RecipeScreenContainer from '@Views/Recipe/Recipe'
import SettingsScreen from '@Views/SettingsScreen/SettingsScreen'
import ShoppingList from '@Views/ShoppingList/ShoppingList'
import { createStackNavigator, createSwitchNavigator, withNavigation as withNav } from 'react-navigation'


export function withMobileNavigation(T: any): any {
  return withNav(T)
}

export function withNavigation(T: any) {
  return withNav(T)
}

const CardStack = createStackNavigator(
  {
    [Routes.home]: {
      path: Routes.home,
      screen: LandingScreen,
    },
    [Routes.settings]: {
      path: Routes.settings,
      screen: SettingsScreen,
    },
    recipe: {
      path: 'recipe/:recipeId',
      screen: RecipeScreenContainer,
    },
    food: {
      path: 'food/:foodId',
      screen: FoodScreen,
    },
    // mealPlan: {
    //   calendar: 'mealPlan',
    //   screen: MealPlanContainer,
    // },
    shoppingList: {
      path: 'shoppingList',
      screen: ShoppingList,
    },
    [Routes.recipeForm]: {
      path: 'recipeForm',
      screen: SettingsScreen,
    },
    // MealDetails,
    // MealPlanInput,
  },
  {
    // mode: 'modal',
    initialRouteName: Routes.home,
    headerMode: 'none',
    cardStyle: {
      backgroundColor: '#fff',
    },
    navigationOptions: {
      // gesturesEnabled: false,
    },
  }
)

const AppStack = createStackNavigator(
  {
    main: CardStack,
    // mealPlan: {
    //   calendar: 'mealPlan',
    //   screen: MealPlanContainer,
    // },
    // [Routes.assistant]: {
    //   path: Routes.assistant,
    //   screen: AssistantScreen,
    // },
    [Routes.selectDialog]: {
      path: 'selectDialog',
      screen: SelectDialog,
    },
  },
  {
    mode: 'modal',
    initialRouteName: 'main',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: '#fff',
    },
    navigationOptions: {
      // gesturesEnabled: false,
    },
  }
)

const AuthStack = createStackNavigator(
  {
    [Routes.introduction]: {
      path: Routes.introduction,
      screen: Introduction,
    },
    [Routes.login]: {
      path: Routes.login,
      screen: LoginScreen,
    },
  },
  {
    initialRouteName: Routes.introduction,
    headerMode: 'none',
    cardStyle: {
      backgroundColor: '#fff',
    },
    navigationOptions: {
      // gesturesEnabled: false,
    },
  }
)

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    backBehavior: 'none',
    initialRouteName: 'AuthLoading',
  }
)
