/*
 * client-cache.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { InMemoryCache } from '@apollo/client'


const cache = new InMemoryCache({
  // cacheRedirects: {
  //   Query: {
  //     movie: (_, { id }, { getCacheKey }) =>
  //       getCacheKey({ __typename: 'Movie', id }),
  //   }
  // },
  possibleTypes: {
    IngredientItem: ['Recipe', 'Food'],
  },
  typePolicies: {
    MealItem: {
      keyFields: ['item', ['id']]
    }
  }
})
// @ts-ignore
  .restore(window.__APOLLO_STATE__)

export { cache }
