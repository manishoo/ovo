/**
 * index.web.ts
 * Copyright: Microsoft 2018
 *
 * Web implementation of "images" module.
 */

import AppConfig from '../../app/AppConfig'
import {ImageSourceBase} from './Images'

class ImageSource implements ImageSourceBase {
	OvocadoTypo = AppConfig.getImagePath('OvocadoTypo.png')
	SettingsIcon = AppConfig.getImagePath('settings.png')
	AddRecipeCell = AppConfig.getImagePath('AddRecipeCell.png')
	PlusIcon = AppConfig.getImagePath('PlusIcon.png')
	SearchIcon = AppConfig.getImagePath('SearchIcon.png')
	CrossIcon = AppConfig.getImagePath('CrossIcon.png')
	HeartAnimationEdge = AppConfig.getImagePath('web_heart_animation_edge.png')
	Search = AppConfig.getImagePath('Search.svg')
	SearchActive = AppConfig.getImagePath('SearchActive.svg')
	Rectangle = AppConfig.getImagePath('Rectangle.svg')
	RectangleActive = AppConfig.getImagePath('RectangleActive.svg')
	Oval = AppConfig.getImagePath('Oval.svg')
	OvalActive = AppConfig.getImagePath('OvalActive.svg')
	Brand = AppConfig.getImagePath('Brand.svg')
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
	ComingSoonButtonGroup = AppConfig.getImagePath('ComingSoonButtonGroup.png')

	FaceBookIcon = AppConfig.getImagePath('FB.svg')
	YoutubeIcon = AppConfig.getImagePath('YT.svg')
	TwitterIcon = AppConfig.getImagePath('TW.svg')
	PinterestIcon = AppConfig.getImagePath('PIN.svg')
	InstagramIcon = AppConfig.getImagePath('IN.svg')
	TelegramIcon = AppConfig.getImagePath('TEL.svg')
}

export default new ImageSource()
