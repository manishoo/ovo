/*
 * Refresh.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { useSpinAnimation } from '@Utils/hooks/useSpinAnimation'
import { useMemo } from 'react'
import RX from 'reactxp'
import Svg from 'src/ts/modules/svg'


const _styles = {
  container: RX.Styles.createViewStyle({
    //
  }),
}

interface RefreshIconProps {
  style?: any,
  size: number,
  color?: string,
  spin?: boolean,
}

const RefreshIcon = ({ style, size, color = '#000', spin }: RefreshIconProps) => {
  const _containerStyle = useMemo(() => RX.Styles.createViewStyle({
    width: size,
    height: size,
  }, false), [size])
  const _spinAnimationStyle = useSpinAnimation(spin)

  return (
    <RX.Animated.View
      style={[
        _containerStyle,
        style,
        _spinAnimationStyle,
      ]}
    >
      <Svg
        xml={`
          <svg width="${size}px" height="${size}px" viewBox="0 0 98 76" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <g id="Pages" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Artboard" transform="translate(-435.000000, -179.000000)" fill="${color}" fill-rule="nonzero">
                <g id="Regenerate" transform="translate(433.000000, 166.000000)">
                  <path
                    d="M51.125,13.625 C35.146875,13.625 21.803125,23.5 16.359375,37.453125 L22.121875,39.796875 C26.671875,28.125 37.71875,19.875 51.125,19.875 C61.25625,19.875 70.290625,24.84375 75.93125,32.375 L63.625,32.375 L63.625,38.625 L85.5,38.625 L85.5,16.75 L79.25,16.75 L79.25,26.41875 C72.40625,18.56875 62.28125,13.625 51.125,13.625 Z M80.125,62.453125 C75.578125,74.125 64.53125,82.375 51.125,82.375 C40.884375,82.375 31.8875,77.334375 26.21875,69.875 L38.625,69.875 L38.625,63.625 L16.75,63.625 L16.75,85.5 L23,85.5 L23,75.83125 C29.8375,83.58125 39.859375,88.625 51.125,88.625 C67.103125,88.625 80.446875,78.75 85.890625,64.796875 L80.125,62.453125 Z"
                    id="Shape"
                    transform="translate(51.125000, 51.125000) rotate(45.000000) translate(-51.125000, -51.125000) "
                  />
                </g>
              </g>
            </g>
          </svg>
        `}
      />
    </RX.Animated.View>
  )
}

export default RefreshIcon
