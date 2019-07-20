/*
 * ListView.tsx
 * Copyright: Ouranos Studio 2019
 */


import RX from 'reactxp'
import { ListViewProps, ListViewState } from 'src/ts/views/Path/ListView/types'

export default class ListView extends RX.Component<ListViewProps, ListViewState> {
	render() {
		const { style } = this.props

		return (
			<RX.View
				style={[styles.container, style]}
			>

			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({}),
}
