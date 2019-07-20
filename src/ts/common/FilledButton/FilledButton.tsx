/*
 * FilledButton.tsx
 * Copyright: Ouranos Studio 2019
 */


import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
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
			<HoverButton
				style={containerStyle}
				onRenderChild={isHovering => (
					<RX.View
						style={[
							styles.container,
							isHovering && !disabled ? styles.hoverStyle : undefined,
							disabled ? styles.disabled : undefined,
							style,
						]}
						onPress={onPress}
						activeOpacity={0.7}
					>
						<RX.Text style={[styles.text, { fontSize }]}>{label}</RX.Text>
					</RX.View>
				)}
			/>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		borderRadius: 50,
		backgroundColor: theme.colors.filledButtonBG,
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
	hoverStyle: RX.Styles.createViewStyle({
		backgroundColor: theme.colors.filledButtonHoverBG,
	}),
	disabled: RX.Styles.createViewStyle({
		opacity: 0.7
	}),
	text: RX.Styles.createTextStyle({
		color: theme.colors.filledButtonText,
		font: theme.fonts.displayBold,
		fontSize: 14,
	}),
}
