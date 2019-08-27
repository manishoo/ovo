/*
 * SearchResult.tsx
 * Copyright: Ouranos Studio 2019
 */

import RecipesList from 'common/RecipesList/RecipesList'
import Text from 'common/Text/Text'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { RecipeFragment } from 'src/ts/models/GraphQLModels'
import { SearchResultParameters } from './SearchResultContainer'

interface SearchResultProps {
	parameters: SearchResultParameters,
}

export default class SearchResult extends RX.Component<SearchResultProps> {
  render() {
    return (
			<Query
				variables={{
					q: this.props.parameters.q,
					foodTypes: ['recipe'],
				}}
				query={gql`
					query SearchResultQuery($q: String!) {
						searchRecipes(q: $q) {
							recipes ${RecipeFragment}
						}
					}
				`}
			>
				{({ data }) => {
					if (data && data.searchRecipes) {
						return (
							<RX.View style={styles.container}>
								<Text translate style={styles.title}>SearchResults</Text>
								<RecipesList
									recipes={data.searchRecipes.recipes}
								/>
							</RX.View>
						)
					}

					return null
				}}
			</Query>
    )
  }
}

const styles = {
	container: RX.Styles.createViewStyle({
		padding: Styles.values.spacing,
	}),
	title: RX.Styles.createTextStyle({
		fontSize: 50,
		fontWeight: 'bold',
		color: '#e7e7e7',
		marginBottom: Styles.values.spacing,
	}),
}
