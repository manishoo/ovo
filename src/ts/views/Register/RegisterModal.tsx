/*
 * RegisterModal.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import { ComponentBase } from 'resub'
import Styles from 'src/ts/app/Styles'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { navigate } from 'src/ts/utilities'


const REGISTER_WINDOW_DIMENSION = 600
const REGISTER_WINDOW_BORDER_RADIUS = 20

interface RegisterModalState {
  isTinyOrSmall: boolean
}

export default class RegisterModal extends ComponentBase<{}, RegisterModalState> {
  private _modalOpacity = RX.Animated.createValue(0)
  private _modalAnimatedStyle = RX.Styles.createAnimatedViewStyle({
    opacity: this._modalOpacity,
  })

  componentDidMount(): void {
    RX.Animated.timing(this._modalOpacity, {
      toValue: 1,
    }).start()
  }

  public dismiss = (callback: () => void) => {
    RX.Animated.timing(this._modalOpacity, {
      toValue: 0,
    }).start(callback)
  }

  public render() {
    const RegisterWindow = () => (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.Animated.View
            style={this.state.isTinyOrSmall ? [styles.container, this._modalAnimatedStyle] : [styles.login, { backgroundColor: theme.colors.loginModalBG }]}>
            <RX.Text style={styles.closeButton}
                     onPress={() => this.dismiss(() => navigate(this.props, 'back'))}>X</RX.Text>
          </RX.Animated.View>
        )}
      </ThemeContext.Consumer>
    )

    if (this.state.isTinyOrSmall) {
      return <RegisterWindow />
    }

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.Animated.View
            style={[styles.container, { backgroundColor: theme.colors.modalBackDrop }, this._modalAnimatedStyle]}
          >
            <RegisterWindow />
          </RX.Animated.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  protected _buildState(props: RX.CommonProps, initialBuild: boolean): Partial<RegisterModalState> | undefined {
    return {
      isTinyOrSmall: ResponsiveWidthStore.isSmallOrTinyScreenSize()
    }
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }),
  login: RX.Styles.createViewStyle({
    flex: 0,
    width: REGISTER_WINDOW_DIMENSION,
    height: REGISTER_WINDOW_DIMENSION,
    borderRadius: REGISTER_WINDOW_BORDER_RADIUS
  }),
  closeButton: RX.Styles.createViewStyle({
    padding: Styles.values.spacing,
    position: 'absolute',
    top: 0,
    left: 0,
  })
}
