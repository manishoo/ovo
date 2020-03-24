/*
 * AppNavbar.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import Image from '@Common/Image/Image'
import Link from '@Common/Link/Link'
import { Routes } from '@Models/common'
import { Me } from '@Models/graphql/me/types/Me'
import AppSearchComponent from '@Views/platform-specific/web/AppNavigator/components/AppSearchComponent'
import { matchPath } from 'react-router'
import RX from 'reactxp'
import ImageSource from 'src/ts/modules/images/index.web'


const NAVBAR_HEIGHT = 54
const NAVBAR_MAX_WIDTH = 975

interface AppNavbarProps {
  style?: any,
  me: Me | null,
  path: string,
  width: number,
  showIcons: boolean,
}

export default function AppNavbar({ style, me, width, path, showIcons }: AppNavbarProps) {
  const _isActive = (pathname: string): boolean => {
    return !!matchPath(path, {
      path: pathname,
      exact: true,
    })
  }

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <RX.View
          style={[
            styles.container,
            {
              borderColor: theme.colors.borderLight,
              backgroundColor: theme.colors.cardBg,
            },
            style,
          ]}
        >
          <RX.View
            style={[
              styles.innerContainer,
              {
                width: width > NAVBAR_MAX_WIDTH ? NAVBAR_MAX_WIDTH : width,
              }
            ]}
          >
            <Image
              source={ImageSource.Brand}
              style={styles.brand}
              resizeMode={'contain'}
            />
            <RX.View
              style={styles.searchWrapper}
            >
              <AppSearchComponent
                onSubmit={() => {
                }}
              />
            </RX.View>

            {
              showIcons &&
              <RX.View
                style={styles.iconsWrapper}
              >
                <Link
                  key={1}
                  to={Routes.calendar}
                  style={Object.assign({},
                    {
                      color: _isActive(Routes.calendar) ? '#fff' : '#4a4a4a'
                    })
                  }
                >
                  <Image
                    source={_isActive(Routes.calendar) ? ImageSource.CalendarActive : ImageSource.Calendar}
                    style={styles.icon}
                    resizeMode={'contain'}
                  />
                </Link>

                <Link
                  key={2}
                  to={Routes.shoppingList}
                  style={Object.assign({},
                    {
                      color: _isActive(Routes.shoppingList) ? '#fff' : '#4a4a4a'
                    })
                  }
                >
                  <Image
                    source={_isActive(Routes.shoppingList) ? ImageSource.ShoppingListActive : ImageSource.ShoppingList}
                    style={styles.icon}
                    resizeMode={'contain'}
                  />
                </Link>

                <Link
                  key={3}
                  to={Routes.searchRecipes}
                  style={Object.assign({}, { color: _isActive(Routes.searchRecipes) ? '#fff' : '#4a4a4a' })}
                >
                  <Image
                    source={_isActive(Routes.searchRecipes) ? ImageSource.SearchWhite : ImageSource.Search}
                    style={[styles.icon, { transform: AppConfig.isRTL() ? undefined : [{ rotate: '90deg' }] }]}
                    resizeMode={'contain'}
                  />
                </Link>

                {
                  me &&
                  <Link
                    key={0}
                    to={`/${me.username}`}
                  >
                    <Image
                      source={me.avatar!.url}
                      style={[
                        styles.icon,
                        {
                          borderRadius: 100,
                        }
                      ]}
                    />
                  </Link>
                }
              </RX.View>
            }
          </RX.View>
        </RX.View>
      )}
    </ThemeContext.Consumer>
  )
}

AppNavbar.height = NAVBAR_HEIGHT

const styles = {
  container: RX.Styles.createViewStyle({
    height: NAVBAR_HEIGHT,
    borderBottomWidth: 1,
  }),
  innerContainer: RX.Styles.createViewStyle({
    maxWidth: NAVBAR_MAX_WIDTH,
    paddingHorizontal: Styles.values.spacing,
    flexDirection: 'row',
    alignItems: 'center',
    // @ts-ignore web
    margin: 'auto',
  }),
  searchWrapper: RX.Styles.createViewStyle({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  brand: RX.Styles.createImageStyle({
    width: 60,
    height: 16,
    position: 'absolute',
    [Styles.values.start]: Styles.values.spacing,
  }),
  icon: RX.Styles.createImageStyle({
    width: 25,
    height: 25,
    [Styles.values.marginStart]: Styles.values.spacing,
  }),
  iconsWrapper: RX.Styles.createViewStyle({
    flexDirection: 'row',
    position: 'absolute',
    [Styles.values.end]: Styles.values.spacing,
  })
}
