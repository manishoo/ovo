/*
 * AssistantChatButton.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import LocalizedText from '@Common/LocalizedText/LocalizedText'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
// @ts-ignore FIXME
import pSBC from '@Utils/pSBC'
import RX from 'reactxp'


interface AssistantChatButtonProps {
  style?: any,
  introductionWidth?: number,
  onAssistantChat: () => void,
  spacing: number,
}

export default class AssistantChatButton extends RX.Component<AssistantChatButtonProps, { large: boolean }> {
  private _widthAnimated: any
  private _marginTopAnimated: any
  private _borderRadiusAnimated: any

  constructor(props: AssistantChatButtonProps) {
    super(props)

    this.state = {
      large: true,
    }
    this._widthAnimated = RX.Animated.createValue(props.introductionWidth ? props.introductionWidth : (ResponsiveWidthStore.getWidthNoSubscription() - 20))
    this._marginTopAnimated = RX.Animated.createValue(props.spacing)
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
      this.props.onAssistantChat()
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
          flexDirection: 'row-reverse',
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
                  {
                    backgroundColor: theme.colors.assistantUserMessageBG,
                    borderWidth: 2,
                    borderColor: pSBC(-0.5, theme.colors.assistantUserMessageBG)
                  },
                  style,
                  large ? {} : { [Styles.values.borderBottomEndRadius]: 5 }
                ]}
              >
                <RX.Text
                  style={{
                    color: theme.colors.assistantUserMessageTextColor,
                    flex: 1,
                    textAlign: large ? 'center' : undefined,
                    fontSize: large ? Styles.fontSizes.size16 : Styles.fontSizes.size14,
                    fontWeight: large ? 'bold' : '400',
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
