/*
 * RecipeFormIngredients.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { useTheme } from '@App/ThemeContext'
import { FoodPickerMealItem } from '@Common/FoodPickerDialog/FoodPicker'
import MealItemComponent from '@Common/MealItemComponent/MealItemComponent'
import Text from '@Common/Text/Text'
import useMealItemDragAndDrop from '@Utils/hooks/useMealItemDragAndDrop'
import { RecipeFormQuery_recipe_ingredients } from '@Views/RecipeForm/types/RecipeFormQuery'
import { useCallback, useState } from 'react'
import RX from 'reactxp'
import SortableList from 'src/ts/modules/SortableList/index.web'


const _styles = {
  container: RX.Styles.createViewStyle({
    //
  }),
}

interface RecipeFormIngredientsProps {
  style?: any,
  ingredients: RecipeFormQuery_recipe_ingredients[],
  draggingItem?: FoodPickerMealItem,
  onMealItemRemove: (index: number) => any,
  onMealItemChange: (ingredient: RecipeFormQuery_recipe_ingredients) => void,
  onMealItemAdd: (ingredient: FoodPickerMealItem, index?: number) => void,
}

const RecipeFormIngredients = (props: RecipeFormIngredientsProps) => {
  const {
    style,
    ingredients,
    draggingItem,
    onMealItemRemove,
    onMealItemChange,
    onMealItemAdd,
  } = props

  const theme = useTheme()
  const [spaceIndex, setSpaceIndex] = useState<number>()

  const {
    onDrop,
    onDragOver,
    onDragLeave,
    onDragEnter,
  } = useMealItemDragAndDrop({
    setSpaceIndex: index => setSpaceIndex(index),
    onMealItemDropped: (mealItem, index) => onMealItemAdd(mealItem, index),
    spaceIndex,
  })

  const _renderItem = useCallback((ingredient: RecipeFormQuery_recipe_ingredients, index: number) => (
    <MealItemComponent
      mealItem={ingredient}
      onMealItemRemove={onMealItemRemove(index)}
      onMealItemChange={onMealItemChange}
      onDragEnter={onDragEnter(index)}
    />
  ), [onMealItemRemove,
    onMealItemChange,
    onDragEnter,])

  let mealItems = [...ingredients]

  if (spaceIndex !== undefined && draggingItem) {
    mealItems
      .splice(spaceIndex || 0, 0, draggingItem)
  }

  return (
    <RX.View
      style={[
        _styles.container,
        style,
      ]}
    >
      <RX.View
        style={RX.Styles.createViewStyle({
          backgroundColor: theme.colors.cardBg,
          borderWidth: 1,
          borderColor: theme.colors.borderLight,
          paddingVertical: Styles.values.spacing / 2,
          borderRadius: 10,
          minHeight: 81 + Styles.values.spacing,
          justifyContent: mealItems.length === 0 ? 'center' : undefined,
        }, false)}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDragEnter={ingredients.length === 0 ? onDragEnter(0) : undefined}
      >
        {
          mealItems.length === 0 &&
          <Text
            translate={AppConfig.isTouchInterface() ? 'ingredientsEmptyUseInput' : 'dragOrInput'}
            style={RX.Styles.createTextStyle({
              color: theme.colors.subtitle,
              alignSelf: 'center',
            }, false)}
          />
        }

        <SortableList
          items={mealItems}
          disabled={true}
          renderItem={_renderItem}
          onItemsChange={items => {
          }}
        />
      </RX.View>
    </RX.View>
  )
}

export default RecipeFormIngredients
