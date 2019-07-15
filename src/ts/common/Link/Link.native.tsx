/*
 * Link.native.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'

interface LinkProps {
	style?: any,
}

export default class Link extends RX.Component<LinkProps> {
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
