/*
 * MealsList.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import AddCell from '@Common/AddCell/AddCell'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
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
      <RX.View
        onLayout={this.props.onLayout}
        style={styles.container}
      >
        <AddCell
          translatedText='CreateNewMeal'
          size={100}
          onPress={() => LocationStore.navigate(this.props, `${Routes.mealForm}`)}
          wrapperStyle={styles.add}
        />
        {
          this.props.meals.map(meal => (
            <MealCell
              meal={meal}
              style={{
                marginBottom: Styles.values.spacing,
              }}
            />
          ))
        }
        {
          this.props.loading &&
          <LoadingIndicator />
        }
      </RX.View>
    )
  }
}

const styles = {
  item: RX.Styles.createViewStyle({
    [Styles.values.marginEnd]: Styles.values.spacing,
    marginBottom: Styles.values.spacing / 2,
  }),
  container: RX.Styles.createViewStyle({
    //
  }),
  add: RX.Styles.createViewStyle({
    alignSelf: 'flex-start',
    marginBottom: Styles.values.spacing,
    marginHorizontal: Styles.values.spacing / 2,
  })
}
