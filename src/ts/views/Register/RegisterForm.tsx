/*
 * RegisterForm.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, useApolloClient, useMutation } from '@apollo/client'
import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import Checkbox from '@Common/Checkbox/Checkbox'
import FilledButton from '@Common/FilledButton/FilledButton'
import Input from '@Common/Input/Input'
import { translate } from '@Common/LocalizedText/LocalizedText'
import { Routes } from '@Models/common'
import { MeFragment, MeOperation } from '@Models/graphql/me/me'
import { navigate } from '@Utils'
import { RegisterMutation, RegisterMutationVariables } from '@Views/Register/types/RegisterMutation'
import RX from 'reactxp'
import validator from 'validator'
import UsernameInput from './components/UsernameInput'


const FORM_WIDTH = 270

interface RegisterFormProps {
  style?: any,
  onSubmit: (variables: RegisterMutationVariables) => void,
  maxWidth?: boolean,
}

export class RegisterForm extends RX.Component<RegisterFormProps> {
  state = {
    username: '',
    password: '',
    password2: '',
    email: '',
    gender: undefined,
    termsAccepted: false,
    usernameValid: false,
    emailValid: false,
  }

  public render() {
    const { style, maxWidth = false } = this.props

    return (
      <RX.View
        style={[styles.container, style]}
      >
        <RX.View style={maxWidth ? undefined : styles.inputContainer}>
          <Input
            value={this.state.email}
            onChange={this._onChange('email')}
            label={translate('Email')}
            autoCapitalize='none'
            validate={value => {
              const emailValid = validator.isEmail(value)

              this.setState({
                emailValid,
              })

              return emailValid
            }}
          />
          <UsernameInput
            value={this.state.username}
            onChange={this._onChange('username')}
            autoCapitalize='none'
            onValidChange={(usernameValid: boolean) => this.setState({ usernameValid })}
          />
          <Input
            value={this.state.password}
            onChange={this._onChange('password')}
            label={translate('Password')}
            validate={value => value.length >= 4}
            secureTextEntry
          />
          <Input
            value={this.state.password2}
            onChange={this._onChange('password2')}
            label={translate('passwordConfirmation')}
            validate={value => value === this.state.password}
            secureTextEntry
          />
          {/*<RX.Text style={[styles.ensureSafeAccountText, { color: theme.colors.mutedText }]}>{translate('ensureSafeAccount')}</RX.Text>*/}
          {/*{this.renderAcceptTerms(theme)}*/}

          <RX.View style={{ flexDirection: 'row' }}>
            <FilledButton
              label={translate('Register')}
              onPress={this._handleSubmit}
              disabled={!this._isValid()}
              containerStyle={styles.submitButton}
            />
          </RX.View>
        </RX.View>
      </RX.View>
    )
  }

  private _onChange = (fieldName: string) => (value: any) => {
    this.setState({
      [fieldName]: value,
    })
  }

  private _isValid = () => {
    return !!this.state.username &&
      !!this.state.usernameValid &&
      !!this.state.password &&
      !!this.state.password2 &&
      (this.state.password == this.state.password2) &&
      !!this.state.email &&
      this.state.emailValid
    // !!this.state.termsAccepted
  }

  private _handleSubmit = () => {
    if (!this._isValid()) return null

    return this.props.onSubmit({
      user: {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
      }
    })
  }

  // @ts-ignore
  private _renderAcceptTerms = (theme: Theme) => {
    return (
      <RX.View style={styles.termsContainer}>
        <Checkbox
          filledColor={theme.colors.checkboxFilled}
          onChange={this._onChange('termsAccepted')}
          value={this.state.termsAccepted}
          size={25}
        />
        <RX.Text style={[styles.termsText, { color: theme.colors.mutedText }]}>{translate('terms')}</RX.Text>
      </RX.View>
    )
  }
}

export default function (props: {}) {
  const client = useApolloClient()

  const [registerUser] = useMutation<RegisterMutation, RegisterMutationVariables>(gql`
    mutation RegisterMutation($user: UserRegistrationInput!) {
      registerUser(user: $user) {
        user {
          ...Me
        }
        session
      }
    }

    ${MeFragment}
  `, {
    fetchPolicy: 'no-cache',
    onCompleted: (data => {
      client.writeQuery({
        query: MeOperation,
        data: {
          me: data.registerUser.user,
        },
      })
    }),
  })

  return (
    <RegisterForm
      {...props}
      onSubmit={(variables: RegisterMutationVariables) => registerUser({ variables })
        .then(async ({ data }) => {
          if (!data) return
          /**
           * Register Success
           * */
          return navigate(props, Routes.calendar, {
            replace: true,
          })
        })}
    />
  )
}

const styles = {
  container: RX.Styles.createViewStyle({
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: Styles.values.spacing,
  }),
  inputContainer: RX.Styles.createViewStyle({
    width: FORM_WIDTH,
  }),
  submitButton: RX.Styles.createViewStyle({
    flex: 1,
  }),
  logo: RX.Styles.createImageStyle({
    width: 150,
    height: 50,
    marginBottom: Styles.values.spacing * 2
  }),
  termsContainer: RX.Styles.createViewStyle({
    flexDirection: 'row',
    marginTop: Styles.values.spacing * 2,
    alignItems: 'center',
  }),
  termsText: RX.Styles.createTextStyle({
    marginLeft: Styles.values.spacing / 2,
    fontSize: Styles.fontSizes.size12,
    wordBreak: 'break-word',
    width: 200,
  }),
  ensureSafeAccountText: RX.Styles.createTextStyle({
    fontSize: Styles.fontSizes.size12,
  })
}
