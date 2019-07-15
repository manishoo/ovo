/*
 * Navbar.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
import {navigate, withNavigation} from 'src/ts/utilities'

interface NavbarProps {
	style?: any,
	title?: string,
}

@withNavigation
export default class Navbar extends RX.Component<NavbarProps> {
	private renderBackButton = () => (
		<RX.View
			style={{ flexDirection: 'row', alignItems: 'center' }}
			onPress={() => navigate(this.props, 'back')}
		>
			<RX.Image
				source={require('./assets/Back.png')}
				style={styles.backImage}
			/>
			<RX.Text style={styles.backText}>Back</RX.Text>
		</RX.View>
	)

	render() {
		const {style} = this.props

		if (RX.Platform.getType() === 'web') return null

		return (
			<RX.View
				style={[styles.container, style]}
			>
				<RX.Text style={styles.titleContainer}>
					<RX.Text style={styles.title}>{this.props.title}</RX.Text>
				</RX.Text>
				{this.renderBackButton()}

			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		height: theme.styles.navBarHeight,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 16,
		backgroundColor: 'red'
	}),
	backText: RX.Styles.createTextStyle({
		color: theme.colors.navbarBackButtonColor,
		fontWeight: '500',
		marginLeft: 5,
	}),
	backImage: RX.Styles.createImageStyle({
		width: 12,
		height: 21,
	}),
	titleContainer: RX.Styles.createViewStyle({
		position: 'absolute',
		left: 0,
		right: 0,
		justifyContent: 'center',
		alignItems: 'center',
	}),
	title: RX.Styles.createTextStyle({
		textAlign: 'center',
		fontSize: theme.fontSizes.size16,
		fontWeight: 'bold',
	}),
}
