/*
 * Avatar.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'

interface AvatarProps {
	style?: any,
	source: any,
	dimensions: number,
	borderColor: string
}

export default class Avatar extends RX.Component<AvatarProps> {
	render() {
		const {style} = this.props

		return (
			<RX.View
				style={[styles.container, style]}
			>
				<RX.Image
					source={this.props.source}
					style={[
						styles.image,
						{
							width: this.props.dimensions,
							height: this.props.dimensions,
							borderRadius: this.props.dimensions / 2,
							borderColor: this.props.borderColor || '#eee',
						}
					]}
				/>
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
	}),
	image: RX.Styles.createImageStyle({
		borderWidth: 5,
		backgroundColor: '#eee',
	}),
}
