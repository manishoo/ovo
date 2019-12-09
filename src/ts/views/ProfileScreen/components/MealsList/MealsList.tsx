/*
 * MealsList.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import AddCell from '@Common/AddCell/AddCell'
import CardList from '@Common/CardList/CardList'
import { Routes } from '@Models/common'
import LocationStore from '@Services/LocationStore'
import MealCell from '@Views/ProfileScreen/components/MealsList/components/MealCell/MealCell'
import { MealCellMeal } from '@Views/ProfileScreen/components/MealsList/components/MealCell/types/MealCellMeal'
import RX from 'reactxp'


interface RecipesListProps extends RX.CommonProps {
  style?: any,
  meals: MealCellMeal[],
  showAddMeal?: boolean,
  onLayout?: (e: RX.Types.ViewOnLayoutEvent) => void,
  hideAvatar?: boolean,
  loading?: boolean,
}

export default class MealsList extends RX.Component<RecipesListProps> {
  public render() {
    return (
      <CardList
        items={this.props.meals}
        renderAddCell={this._renderAddRecipeCell}
        renderCell={this._renderRecipeCell}
        showAddButton={this.props.showAddMeal}
        onLayout={this.props.onLayout}
        hideAvatar={this.props.hideAvatar}
        loading={this.props.loading}
      />
    )
  }

  private _renderRecipeCell = (meal: MealCellMeal, size: number) => {
    return (
      <MealCell
        meal={meal}
        hideAvatar={this.props.hideAvatar}
        size={size}
        wrapperStyle={styles.item}
      />
    )
  }

  private _renderAddRecipeCell = (size: number) => {
    return (
      <AddCell
        translatedText='CreateNewMeal'
        size={size}
        onPress={() => LocationStore.navigate(this.props, `${Routes.mealForm}`)}
      />
    )
  }
}

const styles = {
  item: RX.Styles.createViewStyle({
    [Styles.values.marginEnd]: Styles.values.spacing,
    marginBottom: Styles.values.spacing / 2,
  })
}
