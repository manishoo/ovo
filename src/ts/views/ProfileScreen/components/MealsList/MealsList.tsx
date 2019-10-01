/*
 * MealsList.tsx
 * Copyright: Ouranos Studio 2019
 */

import AddCell from 'common/AddCell/AddCell'
import CardList from 'common/CardList/CardList'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { Routes } from 'src/ts/models/common'
import LocationStore from 'src/ts/stores/LocationStore'
import MealCell from 'src/ts/views/ProfileScreen/components/MealsList/components/MealCell/MealCell'
import { ProfileMealsQuery_meals_meals } from 'src/ts/views/ProfileScreen/components/ProfileMeals/types/ProfileMealsQuery'


interface RecipesListProps extends RX.CommonProps {
  style?: any,
  meals: ProfileMealsQuery_meals_meals[],
  showAddMeal?: boolean,
  onLayout?: (e: RX.Types.ViewOnLayoutEvent) => void,
  hideAvatar?: boolean,
}

export default class MealsList extends RX.Component<RecipesListProps> {
  render() {
    return (
      <CardList
        items={this.props.meals}
        renderAddCell={this._renderAddRecipeCell}
        renderCell={this._renderRecipeCell}
        showAddButton={this.props.showAddMeal}
        onLayout={this.props.onLayout}
        hideAvatar={this.props.hideAvatar}
      />
    )
  }

  private _renderRecipeCell = (meal: ProfileMealsQuery_meals_meals, size: number) => {
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
    marginHorizontal: Styles.values.spacing / 2,
    marginBottom: Styles.values.spacing / 2,
  })
}
