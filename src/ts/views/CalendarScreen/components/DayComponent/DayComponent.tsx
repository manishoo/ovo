/*
 * DayComponent.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, useMutation } from '@apollo/client'
import Styles from '@App/Styles'
import { FoodPreviewMealItem } from '@Common/FoodPickerDialog/components/types/FoodPreviewMealItem'
import { translate } from '@Common/LocalizedText/LocalizedText'
import MenuItem from '@Common/MenuItem/MenuItem'
import NutritionInfo from '@Common/NutritionInfo/NutritionInfo'
import { useMe } from '@Models/graphql/me/me'
import { Me } from '@Models/graphql/me/types/Me'
import CalendarService from '@Services/CalendarService'
import { calculateDayNutrition } from '@Utils/shared/calculate-meal-nutrition'
import { useCalendarContext } from '@Views/CalendarScreen/CalendarScreen'
import { MealComponentFragments } from '@Views/CalendarScreen/components/DayComponent/components/MealComponent/operations/MealComponentOperation'
import NutritionBar from '@Views/CalendarScreen/components/DayComponent/components/NutritionBar/NutritionBar'
import {
  DayComponentClearDayMutation,
  DayComponentClearDayMutationVariables
} from '@Views/CalendarScreen/components/DayComponent/types/DayComponentClearDayMutation'
import {
  DayComponentDay,
  DayComponentDay_meals
} from '@Views/CalendarScreen/components/DayComponent/types/DayComponentDay'
import {
  DayComponentNewDayMutation,
  DayComponentNewDayMutationVariables
} from '@Views/CalendarScreen/components/DayComponent/types/DayComponentNewDayMutation'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import RX from 'reactxp'
import DayEmpty from '../DayEmpty/DayEmpty'
import DayPayWall from '../DayPayWall/DayPayWall'
import DayTitle from './components/DayTitle/DayTitle'
import DeleteSpace from './components/DeleteSpace/DeleteSpace'
import MealComponent from './components/MealComponent/MealComponent'
import { createDayInput } from './utils/create-day-input'


const MEAL_WIDTH = 350

export interface DayComponentProps {
  style?: any,
  day?: DayComponentDay,
  date?: Date,
  width: number
  minHeight: number
  isTinyOrSmall: boolean,
  me?: Me,
  onTitlePress: (date?: Date) => void,
  loading?: boolean,
  draggingMealItem?: FoodPreviewMealItem,
  title: string,
  dayColor: string,
}

//
// export interface DayComponentProps extends DayComponentCommonProps {
//   newDayResult: MutationResult<DayComponentNewDayMutation>,
//   newDay: (args: MutationFunctionOptions<DayComponentNewDayMutation, DayComponentNewDayMutationVariables>) => Promise<MutationResult<DayComponentNewDayMutation>>,
//
//   generateDayResult: MutationResult<DayComponentNewDayMutation>,
//   generateDay: (args: MutationFunctionOptions<DayComponentNewDayMutation, DayComponentNewDayMutationVariables>) => Promise<MutationResult<DayComponentNewDayMutation>>,
//
//   clearDayResult: MutationResult<DayComponentClearDayMutation>,
//   clearDay: (args: MutationFunctionOptions<DayComponentClearDayMutation, DayComponentClearDayMutationVariables>) => Promise<MutationResult<DayComponentClearDayMutation>>,
// }

export default function DayComponent(props: DayComponentProps) {
  const {
    style,
    day,
    minHeight,
    width,
    date,
    isTinyOrSmall,
    // me,
    onTitlePress,
    loading,
    draggingMealItem,
    title,
    dayColor,
  } = props

  const me = useMe()!
  const { planId } = useCalendarContext()

  const [newDay, { loading: newDayLoading }] = useNewDay()
  const [generateDay, { loading: generateDayLoading }] = useNewDay()
  const [clearDay, { loading: clearDayLoading }] = useClearDay()

  const mealWidth = width > MEAL_WIDTH ? MEAL_WIDTH : width
  const _mealStyle = useMemo(() => RX.Styles.createViewStyle({
    width: mealWidth,
    maxWidth: MEAL_WIDTH,
  }, false), [width])

  // const isToday = date.hasSame(Date.local(), 'day')
  const _isFreeUser = false // && (Math.round(date.diff(Date.local()).as('day')) > 0) && (me && !me!.membership)

  const dayInput = useMemo(() => createDayInput(me, props.date, false, planId), [!!me, props.date, planId])
  const dayOptimisticResponse = useMemo(() => createDayInput(me, props.date, true), [!!me, props.date])

  const onClearDay = useCallback(() => {
    if (!props.day) return

    return clearDay({
      variables: {
        dayId: props.day.id,
        planId,
      },
      optimisticResponse: {
        clearDay: props.day.id,
      }
    })
  }, [props.day && props.day.id, planId])

  const onDayCreate = useCallback(() => newDay({
    variables: {
      day: dayInput
    },
    optimisticResponse: {
      newDay: dayOptimisticResponse
    }
  }), [props.date, me.meals.map(i => i.id).join(), me.nutritionProfile.id])

  const dayRegenerating = generateDayLoading
  const onDayRegenerate = useCallback(() => generateDay({
    variables: {
      day: dayInput,
      generate: true,
    }
  }), [props.date, me.meals.map(i => i.id).join(), me.nutritionProfile.id])

  const [spaceIndex, setSpaceIndex] = useState<string | undefined>()

  const _setMealSpaceIndex = useCallback((meal: DayComponentDay_meals, mealItemIndex?: number) => {
    if (mealItemIndex !== undefined) {
      setSpaceIndex(`${meal.id}:${mealItemIndex}`)
    } else {
      setSpaceIndex(undefined)
    }
  }, [])

  const _getMealSpaceIndex = useCallback((meal: DayComponentDay_meals) => {
    if (!spaceIndex) return
    if (!draggingMealItem) return

    const [id, index] = spaceIndex.split(':')

    if (id === meal.id) {
      return {
        index: +index,
        mealItem: draggingMealItem,
      }
    }
  }, [spaceIndex, draggingMealItem])

  const showNutritionInfoVisible = day && day.meals.filter(m => m.items.length > 0).length > 0

  const _mealComponentRefs = useRef<{ [k: string]: any }>({})

  const _onMealItemDelete = useCallback((mealId: string, mealItemId: string) => {
    const mealComponentRef = _mealComponentRefs.current[mealId]
    if (!mealComponentRef) return

    setSpaceIndex(undefined)
    CalendarService.setDraggingMealItem()

    mealComponentRef.deleteMealItem(mealItemId)
  }, [_mealComponentRefs])

  useEffect(() => {
    setSpaceIndex(undefined)
    CalendarService.setDraggingMealItem()
  }, [])

  const _onDayTitlePress = useCallback(() => onTitlePress(date), [date])

  const containerStyle = useMemo(() => RX.Styles.createViewStyle({
    alignItems: 'center',
    minHeight,
    width,
    maxWidth: width,
  }, false), [width, minHeight])

  const _dayContainer = useMemo(() => RX.Styles.createViewStyle({
    flex: 1,
    flexDirection: isTinyOrSmall ? 'column' : 'row',
    alignItems: isTinyOrSmall ? 'center' : 'flex-start',
    justifyContent: isTinyOrSmall ? 'flex-start' : 'center',
    alignSelf: 'stretch',
  }, false), [isTinyOrSmall])

  const _daySideView = useMemo(() => RX.Styles.createViewStyle({
    marginTop: isTinyOrSmall ? undefined : 56,
    width: 260,
    alignSelf: 'stretch',
  }, false), [isTinyOrSmall])

  const dayNutrition = useMemo(() => day ? calculateDayNutrition(day) : null, [day])
  const mealItemsCount = useMemo(() => day ? day.meals.reduce(((accumulatedValue, meal) => accumulatedValue + meal.items.length), 0) : 0, [day])

  return (
    <RX.View
      key={String(date)}
      style={[
        style,
        containerStyle,
      ]}
    >
      {
        day
          ? <RX.View
            style={_dayContainer}
          >
            <RX.View
              style={styles.container}
            >
              <DayTitle
                title={title}
                onRegenerate={onDayRegenerate}
                color={dayColor}
                dayRegenerating={dayRegenerating || loading}
                itemControlVisible
                onTitlePress={_onDayTitlePress}
                style={styles.dayTitle}
              >
                <MenuItem
                  label={translate(translate.keys.ClearDay)}
                  onPress={onClearDay}
                />
              </DayTitle>

              {
                isTinyOrSmall && dayNutrition && Object.keys(dayNutrition).length > 0 &&
                <NutritionBar
                  nutrition={dayNutrition}
                />
              }

              {
                day.meals.map(meal => (
                  <MealComponent
                    ref={ref => _mealComponentRefs.current[meal.id] = ref}
                    key={meal.userMeal!.id}
                    meal={meal}
                    dayId={day.id}
                    style={_mealStyle}
                    showIAteThis={!!day.date}
                    spaceIndex={_getMealSpaceIndex(meal)}
                    setSpaceIndex={_setMealSpaceIndex}
                  />
                ))
              }
            </RX.View>

            {
              !isTinyOrSmall && mealItemsCount > 0 &&
              <RX.View
                style={_daySideView}
              >
                {
                  draggingMealItem
                    ? <DeleteSpace
                      onMealItemDelete={_onMealItemDelete}
                    />
                    : showNutritionInfoVisible && dayNutrition && <NutritionInfo
                    title={translate('Total Nutrition')}
                    nutrition={dayNutrition}
                  />
                }
              </RX.View>
            }

          </RX.View>
          : <RX.View
            style={styles.dayEmptyContainer}
          >
            {
              // is it in the future?
              _isFreeUser ?
                <DayPayWall /> :
                <>
                  <DayTitle
                    title={title}
                    onRegenerate={onDayRegenerate}
                    color={dayColor}
                    dayRegenerating={dayRegenerating || loading}
                    itemControlVisible={false}
                    onTitlePress={_onDayTitlePress}
                  />
                  <DayEmpty
                    {...props}
                    loading={loading}
                    onDayRegenerate={onDayRegenerate}
                    dayRegenerating={dayRegenerating}
                    dayCreating={newDayLoading}
                    onDayCreate={onDayCreate}
                  />
                </>
            }
          </RX.View>
      }
    </RX.View>
  )
}

DayComponent.fragments = {
  day: gql`
    fragment DayComponentDay on Day {
      id
      date
      meals {
        ...MealComponentDayMeal
      }
    }

    ${MealComponentFragments.dayMeal}
  `
}

DayComponent.operations = {
  newDay: gql`
    mutation DayComponentNewDayMutation($day: DayInput!, $generate: Boolean) {
      newDay(day: $day, generate: $generate) {
        ...DayComponentDay
      }
    }

    ${DayComponent.fragments.day}
  `,
  clearDay: gql`
    mutation DayComponentClearDayMutation($dayId: ObjectId!, $planId: ObjectId!) {
      clearDay(dayId: $dayId, planId: $planId)
    }
  `
}

function useNewDay() {
  const { planId, defaultPlan } = useCalendarContext()

  return useMutation<DayComponentNewDayMutation, DayComponentNewDayMutationVariables>(DayComponent.operations.newDay, {
    notifyOnNetworkStatusChange: true,
    update: (proxy, { data }) => data && CalendarService.setDay(proxy, data.newDay, planId, defaultPlan),
  })
}

function useClearDay() {
  const { planId, defaultPlan } = useCalendarContext()

  return useMutation<DayComponentClearDayMutation, DayComponentClearDayMutationVariables>(DayComponent.operations.clearDay, {
    notifyOnNetworkStatusChange: true,
    update: (proxy, { data }) => data && CalendarService.removeDay(proxy, data.clearDay, planId, defaultPlan),
  })
}

const styles = {
  container: RX.Styles.createViewStyle({
    // alignItems: 'center',
    alignSelf: 'center',
    overflow: 'visible',

  }),
  circle: RX.Styles.createViewStyle({
    paddingTop: 60,
    alignItems: 'center',
  }),
  dayName: RX.Styles.createTextStyle({
    fontSize: 12,
  }),
  dayTitle: RX.Styles.createViewStyle({
    [Styles.values.marginStart]: Styles.values.spacing / 2,
  }),
  dayEmptyContainer: RX.Styles.createViewStyle({
    // position: 'absolute',
    alignItems: 'center',
    // top: Styles.values.spacing,
    // left: 0,
    // right: 0,
    // bottom: 0,
  })
}
