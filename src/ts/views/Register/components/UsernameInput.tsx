/*
 * UsernameInput.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, useQuery } from '@apollo/client'
import Input from '@Common/Input/Input'
import { translate } from '@Common/LocalizedText/LocalizedText'
import useDebounce from '@Utils/useDebounce'
import {
  RegisterUsernameExistenceQuery,
  RegisterUsernameExistenceQueryVariables
} from '@Views/Register/components/types/RegisterUsernameExistenceQuery'
import RX from 'reactxp'


export default function UsernameInput(props: any) {
  const debounceValue = useDebounce(props.value, 500)
  const { refetch, loading } = useQuery<RegisterUsernameExistenceQuery, RegisterUsernameExistenceQueryVariables>(gql`
    query RegisterUsernameExistenceQuery($username: String!) {
      usernameExists(username: $username)
    }
  `, {
    fetchPolicy: 'network-only',
    variables: {
      username: debounceValue
    },
    skip: (props.value || '').length === 0
  })

  return (
    <Input
      {...props}
      label={loading ? translate('Username') + `(${translate('Loading')})` : translate('Username')}
      usesNetwork
      validate={async (username) => {
        if (username.length === 0) return false
        const { data, loading } = await refetch({ username })
        if (!data) return false
        if (loading) return false

        if (props.onValidChange) props.onValidChange(!data.usernameExists)
        return !data.usernameExists
      }}
      autoCapitalize='none'
    />
  )
}
