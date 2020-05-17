/*
 * PIN.tsx
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

interface PINIconProps {
  style?: any,
  size: number,
  color?: string,
}

const PINIcon = ({ style, size, color = '#c43535' }: PINIconProps) => {
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
            <title>PIN</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="Desktop-HD" transform="translate(-726.000000, -5355.000000)" fill="${color}" fill-rule="nonzero">
      <g id="Group-19" transform="translate(0.000000, 4861.000000)">
        <g id="Social-medias" transform="translate(444.000000, 494.000000)">
          <path
              d="M301.2,0 C290.5968,0 282,8.50725 282,19 C282,27.0496667 287.0608,33.9245 294.2032,36.6921667 C294.0352,35.1895833 293.8832,32.8826667 294.2704,31.2423333 C294.6192,29.7603333 296.5216,21.79775 296.5216,21.79775 C296.5216,21.79775 295.9472,20.6593333 295.9472,18.9778333 C295.9472,16.33525 297.4944,14.364 299.4208,14.364 C301.0592,14.364 301.8496,15.5815833 301.8496,17.0398333 C301.8496,18.6706667 300.8016,21.1074167 300.2592,23.36525 C299.8064,25.2573333 301.2176,26.7995 303.1024,26.7995 C306.5152,26.7995 309.1376,23.2385833 309.1376,18.0990833 C309.1376,13.5501667 305.8352,10.36925 301.1184,10.36925 C295.656,10.36925 292.4496,14.4241667 292.4496,18.61525 C292.4496,20.2476667 293.0848,21.9988333 293.8784,22.952 C294.0352,23.1404167 294.0576,23.3050833 294.0112,23.4966667 C293.8656,24.09675 293.5424,25.3871667 293.4784,25.6515833 C293.3952,25.9999167 293.2,26.07275 292.8368,25.9049167 C290.4384,24.79975 288.9392,21.3306667 288.9392,18.544 C288.9392,12.5510833 293.3392,7.04583333 301.6256,7.04583333 C308.2864,7.04583333 313.4624,11.742 313.4624,18.0199167 C313.4624,24.5685833 309.2896,29.8379167 303.4992,29.8379167 C301.5536,29.8379167 299.7248,28.83725 299.0992,27.6560833 C299.0992,27.6560833 298.136,31.2835 297.9024,32.1733333 C297.4688,33.8231667 296.2992,35.8925833 295.5152,37.1545 C297.312,37.7023333 299.2208,38 301.2,38 C311.8032,38 320.4,29.49275 320.4,19 C320.4,8.50725 311.8032,0 301.2,0 Z"
              id="PIN"></path>
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

export default PINIcon
