/**
 * copyright
 * */

import { translate } from '@Common/LocalizedText/LocalizedText'
import { Routes } from '@Models/common'
import LocationStore from '@Services/LocationStore'
import UserStore from '@Services/UserStore'
import { trimSlashes } from '@Utils/trim-slashes'
import AppNavigator from '@Views/platform-specific/web/AppNavigator/AppNavigator'
import { Me } from '@Views/Register/types/Me'
import { withRouter } from 'react-router-dom'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import {
  CalendarScreen,
  FoodScreen,
  LandingScreen,
  LoginScreen,
  MealForm,
  MealPlanSettingsScreen,
  ProfileScreen,
  PublicProfileScreen,
  Recipe,
  RecipeForm,
  RegisterScreen,
  SearchResult,
  SettingsScreen,
  ShoppingList,
} from './routes'


export function withNavigation(T: any): any {
  return withRouter(T)
}

export function withMobileNavigation(T: any): any {
  return T
}

export interface NavOptions {
  back?: boolean,
  title?: string
}

const defaultNavOptions: NavOptions = {
  back: true,
}

interface NavigatorProps {
  history: History
}

interface NavigatorState {
  user: Me,
  currentPath: string,
}

export default class Navigator extends ComponentBase<NavigatorProps, NavigatorState> {
  state = {
    user: UserStore.getUser(),
    currentPath: LocationStore.getPath(),
  }

  public render() {
    return (
      <AppNavigator
        history={this.props.history}
        routes={[
          /**
           * Recipes
           * */
          {
            path: `/${Routes.recipe}/:slug/edit`,
            exact: false,
            redirectTo: this.state.user ? undefined : Routes.login,
            component: RecipeForm,
            navOptions: {
              ...defaultNavOptions,
              title: translate('Edit Recipe'),
            },
          },
          {
            path: `/${Routes.recipe}/:slug/`,
            exact: false,
            component: Recipe,
            navOptions: defaultNavOptions,
          },

          {
            path: Routes.searchRecipes,
            exact: true,
            component: SearchResult,
            navOptions: defaultNavOptions,
          },
          {
            path: `${Routes.recipeForm}/`,
            exact: false,
            immersive: true,
            component: RecipeForm,
            redirectTo: this.state.user ? undefined : Routes.login,
            navOptions: {
              ...defaultNavOptions,
              title: translate('CreateRecipe'),
            },
          },

          /**
           * Foods
           * */

          {
            path: `${Routes.food}/:id`,
            exact: false,
            component: FoodScreen,
            navOptions: defaultNavOptions,
          },

          /**
           * Meals
           * */
          {
            path: `${Routes.mealForm}/:id`,
            exact: false,
            immersive: true,
            redirectTo: this.state.user ? undefined : Routes.login,
            component: MealForm,
            navOptions: {
              ...defaultNavOptions,
              title: translate('Edit Meal'),
            },
          },
          {
            path: `${Routes.mealForm}/`,
            exact: false,
            immersive: true,
            redirectTo: this.state.user ? undefined : Routes.login,
            component: MealForm,
            navOptions: {
              ...defaultNavOptions,
              title: translate('Create Meal'),
            },
          },
          {
            path: `${Routes.settings}/`,
            exact: false,
            immersive: true,
            redirectTo: this.state.user ? undefined : Routes.login,
            component: SettingsScreen,
            navOptions: defaultNavOptions,
          },
          {
            path: `${Routes.mealPlanSettings}/`,
            exact: false,
            redirectTo: this.state.user ? undefined : Routes.login,
            component: MealPlanSettingsScreen,
            navOptions: defaultNavOptions,
          },
          {
            path: Routes.login,
            immersive: true,
            exact: false,
            component: LoginScreen,
          },
          {
            path: Routes.shoppingList,
            immersive: false,
            exact: true,
            component: ShoppingList,
          },
          {
            path: Routes.calendar,
            immersive: false,
            exact: true,
            component: CalendarScreen,
          },
          {
            path: Routes.register,
            immersive: true,
            exact: false,
            component: RegisterScreen,
          },
          {
            path: '/:username',
            exact: true,
            component: (this.state.user && (this.state.user.username === trimSlashes(this.state.currentPath))) ? ProfileScreen : PublicProfileScreen,
          },
          {
            path: '/',
            exact: true,
            immersive: !this.state.user,
            component: LandingScreen,
            redirectTo: this.state.user ? this.state.user.username : undefined
          },
        ]}
      />
    )
  }

  protected _buildState(props: NavigatorProps, initialBuild: boolean): Partial<NavigatorState> | undefined {
    const user = UserStore.getUser()
    const currentPath = LocationStore.getPath()

    return {
      user,
      currentPath,
    }
  }
}
