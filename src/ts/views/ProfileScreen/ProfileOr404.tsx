/*
 * ProfileOr404.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, useQuery } from '@apollo/client'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
import Text from '@Common/Text/Text'
import { useMe } from '@Models/graphql/me/me'
import ProfileScreen, { fragments as ProfileScreenFragments } from '@Views/ProfileScreen/ProfileScreen'
import {
  PublicProfileScreenQuery,
  PublicProfileScreenQueryVariables
} from '@Views/ProfileScreen/types/PublicProfileScreenQuery'
import { useParams } from 'react-router'
import RX from 'reactxp'


const ProfileOr404 = () => {
  const me = useMe()
  const { username } = useParams<{ username: string }>()

  if (me && username === me.username) {
    return (
      <ProfileScreen
        user={me!}
        isMyProfile
      />
    )
  } else {
    return (
      <PublicProfileAXOr404 username={username} />
    )
  }
}

const NotFound = () => {
  return (
    <RX.View>
      <Text>Page not found</Text>
    </RX.View>
  )
}

const PublicProfileAXOr404 = ({ username }: { username: string }) => {
  const { data, loading, error } = useQuery<PublicProfileScreenQuery, PublicProfileScreenQueryVariables>(PUBLIC_PROFILE_QUERY, {
    variables: {
      username,
    }
  })

  if (error && error.graphQLErrors[0] && error.graphQLErrors[0].extensions && error.graphQLErrors[0].extensions.code === 'NOTFOUND') {
    return (
      <NotFound />
    )
  }

  if (loading) return <LoadingIndicator />
  if (!data) return null
  if (!data.user) return null

  return (
    <ProfileScreen
      user={data.user}
    />
  )
}

const PUBLIC_PROFILE_QUERY = gql`
  query PublicProfileScreenQuery($username: String, $userId: ObjectId) {
    user(userId: $userId, username: $username) {
      ...ProfileUser
    }
  }

  ${ProfileScreenFragments.user}
`

export default ProfileOr404
