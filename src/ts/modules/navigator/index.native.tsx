/*
 * navigator.ios.tsx
 * Copyright: Ouranos Studio 2019
 */

import SelectDialog from 'common/Select/components/SelectDialog'
import { createStackNavigator, createSwitchNavigator, withNavigation as withNav } from 'react-navigation'
import { Routes } from 'src/ts/models/common'
import AuthLoadingScreen from 'src/ts/views/AuthLoadingScreen/AuthLoadingScreen'
import FoodScreen from 'src/ts/views/FoodScreen/FoodScreen'
import Introduction from 'src/ts/views/Introduction/Introduction'
import LandingScreen from 'src/ts/views/LandingScreen/LandingScreen'
import LoginScreen from 'src/ts/views/Login/LoginScreen'
import RecipeScreenContainer from 'src/ts/views/Recipe/Recipe'
// import RecipeForm from 'src/ts/views/RecipeForm/RecipeForm'
import SettingsScreen from 'src/ts/views/SettingsScreen/SettingsScreen'
import ShoppingList from 'src/ts/views/ShoppingList/ShoppingList'


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
