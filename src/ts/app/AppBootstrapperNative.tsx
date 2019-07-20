/*
 * AppBootstrapperNative.tsx
 * Copyright: Ouranos Studio 2019
 */

// Do shimming before anything else.
import * as ShimHelpers from '../utilities/ShimHelpers'
ShimHelpers.shimEnvironment(__DEV__, true)

import { ApolloProvider } from 'react-apollo'
import RX from 'reactxp'
import client from 'src/ts/app/client'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import RootView from 'src/ts/views/RootView/RootView'
import * as SyncTasks from 'synctasks'

import AppBootstrapper from './AppBootstrapper'
import AppConfig from './AppConfig'

// Initialize AppConfig.
AppConfig.initialize({})

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
		const { width, height } = e
		ResponsiveWidthStore.putWindowSize(width, height)
	}
}

export default new AppBootstrapperNative()
