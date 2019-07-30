/*
 * FilledButton.tsx
 * Copyright: Ouranos Studio 2019
 */


import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import HoverButton from 'src/ts/common/HoverButton/HoverButton'

interface FilledButtonProps {
	style?: any,
	containerStyle?: any,
	label: any,
	onPress: any,
	disabled?: boolean,
	fontSize?: number,
}

export default class FilledButton extends RX.Component<FilledButtonProps> {
	render() {
		const { style, containerStyle, label, onPress, fontSize, disabled } = this.props

		return (
			<ThemeContext.Consumer>
				{({ theme }) => (
					<HoverButton
						style={containerStyle}
						onRenderChild={isHovering => (
							<RX.View
								style={[
									styles.container,
									{ backgroundColor: theme.colors.filledButtonBG, },
									isHovering && !disabled ? { backgroundColor: theme.colors.filledButtonHoverBG } : undefined,
									disabled ? styles.disabled : undefined,
									style,
								]}
								onPress={onPress}
								activeOpacity={0.7}
							>
								<RX.Text style={[{
									color: theme.colors.filledButtonText,
									font: Styles.fonts.displayBold,
									fontSize: Styles.fontSizes.size14,
								}, { fontSize }]}>{label}</RX.Text>
							</RX.View>
						)}
					/>
				)}
			</ThemeContext.Consumer>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		borderRadius: 50,
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
		shadowColor: 'rgba(0, 0, 0, .2)',
		shadowOffset: {
			height: 3,
			width: 0,
		},
		shadowRadius: 6,
		margin: 10,
	}),
	disabled: RX.Styles.createViewStyle({
		opacity: 0.7
	}),
}
