/*
 * MealCell.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import HoverView from '@Common/HoverView/HoverButton'
import IngredientCard from '@Common/IngredientCard/IngredientCard'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import { Routes } from '@Models/common'
import { withNavigation } from '@Modules/navigator'
import LocationStore from '@Services/LocationStore'
import MealItemRow from '@Views/MealForm/components/MealItemRow/MealItemRow'
import {
  MealCellMeal,
  MealCellMeal_items_item,
  MealCellMeal_items_item_Food
} from '@Views/ProfileScreen/components/MealsList/components/MealCell/types/MealCellMeal'
import RX from 'reactxp'


function determineIfIsFood(toBeDetermined: Partial<MealCellMeal_items_item>): toBeDetermined is MealCellMeal_items_item_Food {
  // @ts-ignore __typename
  return toBeDetermined.__typename === 'Food'
}

interface AddMealCellProps {
  style?: any,
  meal: MealCellMeal,
  hideAvatar?: boolean,
}

@withNavigation
export default class MealCell extends RX.Component<AddMealCellProps> {
  static fragments = {
    meal: gql`
      fragment MealCellMeal on Meal {
        id
        name {text locale}
        likedByUser
        likesCount
        items {
          ...MealItemRowMealItem
        }
        hasPermutations
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

  public render() {
    const { meal } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <HoverView
            style={[
              styles.container,
              this.props.style,
            ]}
            onRenderChild={isHovering => (
              <RX.View
                onPress={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  LocationStore.navigate(this.props, `${Routes.mealForm}/${meal.id}`)
                }}
                style={[
                  {
                    borderRadius: 15,
                    padding: Styles.values.spacing / 2,
                    backgroundColor: isHovering ? theme.colors.textInputBgHovering : theme.colors.textInputBg,
                  },
                ]}
              >
                <RX.View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'flex-start',
                  }}
                >
                  {
                    meal.items.map(mealItem => (
                      <IngredientCard
                        size={100}
                        hideTitle
                        hideUnits
                        ingredient={mealItem}
                        style={{
                          [Styles.values.marginEnd]: Styles.values.spacing / 2,
                        }}
                      />
                    ))
                  }
                </RX.View>
                <Text
                  style={{ marginTop: Styles.values.spacing / 2 }}
                >
                  {
                    meal.items.map((mealItem, index) => [
                      (index > 0) ? translate(', ') : null,
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
                            : []
                        }
                      />,
                    ])
                  }

                  {meal.hasPermutations && '*'}
                </Text>
              </RX.View>
            )}
          />
        )}
      </ThemeContext.Consumer>
    )
  }

}

const styles = {
  container: RX.Styles.createViewStyle({
    cursor: 'pointer',
    alignSelf: 'flex-start',
  }),
  innerContainer: RX.Styles.createViewStyle({}),
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
