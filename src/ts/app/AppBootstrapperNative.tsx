/*
 * AppBootstrapperNative.tsx
 * Copyright: Ouranos Studio 2019
 */

import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import client from '@App/client'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import RootView from '@Views/RootView/RootView'
import { ApolloProvider } from 'react-apollo'
import Splash from 'react-native-splash-screen'
import RX from 'reactxp'
// Do shimming before anything else.
import * as ShimHelpers from '@Utils/ShimHelpers'
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
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <RootView
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

export default new AppBootstrapperNative()
