/*
 * entry-server.jsx
 * Copyright: Ouranos Studio 2019
 *
 * The entry for rendering the app on the server
 */

import RX from 'reactxp'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-fetch'
import { ApolloProvider, renderToStringWithData } from 'react-apollo'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import LocationStore from '../../stores/LocationStore'
import RootView from '../../views/RootView/RootView'
import AppConfig from '../AppConfig'
// @ts-ignore
import Html from './html'

const { createMemoryHistory } = require('history')

const renderProdApp = (assets: any) => (req: any, res: any) => {
	const splitPoints: any[] = []

	const client = new ApolloClient({
		ssrMode: true,
		// Remember that this is the interface the SSR server will use to connect to the
		// API server, so we need to ensure it isn't firewalled, etc
		link: createHttpLink({
			uri: AppConfig.graphQLAddress,
			credentials: 'same-origin',
			headers: {
				cookie: req.header('Cookie'), //TODO add other headers such as auth
				authorization: req.header('Authorization'), //TODO add other headers such as auth
			},
			fetch,
		}),
		cache: new InMemoryCache(),
	})

	LocationStore.setPath(req.url)
	renderToStringWithData(
		<ApolloProvider client={client}>
			<StaticRouter
				location={req.url}
				context={{
					// @ts-ignore
					splitPoints
				}}
			>
				<RootView history={createMemoryHistory({ initialEntries: [req.url] })} />
			</StaticRouter>
		</ApolloProvider>
	)
		.then((content) => {
			const initialState = client.extract()

			const chunkNames = splitPoints.map(name => `${name.replace(/\//g, '-')}.js`)

			const html = renderToString(
				<Html content={content} assets={assets} chunkNames={chunkNames} state={initialState} />,
			)

			res.status(200)
			res.send(`<!doctype html>${html}`)
			res.end()
		})
		.catch(e => console.error(e))
}

export default renderProdApp
