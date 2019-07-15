/*
 * RecipeContainer.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import {getParam} from 'src/ts/utilities'
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
import Recipe from 'src/ts/views/Recipe/Recipe'
import {RecipeFragment} from 'src/ts/models/GraphQLModels'

export default class RecipeContainer extends RX.Component {
  render() {
    return (
			<Query
				variables={{
					slug: getParam(this.props, 'slug')
				}}
				query={gql`
				  query GetRecipe($slug: String!) {
					  getRecipe(slug: $slug) ${RecipeFragment}
					}
				`}
				fetchPolicy={'cache-and-network'}
			>
				{({data, loading, error}) => {
					return (
						<RX.View>
							{!!data && !!data.getRecipe && <Recipe recipe={data.getRecipe} />}
							{!!loading && <RX.Text>Loading</RX.Text>}
							{!!error && <RX.Text>Error</RX.Text>}
						</RX.View>
					)
				}}
			</Query>
    )
  }
}
