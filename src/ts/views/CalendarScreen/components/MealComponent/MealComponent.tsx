/*
 * MealComponent.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ExecutionResult, gql, useMutation } from '@apollo/client'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import Checkbox from '@Common/Checkbox/Checkbox'
import { FoodPickerMealItem, FoodTypes } from '@Common/FoodPickerDialog/FoodPicker'
import { showFoodPicker } from '@Common/FoodPickerDialog/FoodPickerDialog'
import HoverView from '@Common/HoverView/HoverButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import MenuItem from '@Common/MenuItem/MenuItem'
import Text from '@Common/Text/Text'
import CalendarService from '@Services/CalendarService'
import areFieldsEqual from '@Utils/areFieldsEqual'
import { transformMealItemToMealItemInput } from '@Utils/transformers/meal.transformer'
import {
  MealComponentDayMeal,
  MealComponentDayMeal_items
} from '@Views/CalendarScreen/components/MealComponent/types/MealComponentDayMeal'
import {
  MealComponentEatMealMutation,
  MealComponentEatMealMutationVariables
} from '@Views/CalendarScreen/components/MealComponent/types/MealComponentEatMealMutation'
import {
  MealComponentLogMealMutation,
  MealComponentLogMealMutationVariables
} from '@Views/CalendarScreen/components/MealComponent/types/MealComponentLogMealMutation'
import {
  MealComponentSuggestMealMutation,
  MealComponentSuggestMealMutationVariables
} from '@Views/CalendarScreen/components/MealComponent/types/MealComponentSuggestMealMutation'
import MealSettingsScreen from '@Views/MealSettingsScreen/MealSettingsScreen'
import debounce from 'lodash/debounce'
import React from 'react'
import RX from 'reactxp'
import ItemControl from '../ItemControl/ItemControl'
import MealItemComponent from '../MealItemComponent/MealItemComponent'


interface MealComponentCommonProps {
  style?: any,
  meal: MealComponentDayMeal,
  dayId?: string,
}

interface MealComponentProps extends MealComponentCommonProps {
  onMealRegenerate: () => Promise<ExecutionResult<MealComponentSuggestMealMutation>>,
  mealRegenerating?: boolean,

  onLogMeal: (variables: MealComponentLogMealMutationVariables, previousMeal: MealComponentDayMeal) => Promise<ExecutionResult<MealComponentLogMealMutation>>,
  logMealLoading?: boolean,

  onEatMeal: () => Promise<ExecutionResult<MealComponentEatMealMutation>>,
  eatMealLoading?: boolean,
}

const MealComponent = React.memo((props: MealComponentProps) => {
  const { style, mealRegenerating, dayId, meal, onMealRegenerate, logMealLoading, onLogMeal, onEatMeal, eatMealLoading } = props

  const _onAddMealItem = (mealItem: FoodPickerMealItem) => {
    const mealItems: MealComponentDayMeal_items[] = [
      ...meal.items,
      {
        ...mealItem,
        // @ts-ignore
        __typename: 'MealItem',
      },
    ]

    return onLogMeal({
      date: meal.time,
      userMealId: meal.userMeal.id,
      mealItems: mealItems.map(mealItem => transformMealItemToMealItemInput(mealItem))
    }, {
      ...meal,
      items: mealItems,
    })
  }

  const _onMealItemChange = (mealItem: FoodPickerMealItem) => {
    const mealItems: MealComponentDayMeal_items[] = meal.items.map(item => {
      if (item.id === mealItem.id) {
        return mealItem
      }

      return item
    })

    return onLogMeal({
      date: meal.time,
      userMealId: meal.userMeal.id,
      mealItems: mealItems.map(mealItem => transformMealItemToMealItemInput(mealItem))
    }, {
      ...meal,
      items: mealItems,
    })
  }

  const _onRemoveMealItem = (mealItemId: string) => {
    const mealItems: MealComponentDayMeal_items[] = meal.items.filter(p => p.id !== mealItemId)

    return onLogMeal({
      date: meal.time,
      userMealId: meal.userMeal.id,
      mealItems: mealItems.map(mealItem => transformMealItemToMealItemInput(mealItem))
    }, {
      ...meal,
      items: mealItems,
    })
  }

  const _onClearMealItems = () => {
    return onLogMeal({
      date: meal.time,
      userMealId: meal.userMeal.id,
      mealItems: []
    }, {
      ...meal,
      items: [],
    })
  }

  const _onMealRegenerate = () => {
    if (mealRegenerating) return

    return onMealRegenerate()
  }

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <HoverView
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
                // isHovering ? shadowStyle : {},
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
                          onSubmit: _onAddMealItem,
                          submitButtonLabel: translate('Add Meal Item')
                        })}
                      />
                      <MenuItem
                        label={translate('Edit Meal Settings')}
                        onPress={() => MealSettingsScreen.showModal({
                          theme,
                          meal: meal.userMeal,
                          submitMustSave: true,
                          onSubmit: meal => {
                            //
                          }
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

              {
                meal.items.map(mealItem => (
                  <RX.View
                    key={mealItem.id}
                  >
                    <MealItemComponent
                      meal={meal}
                      dayId={dayId}
                      mealItem={mealItem}
                      onMealItemChange={debounce(_onMealItemChange, 500)}
                      onMealItemRemove={() => _onRemoveMealItem(mealItem.id)}
                    />
                  </RX.View>
                ))
              }

            </RX.View>
          )}
        />
      )}
    </ThemeContext.Consumer>
  )
}, areFieldsEqual([
  'meal',
  'dayId',
  'onMealRegenerate',
  'mealRegenerating',
]))

interface MealComponentAnimationContainerProps extends MealComponentProps {
  style?: any,

  newMeal?: MealComponentDayMeal,
}

class MealComponentAnimationContainer extends React.PureComponent<MealComponentAnimationContainerProps> {
  private _scrollView: RX.ScrollView | null = null
  // private _prevMealComponentAnimatedValue = RX.Animated.createValue(1)
  // private _prevMealComponentAnimationStyle = RX.Styles.createAnimatedViewStyle({
  //   opacity: this._prevMealComponentAnimatedValue,
  // })
  //
  // private _nextMealComponentAnimatedValue = RX.Animated.createValue(0)
  // private _nextMealComponentAnimationStyle = RX.Styles.createAnimatedViewStyle({
  //   opacity: this._nextMealComponentAnimatedValue,
  // })

  // private _animation: any
  private _scrollLeft: number = 0

  public componentWillUpdate(nextProps: Readonly<MealComponentAnimationContainerProps>, nextState: Readonly<{}>, nextContext: any): void {
    if (!this._scrollView) return

    // FIXME: maybe were deep checking twice here and in areFieldsEqual of MealComponent?
    if (this.props.meal.mealId === nextProps.meal.mealId) return

    return this._setUI()
  }

  render() {
    const { style } = this.props

    return (
      <RX.ScrollView
        ref={ref => this._scrollView = ref}
        horizontal
        scrollEnabled={false}
        onScroll={(newScrollTop, newScrollLeft) => this._scrollLeft = newScrollLeft}
        style={{
          // @ts-ignore
          display: 'flex',

          ...style,
        }}
      >
        <MealComponent
          {...this.props}
        />
        <MealComponent
          {...this.props}
        />
        {/*<RX.Animated.View
          style={this._prevMealComponentAnimationStyle}
        >
          <MealComponent
            {...this.props}
          />
        </RX.Animated.View>
        <RX.Animated.View
          style={this._nextMealComponentAnimationStyle}
        >
          <MealComponent
            {...this.props}
            meal={this.props.newMeal || this.props.meal}
          />
        </RX.Animated.View>*/}
      </RX.ScrollView>
    )
  }

  private _setUI = (active: boolean = true) => {
    if (!this._scrollView) return

    // this._animation = RX.Animated.parallel([
    //   RX.Animated.timing(this._prevMealComponentAnimatedValue, {
    //     toValue: active ? 1 : 1,
    //     duration: active ? 300: 0,
    //   }),
    //   RX.Animated.timing(this._nextMealComponentAnimatedValue, {
    //     toValue: active ? 1 : 1,
    //     duration: active ? 300: 0,
    //   })
    // ])
    // this._animation.start(() => {
    //   this._animation = null
    // })

    if (active) {
      this._scrollView.setScrollLeft(350, true)
      setTimeout(() => this._setUI(false), 500)
    } else {
      if (this._scrollLeft === 350) {
        this._scrollView.setScrollLeft(0, false)
      } else {
        setTimeout(() => this._setUI(false), 50)
      }
    }
  }
}

const MealComponentContainer = (props: MealComponentCommonProps) => {
  const [logMeal, { loading: logMealLoading }] = useMutation<MealComponentLogMealMutation, MealComponentLogMealMutationVariables>(MealComponentContainer.operations.logMeal, {
    update: (proxy, { data }) => data && props.dayId && CalendarService.setMeal(proxy, data.logMeal),
  })
  const [suggestMeal, { loading: suggestMealLoading }] = useMutation<MealComponentSuggestMealMutation, MealComponentSuggestMealMutationVariables>(MealComponentContainer.operations.suggestMeal, {
    update: (proxy, { data }) => data && props.dayId && CalendarService.setMeal(proxy, data.suggestMeal),
  })
  const [eatMeal, { loading: eatMealLoading }] = useMutation<MealComponentEatMealMutation, MealComponentEatMealMutationVariables>(MealComponentContainer.operations.eatMeal, {
    update: (proxy, { data }) => data && props.dayId && CalendarService.setMeal(proxy, {
      ...props.meal,
      ate: !props.meal.ate,
    }),
    optimisticResponse: () => ({
      eatMeal: true
    })
  })

  return (
    <MealComponentAnimationContainer
      {...props}
      logMealLoading={logMealLoading}
      onLogMeal={(variables, mealOptimisticResponse) => logMeal({
        variables,
        optimisticResponse: () => ({
          logMeal: mealOptimisticResponse
        }),
      })}
      mealRegenerating={suggestMealLoading}
      onMealRegenerate={() => suggestMeal({
        variables: {
          date: props.meal.time,
          userMealId: props.meal.userMeal.id,
        },
      })}
      eatMealLoading={eatMealLoading}
      onEatMeal={() => eatMeal({
        variables: {
          dayId: props.dayId,
          userMealId: props.meal.userMeal.id,
          eaten: !props.meal.ate,
        },
      })}
    />
  )
}

MealComponentContainer.fragments = {
  dayMeal: gql`
    fragment MealComponentDayMeal on DayMeal {
      id
      time
      mealId
      ate
      userMeal {
        ...MealSettingsMeal
      }
      items {
        ...MealItemComponentMealItem
      }
    }

    ${MealSettingsScreen.fragments.mealSettingsMeal}
    ${MealItemComponent.fragments.mealItem}
  `
}

MealComponentContainer.operations = {
  suggestMeal: gql`
    mutation MealComponentSuggestMealMutation($userMealId: String!, $date: DateTime!) {
      suggestMeal(userMealId: $userMealId, date: $date) {
        ...MealComponentDayMeal
      }
    }

    ${MealComponentContainer.fragments.dayMeal}
  `,
  logMeal: gql`
    mutation MealComponentLogMealMutation($date: DateTime!, $userMealId: String!, $mealItems: [MealItemInput!]!) {
      logMeal(date: $date, userMealId: $userMealId, mealItems: $mealItems) {
        ...MealComponentDayMeal
      }
    }

    ${MealComponentContainer.fragments.dayMeal}
  `,
  eatMeal: gql`
    mutation MealComponentEatMealMutation($dayId: ObjectId!, $eaten: Boolean!, $userMealId: String!) {
      eatMeal(dayId: $dayId, eaten: $eaten, userMealId: $userMealId)
    }
  `,
}

export default MealComponentContainer

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
