/*
 * ItemControl.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import HoverView from '@Common/HoverView/HoverButton'
import Image from '@Common/Image/Image'
import Popup from '@Common/Popup/Popup'
import RX from 'reactxp'


interface ItemControlProps {
  style?: any,
  onRegenerate?: () => void,
  regenerating?: boolean,
  visible?: boolean
}

export default class ItemControl extends RX.Component<ItemControlProps> {
  private _ellipsisAnimationValue = RX.Animated.createValue(0)
  private _ellipsisAnimationStyle = RX.Styles.createAnimatedImageStyle({
    transform: [{
      rotate: this._ellipsisAnimationValue
    }]
  })
  private _loopAnimation: RX.Types.Animated.CompositeAnimation

  constructor(props: ItemControlProps) {
    super(props)

    this._loopAnimation = RX.Animated.timing(this._ellipsisAnimationValue, {
      toValue: 360,
      duration: 700,
      easing: RX.Animated.Easing.Linear(),
      loop: {
        restartFrom: 0,
      }
    })
  }

  public componentWillReceiveProps(nextProps: Readonly<ItemControlProps>, nextContext: any): void {
    if (nextProps.regenerating) {
      this._loopAnimation.start()
    } else {
      this._loopAnimation.stop()
    }
  }

  render() {
    const { style } = this.props

    return (
      <RX.View
        style={[
          styles.container,
          {
            opacity: this.props.visible ? 1 : 0,
          },
          style,
        ]}
      >
        <HoverView
          style={{ cursor: 'pointer' }}
          onPress={this.props.onRegenerate}
          onRenderChild={isHovering => (
            <RX.Animated.Image
              source={Image.source.Regenerate}
              style={[
                {
                  width: 25,
                  height: 20,
                  opacity: isHovering ? 1 : 0.3,
                  [Styles.values.marginEnd]: Styles.values.spacing / 2,
                },
                this._ellipsisAnimationStyle
              ]}
            />
          )}
        />
        {
          this.props.children &&
          <HoverView
            onRenderChild={isHovering => (
              <Popup
                anchor={
                  <Image
                    source={Image.source.Ellipsis}
                    style={{
                      width: 20,
                      height: 20,
                      opacity: isHovering ? 1 : 0.3,
                    }}
                  />
                }
              >
                {this.props.children}
              </Popup>
            )}
          />
        }
      </RX.View>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    flexDirection: 'row',
  }),
}
