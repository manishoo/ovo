/*
 * navigator.ios.tsx
 * Copyright: Ouranos Studio 2019
 */

import SelectDialog from 'common/Select/components/SelectDialog'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import { Routes } from 'src/ts/models/common'
import AssistantScreen from 'src/ts/views/AssistantScreen/AssistantScreen'
import AuthLoadingScreen from 'src/ts/views/AuthLoadingScreen/AuthLoadingScreen'
import Introduction from 'src/ts/views/Introduction/Introduction'
import LoginScreen from 'src/ts/views/Login/LoginScreen'
import HomeScreen from 'src/ts/views/platform-specific/native/HomeScreen/HomeScreen'
import RecipeScreenContainer from 'src/ts/views/Recipe/Recipe'
import RecipeForm from 'src/ts/views/RecipeForm/RecipeForm'
import SettingsScreen from 'src/ts/views/SettingsScreen/SettingsScreen'
import ShoppingList from 'src/ts/views/ShoppingList/ShoppingList'
import FoodScreen from 'src/ts/views/FoodScreen/FoodScreen'


const CardStack = createStackNavigator(
  {
    home: {
      path: 'home',
      screen: HomeScreen,
    },
    settings: {
      path: 'settings',
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
    //   path: 'mealPlan',
    //   screen: MealPlanContainer,
    // },
    shoppingList: {
      path: 'shoppingList',
      screen: ShoppingList,
    },
    [Routes.recipeForm]: {
      path: 'recipeForm',
      screen: RecipeForm,
    },
    // MealDetails,
    // MealPlanInput,
  },
  {
    // mode: 'modal',
    initialRouteName: Routes.recipeForm,
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
    //   path: 'mealPlan',
    //   screen: MealPlanContainer,
    // },
    assistant: {
      path: 'assistant',
      screen: AssistantScreen,
    },
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
    introduction: {
      path: Routes.introduction,
      screen: Introduction,
    },
    login: {
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
