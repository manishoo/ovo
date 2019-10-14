/*
 * Navigator.tsx
 * Copyright: Ouranos Studio 2019
 */

import Image from 'common/Image/Image'
import Text from 'common/Text/Text'
import { Action } from 'history'
import ImageSource from 'modules/images'
import { matchPath, Redirect } from 'react-router'
import { Route, RouteProps, Router, Switch } from 'react-router-dom'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import AppConfig from 'src/ts/app/AppConfig'
import Styles from 'src/ts/app/Styles'
import { Theme } from 'src/ts/app/Theme'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { User } from 'src/ts/models/FoodModels'
import { WidthBreakPoints } from 'src/ts/models/ResponsiveWidthModels'
import { NavOptions } from 'src/ts/navigator/navigator'
import LocationStore from 'src/ts/stores/LocationStore'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import UserStore from 'src/ts/stores/UserStore'
import { trimSlashes } from 'src/ts/utilities/trim-slashes'
import AppDrawer from './components/AppDrawer'
import AppSearchComponent from './components/AppSearchComponent'


const NAVBAR_HEIGHT = 50
const SEARCH_ICON_SIZE = 56
const SEARCH_CONTAINER_HEIGHT = 70
const SEARCH_ICON_IMAGE_SIZE = 30
const TAB_BAR_HEIGHT = 50
const TAB_BAR_MAX_WIDTH = 350

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
  mode: string,
  user?: User,
  hideDrawer: boolean,
  currentPath: string,
  height: number,
  width: number,
  searchModalShowing?: boolean,
  routes: AppRoute[]
}

export default class AppNavigator extends ComponentBase<AppNavigatorProps & { history: any }, WebAppRouterState> {
  static contextType = ThemeContext
  state: WebAppRouterState = {
    mode: ResponsiveWidthStore.isSmallOrTinyScreenSize() ? 'navbar' : 'drawer',
    user: UserStore.getUser(),
    currentPath: LocationStore.getPath(),
    height: ResponsiveWidthStore.getHeight(),
    width: ResponsiveWidthStore.getWidth(),
    routes: [],
    hideDrawer: !ResponsiveWidthStore.isDrawerVisible(),
  }
  private _searchInput: any
  private _drawerClosedValue = AppConfig.isRTL() ? Styles.values.drawerWidth : -Styles.values.drawerWidth
  private _drawerAnimationLeftValue = RX.Animated.createValue(this._drawerClosedValue)
  private _navbarAnimationTopValue = RX.Animated.createValue(-NAVBAR_HEIGHT)
  private _searchContainerAnimationTopValue = RX.Animated.createValue(-2000) // Since rendering on the server we don't know the user's height
  private _searchContainerBackDropAnimationOpacityValue = RX.Animated.createValue(0)
  private _drawerSpacingAnimationWidthValue = RX.Animated.createValue(0)
  private _drawerAnimationStyle = RX.Styles.createAnimatedViewStyle({
    transform: [{ translateX: this._drawerAnimationLeftValue }],
  })
  private _navbarAnimationStyle = RX.Styles.createAnimatedViewStyle({
    transform: [{ translateY: this._navbarAnimationTopValue }],
  })
  private _searchContainerAnimationStyle = RX.Styles.createAnimatedViewStyle({
    transform: [{ translateY: this._searchContainerAnimationTopValue }],
  })
  private _searchContainerBackDropAnimationStyle = RX.Styles.createAnimatedViewStyle({
    opacity: this._searchContainerBackDropAnimationOpacityValue,
  })
  private _drawerSpacingAnimationStyle = RX.Styles.createAnimatedViewStyle({
    width: this._drawerSpacingAnimationWidthValue,
  })

  public render() {
    const Navbar = this._renderNavbar()

    if (this.state.width < WidthBreakPoints.small) return (
      <RX.Text style={{ padding: 16 }}>
        This application does not currently support mobile size. Please use a desktop browser
      </RX.Text>
    )

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Router history={this.props.history}>
            <RX.View
              style={[styles.container, { paddingTop: (this.state.mode === 'navbar' && Navbar) ? NAVBAR_HEIGHT : 0 }]}>
              <RX.View style={{ flexDirection: 'row' }}>
                <RX.Animated.View
                  style={[
                    {
                      height: 1,
                    },
                    this._drawerSpacingAnimationStyle,
                  ]}
                />
                <RX.View
                  style={[styles.innerContainer, { height: this.state.height }]}
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
              </RX.View>

              {Navbar}
              {this._renderTabBar(theme)}
              {this._renderDrawer(theme)}
              {false && this._renderSearch(theme)}

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

              <Text
                style={{
                  position: 'absolute',
                  bottom: 16,
                  [Styles.values.end]: 16,
                  color: theme.colors.subtitle,
                }}
              >{AppConfig.version}</Text>
            </RX.View>
          </Router>
        )}
      </ThemeContext.Consumer>
    )
  }

  componentDidMount(): void {
    this.props.history.listen(this._handleLocationChange) // FIXME better place to call this maybe

    this._handleDrawerVisibility()
  }

  protected _buildState(props: AppNavigatorProps & { history: any }, initialBuild: boolean): Partial<WebAppRouterState> | undefined {
    const mode = ResponsiveWidthStore.isSmallOrTinyScreenSize() ? 'navbar' : 'drawer'
    const user = UserStore.getUser()
    const currentPath = LocationStore.getPath()

    if (initialBuild || (this.state.mode !== mode)) {
      if (mode === 'drawer') {
        this._setUI(true, false, !initialBuild)
      } else {
        this._setUI(false, true, !initialBuild)
      }
    }

    return {
      mode,
      user,
      currentPath,
      height: ResponsiveWidthStore.getHeight(),
      width: ResponsiveWidthStore.getWidth(),
      routes: props.routes,
      hideDrawer: !ResponsiveWidthStore.isDrawerVisible(),
    }
  }

  private _renderDrawer = (theme: Theme) => {
    if (this.state.hideDrawer && !this.state.user) return null

    return (
      <RX.Animated.View style={[styles.drawer.container, {
        height: this.state.height,
        // backgroundColor: theme.colors.drawerBg
      }, this._drawerAnimationStyle]}>
        <AppDrawer user={this.state.user} />
      </RX.Animated.View>
    )
  }

  private _renderNavbar = () => {
    const { currentPath, routes } = this.state

    const foundRoute = routes.find(p => !!matchPath(currentPath, {
      path: p.path,
      exact: p.exact,
    }))

    if (!foundRoute) return null
    if (!foundRoute.navOptions) return null

    const { title, back } = foundRoute.navOptions as NavOptions

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.Animated.View
            style={[
              styles.navbarContainer,
              {
                backgroundColor: theme.colors.drawerBg,
                borderColor: theme.colors.drawerBorderColor,
              },
              this._navbarAnimationStyle,
            ]}>
            <Text>{back ? '<' : ''}</Text>
            <Text>{title}</Text>
          </RX.Animated.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _renderTabBar = (theme: Theme) => {
    if (this.state.mode === 'drawer') return null
    if (!this.state.user) return null

    let { currentPath } = this.state

    let activePath: string | undefined

    if (matchPath(currentPath, {
      path: '/',
      exact: false,
    })) activePath = 'path'

    if (matchPath(currentPath, {
      path: '/explore',
      exact: false,
    })) activePath = 'feed'

    if (this.state.user && (this.state.user.username === trimSlashes(currentPath))) {
      activePath = 'profile'
    }

    // Only appear on Path, Feed and Profile
    if (!activePath) return null

    const ICON_SIZE = 30

    return (
      <RX.View style={styles.tabBar.container}>
        <RX.View
          style={[styles.tabBar.innerContainer, { width: this.state.width, backgroundColor: theme.colors.tabBarBG, }]}>
          <Image
            source={activePath === 'feed' ? ImageSource.SearchActive : ImageSource.Search}
            style={{
              width: ICON_SIZE,
              height: ICON_SIZE,
            }}
          />
          <Image
            source={activePath === 'path' ? ImageSource.OvalActive : ImageSource.Oval}
            style={{
              width: ICON_SIZE,
              height: ICON_SIZE,
            }}
          />
          <Image
            source={activePath === 'profile' ? ImageSource.RectangleActive : ImageSource.Rectangle}
            style={{
              width: ICON_SIZE,
              height: ICON_SIZE,
            }}
          />
        </RX.View>
      </RX.View>
    )
  }

  private _renderSearch = (theme: Theme) => {
    const match = matchPath(this.state.currentPath, {
      path: '/recipes/',
      exact: false,
    })

    const toggleModal = (show: boolean) => () => {
      RX.Animated.parallel([
        RX.Animated.timing(this._searchContainerAnimationTopValue, {
          toValue: show ? 0 : -SEARCH_CONTAINER_HEIGHT,
          duration: 300
        }),
        RX.Animated.timing(this._searchContainerBackDropAnimationOpacityValue, {
          toValue: show ? 1 : 0,
          duration: 300
        }),
      ]).start(() => {
        this.setState({ searchModalShowing: show })
        if (show && this._searchInput) {
          this._searchInput.focus()
        }
      })
    }

    return [
      /**
       * Search Icon
       * */
      <RX.View onPress={toggleModal(true)} style={[styles.search.iconContainer, {
        opacity: match ? 0 : 1,
        backgroundColor: theme.colors.searchIconBG,
      }]}>
        <Image
          source={ImageSource.SearchIcon}
          style={styles.search.icon}
          resizeMode={'contain'}
        />
      </RX.View>,
      /**
       * Backdrop
       * */
      <RX.Animated.View
        ignorePointerEvents={!this.state.searchModalShowing}
        onPress={toggleModal(false)}
        style={[
          styles.search.backDrop,
          {
            backgroundColor: theme.colors.searchContainerBackdropBG,
          },
          this._searchContainerBackDropAnimationStyle,
        ]}
      />,
      /**
       * Container
       * */
      <RX.Animated.View
        style={[
          styles.search.container,
          {
            height: this.state.mode === 'drawer' ? SEARCH_CONTAINER_HEIGHT : this.state.height,
            backgroundColor: theme.colors.searchContainerBG,
          },
          this._searchContainerAnimationStyle,
        ]}
      >
        {this.state.mode === 'navbar' &&
        <RX.Text style={{ padding: Styles.values.spacing, fontSize: 20 }} onPress={toggleModal(false)}>x</RX.Text>}

        <AppSearchComponent
          inputRef={ref => this._searchInput = ref}
          onSubmit={toggleModal(false)}
        />
      </RX.Animated.View>
    ]
  }

  private _handleLocationChange = (location: Location, action: Action) => {
    // LocationStore.setPath(location.pathname) // FIXME do something better maybe
    this._handleDrawerVisibility(location.pathname)
  }

  private _setUI = (showDrawer: boolean, showNavbar: boolean, animate: boolean = true) => {
    RX.Animated.parallel([
      RX.Animated.timing(this._drawerAnimationLeftValue, {
        toValue: showDrawer ? 0 : this._drawerClosedValue,
        duration: animate ? 500 : 0,
      }),
      RX.Animated.timing(this._navbarAnimationTopValue, {
        toValue: showNavbar ? 0 : -NAVBAR_HEIGHT,
        duration: animate ? 500 : 0,
      }),
      RX.Animated.timing(this._drawerSpacingAnimationWidthValue, {
        toValue: showDrawer ? Styles.values.drawerWidth : 0,
        duration: animate ? 500 : 1,
      }),
    ]).start()
  }

  private _handleDrawerVisibility = (pathname?: string, animate: boolean = true) => {
    const currentPath = this.state.currentPath
    let hideDrawer = false

    this.state.routes.map(route => {
      if (route.immersive && matchPath(pathname || currentPath, route)) {
        hideDrawer = true
      }
    })

    if (hideDrawer) {
      console.log('ResponsiveWidthStore.toggleDrawerVisibility(false)')
      ResponsiveWidthStore.toggleDrawerVisibility(false)
      setTimeout(() => this._setUI(false, this.state.mode === 'navbar', animate), 0)

      // // hide the drawer if landing
      // if (this.state.user) {
      //   this._setUI(this.state.mode === 'drawer', this.state.mode === 'navbar', animate)
      // } else {
      //   this._setUI(false, false, animate)
      // }
    } else {
      console.log('ResponsiveWidthStore.toggleDrawerVisibility(true)')
      ResponsiveWidthStore.toggleDrawerVisibility(true)
      setTimeout(() => this._setUI(this.state.mode === 'drawer', this.state.mode === 'navbar', animate), 0)
    }
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    flex: 1,
    alignItems: 'stretch',
  }),
  innerContainer: RX.Styles.createViewStyle({
    flex: 1,
    overflow: 'visible',
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
  tabBar: {
    container: RX.Styles.createViewStyle({
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      padding: Styles.values.spacing,
    }),
    innerContainer: RX.Styles.createViewStyle({
      flex: 1,
      height: TAB_BAR_HEIGHT,
      maxWidth: TAB_BAR_MAX_WIDTH,
      borderRadius: TAB_BAR_HEIGHT / 2,
      shadowColor: 'rgba(0, 0, 0, .12)',
      shadowRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: Styles.values.spacing * 2,
    })
  },
  drawer: {
    container: RX.Styles.createViewStyle({
      width: Styles.values.drawerWidth,
      position: 'absolute',
      [Styles.values.start]: 0,
    }),
  }
}
