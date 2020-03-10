/*
 * ForgotPasswordForm.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ExecutionResult, gql, useMutation } from '@apollo/client'
import Styles from '@App/Styles'
import FilledButton from '@Common/FilledButton/FilledButton'
import Input from '@Common/Input/Input'
import { translate } from '@Common/LocalizedText/LocalizedText'
import ToastStore, { ToastTypes } from '@Services/ToastStore'
import getGraphQLUserInputErrors from '@Utils/get-graphql-user-input-errors'
import {
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
} from '@Views/ForgotPasswordScreen/types/ForgotPasswordMutation'
import RX from 'reactxp'
import validator from 'validator'


const FORM_WIDTH = 270

interface ForgotPasswordProps {
  style?: any,
  onForgotPassword: (variables: ForgotPasswordMutationVariables) => Promise<ExecutionResult<ForgotPasswordMutation>>,
  fieldErrors: { [k: string]: string }
}

export class ForgotPasswordForm extends RX.Component<ForgotPasswordProps> {
  state = {
    email: '',
  }

  public render() {
    const { style, fieldErrors } = this.props

    return (
      <RX.View
        style={[styles.container, style]}
      >
        <RX.View style={styles.inputContainer}>
          <Input
            value={this.state.email}
            onChange={this._onChange('email')}
            label={translate('Email')}
            errorMessage={fieldErrors['email']}
            autoCapitalize='none'
            required
            keyboardType={'email-address'}
          />

          <FilledButton
            label={translate('forgotPassword')}
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
    return validator.isEmail(this.state.email)
  }

  private _handleSubmit = () => {
    if (!this._isValid()) return () => {
    }

    return this.props.onForgotPassword({
      email: this.state.email,
    })
      .then(async ({ data }) => {
        if (!data) return

        ToastStore.toast({
          message: 'An email will be sent to this email address if it exists in our database',
          type: ToastTypes.Success,
        })
      })
  }
}

export default function (props: any) {
  const [ForgotPasswordUser, { error }] = useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(gql`
    mutation ForgotPasswordMutation($email: String!) {
      requestRecoverPassword(email: $email)
    }
  `)

  return (
    <ForgotPasswordForm
      {...props}
      fieldErrors={getGraphQLUserInputErrors(error)}
      onForgotPassword={(variables: ForgotPasswordMutationVariables) => ForgotPasswordUser({ variables })}
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
