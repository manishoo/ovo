/*
 * AppNavigator2.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { Routes } from '@Models/common'
import { NavOptions } from '@Modules/navigator'
import LocationStore from '@Services/LocationStore'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { Me } from '@Services/types/Me'
import UserStore from '@Services/UserService'
import { trimSlashes } from '@Utils/trim-slashes'
import { Action, Location } from 'history'
import { matchPath, Redirect } from 'react-router'
import { Route, RouteProps, Router, Switch } from 'react-router-dom'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import AppNavbar from './components/AppNavbar'
import TabBar, { TabBarItems } from './components/TabBar'


const NAVBAR_HEIGHT = 50
const SEARCH_ICON_SIZE = 56
const SEARCH_ICON_IMAGE_SIZE = 30

type AppRoute = RouteProps & {
  modal?: boolean,
  redirectTo?: string,
  immersive?: boolean,
  navOptions?: NavOptions,
}

interface AppNavigatorProps extends RX.CommonProps {
  routes: AppRoute[]
}

interface WebAppRouterState {
  me: Me | null,
  path: string,
  height: number,
  width: number,
  searchModalShowing?: boolean,
  routes: AppRoute[],
  isSmallOrTinyScreenSize: boolean,
}

export default class AppNavigator extends ComponentBase<AppNavigatorProps & { history: any }, WebAppRouterState> {
  state: WebAppRouterState = {
    me: UserStore.getUser(),
    path: LocationStore.getPath(),
    height: ResponsiveWidthStore.getHeight(),
    width: ResponsiveWidthStore.getWidth(),
    isSmallOrTinyScreenSize: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
    routes: [],
  }

  public render() {
    const TabBarElement = this._renderTabBar()

    return (
      <Router history={this.props.history}>
        <AppNavbar
          me={this.state.me}
          path={this.state.path}
          width={this.state.width}
          showIcons={!this.state.isSmallOrTinyScreenSize}
        />
        <RX.View
          style={[
            {
              flex: 1,
              overflow: 'visible',
            },
            {
              height: this.state.height,
            }
          ]}
        >
          <Switch>
            {
              this.state.routes.filter(r => !r.modal).map(route => (
                <Route
                  {...route}
                >
                  {route.redirectTo && <Redirect to={route.redirectTo} />}
                </Route>
              ))
            }
          </Switch>
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


        {this.state.isSmallOrTinyScreenSize && TabBarElement}
        {/*<RX.View
              style={[
                styles.container,
                {
                  paddingTop: 0,
                  paddingBottom: TabBarElement ? TabBar.height : 0,
                },
              ]}
            >


              {TabBarElement}

              <Text
                style={{
                  position: 'absolute',
                  bottom: 16,
                  [Styles.values.end]: 16,
                  color: theme.colors.subtitle,
                }}
              >{AppConfig.version}</Text>
            </RX.View>*/}
      </Router>
    )
  }

  componentDidMount(): void {
    const history = LocationStore.getHistory()
    history.listen(this._handleLocationChange) // FIXME better place to call this maybe
  }

  protected _buildState(props: AppNavigatorProps & { history: any }, initialBuild: boolean): Partial<WebAppRouterState> | undefined {
    const me = UserStore.getUser()
    const path = LocationStore.getPath()

    return {
      me,
      path,
      height: ResponsiveWidthStore.getHeight(),
      width: ResponsiveWidthStore.getWidth(),
      isSmallOrTinyScreenSize: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
      routes: props.routes,
    }
  }

  private _renderTabBar = () => {
    if (!this.state.me) return null

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

    if (this.state.me && (this.state.me.username === trimSlashes(path))) {
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

const styles = {
  container: RX.Styles.createViewStyle({
    flex: 1,
    alignItems: 'stretch',
  }),
  navbarContainer: RX.Styles.createViewStyle({
    height: NAVBAR_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderWidth: 1,
  }),
  search: {
    container: RX.Styles.createViewStyle({
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      padding: Styles.values.spacing,
    }),
    backDrop: RX.Styles.createViewStyle({
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }),
    iconContainer: RX.Styles.createViewStyle({
      position: 'absolute',
      [Styles.values.end]: Styles.values.spacing * 2,
      top: Styles.values.spacing * 2,
      width: SEARCH_ICON_SIZE,
      height: SEARCH_ICON_SIZE,
      borderRadius: SEARCH_ICON_SIZE / 2,
      shadowColor: 'rgba(0, 0, 0, .12)',
      shadowRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    }),
    icon: RX.Styles.createImageStyle({
      width: SEARCH_ICON_IMAGE_SIZE,
      height: SEARCH_ICON_IMAGE_SIZE,
    }),
  },
  drawer: {
    container: RX.Styles.createViewStyle({
      width: Styles.values.drawerWidth,
      position: 'absolute',
      [Styles.values.start]: 0,
    }),
  }
}
