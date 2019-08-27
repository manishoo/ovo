/*
 * FlatButton.tsx
 * Copyright: Ouranos Studio 2019
 */


import RX from 'reactxp'
import { ThemeContext } from 'src/ts/app/ThemeContext'

interface FlatButtonProps {
	style?: any,
	label: string,
	onPress: any,
	labelStyle?: any,
}

export default class FlatButton extends RX.Component<FlatButtonProps> {
	render() {
		const { style, label, onPress, labelStyle } = this.props

		return (
			<ThemeContext.Consumer>
				{({ theme }) => (
					<RX.View
						style={[styles.container, { borderColor: theme.colors.yellow }, style]}
						onPress={onPress}
						activeOpacity={0.7}
					>
						<RX.Text style={[styles.text, { color: theme.colors.orange }, labelStyle]}>{label}</RX.Text>
					</RX.View>
				)}
			</ThemeContext.Consumer>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		borderRadius: 50,
		borderWidth: 1,
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer'
	}),
	text: RX.Styles.createTextStyle({
		fontSize: 18,
	})
}
