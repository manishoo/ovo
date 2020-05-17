/*
 * FB.tsx
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

interface FBIconProps {
  style?: any,
  size: number,
  color?: string,
}

/*const useColorTransition = (color: string) => {
  const [a] = useState(RX.Animated.createValue(0))
  const previousColor = useRef(color)

  useEffect(() => {
    RX.Animated.timing(a, {
      toValue: 1,
    })
      .start(() => {
        RX.Animated.timing(a, {
          toValue: 0,
        })
          .start()
      })
    previousColor.current = color
  }, [color])


  return a.interpolate({ inputRange: [0, 1], outputRange: [previousColor.current, color] })
}*/

const FBIcon = ({ style, size, color = '#1874ec' }: FBIconProps) => {
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
          <svg width="${size}px" height="${size}px" viewBox="0 0 39 38" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <!-- Generator: Sketch 55.1 (78136) - https://sketchapp.com -->
            <title>FB</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Desktop-HD" transform="translate(-818.000000, -5355.000000)" fill="${color}" fill-rule="nonzero">
                <g id="Group-19" transform="translate(0.000000, 4861.000000)">
                  <g id="Social-medias" transform="translate(444.000000, 494.000000)">
                    <path
                        d="M393.2,0 C382.5968,0 374,8.50725 374,19 C374,28.5253333 381.0912,36.3913333 390.3296,37.7656667 L390.3296,24.035 L385.5792,24.035 L385.5792,19.0411667 L390.3296,19.0411667 L390.3296,15.71775 C390.3296,10.2156667 393.0384,7.80108333 397.6592,7.80108333 C399.872,7.80108333 401.0432,7.96416667 401.5968,8.037 L401.5968,12.3959167 L398.4448,12.3959167 C396.4832,12.3959167 395.7984,14.2373333 395.7984,16.3115 L395.7984,19.0411667 L401.5472,19.0411667 L400.768,24.035 L395.7984,24.035 L395.7984,37.80525 C405.1696,36.5480833 412.4,28.61875 412.4,19 C412.4,8.50725 403.8032,0 393.2,0 Z"
                        id="FB"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        `}
      />
    </RX.Animated.View>
  )
}

export default FBIcon
