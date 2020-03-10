/*
 * LoginForm.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ExecutionResult, gql, useMutation } from '@apollo/client'
import Styles from '@App/Styles'
import FilledButton from '@Common/FilledButton/FilledButton'
import Input from '@Common/Input/Input'
import { translate } from '@Common/LocalizedText/LocalizedText'
import UserService from '@Services/UserService'
import UserStore from '@Services/UserService'
import { navigate } from '@Utils'
import getGraphQLUserInputErrors from '@Utils/get-graphql-user-input-errors'
import { LoginMutation, LoginMutationVariables } from '@Views/Login/types/LoginMutation'
import RX from 'reactxp'


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
      .then(async ({ data }: any) => {
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

    ${UserService.fragments.me}
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
