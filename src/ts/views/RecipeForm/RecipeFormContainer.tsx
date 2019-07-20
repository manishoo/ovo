/*
 * RecipeFormContainer.tsx
 * Copyright: Ouranos Studio 2019
 */

import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import RX from 'reactxp'
import { RecipeFragment } from 'src/ts/models/GraphQLModels'
import { getParam } from 'src/ts/utilities'
import RecipeForm from './RecipeForm'

export default class RecipeFormContainer extends RX.Component {
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
				{({ data: { getRecipe }, loading, error }) => {
					return (
						<RX.View>
							{!!getRecipe && <RecipeForm recipe={getRecipe} />}
							{!!loading && <RX.Text>Loading</RX.Text>}
							{!!error && <RX.Text>Error</RX.Text>}
						</RX.View>
					)
				}}
			</Query>
    )
  }
}
