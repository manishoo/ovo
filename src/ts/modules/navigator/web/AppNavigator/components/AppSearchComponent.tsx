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
import CalendarService from '@Services/CalendarService'
import getDefaultMealItem from '@Utils/get-default-meal-item'
import ExploreSearch from '@Views/ExploreSearch/ExploreSearch'
import { SearchResultQueryVariables } from '@Views/SearchResult/types/SearchResultQuery'
import debounce from 'lodash/debounce'
import { forwardRef, useCallback, useContext, useImperativeHandle, useMemo, useRef, useState } from 'react'
import RX from 'reactxp'


const levenSort = require('leven-sort')

const DROPDOWN_HEIGHT = 360

const _styles = {
  dropDownContainer: RX.Styles.createViewStyle({
    width: 330,
    borderRadius: 8,
    overflow: 'visible',
    marginTop: 13,
    maxHeight: DROPDOWN_HEIGHT,

    ...Styles.values.defaultShadow,

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

const whicheverIsLarger = (a: number, b: number) => a > b ? a : b

const AppSearchComponent = ({ onSubmit, inputRef }: any, ref: any) => {
  const [nameSearchQuery, setNameSearchQuery] = useState('')
  const [dropDownVisible, setDropDownVisible] = useState(false)
  const { theme } = useContext(ThemeContext)

  const { data, loading, fetchMore } = useFoodsSearch(nameSearchQuery)

  const foods = (data && data.foods && data.foods.foods) || []
  const recipes = (data && data.recipes && data.recipes.recipes) || []
  const page = data && data.foods && data.recipes ? whicheverIsLarger(data.foods.pagination.page, data.recipes.pagination.page) : 1

  const sort = useCallback((foods1: FoodPickerQuery_foods_foods[], recipes1: FoodPickerQuery_recipes_recipes[]) =>
    levenSort([
      ...foods1.map(i => ({
        id: i.id,
        name: i.name[0].text,
      })),
      ...recipes1.map(i => ({
        id: i.id,
        name: i.title[0].text,
      })),
    ], nameSearchQuery, 'name')
      .map((i: any) => [
        ...foods1,
        ...recipes1,
      ].find(p => p.id === i.id)!), [])

  const mealItems = [...foods, ...recipes].map(getDefaultMealItem)

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

    CalendarService.setDraggingMealItem(mealItem)

    setImmediate(() => setDropDownVisible(false))
  }, [dropDownVisible])

  const _onDragEnd = useCallback(() => {
    setDropDownVisible(true)

    CalendarService.setDraggingMealItem()
  }, [dropDownVisible])

  const _onInputFocus = useCallback(() => {
    setDropDownVisible(true)
  }, [dropDownVisible])

  useImperativeHandle(ref, () => ({
    setDropDownVisible
  }))

  const scrollViewHeight = useRef<number>()

  const _onReachEnd = useCallback(debounce((nameSearchQuery: string, page: number) => {
    if (loading) return

    fetchMore({
      variables: {
        nameSearchQuery,
        recipesPage: page + 1,
        foodsPage: page + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev
        if (!fetchMoreResult.foods.pagination.hasNext && !fetchMoreResult.recipes.pagination.hasNext) return prev

        return Object.assign({}, prev, {
          foods: {
            pagination: {
              ...prev.foods.pagination,
              page: fetchMoreResult.foods.pagination.page,
            },
            foods: [
              ...prev.foods.foods,
              ...fetchMoreResult.foods.foods,
            ],
          },
          recipes: {
            pagination: {
              ...prev.recipes.pagination,
              page: fetchMoreResult.recipes.pagination.page,
            },
            recipes: [
              ...prev.recipes.recipes,
              ...fetchMoreResult.recipes.recipes,
            ],
          }
        })
      }
    })
  }, 100), [])

  const _handleOnScroll = useCallback((scrollTop: number) => {
    const offset = 50

    if (scrollViewHeight.current) {
      if ((DROPDOWN_HEIGHT + scrollTop) >= scrollViewHeight.current - offset) {
        _onReachEnd(nameSearchQuery, page)
      }
    }
  }, [scrollViewHeight.current, nameSearchQuery, page])

  const _onExploreSearchChange = useCallback(debounce(({ nameSearchQuery }: SearchResultQueryVariables) => {
    setNameSearchQuery(nameSearchQuery)
  }, 500), [])

  return <>
    <ExploreSearch
      ref={inputRef}
      onFocus={_onInputFocus}
      variables={{
        nameSearchQuery,
      }}
      onChange={_onExploreSearchChange}
      onSubmit={() => {
        onSubmit()
        setNameSearchQuery('')
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
          onContentSizeChange={(width, height) => scrollViewHeight.current = height}
          onScroll={_handleOnScroll}
        >
          {
            mealItems.map(mealItem => (
              <MealItemComponent
                key={mealItem.item!.id}
                mealItem={mealItem}
                onDragStart={_onDragStart(mealItem)}
                onDragEnd={_onDragEnd}
                style={_styles.mealItemComponent}
                showAmounts={false}
              />
            ))
          }
        </RX.ScrollView>
      </RX.View>
    }

  </>
}

export default forwardRef(AppSearchComponent)
