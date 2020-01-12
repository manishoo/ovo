/*
 * FilledButton.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import HoverButton from '@Common/HoverButton/HoverButton'
import RX from 'reactxp'


interface FilledButtonProps {
  style?: any,
  containerStyle?: any,
  label: any,
  onPress: (e: RX.Types.SyntheticEvent) => void,
  disabled?: boolean,
  fontSize?: number,
  mode?: ButtonMode,
  suffix?: any,
}

enum ButtonMode {
  primary = 'primary',
  success = 'success',
  default = 'default',
  danger = 'danger',
}

export default class FilledButton extends RX.Component<FilledButtonProps> {
  static defaultProps = {
    mode: ButtonMode.primary,
  }
  static mode = ButtonMode

  public render() {
    const { style, containerStyle, label, onPress, fontSize, disabled, suffix } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <HoverButton
            style={containerStyle}
            onRenderChild={isHovering => (
              <RX.View
                style={[
                  styles.container,
                  this._getStyle(theme).style,
                  isHovering && !disabled ? this._getStyle(theme).hoverStyle : undefined,
                  disabled ? { backgroundColor: theme.colors.filledButtonDisabledBG } : undefined,
                  style,
                ]}
                onPress={onPress}
                activeOpacity={0.7}
              >
                <RX.Text
                  style={[{
                    color: disabled ? theme.colors.filledButtonDisabledTextColor : theme.colors.filledButtonText,
                    font: Styles.fonts.displayBold,
                    fontSize: Styles.fontSizes.size14,
                  }, this._getStyle(theme).labelStyle, { fontSize }]}
                >{label}</RX.Text>
                {suffix}
              </RX.View>
            )}
          />
        )}
      </ThemeContext.Consumer>
    )
  }

  private _getStyle = (theme: Theme) => {
    let style = {}
    let hoverStyle = {}
    let labelStyle = {}

    if (this.props.mode === ButtonMode.default) {
      style = {
        ...style,
        borderWidth: 1,
        backgroundColor: theme.colors.filledButtonDefaultModeBG,
        borderColor: theme.colors.filledButtonDefaultModeBorder,
      }
      labelStyle = {
        ...labelStyle,
        color: theme.colors.filledButtonDefaultModeTextColor,
        fontWeight: 'bold',
      }
      hoverStyle = {
        ...hoverStyle,
        backgroundColor: theme.colors.filledButtonDefaultHoverBG,
      }
    }

    if (this.props.mode === ButtonMode.primary || this.props.mode === ButtonMode.danger) {
      style = {
        ...style,
        borderWidth: 1,
        borderBottomWidth: 3,
        borderColor: theme.colors.text,
        backgroundColor: this.props.mode === ButtonMode.primary ? theme.colors.filledButtonBG : theme.colors.red,
      }
      labelStyle = {
        ...labelStyle,
        fontWeight: 'bold',
      }
      hoverStyle = {
        ...hoverStyle,
        backgroundColor: this.props.mode === ButtonMode.primary ? theme.colors.filledButtonHoverBG : theme.colors.darkerRed,
      }
    }

    return { style, labelStyle, hoverStyle }
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    borderRadius: 100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // shadowColor: 'rgba(0, 0, 0, .2)',
    // shadowOffset: {
    //   height: 3,
    //   width: 0,
    // },
    // shadowRadius: 6,
    // margin: 10,
  }),
}
