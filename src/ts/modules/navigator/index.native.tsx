/*
 * index.native.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import SelectDialog from '@Common/Select/components/SelectDialog'
import { Routes } from '@Models/common'
import AssistantChat from '@Views/AssistantChat/AssistantChat'
import AuthLoadingScreen from '@Views/AuthLoadingScreen/AuthLoadingScreen'
import FoodScreen from '@Views/FoodScreen/FoodScreen'
import LandingScreen from '@Views/LandingScreen/LandingScreen'
import LoginScreen from '@Views/Login/LoginScreen'
import RecipeScreenContainer from '@Views/RecipeScreen/RecipeScreen'
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
    // plan: {
    //   calendar: 'plan',
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
    // plan: {
    //   calendar: 'plan',
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
    [Routes.setupProcess]: {
      path: Routes.setupProcess,
      screen: AssistantChat,
    },
    [Routes.login]: {
      path: Routes.login,
      screen: LoginScreen,
    },
  },
  {
    initialRouteName: Routes.setupProcess,
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
