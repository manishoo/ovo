/*
 * NewPasswordForm.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ExecutionResult, gql, useMutation } from '@apollo/client'
import Styles from '@App/Styles'
import FilledButton from '@Common/FilledButton/FilledButton'
import Input from '@Common/Input/Input'
import { translate } from '@Common/LocalizedText/LocalizedText'
import { Routes } from '@Models/common'
import ToastStore, { ToastTypes } from '@Services/ToastStore'
import { getQueryParam, navigate } from '@Utils'
import getGraphQLUserInputErrors from '@Utils/get-graphql-user-input-errors'
import { NewPasswordMutation, NewPasswordMutationVariables } from '@Views/NewPasswordScreen/types/NewPasswordMutation'
import RX from 'reactxp'


const FORM_WIDTH = 270

interface NewPasswordProps {
  style?: any,
  onNewPassword: (variables: NewPasswordMutationVariables) => Promise<ExecutionResult<NewPasswordMutation>>,
  fieldErrors: { [k: string]: string }
}

export class NewPasswordForm extends RX.Component<NewPasswordProps> {
  state = {
    password: '',
    passwordConfirmation: '',
  }
  private readonly _token?: string

  constructor(props: NewPasswordProps) {
    super(props)

    this._token = getQueryParam(props, 't')
  }

  public render() {
    const { style, fieldErrors } = this.props

    return (
      <RX.View
        style={[styles.container, style]}
      >
        <RX.View style={styles.inputContainer}>
          <Input
            value={this.state.password}
            onChange={this._onChange('password')}
            label={translate('Password')}
            errorMessage={fieldErrors['password']}
            autoCapitalize='none'
            required
            secureTextEntry
          />

          <Input
            value={this.state.passwordConfirmation}
            onChange={this._onChange('passwordConfirmation')}
            label={translate('passwordConfirmation')}
            errorMessage={fieldErrors['passwordConfirmation']}
            autoCapitalize='none'
            required
            secureTextEntry
          />

          <FilledButton
            label={translate('ChangePassword')}
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
    return !!this.state.password &&
      (this.state.password.length >= 4) &&
      (this.state.password === this.state.passwordConfirmation) &&
      !!this._token
  }

  private _handleSubmit = () => {
    if (!this._isValid()) return () => {
    }

    return this.props.onNewPassword({
      password: this.state.password,
      token: this._token!,
    })
      .then(async ({ data }) => {
        if (!data) return

        ToastStore.toast({
          message: 'Your password changed successfully',
          type: ToastTypes.Success,
        })
        return navigate(this.props, Routes.login, {
          replace: true,
        })
      })
  }
}

export default function (props: any) {
  const [NewPasswordUser, { error }] = useMutation<NewPasswordMutation, NewPasswordMutationVariables>(gql`
    mutation NewPasswordMutation($token: String!, $password: String!) {
      changePassword(token: $token, password: $password)
    }
  `)

  return (
    <NewPasswordForm
      {...props}
      fieldErrors={getGraphQLUserInputErrors(error)}
      onNewPassword={(variables: NewPasswordMutationVariables) => NewPasswordUser({ variables })}
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
