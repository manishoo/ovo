/*
 * entry-server.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { renderToStringWithData } from '@apollo/react-ssr'
import AppConfig from '@App/AppConfig'
import { translate } from '@Common/LocalizedText/LocalizedText'
import { LanguageCode } from '@Models/global-types'
import fetch from '@Modules/fetch'
import LocationStore from '@Services/LocationStore'
// @ts-ignore
import { Request, Response } from 'express'
// @ts-ignore
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import RX from 'reactxp'
import RootView from '../../views/RootView/RootView'
// @ts-ignore
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
      <StaticRouter
        location={initialUrl}
        context={{
          // @ts-ignore
          splitPoints
        }}
      >
        <RootView history={createMemoryHistory({ initialEntries: [initialUrl] })} />
      </StaticRouter>
    </ApolloProvider>
  )
    .then((content) => {
      const initialState = client.extract()

      const chunkNames = splitPoints.map(name => `${name.replace(/\//g, '-')}.js`)

      const html = renderToString(
        <Html
          content={content}
          assets={assets}
          chunkNames={chunkNames}
          state={initialState}
          lang={lang}
          title={translate('site.title')}
        />,
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
