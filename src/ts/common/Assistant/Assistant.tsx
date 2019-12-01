/*
 * Assistant.tsx
 * Copyright: Ouranos Studio 2019
 */

import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import Image from '@Common/Image/Image'
import ImageSource from '@Modules/images'
import RX from 'reactxp'


function getRandomFromArray(array: any[]): any {
  return array[Math.floor(Math.random() * array.length)]
}

interface AssistantProps {
  style?: any,
  size: number,
  onPress?: () => any,
  onMouseOver?: () => any,
  onMouseLeave?: () => any,
  glowMode?: 'light' | 'dark'
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

  public render() {
    const { style, size } = this.props

    return (
      <RX.Image
        source={ImageSource.Logo}
        style={{
          width: size,
          height: size,
        }}
      />
    )

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            onPress={this.props.onPress}
            activeOpacity={1}
            onMouseOver={this.props.onMouseOver}
            onMouseLeave={this.props.onMouseLeave}
            style={[
              styles.container,
              style,
              {
                width: this.props.size * 2,
                height: this.props.size * 2,
                padding: -this.props.size * 2
              }
            ]}
          >
            {this._renderExtra()}
            <Image
              source={ImageSource.Assistant}
              style={{
                width: size,
                height: size,
              }}
            />
            {/*{this._renderMouth()}*/}
            {this._renderEyeLids(theme)}
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  // componentDidMount(): void {
  //   this._blink()
  //   this._glow(this._getGlowTime())
  // }

  private _renderExtra = () => {
    return (
      <RX.Animated.Image
        source={this.props.glowMode === 'dark' ? ImageSource.AssistantExtra : ImageSource.AssistantExtraWhite}
        style={[
          styles.extra,
          {
            height: this.props.size * 2,
            width: this.props.size * 2,
          },
          this._glowAnimationStyle
        ]}
      />
    )
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

  private _getGlowTime = () => {
    return getRandomFromArray([
      5000,
      5000,
      6000,
      7000,
      7000,
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
            this._glow(this._getGlowTime())
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

  private _renderEyeLids = (theme: Theme) => {
    if (!this.state.eyesClosed) return null

    const eyeLidSize = (this.props.size || 65) / 3

    return (
      <RX.View style={[styles.eyeContainer, { width: this.props.size }]}>
        <RX.View style={[styles.eyeLid, {
          width: eyeLidSize,
          height: eyeLidSize * 1.2,
          backgroundColor: theme.colors.assistantFaceColor,
        }]} />
        <RX.View style={[styles.eyeLid, {
          width: eyeLidSize,
          height: eyeLidSize * 1.2,
          backgroundColor: theme.colors.assistantFaceColor,
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
    paddingHorizontal: 10,
    paddingBottom: 5
  }),
  extra: RX.Styles.createImageStyle({
    position: 'absolute',
    top: 0,
  })
}
