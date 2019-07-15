/*
 * KeyboardAvoidable.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'

interface KeyboardAvoidableProps {
	[k: string]: any,
	enabled?: boolean,
	style?: any,
}

export default class KeyboardAvoidable extends RX.Component<KeyboardAvoidableProps> {
	render() {
		const {children, ...props} = this.props

		return (
			<RX.View {...props}>
				{children}
			</RX.View>
		)
	}
}