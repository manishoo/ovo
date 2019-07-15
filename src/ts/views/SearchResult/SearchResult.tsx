/*
 * SearchResult.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import {SearchResultParameters} from './SearchResultContainer'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import {RecipeFragment} from 'src/ts/models/GraphQLModels'
import RecipesList from 'common/RecipesList/RecipesList'
import theme from 'src/ts/app/Theme'
import Text from 'common/Text'

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
				{({data}) => {
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
		padding: theme.styles.spacing,
	}),
	title: RX.Styles.createTextStyle({
		fontSize: 50,
		fontWeight: 'bold',
		color: '#e7e7e7',
		marginBottom: theme.styles.spacing,
	}),
}
