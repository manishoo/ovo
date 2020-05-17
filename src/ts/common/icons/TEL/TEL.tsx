/*
 * TEL.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { useMemo } from 'react'
import RX from 'reactxp'
import Svg from 'src/ts/modules/svg'


const _styles = {
  container: RX.Styles.createViewStyle({
    //
  }),
}

interface TELIconProps {
  style?: any,
  size: number,
  color?: string,
}

const TELIcon = ({ style, size, color = '#0397df' }: TELIconProps) => {
  const _containerStyle = useMemo(() => [
    RX.Styles.createViewStyle({
      width: size,
      height: size,
    }, false),
    style
  ], [size, style])

  return (
    <RX.Animated.View
      style={_containerStyle}
    >
      <Svg
        xml={`
          <?xml version="1.0" encoding="UTF-8"?>
          <svg width="${size}px" height="${size}px" viewBox="0 0 496 512" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <!-- Generator: Sketch 55.1 (78136) - https://sketchapp.com -->
            <title>TEL</title>
            <desc>Created with Sketch.</desc>
            <path fill=${color} d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" />
          </svg>
        `}
      />
    </RX.Animated.View>
  )
}

export default TELIcon
