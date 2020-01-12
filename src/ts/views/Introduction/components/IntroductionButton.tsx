/*
 * IntroductionButton.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import LocalizedText from '@Common/LocalizedText/LocalizedText'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import RX from 'reactxp'


interface IntroductionButtonProps {
  style?: any,
  introductionWidth?: number,
  onIntroduction: () => {},
}

export default class IntroductionButton extends RX.Component<IntroductionButtonProps, { large: boolean }> {
  private _widthAnimated: any
  private _marginTopAnimated: any
  private _borderRadiusAnimated: any

  constructor(props: IntroductionButtonProps) {
    super(props)

    this.state = {
      large: true,
    }
    this._widthAnimated = RX.Animated.createValue(props.introductionWidth ? (props.introductionWidth - 20) : (ResponsiveWidthStore.getWidthNoSubscription() - 20))
    this._marginTopAnimated = RX.Animated.createValue(168)
    this._borderRadiusAnimated = RX.Animated.createValue(20)
  }

  shrink = () => {
    RX.Animated.parallel([
      RX.Animated.timing(this._widthAnimated, {
        toValue: 150,
        duration: 300,
        // easing: RX.Animated.Easing.In()
      }),
      RX.Animated.timing(this._marginTopAnimated, {
        toValue: 0,
        duration: 300,
        // easing: RX.Animated.Easing.In()
      }),
      RX.Animated.timing(this._borderRadiusAnimated, {
        toValue: 5,
        duration: 300,
        // easing: RX.Animated.Easing.In()
      }),
    ]).start(() => {
      this.props.onIntroduction()
      this.setState({
        large: false,
      })
    })
  }

  public render() {
    const { style } = this.props
    const { large } = this.state

    return (
      [
        <RX.Animated.View
          style={[
            {
              width: 1,
              height: this._marginTopAnimated,
            }
          ]}
        />,
        <RX.View style={{
          flexDirection: 'row',
          cursor: large ? 'pointer' : 'default',
        }}>
          <ThemeContext.Consumer>
            {({ theme }) => (
              <RX.Animated.View
                onPress={large ? this.shrink : () => null}
                activeOpacity={large ? 0.7 : 1}
                style={[
                  styles.baseMessage,
                  { width: this._widthAnimated },
                  { backgroundColor: theme.colors.assistantUserMessageBG },
                  style,
                  large ? {} : { [Styles.values.borderBottomStartRadius]: 5 }
                ]}
              >
                <RX.Text
                  style={{
                    color: theme.colors.assistantUserMessageTextColor,
                    flex: 1,
                    textAlign: 'center',
                    fontSize: large ? Styles.fontSizes.size16 : Styles.fontSizes.size14,
                    font: large ? Styles.fonts.displayBold : Styles.fonts.displayRegular,
                  }}
                ><LocalizedText>hiAssistant</LocalizedText></RX.Text>
              </RX.Animated.View>
            )}
          </ThemeContext.Consumer>
        </RX.View>
      ]
    )
  }
}

const styles = {
  baseMessage: RX.Styles.createViewStyle({
    padding: 15,
    justifyContent: 'center',
    minHeight: 30,
    borderRadius: 25,
    margin: 5,
    [Styles.values.marginStart]: 10,
  }),
}
