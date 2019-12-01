/*
 * Meal.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useMutation } from '@apollo/react-hooks'
import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import HoverView from '@Common/HoverView/HoverButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import CalendarService from '@Services/CalendarService'
import ItemControl from '@Views/CalendarScreen/components/ItemControl'
import {
  MealComponentMutation,
  MealComponentMutationVariables
} from '@Views/CalendarScreen/components/types/MealComponentMutation'
import gql from 'graphql-tag'
import { ExecutionResult } from 'react-apollo'
import RX from 'reactxp'
import MealItemComponent from './MealItemComponent'
import { DayMeal } from './types/DayMeal'


interface MealComponentCommonProps {
  style?: any,
  meal: DayMeal,
  dayId: string,
}

interface MealComponentProps extends MealComponentCommonProps {
  onMealRegenerate: () => Promise<ExecutionResult<MealComponentMutation>>,
  mealRegenerating?: boolean,
}

// interface MealComponentState {
//   meal: DayMeal,
// }

class MealComponent extends RX.Component<MealComponentProps> {
  static fragments = {
    dayMeal: gql`
      fragment DayMeal on DayMeal {
        id
        userMeal {
          id
          name
        }
        time
        items {
          ...MealItem
        }
      }

      ${MealItemComponent.fragments.mealItem}
    `
  }
  static operations = {
    suggestMeal: gql`
      mutation MealComponentMutation($userMealId: String!, $date: DateTime!) {
        suggestMeal(userMealId: $userMealId, date: $date) {
          ...DayMeal
        }
      }

      ${MealComponent.fragments.dayMeal}
    `
  }
  //
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     meal: props.meal,
  //   }
  // }

  public render() {
    const { style, mealRegenerating, dayId, meal } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <HoverView
            onRenderChild={isHovering => (
              <RX.View
                style={[
                  styles.container,
                  {
                    backgroundColor: theme.colors.mealCardBackgroundColor,
                    borderColor: theme.colors.borderLight,
                  },
                  isHovering ? RX.Styles.createViewStyle(Styles.values.defaultShadow) : {},
                  style,
                ]}
              >
                <HoverView
                  onRenderChild={isHovering => (
                    <RX.View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <RX.View
                        style={{ flex: 1 }}
                      >
                        <Text style={styles.mealName}>{meal.userMeal.name}</Text>
                        <Text
                          style={styles.mealCalorie}>{this._calculateMealNutrition()} {translate(translate.keys.Calories)}</Text>
                      </RX.View>

                      {
                        (isHovering || mealRegenerating) &&
                        <ItemControl
                          onRegenerate={this._onMealRegenerate}
                          regenerating={mealRegenerating}
                          style={{
                            position: 'absolute',
                            [Styles.values.end]: Styles.values.spacing,
                          }}
                        />
                      }
                    </RX.View>
                  )}
                />

                {
                  meal.items.map(mealItem => (
                    <MealItemComponent
                      meal={meal}
                      dayId={dayId}
                      mealItem={mealItem}
                    />
                  ))
                }
              </RX.View>
            )}
          />
        )}
      </ThemeContext.Consumer>
    )
  }

  private _onMealRegenerate = () => {
    if (this.props.mealRegenerating) return

    this.props.onMealRegenerate()
    // .then(({ data: { suggestMeal } }) => {
    //   this.setState({
    //     meal: suggestMeal
    //   })
    // })
  }

  private _calculateMealNutrition = () => {
    let totalCalorie = 0
    let unit = AppConfig.calorieMeasurementUnit

    this.props.meal.items.forEach(item => {
      if (!item.food.nutrition.calories) return

      if (item.food) {
        if (item.food.nutrition.calories.unit == unit) {
          totalCalorie += item.food.nutrition.calories.amount
        }
      } else if (item.recipe) {
        if (item.recipe.nutrition.calories.unit == unit) {
          totalCalorie += item.recipe.nutrition.calories.amount
        }
      }
    })
    return totalCalorie
  }
}

const MealComponentContainer = (props: MealComponentCommonProps) => {
  const [suggestMeal, { loading, data }] = useMutation<MealComponentMutation, MealComponentMutationVariables>(MealComponent.operations.suggestMeal, {
    update: (proxy, { data: { suggestMeal } }) => CalendarService.setMeal(props.dayId, suggestMeal),
  })

  return (
    <MealComponent
      {...props}
      mealRegenerating={loading}
      onMealRegenerate={() => suggestMeal({
        variables: {
          date: new Date(),
          userMealId: data ? data.suggestMeal.userMeal.id : props.meal.userMeal.id,
        }
      })}
    />
  )
}

MealComponentContainer.operations = MealComponent.operations
MealComponentContainer.fragments = MealComponent.fragments

export default MealComponentContainer

const styles = {
  container: RX.Styles.createViewStyle({
    // @ts-ignore
    transition: 'all 0.5s',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: Styles.values.spacing,
  }),
  mealName: RX.Styles.createTextStyle({
    fontSize: 20,
    fontWeight: '100',
    [Styles.values.start]: Styles.values.spacingLarge,
    marginTop: Styles.values.spacingLarge,
    marginBottom: Styles.values.spacing / 2,
  }),
  mealCalorie: RX.Styles.createTextStyle({
    fontSize: 11,
    fontWeight: '100',
    [Styles.values.start]: Styles.values.spacingLarge,
    marginBottom: Styles.values.spacing,
  }),
  moreButton: RX.Styles.createViewStyle({
    position: 'absolute',
    top: 28,
    [Styles.values.end]: 20,
  })
}
