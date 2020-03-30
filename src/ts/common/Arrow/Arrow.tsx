/*
 * Arrow.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { useCallback, useMemo } from 'react'
import RX from 'reactxp'


const _styles = {
  container: RX.Styles.createViewStyle({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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

interface ArrowProps {
  style?: any,
  size: number,
  color?: string,
  direction?: 'down' | 'up' | 'left' | 'right'
}

const Arrow = ({ style, size, color = '#fff', direction }: ArrowProps) => {
  const _barStyle = useMemo(() => RX.Styles.createViewStyle({
    width: size / 2,
    height: size / 10,
    backgroundColor: color,
  }, false), [size, color])
  const _innerContainerStyle = useMemo(() => RX.Styles.createViewStyle({
    width: size,
    height: size,
  }, false), [])

  const _getArrowRotation = useCallback((direction) => {
    switch (direction) {
      case 'down':
        return '180deg'
      case 'up':
        return '90deg'
      case 'left':
        return '-90deg'
      case 'right':
        return '90deg'
    }
  }, [])

  const _containerStyle = useMemo(() => RX.Styles.createViewStyle({
    transform: [{ rotate: _getArrowRotation(direction) }]
  }, false), [])

  return (
    <RX.View style={[
      _containerStyle,
      style
    ]}>
      <RX.View
        style={[
          _styles.container,
          _innerContainerStyle,
        ]}
      >
        <RX.View style={[_styles.leftBar, _barStyle, { [Styles.values.start]: +size / 2.5 }]} />
        <RX.View style={[_styles.rightBar, _barStyle, { [Styles.values.start]: -size / 2.5 }]} />
      </RX.View>
    </RX.View>
  )
}

export default Arrow
