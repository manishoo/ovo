/*
 * PublicProfileScreenContainer.tsx
 * Copyright: Ouranos Studio 2019
 */

import AppConfig from '@App/AppConfig'
import Text from '@Common/Text/Text'
import LocationStore from '@Services/LocationStore'
import {
  PublicProfileScreenQuery,
  PublicProfileScreenQueryVariables
} from '@Views/ProfileScreen/types/PublicProfileScreenQuery'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import ProfileScreen from './ProfileScreen'


export default class PublicProfileScreenContainer extends ComponentBase<RX.CommonProps, { path: string }> {
  state = {
    path: LocationStore.getPath() || '/',
  }
  private _username?: string

  public render() {
    return (
      <Query<PublicProfileScreenQuery, PublicProfileScreenQueryVariables>
        variables={{
          username: this._username,
        }}
        query={gql`
          query PublicProfileScreenQuery($username: String, $userId: ObjectId) {
            user(userId: $userId, username: $username) {
              ...ProfileUser
            }
          }

          ${ProfileScreen.fragments.user}
        `}
      >
        {({ data, loading }) => {
          if (loading) return <Text translate>Loading</Text>
          if (!data) return null
          if (!data.user) return null

          return (
            <ProfileScreen
              user={data.user}
            />
          )
        }}
      </Query>
    )
  }

  componentWillMount(): void {
    if (AppConfig.getPlatformType() === 'web') {
      this._username = this.state.path.replace(/^.*\//g, '') //FIXME maybe use better path?
    }
  }

  protected _buildState(props: RX.CommonProps, initialBuild: boolean): Partial<{ path: string }> | undefined {
    return {
      path: LocationStore.getPath()
    }
  }
}
