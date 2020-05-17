/*
 * MealComponent2.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { useMutation } from '@apollo/client'
import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import Checkbox from '@Common/Checkbox/Checkbox'
import { FoodPreviewMealItem } from '@Common/FoodPickerDialog/components/types/FoodPreviewMealItem'
import { FoodPickerMealItem, FoodTypes } from '@Common/FoodPickerDialog/FoodPicker'
import { showFoodPicker } from '@Common/FoodPickerDialog/FoodPickerDialog'
import HoverView from '@Common/HoverView/HoverButton'
import RefreshIcon from '@Common/icons/Refresh/Refresh'
import { translate } from '@Common/LocalizedText/LocalizedText'
import MenuItem from '@Common/MenuItem/MenuItem'
import { SwipableItem } from '@Common/Swipable/Swipable'
import Text from '@Common/Text/Text'
import CalendarService from '@Services/CalendarService'
import usePrevious from '@Utils/hooks/usePrevious'
import { transformMealItemToIngredientInput } from '@Utils/transformers/meal.transformer'
import { useCalendarContext } from '@Views/CalendarScreen/CalendarScreen'
import {
  MealComponentMoveMealItemMutation,
  MealComponentMoveMealItemMutationVariables
} from '@Views/CalendarScreen/components/DayComponent/components/MealComponent/operations/types/MealComponentMoveMealItemMutation'
import ItemControl from '@Views/CalendarScreen/components/ItemControl/ItemControl'
import MealSettingsScreen from '@Views/MealSettingsScreen/MealSettingsScreen'
import { ExecutionResult } from 'graphql'
import debounce from 'lodash/debounce'
import React, {
  forwardRef,
  Ref,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'
import RX from 'reactxp'
import { GestureMouseCursor, PreferredPanGesture } from 'reactxp/dist/common/Types'
import MealItemComponent from './components/MealItemComponent/MealItemComponent'
import MealComponentOperations from './operations/MealComponentOperation'
import { MealComponentDayMeal, MealComponentDayMeal_items } from './operations/types/MealComponentDayMeal'
import {
  MealComponentEatMealMutation,
  MealComponentEatMealMutationVariables
} from './operations/types/MealComponentEatMealMutation'
import {
  MealComponentLogMealMutation,
  MealComponentLogMealMutationVariables
} from './operations/types/MealComponentLogMealMutation'
import {
  MealComponentSuggestMealMutation,
  MealComponentSuggestMealMutationVariables
} from './operations/types/MealComponentSuggestMealMutation'


interface MealComponentCommonProps {
  style?: any,
  meal: MealComponentDayMeal,
  dayId?: string,

  spaceIndex?: { index: number, mealItem: FoodPreviewMealItem },
  setSpaceIndex?: (meal: MealComponentDayMeal, index?: number) => void,

  editable?: boolean,
  showIAteThis?: boolean,
  swipable?: boolean
}

type onMoveMealItem = (fromMealId: string, fromUserMealId: string, toMealId: string, toUserMealId: string, mealItemId: string, toIndex: number) => Promise<ExecutionResult<MealComponentMoveMealItemMutation>>

interface MealComponentProps extends MealComponentCommonProps {
  onMealRegenerate: () => Promise<ExecutionResult<MealComponentSuggestMealMutation>>,
  mealRegenerating?: boolean,

  onLogMeal?: (variables: Omit<MealComponentLogMealMutationVariables, 'planId'>, previousMeal: MealComponentDayMeal) => Promise<ExecutionResult<MealComponentLogMealMutation>>,
  logMealLoading?: boolean,

  onEatMeal?: () => Promise<ExecutionResult<MealComponentEatMealMutation>>,
  eatMealLoading?: boolean,

  onMoveMealItem: onMoveMealItem,
  moveMealItemLoading?: boolean,
}

const MealComponent = forwardRef((props: MealComponentProps, ref: Ref<any>) => {
  const {
    style,
    mealRegenerating,
    dayId,
    meal,
    onMealRegenerate,
    logMealLoading,
    onLogMeal,
    onEatMeal,
    eatMealLoading,
    onMoveMealItem,
    moveMealItemLoading,
    spaceIndex,
    editable = true,
    showIAteThis = false,
    swipable = true,
  } = props

  const { planId } = useCalendarContext()
  const { theme } = useContext(ThemeContext)

  const mealStringified = JSON.stringify(meal)

  const _onAddMealItem = useCallback((mealItem: FoodPickerMealItem, index?: number) => {
    const mealItems = [...meal.items]
    let start = mealItems.length - 1

    if (index !== undefined) {
      start = index
    }

    mealItems.splice(
      start,
      0,
      {
        ...mealItem,
        hasAlternatives: false,
        // @ts-ignore
        __typename: 'MealItem',
      }
    )

    return onLogMeal!({
      date: planId ? undefined : meal.time,
      dayMealId: meal.id,
      mealItems: mealItems.map(transformMealItemToIngredientInput)
    }, {
      ...meal,
      items: mealItems,
    })
  }, [mealStringified, planId])

  const _onMealItemChange = useCallback(debounce((mealItem: any) => {
    const mealItems: MealComponentDayMeal_items[] = meal.items.map(item => {
      if (item.id === mealItem.id) {
        return {
          ...mealItem as FoodPickerMealItem,
          hasAlternatives: false,
        }
      }

      return item
    })

    return onLogMeal!({
      date: planId ? undefined : meal.time,
      dayMealId: meal.id,
      mealItems: mealItems.map(transformMealItemToIngredientInput)
    }, {
      ...meal,
      items: mealItems,
    })
  }, 500), [mealStringified, planId])

  const _onMealOrderChange = useCallback((items: MealComponentDayMeal_items[]) => {
    return onLogMeal!({
      date: planId ? undefined : meal.time,
      dayMealId: meal.id,
      mealItems: items.map(transformMealItemToIngredientInput)
    }, {
      ...meal,
      items,
    })
  }, [mealStringified, planId])

  const _onRemoveMealItem = useCallback((mealItemId: string) => {
    const mealItems: MealComponentDayMeal_items[] = meal.items.filter(p => p.id !== mealItemId)

    return onLogMeal!({
      date: planId ? undefined : meal.time,
      dayMealId: meal.id,
      mealItems: mealItems.map(transformMealItemToIngredientInput)
    }, {
      ...meal,
      items: mealItems,
    })
  }, [mealStringified, planId])

  useImperativeHandle(ref, () => ({
    deleteMealItem: _onRemoveMealItem,
    addMealItem: (mealItem: FoodPickerMealItem, index?: number) => _onAddMealItem(mealItem, index),
    resizeWrapper: (height: number) => _swipableItemRef.current.resize(height)
  }))

  const _swipableItemRef = useRef<any>()

  const _onClearMealItems = useCallback(() => {
    return onLogMeal!({
      date: planId ? undefined : meal.time,
      dayMealId: meal.id,
      mealItems: []
    }, {
      ...meal,
      items: [],
    })
  }, [mealStringified, planId])

  const _onMealRegenerate = () => {
    if (mealRegenerating) return

    return onMealRegenerate()
      .then(() => {
        /**
         * Reset refreshing state on threshold if ...
         * */
        setTimeout(() => {
          if (_swipableItemRef.current) {
            _swipableItemRef.current.reset(true)
          }
        }, 1000)
      })
  }

  let onDragOver: any,
    onDragEnter: any,
    onDragLeave: any,
    onDrop: any,
    onDragStart: any,
    onDragEnd: any

  if (props.setSpaceIndex/* && props.setDraggingItem*/) {
    const dragAndDrop = useDragAndDrop({
      setSpaceIndex: props.setSpaceIndex,
      onRemoveMealItem: _onRemoveMealItem,
      onMealOrderChange: _onMealOrderChange,
      onAddMealItem: _onAddMealItem,
      onMoveMealItem,
      spaceIndex,
      meal,
    })

    onDragOver = dragAndDrop.onDragOver
    onDragEnter = dragAndDrop.onDragEnter
    onDragLeave = dragAndDrop.onDragLeave
    onDrop = dragAndDrop.onDrop
    onDragStart = dragAndDrop.onDragStart
    onDragEnd = dragAndDrop.onDragEnd
  }

  const _mealNameStyle = useMemo(() => [
    styles.mealName,
    RX.Styles.createTextStyle({
      textDecorationLine: meal.ate ? 'line-through' : undefined,
    }, false),
  ], [meal.ate])

  let mealItems = [...meal.items]

  if (spaceIndex !== undefined) {
    mealItems = mealItems
      .filter(mi => mi.id !== spaceIndex.mealItem.id)
    mealItems
      .splice(spaceIndex.index, 0, {
        ...spaceIndex.mealItem,
        hasAlternatives: false,
        id: spaceIndex.mealItem.id
      })
  }

  useEffect(() => {
    if (_swipableItemRef.current) {
      _swipableItemRef.current.reset()
    }
  }, [meal.mealId])

  const content = (
    <RX.View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.cardBg,
          borderColor: theme.colors.borderLight,
        },
      ]}
    >
      <RX.GestureView
        preferredPan={PreferredPanGesture.Horizontal}
        panPixelThreshold={20}
        releaseOnRequest={true}
        onPanHorizontal={_swipableItemRef.current ? e => _swipableItemRef.current.handleGesture(e) : undefined}
        mouseOverCursor={GestureMouseCursor.Grab}
      >
        <HoverView
          defaultCursor
          onRenderChild={isHovering => (
            <RX.View
              style={styles.headerContainer}
            >
              <RX.View
                style={{
                  flex: 1,
                }}
              >
                <RX.View
                  style={{
                    flexDirection: 'row',
                    [Styles.values.start]: Styles.values.spacing,
                    marginTop: Styles.values.spacingLarge,
                    marginBottom: Styles.values.spacing / 4,
                  }}
                >
                  <Text style={_mealNameStyle}>{meal.userMeal.name}</Text>
                  {
                    onEatMeal && showIAteThis &&
                    <HoverView
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        [Styles.values.marginStart]: Styles.values.spacing / 2,
                        cursor: 'pointer',
                        opacity: eatMealLoading ? 0.8 : 1,
                      }}
                      onPress={onEatMeal}
                      onRenderChild={isHovering1 => (
                        <>
                          <Checkbox
                            value={!!meal.ate}
                            size={15}
                            isHovering={isHovering1}
                          />
                          <Text
                            style={{
                              fontSize: 12,
                              color: meal.ate ? theme.colors.primary : theme.colors.subtitle,
                              [Styles.values.marginStart]: Styles.values.spacing / 2
                            }}
                            type={Text.types.subtitle}
                          >I ate this</Text>
                        </>
                      )}
                    />
                  }
                </RX.View>
                <Text
                  style={styles.mealCalorie}>{CalendarService.calculateMealTotalCalorie(meal)} {translate(translate.keys.Calories)}</Text>
              </RX.View>

              {
                editable && !AppConfig.isTouchInterface() &&
                <ItemControl
                  visible={isHovering || mealRegenerating}
                  onRegenerate={_onMealRegenerate}
                  regenerating={mealRegenerating}
                  style={{
                    position: 'absolute',
                    [Styles.values.end]: Styles.values.spacing,
                  }}
                >
                  <MenuItem
                    label={translate('Add Meal Item')}
                    onPress={() => showFoodPicker({
                      foodTypes: [FoodTypes.all, FoodTypes.food, FoodTypes.recipe],
                      onDismiss: () => null,
                      onSubmit: mealItem => _onAddMealItem(mealItem),
                      submitButtonLabel: translate('Add Meal Item')
                    })}
                  />
                  <MenuItem
                    label={translate('Edit Meal Settings')}
                    onPress={() => MealSettingsScreen.showModal({
                      theme,
                      meal: meal.userMeal,
                      submitMustSave: true,
                      onSubmit: meal => null
                    })}
                  />
                  <MenuItem
                    label={translate('Clear Meals Items')}
                    onPress={_onClearMealItems}
                  />
                </ItemControl>
              }
            </RX.View>
          )}
        />
      </RX.GestureView>

      {
        mealItems.map((mealItem, index) => (
          <RX.View
            key={mealItem.id}
            style={{
              opacity: (spaceIndex && mealItem.id === spaceIndex.mealItem.id) ? 0.3 : 1
            }}
          >
            <MealItemComponent
              key={mealItem.id}
              meal={meal}
              dayId={dayId}
              mealItem={mealItem}
              onMealItemChange={onLogMeal && _onMealItemChange}
              onMealItemRemove={onLogMeal && _onRemoveMealItem}
              onDragStart={onDragStart ? onDragStart(mealItem, index) : undefined}
              onDragEnd={onDragEnd}
              onDragEnter={onDragEnter && onDragEnter(index)}
            />
          </RX.View>
        ))
      }

    </RX.View>
  )

  return (
    <HoverView
      onDragOver={onDragOver}
      onDragEnter={mealItems.filter(i => i && spaceIndex && i.id !== spaceIndex.mealItem.id).length === 0 ? onDragEnter && onDragEnter(0) : undefined}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      defaultCursor
      style={[
        {
          padding: 10,
          paddingBottom: 5,
          overflow: 'visible',
        },
        style,
      ]}
      onRenderChild={isHovering => (
        swipable ?
          <SwipableItem
            ref={ref => _swipableItemRef.current = ref}
            withoutGesture
            background={'transparent'}
            threshold={{
              element: triggerable => (
                <RefreshIcon
                  size={50}
                  color={triggerable ? theme.colors.primary : theme.colors.text}
                  spin={mealRegenerating}
                />
              ),
              onTrigger: _onMealRegenerate,
              thresholdPercentage: 50,
            }}
          >
            {content}
          </SwipableItem>
          : content
      )}
    />
  )
})

interface UseDragAndDropProp {
  setSpaceIndex: (meal: MealComponentDayMeal, index?: number) => void,
  onRemoveMealItem: (mealItemId: string) => any,
  onMealOrderChange: (items: MealComponentDayMeal_items[]) => void,
  onAddMealItem: (mealItem: FoodPickerMealItem, index?: number) => void,
  onMoveMealItem: onMoveMealItem,
  spaceIndex?: { index: number, mealItem: FoodPreviewMealItem },
  meal: MealComponentDayMeal,
}

export const onDrop = ({ meal, spaceIndex, onMoveMealItem, onAddMealItem, setSpaceIndex, onMealOrderChange }: UseDragAndDropProp) => (e: RX.Types.DragEvent) => {
  e.preventDefault()
  e.stopPropagation()

  const mealItemStringified = e.dataTransfer.getData('mealItem')
  const mealStringified = e.dataTransfer.getData('meal')

  try {
    const mealItem = JSON.parse(mealItemStringified) as FoodPreviewMealItem
    let prevMeal
    if (mealStringified) {
      prevMeal = JSON.parse(mealStringified) as MealComponentDayMeal
    }

    /**
     * If it had a previousMeal, then move it, otherwise, add it to the meal
     * */
    if (prevMeal) {
      /**
       * If it was moved within the same meal, call onMealOrderChange,
       * otherwise, call onMoveMealItem
       * */
      if (prevMeal.id === meal.id) {
        if (spaceIndex !== undefined) {
          const mealItems = meal.items
            .filter(mi => mi.id !== spaceIndex.mealItem.id)
          mealItems
            .splice(spaceIndex.index, 0, {
              ...spaceIndex.mealItem,
              hasAlternatives: false,
              id: spaceIndex.mealItem.id
            })

          onMealOrderChange(mealItems)
        }
      } else {
        onMoveMealItem(prevMeal.id, prevMeal.userMeal.id, meal.id, meal.userMeal.id, mealItem.id, spaceIndex ? spaceIndex.index : 0)
      }
    } else {
      onAddMealItem(mealItem, spaceIndex ? spaceIndex.index : 0)
    }

    setSpaceIndex(meal, undefined)
    CalendarService.setDraggingMealItem(undefined)
    // setDraggingItem(meal, undefined)
  } catch (e) {
    console.error(e)
  }
}

const useDragAndDrop = (props: UseDragAndDropProp) => {
  const {
    setSpaceIndex,
    // setDraggingItem,
    meal,
  } = props

  const mealStringified = JSON.stringify(meal)

  const reset = useCallback(debounce(() => {
    setSpaceIndex(meal, undefined)
  }, 100), [mealStringified])

  const onDragOver = (e: RX.Types.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    /**
     * reset spaceIndex after 100ms of debouncing
     * */
    reset()
  }

  const onDragEnter = useCallback((index: number) => (e: RX.Types.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setSpaceIndex(meal, index)
  }, [mealStringified])

  const onDragLeave = (e: RX.Types.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const onDragStart = useCallback((mealItem: FoodPreviewMealItem, index: number) => (e: RX.Types.DragEvent) => {
    e.dataTransfer.dropEffect = 'move'
    e.dataTransfer.effectAllowed = 'move'

    e.dataTransfer.setData('mealItem', JSON.stringify(mealItem))
    e.dataTransfer.setData('meal', JSON.stringify(meal))

    // FIX for firefox
    e.dataTransfer.setData('application/x-workaround', '- data to make Firefox start drag -')

    // setDraggingItem(meal, mealItem)
    CalendarService.setDraggingMealItem(mealItem)
    setSpaceIndex(meal, index)
  }, [mealStringified])

  const onDragEnd = useCallback((e: RX.Types.DragEvent) => {
    setSpaceIndex(meal, undefined)
    // setDraggingItem(meal, undefined)
    CalendarService.setDraggingMealItem(undefined)
  }, [mealStringified])

  return {
    onDragOver,
    onDragEnter,
    onDragLeave,
    onDrop: onDrop(props),
    onDragStart,
    onDragEnd,
  }
}

interface MealComponentAnimationContainerProps extends MealComponentProps {
  mealComponentRef: Ref<any>
}

const _styles = {
  animationContainer: RX.Styles.createViewStyle({
    flexDirection: 'row',
    overflow: 'visible',
  }),
  mealContainer: RX.Styles.createViewStyle({
    overflow: 'visible',
  })
}

const MealComponentAnimationContainer = ({ meal, ...props }: MealComponentAnimationContainerProps) => {
  const [_meal, _setMeal] = useState(meal)
  const [_nextMeal, _setNextMeal] = useState<MealComponentDayMeal | null>(null)

  /**
   * Animations
   * */
  const [_translateXAnimationValue] = useState(RX.Animated.createValue(0))
  const [_mainMealAnimationValue] = useState(RX.Animated.createValue(1))
  const [_nextMealAnimationValue] = useState(RX.Animated.createValue(0))

  const _containerAnimationStyle = RX.Styles.createAnimatedViewStyle({
    transform: [{ translateX: _translateXAnimationValue, }]
  })
  const _mainMealAnimationStyle = RX.Styles.createAnimatedViewStyle({
    opacity: _mainMealAnimationValue,
  })
  const _nextMealAnimationStyle = RX.Styles.createAnimatedViewStyle({
    opacity: _nextMealAnimationValue,
  })

  const _renderCount = useRef(0)
  const _animation = useRef<RX.Types.Animated.CompositeAnimation | undefined>()

  const _animate = useCallback((toValue: number, animated?: boolean) => {
    if (_animation.current) {
      _animation.current.stop()
    }

    _animation.current = RX.Animated.parallel([
      RX.Animated.timing(_translateXAnimationValue, {
        toValue,
        duration: animated ? undefined : 0,
      }),
      RX.Animated.timing(_mainMealAnimationValue, {
        toValue: toValue ? 0 : 1,
        duration: animated ? undefined : 0,
      }),
      RX.Animated.timing(_nextMealAnimationValue, {
        toValue: toValue ? 1 : 0,
        duration: animated ? undefined : 0,
      }),
    ])

    return new Promise(resolve => {
      if (toValue > 0) {
        setImmediate(() => _animation.current!.start(resolve))
      } else {
        _animation.current!.start(resolve)
      }
    })
  }, [])

  const _setUI = (active: boolean = true, newMeal: MealComponentDayMeal) => {
    if (active) {
      _setNextMeal(newMeal)
      _animate(-350, true)
        .then(() => _setUI(false, newMeal))
    } else {
      _setMeal(newMeal)
      _setNextMeal(null)
      _animate(0, false)
    }
  }

  const prevMeal = usePrevious(meal)

  useEffect(() => {
    if (_renderCount.current === 1) return

    if (_nextMeal) return

    if (prevMeal.mealId !== meal.mealId) {
      return _setUI(true, meal)
    }

    _setMeal(meal)
  }, [JSON.stringify(meal), !!_nextMeal])

  _renderCount.current++

  return (
    <RX.Animated.View
      style={[
        _styles.animationContainer,
        _containerAnimationStyle,
        props.style,
      ]}
    >
      <RX.Animated.View
        style={[
          _styles.mealContainer,
          _mainMealAnimationStyle,
        ]}
      >
        <MealComponent
          {...props}
          meal={_meal}
          ref={props.mealComponentRef}
        />
      </RX.Animated.View>
      {
        _nextMeal &&
        <RX.Animated.View
          style={[
            _styles.mealContainer,
            _nextMealAnimationStyle,
          ]}
        >
          <MealComponent
            {...props}
            meal={_nextMeal}
            swipable={false}
          />
        </RX.Animated.View>
      }
    </RX.Animated.View>
  )
}

const MealComponentContainer = ({ editable = true, ...props }: MealComponentCommonProps, ref: React.Ref<any>) => {
  const { planId } = useCalendarContext()

  const [logMeal, { loading: logMealLoading }] = useMutation<MealComponentLogMealMutation, MealComponentLogMealMutationVariables>(MealComponentOperations.logMeal, {
    update: (proxy, { data }) => data && props.dayId && CalendarService.setMeal(proxy, data.logMeal),
  })
  const [suggestMeal, { loading: suggestMealLoading }] = useMutation<MealComponentSuggestMealMutation, MealComponentSuggestMealMutationVariables>(MealComponentOperations.suggestMeal, {
    update: (proxy, { data }) => data && props.dayId && CalendarService.setMeal(proxy, data.suggestMeal),
  })
  const [eatMeal, { loading: eatMealLoading }] = useMutation<MealComponentEatMealMutation, MealComponentEatMealMutationVariables>(MealComponentOperations.eatMeal, {
    update: (proxy, { data }) => data && props.dayId && CalendarService.setMeal(proxy, {
      ...props.meal,
      ate: !props.meal.ate,
    }),
    optimisticResponse: () => ({
      eatMeal: true
    })
  })
  const [moveMealItem, { loading: moveMealItemLoading }] = useMutation<MealComponentMoveMealItemMutation, MealComponentMoveMealItemMutationVariables>(MealComponentOperations.moveMealItem, {
    optimisticResponse: () => ({
      moveMealItem: true
    })
  })

  const onLogMeal = useCallback((variables, mealOptimisticResponse) => logMeal({
    variables: {
      ...variables,
      dayId: props.dayId,
      planId,
    },
    optimisticResponse: () => ({
      logMeal: mealOptimisticResponse
    }),
  }), [planId])
  const onMealRegenerate = useCallback(() => suggestMeal({
    variables: {
      dayId: props.dayId,
      dayMealId: props.meal.id,
      planId,
    },
  }), [
    props.meal.time,
    props.meal.userMeal.id,
    planId,
  ])
  const onEatMeal = useCallback(() => eatMeal({
    variables: {
      dayId: props.dayId,
      userMealId: props.meal.userMeal.id,
      eaten: !props.meal.ate,
      planId,
    },
  }), [
    props.dayId,
    props.meal.userMeal.id,
    props.meal.ate,
    planId,
  ])
  const onMoveMealItem = useCallback((fromMealId: string, fromUserMealId: string, toMealId: string, toUserMealId: string, mealItemId: string, toIndex: number) => moveMealItem({
    variables: {
      dayId: props.dayId,
      fromUserMealId,
      toUserMealId,
      mealItemId,
      toIndex,
      planId,
    },
    update: (proxy, { data }) => data && props.dayId && CalendarService.moveMealItem(proxy, fromMealId, toMealId, toIndex, mealItemId),
  }), [
    props.dayId,
    planId
  ])

  return (
    <MealComponentAnimationContainer
      {...props}

      meal={useMemo(() => props.meal, [JSON.stringify(props.meal)])}
      mealComponentRef={ref}

      logMealLoading={logMealLoading}
      onLogMeal={editable ? onLogMeal : undefined}

      mealRegenerating={suggestMealLoading}
      onMealRegenerate={onMealRegenerate}

      eatMealLoading={eatMealLoading}
      onEatMeal={editable ? onEatMeal : undefined}

      moveMealItemLoading={moveMealItemLoading}
      onMoveMealItem={onMoveMealItem}

      editable={editable}
    />
  )
}

export default forwardRef(MealComponentContainer)

const shadowStyle = RX.Styles.createViewStyle({
  shadowColor: 'rgba(0, 0, 0, .3)',
  shadowRadius: 5,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: -1
})

const styles = {
  container: RX.Styles.createViewStyle({
    // @ts-ignore
    transition: 'all 0.5s',
    borderWidth: 1,
    borderRadius: 10,
    paddingBottom: Styles.values.spacing,
  }),
  headerContainer: RX.Styles.createViewStyle({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Styles.values.spacing / 2,
  }),
  mealName: RX.Styles.createTextStyle({
    fontSize: 20,
    fontWeight: 'bold',
  }),
  mealCalorie: RX.Styles.createTextStyle({
    fontSize: 11,
    fontWeight: '100',
    [Styles.values.start]: Styles.values.spacing,
    marginBottom: Styles.values.spacing / 2,
  }),
  moreButton: RX.Styles.createViewStyle({
    position: 'absolute',
    top: 28,
    [Styles.values.end]: 20,
  })
}
