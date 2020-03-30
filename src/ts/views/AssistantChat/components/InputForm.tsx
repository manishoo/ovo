/*
 * InputForm.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import FilledButton from '@Common/FilledButton/FilledButton'
import Input from '@Common/Input/Input'
import { translate } from '@Common/LocalizedText/LocalizedText'
import { isEmailValid } from '@Utils'
import { DateTime } from 'luxon'
import RX from 'reactxp'


interface InputFormProps {
  style?: any,
  onSubmit: any
}

interface InputFormState {
  username: string
  email: string
  password: string
  passwordVerification: string

  [k: string]: string
}

export default class InputForm extends RX.Component<InputFormProps, InputFormState> {
  state = {
    username: '',
    email: '',
    password: '',
    passwordVerification: '',
  }

  onChange = (fieldName: string) => (value: string) => {
    this.setState({
      [fieldName]: value,
    })
  }

  handleSubmit = () => {
    const {
      username,
      email,
      password,
    } = this.state
    this.props.onSubmit({
      username: {
        title: 'Username',
        name: 'username',
        value: username,
      },
      email: {
        title: 'Email',
        name: 'email',
        value: email,
      },
      password: {
        title: 'Password',
        name: 'password',
        value: password,
      },
      timeZone: DateTime.local().zoneName,
    })
  }

  isValid = () => {
    const {
      username,
      email,
      password,
      passwordVerification,
    } = this.state

    let valid = true

    if (!username) valid = false
    if (!email) valid = false
    if (!isEmailValid(email)) valid = false
    if (!password) valid = false
    if (!passwordVerification) valid = false
    if (passwordVerification !== password) valid = false

    return valid
  }

  public render() {
    const { style } = this.props
    const {
      username,
      email,
      password,
      passwordVerification,
    } = this.state

    return (
      <RX.ScrollView
        style={[styles.container, style]}
        scrollEnabled={false}
      >
        <Input
          label={translate(translate.keys.Username)}
          autoCapitalize='none'
          value={username}
          onChange={this.onChange('username')}
        />
        <Input
          label={translate(translate.keys.Email)}
          autoCapitalize='none'
          keyboardType={'email-address'}
          value={email}
          onChange={this.onChange('email')}
        />
        <Input
          label={translate(translate.keys.Password)}
          secureTextEntry
          value={password}
          onChange={this.onChange('password')}
        />
        <Input
          label={translate(translate.keys.passwordConfirmation)}
          secureTextEntry
          value={passwordVerification}
          onChange={this.onChange('passwordVerification')}
        />
        <FilledButton
          label={translate(translate.keys.Send)}
          onPress={this.isValid() ? this.handleSubmit : () => {
          }}
          containerStyle={[
            styles.submitButton,
            {
              opacity: this.isValid() ? 1 : 0.7
            }
          ]}
        />
      </RX.ScrollView>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    padding: Styles.values.spacing,
  }),
  submitButton: RX.Styles.createViewStyle({
    marginTop: Styles.values.spacing,
  }),
}
