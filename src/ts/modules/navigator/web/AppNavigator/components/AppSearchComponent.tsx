/*
 * AppSearchComponent.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import { FoodPreviewMealItem } from '@Common/FoodPickerDialog/components/types/FoodPreviewMealItem'
import { useFoodsSearch } from '@Common/FoodPickerDialog/FoodPicker'
import {
  FoodPickerQuery_foods_foods,
  FoodPickerQuery_recipes_recipes
} from '@Common/FoodPickerDialog/types/FoodPickerQuery'
import MealItemComponent from '@Common/MealItemComponent/MealItemComponent'
import getDefaultMealItem from '@Utils/get-default-meal-item'
import ExploreSearch from '@Views/ExploreSearch/ExploreSearch'
import { SearchResultQueryVariables } from '@Views/SearchResult/types/SearchResultQuery'
import { forwardRef, useCallback, useContext, useImperativeHandle, useMemo, useState } from 'react'
import RX from 'reactxp'


const levenSort = require('leven-sort')

const _styles = {
  dropDownContainer: RX.Styles.createViewStyle({
    width: 330,
    borderRadius: 8,
    overflow: 'visible',
    marginTop: 13,
    maxHeight: 360,

    // @ts-ignore
    transition: 'all 0.3s'
  }),
  triangle: RX.Styles.createViewStyle({
    width: 20,
    height: 20,
    transform: [{
      rotate: '45deg'
    }],
    position: 'absolute',
    top: -11,
    alignSelf: 'center',
  }),
  scrollView: RX.Styles.createScrollViewStyle({
    padding: Styles.values.spacing / 2,
  }),
  mealItemComponent: RX.Styles.createViewStyle({
    // @ts-ignore
    cursor: 'grab'
  })
}

const AppSearchComponent = ({ onSubmit, inputRef }: any, ref: any) => {
  const defaultState = { nameSearchQuery: '' }
  const [variables, setVariables] = useState<SearchResultQueryVariables>(defaultState)
  const { data, loading } = useFoodsSearch(variables.nameSearchQuery)
  const [dropDownVisible, setDropDownVisible] = useState(false)
  // const [underlayVisible, setUnderlayVisible] = useState(false)

  const foods = (data && data.foods && data.foods.foods) || []
  const recipes = (data && data.recipes && data.recipes.recipes) || []

  let foodsAndRecipes: (FoodPickerQuery_recipes_recipes | FoodPickerQuery_foods_foods)[] = levenSort([
    ...foods.map(i => ({
      id: i.id,
      name: i.name[0].text,
    })),
    ...recipes.map(i => ({
      id: i.id,
      name: i.title[0].text,
    })),
  ], variables.nameSearchQuery, 'name')
  const mealItems = foodsAndRecipes.map(i => [
    ...foods,
    ...recipes,
  ].find(p => p.id === i.id)!).map(getDefaultMealItem)

  const { theme } = useContext(ThemeContext)

  const dropDownContainerStyle = useMemo(() => RX.Styles.createViewStyle({
    backgroundColor: theme.colors.cardBg,
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
    // @ts-ignore web
    display: dropDownVisible ? 'flex' : 'none',
  }, false), [theme.colors.cardBg, theme.colors.borderLight, dropDownVisible])

  const triangleStyle = useMemo(() => RX.Styles.createViewStyle({
    backgroundColor: theme.colors.cardBg,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: theme.colors.borderLight,
  }, false), [theme.colors.cardBg])

  const _onDragStart = useCallback((mealItem: FoodPreviewMealItem) => (e: RX.Types.DragEvent) => {
    e.dataTransfer.dropEffect = 'copy'
    e.dataTransfer.effectAllowed = 'copy'
    e.dataTransfer.setData('mealItem', JSON.stringify(mealItem))

    setImmediate(() => setDropDownVisible(false))
  }, [dropDownVisible])

  const _onDragEnd = useCallback(() => {
    setDropDownVisible(true)
  }, [dropDownVisible])

  const _onInputFocus = useCallback(() => {
    setDropDownVisible(true)
  }, [dropDownVisible])

  useImperativeHandle(ref, () => ({
    setDropDownVisible
  }))

  return <>
    <ExploreSearch
      ref={inputRef}
      onFocus={_onInputFocus}
      variables={{
        nameSearchQuery: variables.nameSearchQuery,
      }}
      onChange={variables => setVariables(variables)}
      onSubmit={() => {
        onSubmit()
        setVariables(defaultState)
      }}
      loading={loading}
    />

    {
      mealItems.length > 0 &&
      <RX.View
        style={[
          _styles.dropDownContainer,
          dropDownContainerStyle,
        ]}
      >
        <RX.View
          style={[
            _styles.triangle,
            triangleStyle,
          ]}
        />
        <RX.ScrollView
          style={_styles.scrollView}
        >
          {
            mealItems.map(mealItem => (
              <MealItemComponent
                onDragStart={_onDragStart(mealItem)}
                onDragEnd={_onDragEnd}
                key={mealItem.item!.id}
                mealItem={mealItem}
                style={_styles.mealItemComponent}
              />
            ))
          }
        </RX.ScrollView>
      </RX.View>
    }

  </>
}

export default forwardRef(AppSearchComponent)
