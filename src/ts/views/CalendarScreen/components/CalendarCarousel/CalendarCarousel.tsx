/*
 * CalendarCarousel.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { FoodPreviewMealItem } from '@Common/FoodPickerDialog/components/types/FoodPreviewMealItem'
import { ANIMATION_DURATION } from '@Views/CalendarScreen/CalendarScreen'
import DayComponent from '@Views/CalendarScreen/components/DayComponent/DayComponent'
import { DayComponentDay } from '@Views/CalendarScreen/components/DayComponent/types/DayComponentDay'
import { haveSame } from '@Views/CalendarScreen/utils/is-same-day'
import { PureComponent } from 'react'
import RX from 'reactxp'
import Carousel from 'src/ts/modules/Carousel/index-slick'


interface CalendarCarouselProps {
  style?: any,
  onSlideChange?: (slideIndex: number) => void,
  onNextSlide?: () => void,
  onPrevSlide?: () => void,
  renderingDates: Date[],
  loadingDays: Date[],
  initialSlide: number,
  onTitlePress: (date: Date) => void,
  height: number,
  width: number,
  isTinyOrSmall: boolean,
  days: DayComponentDay[],
  draggingMealItem?: FoodPreviewMealItem
}

export default class CalendarCarousel extends PureComponent<CalendarCarouselProps> {
  private _carousel: Carousel | null = null

  render() {
    const {
      initialSlide, onTitlePress,
      height, width, isTinyOrSmall, loadingDays,
      draggingMealItem,
    } = this.props

    return (
      <Carousel
        ref={ref => this._carousel = ref}
        initialSlide={initialSlide}
        slidesToShow={1}
        slidesToScroll={1}
        adaptiveHeight
        speed={ANIMATION_DURATION}
        onChange={this.props.onSlideChange}
        onSwipe={this._handleSwipe}
        style={styles.carousel}
      >
        {
          this.props.renderingDates.map(date => (
            <DayComponent
              key={String(date)}
              loading={!!loadingDays.find(d => haveSame(d, date, 'day'))}
              date={date}
              onTitlePress={onTitlePress}
              day={this._getDay(date)}
              minHeight={0}
              width={width}
              isTinyOrSmall={isTinyOrSmall}
              draggingMealItem={draggingMealItem}
            />
          ))
        }
      </Carousel>
    )
  }

  public goTo = (slideNo: number, animate?: boolean) => this._carousel!.goTo(slideNo, animate)

  private _handleSwipe = (swipeDirection: 'left' | 'right') => {
    switch (swipeDirection) {
      case 'left':
        return this.props.onNextSlide && this.props.onNextSlide()
      case 'right':
        return this.props.onPrevSlide && this.props.onPrevSlide()
    }
  }

  private _getDay = (date: Date) => this.props.days.find(day => haveSame(day.date, date, 'day'))
}

const styles = {
  carousel: RX.Styles.createViewStyle({
    paddingHorizontal: 0,
  })
}
