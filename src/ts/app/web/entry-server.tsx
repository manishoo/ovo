/*
 * entry-server.jsx
 * Copyright: Ouranos Studio 2019
 *
 * The entry for rendering the app on the server
 */

import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { Request, Response } from 'express'
import { ApolloProvider, renderToStringWithData } from 'react-apollo'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import RX from 'reactxp'
import AppConfig from 'src/ts/app/AppConfig'
import { LanguageCode } from 'src/ts/models/global-types'
import LocationStore from '../../stores/LocationStore'
import RootView from '../../views/RootView/RootView'
import Html from './html'


const { createMemoryHistory } = require('history')

const renderProdApp = (assets: any) => (req: Request, res: Response, lang: LanguageCode) => {
  const splitPoints: any[] = []

  const client = new ApolloClient({
    // ssrMode: true,
    // Remember that this is the interface the SSR server will use to connect to the
    // API server, so we need to ensure it isn't firewalled, etc
    link: createHttpLink({
      uri: AppConfig.graphQLAddress,
      credentials: 'same-origin',
      headers: {
        // cookie: req.header('Cookie'),
        Authorization: req.header('Authorization'),
      },
      fetch,
    }),
    cache: new InMemoryCache(),
  })

  let initialUrl = req.url.replace('/en', '')
  initialUrl = initialUrl.replace('/fa', '')

  LocationStore.setPath(initialUrl)
  renderToStringWithData(
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <StaticRouter
          location={initialUrl}
          context={{
            // @ts-ignore
            splitPoints
          }}
        >
          <RootView history={createMemoryHistory({ initialEntries: [initialUrl] })} />
        </StaticRouter>
      </ApolloHooksProvider>
    </ApolloProvider>
  )
    .then((content) => {
      const initialState = client.extract()

      const chunkNames = splitPoints.map(name => `${name.replace(/\//g, '-')}.js`)

      const html = renderToString(
        <Html content={content} assets={assets} chunkNames={chunkNames} state={initialState} lang={lang} />,
      )

      res.status(200)
      res.send(`<!doctype html>${html}`)
      res.end()
    })
    .catch(e => {
      console.error(JSON.stringify(e, null, 2))
      console.error('======>>>>> ERROR')
      res.status(500)
      res.end()
    })
}

export default renderProdApp
