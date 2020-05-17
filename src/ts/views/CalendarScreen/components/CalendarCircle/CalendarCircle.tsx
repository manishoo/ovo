/*
 * CalendarCircle.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import AppConfig from '@App/AppConfig'
import { useTheme } from '@App/ThemeContext'
import CircularProgressBar from '@Common/CircularProgressBar/CircularProgressBar'
import Image from '@Common/Image/Image'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import ImageSource from '@Modules/images'
import { getDayColorByDate, getDayColorByDay } from '@Utils'
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
import debounce from 'lodash/debounce'
import { DateTime } from 'luxon'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import RX from 'reactxp'
import { haveSame } from '../../utils/is-same-day'
import { DayComponentDay } from '../DayComponent/types/DayComponentDay'
import { CalendarCircleDay } from './types/CalendarCircleDay'


const _styles = {
  circle: RX.Styles.createViewStyle({
    cursor: 'pointer',
    // [Styles.values.marginStart]: Styles.values.spacing / 2,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  innerContainer: RX.Styles.createViewStyle({
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    top: 16,
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
    marginBottom: 0,
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

interface CalendarCircleProps {
  style?: any,
  active?: boolean,
  scale: number,
  date?: Date,
  day: CalendarCircleDay | undefined,
  dayNumber?: number,
  size: number,
  disableAnimation?: boolean,
  loading?: boolean,
  onPress: (date?: Date) => void,
}

const ACTIVE_SCALE = 1.4

export default function CalendarCircle(props: CalendarCircleProps) {
  const {
    date,
    day,
    dayNumber,
    active,
  } = props

  const [_scaleAnimatedValue] = useState(RX.Animated.createValue(props.scale))
  const [_blinkAnimatedValue] = useState(RX.Animated.createValue(1))
  const _circleAnimatedStyle = useMemo(() => RX.Styles.createAnimatedViewStyle({
    transform: [{
      scale: _scaleAnimatedValue,
    }],
  }), [_scaleAnimatedValue])
  const _blinkAnimatedStyle = useMemo(() => RX.Styles.createAnimatedViewStyle({
    opacity: _blinkAnimatedValue,
  }), [_blinkAnimatedValue])

  const [_bgAnimatedValue] = useState(RX.Animated.createValue(0))
  const _activationAnimationRef = useRef<RX.Types.Animated.CompositeAnimation | null>()
  const _innerContainerBackgroundAnimationStyle = useMemo(() => RX.Styles.createAnimatedViewStyle({}), [])

  const _scaleAnimationRef = useRef<RX.Types.Animated.CompositeAnimation | null>()
  const _blinkAnimationRef = useRef<RX.Types.Animated.CompositeAnimation | null>()

  const _getPercentageMealsCompleted = useCallback((day: CalendarCircleDay) => {
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
  }, [])

  const _getDayProgress = useCallback((day: CalendarCircleDay): number => {
    // return this._getPercentageCaloriesAte(day)
    return _getPercentageMealsCompleted(day)
  }, [])

  const _getPercentageCaloriesAte = useCallback((day: DayComponentDay) => {
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
          if (mealItem.item && mealItem.item.nutrition) {
            totalCaloriesAte += mealItem.item.nutrition.calories!.amount
          }
        })
      }
    })

    // return Math.round((totalCaloriesAte * 100) / day.nutritionProfile.calories)
  }, [])

  const _scale = useCallback(debounce((scale: number, animated: boolean = true) => {
    if (_scaleAnimationRef.current) {
      _scaleAnimationRef.current.stop()
    }
    _scaleAnimationRef.current = RX.Animated.timing(_scaleAnimatedValue, {
      toValue: scale,
      duration: animated ? 200 : 0,
      easing: RX.Animated.Easing.Linear(),
      // useNativeDriver: true,
      // isInteraction: true,
      // delay: 1,
    })
    _scaleAnimationRef.current.start()
  }, 5), [])

  const _blink = useCallback((on: boolean) => {
    if (_blinkAnimationRef.current) {
      _blinkAnimationRef.current.stop()
    }
    if (on) {
      _blinkAnimationRef.current = RX.Animated.timing(_blinkAnimatedValue, {
        toValue: 0.5,
        easing: RX.Animated.Easing.OutBack(),
        duration: 1500,
        loop: {
          restartFrom: 1,
        }
      })
    } else {
      _blinkAnimationRef.current = RX.Animated.timing(_blinkAnimatedValue, {
        toValue: 1,
        duration: 300,
      })
    }
    _blinkAnimationRef.current.start()
  }, [])
  const _isToday = useCallback(() => date && haveSame(date, new Date(), 'day'), [date])

  useEffect(() => {
    _blink(!!props.loading)
  }, [props.loading])

  useEffect(() => {
    _scale(props.scale, true)
  }, [props.scale])

  useEffect(() => {
    _scale(active ? ACTIVE_SCALE : props.scale, true)
  }, [active])

  const dateTime = useMemo(() => date && DateTime.fromJSDate(date), [date])

  const isToday = _isToday()
  let percentageAte = 0
  let isInFuture = useMemo(() => dateTime && dateTime.diffNow('day').as('day') > 0, [date])

  if (day) {
    percentageAte = _getDayProgress(day)
  }

  const dayColor = date ? getDayColorByDate(date) : getDayColorByDay(dayNumber! % 7)
  const theme = useTheme()

  const _onPress = useCallback(() => props.onPress(date), [date, props.onPress])
  const _onMouseEnter = useCallback(() => _scale((active ? ACTIVE_SCALE : props.scale) * 1.1), [props.scale, active])
  const _onMouseLeave = useCallback(() => _scale(active ? ACTIVE_SCALE : props.scale), [props.scale, active])

  const _innerContainerStyle = useMemo(() => [
    _styles.innerContainer,
    {
      borderRadius: props.size,
      backgroundColor: day && !isInFuture ? dayColor : theme.colors.calendarCircleInactive,
    }
  ], [day, isInFuture, dayColor, props.size, theme.colors.calendarCircleInactive])

  const _containerStyle = useMemo(() => [
    _styles.circle,
    _circleAnimatedStyle,
    {
      width: props.size,
      height: props.size,
      borderRadius: props.size / 2,
    }
  ], [_circleAnimatedStyle, props.size])

  const _dayShortStyle = useMemo(() => [
    _styles.dayName,
    {
      fontWeight: isToday ? 'bold' : undefined,
      fontSize: props.size / 9,
      color: day && !isInFuture ? theme.colors.cardBg : theme.colors.subtitle,
    }
  ], [
    isToday,
    props.size,
    isInFuture,
    day!!,
    theme.colors.cardBg,
    theme.colors.subtitle
  ])

  const _dayTitleText = useMemo(() => dateTime ? dateTime.day : dayNumber, [date, dayNumber])
  const _dayShortText = useMemo(() => dateTime ? dateTime.toLocaleString({
    weekday: 'short',
    locale: AppConfig.locale
  }) : translate('day'), [AppConfig.locale, date])

  const _dayTitleStyle = useMemo(() => [
    _styles.dayDate,
    {
      fontWeight: isToday ? 'bold' : undefined,
      fontSize: props.size / 3,
      color: day && !isInFuture ? theme.colors.cardBg : theme.colors.subtitle,
    }
  ], [
    isToday,
    date,
    props.size,
    isInFuture,
    day!!,
    theme.colors.cardBg,
    theme.colors.subtitle
  ])

  const _crownStyle = useMemo(() => [
    _styles.crown,
    {
      width: props.size / 4,
      height: props.size / 4,
    }
  ], [
    props.size,
    date,
  ])

  return (
    <RX.Animated.View
      {...props}
      onPress={_onPress}
      onMouseEnter={_onMouseEnter}
      onMouseLeave={_onMouseLeave}
      style={_containerStyle}
    >
      <RX.View
        style={_innerContainerStyle}
      >
        <RX.Animated.View
          style={_blinkAnimatedStyle}
        >
          <Text style={_dayShortStyle}>{_dayShortText}</Text>
          <Text type={Text.types.title} style={_dayTitleStyle}>{_dayTitleText}</Text>
        </RX.Animated.View>
      </RX.View>

      {
        day && date &&
        <RX.View
          style={_styles.wrapper}
        >
          <CircularProgressBar
            sqSize={props.size - 10}
            percentage={percentageAte}
            strokeWidth={7}
            strokeColor={'gold'}
            strokeBackgroundColor={theme.colors.calendarCircleInactive}
            style={_styles.progressBar}
          />
          <Image
            source={percentageAte >= 100 ? ImageSource.Crown : ImageSource.CrownEmpty}
            resizeMode={'contain'}
            style={_crownStyle}
          />
        </RX.View>
      }
    </RX.Animated.View>
  )
}

CalendarCircle.fragments = {
  day: gql`
    fragment CalendarCircleDay on Day {
      id
      date
      meals {
        id
        time
        ate
      }
    }
  `
}

CalendarCircle.config = {
  scale: {
    inactive: 0.3,
    active: 1,
  }
}
