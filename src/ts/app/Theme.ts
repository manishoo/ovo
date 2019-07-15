/*
 * Theme.ts
 * Copyright: Ouranos Studio 2019
 */
import RX from 'reactxp'
import {default as FontRefs} from 'modules/fonts'
import AppConfig from 'src/ts/app/AppConfig'

class Theme {
	public styles = {
		spacing: 16,
		spacingLarge: 20,
		navBarHeight: 50,
		drawerWidth: 250,
		mainContentMaxWidth: 975,
		defaultShadow: {
			shadowColor: 'rgba(0, 0, 0, .12)',
			shadowRadius: 10,
		},
		get start() {return AppConfig.isRTL() ? 'right' : 'left'},
		get end() {return AppConfig.isRTL() ? 'left' : 'right'},

		// for use in example: marginRight
		get Start() {return AppConfig.isRTL() ? 'Right' : 'Left'},
		get End() {return AppConfig.isRTL() ? 'Left' : 'Right'},

		get marginStart() {return `margin${this.Start}`},
		get marginEnd() {return `margin${this.End}`},
		get paddingStart() {return `padding${this.Start}`},
		get paddingEnd() {return `padding${this.End}`},

		get borderTopEndRadius() {return `borderTop${this.End}Radius`},
		get borderTopStartRadius() {return `borderTop${this.Start}Radius`},

		get borderBottomEndRadius() {return `borderBottom${this.End}Radius`},
		get borderBottomStartRadius() {return `borderBottom${this.Start}Radius`},
	}

	public colors = {
		primary: '#F23E3E',
		assistantLinearGradient1: '#4856DC',
		assistantLinearGradient2: '#1F2CAA',
		secondary: '#22203E',

		grey1: 'grey',
		subtitle: '#ddd',
		grey2: '#eee',
		white: '#fff',
		yellow: '#F8CD1C',
		orange: '#F9B111',
		mutedBlack: '#313131',

		labelInput: '#444444',
		largeHeading: '#cecece',

		red: '#d32f2f',

		// listOfColors: [
		// 	'#cddc39',
		// 	'#fdd835',
		// 	'#e53935',
		// ],

		mealCardBackgroundColor: '#fff',
		mealItemSubtitle: '#4A4A4A',
		mealPlanDayName: '#fff',
		submitButtonBorderColor: '#eee',
		submitButtonBackgroundColor: '#fff',
		navbarBackButtonColor: '#000',
		authLoadingBg: '#fff',
		pathLine: '#D33131',
		pathDateSubtitle: '#9B9B9B',
		goToTodayBorder: '#F23E3E',
		activeMealItemBorderColor: '#D33131',
		ingredientUnit: '#F23E3E',
		foodDialogSearchBG: 'rgba(142, 142, 147, 0.12)',
		drawerBg: '#fff',
		drawerBorderColor: '#eee',
		modalBackDrop: 'rgba(0, 0, 0, 0.4)',
		loginModalBG: '#fff',
		inputBorderColor: '#e3e3e3',
		termsText: '#838383',
		checkboxFilled: '#FFDE34',
		mutedText: '#c0c0c0',

		filledButtonBG: '#fff',
		filledButtonText: '#1D2697',
		filledButtonHoverBG: '#fafafa',
		createRecipeTextInputBG: 'rgba(216, 216, 216, .46)',
		linkColor: '#4a4a4a',
		recipeSeparatorBorderColor: '#eee',
		authorAndDescriptionSectionDateColor: '#9B9B9B',
		searchIconBG: '#fff',
		searchContainerBG: '#fff',
		searchContainerBackdropBG: 'rgba(0, 0, 0, 0.5)',
		previewRowBorderColor: '#ddd',
		recipeCardLikeText: '#fff',
		recipeCardTimingUnitColor: '#fff',
		recipeCardTimingNumberColor: '#fff',
		recipeCardImagePlaceholderBG: '#eee',
		tabBarBG: '#fff',
		loginButtonTextColor: 'red',
		assistantBG: '#1F2CAA',
		assistantMessageBG: '#313EC0',
		assistantUserMessageBG: '#fff',
		assistantUserMessageTextColor: '#1B2492',

		assistantFaceColor: '#fefa03',

		landingSubtitle: '#4A4A4A',
		landingFooterBG: '#1F2CAA',

		sectionCircle: '#FFDE34',

		landingSectionTitle: '#4a4a4a',
		landingSectionSubtitle: '#4a4a4a',
		footerTitleColor: '#99A3FF',
		footerLinkColor: '#fff',
	}

	public fontSizes = {
		size12: 12,
		size14: 14,
		size16: 16,
		size20: 20,
		size32: 32,

		menuItem: 16
	}

	public fonts = {
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

const theme = new Theme()

export default theme