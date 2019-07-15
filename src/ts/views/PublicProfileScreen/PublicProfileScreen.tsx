/*
 * PublicProfileScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
import RecipesList from 'common/RecipesList/RecipesList'
import Text from 'common/Text'
import gql from 'graphql-tag'
import {RecipeFragment} from 'src/ts/models/GraphQLModels'
import {Query} from 'react-apollo'
import {User} from 'src/ts/models/FoodModels'
import Image from 'common/Image/Image'

interface ProfileProps {
	style?: any,
	user: Partial<User>,
}

export default class ProfileScreen extends RX.Component<ProfileProps> {
  render() {
		const {style, user} = this.props

    return (
			<RX.ScrollView
				style={[styles.container, style]}
			>
				<Image
					source={user.avatar!.url}
					style={styles.avatar}
				/>
				<Text translate style={styles.title}>Dishes</Text>
				<RX.View style={styles.innerContainer}>
					<Query
						variables={{
							userId: user.id,
							lastId: undefined,
						}}
						query={gql`
					  query RecipesListQuery($userId: String!, $lastId: String) {
					  	listRecipes(userId: $userId, lastId: $lastId) {
  						  recipes ${RecipeFragment}
  						  pagination {
    						  hasNext
    						  lastId
    						}
  						}
					  }
					`}
					>
						{({data, loading}) => {
							if (loading) return <RX.Text>Loading</RX.Text>
							if (!data) return null
							if (!data.listRecipes) return null

							return (
								<RecipesList
									recipes={data.listRecipes.recipes}
								/>
							)
							// return data.listMyRecipes.recipes.map((recipe: Recipe) => this._renderRecipeCell(recipe))
						}}
					</Query>
				</RX.View>
			</RX.ScrollView>
    )
  }
}

const styles = {
	container: RX.Styles.createViewStyle({
		// FIXME width: fullWidth(),
		flex: 1,
		padding: theme.styles.spacingLarge,
		backgroundColor: '#fff',
		alignSelf: 'center',
	}),
	innerContainer: RX.Styles.createViewStyle({
		flex: 1,
		alignItems: 'center',
	}),
	avatarContainer: RX.Styles.createViewStyle({
		justifyContent: 'center',
		alignItems: 'center',
		height: 100,
	}),
	avatar: RX.Styles.createImageStyle({
		width: 80,
		height: 80,
		borderRadius: 40,
	}),
	title: RX.Styles.createTextStyle({
		fontSize: 50,
		// fontWeight: 'bold',
		fontWeight: 'bold',
		color: '#e7e7e7',
		marginBottom: theme.styles.spacing,
	}),
}
