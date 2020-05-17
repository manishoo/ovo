/*
 * Popup.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { useCallback, useRef } from 'react'
import RX from 'reactxp'
import { PopupPopup, showPopupDialog } from './components/PopupDialog'


const POPUP_ID = 'Popup'

interface PopupProps {
  style?: any,
  children: any,
  anchor: any,
}

const Popup = ({ style, children, anchor }: PopupProps) => {
  const mountedButton = useRef<any>()

  const _showPopup = useCallback(() => {
    let popupOptions: RX.Types.PopupOptions = {
      getAnchor: () => {
        return mountedButton.current
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
  }, [mountedButton.current, children])

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
      ref={ref => mountedButton.current = ref}
      ignorePointerEvents
    >
      {anchor}
    </RX.View>
  )
}

export default Popup

const styles = {
  selectContainer: RX.Styles.createViewStyle({
    cursor: 'pointer',
  }),
}
