/*
 * MoreButton.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'

interface MoreButtonProps {
	style?: any,
	onPress: () => any
}

export default class MoreButton extends RX.Component<MoreButtonProps> {
	render() {
		const {style, onPress} = this.props

		return (
			<RX.View style={style} onPress={onPress}>
				<RX.Image
					source={require('src/ts/sharedAssets/more.jpg')}
					style={styles.moreIcon}
				/>
			</RX.View>
		)
	}
}

const styles = {
	moreIcon: RX.Styles.createImageStyle({
		width: 22,
		height: 6,
	}),
}
