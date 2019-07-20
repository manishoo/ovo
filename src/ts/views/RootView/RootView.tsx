/*
 * RootView.tsx
 * Copyright: Ouranos Studio 2019
 */

import SafeArea from 'common/SafeArea/SafeArea'
import RX from 'reactxp'
import AppConfig from 'src/ts/app/AppConfig'
import Navigator from 'src/ts/navigator/navigator'
import LocationStore from 'src/ts/stores/LocationStore'

interface RootViewProps extends RX.CommonProps {
	onLayout?: (e: RX.Types.ViewOnLayoutEvent) => void;
	history?: any
}

export default class RootView extends RX.Component<RootViewProps> {
	constructor(props: RootViewProps) {
		super(props)

		LocationStore.setHistory(props.history)
	}

	public render() {
		return (
			<RX.View style={styles.root} onLayout={this.props.onLayout}>
				{AppConfig.getPlatformType() === 'ios' && <SafeArea />}
				<Navigator history={this.props.history} />
			</RX.View>
		)
	}

}

const styles = {
	root: RX.Styles.createViewStyle({
		flex: 1,
		alignSelf: 'stretch',
	})
}