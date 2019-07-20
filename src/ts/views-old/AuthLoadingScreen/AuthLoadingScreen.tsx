/*
 * AuthLoadingScreen.tsx
 * Copyright: Ouranos Studio 2019
 */


import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
import { navigate } from 'src/ts/utilities'

export default class AuthLoadingScreen extends RX.Component {
	constructor(props: any) {
		super(props)

		this.bootstrap()
	}

	render() {
		return (
			<RX.View style={{ flex: 1, backgroundColor: theme.colors.authLoadingBg }}>
			</RX.View>
		)
	}

	private bootstrap = async () => {
		const token = await RX.Storage.getItem('token')

		navigate(this.props, token ? 'App' : 'Auth', {
			replace: true,
		})
	}
}
