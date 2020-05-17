/*
 * TW.tsx
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

interface TWIconProps {
  style?: any,
  size: number,
  color?: string,
}

const TWIcon = ({ style, size, color = '#1c9deb' }: TWIconProps) => {
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
          <svg width="${size}px" height="${size}px" viewBox="0 0 47 38" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <!-- Generator: Sketch 55.1 (78136) - https://sketchapp.com -->
            <title>TW</title>
            <desc>Created with Sketch.</desc>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="Desktop-HD" transform="translate(-908.000000, -5355.000000)" fill="${color}" fill-rule="nonzero">
      <g id="Group-19" transform="translate(0.000000, 4861.000000)">
        <g id="Social-medias" transform="translate(444.000000, 494.000000)">
          <path
              d="M510.265625,4.91964286 C508.560096,5.66183081 506.731971,6.16015648 504.810096,6.38634695 C506.771635,5.23418876 508.278846,3.41052805 508.985577,1.24051362 C507.153846,2.30431548 505.116587,3.07831124 502.956731,3.49534948 C501.225961,1.68582567 498.759615,0.55840819 496.030048,0.55840819 C490.78726,0.55840819 486.536058,4.72172619 486.536058,9.86049152 C486.536058,10.5885417 486.622596,11.2989209 486.784856,11.9810272 C478.895433,11.5922619 471.903846,7.88839286 467.219952,2.25837076 C466.401443,3.63671852 465.936299,5.23418876 465.936299,6.93768624 C465.936299,10.1644345 467.609376,13.0130213 470.158654,14.68471 C468.600961,14.6352304 467.13702,14.2146582 465.856971,13.518415 C465.856971,13.5572917 465.856971,13.5961684 465.856971,13.6350451 C465.856971,18.1447177 469.13101,21.9015995 473.46875,22.7604167 C472.675481,22.9724702 471.835337,23.0855655 470.969952,23.0855655 C470.356971,23.0855655 469.76202,23.0290179 469.181491,22.9159226 C470.393029,26.6091888 473.897837,29.3058036 478.048077,29.3800221 C474.802884,31.8751862 470.710337,33.3595612 466.260817,33.3595612 C465.492789,33.3595612 464.739183,33.3171505 464,33.2287951 C468.197115,35.8723963 473.1875,37.409784 478.549279,37.409784 C496.008414,37.409784 505.556491,23.2340034 505.556491,10.9419643 C505.556491,10.539063 505.545673,10.1326267 505.53125,9.73679338 C507.384615,8.42559524 508.992789,6.78571429 510.265625,4.91964286 Z"
              id="TW"></path>
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

export default TWIcon
