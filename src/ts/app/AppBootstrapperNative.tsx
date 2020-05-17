/*
 * AppBootstrapperNative.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ApolloProvider as ApolloHooksProvider } from '@apollo/client'
import client from '@App/client'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
// Do shimming before anything else.
import * as ShimHelpers from '@Utils/ShimHelpers'
import RootView from '@Views/RootView/RootView'
import Splash from 'react-native-splash-screen'
import RX from 'reactxp'
import AppBootstrapper from './AppBootstrapper'
import AppConfig from './AppConfig'


ShimHelpers.shimEnvironment(__DEV__, true)

// Initialize AppConfig.
AppConfig.initialize({})

class AppBootstrapperNative extends AppBootstrapper {
  protected async _getInitialUrl(): Promise<string | undefined> {
    return RX.Linking.getInitialUrl()
  }

  protected _hideSplash(): any {
    Splash.hide()
  }

  protected _renderRootView(): any {
    return (
      <ApolloHooksProvider client={client}>
        <RootView
          onLayout={this._onLayoutRootView}
        />
      </ApolloHooksProvider>
    )
  }

  private _onLayoutRootView = (e: RX.Types.ViewOnLayoutEvent) => {
    const { width, height } = e
    ResponsiveWidthStore.putWindowSize(width, height)
  }
}

export default new AppBootstrapperNative()
