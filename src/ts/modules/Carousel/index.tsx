/*
 * Carousel.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Helmet from 'react-helmet'
import Slider, { Settings } from 'react-slick'
import RX from 'reactxp'
import { CarouselProps } from './types'


export default class Carousel extends RX.Component<CarouselProps> {
  private _slider: Slider | null = null

  render() {
    const { children, ...props } = this.props

    const settings: Settings = {
      dots: false,
      infinite: false,
      arrows: false,
      swipeToSlide: true,
      centerMode: true,
      swipe: true,
      waitForAnimate: true,
      touchThreshold: 10,
    }

    return (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Helmet>
        <Slider
          ref={ref => this._slider = ref}
          {...settings}
          {...props}
        >
          {children}
        </Slider>
      </>
    )
  }

  public goTo = (slideNo: number, animate: boolean = true) => {
    if (!this._slider) return

    this._slider.slickGoTo(slideNo, !animate)
  }
}

const styles = {
  container: RX.Styles.createViewStyle({}),
}
