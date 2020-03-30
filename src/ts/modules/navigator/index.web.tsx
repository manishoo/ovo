/**
 * copyright
 * */

import { translate } from '@Common/LocalizedText/LocalizedText'
import { Routes } from '@Models/common'
import { Me } from '@Models/graphql/me/types/Me'
import LocationStore from '@Services/LocationStore'
import { trimSlashes } from '@Utils/trim-slashes'
import isEqual from 'react-fast-compare'
import { withRouter } from 'react-router-dom'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import {
  CalendarScreen,
  FoodScreen,
  ForgotPasswordScreen,
  LandingScreen,
  LoginScreen,
  MealForm,
  MealPlanSettingsScreen,
  NewPasswordScreen,
  PayScreen,
  ProfileScreen,
  PublicProfileScreen,
  RecipeForm,
  RecipeScreen,
  RegisterScreen,
  SearchResult,
  SettingsScreen,
  ShoppingList,
} from './routes'
import AppNavigator from './web/AppNavigator/AppNavigator'


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
  history: History,
  me: Me | null,
}

interface NavigatorState {
  path: string,
}

export default class Navigator extends ComponentBase<NavigatorProps, NavigatorState> {
  constructor(props: NavigatorProps) {
    super(props)

    this.state = {
      path: LocationStore.getPath(),
    }
  }

  public shouldComponentUpdate(nextProps: Readonly<NavigatorProps>, nextState: Readonly<NavigatorState>, nextContext: any): boolean {
    return (
      !isEqual(nextProps, this.props) ||
      !isEqual(nextState, this.state)
    )
  }

  render() {
    const { me, history } = this.props
    const { path } = this.state

    return (
      <AppNavigator
        history={history}
        me={me}
        routes={[
          /**
           * Recipes
           * */
          {
            path: `/${Routes.recipe}/:slug/edit`,
            exact: false,
            redirectTo: me ? undefined : Routes.login,
            component: RecipeForm,
            navOptions: {
              ...defaultNavOptions,
              title: translate('Edit Recipe'),
            },
          },
          {
            path: `/${Routes.recipe}/:slug/`,
            exact: false,
            component: RecipeScreen,
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
            redirectTo: me ? undefined : Routes.login,
            navOptions: {
              ...defaultNavOptions,
              title: translate('CreateRecipe'),
            },
          },

          /**
           * Foods
           * */
          {
            path: `${Routes.food}/:slug`,
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
            immersive: false,
            redirectTo: me ? undefined : Routes.login,
            component: MealForm,
            navOptions: {
              ...defaultNavOptions,
              title: translate('Edit Meal'),
            },
          },
          {
            path: `${Routes.mealForm}/`,
            exact: false,
            immersive: false,
            redirectTo: me ? undefined : Routes.login,
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
            redirectTo: me ? undefined : Routes.login,
            component: SettingsScreen,
            navOptions: defaultNavOptions,
          },
          {
            path: `${Routes.mealPlanSettings}/`,
            exact: false,
            redirectTo: me ? undefined : Routes.login,
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
            path: Routes.forgotPassword,
            immersive: true,
            exact: true,
            component: ForgotPasswordScreen,
          },
          {
            path: Routes.newPassword,
            immersive: true,
            exact: true,
            component: NewPasswordScreen,
          },
          {
            path: Routes.shoppingList,
            immersive: false,
            redirectTo: me ? undefined : Routes.login,
            exact: true,
            component: ShoppingList,
          },
          {
            path: Routes.calendar,
            immersive: false,
            redirectTo: me ? undefined : Routes.login,
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
            path: Routes.membership,
            immersive: true,
            exact: false,
            component: PayScreen,
          },
          {
            path: '/:username',
            exact: true,
            component: (me && (me.username === trimSlashes(path))) ? ProfileScreen : PublicProfileScreen,
          },
          {
            path: '/',
            exact: true,
            immersive: !me,
            component: LandingScreen,
            redirectTo: me ? me.username : undefined
          },
        ]}
      />
    )
  }

  protected _buildState(props: NavigatorProps, initialBuild: boolean): Partial<NavigatorState> | undefined {
    return {
      path: LocationStore.getPath()
    }
  }
}
