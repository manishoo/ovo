/*
 * Styles.ts
 * Copyright: Ouranos Studio 2019
 */

import { default as FontRefs } from 'modules/fonts'
import RX from 'reactxp'
import AppConfig from 'src/ts/app/AppConfig'

export default class Styles {
	public static values = {
		spacing: 16,
		spacingLarge: 20,
		navBarHeight: 50,
		drawerWidth: 250,
		mainContentMaxWidth: 975,
		defaultShadow: {
			shadowColor: 'rgba(0, 0, 0, .12)',
			shadowRadius: 10,
		},
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