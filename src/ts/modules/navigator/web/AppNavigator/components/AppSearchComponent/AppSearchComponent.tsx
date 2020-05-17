/*
 * AppSearchComponent.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, useQuery } from '@apollo/client'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import FoodPreview from '@Common/FoodPickerDialog/components/FoodPreview'
import { FoodPreviewMealItem } from '@Common/FoodPickerDialog/components/types/FoodPreviewMealItem'
import MealItemComponent from '@Common/MealItemComponent/MealItemComponent'
import CalendarService from '@Services/CalendarService'
import ExploreSearch from '@Views/ExploreSearch/ExploreSearch'
import { SearchResultQueryVariables } from '@Views/SearchResult/types/SearchResultQuery'
import debounce from 'lodash/debounce'
import { forwardRef, useCallback, useContext, useImperativeHandle, useMemo, useRef, useState } from 'react'
import RX from 'reactxp'
import {
  MealItemsQuery,
  MealItemsQueryVariables
} from 'src/ts/modules/navigator/web/AppNavigator/components/AppSearchComponent/types/MealItemsQuery'


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

const MEAL_ITEMS_QUERY = gql`
  query MealItemsQuery(
    $nameSearchQuery: String!,
    $page: Int!,
    $size: Int!,
  ) {
    mealItems(nameSearchQuery: $nameSearchQuery, page: $page, size: $size) {
      items {
        ...FoodPreviewMealItem
      }
      pagination {
        page
        hasNext
      }
    }
  }

  ${FoodPreview.fragments.mealItem}
`

const AppSearchComponent = ({ onSubmit, inputRef }: any, ref: any) => {
  const [nameSearchQuery, setNameSearchQuery] = useState('')
  const [dropDownVisible, setDropDownVisible] = useState(false)
  const { theme } = useContext(ThemeContext)

  const { data, loading, fetchMore } = useQuery<MealItemsQuery, MealItemsQueryVariables>(MEAL_ITEMS_QUERY, {
    fetchPolicy: 'cache-and-network',
    skip: nameSearchQuery.length === 0,
    variables: {
      nameSearchQuery,
      page: 1,
      size: 30
    }
  })

  const page = data ? data.mealItems.pagination.page : 1
  const mealItems = data ? data.mealItems.items : []
  const hasNext = data ? data.mealItems.pagination.hasNext : []

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

  const _onReachEnd = useCallback(debounce((page: number) => {
    if (loading) return
    if (!hasNext) return

    fetchMore({
      variables: {
        page: page + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev
        if (!fetchMoreResult.mealItems.pagination.hasNext) return prev

        return Object.assign({}, prev, {
          mealItems: {
            pagination: {
              ...prev.mealItems.pagination,
              page: fetchMoreResult.mealItems.pagination.page,
            },
            items: [
              ...prev.mealItems.items,
              ...fetchMoreResult.mealItems.items,
            ],
          }
        }) as MealItemsQuery
      }
    })
  }, 100), [page, loading])

  const _handleOnScroll = useCallback((scrollTop: number) => {
    const offset = 50

    if (scrollViewHeight.current) {
      if ((DROPDOWN_HEIGHT + scrollTop) >= scrollViewHeight.current - offset) {
        _onReachEnd(page)
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
