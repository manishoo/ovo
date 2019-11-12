/*
 * Day.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useQuery } from '@apollo/react-hooks'
import CalendarStore, { DayItem, DayTemplate } from '@Services/CalendarStore'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { ApolloQueryResult } from 'apollo-client'
import Text from 'common/Text/Text'
import gql from 'graphql-tag'
import { DateTime } from 'luxon'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import AppConfig from 'src/ts/app/AppConfig'
import Styles from 'src/ts/app/Styles'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { getDayColor } from 'src/ts/utilities'
import MealComponent from '../components/Meal'
import { Day } from '../types/Day'
import {
  DayComponentMealSuggestionQuery,
  DayComponentMealSuggestionQueryVariables
} from './types/DayComponentMealSuggestionQuery'


const CIRCLE_INIT_SIZE = 100
const CIRCLE_TOP = -45
const MEAL_MAX_WIDTH = 350

function getTemplate(isPrevDayFilled: boolean, isNextDayFilled: boolean) {
  if (isPrevDayFilled && isNextDayFilled) {
    return DayTemplate.fullTopBottomFull
  }

  if (!isPrevDayFilled && !isNextDayFilled) {
    return DayTemplate.fullTopBottomEmpty
  }

  if (isPrevDayFilled) {
    return DayTemplate.fullTopFull
  }

  if (isNextDayFilled) {
    return DayTemplate.fullBottomFull
  }

  return DayTemplate.empty
}

interface DayComponentProps {
  style?: any,
  day: DayItem,
  daySuggestionLoading?: boolean,
  isPrevDayFilled?: boolean,
  isNextDayFilled?: boolean,

  onDaySuggest: () => Promise<ApolloQueryResult<DayComponentMealSuggestionQuery>>,
}

interface DayComponentState {
  width: number
  height: number
  isTinyOrSmall: boolean
}

export class DayComponent extends ComponentBase<DayComponentProps, DayComponentState> {
  constructor(props) {
    super(props)
    this.state = {
      width: ResponsiveWidthStore.getWidth(),
      height: ResponsiveWidthStore.getHeight(),
      isTinyOrSmall: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
    }

    if (props.day.meals.length > 0) this._setUI(false, props.day.height)
  }

  public componentWillReceiveProps(nextProps: Readonly<DayComponentProps>, nextContext: any): void {
    if ((this.props.day.meals.length === 0) && (nextProps.day.meals.length !== this.props.day.meals.length)) {
      this._setUI()
    }

    if (this.props.day.height !== nextProps.day.height) {
      this._setUI(true, nextProps.day.height)
    }
  }

  protected _buildState(props: DayComponentProps, initialBuild: boolean): Partial<DayComponentState> | undefined {
    return {
      width: ResponsiveWidthStore.getWidthConsideringDrawer(),
      height: ResponsiveWidthStore.getHeight(),
      isTinyOrSmall: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
    }
  }

  render() {
    const { style, day } = this.props

    return (
      <RX.Animated.View
        key={day.id}
        style={[
          styles.container,
          style,
          this._cellBGAnimationStyle,
          {
            minHeight: this.state.height,
            minWidth: this.state.width,
          }
        ]}
      >
        <RX.Animated.View
          style={[
            styles.circle,
            {
              borderRadius: RX.Platform.select({
                // @ts-ignore
                default: this.state.width * 3,
                // @ts-ignore
                web: '100%',
              }),

              backgroundColor: getDayColor(day.date),
            },
            this._circleAnimationStyle,
          ]}
          onPress={day.meals.length === 0 ? this._handleDaySuggestion(day) : undefined}
        >
          {
            day.meals.length > 0 &&
            <ThemeContext.Consumer>
              {({ theme }) => (
                <Text
                  style={[
                    styles.dayName,
                    {
                      color: theme.colors.calendarDayName,
                    }
                  ]}
                >{DateTime.fromJSDate(day.date).toLocaleString({
                  day: DateTime.fromJSDate(day.date).diff(DateTime.local()).as('days') > 7 ? '2-digit' : undefined,
                  month: DateTime.fromJSDate(day.date).diff(DateTime.local()).as('days') > 7 ? 'short' : undefined,
                  weekday: 'long',
                  locale: AppConfig.locale
                })}</Text>
              )}
            </ThemeContext.Consumer>
          }

          {
            day.meals.length > 0 &&
            <RX.View
              style={{
                minHeight: this.state.height,
                minWidth: this.state.width,
              }}
              onLayout={e => {
                if (day.height !== e.height) {
                  CalendarStore.setDay({
                    ...day,
                    template: null,
                    height: e.height + 80,
                  })
                }
              }}
            >
              {
                day.meals.map(meal => (
                  <MealComponent
                    meal={meal}
                    style={[
                      {
                        margin: Styles.values.spacing,
                      },
                      this.state.isTinyOrSmall ?
                        {
                          alignSelf: 'stretch',
                        } :
                        {
                          alignSelf: 'center',
                          width: MEAL_MAX_WIDTH,
                        }
                    ]}
                  />
                ))
              }
            </RX.View>
          }
        </RX.Animated.View>
      </RX.Animated.View>
    )
  }

  private _cellBGInterpolatedValue = RX.Animated.createValue(0)
  private _cellBGAnimationStyle = RX.Styles.createAnimatedViewStyle({
    backgroundColor: RX.Animated.interpolate(
      this._cellBGInterpolatedValue,
      [0, 1, 2, 3, 4, 5, 6, 7],
      ['#fff', '#E53935', '#FFCC00', '#F06292', '#43A047', '#FF9209', '#1E88E5', '#5E35B1',],
    ),
    // transform: [{
    //   scaleX: this._circleScaleXAnimationValue,
    //   scaleY: this._circleScaleYAnimationValue,
    // }]
  })

  private _circleWidthAnimationValue = RX.Animated.createValue(CIRCLE_INIT_SIZE)
  private _circleHeightAnimationValue = RX.Animated.createValue(CIRCLE_INIT_SIZE)
  private _circleTopAnimationValue = RX.Animated.createValue(0)
  private _circleAnimationStyle = RX.Styles.createAnimatedViewStyle({
    width: this._circleWidthAnimationValue,
    height: this._circleHeightAnimationValue,
    top: this._circleTopAnimationValue,
    // transform: [{
    //   scaleX: this._circleScaleXAnimationValue,
    //   scaleY: this._circleScaleYAnimationValue,
    // }]
  })

  private _handleDaySuggestion = (day: Day) => () => {
    const { isPrevDayFilled, isNextDayFilled, day } = this.props

    this.props.onDaySuggest()
      .then(({ data: { suggestDay } }) => {
        CalendarStore.setDay({
          date: day.date,
          meals: suggestDay.meals,
          id: day.id,
          key: day.id,
          height: CIRCLE_INIT_SIZE,
          template: getTemplate(isPrevDayFilled, isNextDayFilled)
        })
      })
  }

  private _setUI = (animated: boolean = true, circleHeight?: number) => {
    const { isPrevDayFilled, isNextDayFilled, day } = this.props

    const height = circleHeight || this.state.height

    RX.Animated.parallel([
      RX.Animated.timing(this._circleWidthAnimationValue, {
        toValue: height * 1.3,
        duration: animated ? 700 : 0,
        easing: RX.Animated.Easing.Out(),
      }),
      RX.Animated.timing(this._circleHeightAnimationValue, {
        toValue: isPrevDayFilled ? (height - CIRCLE_TOP) : height,
        duration: animated ? 700 : 0,
        easing: RX.Animated.Easing.Out(),
      }),
      isPrevDayFilled &&
      RX.Animated.timing(this._circleTopAnimationValue, {
        toValue: CIRCLE_TOP,
        duration: animated ? 700 : 0,
      }),
    ]
      .filter(Boolean))
      .start(() => {
        if (isNextDayFilled) {
          RX.Animated.timing(this._cellBGInterpolatedValue, {
            toValue: (day.date.getDay() === 6) ? 1 : (day.date.getDay() + 2),
            duration: 0,
          })
            .start()
        }
      })
  }

  static fragments = {
    day: gql`
      fragment Day on Day {
        id
        date
        meals {
          ...DayMeal
        }
      }

      ${MealComponent.fragments.meal}
    `,
  }

  static operations = {
    suggestDay: gql`
      query DayComponentMealSuggestionQuery($skip: Boolean!) {
        suggestDay @skip(if: $skip) {
          ...Day
        }
      }

      ${DayComponent.fragments.day}
    `
  }
}

export default (props: Omit<DayComponentProps, 'onDaySuggest' | 'daySuggestionLoading'>) => {
  const { loading, refetch } = useQuery<DayComponentMealSuggestionQuery, DayComponentMealSuggestionQueryVariables>(DayComponent.operations.suggestDay, {
    variables: {
      skip: true,
    }
  })

  return (
    <DayComponent
      {...props}
      daySuggestionLoading={loading}
      onDaySuggest={() => refetch({ skip: false })}
    />
  )
}

const styles = {
  container: RX.Styles.createViewStyle({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  circle: RX.Styles.createViewStyle({
    paddingTop: 60,
    alignItems: 'center',
  }),
  dayName: RX.Styles.createTextInputStyle({
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: Styles.values.spacing,
  })
}
