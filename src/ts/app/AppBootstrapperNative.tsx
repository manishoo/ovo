/*
 * AppBootstrapperNative.tsx
 * Copyright: Ouranos Studio 2019
 */

import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import { ApolloProvider } from 'react-apollo'
import RX from 'reactxp'
import client from 'src/ts/app/client'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import RootView from 'src/ts/views/RootView/RootView'
// Do shimming before anything else.
import * as ShimHelpers from '../utilities/ShimHelpers'
import AppBootstrapper from './AppBootstrapper'
import AppConfig from './AppConfig'


ShimHelpers.shimEnvironment(__DEV__, true)

// Initialize AppConfig.
AppConfig.initialize({})

class AppBootstrapperNative extends AppBootstrapper {
  protected async _getInitialUrl(): Promise<string | undefined> {
    return RX.Linking.getInitialUrl()
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
