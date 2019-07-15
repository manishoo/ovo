/*
 * AppBootstrapperWeb.tsx
 * Copyright: Ouranos Studio 2019
 */

// Do shimming before anything else.
import * as ShimHelpers from '../utilities/ShimHelpers'

ShimHelpers.shimEnvironment(__DEV__, false)

// Initialize AppConfig.
import AppConfig from './AppConfig'

let appVersion

if (typeof document !== 'undefined') {
	const appVersionElement = document.getElementById('appVersion')!
	appVersion = (appVersionElement as HTMLInputElement).value
	appVersionElement.parentElement!.removeChild(appVersionElement) // FIXME
}

AppConfig.initialize({
	appVersion
})

import * as SyncTasks from 'synctasks'

import RX from 'reactxp'
import AppBootstrapper from './AppBootstrapper'
import {ApolloProvider} from 'react-apollo'
import client from 'src/ts/app/client'
import RootView from 'src/ts/views/RootView/RootView'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
const { createBrowserHistory } = require('history')

class AppBootstrapperWeb extends AppBootstrapper {
	protected _getInitialUrl(): SyncTasks.Promise<string | undefined> {
		return SyncTasks.Resolved(window.location.pathname)
	}

	protected _renderRootView(): any {
		return (
			<ApolloProvider client={client}>
				<RootView
					history={createBrowserHistory()}
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

export default new AppBootstrapperWeb()
