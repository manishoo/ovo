/*
 * Popup.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import { PopupPopup, showPopupDialog } from './components/PopupDialog'


const POPUP_ID = 'Popup'

export interface Option {
  value: any,
  text: any,
}

interface PopupProps {
  style?: any,
  children: any,
  anchor: any,
}

export default class Popup extends RX.Component<PopupProps> {
  private _mountedButton: any
  private _popupDisplayed: boolean = false

  public render() {
    const { style } = this.props

    return (
      <RX.View
        style={[styles.selectContainer, style]}
        onPress={this._handleOnPress}
        activeOpacity={0.7}
        ref={ref => this._mountedButton = ref}
        ignorePointerEvents
      >
        {this.props.anchor}
      </RX.View>
    )
  }

  private _showPopup = () => {
    let popupOptions: RX.Types.PopupOptions = {
      getAnchor: () => {
        return this._mountedButton
      },
      renderPopup: (anchorPosition: RX.Types.PopupPosition, anchorOffset: number, popupWidth: number, popupHeight: number) => {
        return (
          <PopupPopup
            anchorPosition={anchorPosition}
            anchorOffset={anchorOffset}
            popupWidth={popupWidth}
            popupHeight={popupHeight}
          >
            {this.props.children}
          </PopupPopup>
        )
      },
      positionPriorities: ['bottom', 'left', 'right', 'top'],
      useInnerPositioning: false,
      onDismiss: () => {
        this._popupDisplayed = false
      }
    }

    RX.Popup.show(popupOptions, POPUP_ID)
    this._popupDisplayed = true
  }

  private _handleOnPress = () => {
    if (RX.Platform.getType() === 'web') {
      this._showPopup()
    } else {
      showPopupDialog({
        children: this.props.children,
      })
    }
  }
}

const styles = {
  selectContainer: RX.Styles.createViewStyle({
    cursor: 'pointer',
  }),
}
