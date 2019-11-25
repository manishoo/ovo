/*
 * RecipesList.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import AddCell from '@Common/AddCell/AddCell'
import CardList from '@Common/CardList/CardList'
import { RecipeCardRecipe } from '@Common/RecipesList/components/RecipeCard/types/RecipeCardRecipe'
import { Routes } from '@Models/common'
import LocationStore from '@Services/LocationStore'
import { ProfileRecipesQuery_recipes_recipes } from '@Views/ProfileScreen/components/ProfileRecipes/types/ProfileRecipesQuery'
import RX from 'reactxp'
import RecipeCell from './components/RecipeCard/RecipeCard'


interface RecipesListProps extends RX.CommonProps {
  style?: any,
  recipes: ProfileRecipesQuery_recipes_recipes[],
  showAddRecipe?: boolean,
  onLayout?: (e: RX.Types.ViewOnLayoutEvent) => void,
  hideAvatar?: boolean,
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
      />
    )
  }

  private _renderRecipeCell = (recipe: RecipeCardRecipe, size: number) => {
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
    marginHorizontal: Styles.values.spacing / 2,
    marginBottom: Styles.values.spacing / 2,
  })
}
