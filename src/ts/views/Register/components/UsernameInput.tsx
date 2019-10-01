/*
 * UsernameInput.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useQuery } from '@apollo/react-hooks'
import Input from 'common/Input/Input'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import gql from 'graphql-tag'
import RX from 'reactxp'
import {
  RegisterUsernameExistenceQuery,
  RegisterUsernameExistenceQueryVariables
} from 'src/ts/views/Register/types/RegisterUsernameExistenceQuery'


export default function UsernameInput(props: any) {
  const { refetch } = useQuery<RegisterUsernameExistenceQuery, RegisterUsernameExistenceQueryVariables>(gql`
    query RegisterUsernameExistenceQuery($username: String!) {
      usernameExists(username: $username)
    }
  `, {
    fetchPolicy: 'network-only',
    variables: {
      username: props.value
    },
    skip: (props.value || '').length === 0
  })

  return (
    <Input
      {...props}
      label={getLocalizedText('Username')}
      usesNetwork
      validate={async (username) => {
        if (username.length === 0) return false
        const { data, loading } = await refetch({ username })
        if (!data) return false
        if (loading) return false

        props.onValidChange(!data.usernameExists)
        return !data.usernameExists
      }}
      autoCapitalize='none'
    />
  )
}
