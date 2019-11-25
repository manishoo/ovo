/*
 * FlatButton.tsx
 * Copyright: Ouranos Studio 2019
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
  onPress: any,
  labelStyle?: any,
  containerStyle?: any,
}

export default class FlatButton extends RX.Component<FlatButtonProps> {
  public render() {
    const { style, containerStyle, label, labelTranslations, onPress, labelStyle } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <HoverButton
            style={containerStyle}
            onRenderChild={isHovering => (
              <RX.View
                style={[styles.container, {
                  borderColor: theme.colors.flatButtonBorderColor,
                  backgroundColor: theme.colors.flatButtonBGColor
                }, style]}
                onPress={onPress}
                activeOpacity={0.7}
              >
                <Text style={[styles.text, { color: theme.colors.flatButtonTextColor }, labelStyle]}
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
    borderWidth: 1,
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
