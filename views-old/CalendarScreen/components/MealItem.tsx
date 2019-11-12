/*
 * SelectFoodMealItem.tsx
 * Copyright: Ouranos Studio 2019
 */

import Text from 'common/Text/Text'
import TotalTime from 'common/TotalTime/TotalTime'
import gql from 'graphql-tag'
import { withNavigation } from 'modules/navigator'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { renderImageOrPlaceholder } from 'src/ts/utilities'
import { MealItem } from './types/MealItem'


interface MealItemProps {
  style?: any,
  mealItem: MealItem,
}

@withNavigation
export default class MealItemComponent extends RX.Component<MealItemProps> {
  onPress = () => {
    // const type = this.props.mealItem.type
    // // either food or recipe. Send to their corresponding routes
    // LocationStore.navigate(this.props, `${type}/${this.props.mealItem.slug}`, {
    //   params: {
    //     [`${type}Id`]: this.props.mealItem.id,
    //   },
    // })
  }

  public render() {
    const { style } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            onPress={this.onPress}
            activeOpacity={0.7}
            style={[styles.container, style]}
          >
            {renderImageOrPlaceholder(this._getCommonMealItem().thumbnail, styles.image)}
            <RX.View style={styles.textsContainer}>
              <Text translations={this._getCommonMealItem().title} style={styles.title} />
              {/*<RX.Text style={[styles.subtitle, { color: theme.colors.mealItemSubtitle }]}>{this.props.mealItem.subtitle}</RX.Text>*/}
              {!!this._getCommonMealItem().totalTime && <TotalTime totalTime={this._getCommonMealItem().totalTime} />}
            </RX.View>
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
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
        }
        food {
          id
          thumbnail { url }
          name { text locale }
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
}

const styles = {
  container: RX.Styles.createViewStyle({
    padding: Styles.values.spacing,
    paddingHorizontal: Styles.values.spacingLarge,
    flexDirection: 'row',
    // alignItems: 'center',
    cursor: 'pointer',
  }),
  textsContainer: RX.Styles.createViewStyle({
    marginLeft: 16,
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
