/*
 * TextInputAutoGrow.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import Text from '@Common/Text/Text'
import { Translation } from '@Models/common'
import RX from 'reactxp'


interface TextInputAutoGrowProps extends RX.Types.TextInputProps {
  style?: any,
  label?: string,
  wrapperStyle?: any,
  translations?: Translation[],
  onTranslationsChange?: (translations: Translation[]) => void,
}

export default class TextInputAutoGrow extends RX.Component<TextInputAutoGrowProps> {
  state = {
    height: undefined,
  }

  public render() {
    const { wrapperStyle, style, value, ...props } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => [
          !!this.props.label &&
          <RX.Text style={[styles.label, { color: theme.colors.labelInput }]}>{this.props.label}</RX.Text>,
          <RX.View style={[styles.wrapper, { backgroundColor: theme.colors.textInputBg }, wrapperStyle]}>
            <RX.View
              ignorePointerEvents
              style={{ position: 'absolute' }}
              onLayout={e => {
                this.setState({ height: e.height })
              }}
            >
              <Text style={styles.text} translations={this.props.translations}>{value}</Text>
            </RX.View>
            {
              <RX.TextInput
                value={this._getValue()}
                multiline
                onChangeText={this._onChange}
                style={[{ height: this.state.height, minHeight: 22, backgroundColor: 'transparent' }, style]}
                {...props}
              />
            }
          </RX.View>
        ]}
      </ThemeContext.Consumer>
    )
  }

  private _getValue = () => {
    if (this.props.translations && this.props.translations.length > 0) {
      return this.props.translations[0].text
    }

    return this.props.value
  }

  private _onChange = (value: string) => {
    if (this.props.value) {
      return this.props.onChangeText!(value)
    }

    if (this.props.translations) {
      this.props.onTranslationsChange!([
        {
          text: value,
          locale: AppConfig.locale
        }
      ])
    }
  }
}

const styles = {
  wrapper: RX.Styles.createViewStyle({
    borderRadius: 8,
    padding: Styles.values.spacing / 2,
    marginBottom: Styles.values.spacing,
  }),
  textInput: RX.Styles.createViewStyle({
    //
  }),
  text: RX.Styles.createTextStyle({
    color: 'transparent',
  }),
  label: RX.Styles.createTextStyle({
    fontWeight: '500',
    marginBottom: Styles.values.spacing / 2,
  }),
}
