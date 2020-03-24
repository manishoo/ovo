/*
 * AppNavigator2.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { Routes } from '@Models/common'
import { Me } from '@Models/graphql/me/types/Me'
import { NavOptions } from '@Modules/navigator'
import LocationStore from '@Services/LocationStore'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { trimSlashes } from '@Utils/trim-slashes'
import { Action, Location } from 'history'
import { matchPath, Redirect } from 'react-router'
import { Route, RouteProps, Router, Switch } from 'react-router-dom'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import AppNavbar from './components/AppNavbar'
import TabBar, { TabBarItems } from './components/TabBar'


type AppRoute = RouteProps & {
  modal?: boolean,
  redirectTo?: string,
  immersive?: boolean,
  navOptions?: NavOptions,
}

interface AppNavigatorProps extends RX.CommonProps {
  routes: AppRoute[],
  me: Me | null,
}

interface WebAppRouterState {
  path: string,
  height: number,
  width: number,
  searchModalShowing?: boolean,
  routes: AppRoute[],
  isSmallOrTinyScreenSize: boolean,
}

export default class AppNavigator extends ComponentBase<AppNavigatorProps & { history: any }, WebAppRouterState> {
  state: WebAppRouterState = {
    path: LocationStore.getPath(),
    height: ResponsiveWidthStore.getHeight(),
    width: ResponsiveWidthStore.getWidth(),
    isSmallOrTinyScreenSize: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
    routes: [],
  }

  public render() {
    const TabBarElement = this._renderTabBar()
    const showNavbar = this.props.me && !this.state.isSmallOrTinyScreenSize

    return (
      <Router history={this.props.history}>
        {
          showNavbar &&
          <AppNavbar
            me={this.props.me}
            path={this.state.path}
            width={this.state.width}
            showIcons={!this.state.isSmallOrTinyScreenSize}
          />
        }
        <RX.View
          style={[
            {
              flex: 1,
              overflow: 'visible',
            }
          ]}
        >
          <RX.View
            style={{
              height: this.state.height - (showNavbar ? AppNavbar.height : 0),
            }}
          >
            <Switch>
              {
                this.state.routes.filter(r => !r.modal).map(route => (
                  <Route
                    key={String(route.path)}
                    {...route}
                  >
                    {route.redirectTo && <Redirect to={route.redirectTo} />}
                  </Route>
                ))
              }
            </Switch>
          </RX.View>

          {this.state.isSmallOrTinyScreenSize && TabBarElement}
        </RX.View>

        {
          /**
           * Modals
           * */
          this.state.routes.filter(r => r.modal).map(route => (
            <Route
              {...route}
            />
          ))
        }
      </Router>
    )
  }

  componentDidMount(): void {
    const history = LocationStore.getHistory()
    history.listen(this._handleLocationChange) // FIXME better place to call this maybe
  }

  protected _buildState(props: AppNavigatorProps & { history: any }, initialBuild: boolean): Partial<WebAppRouterState> | undefined {
    const path = LocationStore.getPath()

    return {
      path,
      height: ResponsiveWidthStore.getHeight(),
      width: ResponsiveWidthStore.getWidth(),
      isSmallOrTinyScreenSize: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
      routes: props.routes,
    }
  }

  private _renderTabBar = () => {
    if (!this.props.me) return null

    let { path, width } = this.state

    let activePath: TabBarItems | undefined

    if (matchPath(path, {
      path: Routes.calendar,
      exact: false,
    })) activePath = TabBarItems.calendar

    if (matchPath(path, {
      path: Routes.searchRecipes,
      exact: false,
    })) activePath = TabBarItems.feed

    if (matchPath(path, {
      path: Routes.shoppingList,
      exact: false,
    })) activePath = TabBarItems.shoppingList

    if (this.props.me && (this.props.me.username === trimSlashes(path))) {
      activePath = TabBarItems.profile
    }

    // Only appear on Path, Feed and Profile
    if (!activePath) return null

    return (
      <TabBar
        activeItem={activePath}
        innerContainerStyle={{
          width,
        }}
      />
    )
  }

  private _handleLocationChange = (location: Location<any>, action: Action) => {
    // LocationStore.setPath(location.pathname) // FIXME do something better maybe
  }
}
