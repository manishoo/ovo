/*
 * index.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import {fullWidth} from 'src/ts/utilities'
import {getLocalizedText} from 'common/LocalizedText'

interface ExploreProps {
	style?: any,
}

export default class Explore extends RX.Component<ExploreProps> {
	render() {
		const {style} = this.props

		return (
			<RX.View
				style={[styles.container, style]}
			>
				<RX.Text style={styles.title}>{getLocalizedText('Explore')}</RX.Text>
				<RX.ScrollView
					style={[styles.scrollView, style]}
				>

				</RX.ScrollView>
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		width: fullWidth(),
		padding: 32,
		// backgroundColor: 'green',
	}),
	scrollView: RX.Styles.createScrollViewStyle({
		width: fullWidth() * 3,
		backgroundColor: '#fff',
	}),
	title: RX.Styles.createTextStyle({
		fontSize: 50,
		fontWeight: 'bold',
		color: '#e7e7e7',
	}),
}
