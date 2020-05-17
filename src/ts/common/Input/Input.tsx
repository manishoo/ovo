/*
 * Input.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import Image from '@Common/Image/Image'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
import Text from '@Common/Text/Text'
import debounce from 'lodash/debounce'
import RX from 'reactxp'


export interface InputProps extends RX.Types.TextInputProps {
  style?: any,
  textInputStyle?: any,
  value?: string,
  onChange?: (value: string) => void,
  label?: string,
  inputRef?: any,
  autoGrow?: boolean,
  required?: boolean,

  validate?: (value: string) => boolean | Promise<boolean>,
  usesNetwork?: boolean,

  errorMessage?: string,
  loading?: boolean,

  selectAllOnPress?: boolean
}

interface InputState {
  isValid: boolean,
  isPristine: boolean
}

export default class Input extends RX.Component<InputProps, InputState> {
  constructor(props: InputProps & RX.Types.TextInputProps) {
    super(props)

    this.state = {
      isValid: props.required ? ((props.value || '').length > 0) : true,
      isPristine: true,
    }

    if (props.usesNetwork) {
      this._validateInput = debounce(this._validateInput, 500)
    }
  }

  private _textInputRef: any

  public render() {
    const {
      style,
      value,
      label,
      textInputStyle,
      inputRef,
      required,
      errorMessage,
      loading,
      selectAllOnPress,
      onChange,
      ...props
    } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[styles.container, style]}
            onPress={selectAllOnPress ? () => this._textInputRef.selectAll() : undefined}
          >
            {
              !!label &&
              <Text
                style={[
                  styles.label,
                  {
                    color: theme.colors.labelInput,
                    fontWeight: required ? 'bold' : undefined,
                  },
                  this._getLabelStyle(theme)
                ]}
              >{required && this._renderRequiredStart(theme)}{label}</Text>}
            <RX.TextInput
              ref={ref => {
                this._textInputRef = ref
                inputRef && inputRef(ref)
              }}
              value={value}
              onChangeText={this._onChangeText}
              style={[
                styles.textInput,
                { backgroundColor: theme.colors.textInputBg },
                textInputStyle,
                this._getInputStyle(theme)
              ]}
              {...props}
            />

            {
              this.props.clearButtonMode === 'while-editing' && value && value.length > 0 &&
              <RX.View
                onPress={loading ? undefined : this._onClearText}
                style={styles.clearContainer}
              >
                {
                  loading
                    ? <LoadingIndicator size={25} />
                    : <Image
                      source={Image.source.Clear}
                      style={styles.clear}
                    />
                }

              </RX.View>
            }

            {!!errorMessage &&
            <RX.Text
              style={[
                styles.label,
                styles.errorLabel,
                {
                  color: theme.colors.inputErrorColor
                }
              ]}
            >{errorMessage}</RX.Text>}
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _onClearText = (e: RX.Types.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()

    this.props.onChange!('')
  }

  private _renderRequiredStart = (theme: Theme) => {
    return (
      <Text style={{ color: theme.colors.red }}>*</Text>
    )
  }

  private _getInputStyle = (theme: Theme) => {
    if (!this.props.validate) return null

    if (this.props.errorMessage) {
      return {
        borderColor: theme.colors.inputInvalidColor,
      }
    }

    if (this.state.isPristine) {
      return null
    }

    if (this.state.isValid) {
      return {
        borderColor: theme.colors.inputValidColor,
      }
    }

    return {
      borderColor: theme.colors.inputInvalidColor,
    }
  }

  private _getLabelStyle = (theme: Theme): any => {
    if (!this.props.validate) return null

    if (this.state.isPristine || this.props.errorMessage) {
      return null
    }

    if (this.state.isValid) {
      return {
        color: theme.colors.inputValidColor,
      }
    }

    return {
      color: theme.colors.inputInvalidColor,
    }
  }

  private _onChangeText = async (v: string) => {
    if (this.props.validate) {
      if (this.state.isPristine) {
        this.setState({
          isPristine: false,
        })
      }
      await this._validateInput(v)
    }
    return this.props.onChange!(v)
  }

  private readonly _validateInput = async (v: any) => {
    if (this.props.validate) {
      const isValid = await this.props.validate(v)

      this.setState({ isValid })
    }
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    marginBottom: Styles.values.spacing,

    justifyContent: 'center',
    // borderBottomWidth: 2,
    // paddingBottom: 5,
  }),
  label: RX.Styles.createTextStyle({
    // fontWeight: '500',
    marginBottom: Styles.values.spacing / 2,
  }),
  textInput: RX.Styles.createTextInputStyle({
    padding: Styles.values.spacing / 2,
    borderRadius: Styles.values.normalBorderRadius,
    borderWidth: 1,
    borderColor: 'transparent',
    minWidth: 20,
  }),
  errorLabel: RX.Styles.createTextStyle({
    marginTop: Styles.values.spacing / 2,
  }),
  clear: RX.Styles.createImageStyle({
    width: 15,
    height: 15,
  }),
  clearContainer: RX.Styles.createViewStyle({
    position: 'absolute',
    [Styles.values.end]: 0,

    cursor: 'pointer',

    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  })
}
