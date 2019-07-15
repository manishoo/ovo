/*
 * index.ts
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import {Image} from 'src/ts/models/FoodModels'
import AppConfig from '../app/AppConfig'
import {Routes} from 'src/ts/navigator/routes'
import LocationStore from 'src/ts/stores/LocationStore'

export function fullWidth() {
	//FIXME

	// if (RX.Platform.getType() === 'web') {
	// 	return 375
	// }
	return RX.UserInterface.measureWindow().width
}

export function fullHeight() {
	// if (RX.Platform.getType() === 'web') {
	// 	return 667
	// }
	return RX.UserInterface.measureWindow().height
}

export function generateWeightRange() {
	const items: any[] = []
	for (let i = 1; i < 301; i++) {
		items.push({
			label: String(i),
			value: String(i),
		})
	}
	return items
}

export function generateHeightRange() {
	const items: any[] = []
	for (let i = 10; i < 250; i++) {
		items.push({
			label: String(i),
			value: String(i),
		})
	}
	return items
}

export function map(minRange: number, maxRange: number, minDomain: number, maxDomain: number, value: number): number {
	return minDomain + (maxDomain - minDomain) * (value - minRange) / (maxRange - minRange)
}

export function withNavigation(T: any) {
	const type = RX.Platform.getType()

	let M
	if (type == 'web') {
		const {withRouter} = require('react-router-dom')
		M = withRouter(T)
	} else {
		// const {withNavigation} = require('react-navigation')

		// M = withNavigation(T)
	}

	return M
}

export function navigate(props: any, route: Routes | string, config: any = {params: {}}): void {
	console.warn('navigate is DEPRECATED! use LocationStore.navigate')
	return LocationStore.navigate(props, route, config)
}

export function getParam(props: any, paramName: string) {
	const type = RX.Platform.getType()

	if (type === 'web') {
		return props.match.params[paramName]
	} else {
		return props.navigation.getParam(paramName)
	}
}

export function getImageUrl(imageObject?: Image) {
	if (imageObject) {
		return `${AppConfig.serverAddress}/${imageObject.url}`
	}

	return '' // placeholder image
}

const DAY_COLORS = [
	{name: 'saturday', color: '#FFCC00'},
	{name: 'sunday', color: '#F06292'},
	{name: 'monday', color: '#43A047'},
	{name: 'tuesday', color: '#FF9209'},
	{name: 'wednesday', color: '#1E88E5'},
	{name: 'thursday', color: '#5E35B1'},
	{name: 'friday', color: '#E53935'},
]

export function getDayColor(dayName: string) {
	const found = DAY_COLORS.find(p => p.name === dayName)
	if (!found) return '#fff'

	return found.color
}

export function isEmailValid(email: string) {
	const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	return email.match(EMAIL_REGEX)
}

export function renderImageOrPlaceholder(image?: Image, style?: any) {
	if (image) {
		return (
			<RX.Image
				source={image.url}
				style={style}
				resizeMode={'cover'}
			/>
		)
	} else {
		return (
			<RX.View
				style={style}
			/>
		)
	}
}