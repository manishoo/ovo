/*
 * SubmitButton.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
import ImageSource from 'modules/images'

interface SubmitButtonProps {
	style?: any,
	skip?: string,
	onSkip?: () => any,
	onPress: (e: any) => any,
	label?: string,
	disabled?: boolean,
}

export default class SubmitButton extends RX.Component<SubmitButtonProps> {
	render() {
		const {style, onPress, skip, onSkip, disabled} = this.props

		if (skip) {
			return (
				<RX.View
					style={[styles.skipButton, style]}
					activeOpacity={0.7}
					onPress={onSkip}
				>
					<RX.Text style={styles.skipButtonText}>{skip}</RX.Text>
				</RX.View>
			)
		}

		return (
			<RX.View
				style={[styles.sendButton, style]}
				activeOpacity={0.7}
				onPress={disabled ? undefined : onPress}
				disableTouchOpacityAnimation={disabled}
			>
				<RX.Image
					source={ImageSource.PaperPlane}
					style={{
						width: 24,
						height: 24,
						opacity: disabled ? 0.7 : 1
					}}
				/>
			</RX.View>
		)
	}
}

const styles = {
	sendButton: RX.Styles.createViewStyle({
		width: 45,
		height: 45,
		borderColor: theme.colors.submitButtonBorderColor,
		// borderRadius: 22.5,
		marginLeft: 16,
		justifyContent: 'center',
		alignItems: 'center',
	}),
	sendButtonText: RX.Styles.createTextStyle({
		color: theme.colors.white,
		fontSize: 20,
	}),
	skipButton: RX.Styles.createViewStyle({
		// width: 45,
		height: 45,
		backgroundColor: theme.colors.white,
		borderRadius: 22.5,
		marginLeft: 16,
		justifyContent: 'center',
		alignItems: 'center',
	}),
	skipButtonText: RX.Styles.createTextStyle({
		color: theme.colors.secondary,
		fontSize: 20,
	}),
}
