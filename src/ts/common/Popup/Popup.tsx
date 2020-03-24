/*
 * Popup.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { useState } from 'react'
import RX from 'reactxp'
import { PopupPopup, showPopupDialog } from './components/PopupDialog'


const POPUP_ID = 'Popup'

interface PopupProps {
  style?: any,
  children: any,
  anchor: any,
}

const Popup = ({ style, children, anchor }: PopupProps) => {
  const [mountedButton, setMountedButton] = useState()

  const _showPopup = () => {
    let popupOptions: RX.Types.PopupOptions = {
      getAnchor: () => {
        return mountedButton
      },
      renderPopup: (anchorPosition: RX.Types.PopupPosition, anchorOffset: number, popupWidth: number, popupHeight: number) => {
        return (
          <PopupPopup
            anchorPosition={anchorPosition}
            anchorOffset={anchorOffset}
            popupWidth={popupWidth}
            popupHeight={popupHeight}
          >
            {children}
          </PopupPopup>
        )
      },
      positionPriorities: ['bottom', 'left', 'right', 'top'],
      useInnerPositioning: false,
      dismissIfShown: true,
      cacheable: true,
      rootViewId: 'bodyb',
      onDismiss: () => {
        // setPopupDisplayed(false)
      }
    }

    RX.Popup.show(popupOptions, POPUP_ID)
    // setPopupDisplayed(true)
  }

  const _handleOnPress = () => {
    if (RX.Platform.getType() === 'web') {
      _showPopup()
    } else {
      showPopupDialog({
        children,
      })
    }
  }

  return (
    <RX.View
      style={[styles.selectContainer, style]}
      onPress={_handleOnPress}
      activeOpacity={0.7}
      ref={ref => setMountedButton(ref)}
      ignorePointerEvents
    >
      {anchor}
    </RX.View>
  )
}

export default Popup

/*
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
*/

const styles = {
  selectContainer: RX.Styles.createViewStyle({
    cursor: 'pointer',
  }),
}
