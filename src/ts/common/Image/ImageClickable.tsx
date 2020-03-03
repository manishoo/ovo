/*
 * ImageClickable.tsx
 * Copyright: Ouranos Studio 2020
 */

import RX, { Types } from 'reactxp'


export interface ImageClickableProps extends Types.AnimatedImageProps {
  style?: any,
  width: number,
  height: number,
  onPress: () => void,
}

export default class ImageClickable extends RX.Component<ImageClickableProps> {
  private _previewScaleAnimatedValue = RX.Animated.createValue(1)
  private _previewAnimatedStyle = RX.Styles.createAnimatedViewStyle({
    transform: [{ scale: this._previewScaleAnimatedValue }]
  })

  render() {
    const { style, width, height, onPress, ...props } = this.props

    return (
      <RX.View
        onPress={onPress}
        onMouseEnter={this._onHoverStart}
        onMouseLeave={this._onHoverEnd}
        style={[
          styles.container,
          width,
          height,
        ]}
      >
        <RX.View
          style={[
            style,
            {
              width,
              height,
            }
          ]}
        >
          <RX.Animated.Image
            {...props}
            style={[
              {
                width,
                height,
              },
              this._previewAnimatedStyle,
            ]}
          />
        </RX.View>
      </RX.View>
    )
  }

  private _setUI = (isHovering: boolean) => {
    RX.Animated.timing(this._previewScaleAnimatedValue, {
      toValue: isHovering ? 1.1 : 1,
      duration: 500,
    }).start()
  }

  private _onHoverStart = () => {
    this._setUI(true)
  }

  private _onHoverEnd = () => {
    this._setUI(false)
  }
}

const styles = {
  container: RX.Styles.createViewStyle({}),
}
