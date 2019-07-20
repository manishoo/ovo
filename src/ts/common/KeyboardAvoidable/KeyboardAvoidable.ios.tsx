/*
 * KeyboardAvoidable.ios.tsx
 * Copyright: Ouranos Studio 2019
 */

import { KeyboardAvoidingView } from 'react-native'
import RX from 'reactxp'

interface KeyboardAvoidableProps {
	enabled?: boolean,
}

export default class KeyboardAvoidable extends RX.Component<KeyboardAvoidableProps> {
	render() {
		const { children, enabled, ...props } = this.props

		return (
			<KeyboardAvoidingView
				behavior='position'
				enabled={enabled}
				{...props}
			>
				{children}
			</KeyboardAvoidingView>
		)
	}
}