/*
 * Profile.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import {fullHeight, navigate} from 'src/ts/utilities'
import Avatar from './components/Avatar'
import theme from 'src/ts/app/Theme'
import RecipesList from 'common/RecipesList/RecipesList'
import {Routes} from 'src/ts/navigator/routes'
import ImageSource from 'modules/images'
import AppConfig from 'src/ts/app/AppConfig'
// import Text from 'common/Text'
import gql from 'graphql-tag'
import {RecipeFragment} from 'src/ts/models/GraphQLModels'
import {Query, QueryResult} from 'react-apollo'
import FilledButton from 'common/FilledButton'
import {getLocalizedText} from 'common/LocalizedText'
import {ComponentBase} from 'resub'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import {Recipe} from 'src/ts/models/FoodModels'

interface ProfileState {
	height: number,
	recipes: Recipe[]
}

export default class ProfileScreen extends ComponentBase<RX.CommonProps, ProfileState> {
	state = {
		recipes: [],
		height: fullHeight(),
	}

	protected _buildState(props: RX.CommonProps, initialBuild: boolean): Partial<ProfileState> | undefined {
		return {
			height: ResponsiveWidthStore.getHeight(),
		}
	}

	private renderSettingsIcon = () => {
		return (
			<RX.View
				style={styles.imageContainerStyle}
				onPress={() => navigate(this.props, Routes.settings)}
			>
				<RX.Image
					source={ImageSource.SettingsIcon}
					style={styles.imageStyle}
				/>
			</RX.View>
		)
	}

  render() {
    return (
			<Query
				// variables={{
				// 	lastId: 'undefined',
				// }}
				fetchPolicy={'cache-and-network'}
				query={PROFILE_RECIPES_QUERY}
			>
				{(queryData) => (
					<RX.ScrollView
						style={[styles.container, {height: this.state.height}]}
						onScroll={this._onScroll(queryData)}
					>
						{
							(AppConfig.getPlatformType() !== 'web') &&
              <RX.View
                style={styles.avatarContainer}
              >
                <Avatar
                  source={''}
                  dimensions={75}
                  borderColor={theme.colors.primary}
                />
								{this.renderSettingsIcon()}
              </RX.View>
						}

						<FilledButton label={getLocalizedText('ProfileSettings')}
													onPress={() => navigate(this.props, Routes.settings)} />
						{/*<Text translate style={styles.title}>Dishes</Text>*/}
						<RX.View style={styles.innerContainer}>
							{this._renderContent(queryData)}
						</RX.View>
					</RX.ScrollView>
				)}
			</Query>
    )
  }

	private _renderContent = ({data, loading, variables}: QueryResult<any, { lastId?: string }>) => {
		// FIXME on mobile probably
		if (!data) return null
		if (!data.listMyRecipes) return null

		if ((this.state.recipes.length === 0) && (data.listMyRecipes.recipes.length > 0)) {
			this.setState({
				recipes: data.listMyRecipes.recipes,
			})
			return
		}

		return [
			<RecipesList
				recipes={this.state.recipes}
				showAddRecipe
				hideAvatar
				onLayout={e => {
					this.recipesListHeight = e.height
				}}
			/>,
			loading ? this._renderLoading() : null,
		]
	}

	private _renderLoading = () => {
		return (
			<RX.Text>Loading</RX.Text>
		)
	}

	private _onScroll = ({data, loading, refetch, error}: QueryResult<any, { lastId?: string }>) => (newScrollValue: number) => {
		const {height} = this.state

		if (!this.recipesListHeight) return

		const OFFSET = 100

		const bottomOfViewPoint = newScrollValue + height

		if ((bottomOfViewPoint + OFFSET) >= this.recipesListHeight) {
			if (loading || error) return
			if (!data.listMyRecipes.pagination.hasNext) return
			console.log('data.listMyRecipes.pagination.hasNext', data.listMyRecipes.pagination.hasNext)

			const recipes = data.listMyRecipes.recipes
			const lastId = recipes[recipes.length - 1].id

			refetch({
				lastId,
			})
				.then((queryResult) => {
					if (!queryResult.data) return
					if (!queryResult.data.listMyRecipes) return

					this.setState(prevState => ({
						recipes: [...prevState.recipes, ...queryResult.data.listMyRecipes.recipes]
					}))
				})
		}
	}

	private recipesListHeight: number | undefined
}

export const PROFILE_RECIPES_QUERY = gql`
  query RecipesListQuery($lastId: String) {
    listMyRecipes(lastId: $lastId) {
      recipes ${RecipeFragment}
      pagination {
        hasNext
        lastId
      }
    }
  }
`

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
	imageStyle: RX.Styles.createImageStyle({
		width: 34,
		height: 34,
	}, true),
	imageContainerStyle: RX.Styles.createImageStyle({
		position: 'absolute',
		top: 0,
		right: 0,
	}, true),
	title: RX.Styles.createTextStyle({
		fontSize: 50,
		// fontWeight: 'bold',
		fontWeight: 'bold',
		color: '#e7e7e7',
		marginBottom: theme.styles.spacing,
	}),
}
