/*
 * Styles.ts
 * Copyright: Ouranos Studio 2019
 */

import AppConfig from '@App/AppConfig'
import { default as FontRefs } from '@Modules/fonts'
import RX from 'reactxp'


export default class Styles {
  public static values = {
    spacing: 16,
    spacingLarge: 20,
    navBarHeight: 72,
    drawerWidth: 200,
    mainContentMaxWidth: 975,
    defaultShadow: {
      shadowColor: 'rgba(0, 0, 0, .3)',
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: -1
    },

    normalBorderRadius: 5,

    get start() {
      return AppConfig.isRTL() ? 'right' : 'left'
    },
    get end() {
      return AppConfig.isRTL() ? 'left' : 'right'
    },

    get Start() {
      return AppConfig.isRTL() ? 'Right' : 'Left'
    },
    get End() {
      return AppConfig.isRTL() ? 'Left' : 'Right'
    },

    get marginStart() {
      return `margin${this.Start}`
    },
    get marginEnd() {
      return `margin${this.End}`
    },
    get paddingStart() {
      return `padding${this.Start}`
    },
    get paddingEnd() {
      return `padding${this.End}`
    },

    get borderTopEndRadius() {
      return `borderTop${this.End}Radius`
    },
    get borderTopStartRadius() {
      return `borderTop${this.Start}Radius`
    },

    get borderBottomEndRadius() {
      return `borderBottom${this.End}Radius`
    },
    get borderBottomStartRadius() {
      return `borderBottom${this.Start}Radius`
    },

    get borderEndWidth() {
      return `border${this.End}Width`
    },
    get borderStartWidth() {
      return `border${this.Start}Width`
    },

    absolutelyExtended: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
    } as any
  }

  public static fontSizes = {
    size12: 12,
    size14: 14,
    size16: 16,
    size20: 20,
    size32: 32,

    menuItem: 16
  }

  public static fonts = {
    monospace: {
      fontFamily: FontRefs.monospace,
    } as RX.Types.FontInfo,

    fa: {
      displayLight: {
        fontFamily: FontRefs.displayFaLight,
      } as RX.Types.FontInfo,
      displayRegular: {
        fontFamily: FontRefs.displayFaRegular,
        fontWeight: '400'
      } as RX.Types.FontInfo,
      displaySemibold: {
        fontFamily: FontRefs.displayFaSemibold,
        fontWeight: '600'
      } as RX.Types.FontInfo,
      displayBold: {
        fontFamily: FontRefs.displayFaBold,
        fontWeight: '700'
      } as RX.Types.FontInfo,
    },

    en: {
      displayLight: {
        fontFamily: FontRefs.displayEnLight,
      } as RX.Types.FontInfo,
      displayRegular: {
        fontFamily: FontRefs.displayEnRegular,
        fontWeight: '400'
      } as RX.Types.FontInfo,
      displaySemibold: {
        fontFamily: FontRefs.displayEnSemibold,
        fontWeight: '600'
      } as RX.Types.FontInfo,
      displayBold: {
        fontFamily: FontRefs.displayEnBold,
        fontWeight: '700'
      } as RX.Types.FontInfo,
    },

    displayLight: {
      fontFamily: FontRefs.displayLight,
    } as RX.Types.FontInfo,
    displayRegular: {
      fontFamily: FontRefs.displayRegular,
      fontWeight: '400'
    } as RX.Types.FontInfo,
    displaySemibold: {
      fontFamily: FontRefs.displaySemibold,
      fontWeight: '600'
    } as RX.Types.FontInfo,
    displayBold: {
      fontFamily: FontRefs.displayBold,
      fontWeight: '700'
    } as RX.Types.FontInfo,
  }
}
