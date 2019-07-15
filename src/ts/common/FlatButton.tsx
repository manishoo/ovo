/*
 * FlatButton.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import theme from 'src/ts/app/Theme'

interface FlatButtonProps {
	style?: any,
	label: string,
	onPress: any,
	labelStyle?: any,
}

export default class FlatButton extends RX.Component<FlatButtonProps> {
	render() {
		const {style, label, onPress, labelStyle} = this.props

		return (
			<RX.View
				style={[styles.container, style]}
				onPress={onPress}
				activeOpacity={0.7}
			>
				<RX.Text style={[styles.text, labelStyle]}>{ label }</RX.Text>
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		borderRadius: 50,
		borderColor: theme.colors.yellow,
		borderWidth: 1,
		padding: 20,
		// minWidth: fullWidth() * 0.8,
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer'
	}),
	text: RX.Styles.createTextStyle({
		color: theme.colors.orange,
		fontSize: 18,
	})
}
