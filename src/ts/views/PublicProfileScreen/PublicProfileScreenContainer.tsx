/*
 * ProfileScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import gql from 'graphql-tag'
import {UserFragment} from 'src/ts/models/GraphQLModels'
import {Query} from 'react-apollo'
import AppConfig from 'src/ts/app/AppConfig'
import PublicProfileScreen from './PublicProfileScreen'
import {ComponentBase} from 'resub'
import LocationStore from 'src/ts/stores/LocationStore'


export default class PublicProfileScreenContainer extends ComponentBase<RX.CommonProps, {path: string}> {
  render() {
    return (
			<Query
				variables={{
					username: this._username,
				}}
				query={gql`
					  query PublicProfileScreenContainerQuery($username: String!) {
					  	getUser(username: $username) ${UserFragment}
					  }
					`}
			>
				{({data, loading}) => {
					if (loading) return <RX.Text>Loading</RX.Text>
					if (!data) return null
					if (!data.getUser) return null

					return (
						<PublicProfileScreen
							user={data.getUser}
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

	state = {
  	path: LocationStore.getPath() || '/',
	}

	private _username?: string
}
