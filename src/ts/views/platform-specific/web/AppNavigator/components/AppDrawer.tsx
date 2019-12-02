/*
 * AppDrawer.tsx
 * Copyright: Ouranos Studio 2019
 */

import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import FilledButton from '@Common/FilledButton/FilledButton'
import FlatButton from '@Common/FlatButton/FlatButton'
import Image from '@Common/Image/Image'
import Link from '@Common/Link/Link'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import { Routes } from '@Models/common'
import { User } from '@Models/FoodModels'
import ImageSource from '@Modules/images'
import LocationStore from '@Services/LocationStore'
import UserStore from '@Services/UserStore'
import { navigate } from '@Utils'
import { Action, Location } from 'history'
import { matchPath } from 'react-router'
// import Text from '@Common/Text/Text'
import RX from 'reactxp'
import { ComponentBase } from 'resub'


const BRAND_IMAGE_WIDTH = 120
const BRAND_IMAGE_HEIGHT = 35
const ACTIVE_INDICATOR_WIDTH = Styles.values.drawerWidth + Styles.values.spacing * 2

interface AppDrawerProps {
  user?: User,
}

interface AppDrawerState {
  path: string,
  me: { username: string },
}

export default class AppDrawer extends ComponentBase<AppDrawerProps, AppDrawerState> {
  private _activeIndicatorTop = RX.Animated.createValue(90 + Styles.values.spacing)
  private _activeIndicatorStart = RX.Animated.createValue(-32)
  private _activeIndicatorAnimationStyle = RX.Styles.createAnimatedViewStyle({
    top: this._activeIndicatorTop,
    [Styles.values.start]: this._activeIndicatorStart,
  })

  constructor(props: AppDrawerProps) {
    super(props)

    const history = LocationStore.getHistory()
    history.listen(this._handleLocationChange)
    this.state = {
      path: LocationStore.getPath(),
      me: UserStore.getUser(),
    }
    this._handleActiveChange(this.state.path, false)
  }

  public render() {
    const { user } = this.props

    return (
      <RX.View style={{ flex: 1, padding: Styles.values.spacingLarge }}>
        <Image
          source={ImageSource.Brand}
          style={styles.logo}
        />

        {
          (() => {
            if (user) {
              return [
                this._renderActiveIndicator(),
                <Link
                  key={0}
                  to={`/${user.username}`}
                  style={{ alignSelf: 'center', marginTop: Styles.values.spacing, marginBottom: Styles.values.spacing }}
                >
                  <Image source={user.avatar!.url} style={styles.avatar} />
                </Link>,
                <Link
                  key={1}
                  to={Routes.calendar}
                  style={Object.assign({},
                    styles.link,
                    {
                      color: this._isActive(Routes.calendar) ? '#fff' : '#4a4a4a'
                    })
                  }
                >
                  <RX.View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      source={this._isActive(Routes.calendar) ? ImageSource.CalendarActive : ImageSource.Calendar}
                      style={styles.icon}
                      resizeMode={'contain'}
                    />
                    <Text translate={translate.keys.Path} style={{ fontWeight: 'bold' }} />
                  </RX.View>
                </Link>,
                <Link
                  key={2}
                  to={Routes.shoppingList}
                  style={Object.assign({},
                    styles.link,
                    {
                      color: this._isActive(Routes.shoppingList) ? '#fff' : '#4a4a4a'
                    })
                  }
                >
                  <RX.View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      source={this._isActive(Routes.shoppingList) ? ImageSource.ShoppingListActive : ImageSource.ShoppingList}
                      style={styles.icon}
                      resizeMode={'contain'}
                    />
                    <Text translate={translate.keys.Groceries} style={{ fontWeight: 'bold' }} />
                  </RX.View>
                </Link>,
                <Link
                  key={3}
                  to={Routes.searchRecipes}
                  style={Object.assign({}, styles.link, { color: this._isActive(Routes.searchRecipes) ? '#fff' : '#4a4a4a' })}
                >
                  <RX.View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      source={this._isActive(Routes.searchRecipes) ? ImageSource.SearchWhite : ImageSource.Search}
                      style={[styles.icon, { transform: AppConfig.isRTL() ? undefined : [{ rotate: '90deg' }] }]}
                      resizeMode={'contain'}
                    />
                    <Text translate style={{ fontWeight: 'bold' }}>Search</Text>
                  </RX.View>
                </Link>
              ]
            } else {
              return <FilledButton onPress={() => navigate(this.props, Routes.login)} label={'LoginForm'} />
            }
          })()
        }

        <RX.View
          style={{
            position: 'absolute',
            bottom: Styles.values.spacing,
            right: 0,
            left: 0,
            alignItems: 'center',
          }}
        >
          <FlatButton
            onPress={this._onLogout}
            label={translate('Logout')}
            style={{
              borderWidth: 0,
            }}
          />
        </RX.View>
      </RX.View>
    )
  }

  protected _buildState(props: AppDrawerProps, initialBuild: boolean): Partial<AppDrawerState> | undefined {
    return {
      path: LocationStore.getPath(),
      me: UserStore.getUser(),
    }
  }

  private _isActive = (pathname: string): boolean => {
    return !!matchPath(this.state.path, {
      path: pathname,
      exact: true,
    })
  }

  private _handleLocationChange = (location: Location, action?: Action) => {
    this._handleActiveChange(location.pathname, true)
  }

  private _handleActiveChange = (pathname: string, animated?: boolean) => {
    let topValue = 0
    let startValue = -32

    if (this.state.me && matchPath(pathname, {
      path: `/${this.state.me.username}`,
      exact: true,
    })) {
      topValue = 90 + Styles.values.spacing
    }

    if (matchPath(pathname, {
      path: Routes.calendar,
    })) {
      topValue = 153 + (Styles.values.spacing * 2)
    }

    if (matchPath(pathname, {
      path: Routes.shoppingList,
    })) {
      topValue = 207 + (Styles.values.spacing * 2)
    }

    if (matchPath(pathname, {
      path: Routes.searchRecipes,
    })) {
      topValue = 261 + (Styles.values.spacing * 2)
    }

    if (topValue == 0) {
      startValue = -ACTIVE_INDICATOR_WIDTH
    }

    setTimeout(() => {
      RX.Animated.parallel([
        topValue !== 0 && RX.Animated.timing(this._activeIndicatorTop, {
          toValue: topValue,
          duration: animated ? 500 : 0,
        }),
        RX.Animated.timing(this._activeIndicatorStart, {
          toValue: startValue,
          duration: 500,
        })
      ].filter(Boolean)).start()

    }, 0)
  }

  private _onLogout = () => {
    UserStore.setUser()
    UserStore.setSession()
    RX.Storage.clear()

    LocationStore.navigate(this.props, Routes.login)
  }

  private _renderActiveIndicator = () => {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.Animated.View
            style={[
              styles.activeIndicator,
              { backgroundColor: theme.colors.drawerActiveIndicator },
              this._activeIndicatorAnimationStyle,
            ]}
          />
        )}
      </ThemeContext.Consumer>
    )
  }
}

const styles = {
  activeIndicator: RX.Styles.createViewStyle({
    width: ACTIVE_INDICATOR_WIDTH,
    height: 50,
    position: 'absolute',
    [Styles.values.start]: -32,
    top: 200,
    [Styles.values.borderBottomEndRadius]: 25,
    [Styles.values.borderTopEndRadius]: 25,
  }),
  logo: RX.Styles.createImageStyle({
    width: BRAND_IMAGE_WIDTH,
    height: BRAND_IMAGE_HEIGHT,
    marginBottom: Styles.values.spacing,
    alignSelf: 'center',
  }),
  link: RX.Styles.createTextStyle({
    // @ts-ignore
    transition: 'color 0.5s',
    flexDirection: 'row',
    fontSize: Styles.fontSizes.size16,
    // [Styles.values.paddingStart]: Styles.values.spacing,
    paddingVertical: Styles.values.spacing,
  }),
  avatar: RX.Styles.createImageStyle({
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  }),
  icon: RX.Styles.createImageStyle({
    width: 20,
    height: 20,
    [Styles.values.marginEnd]: Styles.values.spacing / 2,
  })
}
