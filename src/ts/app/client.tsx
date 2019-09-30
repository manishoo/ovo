/*
 * client.tsx
 * Copyright: Ouranos Studio 2019
 */

/**
 * Apollo Client
 * */
import { ApolloClient } from 'apollo-client'
import { ApolloLink, Observable } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { withClientState } from 'apollo-link-state'
import { createUploadLink } from 'apollo-upload-client'
import fetch from 'isomorphic-fetch'
import { cache } from 'src/ts/app/client-cache'
import ToastStore, { ToastTypes } from 'src/ts/stores/ToastStore'
import UserStore from 'src/ts/stores/UserStore'
import AppConfig from './AppConfig'


const request = async (operation: any) => {
  operation.setContext({
    headers: {
      'accept-language': 'fa',
    }
  })

  const token = await UserStore.getSession()
  if (token) {
    operation.setContext({
      headers: {
        authorization: token,
        'accept-language': 'fa',
      }
    })
  }
}

const requestLink = new ApolloLink((operation, forward) =>
  new Observable(observer => {
    let handle: any
    Promise.resolve(operation)
      .then(oper => request(oper))
      .then(() => {
        if (forward) {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          })
        }
      })
      .catch(observer.error.bind(observer))

    return () => {
      if (handle) handle.unsubscribe()
    }
  })
)

function sendToLoggingService(errors: any) {
  //
}

function logoutUser() {
  //
  console.log('LOGOUT USER')
}

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError, operation }) => {
      if (graphQLErrors) {
        graphQLErrors.map(error => {
          sendToLoggingService(error)
          ToastStore.toast({
            message: error.message,
            type: ToastTypes.Error,
          })
        })
      }
      if (networkError) {
        logoutUser()
        ToastStore.toast({
          message: networkError.message,
          type: ToastTypes.Error,
        })
      }
    }),
    requestLink,
    withClientState({
      defaults: {
        isConnected: true
      },
      resolvers: {
        Mutation: {
          updateNetworkStatus: (_: any, { isConnected }: any, { cache }: any) => {
            cache.writeData({ data: { isConnected } })
            return null
          }
        }
      },
      cache
    }),
    createUploadLink({
      uri: AppConfig.graphQLAddress,
      fetch,
    })
  ]),
  cache
})

export default client
