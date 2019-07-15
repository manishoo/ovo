/*
 * Image.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX, {Types} from 'reactxp'

interface ImageProps extends Types.ImageProps {
	style?: any,
}

export default class Image extends RX.Component<ImageProps> {
	render() {
		const {style} = this.props

		return (
			// @ts-ignore
			<RX.Image
				style={[styles.container, style]}
				resizeMode={'cover'}
				{...this.props}
			/>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		//
	}),
}
