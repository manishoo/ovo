/*
 * RecipeFormContainer.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import {getParam} from 'src/ts/utilities'
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
import RecipeForm from './RecipeForm'
import {RecipeFragment} from 'src/ts/models/GraphQLModels'

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
				{({data: {getRecipe}, loading, error}) => {
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
