/*
 * Navbar.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import Back from '@Common/Back/Back'
import Modal, { ModalContext } from '@Common/Modal/Modal'
import Text from '@Common/Text/Text'
import { withMobileNavigation } from '@Modules/navigator'
import LocationStore from '@Services/LocationStore'
import RX from 'reactxp'


interface NavbarProps {
  style?: any,
  title?: string,
  onBackPress?: () => void,
}

@withMobileNavigation
export default class Navbar extends RX.Component<NavbarProps> {
  public render() {
    const { style } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <ModalContext.Consumer>
            {({ modalId, isRoute }) => (
              <RX.View
                style={[styles.container, { minHeight: Styles.values.navBarHeight }, style]}
              >
                {
                  // !modalId && AppConfig.getPlatformType() === 'web'
                  //   ? <RX.View />
                  //   : <RX.View style={{ flexDirection: 'row' }}>
                  //     <Back color={theme.colors.navbarBackButtonColor} onPress={this._handleBack(modalId, isRoute)} />
                  //     <RX.Text style={styles.titleContainer}>
                  //       <RX.Text style={[styles.title, { fontSize: 18, }]}>{this.props.title}</RX.Text>
                  //     </RX.Text>
                  //   </RX.View>
                }
                <RX.View style={{ flexDirection: 'row' }}>
                  <Back color={theme.colors.navbarBackButtonColor} onPress={this._handleBack(modalId, isRoute)} />
                  <Text style={styles.titleContainer}>
                    <Text style={[styles.title, { fontSize: 18, top: 3 }]}>{this.props.title}</Text>
                  </Text>
                </RX.View>
                {this.props.children}
              </RX.View>
            )}
          </ModalContext.Consumer>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _handleBack = (modalId?: string, isRoute?: boolean) => () => {
    if (modalId) {
      return Modal.dismissAnimated(modalId)
        .then(() => isRoute && LocationStore.navigate(this.props, 'back'))
    }

    return LocationStore.navigate(this.props, 'back')
  }
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
    paddingBottom: Styles.values.spacing,
    // backgroundColor: 'red',
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
