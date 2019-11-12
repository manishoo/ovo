/*
 * Meal.tsx
 * Copyright: Ouranos Studio 2019
 */

import Text from 'common/Text/Text'
import gql from 'graphql-tag'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import MealItem from './MealItem'
import { DayMeal } from './types/DayMeal'


interface MealProps {
  style?: any,
  meal: DayMeal,
}

export default class MealComponent extends RX.Component<MealProps> {
  public render() {
    const { style } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[styles.container, { backgroundColor: theme.colors.mealCardBackgroundColor }, style]}
          >
            <Text style={styles.mealName}>{this.props.meal.name}</Text>
            {
              this.props.meal.items.map(mealItem => (
                <MealItem
                  mealItem={mealItem}
                />
              ))
            }
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  static fragments = {
    meal: gql`
      fragment DayMeal on DayMeal {
        name
        type
        time
        items {
          ...MealItem
        }
      }

      ${MealItem.fragments.mealItem}
    `
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    borderRadius: 40,
    // borderColor: '#ECECEC',
    // borderWidth: 1,
    marginBottom: Styles.values.spacing,
    ...Styles.values.defaultShadow,
  }),
  mealName: RX.Styles.createTextStyle({
    fontSize: 20,
    fontWeight: '100',
    [Styles.values.start]: Styles.values.spacingLarge,
    marginTop: Styles.values.spacingLarge,
    marginBottom: Styles.values.spacing,
  }),
  moreButton: RX.Styles.createViewStyle({
    position: 'absolute',
    top: 28,
    [Styles.values.end]: 20,
  })
}
