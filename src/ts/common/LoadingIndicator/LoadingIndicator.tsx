/*
 * LoadingIndicator.tsx
 * Copyright: Ouranos Studio 2019
 */

import Image from '@Common/Image/Image'
import RX from 'reactxp'


const DEFAULT_SIZE = 50

interface LoadingIndicatorProps {
  style?: any,
  size?: number,
}

export default class LoadingIndicator extends RX.Component<LoadingIndicatorProps> {
  private _ellipsisAnimationValue = RX.Animated.createValue(0)
  private _opacityAnimationValue = RX.Animated.createValue(0)
  private _ellipsisAnimationStyle = RX.Styles.createAnimatedImageStyle({
    opacity: this._opacityAnimationValue,
    transform: [{
      rotate: this._ellipsisAnimationValue
    }]
  })
  private _loopAnimation: RX.Types.Animated.CompositeAnimation
  private _opacityAnimation: RX.Types.Animated.CompositeAnimation

  constructor(props) {
    super(props)

    this._loopAnimation = RX.Animated.timing(this._ellipsisAnimationValue, {
      toValue: 360,
      duration: 700,
      easing: RX.Animated.Easing.Linear(),
      loop: {
        restartFrom: 0,
      }
    })
    this._opacityAnimation = RX.Animated.timing(this._opacityAnimationValue, {
      toValue: 1,
      duration: 700,
    })
  }

  componentDidMount() {
    // this._loopAnimation.start()
    this._opacityAnimation.start()
  }

  render() {
    const { style } = this.props

    return (
      <Image
        source={Image.source.GooeyRingSpinner}
        style={[
          styles.container,
          {
            width: this.props.size || DEFAULT_SIZE,
            height: this.props.size || DEFAULT_SIZE,
          },
          style,
          this._ellipsisAnimationStyle,
        ]}
      />
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    //
  }),
}
