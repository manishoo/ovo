/*
 * Carousel.native.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import RX from 'reactxp'
import { CarouselProps } from './types'

// TODO native
export default function Carousel({ style }: CarouselProps) {
  return (
    <RX.View
      style={[styles.container, style]}
    >

    </RX.View>
  )
}

const styles = {
  container: RX.Styles.createViewStyle({}),
}
