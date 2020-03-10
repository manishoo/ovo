/*
 * FlatButton.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import HoverButton from '@Common/HoverButton/HoverButton'
import Text from '@Common/Text/Text'
import { Translation } from '@Models/common'
import RX from 'reactxp'


interface FlatButtonProps {
  style?: any,
  label?: string,
  labelTranslations?: Translation[],
  onPress: (e: any) => any,
  labelStyle?: any,
  containerStyle?: any,
  borderless?: boolean,
}

export default class FlatButton extends RX.Component<FlatButtonProps> {
  public render() {
    const { style, containerStyle, label, labelTranslations, onPress, labelStyle, borderless } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <HoverButton
            style={containerStyle}
            onRenderChild={isHovering => (
              <RX.View
                style={[styles.container, {
                  borderWidth: borderless ? 0 : 1,
                  borderColor: theme.colors.flatButtonBorderColor,
                  backgroundColor: theme.colors.flatButtonBGColor
                }, style]}
                onPress={onPress}
                activeOpacity={0.7}
              >
                <Text style={[styles.text, {
                  color: theme.colors.flatButtonTextColor,
                  opacity: isHovering ? 0.7 : 1
                }, labelStyle]}
                      translations={labelTranslations}>{label}</Text>
                {this.props.children}
              </RX.View>
            )}
          />
        )}
      </ThemeContext.Consumer>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    borderRadius: 50,
    padding: Styles.values.spacing / 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // cursor: 'pointer'
  }),
  text: RX.Styles.createTextStyle({
    // fontSize: 18,
  })
}
