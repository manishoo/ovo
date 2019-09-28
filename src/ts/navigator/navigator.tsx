/**
 * copyright
 * */

import RX from 'reactxp'
import { ComponentBase } from 'resub'
import { Routes } from 'src/ts/models/common'
import LocationStore from 'src/ts/stores/LocationStore'
import UserStore from 'src/ts/stores/UserStore'
import { trimSlashes } from 'src/ts/utilities/trim-slashes'
import AppNavigator from 'src/ts/views/AppNavigator/AppNavigator'
import { Me } from 'src/ts/views/Register/types/Me'
import {
  LandingScreen,
  LoginScreen,
  MealForm,
  MealPlanScreen,
  ProfileScreen,
  PublicProfileScreen,
  Recipe,
  RecipeForm,
  RegisterScreen,
  SearchResult,
  SettingsScreen,
} from './routes'


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
  protected _buildState(props: NavigatorProps, initialBuild: boolean): Partial<NavigatorState> | undefined {
    const user = UserStore.getUser()
    const currentPath = LocationStore.getPath()

    return {
      user,
      currentPath,
    }
  }

  render() {
    return (
      <AppNavigator
        history={this.props.history}
        routes={[
          /**
           * Recipes
           * */
          {
            path: `/recipe/:slug/edit`,
            exact: false,
            redirectTo: this.state.user ? undefined: Routes.login,
            component: RecipeForm,
            navOptions: {
              ...defaultNavOptions,
              title: 'Edit Recipe',
            },
          },
          {
            path: `${Routes.recipe}/:slug/`,
            exact: false,
            component: Recipe,
            navOptions: defaultNavOptions,
          },
          {
            path: `/recipes/`,
            exact: false,
            component: SearchResult,
            navOptions: defaultNavOptions,
          },
          {
            path: `${Routes.recipeForm}/`,
            exact: false,
            immersive: true,
            component: RecipeForm,
            redirectTo: this.state.user ? undefined: Routes.login,
            navOptions: {
              ...defaultNavOptions,
              title: 'Create Recipe',
            },
          },

          /**
           * Meals
           * */
          // {
          //   path: `${Routes.meal}/:id/edit`,
          //   exact: false,
          //   component: RecipeForm,
          //   navOptions: {
          //     ...defaultNavOptions,
          //     title: 'Edit Meal',
          //   },
          // },
          {
            // path: `${Routes.meal}/:id/`,
            path: `${Routes.mealForm}/:id`,
            exact: false,
            immersive: true,
            redirectTo: this.state.user ? undefined: Routes.login,
            component: MealForm,
            navOptions: {
              ...defaultNavOptions,
              title: 'Edit Meal',
            },
          },
          {
            path: `${Routes.mealForm}/`,
            exact: false,
            immersive: true,
            redirectTo: this.state.user ? undefined: Routes.login,
            component: MealForm,
            navOptions: {
              ...defaultNavOptions,
              title: 'Create Meal',
            },
          },
          {
            path: `${Routes.mealPlan}/`,
            exact: false,
            redirectTo: this.state.user ? undefined: Routes.login,
            component: MealPlanScreen,
            navOptions: defaultNavOptions,
          },
          {
            path: `${Routes.settings}/`,
            exact: false,
            immersive: true,
            redirectTo: this.state.user ? undefined: Routes.login,
            component: SettingsScreen,
            navOptions: defaultNavOptions,
          },
          {
            path: Routes.login,
            immersive: true,
            exact: true,
            component: LoginScreen,
            modal: false,
          },
          {
            path: Routes.register,
            immersive: true,
            exact: false,
            component: RegisterScreen,
            modal: false,
          },
          {
            path: '/:username',
            exact: false,
            component: (this.state.user && (this.state.user.username === trimSlashes(this.state.currentPath!))) ? ProfileScreen : PublicProfileScreen,
          },
          {
            path: '/',
            exact: false,
            component: LandingScreen,
            redirectTo: this.state.user && Routes.login
          },
        ]}
      />
    )
  }
}
