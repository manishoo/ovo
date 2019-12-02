/*
 * MealItemRow.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import FlatButton from '@Common/FlatButton/FlatButton'
import { showFoodPicker } from '@Common/FoodPickerDialog/FoodPickerDialog'
import { FoodPickerMealItem } from '@Common/FoodPickerDialog/FoodPicker'
import { translate } from '@Common/LocalizedText/LocalizedText'
import IngredientCard from '@Common/recipe/IngredientCard/IngredientCard'
import { IngredientCardIngredient } from '@Common/recipe/IngredientCard/types/IngredientCardIngredient'
import RecipeCard from '@Common/RecipesList/components/RecipeCard/RecipeCard'
import { FoodTypes } from '@Models/FoodModels'
import LocationStore from '@Services/LocationStore'
import { createId } from '@Utils/create-id'
import { MyMealItem } from '@Views/MealForm/MealForm'
import RX from 'reactxp'


interface MealItemRowProps {
  style?: any,
  mealItem: MyMealItem,
  onMealItemChange: (mealItem: MyMealItem) => void,
  onMealItemDelete: (mealItemId: string) => void,
}

export default class MealItemRow extends RX.Component<MealItemRowProps> {
  public render() {
    const { style } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[styles.container, style]}
          >
            {this._renderMealItem(this.props.mealItem, true)}

            <RX.View
              style={{
                backgroundColor: theme.colors.textInputBg,
                borderRadius: 10,
                flexDirection: 'row',
                [Styles.values.marginStart]: Styles.values.spacing,
                padding: Styles.values.spacing,
              }}
            >
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

              <RX.ScrollView
                style={{ flex: 1 }}
                horizontal
              >
                <RX.View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start' }}>
                  {
                    this.props.mealItem.alternativeMealItems.map(alternativeMealItem => (
                      this._renderMealItem(alternativeMealItem)
                    ))
                  }
                </RX.View>
              </RX.ScrollView>
            </RX.View>
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _renderMealItem = (mealItem: MyMealItem, isMainMealItem?: boolean) => {
    if (mealItem.food) {
      return (
        <IngredientCard
          size={150}
          onPress={mealItem.food ? () => LocationStore.navigate(this.props, `/food/${mealItem.food.id}/`) : undefined}
          onIngredientChange={this._onMealItemIngredientChange(mealItem)}
          onDelete={() => this.props.onMealItemDelete(mealItem.id)}
          ingredient={{
            amount: mealItem.amount,
            customUnit: mealItem.customUnit,
            description: mealItem.description,
            food: mealItem.food,
            gramWeight: mealItem.gramWeight,
            name: mealItem.food.name,
            thumbnail: mealItem.food.thumbnail,
            weight: mealItem.weight,
          }}
          style={styles.mealItem}
        />
      )
    }

    if (mealItem.recipe) {
      return (
        <RecipeCard
          size={150}
          onServingChange={this._onMealItemServingChange(mealItem.id, isMainMealItem)}
          serving={mealItem.amount}
          recipe={mealItem.recipe}
          onDelete={() => this.props.onMealItemDelete(mealItem.id)}
          style={styles.mealItem}
        />
      )
    }

    throw new Error('no recipe or food')
  }

  private _onMealItemIngredientChange = (mealItem: MyMealItem) => (ingredient: IngredientCardIngredient) => {
    this.props.onMealItemChange({
      ...mealItem,
      amount: ingredient.amount,
      food: ingredient.food,
      gramWeight: ingredient.gramWeight,
      customUnit: ingredient.customUnit,
      description: ingredient.description,
      // thumbnail: ingredient.thumbnail,
      weight: ingredient.weight,
      alternativeMealItems: mealItem.alternativeMealItems,
    })
  }

  private _onMealItemServingChange = (id: string, isMainMealItem: boolean) => (serving: number) => {
    if (isMainMealItem) {
      this.props.onMealItemChange({
        ...this.props.mealItem,
        amount: serving,
      })
    } else {
      this.props.onMealItemChange({
        ...this.props.mealItem,
        alternativeMealItems: this.props.mealItem.alternativeMealItems.map(alternativeMealItem => {
          if (alternativeMealItem.id === id) {
            return {
              ...alternativeMealItem,
              amount: serving,
            }
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
        ...this.props.mealItem.alternativeMealItems,
        {
          amount: mealItem.amount,
          food: mealItem.food,
          recipe: mealItem.recipe,
          weight: mealItem.weight,
          customUnit: mealItem.customUnit,
          description: mealItem.description,
          gramWeight: mealItem.gramWeight,
          id: mealItem.id || createId(),
        },
      ]
    })
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    flexDirection: 'row',
    padding: Styles.values.spacing,
  }),
  mealItem: RX.Styles.createViewStyle({
    [Styles.values.marginEnd]: Styles.values.spacing,
    marginBottom: Styles.values.spacing,
  })
}
