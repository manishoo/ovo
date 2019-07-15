/*
 * RecipesList.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import AddRecipeCell from './components/AddRecipeCell/AddRecipeCell'
import theme from 'src/ts/app/Theme'
import {ComponentBase} from 'resub'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import RecipeCell from './components/RecipeCard/RecipeCard'
import {Recipe} from 'src/ts/models/FoodModels'

const WINDOW_MAX_WIDTH = 975

interface RecipesListProps extends RX.CommonProps {
	style?: any,
	recipes: Recipe[],
	showAddRecipe?: boolean,
	onLayout?: (e: RX.Types.ViewOnLayoutEvent) => void,
	hideAvatar?: boolean,
}

interface RecipesListState {
	columns: number,
	windowWidth: number,
	isSmallOrTiny?: boolean,
}

export default class RecipesList extends ComponentBase<RecipesListProps, RecipesListState> {
	protected _buildState(props: RecipesListProps, initialBuild: boolean): Partial<RecipesListState> | undefined {
		return {
			columns: 3,
			isSmallOrTiny: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
			windowWidth: ResponsiveWidthStore.getWidth(),
		}
	}

	private _getMaximum1024 = (width: number) => (width > WINDOW_MAX_WIDTH ? WINDOW_MAX_WIDTH : width) // maximum 1024
	private _getWindowWidthConsideringDrawer = () => this._getMaximum1024(this.state.isSmallOrTiny ? this.state.windowWidth : this.state.windowWidth - theme.styles.drawerWidth)
	private _getCellSize = () => (this._getWindowWidthConsideringDrawer() - ((theme.styles.spacing * 2) * this.state.columns)) / this.state.columns

	private _renderRecipeCell = (recipe: Recipe) => {
		return (
			<RecipeCell
				recipe={recipe}
				hideAvatar={this.props.hideAvatar}
				size={this._getCellSize()}
				wrapperStyle={styles.item}
			/>
		)
	}

	private _renderAddRecipeCell = () => {
		return (
			<AddRecipeCell
				size={this._getCellSize()}
				wrapperStyle={styles.item}
			/>
		)
	}

  render() {
		const {style} = this.props

    return (
			<RX.View
				style={[styles.container, {minWidth: this._getCellSize() * this.state.columns}, style]}
				onLayout={this.props.onLayout}
			>
				{ this.props.showAddRecipe && this._renderAddRecipeCell()}

				{
					this.props.recipes.map((recipe: Recipe) => this._renderRecipeCell(recipe))
				}

				{/*<Query
					variables={{
						lastId: undefined,
					}}
					query={gql`
					  query RecipesListQuery($lastId: String) {
					  	listMyRecipes(lastId: $lastId) {
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
						if (!data.listMyRecipes) return null
						return data.listMyRecipes.recipes.map((recipe: Recipe) => this._renderRecipeCell(recipe))
					}}
				</Query>*/}

				{
					// this._prepareItems().map(item => (
					// 	<RX.View style={styles.row}>
					// 		<RX.View style={styles.placeholder}>{item[0]}</RX.View>
					// 		<RX.View style={styles.placeholder}>{item[1]}</RX.View>
					// 		<RX.View style={styles.placeholder}>{item[2]}</RX.View>
					// 	</RX.View>
					// ))
				}
			</RX.View>
    )
  }
}

const styles = {
	container: RX.Styles.createViewStyle({
		flexDirection: 'row',
		flexWrap: 'wrap',
		// alignItems: 'flex-start',
		maxWidth: WINDOW_MAX_WIDTH
	}),
	item: RX.Styles.createViewStyle({
		marginHorizontal: theme.styles.spacing / 2,
		marginBottom: theme.styles.spacing / 2,
	})
}
