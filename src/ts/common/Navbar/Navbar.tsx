/*
 * Navbar.tsx
 * Copyright: Ouranos Studio 2019
 */

import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import Text from '@Common/Text/Text'
import ImageSource from '@Modules/images'
import { withMobileNavigation } from '@Modules/navigator'
import LocationStore from '@Services/LocationStore'
import RX from 'reactxp'


interface NavbarProps {
  style?: any,
  title?: string,
  inModal?: boolean,
  onBackPress?: () => void,
}

@withMobileNavigation
export default class Navbar extends RX.Component<NavbarProps> {
  public render() {
    const { style } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[styles.container, { height: Styles.values.navBarHeight }, style]}
          >
            <RX.View style={{ flexDirection: 'row' }}>
              {this.renderBackButton(theme)}
              <RX.Text style={styles.titleContainer}>
                <RX.Text style={[styles.title, { fontSize: 18, }]}>{this.props.title}</RX.Text>
              </RX.Text>
            </RX.View>
            {this.props.children}
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _handleBack = () => {
    const { inModal } = this.props

    if (inModal) {
      return this.props.onBackPress()
    }

    LocationStore.navigate(this.props, 'back')
  }

  private renderBackButton = (theme: Theme) => (
    <RX.View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onPress={this._handleBack}
    >
      <RX.Image
        source={ImageSource.Back}
        style={styles.backImage}
      />
      <Text translate style={[styles.backText, { color: theme.colors.navbarBackButtonColor }]}>Back</Text>
    </RX.View>
  )
}

const styles = {
  container: RX.Styles.createViewStyle({
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: Styles.values.spacing * 2,
    // backgroundColor: 'red',
  }),
  backText: RX.Styles.createTextStyle({
    fontWeight: '500',
    [Styles.values.marginStart]: 5,
  }),
  backImage: RX.Styles.createImageStyle({
    width: 12,
    height: 21,
    transform: [{ rotate: AppConfig.isRTL() ? '180deg' : '0deg' }]
  }),
  titleContainer: RX.Styles.createViewStyle({
    // position: 'absolute',
    // left: 0,
    // right: 0,
    [Styles.values.marginStart]: Styles.values.spacing,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: RX.Styles.createTextStyle({
    textAlign: 'center',
    fontWeight: 'bold',
  }),
}
