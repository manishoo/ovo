/*
 * PopupDialog.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { fullHeight } from '@Utils'
import RX from 'reactxp'
import { ComponentBase } from 'resub'


interface PopupDialogProps {
  style?: any,
  onDismiss?: () => void,
  children: any,
}

interface PopupDialogState {
  height: number,
}

export const MODAL_ID = 'selectDialog'

export function showPopupDialog(props: PopupDialogProps) {
  RX.Modal.show(
    <PopupDialog
      {...props}
    />,
    MODAL_ID
  )
}

export class PopupPopup extends RX.Component<PopupDialogProps & { anchorPosition: RX.Types.PopupPosition, anchorOffset: number, popupWidth: number, popupHeight: number }> {
  public render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View style={[styles.container, {
            backgroundColor: theme.colors.white,
            borderColor: theme.colors.selectBorderColor
          }, this.props.style]}>
            {this.props.children}
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default class PopupDialog extends ComponentBase<PopupDialogProps & RX.CommonProps, PopupDialogState> {
  _containerBottomAnimatedValue: RX.Animated.Value = RX.Animated.createValue(fullHeight()) //FIXME wrong!
  _backDropOpacityAnimatedValue: RX.Animated.Value = RX.Animated.createValue(0)
  private _containerAnimationStyle = RX.Styles.createAnimatedViewStyle({
    transform: [{ translateY: this._containerBottomAnimatedValue }]
  })
  private _backDropAnimationStyle = RX.Styles.createAnimatedViewStyle({
    opacity: this._backDropOpacityAnimatedValue,
  })

  public render() {
    const { style } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View style={styles.topContainer}>
            <RX.Animated.View
              onPress={this._dismiss}
              style={[styles.backDrop, this._backDropAnimationStyle]}
            />
            <RX.Animated.View
              style={[
                {
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                },
                this._containerAnimationStyle,
              ]}
            >
              <RX.View style={[styles.container, { backgroundColor: theme.colors.white }, style]}>
                {this.props.children}
              </RX.View>
            </RX.Animated.View>
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  componentDidMount(): void {
    this._setUI(true)
  }

  protected _buildState(props: PopupDialogProps, initialBuild: boolean): Partial<PopupDialogState> | undefined {
    return {
      height: ResponsiveWidthStore.getHeight(),
    }
  }

  private _setUI = (show: boolean, cb?: () => void) => {
    RX.Animated.parallel([
      RX.Animated.timing(this._backDropOpacityAnimatedValue, {
        toValue: show ? 0.8 : 0,
      }),
      RX.Animated.timing(this._containerBottomAnimatedValue, {
        toValue: show ? 0 : this.state.height,
      }),
    ]).start(cb)
  }

  private _dismiss = () => {
    const { onDismiss } = this.props

    this._setUI(false, () => {
      RX.Modal.dismiss(MODAL_ID)
      onDismiss ? onDismiss() : null
    })
  }
}

const styles = {
  topContainer: RX.Styles.createViewStyle({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: RX.UserInterface.measureWindow().width,
    height: RX.UserInterface.measureWindow().height,
  }),
  container: RX.Styles.createViewStyle({
    borderRadius: Styles.values.spacing / 2,
    cursor: 'pointer',
    borderWidth: 1,
  }),
  backDrop: RX.Styles.createViewStyle({
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#000',
  })
}
