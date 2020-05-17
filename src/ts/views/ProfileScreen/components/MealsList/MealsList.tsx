/*
 * MealsList.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import AddCell from '@Common/AddCell/AddCell'
import CardList from '@Common/CardList/CardList'
import { Routes } from '@Models/common'
import LocationStore from '@Services/LocationStore'
import MealCell from '@Views/ProfileScreen/components/MealsList/components/MealCell/MealCell'
import { MealCellMeal } from '@Views/ProfileScreen/components/MealsList/components/MealCell/types/MealCellMeal'
import { FC, useCallback, useState } from 'react'
import RX from 'reactxp'


const _styles = {
  item: RX.Styles.createViewStyle({
    [Styles.values.marginEnd]: Styles.values.spacing,
    marginBottom: Styles.values.spacing / 2,
  }),
  container: RX.Styles.createViewStyle({
    flexDirection: 'row',
    flexWrap: 'wrap',
  }),
  add: RX.Styles.createViewStyle({
    alignSelf: 'flex-start',
    // marginBottom: Styles.values.spacing,
    // marginHorizontal: Styles.values.spacing / 2,
  })
}

interface RecipesListProps extends RX.CommonProps {
  style?: any,
  meals: MealCellMeal[],
  showAddMeal?: boolean,
  onLayout?: (e: RX.Types.ViewOnLayoutEvent) => void,
  hideAvatar?: boolean,
  loading?: boolean,
}

const MealsList: FC<RecipesListProps> = (props) => {
  const [dimensions, setDimensions] = useState<{ addCellWidth: number, addCellHeight: number } | undefined>()

  const _renderAddRecipeCell = useCallback((size: number) => (
    <AddCell
      translatedText='CreateNewMeal'
      size={size}
      onPress={() => LocationStore.navigate(props, `${Routes.mealForm}`)}
      wrapperStyle={_styles.add}
      innerContainerStyle={{
        width: dimensions ? dimensions.addCellWidth : size,
        height: dimensions ? dimensions.addCellHeight : 226,
        minHeight: 226,
      }}
    />
  ), [])

  const _renderMealCell = useCallback((meal: MealCellMeal, size: number, index: number) => (
    <MealCell
      size={size}
      meal={meal}
      onLayout={index === 0 ? _onLayout : undefined}
    />
  ), [])

  const _onLayout = useCallback((e: RX.Types.ViewOnLayoutEvent) => {
    setDimensions({
      addCellWidth: e.width,
      addCellHeight: e.height,
    })
  }, [!!dimensions])

  return (
    <CardList
      items={props.meals}
      renderAddCell={_renderAddRecipeCell}
      renderCell={_renderMealCell}
      showAddButton={true}
      onLayout={props.onLayout}
      hideAvatar={props.hideAvatar}
      loading={props.loading}
      columns={2}
    />
  )

}

export default MealsList
