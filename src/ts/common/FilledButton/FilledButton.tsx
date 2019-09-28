/*
 * FilledButton.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { Theme } from 'src/ts/app/Theme'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import HoverButton from 'src/ts/common/HoverButton/HoverButton'


interface FilledButtonProps {
  style?: any,
  containerStyle?: any,
  label: any,
  onPress: any,
  disabled?: boolean,
  fontSize?: number,
  mode?: ButtonMode
}

enum ButtonMode {
  primary = 'primary',
  default = 'default',
  danger = 'danger',
}

export default class FilledButton extends RX.Component<FilledButtonProps> {
  render() {
    const { style, containerStyle, label, onPress, fontSize, disabled } = this.props

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
                  isHovering && !disabled ? this._getStyle(theme).hoverStyle: undefined,
                  disabled ? { backgroundColor: theme.colors.filledButtonDisabledBG } : undefined,
                  style,
                ]}
                onPress={onPress}
                activeOpacity={0.7}
              >
                <RX.Text style={[{
                  color: disabled ? theme.colors.filledButtonDisabledTextColor : theme.colors.filledButtonText,
                  font: Styles.fonts.displayBold,
                  fontSize: Styles.fontSizes.size14,
                }, this._getStyle(theme).labelStyle, { fontSize }]}>{label}</RX.Text>
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
        borderColor: 'transparent',
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

  static defaultProps = {
    mode: ButtonMode.primary,
  }

  static mode = ButtonMode
}

const styles = {
  container: RX.Styles.createViewStyle({
    borderRadius: 100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: 'rgba(0, 0, 0, .2)',
    // shadowOffset: {
    //   height: 3,
    //   width: 0,
    // },
    // shadowRadius: 6,
    // margin: 10,
  }),
}
