/*
 * LoginFormForm.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useMutation } from '@apollo/react-hooks'
import FilledButton from 'common/FilledButton/FilledButton'
import Input from 'common/Input/Input'
import { translate } from 'common/LocalizedText/LocalizedText'
import gql from 'graphql-tag'
import { ExecutionResult } from 'react-apollo'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import UserStore from '@Services/UserStore'
import { navigate } from 'src/ts/utilities'
import getGraphQLUserInputErrors from 'src/ts/utilities/get-graphql-user-input-errors'
import { LoginMutation, LoginMutationVariables } from 'src/ts/views/Login/types/LoginMutation'
import { RegisterForm } from 'src/ts/views/Register/RegisterForm'


const FORM_WIDTH = 270

interface LoginProps {
  style?: any,
  onLogin: (variables: LoginMutationVariables) => Promise<ExecutionResult<LoginMutation>>,
  fieldErrors: { [k: string]: string }
}

export class LoginForm extends RX.Component<LoginProps> {
  state = {
    username: '',
    password: '',
  }

  public render() {
    const { style, fieldErrors } = this.props

    return (
      <RX.View
        style={[styles.container, style]}
      >
        <RX.View style={styles.inputContainer}>
          <Input
            value={this.state.username}
            onChange={this._onChange('username')}
            label={translate('Username')}
            errorMessage={fieldErrors['username']}
            autoCapitalize='none'
          />
          <Input
            value={this.state.password}
            onChange={this._onChange('password')}
            label={translate('Password')}
            errorMessage={fieldErrors['password']}
            secureTextEntry
          />

          <FilledButton
            label={translate('Login')}
            onPress={this._handleSubmit}
            disabled={!this._isValid()}
            containerStyle={styles.submitButton}
          />
        </RX.View>
      </RX.View>
    )
  }

  private _onChange = (fieldName: string) => (value: string) => {
    this.setState({
      [fieldName]: value,
    })
  }

  private _isValid = () => {
    return !!this.state.username && !!this.state.password
  }

  private _handleSubmit = () => {
    if (!this._isValid()) return () => {
    }

    return this.props.onLogin({
      username: this.state.username,
      password: this.state.password,
    })
      .then(async ({ data }) => {
        if (!data) return

        /**
         * LoginForm Success
         * */
        UserStore.setUser(data.loginUser.user)
        UserStore.setSession(data.loginUser.session)
        return navigate(this.props, `/${data.loginUser.user.username}`, {
          replace: true,
        })
      })
  }
}

export default function (props: any) {
  const [loginUser, { error }] = useMutation<LoginMutation, LoginMutationVariables>(gql`
    mutation LoginMutation($username: String!, $password: String!) {
      loginUser(username: $username, password: $password) {
        user {
          ...Me
        }
        session
      }
    }

    ${RegisterForm.fragments.me}
  `)

  return (
    <LoginForm
      {...props}
      fieldErrors={getGraphQLUserInputErrors(error)}
      onLogin={(variables: LoginMutationVariables) => loginUser({ variables })}
    />
  )
}

const styles = {
  container: RX.Styles.createViewStyle({
    justifyContent: 'center',
    alignItems: 'center',
    padding: Styles.values.spacing,
  }),
  inputContainer: RX.Styles.createViewStyle({
    width: FORM_WIDTH,
  }),
  textInput: RX.Styles.createTextInputStyle({
    //
  }),
  submitButton: RX.Styles.createViewStyle({
    marginTop: Styles.values.spacing
  }),
  logo: RX.Styles.createImageStyle({
    width: 150,
    height: 50,
    marginBottom: Styles.values.spacing * 2
  })
}
