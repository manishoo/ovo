/*
 * auth.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { FetchResult, gql, useMutation } from '@apollo/client'
import { LogOutMutation } from '@Models/graphql/auth/types/LogOutMutation'


const LogOutOperation = gql`
  mutation LogOutMutation {
    logOut @client
  }
`

export function useLogOut(): () => Promise<FetchResult<LogOutMutation, any>> {
  const [logOut] = useMutation<LogOutMutation>(LogOutOperation, {
    fetchPolicy: 'no-cache',
  })

  return logOut
}
