/*
 * DeleteSpace.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import { FoodPreviewMealItem } from '@Common/FoodPickerDialog/components/types/FoodPreviewMealItem'
import { PageScrollContext } from '@Common/Page'
import TrashCan from '@Views/CalendarScreen/components/DayComponent/components/DeleteSpace/components/TrashCan/TrashCan'
import { MealComponentDayMeal } from '@Views/CalendarScreen/components/DayComponent/components/MealComponent/operations/types/MealComponentDayMeal'
import { useCallback, useContext, useMemo, useState } from 'react'
import RX from 'reactxp'


const _styles = {
  container: RX.Styles.createViewStyle({
    flex: 1,
    borderWidth: 2,
    width: 260,
    alignSelf: 'center',
    borderStyle: 'dashed',
    borderRadius: 8,
    marginBottom: Styles.values.spacing / 2,
  }),
}

interface DeleteSpaceProps {
  style?: any
  onMealItemDelete: (mealId: string, mealItemId: string) => void,
}

const DeleteSpace = ({ style, onMealItemDelete }: DeleteSpaceProps) => {
  const { theme } = useContext(ThemeContext)
  const { scrollTop, pageHeight } = useContext(PageScrollContext)

  const [isHovering, setIsHovering] = useState(false)

  const _containerStyle = useMemo(() => RX.Styles.createViewStyle({
    borderColor: theme.colors.red,
    // backgroundColor: isHovering ? theme.colors.red : undefined,
  }, false), [isHovering])

  const _onDragEnter = useCallback((e: RX.Types.DragEvent) => {
    e.stopPropagation()
    e.preventDefault()

    setIsHovering(true)
  }, [])

  const _onDragLeave = useCallback((e: RX.Types.DragEvent) => {
    e.stopPropagation()
    e.preventDefault()

    setIsHovering(false)
  }, [])

  const _onDrop = useCallback((e: RX.Types.DragEvent) => {
    e.stopPropagation()
    e.preventDefault()

    const mealItemStringified = e.dataTransfer.getData('mealItem')
    const mealStringified = e.dataTransfer.getData('meal')

    try {
      const mealItem = JSON.parse(mealItemStringified) as FoodPreviewMealItem
      if (mealStringified) {
        const meal = JSON.parse(mealStringified) as MealComponentDayMeal

        onMealItemDelete(meal.id, mealItem.id)
      }
    } catch (e) {
      console.error(e)
    }
  }, [])

  const _onDragOver = useCallback((e: RX.Types.DragEvent) => {
    e.stopPropagation()
    e.preventDefault()
  }, [])

  const getTrashTop = useCallback((pageHeight: number, scrollTop: number) => {
    const offset = 400

    const maxTop = pageHeight - offset
    if (scrollTop < maxTop) {
      return scrollTop
    } else {
      return maxTop
    }
  }, [])

  const _trashCanStyle = useMemo(() => RX.Styles.createViewStyle({
    marginTop: Styles.values.spacing,
    top: getTrashTop(pageHeight, scrollTop),
  }, false), [scrollTop, pageHeight])

  return (
    <RX.View
      onDragLeave={_onDragLeave}
      onDragOver={_onDragOver}
      onDragEnter={_onDragEnter}
      onDrop={_onDrop}
      style={[
        _styles.container,
        _containerStyle,
        style,
      ]}
    >
      <TrashCan
        isHovering={isHovering}
        style={_trashCanStyle}
      />
    </RX.View>
  )
}

export default DeleteSpace
