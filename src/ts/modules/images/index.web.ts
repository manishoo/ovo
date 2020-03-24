/*
 * index.web.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '../../app/AppConfig'
import { ImageSourceBase } from './Images'


class ImageSource implements ImageSourceBase {
  OvocadoTypo = AppConfig.getImagePath('OvocadoTypo.png')
  SettingsIcon = AppConfig.getImagePath('settings.png')
  AddRecipeCell = AppConfig.getImagePath('AddRecipeCell.png')
  PlusIcon = AppConfig.getImagePath('PlusIcon.png')
  SearchIcon = AppConfig.getImagePath('SearchIcon.png')
  CrossIcon = AppConfig.getImagePath('CrossIcon.png')
  HeartAnimationEdge = AppConfig.getImagePath('web_heart_animation_edge.png')
  SearchWhite = AppConfig.getImagePath('SearchWhite.svg')

  Search = AppConfig.getImagePath('Search.svg')
  SearchActive = AppConfig.getImagePath('SearchActive.svg')
  Rectangle = AppConfig.getImagePath('Rectangle.svg')
  RectangleActive = AppConfig.getImagePath('RectangleActive.svg')
  Calendar = AppConfig.getImagePath('Calendar.svg')
  CalendarActive = AppConfig.getImagePath('CalendarActive.svg')
  ShoppingList = AppConfig.getImagePath('ShoppingList.svg')
  ShoppingListActive = AppConfig.getImagePath('ShoppingListActive.svg')

  Brand = AppConfig.getImagePath('Brand.png')
  BrandWhite = AppConfig.getImagePath('BrandWhite.svg')
  Phone = AppConfig.getImagePath('Phone.png')
  Assistant = AppConfig.getImagePath('Assistant.svg')
  AssistantNM = AppConfig.getImagePath('AssistantNM.svg')
  PaperPlane = AppConfig.getImagePath('PaperPlane.png')
  ArrowDownCircle = AppConfig.getImagePath('arrow-down-circle.svg')

  SC1 = AppConfig.getImagePath('SC1.png')
  SC2 = AppConfig.getImagePath('SC2.png')
  SC3 = AppConfig.getImagePath('SC3.png')
  SC4 = AppConfig.getImagePath('SC4.png')

  LandingCurve = AppConfig.getImagePath('LandingCurve.svg')
  AssistantExtra = AppConfig.getImagePath('AssistantExtra.png')
  AssistantExtraWhite = AppConfig.getImagePath('AssistantExtraWhite.png')

  FaceBookIcon = AppConfig.getImagePath('FB.svg')
  YoutubeIcon = AppConfig.getImagePath('YT.svg')
  TwitterIcon = AppConfig.getImagePath('TW.svg')
  PinterestIcon = AppConfig.getImagePath('PIN.svg')
  InstagramIcon = AppConfig.getImagePath('IN.svg')
  TelegramIcon = AppConfig.getImagePath('TEL.svg')

  Clear = AppConfig.getImagePath('Clear.svg')
  More = AppConfig.getImagePath('More.png')

  Back = AppConfig.getImagePath('Back.svg')
  BackDark = AppConfig.getImagePath('BackDark.svg')
  BackLight = AppConfig.getImagePath('BackLight.svg')
  Finger = AppConfig.getImagePath('Finger.png')

  KitchenIllustration = AppConfig.getImagePath('KitchenIllustration.png')

  Camera = AppConfig.getImagePath('Camera.png')
  RemoveIconWhite = AppConfig.getImagePath('RemoveIconWhite.png')

  Path = AppConfig.getImagePath('Path.png')
  Logo = AppConfig.getImagePath('Logo.png')

  Trash = AppConfig.getImagePath('Trash.svg')
  Cog = AppConfig.getImagePath('Cog.png')

  Ellipsis = AppConfig.getImagePath('Ellipsis.svg')
  Regenerate = AppConfig.getImagePath('Regenerate.svg')

  GooeyRingSpinner = AppConfig.getImagePath('GooeyRingSpinner.svg')

  AppStoreButton = AppConfig.getImagePath('AppStoreButton.png')
  GooglePlayButton = AppConfig.getImagePath('GooglePlayButton.png')
  CafeBazaarButton = AppConfig.getImagePath('CafeBazaarButton.png')

  VerifiedBadge = AppConfig.getImagePath('VerifiedBadge.svg')
  VerifyingBadge = AppConfig.getImagePath('VerifyingBadge.svg')

  Crown = AppConfig.getImagePath('Crown.svg')
  CrownEmpty = AppConfig.getImagePath('CrownEmpty.svg')

  Check = AppConfig.getImagePath('Check.svg')
}

export default new ImageSource()
