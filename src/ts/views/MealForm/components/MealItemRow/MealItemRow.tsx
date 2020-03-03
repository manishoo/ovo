/*
 * MealItemRow.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import FlatButton from '@Common/FlatButton/FlatButton'
import { FoodPreviewOnSubmit } from '@Common/FoodPickerDialog/components/FoodPreview'
import { FoodPickerMealItem, FoodTypes } from '@Common/FoodPickerDialog/FoodPicker'
import { showFoodPicker } from '@Common/FoodPickerDialog/FoodPickerDialog'
import IngredientCard from '@Common/IngredientCard/IngredientCard'
import { translate } from '@Common/LocalizedText/LocalizedText'
import { Ingredient } from '@Models/types/Ingredient'
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
  editable?: boolean,
}

export default class MealItemRow extends RX.Component<MealItemRowProps> {
  static fragments = {
    mealItem: gql`
      fragment MealItemRowMealItem on MealItem {
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
        alternativeMealItems {
          id
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
                flexDirection: 'row',
                marginBottom: Styles.values.spacing,
              }
            ]}
          >
            <RX.View
              style={[
                styles.row,
                {
                  [Styles.values.marginEnd]: Styles.values.spacing,
                  borderRadius: 10,
                  backgroundColor: theme.colors.textInputBg,
                }
              ]}
            >
              {this._renderMealItem(this.props.mealItem, true)}
            </RX.View>

            <RX.View
              style={[
                styles.row,
                {
                  borderWidth: 1,
                  borderColor: this.props.mealItem.alternativeMealItems.length > 0 ? theme.colors.primary : 'transparent',
                  borderStyle: 'dashed',
                }
              ]}
            >
              {
                this.props.mealItem.alternativeMealItems.map(alternativeMealItem => (
                  this._renderMealItem(alternativeMealItem)
                ))
              }

              {
                this.props.editable &&
                <RX.View style={{ width: 150, justifyContent: 'center', alignItems: 'center' }}>
                  <FlatButton
                    onPress={() => showFoodPicker({
                      foodTypes: [FoodTypes.all, FoodTypes.food, FoodTypes.recipe],
                      onDismiss: () => null,
                      onSubmit: this._onMealItemAlternativeCreation,
                      showOptional: true,
                      submitButtonLabel: translate('Add Alternative Meal Item')
                    })}
                    label={translate('Add Alternative')}
                  />
                </RX.View>
              }
            </RX.View>
          </RX.ScrollView>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _renderMealItem = (mealItem: MealItemRowMealItem_alternativeMealItems, isMainMealItem?: boolean) => {
    const { editable = true } = this.props

    if (!mealItem.item) throw new Error('no meal item')

    return (
      <IngredientCard
        size={150}
        // onPress={mealItem.food ? () => LocationStore.navigate(this.props, `/food/${mealItem.food.id}/`) : undefined}
        onIngredientChange={editable ? this._onMealItemIngredientChange(mealItem, isMainMealItem) : undefined}
        onDelete={editable ? this._onMealItemDelete(mealItem, isMainMealItem) : undefined}
        ingredient={mealItem}
        style={isMainMealItem ? undefined : styles.mealItem}
      />
    )
  }

  private _onMealItemDelete = (mealItem: MealItemRowMealItem_alternativeMealItems, isMainMealItem?: boolean) => () => {
    const { onMealItemDelete, onMealItemChange } = this.props

    if (isMainMealItem) {
      onMealItemDelete(this.props.mealItem.item!.id)
    } else {
      onMealItemChange({
        ...this.props.mealItem,
        alternativeMealItems: this.props.mealItem.alternativeMealItems.filter(alternativeMealItem => alternativeMealItem.id !== mealItem.id)
      })
    }
  }

  private _onMealItemIngredientChange = (mealItem: MealItemRowMealItem_alternativeMealItems, isMainMealItem?: boolean) => (ingredient: Ingredient) => {
    const { onMealItemChange } = this.props

    if (isMainMealItem) {
      onMealItemChange({
        ...this.props.mealItem,
        ...ingredient,
      })
    } else {
      onMealItemChange({
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

  private _onMealItemAlternativeCreation: FoodPreviewOnSubmit = (mealItem: FoodPickerMealItem) => {
    const { onMealItemChange } = this.props

    onMealItemChange({
      ...this.props.mealItem,
      alternativeMealItems: [
        ...this.props.mealItem.alternativeMealItems,
        {
          id: mealItem.id || createId(),
          ...mealItem,
        },
      ]
    })
  }
}

const styles = {
  row: RX.Styles.createViewStyle({
    padding: Styles.values.spacing,
    flexDirection: 'row',
    borderRadius: 10,
  }),
  scrollView: RX.Styles.createScrollViewStyle({
    // @ts-ignore
    display: 'flex',
  }),
  mealItem: RX.Styles.createViewStyle({
    [Styles.values.marginEnd]: Styles.values.spacing,
  })
}
