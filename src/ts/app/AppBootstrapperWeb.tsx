/*
 * AppBootstrapperWeb.tsx
 * Copyright: Ouranos Studio 2019
 */

import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import RX from 'reactxp'
import client from 'src/ts/app/client'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import RootView from 'src/ts/views/RootView/RootView'
import * as SyncTasks from 'synctasks'
// Do shimming before anything else.
import * as ShimHelpers from '../utilities/ShimHelpers'
import AppBootstrapper from './AppBootstrapper'
import AppConfig from './AppConfig'


ShimHelpers.shimEnvironment(__DEV__, false)

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
        <ApolloHooksProvider client={client}>
          <RootView
            history={createBrowserHistory({ basename: `/${AppConfig.locale}` })}
            onLayout={this._onLayoutRootView}
          />
        </ApolloHooksProvider>
      </ApolloProvider>
    )
  }

  private _onLayoutRootView = (e: RX.Types.ViewOnLayoutEvent) => {
    const { width, height } = e
    ResponsiveWidthStore.putWindowSize(width, height)
  }
}

export default new AppBootstrapperWeb()
