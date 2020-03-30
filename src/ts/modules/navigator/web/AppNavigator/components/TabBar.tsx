/*
 * TabBar.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import Image from '@Common/Image/Image'
import Link from '@Common/Link/Link'
import { Routes } from '@Models/common'
import ImageSource from '@Modules/images'
import RX from 'reactxp'


const TAB_BAR_HEIGHT = 50
const TAB_BAR_MAX_WIDTH = 350
const ICON_SIZE = 30

export enum TabBarItems {
  calendar = 'calendar',
  feed = 'feed',
  profile = 'profile',
  shoppingList = 'shoppingList',
}

interface TabBarProps {
  activeItem: TabBarItems,
  innerContainerStyle?: any
}

export default function TabBar({ activeItem, innerContainerStyle }: TabBarProps) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <RX.View style={[styles.container, { backgroundColor: theme.colors.cardBg }]}>
          <RX.View
            style={[styles.innerContainer, { backgroundColor: theme.colors.tabBarBG }, innerContainerStyle]}>
            <RX.View
              style={styles.iconWrapper}
            >
              <Link to={Routes.calendar}>
                <Image
                  source={activeItem === TabBarItems.calendar ? ImageSource.CalendarActive : ImageSource.Calendar}
                  style={styles.icon}
                  resizeMode={'contain'}
                />
              </Link>
            </RX.View>
            <RX.View
              style={styles.iconWrapper}
            >
              <Link to={Routes.searchRecipes}>
                <Image
                  source={activeItem === TabBarItems.feed ? ImageSource.SearchActive : ImageSource.Search}
                  style={styles.icon}
                  resizeMode={'contain'}
                />
              </Link>
            </RX.View>
            <RX.View
              style={styles.iconWrapper}
            >
              <Link to={Routes.shoppingList}>
                <Image
                  source={activeItem === TabBarItems.shoppingList ? ImageSource.ShoppingListActive : ImageSource.ShoppingList}
                  style={styles.icon}
                  resizeMode={'contain'}
                />
              </Link>
            </RX.View>
            <RX.View
              style={styles.iconWrapper}
            >
              <Link to={'/'}>
                <Image
                  source={activeItem === TabBarItems.profile ? ImageSource.RectangleActive : ImageSource.Rectangle}
                  style={styles.icon}
                  resizeMode={'contain'}
                />
              </Link>
            </RX.View>
          </RX.View>
        </RX.View>
      )}
    </ThemeContext.Consumer>
  )
}

TabBar.height = TAB_BAR_HEIGHT

const styles = {
  container: RX.Styles.createViewStyle({
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
  }),
  innerContainer: RX.Styles.createViewStyle({
    flex: 1,
    height: TAB_BAR_HEIGHT,
    maxWidth: TAB_BAR_MAX_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Styles.values.spacing * 2,
  }),
  iconWrapper: RX.Styles.createViewStyle({
    cursor: 'pointer',
  }),
  icon: RX.Styles.createImageStyle({
    width: ICON_SIZE,
    height: ICON_SIZE,
  })
}
