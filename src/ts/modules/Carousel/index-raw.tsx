/*
 * Carousel.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { PureComponent } from 'react'
import RX from 'reactxp'
import { CarouselProps } from './types'


export default class Carousel extends PureComponent<CarouselProps> {
  private _slider: RX.ScrollView | null = null

  render() {
    const { children, ...props } = this.props

    return (
      <>
        <RX.ScrollView
          ref={ref => this._slider = ref}
          horizontal
          {...props}
        >
          {children}
        </RX.ScrollView>
      </>
    )
  }

  public goTo = (slideNo: number, animate: boolean = true) => {
    if (!this._slider) return

    // this._slider.slickGoTo(slideNo, !animate)
  }

  private _handleBeforeChange = (currentSlide: number, nextSlide: number) => {
    return this.props.onChange && this.props.onChange(nextSlide)
  }
}

const styles = {
  container: RX.Styles.createViewStyle({}),
}
