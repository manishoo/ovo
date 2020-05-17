/*
 * Cross.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { useMemo } from 'react'
import RX from 'reactxp'


const _styles = {
  container: RX.Styles.createViewStyle({
    alignItems: 'center',
    justifyContent: 'center',
  }),
  bar: RX.Styles.createViewStyle({
    position: 'absolute'
  }),
  leftBar: RX.Styles.createViewStyle({
    transform: [{ rotate: '45deg' }],
    borderRadius: 100,
  }),
  rightBar: RX.Styles.createViewStyle({
    transform: [{ rotate: '135deg' }],
    borderRadius: 100,
  }),
}

interface CrossProps {
  style?: any,
  size: number,
  color?: string,
}

const Cross = ({ style, size, color = '#fff' }: CrossProps) => {
  const _barStyle = useMemo(() => RX.Styles.createViewStyle({
    width: size,
    height: size / 10,
    backgroundColor: color,
  }, false), [size, color])
  const _containerStyle = useMemo(() => RX.Styles.createViewStyle({
    width: size,
    height: size,
  }, false), [])

  return (
    <RX.View
      style={[
        _styles.container,
        _containerStyle,
        style,
      ]}
    >
      <RX.View style={[_styles.bar, _styles.leftBar, _barStyle]} />
      <RX.View style={[_styles.bar, _styles.rightBar, _barStyle]} />
    </RX.View>
  )
}

export default Cross
