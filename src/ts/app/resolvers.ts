/*
 * resolvers.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { Resolvers } from '@apollo/client'
import writeDefaults from '@App/cache-defaults'
import client from '@App/client'
import Storage from '@App/Storage/Storage'


export default {
  Mutation: {
    logOut: (_root, _args, { cache }) => {
      client.resetStore()
        .then(() => {
          Storage.clear()
            .then(() => {
              writeDefaults(client.cache)
            })
        })
    },
  }
} as Resolvers
