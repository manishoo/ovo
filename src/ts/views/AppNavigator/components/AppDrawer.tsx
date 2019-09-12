/*
 * AppDrawer.tsx
 * Copyright: Ouranos Studio 2019
 */

import FilledButton from 'common/FilledButton/FilledButton'
import Image from 'common/Image/Image'
import Link from 'common/Link/Link'
// import Text from 'common/Text/Text'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import Styles from 'src/ts/app/Styles'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { Routes } from 'src/ts/models/common'
import { User } from 'src/ts/models/FoodModels'
import ImageSource from 'src/ts/modules/images/index.web'
import { navigate } from 'src/ts/utilities'


const BRAND_IMAGE_WIDTH = 135
const BRAND_IMAGE_HEIGHT = 50

interface AppDrawerProps {
  user?: User,
}

interface AppDrawerState {
  activeLink: number
}

export default class AppDrawer extends ComponentBase<AppDrawerProps, AppDrawerState> {
  constructor(props: AppDrawerProps) {
    super(props)

    this.state = {
      activeLink: 0,
    }
  }

  render() {
    const { user } = this.props
    // const { activeLink } = this.state

    return (
      <RX.View style={{ padding: Styles.values.spacingLarge }}>
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
                  onPress={this._handleActiveChange(0)}
                  to={`/${user.username}`}
                  style={{ alignSelf: 'center', marginTop: Styles.values.spacing, marginBottom: Styles.values.spacing }}
                >
                  <Image source={user.imageUrl!.url} style={styles.avatar} />
                </Link>,
                /*<Link
                  key={1}
                  onPress={this._handleActiveChange(1)}
                  to={`/`}
                  style={Object.assign({}, styles.link, { color: activeLink === 1 ? '#fff' : '#4a4a4a' })}><Text
                  translate>Path</Text></Link>,
                <Link
                  key={2}
                  onPress={this._handleActiveChange(2)}
                  to={`${Routes.mealPlan}`}
                  style={Object.assign({}, styles.link, { color: activeLink === 2 ? '#fff' : '#4a4a4a' })}><Text
                  translate>MealPlan</Text></Link>,
                <Link
                  key={3}
                  onPress={this._handleActiveChange(3)}
                  to={`/explore`}
                  style={Object.assign({}, styles.link, { color: activeLink === 3 ? '#fff' : '#4a4a4a' })}><Text
                  translate>Explore</Text></Link>,
                <Link
                  key={4}
                  onPress={this._handleActiveChange(4)}
                  to={`/${user.username}`}
                  style={Object.assign({}, styles.link, { color: activeLink === 4 ? '#fff' : '#4a4a4a' })}><Text
                  translate>Profile</Text></Link>,*/
              ]
            } else {
              return <FilledButton onPress={() => navigate(this.props, Routes.login)} label={'LoginForm'} />
            }
          })()
        }
      </RX.View>
    )
  }

  private _handleActiveChange = (index: number) => () => {
    let toValue = 0

    switch (index) {
      case 0:
        toValue = 90 + Styles.values.spacing
        break
      case 1:
        toValue = 152 + (Styles.values.spacing * 2)
        break
      case 2:
        toValue = 206 + (Styles.values.spacing * 2)
        break
      case 3:
        toValue = 261 + (Styles.values.spacing * 2)
        break
      case 4:
        toValue = 315 + (Styles.values.spacing * 2)
        break
    }

    this.setState({
      activeLink: index,
    })
    RX.Animated.timing(this._activeIndicatorTop, {
      toValue,
      duration: 500,
    })
      .start()
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

  private _activeIndicatorTop = RX.Animated.createValue(90 + Styles.values.spacing)
  private _activeIndicatorAnimationStyle = RX.Styles.createAnimatedViewStyle({
    top: this._activeIndicatorTop,
  })
}

const styles = {
  activeIndicator: RX.Styles.createViewStyle({
    width: Styles.values.drawerWidth + Styles.values.spacing * 2,
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
    alignSelf: 'center',
  }),
  link: RX.Styles.createTextStyle({
    // @ts-ignore
    transition: 'color 0.5s',
    fontSize: Styles.fontSizes.size16,
    [Styles.values.paddingStart]: Styles.values.spacing,
    paddingVertical: Styles.values.spacing,
  }),
  avatar: RX.Styles.createImageStyle({
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  })
}
