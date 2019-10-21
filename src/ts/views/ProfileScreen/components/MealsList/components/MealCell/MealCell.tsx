/*
 * MealCard.tsx
 * Copyright: Ouranos Studio 2019
 */

import Image from 'common/Image/Image'
import LikeButton from 'common/LikeButton/LikeButton'
import Link from 'common/Link/Link'
import Text from 'common/Text/Text'
import { withNavigation } from 'modules/navigator'
import RX from 'reactxp'
import AppConfig from 'src/ts/app/AppConfig'
import Styles from 'src/ts/app/Styles'
import { Theme } from 'src/ts/app/Theme'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { Routes } from 'src/ts/models/common'
import LocationStore from 'src/ts/stores/LocationStore'
import MealItemGrid from 'src/ts/views/ProfileScreen/components/MealsList/components/MealCell/MealItemGrid'
import { ProfileMealsQuery_meals_meals } from 'src/ts/views/ProfileScreen/components/ProfileMeals/types/ProfileMealsQuery'


interface AddMealCellProps {
  wrapperStyle?: any,
  size: number,
  meal: ProfileMealsQuery_meals_meals,
  hideAvatar?: boolean,
}

@withNavigation
export default class MealCell extends RX.Component<AddMealCellProps> {
  public render() {
    const { meal } = this.props

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

            <RX.Text>
              {
                meal.items.map(mealItem => [
                  <Text
                    onPress={() => LocationStore.navigate(this.props, `/meal/${meal.id}/`)}
                    style={[
                      styles.title,
                      {
                        color: theme.colors.text,
                      }
                    ]}
                    translations={
                      mealItem.food ?
                        mealItem.food.name
                        : mealItem.recipe.title
                    }
                  />,
                  ', ',
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
