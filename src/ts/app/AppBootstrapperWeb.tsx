/*
 * AppBootstrapperWeb.tsx
 * Copyright: Ouranos Studio 2019
 */

// Do shimming before anything else.
import * as ShimHelpers from '../utilities/ShimHelpers'
ShimHelpers.shimEnvironment(__DEV__, false)

import { ApolloProvider } from 'react-apollo'
import RX from 'reactxp'

import client from 'src/ts/app/client'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import RootView from 'src/ts/views/RootView/RootView'
import * as SyncTasks from 'synctasks'
import AppBootstrapper from './AppBootstrapper'
import AppConfig from './AppConfig'

const { createBrowserHistory } = require('history')

// Initialize AppConfig.
let appVersion

if (typeof document !== 'undefined') {
	const appVersionElement = document.getElementById('appVersion')!
	appVersion = (appVersionElement as HTMLInputElement).value
	appVersionElement.parentElement!.removeChild(appVersionElement) // FIXME
}

AppConfig.initialize({
	appVersion
})


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
		const { width, height } = e
		ResponsiveWidthStore.putWindowSize(width, height)
	}
}

export default new AppBootstrapperWeb()
