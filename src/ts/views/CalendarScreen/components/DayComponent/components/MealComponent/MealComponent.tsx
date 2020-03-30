/*
 * MealComponent2.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ExecutionResult, useMutation } from '@apollo/client'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import Checkbox from '@Common/Checkbox/Checkbox'
import { FoodPreviewMealItem } from '@Common/FoodPickerDialog/components/types/FoodPreviewMealItem'
import { FoodPickerMealItem, FoodTypes } from '@Common/FoodPickerDialog/FoodPicker'
import { showFoodPicker } from '@Common/FoodPickerDialog/FoodPickerDialog'
import HoverView from '@Common/HoverView/HoverButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import MenuItem from '@Common/MenuItem/MenuItem'
import Text from '@Common/Text/Text'
import CalendarService from '@Services/CalendarService'
import { transformMealItemToIngredientInput } from '@Utils/transformers/meal.transformer'
import {
  MealComponentMoveMealItemMutation,
  MealComponentMoveMealItemMutationVariables
} from '@Views/CalendarScreen/components/DayComponent/components/MealComponent/operations/types/MealComponentMoveMealItemMutation'
import ItemControl from '@Views/CalendarScreen/components/ItemControl/ItemControl'
import MealSettingsScreen from '@Views/MealSettingsScreen/MealSettingsScreen'
import debounce from 'lodash/debounce'
import React, { forwardRef, Ref, useCallback, useContext, useImperativeHandle, useMemo } from 'react'
import RX from 'reactxp'
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

  spaceIndex?: number,
  setSpaceIndex?: (meal: MealComponentDayMeal) => (index?: number) => void,

  draggingItem?: string,
  setDraggingItem?: (meal: MealComponentDayMeal) => (mealItemId?: string) => void,
}

type onMoveMealItem = (fromMealId: string, fromUserMealId: string, toMealId: string, toUserMealId: string, mealItemId: string, toIndex: number) => Promise<ExecutionResult<MealComponentMoveMealItemMutation>>

interface MealComponentProps extends MealComponentCommonProps {
  onMealRegenerate: () => Promise<ExecutionResult<MealComponentSuggestMealMutation>>,
  mealRegenerating?: boolean,

  onLogMeal: (variables: MealComponentLogMealMutationVariables, previousMeal: MealComponentDayMeal) => Promise<ExecutionResult<MealComponentLogMealMutation>>,
  logMealLoading?: boolean,

  onEatMeal: () => Promise<ExecutionResult<MealComponentEatMealMutation>>,
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
    draggingItem,
  } = props

  const { theme } = useContext(ThemeContext)

  const setSpaceIndex = props.setSpaceIndex ? props.setSpaceIndex(meal) : undefined
  const setDraggingItem = props.setDraggingItem ? props.setDraggingItem(meal) : undefined

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
        // @ts-ignore
        __typename: 'MealItem',
      }
    )

    return onLogMeal({
      date: meal.time,
      userMealId: meal.userMeal.id,
      mealItems: mealItems.map(transformMealItemToIngredientInput)
    }, {
      ...meal,
      items: mealItems,
    })
  }, [mealStringified])

  const _onMealItemChange = useCallback(debounce((mealItem: FoodPickerMealItem) => {
    const mealItems: MealComponentDayMeal_items[] = meal.items.map(item => {
      if (item.id === mealItem.id) {
        return mealItem
      }

      return item
    })

    return onLogMeal({
      date: meal.time,
      userMealId: meal.userMeal.id,
      mealItems: mealItems.map(transformMealItemToIngredientInput)
    }, {
      ...meal,
      items: mealItems,
    })
  }, 500), [mealStringified])

  const _onMealOrderChange = useCallback((items: FoodPickerMealItem[]) => {
    return onLogMeal({
      date: meal.time,
      userMealId: meal.userMeal.id,
      mealItems: items.map(transformMealItemToIngredientInput)
    }, {
      ...meal,
      items,
    })
  }, [mealStringified])

  const _onRemoveMealItem = useCallback((mealItemId: string) => {
    const mealItems: MealComponentDayMeal_items[] = meal.items.filter(p => p.id !== mealItemId)

    return onLogMeal({
      date: meal.time,
      userMealId: meal.userMeal.id,
      mealItems: mealItems.map(transformMealItemToIngredientInput)
    }, {
      ...meal,
      items: mealItems,
    })
  }, [mealStringified])

  useImperativeHandle(ref, () => ({
    deleteMealItem: _onRemoveMealItem,
    addMealItem: (mealItem: FoodPickerMealItem, index?: number) => _onAddMealItem(mealItem, index)
  }))

  const _onClearMealItems = useCallback(() => {
    return onLogMeal({
      date: meal.time,
      userMealId: meal.userMeal.id,
      mealItems: []
    }, {
      ...meal,
      items: [],
    })
  }, [mealStringified])

  const _onMealRegenerate = () => {
    if (mealRegenerating) return

    return onMealRegenerate()
  }

  let onDragOver: any,
    onDragEnter: any,
    onDragLeave: any,
    onDrop: any,
    onDragStart: any,
    onDragEnd: any

  if (setSpaceIndex && setDraggingItem) {
    const dragAndDrop = useDragAndDrop({
      setSpaceIndex,
      draggingItem,
      onRemoveMealItem: _onRemoveMealItem,
      setDraggingItem,
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

  let mealItems: (MealComponentDayMeal_items | null)[] = [...meal.items]

  if (spaceIndex !== undefined) {
    mealItems.splice(spaceIndex, 0, null)
  }

  return (
    <HoverView
      id='MealComponent'
      onDragOver={onDragOver}
      onDragEnter={mealItems.filter(i => i && i.id !== draggingItem).length === 0 ? onDragEnter && onDragEnter(0) : undefined}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      style={[
        {
          padding: 10,
          paddingTop: 5,
        },
        style,
      ]}
      onRenderChild={isHovering => (
        <RX.View
          style={[
            styles.container,
            {
              backgroundColor: theme.colors.mealCardBackgroundColor,
              borderColor: theme.colors.borderLight,
            },
          ]}
        >
          <HoverView
            onRenderChild={isHovering => (
              <RX.View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
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
                    <Text style={styles.mealName}>{meal.userMeal.name}</Text>
                    <HoverView
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        [Styles.values.marginStart]: Styles.values.spacing,
                        cursor: 'pointer',
                        opacity: eatMealLoading ? 0.8 : 1,
                      }}
                      onPress={onEatMeal}
                      onRenderChild={isHovering1 => (
                        <>
                          <Text
                            style={{
                              fontSize: 12,
                              color: meal.ate ? theme.colors.primary : theme.colors.subtitle,
                              [Styles.values.marginEnd]: Styles.values.spacing / 4
                            }}
                            type={Text.types.subtitle}
                          >I ate this</Text>
                          <Checkbox
                            value={!!meal.ate}
                            size={15}
                            isHovering={isHovering1}
                          />
                        </>
                      )}
                    />
                  </RX.View>
                  <Text
                    style={styles.mealCalorie}>{CalendarService.calculateMealTotalCalorie(meal)} {translate(translate.keys.Calories)}</Text>
                </RX.View>

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
              </RX.View>
            )}
          />

          <RX.View>
            {
              mealItems.map((mealItem, index) => {
                if (mealItem) {
                  return (
                    <RX.View
                      key={mealItem.id}
                      onDragEnter={onDragEnter && onDragEnter(index)}
                      style={{
                        // @ts-ignore web: if we remove the element, the drag handlers will be discarded
                        display: draggingItem === mealItem.id ? 'none' : 'flex'
                      }}
                    >
                      <MealItemComponent
                        key={mealItem.id}
                        meal={meal}
                        dayId={dayId}
                        mealItem={mealItem}
                        onMealItemChange={_onMealItemChange}
                        onMealItemRemove={_onRemoveMealItem}
                        onDragStart={onDragStart ? onDragStart(mealItem, index) : undefined}
                        onDragEnd={onDragEnd}
                      />
                    </RX.View>
                  )
                } else {
                  return (
                    <RX.View
                      key={'spaceIndex'}
                      onDrop={onDrop}
                      style={{
                        width: 1,
                        height: 78,
                        backgroundColor: theme.colors.cardBg,
                      }}
                    />
                  )
                }
              })
            }
          </RX.View>

        </RX.View>
      )}
    />
  )
})

interface UseDragAndDropProp {
  setSpaceIndex: (index?: number) => void,
  draggingItem?: string,
  onRemoveMealItem: (mealItemId: string) => any,
  setDraggingItem: (mealItemId?: string) => any,
  onMealOrderChange: (items: FoodPickerMealItem[]) => void,
  onAddMealItem: (mealItem: FoodPickerMealItem, index?: number) => void,
  onMoveMealItem: onMoveMealItem,
  spaceIndex?: number,
  meal: MealComponentDayMeal,
}

export const onDrop = ({ meal, draggingItem, spaceIndex, onMoveMealItem, onAddMealItem, setSpaceIndex, setDraggingItem, onMealOrderChange }: UseDragAndDropProp) => (e: RX.Types.DragEvent) => {
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
        const mealItems = meal.items
          .filter(p => p.id !== draggingItem)
        mealItems
          .splice(spaceIndex || 0, 0, meal.items.find(p => p.id === draggingItem)!)

        onMealOrderChange(mealItems)
      } else {
        onMoveMealItem(prevMeal.id, prevMeal.userMeal.id, meal.id, meal.userMeal.id, mealItem.id, spaceIndex || 0)
      }
    } else {
      onAddMealItem(mealItem, spaceIndex || 0)
    }

    setSpaceIndex(undefined)
    setDraggingItem(undefined)
  } catch (e) {
    console.error(e)
  }
}

const useDragAndDrop = (props: UseDragAndDropProp) => {
  const {
    setSpaceIndex,
    setDraggingItem,
    meal,
  } = props

  const reset = useCallback(debounce(() => {
    setSpaceIndex(undefined)
  }, 100), [])

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

    setSpaceIndex(index)
  }, [])

  const onDragLeave = (e: RX.Types.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const onDragStart = useCallback((mealItem: FoodPreviewMealItem, index: number) => (e: RX.Types.DragEvent) => {
    e.dataTransfer.dropEffect = 'move'
    e.dataTransfer.effectAllowed = 'move'

    e.dataTransfer.setData('mealItem', JSON.stringify(mealItem))
    e.dataTransfer.setData('meal', JSON.stringify(meal))

    setImmediate(() => {
      setDraggingItem(mealItem.id)
      setSpaceIndex(index)
    })
  }, [meal])

  const onDragEnd = useCallback((e: RX.Types.DragEvent) => {
    setSpaceIndex(undefined)
    setDraggingItem(undefined)
  }, [])

  return {
    onDragOver,
    onDragEnter,
    onDragLeave,
    onDrop: onDrop(props),
    onDragStart,
    onDragEnd,
  }
}

interface MealComponentAnimationContainerState {
  meal: MealComponentDayMeal,
  nextMeal: MealComponentDayMeal | null,
  layout?: RX.Types.ViewOnLayoutEvent,
}

interface MealComponentAnimationContainerProps extends MealComponentProps {
  mealComponentRef: Ref<any>
}

class MealComponentAnimationContainer extends React.PureComponent<MealComponentAnimationContainerProps, MealComponentAnimationContainerState> {
  private _scrollView: RX.ScrollView | null = null
  private _scrollLeft: number = 0

  constructor(props: MealComponentAnimationContainerProps) {
    super(props)

    this.state = {
      meal: props.meal,
      nextMeal: null,
    }
  }

  public componentWillUpdate(nextProps: Readonly<MealComponentProps>, nextState: Readonly<MealComponentAnimationContainerState>, nextContext: any): void {
    if (!this._scrollView) return

    // FIXME: maybe were deep checking twice here and in areFieldsEqual of MealComponent?
    if (nextState.nextMeal) return

    if (this.props.meal.mealId !== nextProps.meal.mealId) {
      this.setState({
        nextMeal: nextProps.meal,
      })

      return this._setUI()
    } else {
      this.setState({
        meal: nextProps.meal,
      })
    }
  }

  render() {
    const { style } = this.props

    return (
      <RX.ScrollView
        ref={ref => this._scrollView = ref}
        horizontal
        scrollEnabled={false}
        onScroll={this._onScroll}
        style={{
          // @ts-ignore
          display: 'flex',

          ...style,
        }}
      >
        <MealComponent
          {...this.props}
          meal={this.state.meal}
          ref={this.props.mealComponentRef}
        />
        {
          this.state.nextMeal &&
          <MealComponent
            {...this.props}
            meal={this.state.nextMeal}
          />
        }
      </RX.ScrollView>
    )
  }

  private _onScroll = (newScrollTop: number, newScrollLeft: number) => this._scrollLeft = newScrollLeft

  private _setUI = (active: boolean = true) => {
    if (!this._scrollView) return

    if (active) {
      this._scrollView.setScrollLeft(350, true)
      setTimeout(() => this._setUI(false), 500)
    } else {
      if (this._scrollLeft === 350) {
        this._scrollView.setScrollLeft(0, false)
        this.setState(prevState => ({
          meal: prevState.nextMeal!,
          nextMeal: null,
        }))
      } else {
        setTimeout(() => this._setUI(false), 50)
      }
    }
  }
}

const MealComponentContainer = (props: MealComponentCommonProps, ref: React.Ref<any>) => {
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

  return (
    <MealComponentAnimationContainer
      {...props}

      meal={useMemo(() => props.meal, [JSON.stringify(props.meal)])}
      mealComponentRef={ref}

      logMealLoading={logMealLoading}
      onLogMeal={useCallback((variables, mealOptimisticResponse) => logMeal({
        variables,
        optimisticResponse: () => ({
          logMeal: mealOptimisticResponse
        }),
      }), [])}

      mealRegenerating={suggestMealLoading}
      onMealRegenerate={useCallback(() => suggestMeal({
        variables: {
          date: props.meal.time,
          userMealId: props.meal.userMeal.id,
        },
      }), [
        props.meal.time,
        props.meal.userMeal.id,
      ])}

      eatMealLoading={eatMealLoading}
      onEatMeal={useCallback(() => eatMeal({
        variables: {
          dayId: props.dayId,
          userMealId: props.meal.userMeal.id,
          eaten: !props.meal.ate,
        },
      }), [
        props.dayId,
        props.meal.userMeal.id,
        props.meal.ate,
      ])}

      moveMealItemLoading={moveMealItemLoading}
      onMoveMealItem={useCallback((fromMealId: string, fromUserMealId: string, toMealId: string, toUserMealId: string, mealItemId: string, toIndex: number) => moveMealItem({
        variables: {
          dayId: props.dayId,
          fromUserMealId,
          toUserMealId,
          mealItemId,
          toIndex,
        },
        update: (proxy, { data }) => data && props.dayId && CalendarService.moveMealItem(proxy, fromMealId, toMealId, toIndex, mealItemId),
      }), [
        props.dayId,
      ])}
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
    marginBottom: Styles.values.spacing,
  }),
  moreButton: RX.Styles.createViewStyle({
    position: 'absolute',
    top: 28,
    [Styles.values.end]: 20,
  })
}
