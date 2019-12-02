/*
 * Theme.ts
 * Copyright: Ouranos Studio 2019
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
        const primary = '#07AF47' //#00c54f #00BA72
        const primaryDarker = '#05863e'

        return {
          primary,
          bg: '#fff',

          text: '#4a4a4a',
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

          calendarDayName: '#4a4a4a',

          grey1: 'grey',
          subtitle: '#757575',
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
            default: '#4a4a4a',
          },

          red: '#d32f2f',
          darkerRed: '#a92626',

          mealCardBackgroundColor: '#fff',
          mealItemSubtitle: '#4A4A4A',
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

          tabBarBG: '#fff',
          loginButtonTextColor: 'red',
          assistantBG: '#1F2CAA',
          assistantMessageBG: '#313EC0',
          assistantUserMessageBG: primary,
          assistantUserMessageTextColor: '#fff',

          assistantFaceColor: '#fefa03',

          landingSubtitle: '#4A4A4A',
          landingFooterBG: '#1F2CAA',

          sectionCircle: '#FFDE34',

          landingSectionTitle: '#4a4a4a',
          landingSectionSubtitle: '#4a4a4a',
          footerTitleColor: '#99A3FF',
          footerLinkColor: '#fff',
          textInputBg: '#F5F5F8',
          inputValidColor: primary,
          inputInvalidColor: '#D44539',

          calendarEmptyStateBG: '#fafafa',
        }
      }
    }
  }
}
