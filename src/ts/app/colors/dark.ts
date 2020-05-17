/*
 * dark.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

const primary = '#00BA72' //#00c54f #00BA72
const primaryDarker = '#009B60'
const red = '#d32f2f'
const text = '#b5b5b5'

const DarkPalette = {
  primary,
  bg: '#000',
  cardBg: '#050505',
  svgInactive: '#252525',

  text,
  hamburger: text,
  textDark: '#cbc5be',
  calendarCircleInactive: '#111111',
  textLight: '#000000',
  borderLight: '#111111',
  mealItemBorder: 'rgba(0, 186, 114, 0.5)',

  assistantLinearGradient1: '#4856DC',
  assistantLinearGradient2: '#1F2CAA',
  secondary: '#22203E',

  flatButtonBorderColor: primary,
  flatButtonBGColor: '#000',
  flatButtonTextColor: primary,
  flatButtonInactiveTextColor: '#111111',
  flatButtonInactiveBorderColor: '#111111',
  ingredientServingControlBorder: '#050505',

  selectBorderColor: primary,

  userMealsMealItemBG: primary,
  userMealsInputBG: 'rgba(255, 255, 255, 0.38)',
  userMealsInputText: '#000',

  calendarDayName: text,

  grey1: 'grey',
  subtitle: '#515151',
  grey2: '#111111',
  white: '#000',
  yellow: '#F8CD1C',
  orange: '#F9B111',
  mutedBlack: '#313131',

  labelInput: '#4a4a4a',
  inputErrorColor: '#d32f2f',
  largeHeading: '#313131',

  toast: {
    success: '#00BA72',
    error: '#d32f2f',
    default: text,
  },

  red: '#d32f2f',
  lighterRed: '#e68888',
  darkerRed: '#a92626',
  darkestRed: '#7d1d1d',

  mealCardBackgroundColor: '#000',
  mealItemSubtitle: text,
  planDayName: '#000',
  submitButtonBorderColor: '#111111',
  submitButtonBackgroundColor: '#000',
  navbarBackButtonColor: primary,
  authLoadingBg: '#000',
  pathLine: '#D33131',
  pathDateSubtitle: '#646464',
  goToTodayBorder: '#F23E3E',
  activeMealItemBorderColor: '#D33131',
  ingredientUnit: '#F23E3E',
  FoodPickerDialogSearchBG: 'rgba(142, 142, 147, 0.12)',
  drawerBg: '#000',
  drawerBorderColor: '#111111',
  drawerActiveIndicator: primary,
  modalBackDrop: 'rgba(0, 0, 0, 0.4)',
  loginModalBG: '#000',
  // inputBorderColor: '#e3e3e3',
  termsText: '#7c7c7c',
  checkboxFilled: primary,
  mutedText: '#3f3f3f',

  filledButtonBG: primary,
  filledButtonDefaultModeBG: '#000000',
  filledButtonDefaultHoverBG: '#0d0d0d',
  filledButtonDefaultModeBorder: '#0d0d0d',
  filledButtonPrimaryModeBorder: '#029e62',
  filledButtonDefaultModeTextColor: '#4d4d4f',
  filledButtonText: '#000',
  filledButtonHoverBG: primaryDarker,
  filledButtonDisabledTextColor: '#B2B2B0',
  filledButtonDisabledBG: '#0a0a07',
  createRecipeTextInputBG: '#0a0a07',
  linkColor: primary,
  recipeSeparatorBorderColor: '#111111',
  authorAndDescriptionSectionDateColor: '#646464',
  searchIconBG: '#000',
  searchContainerBG: '#000',
  searchContainerBackdropBG: 'rgba(0, 0, 0, 0.5)',
  previewRowBorderColor: '#222222',
  recipeCardLikeText: '#000',
  recipeCardTimingUnitColor: '#000',
  recipeCardTimingNumberColor: '#000',
  recipeCardImagePlaceholderBG: '#0a0a07',
  recipeCardImagePlaceholderBGOnHover: '#1a1a17',

  addCardBorder: '#FDCE0B',
  addRecipeCardCircleBG: '#FDCE0B',
  addRecipeCardCirclePlus: '#000',
  addRecipeCardText: '#fdb926',

  recipeIngredientUnitBG: primary,
  recipeIngredientUnitTextColor: '#000',
  recipeIngredientRequiredBG: 'orange',
  recipeIngredientRequiredTextColor: '#000',

  tabBarBG: '#000',
  loginButtonTextColor: primary,
  assistantBG: '#1F2CAA',
  assistantMessageBG: '#313EC0',
  assistantUserMessageBG: primary,
  assistantUserMessageTextColor: '#000',

  assistantFaceColor: '#fefa03',

  landingSubtitle: text,
  landingFooterBG: '#1F2CAA',

  sectionCircle: '#FFDE34',

  landingSectionTitle: text,
  landingSectionSubtitle: text,
  footerTitleColor: text,
  footerLinkColor: primary,
  textInputBg: '#0a0a07',
  textInputBgHovering: '#20201d',
  inputValidColor: primary,
  inputInvalidColor: '#D44539',

  calendarEmptyStateBG: '#050505',
  reviewRecipesUnreadIndicatorBg: red,
  reviewRecipesUnreadIndicatorText: '#000',

  footerBorderColor: '#111111'
}

export default DarkPalette
