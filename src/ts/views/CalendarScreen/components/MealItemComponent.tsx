/*
 * SelectFoodMealItem.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useMutation } from '@apollo/react-hooks'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import HoverView from '@Common/HoverView/HoverButton'
import Text from '@Common/Text/Text'
import TotalTime from '@Common/TotalTime/TotalTime'
import { withNavigation } from '@Modules/navigator'
import CalendarService from '@Services/CalendarService'
import { renderImageOrPlaceholder } from '@Utils'
import ItemControl from '@Views/CalendarScreen/components/ItemControl'
import { DayMeal } from '@Views/CalendarScreen/components/types/DayMeal'
import {
  MealItemComponentMutation,
  MealItemComponentMutationVariables
} from '@Views/CalendarScreen/components/types/MealItemComponentMutation'
import gql from 'graphql-tag'
import { ExecutionResult } from 'react-apollo'
import RX from 'reactxp'
import { MealItem } from './types/MealItem'



interface MealItemComponentCommonProps {
  style?: any,
  mealItem: MealItem,
  meal: DayMeal,
  dayId: string,
}

interface MealItemComponentProps extends MealItemComponentCommonProps {
  onMealItemRegenerate: () => Promise<ExecutionResult<MealItemComponentMutation>>,
  mealItemRegenerating?: boolean,
}

// interface MealItemComponentState {
//   mealItem: MealItem,
// }

@withNavigation
class MealItemComponent extends RX.Component<MealItemComponentProps> {
  static fragments = {
    mealItem: gql`
      fragment MealItem on MealItem {
        id
        amount
        recipe {
          id
          thumbnail { url }
          title { text locale }
          timing {
            cookTime
            prepTime
            totalTime
          }
          nutrition {
            calories { amount unit }
          }
        }
        food {
          id
          thumbnail { url }
          name { text locale }
          nutrition {
            calories { amount unit }
          }
        }
        amount
        customUnit
        description { text locale }
        weight {
          amount
          gramWeight
          id
          name { text locale }
        }
      }
    `
  }
  static operations = {
    suggestMealItem: gql`
      mutation MealItemComponentMutation($userMealId: String!, $mealItemId: String!, $date: DateTime!) {
        suggestMealItem(userMealId: $userMealId, mealItemId: $mealItemId, date: $date) {
          ...MealItem
        }
      }

      ${MealItemComponent.fragments.mealItem}
    `
  }

  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     mealItem: props.mealItem,
  //   }
  // }

  _onPress = () => {
    // const type = this.props.mealItem.type
    // // either food or recipe. Send to their corresponding routes
    // LocationStore.navigate(this.props, `${type}/${this.props.mealItem.slug}`, {
    //   params: {
    //     [`${type}Id`]: this.props.mealItem.id,
    //   },
    // })
  }

  public render() {
    const { style, mealItemRegenerating } = this.props

    const mealItem = this._getCommonMealItem()

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={{
              padding: Styles.values.spacing / 2,
            }}
          >
            <HoverView
              onRenderChild={isHovering => (
                <RX.View
                  key={mealItem.id}
                  onPress={this._onPress}
                  activeOpacity={0.7}
                  style={[styles.container, style, {
                    borderWidth: 1,
                    borderColor: isHovering ? theme.colors.mealItemBorder : 'transparent',
                    transition: 'all 0.3s'
                  }]}
                >
                  {renderImageOrPlaceholder(mealItem.thumbnail, styles.image)}
                  <RX.View style={styles.textsContainer}>
                    <Text translations={mealItem.title} style={styles.title} />
                    {/*<RX.Text style={[styles.subtitle, { color: theme.colors.mealItemSubtitle }]}>{this.props.mealItem.subtitle}</RX.Text>*/}
                    {!!mealItem.totalTime &&
                    <TotalTime totalTime={mealItem.totalTime} />}
                  </RX.View>

                  {
                    (isHovering || mealItemRegenerating) &&
                    <ItemControl
                      onRegenerate={this._onMealItemRegenerate}
                      regenerating={mealItemRegenerating}
                      style={{
                        position: 'absolute',
                        [Styles.values.end]: Styles.values.spacing,
                      }}
                    />
                  }
                </RX.View>
              )}
            />
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _onMealItemRegenerate = () => {
    if (this.props.mealItemRegenerating) return

    this.props.onMealItemRegenerate()
      // .then(({data: {suggestMealItem}}) => {
      //   this.setState({
      //     mealItem: suggestMealItem
      //   })
      // })
  }

  private _getCommonMealItem = () => {
    const { recipe, food } = this.props.mealItem

    if (recipe) {
      return {
        id: recipe.id,
        title: recipe.title,
        thumbnail: recipe.thumbnail,
        totalTime: recipe.timing.totalTime,
      }
    }

    if (food) {
      return {
        id: food.id,
        title: food.name,
        thumbnail: food.thumbnail,
        totalTime: 5,
      }
    }

    throw new Error('no food or recipe')
  }
}

const MealItemComponentContainer = (props: MealItemComponentCommonProps) => {
  const [suggestMealItem, { loading, data }] = useMutation<MealItemComponentMutation, MealItemComponentMutationVariables>(MealItemComponent.operations.suggestMealItem, {
    update: (proxy, { data: { suggestMealItem } }) => CalendarService.setMealItem(props.dayId, props.meal.id, suggestMealItem),
  })

  return (
    <MealItemComponent
      {...props}
      mealItemRegenerating={loading}
      onMealItemRegenerate={() => suggestMealItem({
        variables: {
          date: new Date(),
          userMealId: props.meal.userMeal.id,
          mealItemId: data ? data.suggestMealItem.id : props.mealItem.id,
        }
      })}
    />
  )
}

MealItemComponentContainer.operations = MealItemComponent.operations
MealItemComponentContainer.fragments = MealItemComponent.fragments

export default MealItemComponentContainer

const styles = {
  container: RX.Styles.createViewStyle({
    padding: Styles.values.spacing,
    paddingHorizontal: Styles.values.spacingLarge,
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 8,
  }),
  textsContainer: RX.Styles.createViewStyle({
    [Styles.values.marginStart]: 16,
  }),
  image: RX.Styles.createImageStyle({
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fafafa',
  }),
  title: RX.Styles.createTextStyle({
    fontWeight: '500',
  }),
  subtitle: RX.Styles.createTextStyle({
    fontWeight: '100',
    fontSize: 11,
    marginTop: 2,
  }),
  moreButton: RX.Styles.createViewStyle({
    position: 'absolute',
    right: 20,
  })
}
