/*
 * KeyboardAvoidable.ios.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import {KeyboardAvoidingView} from 'react-native'

interface KeyboardAvoidableProps {
	enabled?: boolean,
}

export default class KeyboardAvoidable extends RX.Component<KeyboardAvoidableProps> {
	render() {
		const {children, enabled, ...props} = this.props

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