/*
 * Typing.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'

interface ChatTypingProps {
	style?: any,
}

interface TypingDotProps {
	style?: any,
	delay: number,
}

class TypingDot extends RX.Component<TypingDotProps> {
	animatedOpacityValue = RX.Animated.createValue(1.0)

	componentDidMount(): void {
		this.blink(false)
	}

	blink = (on: boolean) => {
		const {delay} = this.props
		let opacityAnimation = RX.Animated.timing(this.animatedOpacityValue,
			{toValue: on ? 1.0 : 0.0, duration: 500 + delay, easing: RX.Animated.Easing.InOut()}
		)

		opacityAnimation.start(() => {
			this.blink(!on)
		})
	}

	render() {
		const {style} = this.props

		let animatedStyle = RX.Styles.createAnimatedViewStyle({
			opacity: this.animatedOpacityValue,
		})

		return (
			<RX.Animated.View
				style={[dotStyles.container, animatedStyle, style]}
			/>
		)
	}
}

const dotStyles = {
	container: RX.Styles.createViewStyle({
		backgroundColor: '#9c9c9c',
		width: 8,
		height: 8,
		borderRadius: 4,
	}),
}


export default class ChatTyping extends RX.Component<ChatTypingProps> {
	render() {
		const {style} = this.props

		return (
			<RX.View
				style={[styles.container, style]}
			>
				<TypingDot delay={0}/>
				<TypingDot delay={100}/>
				<TypingDot delay={200}/>
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		width: 40,
		height: 20,
		backgroundColor: '#ddd',
		padding: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 10,
	}),
}
