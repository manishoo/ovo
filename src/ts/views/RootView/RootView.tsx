/*
 * App.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import Navigator from 'src/ts/navigator/navigator'
import AppConfig from 'src/ts/app/AppConfig'
import SafeArea from 'common/SafeArea/SafeArea'
import LocationStore from 'src/ts/stores/LocationStore'

interface RootViewProps extends RX.CommonProps {
	onLayout?: (e: RX.Types.ViewOnLayoutEvent) => void;
	history?: any
}

export default class RootView extends RX.Component<RootViewProps> {
	public render() {
		return (
			<RX.View style={styles.root} onLayout={this.props.onLayout}>
				{AppConfig.getPlatformType() === 'ios' && <SafeArea />}
				<Navigator history={this.props.history} />
			</RX.View>
		)
	}

	constructor(props: RootViewProps) {
		super(props)

		LocationStore.setHistory(props.history)
	}

}

const styles = {
	root: RX.Styles.createViewStyle({
		flex: 1,
		alignSelf: 'stretch',
	})
}