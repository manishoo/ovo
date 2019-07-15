/*
 * Picker.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'

interface PickerProps {
	style?: any,
}

export default class Picker extends RX.Component<PickerProps> {
	render() {
		const {style} = this.props

		return (
			<RX.View
				style={[styles.container, style]}
			>

			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		//
	}),
}
