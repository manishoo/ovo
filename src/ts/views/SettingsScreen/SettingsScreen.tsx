/*
 * Settings.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'

interface SettingsProps {
	style?: any,
}

export default class SettingsScreen extends RX.Component<SettingsProps> {
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
		backgroundColor: '#fff',
	}),
}
