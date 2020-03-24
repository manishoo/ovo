/*
 * CalendarCircle.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import AppConfig from '@App/AppConfig'
import { ThemeContext } from '@App/ThemeContext'
import CircularProgressBar from '@Common/CircularProgressBar/CircularProgressBar'
import Image from '@Common/Image/Image'
import Text from '@Common/Text/Text'
import ImageSource from '@Modules/images'
import { getDayColor } from '@Utils'
import { areOnSameDay } from '@Views/CalendarScreen/utils/is-same-day'
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
import debounce from 'lodash/debounce'
import { DateTime } from 'luxon'
import React from 'react'
import RX from 'reactxp'
import { DayComponentDay } from '../../../DayComponent/types/DayComponentDay'
import { CalendarCircleDay } from './types/CalendarCircleDay'


interface CalendarCircleProps {
  style?: any,
  active?: boolean,
  scale: number,
  date: Date,
  day: CalendarCircleDay | undefined,
  size: number,
  disableAnimation?: boolean,
  loading?: boolean,
  onPress: (date: Date) => void,
}

export default class CalendarCircle extends React.PureComponent<CalendarCircleProps> {
  public static config = {
    scale: {
      inactive: 0.3,
      active: 1,
    }
  }
  static fragments = {
    day: gql`
      fragment CalendarCircleDay on Day {
        id
        date
        nutritionProfile {
          id
          calories
        }
        meals {
          id
          time
          ate
        }
      }
    `
  }
  private _scaleAnimatedValue: RX.Types.AnimatedValue
  private _blinkAnimatedValue: RX.Types.AnimatedValue
  private _circleAnimatedStyle: RX.Types.StyleRuleSet<RX.Types.AnimatedViewStyle>
  private _blinkAnimatedStyle: RX.Types.StyleRuleSet<RX.Types.AnimatedViewStyle>
  // private _bgAnimatedValue = RX.Animated.createValue(0)
  // private _activationAnimation: RX.Types.Animated.CompositeAnimation | null = null
  private _scaleAnimation: RX.Types.Animated.CompositeAnimation | null = null
  private _blinkAnimation: RX.Types.Animated.CompositeAnimation | null = null

  constructor(props: CalendarCircleProps) {
    super(props)

    this._scaleAnimatedValue = RX.Animated.createValue(props.scale)
    this._blinkAnimatedValue = RX.Animated.createValue(1)
    this._circleAnimatedStyle = RX.Styles.createAnimatedViewStyle({
      transform: [{
        scale: this._scaleAnimatedValue,
      }],
    })
    this._blinkAnimatedStyle = RX.Styles.createAnimatedViewStyle({
      opacity: this._blinkAnimatedValue,
    })
    this._scale = debounce(this._scale, 5)
  }

  componentDidMount() {
    if (this.props.loading) {
      this._blink()
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: Readonly<CalendarCircleProps>, nextContext: any): void {
    /**
     * If {active} changed
     * */
    // if (nextProps.active !== this.props.active) {
    //   this._activate(!!nextProps.active)
    // }

    /**
     * If {scale} changed
     * */
    if (nextProps.scale !== this.props.scale) {
      this._scale(nextProps.scale, true)
    }
    /**
     * If {scale} changed
     * */
    if (nextProps.loading !== this.props.loading) {
      this._blink(!!nextProps.loading)
    }
  }

  public UNSAFE_componentWillMount(): void {
    // this._activate(!!this.props.active, false)
    this._scale(this.props.scale, false)
  }

  render() {
    const { date, day } = this.props

    const dateTime = DateTime.fromJSDate(date)

    const isToday = this._isToday()
    let percentageAte = 0
    let isInFuture = false

    if (day) {
      percentageAte = this._getDayProgress(day)
    }
    if (dateTime.diffNow('day').as('day') > 0) {
      isInFuture = true
    }

    const dayColor = getDayColor(date)
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.Animated.View
            {...this.props}
            onPress={() => this.props.onPress(date)}
            onMouseEnter={() => this._scale(this.props.scale * 1.1)}
            onMouseLeave={() => this._scale(this.props.scale)}
            style={[
              styles.circle,
              this._circleAnimatedStyle,
              {
                width: this.props.size,
                height: this.props.size,
                borderRadius: this.props.size / 2,
              }
            ]}
          >
            <RX.View
              style={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                right: 16,
                top: 16,
                borderRadius: this.props.size,
                backgroundColor: day && !isInFuture ? dayColor : '#eee',
              }}
            >
              <RX.Animated.View
                style={[
                  {
                    position: 'absolute',
                    bottom: 7,
                    alignSelf: 'center',
                  },
                  this._blinkAnimatedStyle,
                ]}
              >
                <Text
                  style={[
                    styles.dayName,
                    {
                      fontWeight: isToday ? 'bold' : undefined,
                      fontSize: this.props.size / 9,
                      color: day && !isInFuture ? theme.colors.white : theme.colors.subtitle,
                    }
                  ]}
                >{dateTime.toLocaleString({
                  weekday: 'short',
                  locale: AppConfig.locale
                })}</Text>
                <Text
                  style={[
                    styles.dayDate,
                    {
                      fontWeight: isToday ? 'bold' : undefined,
                      fontSize: this.props.size / 3,
                      color: day && !isInFuture ? theme.colors.white : theme.colors.subtitle,
                    }
                  ]}
                >{dateTime.day}</Text>
              </RX.Animated.View>
            </RX.View>

            {
              day &&
              <RX.View
                style={styles.wrapper}
              >
                <CircularProgressBar
                  sqSize={this.props.size - 10}
                  percentage={percentageAte}
                  strokeWidth={7}
                  strokeColor={'gold'}
                  strokeBackgroundColor={'#eee'}
                  style={styles.progressBar}
                />
                <Image
                  source={percentageAte >= 100 ? ImageSource.Crown : ImageSource.CrownEmpty}
                  resizeMode={'contain'}
                  style={[
                    styles.crown,
                    {
                      width: this.props.size / 4,
                      height: this.props.size / 4,
                    }
                  ]}
                />
              </RX.View>
            }
          </RX.Animated.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _getDayProgress = (day: CalendarCircleDay): number => {
    // return this._getPercentageCaloriesAte(day)
    return this._getPercentageMealsCompleted(day)
  }

  private _getPercentageMealsCompleted = (day: CalendarCircleDay) => {
    const now = new Date()

    const totalMeals = day.meals.length
    let mealsPassed = 0
    day.meals.map(meal => {
      // if (new Date(meal.time) < now) {
      //   mealsPassed++
      // }
      if (meal.ate) {
        mealsPassed++
      }
    })

    return (mealsPassed * 100) / totalMeals
  }

  // private _activate = (active: boolean, animated: boolean = true) => {
  //   if (this._activationAnimation) {
  //     this._activationAnimation.stop()
  //   }
  //   this._activationAnimation = RX.Animated.timing(this._bgAnimatedValue, {
  //     toValue: active ? 1 : 0,
  //     duration: animated ? 300 : 0
  //   })
  //   this._activationAnimation.start()
  // }

  private _getPercentageCaloriesAte = (day: DayComponentDay) => {
    const now = new Date()
    let date = new Date(day.date)

    let totalCaloriesAte = 0

    day.meals.map(meal => {
      date = setHours(date, Number(meal.userMeal.time.split(':')[0]))
      date = setMinutes(date, Number(meal.userMeal.time.split(':')[1]))

      /**
       * If it was passed
       * */
      if (date < now) {
        meal.items.map(mealItem => {
          if (mealItem.item) {
            totalCaloriesAte += mealItem.item.nutrition.calories!.amount
          }
        })
      }
    })

    return Math.round((totalCaloriesAte * 100) / day.nutritionProfile.calories)
  }

  private _scale = (scale: number, animated: boolean = true) => {
    if (this._scaleAnimation) {
      this._scaleAnimation.stop()
    }
    this._scaleAnimation = RX.Animated.timing(this._scaleAnimatedValue, {
      toValue: scale,
      duration: animated ? 200 : 0,
      easing: RX.Animated.Easing.Linear(),
      // useNativeDriver: true,
      // isInteraction: true,
      // delay: 1,
    })
    this._scaleAnimation.start()
  }

  private _blink = (on: boolean = true) => {
    if (this._blinkAnimation) {
      this._blinkAnimation.stop()
    }
    if (on) {
      this._blinkAnimation = RX.Animated.timing(this._blinkAnimatedValue, {
        toValue: 0.5,
        easing: RX.Animated.Easing.OutBack(),
        duration: 1500,
        loop: {
          restartFrom: 1,
        }
      })
    } else {
      this._blinkAnimation = RX.Animated.timing(this._blinkAnimatedValue, {
        toValue: 1,
        duration: 300,
      })
    }
    this._blinkAnimation.start()
  }

  private _isToday = () => areOnSameDay(this.props.date, new Date())
}

const styles = {
  circle: RX.Styles.createViewStyle({
    cursor: 'pointer',
    // [Styles.values.marginStart]: Styles.values.spacing / 2,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  dayName: RX.Styles.createTextStyle({
    textAlign: 'center',
    marginBottom: -5,
  }),
  dayDate: RX.Styles.createTextStyle({
    fontWeight: 'bold',
    textAlign: 'center',
  }),
  progressBar: RX.Styles.createViewStyle({
    transform: [{ rotate: '135deg' }]
  }),
  crown: RX.Styles.createImageStyle({
    position: 'absolute',
    bottom: 10,
    right: 8,
  }),
  wrapper: RX.Styles.createViewStyle({
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  })
}

