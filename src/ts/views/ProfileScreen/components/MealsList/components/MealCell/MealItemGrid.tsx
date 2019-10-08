/*
 * MealItemGrid.tsx
 * Copyright: Ouranos Studio 2019
 */

import IngredientCard from 'common/recipe/IngredientCard/IngredientCard'
import RecipeCard from 'common/RecipesList/components/RecipeCard/RecipeCard'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { ProfileMealsQuery_meals_meals_items } from 'src/ts/views/ProfileScreen/components/ProfileMeals/types/ProfileMealsQuery'


interface MealItemGridProps {
  style?: any,
  mealItems: ProfileMealsQuery_meals_meals_items[],
  size: number
}

interface MealItemGridState {
  row1: ProfileMealsQuery_meals_meals_items[],
  row2: ProfileMealsQuery_meals_meals_items[],
}

export default class MealItemGrid extends RX.Component<MealItemGridProps, MealItemGridState> {
  constructor(props) {
    super(props)

    const { row1, row2 } = this._fillRows()
    this.state = {
      row1,
      row2,
    }
  }

  render() {
    const { style } = this.props

    if (this.props.mealItems.length < 4) return this._renderMealItem(this.props.mealItems[0], this.props.size)

    return (
      <RX.View
        style={[
          styles.container,
          {
            transform: [{ scale: 0.7 }]
          },
          style,
        ]}
      >
        <RX.View style={{ position: 'relative', [Styles.values.end]: -4 }}>
          {this.state.row1.map((mealItem, index) => (
            <RX.View style={{ position: 'relative', top: -8 * index }}>
              {this._renderMealItem(mealItem, this.props.size / 2)}
            </RX.View>
          ))}
        </RX.View>
        <RX.View style={{ position: 'relative', [Styles.values.start]: -4 }}>
          {this.state.row2.map((mealItem, index) => (
            <RX.View style={{ position: 'relative', top: -8 * index }}>
              {this._renderMealItem(mealItem, this.props.size / 2)}
            </RX.View>
          ))}
        </RX.View>
      </RX.View>
    )
  }

  private _renderMealItem = (mealItem: ProfileMealsQuery_meals_meals_items, size: number) => {
    if (mealItem.food) {
      return (
        <IngredientCard
          size={size}
          hideTitle
          hideUnits
          ingredient={{
            amount: mealItem.amount,
            customUnit: mealItem.customUnit,
            description: mealItem.description,
            food: mealItem.food,
            gramWeight: mealItem.gramWeight,
            name: mealItem.food.name,
            thumbnail: mealItem.food.thumbnail,
            weight: mealItem.weight,
          }}
        />
      )
    }

    if (mealItem.recipe) {
      return (
        <RecipeCard
          size={size}
          imageOnly
          recipe={mealItem.recipe}
        />
      )
    }

    throw new Error('no recipe or food')
  }

  private _fillRows = () => {
    const row1 = []
    const row2 = []

    this.props.mealItems.map((mealItem, index) => {
      if ((row1.length + row2.length) > 4) return

      if (index % 2 === 0) {
        row1.push(mealItem)
      } else {
        row2.push(mealItem)
      }
    })

    return { row1, row2 }
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    flexDirection: 'row',
  }),
}
