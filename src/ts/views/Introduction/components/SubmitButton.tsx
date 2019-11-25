/*
 * SubmitButton.tsx
 * Copyright: Ouranos Studio 2019
 */

import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import ImageSource from '@Modules/images'
import RX from 'reactxp'


interface SubmitButtonProps {
  style?: any,
  skip?: string,
  onSkip?: () => any,
  onPress: (e: any) => any,
  label?: string,
  disabled?: boolean,
}

export default class SubmitButton extends RX.Component<SubmitButtonProps> {
  public render() {
    const { style, onPress, skip, onSkip, disabled } = this.props

    if (skip) {
      return (
        <ThemeContext.Consumer>
          {({ theme }) => (
            <RX.View
              style={[styles.skipButton, { backgroundColor: theme.colors.white }, style]}
              activeOpacity={0.7}
              onPress={onSkip}
            >
              <RX.Text style={[styles.skipButtonText, { color: theme.colors.secondary }]}>{skip}</RX.Text>
            </RX.View>
          )}
        </ThemeContext.Consumer>
      )
    }

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[styles.sendButton, style, {
              cursor: disabled ? 'default' : 'pointer',
              borderColor: theme.colors.submitButtonBorderColor
            }]}
            activeOpacity={0.7}
            onPress={disabled ? undefined : onPress}
            disableTouchOpacityAnimation={disabled}
          >
            <RX.Image
              source={ImageSource.PaperPlane}
              style={[
                styles.image,
                {
                  opacity: disabled ? 0.7 : 1,
                }
              ]}
            />
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }
}

const styles = {
  sendButton: RX.Styles.createViewStyle({
    width: 45,
    height: 45,
    [Styles.values.marginStart]: Styles.values.spacing,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  skipButton: RX.Styles.createViewStyle({
    height: 45,
    borderRadius: 22.5,
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  skipButtonText: RX.Styles.createTextStyle({
    fontSize: 20,
  }),
  image: RX.Styles.createImageStyle({
    width: 24,
    height: 24,
    transform: [{ rotate: AppConfig.isRTL() ? '180deg' : '0deg' }],
  })
}
