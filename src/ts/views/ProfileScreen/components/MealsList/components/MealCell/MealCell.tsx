/*
 * MealCard.tsx
 * Copyright: Ouranos Studio 2019
 */

import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import Image from '@Common/Image/Image'
import LikeButton from '@Common/LikeButton/LikeButton'
import Link from '@Common/Link/Link'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import { Routes } from '@Models/common'
import { withNavigation } from '@Modules/navigator'
import LocationStore from '@Services/LocationStore'
import MealItemRow from '@Views/MealForm/components/MealItemRow/MealItemRow'
import MealItemGrid from '@Views/ProfileScreen/components/MealsList/components/MealCell/MealItemGrid'
import {
  MealCellMeal,
  MealCellMeal_items,
  MealCellMeal_items_item_Food
} from '@Views/ProfileScreen/components/MealsList/components/MealCell/types/MealCellMeal'
import gql from 'graphql-tag'
import RX from 'reactxp'


function determineIfIsFood(toBeDetermined: Partial<MealCellMeal_items>): toBeDetermined is MealCellMeal_items_item_Food {
  return toBeDetermined.hasOwnProperty('weights')
}

interface AddMealCellProps {
  wrapperStyle?: any,
  size: number,
  meal: MealCellMeal,
  hideAvatar?: boolean,
}

@withNavigation
export default class MealCell extends RX.Component<AddMealCellProps> {
  public render() {
    const { meal } = this.props

    console.log('MEAL CELL', meal.items)
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            onPress={(e) => {
              e.stopPropagation()
              e.preventDefault()
              LocationStore.navigate(this.props, `${Routes.mealForm}/${meal.id}`)
            }}
            style={[
              styles.container,
              this.props.wrapperStyle,
              {
                width: this.props.size,
                // backgroundColor: theme.colors.textInputBg,

                // height: this.props.size * 1.25,
                borderRadius: this.props.size / 20,
              },
            ]}
          >
            <MealItemGrid
              size={this.props.size}
              mealItems={meal.items}
            />

            <RX.Text
              style={{ marginTop: Styles.values.spacing / 2 }}
            >
              {
                meal.items.map((mealItem, index) => [
                  (index > 0) ? (index === (meal.items.length - 1) ? translate(', and ') : ', ') : null,
                  <Text
                    onPress={() => LocationStore.navigate(this.props, `/meal/${meal.id}/`)}
                    style={[
                      styles.title,
                      {
                        color: theme.colors.text,
                      }
                    ]}
                    translations={
                      mealItem.item ?
                        (determineIfIsFood(mealItem.item) ? mealItem.item.name : mealItem.item.title)
                        : (mealItem.name || [])
                    }
                  />,
                ])
              }

            </RX.Text>

            {
              !this.props.hideAvatar &&
              <Link to={`/${meal.author.username}`} style={styles.avatarContainer}>
                <Image
                  source={meal.author.avatar!.url}
                  style={{
                    width: this.props.size / 5,
                    height: this.props.size / 5,
                    borderRadius: 100,
                  }}
                />
              </Link>
            }

            {this._renderLikes(theme)}
            {this._renderTime(theme)}
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _renderLikes = (theme: Theme) => {
    return null // TODO

    let size = this.props.size / 4
    if (size < 60) {
      size = 60
    }

    return (
      <RX.View style={[styles.likesContainer, { top: (this.props.size * 1.3) - (size - 10) }]}>
        <LikeButton
          size={size}
          liked={this.props.meal.likedByUser || false}
          onChange={liked => {

          }}
        />
        <Text
          style={[styles.likeText, { color: theme.colors.recipeCardLikeText }]}>{this.props.meal.likesCount}</Text>
      </RX.View>
    )
  }

  private _renderTime = (theme: Theme) => {
    return (
      <RX.View style={[styles.timingContainer, { top: ((this.props.size * 1.3) - 30) }]}>
        <Text
          style={[styles.timingNumber, { color: theme.colors.recipeCardTimingNumberColor, }]}>{this.props.meal.timing.totalTime}</Text>
        <Text translate style={[styles.timingUnit, { color: theme.colors.recipeCardTimingUnitColor }]}>min</Text>
      </RX.View>
    )
  }

  static fragments = {
    mealCellMeal: gql`
      fragment MealCellMeal on Meal {
        id
        name {text locale}
        likedByUser
        likesCount
        items {
          ...MealItemRowMealItem
        }
        author {
          id
          username
          avatar {url}
        }
        timing {
          totalTime
        }
      }

      ${MealItemRow.fragments.mealItem}
    `
  }

}

const styles = {
  container: RX.Styles.createViewStyle({
    // backgroundColor: '#fff',
    // borderWidth: 1,
    // borderColor: '#eee',
    cursor: 'pointer',
    paddingBottom: Styles.values.spacing,
  }),
  innerContainer: RX.Styles.createViewStyle({
    // height: 200,
    // width: 100,
  }),
  image: RX.Styles.createImageStyle({
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  }),
  title: RX.Styles.createTextStyle({
    // marginTop: Styles.values.spacingLarge / 2,
    font: Styles.fonts.displayLight,
  }),
  avatarImage: RX.Styles.createImageStyle({
    width: 50,
    height: 50,
    borderRadius: 25,
  }),
  avatarContainer: RX.Styles.createViewStyle({
    position: 'absolute',
    top: 15,
    [Styles.values.end]: 15,
  }),
  likesContainer: RX.Styles.createViewStyle({
    position: 'absolute',
    [Styles.values.end]: -10,
    flexDirection: AppConfig.isRTL() ? 'row-reverse' : 'row',
    alignItems: 'center',
  }),
  likeText: RX.Styles.createTextStyle({
    font: Styles.fonts.displayLight,
    top: 2,
    [Styles.values.end]: -15,
    fontSize: Styles.fontSizes.size16,
  }),
  timingContainer: RX.Styles.createViewStyle({
    flexDirection: AppConfig.isRTL() ? 'row-reverse' : 'row',
    position: 'absolute',
    alignItems: 'flex-end',
    [Styles.values.start]: 16,
  }),
  timingUnit: RX.Styles.createTextStyle({
    font: Styles.fonts.displayLight,
  }),
  timingNumber: RX.Styles.createTextStyle({
    font: Styles.fonts.displayBold,
    fontSize: Styles.fontSizes.size16,
    [Styles.values.marginEnd]: 3,
  }),
}
