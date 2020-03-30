/*
 * useSpinAnimation.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { useEffect, useMemo, useRef, useState } from 'react'
import RX from 'reactxp'


export const useSpinAnimation = (spin?: boolean) => {
  const [_animationValue] = useState(RX.Animated.createValue(0))
  const _animationStyle = useMemo(() => RX.Styles.createAnimatedViewStyle({
    transform: [{
      rotate: _animationValue
    }]
  }), [])

  const _loopAnimation = useRef(RX.Animated.timing(_animationValue, {
    toValue: 360,
    duration: 700,
    easing: RX.Animated.Easing.Linear(),
    loop: {
      restartFrom: 0,
    }
  }))

  useEffect(() => {
    if (spin) {
      _loopAnimation.current.start()
    } else {
      _loopAnimation.current.stop()
    }
  }, [spin])

  return _animationStyle
}
