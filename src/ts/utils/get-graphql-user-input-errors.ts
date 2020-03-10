/*
 * get-graphql-user-input-errors.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ApolloError } from '@apollo/client'


export default function getGraphQLUserInputErrors(error?: ApolloError) {
  let fieldErrors = {}

  if (!error) return fieldErrors

  if (error.graphQLErrors) {
    error.graphQLErrors.map(e => {
      if (e.extensions) {
        switch (e.extensions.code) {
          case 'BAD_USER_INPUT':
            fieldErrors = e.extensions.exception.fieldErrors
        }
      }
    })
  }

  return fieldErrors || {}
}
