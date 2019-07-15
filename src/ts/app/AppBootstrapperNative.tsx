/*
 * AppBootstrapperNative.tsx
 * Copyright: Ouranos Studio 2019
 */

// Do shimming before anything else.
import * as ShimHelpers from '../utilities/ShimHelpers'

ShimHelpers.shimEnvironment(__DEV__, true)

// Initialize AppConfig.
import AppConfig from './AppConfig'

AppConfig.initialize({})

import RX from 'reactxp'
import * as SyncTasks from 'synctasks'

import AppBootstrapper from './AppBootstrapper'
import {ApolloProvider} from 'react-apollo'
import client from 'src/ts/app/client'
import RootView from 'src/ts/views/RootView/RootView'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'

class AppBootstrapperNative extends AppBootstrapper {
	protected _getInitialUrl(): SyncTasks.Promise<string | undefined> {
		return RX.Linking.getInitialUrl()
	}

	protected _renderRootView(): any {
		return (
			<ApolloProvider client={client}>
				<RootView
					onLayout={this._onLayoutRootView}
				/>
			</ApolloProvider>
		)
	}

	private _onLayoutRootView = (e: RX.Types.ViewOnLayoutEvent) => {
		const {width, height} = e
		ResponsiveWidthStore.putWindowSize(width, height)
	}
}

export default new AppBootstrapperNative()
