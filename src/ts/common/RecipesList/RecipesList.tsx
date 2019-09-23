/*
 * RecipesList.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import { ComponentBase } from 'resub'
import Styles from 'src/ts/app/Styles'
import { Recipe } from 'src/ts/models/FoodModels'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import { RecipesListQuery_recipes_recipes } from 'src/ts/views/ProfileScreen/types/RecipesListQuery'
import AddRecipeCell from './components/AddRecipeCell/AddRecipeCell'
import RecipeCell from './components/RecipeCard/RecipeCard'

// const WINDOW_MAX_WIDTH = 975

interface RecipesListProps extends RX.CommonProps {
  style?: any,
  recipes: RecipesListQuery_recipes_recipes[],
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
  render() {
    const { style } = this.props

    return (
      <RX.View
        style={[styles.container, { minWidth: this._getCellSize() * this.state.columns }, style]}
        onLayout={this.props.onLayout}
      >
        {this.props.showAddRecipe && this._renderAddRecipeCell()}

        {
          this.props.recipes.map((recipe: Recipe) => this._renderRecipeCell(recipe))
        }
      </RX.View>
    )
  }

  protected _buildState(props: RecipesListProps, initialBuild: boolean): Partial<RecipesListState> | undefined {
    return {
      columns: 4,
      isSmallOrTiny: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
      windowWidth: ResponsiveWidthStore.getWidth(),
    }
  }

  private _getMaximum1024 = (width: number) => (width > Styles.values.mainContentMaxWidth ? Styles.values.mainContentMaxWidth : width) // maximum 1024

  private _getWindowWidthConsideringDrawer = () => this._getMaximum1024(this.state.isSmallOrTiny ? this.state.windowWidth : this.state.windowWidth - Styles.values.drawerWidth)

  private _getCellSize = () => (this._getWindowWidthConsideringDrawer() - ((Styles.values.spacing * 2) * this.state.columns)) / this.state.columns

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
}

const styles = {
  container: RX.Styles.createViewStyle({
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: Styles.values.mainContentMaxWidth
  }),
  item: RX.Styles.createViewStyle({
    marginHorizontal: Styles.values.spacing / 2,
    marginBottom: Styles.values.spacing / 2,
  })
}
