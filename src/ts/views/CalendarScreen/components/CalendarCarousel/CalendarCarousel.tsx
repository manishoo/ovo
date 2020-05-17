/*
 * CalendarCarousel.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { useTheme } from '@App/ThemeContext'
import { FoodPreviewMealItem } from '@Common/FoodPickerDialog/components/types/FoodPreviewMealItem'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Carousel from '@Modules/Carousel'
import { getDayColorByDate, getDayColorByDay } from '@Utils'
import { ANIMATION_DURATION } from '@Views/CalendarScreen/CalendarScreen'
import DayComponent from '@Views/CalendarScreen/components/DayComponent/DayComponent'
import { DayComponentDay } from '@Views/CalendarScreen/components/DayComponent/types/DayComponentDay'
import { haveSame } from '@Views/CalendarScreen/utils/is-same-day'
import { DateTime } from 'luxon'
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from 'react'
import RX from 'reactxp'


interface CalendarCarouselProps {
  style?: any,
  onSlideChange?: (slideIndex: number) => void,
  onNextSlide?: () => void,
  onPrevSlide?: () => void,
  renderingDates: Date[],
  loadingDays: Date[],
  initialSlide: number,
  onTitlePress: (date?: Date) => void,
  height: number,
  width: number,
  isTinyOrSmall: boolean,
  days: DayComponentDay[],
  draggingMealItem?: FoodPreviewMealItem,
  fixedDays?: boolean,
}

function CalendarCarousel(props: CalendarCarouselProps, ref: any) {
  const {
    initialSlide, onTitlePress,
    height, width, isTinyOrSmall, loadingDays,
    draggingMealItem,
    days,
    renderingDates,
    onNextSlide, onSlideChange,
    onPrevSlide, fixedDays,
  } = props

  const theme = useTheme()

  const _getDayTitle = useCallback((index, date) => {
    if (fixedDays) {
      return `${translate('day')} ${index + 1}`
    }

    if (!date) throw new Error('no date')

    const today = new Date()
    const isOnSameWeek = useMemo(() => haveSame(today, date, 'week'), [date])
    const isToday = useMemo(() => haveSame(date, today, 'day'), [date])
    const datetime = useMemo(() => DateTime.fromJSDate(date), [date])

    const isTomorrow = useMemo(() => Math.round(datetime.diffNow('day').as('day')) === 1, [date])
    const isYesterday = useMemo(() => Math.round(datetime.diffNow('day').as('day')) === -1, [date])

    let text = useMemo(() => datetime && datetime.toLocaleString({
      day: isOnSameWeek ? undefined : '2-digit',
      month: isOnSameWeek ? undefined : 'short',
      weekday: 'long',
    }), [date])

    if (isToday) {
      text = translate(translate.keys.Today)
    }
    if (isTomorrow) {
      text = translate(translate.keys.Tomorrow)
    }
    if (isYesterday) {
      text = translate(translate.keys.Yesterday)
    }

    return text
  }, [fixedDays])

  const _handleSwipe = useCallback((swipeDirection: 'left' | 'right') => {
    switch (swipeDirection) {
      case 'left':
        return onNextSlide && onNextSlide()
      case 'right':
        return onPrevSlide && onPrevSlide()
    }
  }, [])

  const _getDay = useCallback((date: Date) => days.find(day => haveSame(day.date, date, 'day')), [days])
  const _carouselRef = useRef<any>(null)

  useImperativeHandle(ref, () => ({
    goTo: (slideNo: number, animate?: boolean) => _carouselRef.current.goTo(slideNo, animate)
  }))

  return (
    <Carousel
      ref={ref => _carouselRef.current = ref}
      initialSlide={fixedDays ? 0 : initialSlide}
      slidesToShow={1}
      slidesToScroll={1}
      adaptiveHeight
      speed={ANIMATION_DURATION}
      onChange={onSlideChange}
      onSwipe={_handleSwipe}
      style={styles.carousel}
    >
      {
        fixedDays
          ? days.map((day, index) => (
            <DayComponent
              key={day.id}
              title={_getDayTitle(index, day.date ? new Date(day.date) : undefined)}
              loading={!!loadingDays.find(d => haveSame(d, new Date(day.date), 'day'))}
              date={day.date ? new Date(day.date) : undefined}
              onTitlePress={onTitlePress}
              dayColor={getDayColorByDay((index + 1) % 7)}
              day={day}
              minHeight={0}
              width={width}
              isTinyOrSmall={isTinyOrSmall}
              draggingMealItem={draggingMealItem}
            />
          ))
          : renderingDates.map((date, index) => (
            <DayComponent
              key={String(date)}
              title={_getDayTitle(index, date)}
              loading={!!loadingDays.find(d => haveSame(d, date, 'day'))}
              date={date}
              onTitlePress={onTitlePress}
              dayColor={getDayColorByDate(date)}
              day={_getDay(date)}
              minHeight={0}
              width={width}
              isTinyOrSmall={isTinyOrSmall}
              draggingMealItem={draggingMealItem}
            />
          ))
      }

      {
        fixedDays &&
        <DayComponent
          key={'new'}
          title={translate('newDay')}
          // loading={!!loadingDays.find(d => haveSame(d, new Date(day.date), 'day'))}
          // date={new Date(day.date)}
          onTitlePress={onTitlePress}
          // day={day}
          dayColor={theme.colors.text}
          minHeight={0}
          width={width}
          isTinyOrSmall={isTinyOrSmall}
          draggingMealItem={draggingMealItem}
        />
      }
    </Carousel>
  )
}

export default forwardRef(CalendarCarousel)

const styles = {
  carousel: RX.Styles.createViewStyle({
    paddingHorizontal: 0,
  })
}
