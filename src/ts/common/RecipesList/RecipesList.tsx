/*
 * RecipesList.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import AddCell from '@Common/AddCell/AddCell'
import CardList from '@Common/CardList/CardList'
import { Routes } from '@Models/common'
import { IngredientRecipe } from '@Models/types/IngredientRecipe'
import LocationStore from '@Services/LocationStore'
import RX from 'reactxp'
import RecipeCell from './components/RecipeCard/RecipeCard'


export interface RecipesListRecipe extends IngredientRecipe {
}

interface RecipesListProps extends RX.CommonProps {
  style?: any,
  recipes: IngredientRecipe[],
  showAddRecipe?: boolean,
  onLayout?: (e: RX.Types.ViewOnLayoutEvent) => void,
  hideAvatar?: boolean,
  loading?: boolean,
  columns?: number,
}

export default class RecipesList extends RX.Component<RecipesListProps> {
  public render() {
    return (
      <CardList
        items={this.props.recipes}
        renderAddCell={this._renderAddRecipeCell}
        renderCell={this._renderRecipeCell}
        showAddButton={this.props.showAddRecipe}
        onLayout={this.props.onLayout}
        hideAvatar={this.props.hideAvatar}
        loading={this.props.loading}
        columns={this.props.columns}
      />
    )
  }

  private _renderRecipeCell = (recipe: IngredientRecipe, size: number) => {
    return (
      <RecipeCell
        recipe={recipe}
        hideAvatar={this.props.hideAvatar}
        size={size}
        linkTo={`${Routes.recipe}/${recipe.slug}`}
        wrapperStyle={styles.item}
      />
    )
  }

  private _renderAddRecipeCell = (size: number) => {
    return (
      <AddCell
        translatedText='CreateNewRecipe'
        size={size}
        onPress={() => LocationStore.navigate(this.props, `${Routes.recipeForm}`)}
      />
    )
  }
}

const styles = {
  item: RX.Styles.createViewStyle({
    marginHorizontal: Styles.values.spacing / 4,
    marginBottom: Styles.values.spacing,
  })
}
