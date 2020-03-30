/*
 * Assistant.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Image from '@Common/Image/Image'
import ImageSource from '@Modules/images'
import { AssistantMessage } from '@Views/AssistantChat/components/ChatBox'
import RX from 'reactxp'


const POPUP_ID = 'AssistantMessage'

function getRandomFromArray(array: any[]): any {
  return array[Math.floor(Math.random() * array.length)]
}

interface AssistantProps {
  style?: any,
  size: number,
  playful?: boolean,
}

interface AssistantState {
  eyesClosed: boolean,
  mouthBorderBottom: number,
  mouthOpen: boolean,
}

export default class Assistant extends RX.Component<AssistantProps, AssistantState> {
  state = {
    eyesClosed: false,
    mouthBorderBottom: 2,
    mouthOpen: true
  }
  private _glowScaleAnimationValue = RX.Animated.createValue(0.8)
  private _glowAnimationStyle = RX.Styles.createAnimatedViewStyle({
    transform: [
      { scale: this._glowScaleAnimationValue }
    ]
  })
  private _containerTranslateXAnimationValue = RX.Animated.createValue(0)
  private _containerTranslateYAnimationValue = RX.Animated.createValue(0)
  private _containerRotateAnimationValue = RX.Animated.createValue(0)
  private _containerAnimationStyle = RX.Styles.createAnimatedViewStyle({
    transform: [
      { translateX: this._containerTranslateXAnimationValue },
      { translateY: this._containerTranslateYAnimationValue },
      { rotate: this._containerRotateAnimationValue },
    ]
  })
  private _rollingTimer?: number
  private _jumpingTimer?: number
  private _containerRef: any
  private _lastRollDirection: boolean = true

  public render() {
    const { style, size } = this.props

    return (
      <RX.Animated.View
        ref={ref => this._containerRef = ref}
        style={this._containerAnimationStyle}
        onPress={this._onPress}
      >
        <Image
          source={ImageSource.Logo}
          style={{
            width: size,
            height: size,
          }}
          resizeMode={'cover'}
        />
        {this._renderEyeLids()}
      </RX.Animated.View>
    )
  }

  componentDidMount(): void {
    this._blink()

    if (this.props.playful) {
      this._rollingTimer = setTimeout(this._roll, this._getRollTime())
    }
  }

  public say = (msg: string) => {
    clearTimeout(this._rollingTimer)
    this._showPopup(msg)
    setTimeout(this._jump(), 1000)
  }

  private _onPress = () => {
    RX.Popup.dismissAll()
  }

  private _showPopup = (message: string) => {
    let popupOptions: RX.Types.PopupOptions = {
      getAnchor: () => {
        return this._containerRef
      },
      renderPopup: (anchorPosition: RX.Types.PopupPosition, anchorOffset: number, popupWidth: number, popupHeight: number) => {
        return (
          <AssistantMessage
            text={message}
          />
        )
      },
      positionPriorities: ['top'],
      useInnerPositioning: false,
      dismissIfShown: true,
      cacheable: true,
      onDismiss: () => null
    }

    RX.Popup.show(popupOptions, POPUP_ID)
  }

  private _jump = () => {
    RX.Animated.sequence([
      RX.Animated.timing(this._containerTranslateYAnimationValue, {
        toValue: -10,
        duration: 250,
        easing: RX.Animated.Easing.Out()
      }),
      RX.Animated.timing(this._containerTranslateYAnimationValue, {
        toValue: 0,
        duration: 350,
        easing: RX.Animated.Easing.InBack()
      }),
      RX.Animated.timing(this._containerTranslateYAnimationValue, {
        toValue: -15,
        duration: 350,
        easing: RX.Animated.Easing.Out()
      }),
      RX.Animated.timing(this._containerTranslateYAnimationValue, {
        toValue: 0,
        duration: 350,
        easing: RX.Animated.Easing.In()
      })
    ])
      .start(() => {
        this._jumpingTimer = setTimeout(this._jump, this._getRollTime())
      })
  }

  private _roll = () => {
    const roll = (right: boolean) => RX.Animated.parallel([
      RX.Animated.timing(this._containerTranslateXAnimationValue, {
        toValue: right ? 10 : -10,
        duration: 1000,
      }),
      RX.Animated.timing(this._containerRotateAnimationValue, {
        toValue: right ? 35 : -35,
        duration: 1000,
      }),
    ])

    return new Promise(resolve => {
      RX.Animated.sequence([
        roll(!!this._lastRollDirection),
        roll(!this._lastRollDirection),
        RX.Animated.parallel([
          RX.Animated.timing(this._containerTranslateXAnimationValue, {
            toValue: 0,
            easing: RX.Animated.Easing.Out(),
          }),
          RX.Animated.timing(this._containerRotateAnimationValue, {
            toValue: 0,
            easing: RX.Animated.Easing.Out(),
          }),
        ])
      ])
        .start(() => {
          this._lastRollDirection = !this._lastRollDirection

          this._rollingTimer = setTimeout(this._roll, this._getRollTime())
        })
    })
  }

  private _getBlinkTime = () => {
    return getRandomFromArray([
      500,
      2000,
      2000,
      3000,
      5000,
      5000,
      200,
    ])
  }

  private _getRollTime = () => {
    return getRandomFromArray([
      7000,
      7000,
      9000,
      12000,
      12000,
    ])
  }

  private _glow = (duration: number) => {
    RX.Animated.timing(this._glowScaleAnimationValue, {
      toValue: 0.9,
      duration: duration / 2,
    })
      .start(() => {
        RX.Animated.timing(this._glowScaleAnimationValue, {
          toValue: 0.8,
          duration: duration / 2,
        })
          .start(() => {
            this._glow(this._getRollTime())
          })
      })
  }

  private _blink = () => {
    this.setState({ eyesClosed: true }, () => {
      setTimeout(() => {
        this.setState({ eyesClosed: false }, () => {
          setTimeout(this._blink, this._getBlinkTime())
        })
      }, 25)
    })
  }

  private _renderEyeLids = () => {
    if (!this.state.eyesClosed) return null

    const eyeLidSize = (this.props.size || 65) / 2.5

    return (
      <RX.View style={[styles.eyeContainer, { width: this.props.size, top: 20 }]}>
        <RX.View style={[styles.eyeLid, {
          width: eyeLidSize * 0.9,
          height: eyeLidSize,
          backgroundColor: '#FFDE34',
        }]} />
        <RX.View style={[styles.eyeLid, {
          width: eyeLidSize * 0.9,
          height: eyeLidSize,
          backgroundColor: '#FFDE34',
        }]} />
      </RX.View>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    justifyContent: 'center',
    alignItems: 'center',
  }),
  eyeLid: RX.Styles.createViewStyle({
    borderRadius: 40,
  }),
  eyeContainer: RX.Styles.createViewStyle({
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingBottom: 5
  }),
  extra: RX.Styles.createImageStyle({
    position: 'absolute',
    top: 0,
  })
}
