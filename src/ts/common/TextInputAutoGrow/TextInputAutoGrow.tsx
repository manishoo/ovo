/*
 * TextInputAutoGrow.tsx
 * Copyright: Ouranos Studio 2019
 */

import Text from 'common/Text/Text'
import RX from 'reactxp'
import AppConfig from 'src/ts/app/AppConfig'
import Styles from 'src/ts/app/Styles'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { Translation } from 'src/ts/models/common'


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

  render() {
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
                this.setState({ height: e.height + 28 })
              }}
            >
              <Text style={styles.text} translations={this.props.translations}>{value}</Text>
            </RX.View>
            {
              <RX.TextInput
                value={this._getValue()}
                multiline
                onChangeText={this._onChange}
                style={[{ height: this.state.height, minHeight: 56, backgroundColor: 'transparent' }, style]}
                {...props}
              />
            }
          </RX.View>
        ]}
      </ThemeContext.Consumer>
    )
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
