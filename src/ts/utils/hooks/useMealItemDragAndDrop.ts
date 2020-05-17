/*
 * useMealItemDragAndDrop.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { FoodPreviewMealItem } from '@Common/FoodPickerDialog/components/types/FoodPreviewMealItem'
import { FoodPickerMealItem } from '@Common/FoodPickerDialog/FoodPicker'
import CalendarService from '@Services/CalendarService'
import debounce from 'lodash/debounce'
import { useCallback } from 'react'
import RX from 'reactxp'


interface UseDragAndDropProp {
  setSpaceIndex: (index?: number) => void,
  spaceIndex?: number,
  onMealItemDropped: (mealItem: FoodPickerMealItem, index?: number) => void,
}

export default function useDragAndDrop(props: UseDragAndDropProp) {
  const {
    setSpaceIndex,
    spaceIndex,
    onMealItemDropped,
  } = props

  const reset = useCallback(debounce(() => {
    setSpaceIndex(undefined)
  }, 100), [])

  const onDragOver = useCallback((e: RX.Types.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    /**
     * reset spaceIndex after 100ms of debouncing
     * */
    reset()
  }, [])

  const onDragEnter = useCallback((index: number) => (e: RX.Types.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setSpaceIndex(index)
  }, [])

  const onDragLeave = useCallback((e: RX.Types.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const onDrop = useCallback((e: RX.Types.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const mealItemStringified = e.dataTransfer.getData('mealItem')

    try {
      const mealItem = JSON.parse(mealItemStringified) as FoodPreviewMealItem

      onMealItemDropped(mealItem, spaceIndex || 0)

      setSpaceIndex()
      CalendarService.setDraggingMealItem(undefined)
    } catch (e) {
      console.error(e)
    }
  }, [onMealItemDropped])

  return {
    onDragOver,
    onDragEnter,
    onDragLeave,
    onDrop,
  }
}
