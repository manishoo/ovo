/*
 * Theme.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { default as FontRefs } from '@Modules/fonts'
import RX from 'reactxp'


export class Theme {
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

  constructor(public mode: 'dark' | 'light' = 'dark') {
    // noop
  }

  public get colors() {
    switch (this.mode) {
      case 'dark':
      default:
      case 'light': {
        const primary = '#00BA72' //#00c54f #00BA72
        const primaryDarker = '#009B60'
        const red = '#d32f2f'
        const text = '#515B66'

        return {
          primary,
          bg: '#fafafa',
          cardBg: '#fff',

          text,
          borderLight: '#eee',
          mealItemBorder: 'rgba(0, 186, 114, 0.5)',

          assistantLinearGradient1: '#4856DC',
          assistantLinearGradient2: '#1F2CAA',
          secondary: '#22203E',

          flatButtonBorderColor: primary,
          flatButtonBGColor: '#fff',
          flatButtonTextColor: primary,
          flatButtonInactiveTextColor: '#eee',
          flatButtonInactiveBorderColor: '#eee',
          ingredientServingControlBorder: '#FAFAFA',

          selectBorderColor: primary,

          userMealsMealItemBG: primary,
          userMealsInputBG: 'rgba(255, 255, 255, 0.38)',
          userMealsInputText: '#fff',

          calendarDayName: text,

          grey1: 'grey',
          subtitle: '#aeaeae',
          grey2: '#eee',
          white: '#fff',
          yellow: '#F8CD1C',
          orange: '#F9B111',
          mutedBlack: '#313131',

          labelInput: '#444444',
          inputErrorColor: '#d32f2f',
          largeHeading: '#cecece',

          toast: {
            success: '#00BA72',
            error: '#d32f2f',
            default: text,
          },

          red: '#d32f2f',
          lighterRed: '#e68888',
          darkerRed: '#a92626',
          darkestRed: '#7d1d1d',

          mealCardBackgroundColor: '#fff',
          mealItemSubtitle: text,
          mealPlanDayName: '#fff',
          submitButtonBorderColor: '#eee',
          submitButtonBackgroundColor: '#fff',
          navbarBackButtonColor: primary,
          authLoadingBg: '#fff',
          pathLine: '#D33131',
          pathDateSubtitle: '#9B9B9B',
          goToTodayBorder: '#F23E3E',
          activeMealItemBorderColor: '#D33131',
          ingredientUnit: '#F23E3E',
          FoodPickerDialogSearchBG: 'rgba(142, 142, 147, 0.12)',
          drawerBg: '#fff',
          drawerBorderColor: '#eee',
          drawerActiveIndicator: primary,
          modalBackDrop: 'rgba(0, 0, 0, 0.4)',
          loginModalBG: '#fff',
          // inputBorderColor: '#e3e3e3',
          termsText: '#838383',
          checkboxFilled: primary,
          mutedText: '#c0c0c0',

          filledButtonBG: primary,
          filledButtonDefaultModeBG: '#fff',
          filledButtonDefaultHoverBG: '#F2F2F2',
          filledButtonDefaultModeBorder: '#F2F2F2',
          filledButtonDefaultModeTextColor: '#B2B2B0',
          filledButtonText: '#fff',
          filledButtonHoverBG: primaryDarker,
          filledButtonDisabledTextColor: '#B2B2B0',
          filledButtonDisabledBG: '#F5F5F8',
          createRecipeTextInputBG: '#f5f5f8',
          linkColor: primary,
          recipeSeparatorBorderColor: '#eee',
          authorAndDescriptionSectionDateColor: '#9B9B9B',
          searchIconBG: '#fff',
          searchContainerBG: '#fff',
          searchContainerBackdropBG: 'rgba(0, 0, 0, 0.5)',
          previewRowBorderColor: '#ddd',
          recipeCardLikeText: '#fff',
          recipeCardTimingUnitColor: '#fff',
          recipeCardTimingNumberColor: '#fff',
          recipeCardImagePlaceholderBG: '#F5F5F8',
          recipeCardImagePlaceholderBGOnHover: '#e5e5e8',

          addCardBorder: '#FDCE0B',
          addRecipeCardCircleBG: '#FDCE0B',
          addRecipeCardCirclePlus: '#fff',
          addRecipeCardText: '#fdb926',

          recipeIngredientUnitBG: primary,
          recipeIngredientUnitTextColor: '#fff',
          recipeIngredientRequiredBG: 'orange',
          recipeIngredientRequiredTextColor: '#fff',

          tabBarBG: '#fff',
          loginButtonTextColor: primary,
          assistantBG: '#1F2CAA',
          assistantMessageBG: '#313EC0',
          assistantUserMessageBG: primary,
          assistantUserMessageTextColor: '#fff',

          assistantFaceColor: '#fefa03',

          landingSubtitle: text,
          landingFooterBG: '#1F2CAA',

          sectionCircle: '#FFDE34',

          landingSectionTitle: text,
          landingSectionSubtitle: text,
          footerTitleColor: text,
          footerLinkColor: primary,
          textInputBg: '#F5F5F8',
          textInputBgHovering: '#dfdfe2',
          inputValidColor: primary,
          inputInvalidColor: '#D44539',

          calendarEmptyStateBG: '#fafafa',
          reviewRecipesUnreadIndicatorBg: red,
          reviewRecipesUnreadIndicatorText: '#fff',

          footerBorderColor: '#eee'
        }
      }
    }
  }
}
