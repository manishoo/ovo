/*
 * MealItemGrid.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import IngredientCard from '@Common/IngredientCard/IngredientCard'
import gql from 'graphql-tag'
import RX from 'reactxp'
import { MealItemGridIngredient } from './types/MealItemGridIngredient'


export const fragments = {
  mealItem: gql`
    fragment MealItemGridIngredient on Ingredient {
      ...IngredientCardIngredient
    }

    ${IngredientCard.fragments.ingredient}
  `
}

interface MealItemGridProps {
  style?: any,
  mealItems: MealItemGridIngredient[],
  size: number
}

interface MealItemGridState {
  row1: MealItemGridIngredient[],
  row2: MealItemGridIngredient[],
}

export default class MealItemGrid extends RX.Component<MealItemGridProps, MealItemGridState> {
  constructor(props: MealItemGridProps) {
    super(props)

    const { row1, row2 } = this._fillRows()
    this.state = {
      row1,
      row2,
    }
  }

  public render() {
    const { style } = this.props

    if (this.props.mealItems.length < 4) return this._renderMealItem(this.props.mealItems[0], this.props.size)

    return (
      <RX.View
        style={[
          styles.container,
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

  private _renderMealItem = (mealItem: MealItemGridIngredient, size: number) => {
    return (
      <IngredientCard
        size={size}
        hideTitle
        hideUnits
        ingredient={mealItem}
      />
    )
  }

  private _fillRows = () => {
    const row1: MealItemGridIngredient[] = []
    const row2: MealItemGridIngredient[] = []

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
