/*
 * MealItemRow.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import FlatButton from '@Common/FlatButton/FlatButton'
import { FoodPickerMealItem, FoodTypes } from '@Common/FoodPickerDialog/FoodPicker'
import { showFoodPicker } from '@Common/FoodPickerDialog/FoodPickerDialog'
import IngredientCard from '@Common/IngredientCard/IngredientCard'
import { IngredientCardIngredient } from '@Common/IngredientCard/types/IngredientCardIngredient'
import { translate } from '@Common/LocalizedText/LocalizedText'
import { createId } from '@Utils/create-id'
import {
  MealItemRowMealItem,
  MealItemRowMealItem_alternativeMealItems
} from '@Views/MealForm/components/MealItemRow/types/MealItemRowMealItem'
import gql from 'graphql-tag'
import RX from 'reactxp'


interface MealItemRowProps {
  style?: any,
  mealItem: MealItemRowMealItem,
  onMealItemChange: (mealItem: MealItemRowMealItem) => void,
  onMealItemDelete: (mealItemId: string) => void,
}

export default class MealItemRow extends RX.Component<MealItemRowProps> {
  static fragments = {
    mealItem: gql`
      fragment MealItemRowMealItem on MealItem {
        id
        name {text locale}
        description {text locale}
        amount
        customUnit {
          gramWeight
          name { text locale }
        }
        unit {
          ... on Weight {
            amount
            gramWeight
            id
            name { text locale }
          }
          ... on CustomUnit {
            gramWeight
            name { text locale }
          }
        }
        isOptional
        item {
          ... on Food {
            ...IngredientFood
          }
          ... on Recipe {
            ...IngredientRecipe
          }
        }
        alternativeMealItems {
          id
          name {text locale}
          description {text locale}
          amount
          customUnit {
            gramWeight
            name { text locale }
          }
          unit {
            ... on Weight {
              amount
              gramWeight
              id
              name { text locale }
            }
            ... on CustomUnit {
              gramWeight
              name { text locale }
            }
          }
          item {
            ... on Food {
              ...IngredientFood
            }
            ... on Recipe {
              ...IngredientRecipe
            }
          }
        }
      }

      ${IngredientCard.fragments.recipe}
      ${IngredientCard.fragments.food}
    `
  }

  public render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.ScrollView
            horizontal
            style={[
              styles.scrollView,
              {
                backgroundColor: theme.colors.textInputBg,
                borderRadius: 10,
                flexDirection: 'row',
                padding: Styles.values.spacing,
                marginBottom: Styles.values.spacing,
              }
            ]}
          >
            {this._renderMealItem(this.props.mealItem, true)}

            <RX.View style={{ width: 150, justifyContent: 'center', alignItems: 'center' }}>
              <FlatButton
                onPress={() => showFoodPicker({
                  autoFocus: true,
                  foodTypes: [FoodTypes.food, FoodTypes.recipe],
                  onDismiss: () => null,
                  onSubmit: this._onMealItemAlternativeCreation,
                })}
                label={translate('Add Alternative')}
              />
            </RX.View>

            {
              this.props.mealItem.alternativeMealItems.map(alternativeMealItem => (
                this._renderMealItem(alternativeMealItem)
              ))
            }
          </RX.ScrollView>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _renderMealItem = (mealItem: MealItemRowMealItem_alternativeMealItems, isMainMealItem?: boolean) => {
    if (!mealItem.item) throw new Error('no meal item')

    return (
      <IngredientCard
        size={150}
        // onPress={mealItem.food ? () => LocationStore.navigate(this.props, `/food/${mealItem.food.id}/`) : undefined}
        onIngredientChange={this._onMealItemIngredientChange(mealItem, isMainMealItem)}
        onDelete={() => this.props.onMealItemDelete(mealItem.id)}
        ingredient={{
          ...mealItem,
          isOptional: null,
        }}
        style={styles.mealItem}
      />
    )
  }

  private _onMealItemIngredientChange = (mealItem: MealItemRowMealItem_alternativeMealItems, isMainMealItem?: boolean) => (ingredient: IngredientCardIngredient) => {
    if (isMainMealItem) {
      this.props.onMealItemChange({
        ...this.props.mealItem,
        ...ingredient,
      })
    } else {
      this.props.onMealItemChange({
        ...this.props.mealItem,
        alternativeMealItems: this.props.mealItem.alternativeMealItems.map(alternativeMealItem => {
          if (alternativeMealItem.id === mealItem.id) {
            return ingredient
          }

          return alternativeMealItem
        })

      })
    }
  }

  private _onMealItemAlternativeCreation = (mealItem: FoodPickerMealItem) => {
    this.props.onMealItemChange({
      ...this.props.mealItem,
      alternativeMealItems: [
        {
          id: mealItem.id || createId(),
          ...mealItem,
        },
        ...this.props.mealItem.alternativeMealItems,
      ]
    })
  }
}

const styles = {
  // container: RX.Styles.createViewStyle({
  //   flexDirection: 'row',
  //   padding: Styles.values.spacing,
  // }),
  scrollView: RX.Styles.createScrollViewStyle({
    // @ts-ignore
    display: 'flex',
  }),
  mealItem: RX.Styles.createViewStyle({
    [Styles.values.marginEnd]: Styles.values.spacing,
    marginBottom: Styles.values.spacing,
  })
}
