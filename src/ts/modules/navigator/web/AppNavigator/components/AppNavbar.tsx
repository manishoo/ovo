/*
 * AppNavbar.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { ThemeContext, useTheme } from '@App/ThemeContext'
import Image from '@Common/Image/Image'
import Link from '@Common/Link/Link'
import Text from '@Common/Text/Text'
import { Routes } from '@Models/common'
import { Me } from '@Models/graphql/me/types/Me'
import CalendarService from '@Services/CalendarService'
import ServiceConsumer from '@Services/utils/ServiceConsumer'
import { FC, useContext, useMemo } from 'react'
import { matchPath, useLocation } from 'react-router'
import RX from 'reactxp'


const NAVBAR_HEIGHT = 54
const NAVBAR_MAX_WIDTH = Styles.values.mainContentMaxWidth

const styles = {
  container: RX.Styles.createViewStyle({
    height: NAVBAR_HEIGHT,
    borderBottomWidth: 1,
    alignItems: 'center',
  }),
  innerContainer: RX.Styles.createViewStyle({
    flex: 1,
    paddingHorizontal: Styles.values.spacing,
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: NAVBAR_MAX_WIDTH,
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
  }),
}

interface AppNavbarProps {
  style?: any,
  me: Me | null,
  width: number,
  showIcons: boolean,
}

const Indicator: FC<{}> = (props) => {
  const theme = useTheme()

  const indicatorWrapper = useMemo(() => RX.Styles.createViewStyle({
    padding: 3,
    position: 'absolute',
    bottom: 0,
    [Styles.values.end]: 0,
    borderRadius: 100,
    backgroundColor: theme.colors.red,
  }, false), [theme.colors.red])

  const indicatorText = useMemo(() => RX.Styles.createTextStyle({
    fontSize: 10,
    color: theme.colors.textLight,
  }, false), [theme.colors.textLight])

  if (props.children == 0) return null

  return (
    <RX.View
      style={indicatorWrapper}
    >
      <Text style={indicatorText}>{props.children}</Text>
    </RX.View>
  )
}

export default function AppNavbar({ style, me, width, showIcons }: AppNavbarProps) {
  const { theme } = useContext(ThemeContext)
  const location = useLocation()

  const _isActive = (pathname: string): boolean => {
    return !!matchPath(location.pathname, {
      path: pathname,
      exact: true,
    })
  }

  return (
    <RX.View
      style={[
        styles.container,
        {
          borderColor: theme.colors.borderLight,
          backgroundColor: theme.colors.cardBg,
          width
        }
      ]}
    >
      <RX.View
        style={[
          styles.innerContainer,
          {
            width,
          }
        ]}
      >
        <Image
          source={Image.source.Brand}
          style={styles.brand}
          resizeMode={'contain'}
        />

        {
          showIcons &&
          <RX.View
            style={styles.iconsWrapper}
          >
            {
              me &&
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
                  source={_isActive(Routes.calendar) ? Image.source.CalendarActive : Image.source.Calendar}
                  style={styles.icon}
                  resizeMode={'contain'}
                />
              </Link>
            }

            <Link
              key={2}
              to={Routes.searchRecipes}
              style={Object.assign({}, { color: _isActive(Routes.searchRecipes) ? '#fff' : '#4a4a4a' })}
            >
              <Image
                source={_isActive(Routes.searchRecipes) ? Image.source.SearchActive : Image.source.Search}
                style={[styles.icon, { transform: AppConfig.isRTL() ? undefined : [{ rotate: '90deg' }] }]}
                resizeMode={'contain'}
              />
            </Link>

            {
              me &&
              <RX.View>
                <ServiceConsumer
                  state={{
                    shoppingList: () => CalendarService.getShoppingList(),
                  }}
                >
                  {({ shoppingList }) => (
                    <Link
                      key={3}
                      to={Routes.shoppingList}
                      style={Object.assign({},
                        {

                          color: _isActive(Routes.shoppingList) ? '#fff' : '#4a4a4a'
                        })
                      }
                    >
                      <Image
                        source={_isActive(Routes.shoppingList) ? Image.source.ShoppingListActive : Image.source.ShoppingList}
                        style={styles.icon}
                        resizeMode={'contain'}
                      />

                      <Indicator>{Object.keys(shoppingList).reduce((previousValue, foodGroupId) => previousValue + shoppingList[foodGroupId].length, 0)}</Indicator>
                    </Link>
                  )}
                </ServiceConsumer>
              </RX.View>
            }

            {
              me &&
              <Link
                key={0}
                to={`/${me.username}`}
              >
                <RX.View
                  style={{
                    borderWidth: 1,
                    padding: 1,
                    borderColor: _isActive(`/${me.username}`) ? '#4a4a4a' : 'transparent',
                    borderRadius: 100,
                    width: 27,
                    height: 27,
                    [Styles.values.marginStart]: Styles.values.spacing,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    source={me.avatar!.url}
                    style={[
                      styles.icon,
                      {
                        [Styles.values.marginStart]: 0,
                        borderRadius: 100,
                      }
                    ]}
                  />
                </RX.View>
              </Link>
            }
          </RX.View>
        }
      </RX.View>
    </RX.View>
  )
}

AppNavbar.height = NAVBAR_HEIGHT
