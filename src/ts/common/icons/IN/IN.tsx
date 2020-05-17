/*
 * IN.tsx
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

interface INIconProps {
  style?: any,
  size: number,
  color?: string,
}

const INIcon = ({ style, size, color }: INIconProps) => {
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
            <title>IN</title>
            <desc>Created with Sketch.</desc>
           <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 551.034 551.034" style="enable-background:new 0 0 551.034 551.034;" xml:space="preserve">
<g>

		<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.57" x2="275.517" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)">
		<stop offset="0" style="stop-color:#E09B3D"/>
		<stop offset="0.3" style="stop-color:#C74C4D"/>
		<stop offset="0.6" style="stop-color:#C21975"/>
		<stop offset="1" style="stop-color:#7024C4"/>
	</linearGradient>
	<path style="fill:${color || 'url(#SVGID_1_)'};" d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722   c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156   C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156   c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722   c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"/>

		<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="275.517" y1="4.57" x2="275.517" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)">
		<stop offset="0" style="stop-color:#E09B3D"/>
		<stop offset="0.3" style="stop-color:#C74C4D"/>
		<stop offset="0.6" style="stop-color:#C21975"/>
		<stop offset="1" style="stop-color:#7024C4"/>
	</linearGradient>
	<path style="fill:${color || 'url(#SVGID_2_)'};" d="M275.517,133C196.933,133,133,196.933,133,275.516s63.933,142.517,142.517,142.517   S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6c-48.095,0-87.083-38.988-87.083-87.083   s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083C362.6,323.611,323.611,362.6,275.517,362.6z"/>

		<linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="418.31" y1="4.57" x2="418.31" y2="549.72" gradientTransform="matrix(1 0 0 -1 0 554)">
		<stop offset="0" style="stop-color:#E09B3D"/>
		<stop offset="0.3" style="stop-color:#C74C4D"/>
		<stop offset="0.6" style="stop-color:#C21975"/>
		<stop offset="1" style="stop-color:#7024C4"/>
	</linearGradient>
	<circle style="fill:${color || 'url(#SVGID_3_)'};" cx="418.31" cy="134.07" r="34.15"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
          </svg>
        `}
      />
    </RX.Animated.View>
  )
}

export default INIcon
