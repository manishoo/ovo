/*
 * client-cache.ts
 * Copyright: Ouranos Studio 2019
 */

import { InMemoryCache } from 'apollo-cache-inmemory'

const cache = new InMemoryCache({
	// cacheRedirects: {
	//   Query: {
	//     movie: (_, { id }, { getCacheKey }) =>
	//       getCacheKey({ __typename: 'Movie', id }),
	//   }
	// },
	dataIdFromObject: object => object.id,
})
// @ts-ignore
	.restore(window.__APOLLO_STATE__)

export {cache}