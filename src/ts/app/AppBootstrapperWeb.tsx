/*
 * AppBootstrapperWeb.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ApolloProvider as ApolloHooksProvider } from '@apollo/client'
import client from '@App/client'
import LocationStore from '@Services/LocationStore'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
// Do shimming before anything else.
import * as ShimHelpers from '@Utils/ShimHelpers'
import RootView from '@Views/RootView/RootView'
import { Router } from 'react-router-dom'
import RX from 'reactxp'
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
  protected async _getInitialUrl(): Promise<string | undefined> {
    if (typeof window === 'undefined') return

    return window.location.pathname
  }

  protected _hideSplash(): any {
    if (typeof document !== 'undefined') {
      const splashEl = document.getElementById('splash')!
      splashEl.parentNode!.removeChild(splashEl)
    }
  }

  protected _renderRootView(): any {
    const history = createBrowserHistory()
    LocationStore.setHistory(history)

    return (
      <ApolloHooksProvider client={client}>
        <Router history={history}>
          <RootView
            onLayout={this._onLayoutRootView}
          />
        </Router>
      </ApolloHooksProvider>
    )
  }

  private _onLayoutRootView = (e: RX.Types.ViewOnLayoutEvent) => {
    const { width, height } = e

    ResponsiveWidthStore.putWindowSize(width, height)
  }
}

export default new AppBootstrapperWeb()
