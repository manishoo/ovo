/*
 * Hamburger.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { useTheme } from '@App/ThemeContext'
import { useEffect, useMemo, useState } from 'react'
import RX from 'reactxp'


const _styles = {
  container: RX.Styles.createViewStyle({
    justifyContent: 'center',
    cursor: 'pointer',
    alignItems: 'center',
  }),
  bar: RX.Styles.createViewStyle({
    borderRadius: 100,
    position: 'absolute',
  }),
}

interface HamburgerProps {
  style?: any,
  open: boolean,
  size: number,
  onPress: () => void,
  color?: string,
}

const Hamburger = ({ style, open, size, onPress, color }: HamburgerProps) => {
  const theme = useTheme()

  const [animatedValue] = useState(RX.Animated.createValue(0))
  const _startBarAnimatedStyle = useMemo(() => RX.Styles.createAnimatedViewStyle({
    transform: [
      { rotate: animatedValue.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '45deg'] }) },
      { translateY: animatedValue.interpolate({ inputRange: [0, 1], outputRange: [-size / 3, 0] }) }
    ]
  }), [animatedValue])
  const _endBarAnimatedStyle = useMemo(() => RX.Styles.createAnimatedViewStyle({
    transform: [
      { rotate: animatedValue.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '-45deg'] }) },
      { translateY: animatedValue.interpolate({ inputRange: [0, 1], outputRange: [size / 3, 0] }) }
    ]
  }), [animatedValue])
  const _middleBarAnimatedStyle = useMemo(() => RX.Styles.createAnimatedViewStyle({
    opacity: animatedValue.interpolate({ inputRange: [0, 1], outputRange: [1, 0] })
  }), [animatedValue])

  useEffect(() => {
    RX.Animated.timing(animatedValue, {
      toValue: open ? 1 : 0,
      duration: 500,
    })
      .start()
  }, [open])

  const _containerStyle = useMemo(() => RX.Styles.createViewStyle({
    width: size,
    height: size,
  }, false), [size])

  const _barStyle = useMemo(() => RX.Styles.createViewStyle({
    width: size,
    height: Math.round(size / 6),
    backgroundColor: color || theme.colors.hamburger
  }, false), [color, theme.colors.hamburger, size])

  return (
    <RX.View
      onPress={onPress}
      style={[
        _styles.container,
        _containerStyle,
        style,
      ]}
    >
      <RX.Animated.View style={[_styles.bar, _barStyle, _startBarAnimatedStyle]} />
      <RX.Animated.View style={[_styles.bar, _barStyle, _middleBarAnimatedStyle]} />
      <RX.Animated.View style={[_styles.bar, _barStyle, _endBarAnimatedStyle]} />
    </RX.View>
  )
}

export default Hamburger
