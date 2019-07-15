/*
 * AuthLoadingScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import {navigate} from 'src/ts/utilities'
import theme from 'src/ts/app/Theme'

export default class AuthLoadingScreen extends RX.Component {
	constructor(props: any) {
		super(props)

		this.bootstrap()
	}

	private bootstrap = async () => {
		const token = await RX.Storage.getItem('token')

		navigate(this.props, token ? 'App' : 'Auth', {
			replace: true,
		})
	}

	render() {
		return (
			<RX.View style={{flex: 1, backgroundColor: theme.colors.authLoadingBg}}>
			</RX.View>
		)
	}
}
