/*
 * index.native.ts
 * Copyright: Ouranos Studio 2019
 */

import { ImageSourceBase } from './Images'

// The React Native bundler handles resource paths at build time, so they need
// to be specified as full string literals (as opposed to being constructed
// programmatically in a helper method).

// We use accessors and "require" calls to defer loading of these images into
// memory until they are actually used. If we were to require them upfront,
// app launch times would increase substantially.
class ImageSource implements ImageSourceBase {
  get OvocadoTypo() {
    return require('../../../images/OvocadoTypo.png')
  }

  get SettingsIcon() {
    return require('../../../images/settings.png')
  }

  get AddRecipeCell() {
    return require('../../../images/AddRecipeCell.png')
  }

  get PlusIcon() {
    return require('../../../images/PlusIcon.png')
  }

  get SearchIcon() {
    return require('../../../images/SearchIcon.png')
  }

  get CrossIcon() {
    return require('../../../images/CrossIcon.png')
  }

  get HeartAnimationEdge() {
    return require('../../../images/web_heart_animation_edge.png')
  }

  get Search() {
    return require('../../../images/Search.png')
  }

  get SearchWhite() {
    return require('../../../images/SearchWhite.png')
  }

  get SearchActive() {
    return require('../../../images/SearchActive.png')
  }

  get Rectangle() {
    return require('../../../images/Rectangle.png')
  }

  get RectangleActive() {
    return require('../../../images/RectangleActive.png')
  }

  get Oval() {
    return require('../../../images/Oval.png')
  }

  get OvalActive() {
    return require('../../../images/OvalActive.png')
  }

  get Brand() {
    return require('../../../images/Brand.png')
  }

  get BrandWhite() {
    return require('../../../images/BrandWhite.png')
  }

  get Phone() {
    return require('../../../images/Phone.png')
  }

  get Assistant() {
    return require('../../../images/Assistant.png')
  }

  get AssistantNM() {
    return require('../../../images/AssistantNM.png')
  }

  get PaperPlane() {
    return require('../../../images/PaperPlane.png')
  }

  get ArrowDownCircle() {
    return require('../../../images/arrow-down-circle.png')
  }

  get SC1() {
    return require('../../../images/SC1.png')
  }

  get SC2() {
    return require('../../../images/SC2.png')
  }

  get SC3() {
    return require('../../../images/SC3.png')
  }

  get SC4() {
    return require('../../../images/SC4.png')
  }

  get LandingCurve() {
    return require('../../../images/LandingCurve.png')
  }

  get AssistantExtra() {
    return require('../../../images/AssistantExtra.png')
  }

  get AssistantExtraWhite() {
    return require('../../../images/AssistantExtraWhite.png')
  }

  get ComingSoonButtonGroup() {
    return require('../../../images/ComingSoonButtonGroup.png')
  }

  get FaceBookIcon() {
    return require('../../../images/FB.png')
  }

  get YoutubeIcon() {
    return require('../../../images/YT.png')
  }

  get TwitterIcon() {
    return require('../../../images/TW.png')
  }

  get PinterestIcon() {
    return require('../../../images/PIN.png')
  }

  get InstagramIcon() {
    return require('../../../images/IN.png')
  }

  get TelegramIcon() {
    return require('../../../images/TEL.png')
  }

  get Clear() {
    return require('../../../images/Clear.png')
  }

  get More() {
    return require('../../../images/Clear.png')
  }

  get Back() {
    return require('../../../images/Back.png')
  }

  get ShoppingList() {
    return require('../../../images/ShoppingList.png')
  }

  get Finger() {
    return require('../../../images/Finger.png')
  }

  get KitchenIllustration() {
    return require('../../../images/KitchenIllustration.png')
  }

  get Camera() {
    return require('../../../images/Camera.png')
  }

  get RemoveIconWhite() {
    return require('../../../images/RemoveIconWhite.png')
  }

  get Path() {
    return require('../../../images/Path.png')
  }
}

export default new ImageSource()
