/*
 * Swipable.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { useTheme } from '@App/ThemeContext'
import { forwardRef, Ref, useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react'
import RX from 'reactxp'
import { PreferredPanGesture } from 'reactxp/dist/common/Types'


const scale = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

const _styles = {
  innerContainer: RX.Styles.createViewStyle({
    position: 'absolute',
    [Styles.values.end]: 0,
    top: 0,
    bottom: 0,
    alignSelf: 'flex-end'
  }),
  container: RX.Styles.createViewStyle({
    flex: 1,
    overflow: 'visible',
  }),
  overlay: RX.Styles.createViewStyle({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }),
  swipableButton: RX.Styles.createViewStyle({
    alignItems: 'center',
    justifyContent: 'center',
  }),
  thresholdContainer: RX.Styles.createViewStyle({
    position: 'absolute',
    [Styles.values.end]: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  })
}

interface SwipableListProps {
  style?: any
}

export const SwipableList = ({ style }: SwipableListProps) => {
  return (
    <RX.View
      style={[
        _styles.container,
        style,
      ]}
    >

    </RX.View>
  )
}

export interface SwipableButtonProps {
  label: JSX.Element,
  backgroundColor: string,
  onPress: () => void,

  style?: any,
}

const SwipableButton = ({ style, backgroundColor, onPress, label }: SwipableButtonProps) => {
  return (
    <RX.View
      onPress={onPress}
      style={[
        _styles.swipableButton,
        { backgroundColor },
        style,
      ]}
    >
      {label}
    </RX.View>
  )
}

interface SwipableItemThreshold {
  thresholdPercentage: number,
  onTrigger: () => void,
  element: (triggerable?: boolean) => JSX.Element,
}

interface SwipableItemProps extends RX.Types.GestureViewProps {
  style?: any,

  startButtons?: SwipableButtonProps[],
  endButtons?: SwipableButtonProps[],

  withoutGesture?: boolean,
  background?: string,

  threshold?: SwipableItemThreshold,
}

const BUTTON_WIDTH = 100

export const SwipableItem = forwardRef(({ style, startButtons = [], endButtons = [], withoutGesture = false, background, threshold, ...props }: SwipableItemProps, ref: Ref<any>) => {
  const theme = useTheme()
  const [dimensions, setDimensions] = useState<{ height: number, width: number } | undefined>()

  const [translatedXAnimationValue] = useState(RX.Animated.createValue(0))

  const [thresholdTriggerable, setThresholdTriggerable] = useState(false)

  const [thresholdContainerWidthAnimationValue] = useState(RX.Animated.createValue(0))
  const _thresholdContainerWidthAnimationStyle = useMemo(() => RX.Styles.createAnimatedViewStyle({
    width: thresholdContainerWidthAnimationValue,
  }), [])

  const [thresholdElementAnimationValue] = useState(RX.Animated.createValue(1))
  const _thresholdElementAnimationStyle = useMemo(() => RX.Styles.createAnimatedViewStyle({
    transform: [{
      scale: thresholdElementAnimationValue,
    }]
  }), [thresholdElementAnimationValue])

  const _lastLocation = useRef(0)
  const _animation = useRef<RX.Types.Animated.CompositeAnimation>()

  const backgroundColor = background || theme.colors.textInputBg

  /**
   * Styles
   * */
  const _overlayAnimationStyle = useMemo(() => RX.Styles.createAnimatedViewStyle({
    transform: [{
      translateX: translatedXAnimationValue,
    }]
  }), [translatedXAnimationValue])

  const _containerStyle = useMemo(() => RX.Styles.createViewStyle({
    backgroundColor,
  }, false), [backgroundColor])

  const _animate = useCallback((translatedXValue: number, thresholdContainerWidthValue: number, thresholdViewWidth: number, animated: boolean = true) => {
    if (_animation.current) {
      _animation.current.stop()
    }

    _animation.current = RX.Animated.parallel([
      RX.Animated.timing(translatedXAnimationValue, {
        toValue: translatedXValue,
        duration: animated ? undefined : 0,
      }),
      RX.Animated.timing(thresholdContainerWidthAnimationValue, {
        toValue: Math.abs(thresholdContainerWidthValue),
        duration: animated ? undefined : 0,
      }),
      RX.Animated.timing(thresholdElementAnimationValue, {
        toValue: scale(Math.abs(thresholdContainerWidthValue), 0, thresholdViewWidth, 1, 2),
        duration: animated ? undefined : 0,
      }),
    ])
    _animation.current.start()
  }, [])

  const _onPanHorizontal = useCallback((gestureState: RX.Types.PanGestureState) => {
    const width = dimensions ? dimensions.width : 0

    let d = _lastLocation.current + gestureState.clientX - gestureState.initialClientX

    if (!d) {
      d = +translatedXAnimationValue._getOutputValue()
    }

    d = AppConfig.isRTL() ? -d : d

    const isSwipingToStart = d > 0
    const totalButtonWidth = (isSwipingToStart ? startButtons.length : endButtons.length) * BUTTON_WIDTH

    const triggerable = threshold && Math.abs(d) > (width * threshold.thresholdPercentage / 100)

    if (startButtons.length === 0 && d > 0) {
      return
    }

    if (gestureState.isComplete) {
      /**
       * If a threshold was set
       * */
      if (triggerable) {
        threshold!.onTrigger()
        return _animate(-width * 2, width, width)
      }

      /**
       * If panned more than buttons width, stick to that size
       * */
      if (Math.abs(d) > totalButtonWidth) {
        const toValue = isSwipingToStart ? totalButtonWidth : -totalButtonWidth

        _lastLocation.current = toValue

        return _animate(toValue, 0, width)
      }

      /**
       * If didn't cross threshold or panned more than buttons width,
       * go back to start
       * */
      _lastLocation.current = 0
      return _animate(0, 0, width)
    }

    if (triggerable) {
      if (!thresholdTriggerable) {
        setThresholdTriggerable(true)
      }
    } else {
      if (thresholdTriggerable) {
        setThresholdTriggerable(false)
      }
    }

    const thresholdContainerWidth = Math.abs(d) > width ? width : d
    return _animate(AppConfig.isRTL() ? -d : d, thresholdContainerWidth, width, false)
  }, [dimensions, AppConfig.isRTL(), thresholdTriggerable])


  const _onLayout = useCallback(e => {
    if (!dimensions) {
      setDimensions({ height: e.height, width: e.width })
    }
  }, [!!dimensions])

  const _reset = useCallback((animated: boolean = false) => {
    _animate(0, 0, 350, animated)
  }, [])

  useImperativeHandle(ref, () => ({
    handleGesture: _onPanHorizontal,
    reset: _reset,
  }), [dimensions, AppConfig.isRTL(), thresholdTriggerable])

  const content = (
    <>
      <RX.View
        style={_styles.innerContainer}
      >
        {
          endButtons.map(button => (
            <SwipableButton
              {...button}
              style={[
                button.style,
                dimensions && {
                  height: dimensions.height,
                  width: BUTTON_WIDTH,
                }
              ]}
            />
          ))
        }
      </RX.View>

      {
        threshold && dimensions &&
        <RX.Animated.View
          style={[
            _styles.thresholdContainer,
            _thresholdContainerWidthAnimationStyle,
          ]}
        >
          <RX.Animated.View
            style={_thresholdElementAnimationStyle}
          >
            {threshold.element(thresholdTriggerable)}
          </RX.Animated.View>
        </RX.Animated.View>
      }

      <RX.Animated.View
        style={_overlayAnimationStyle}
      >
        <RX.View
          onLayout={_onLayout}
        >
          {props.children}
        </RX.View>
      </RX.Animated.View>
    </>
  )

  if (withoutGesture) {
    return (
      <RX.Animated.View
        style={[
          _styles.container,
          _containerStyle,
          style,
        ]}
      >
        {content}
      </RX.Animated.View>
    )
  }

  return (
    <RX.GestureView
      {...props}
      onPanHorizontal={_onPanHorizontal}
      preferredPan={PreferredPanGesture.Horizontal}
      panPixelThreshold={10}
      releaseOnRequest={true}
      // tabIndex={-1}
      style={[
        _styles.container,
        _containerStyle,
        style,
      ]}
    >
      {content}
    </RX.GestureView>
  )
})
