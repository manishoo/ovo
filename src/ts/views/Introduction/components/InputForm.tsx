/*
 * InputForm.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import Input from 'common/Input'
import FilledButton from 'common/FilledButton'
import moment from 'moment-timezone'
import {isEmailValid} from '../../../utilities'


interface InputFormProps {
	style?: any,
	onSubmit: any
}

interface InputFormState {
	[k: string]: string
	username: string
	email: string
	password: string
	passwordVerification: string
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
			timeZone: moment.tz.guess(),
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

	render() {
		const {style} = this.props
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
					label='Your username'
					autoCapitalize='none'
					value={username}
					onChange={this.onChange('username')}
				/>
				<Input
					label='Your email'
					autoCapitalize='none'
					keyboardType={'email-address'}
					value={email}
					onChange={this.onChange('email')}
				/>
				<Input
					label='Password'
					secureTextEntry
					value={password}
					onChange={this.onChange('password')}
				/>
				<Input
					label='Password Verification'
					secureTextEntry
					value={passwordVerification}
					onChange={this.onChange('passwordVerification')}
				/>
				<FilledButton
					label='Send'
					onPress={this.isValid() ? this.handleSubmit : () => {}}
					containerStyle={[
						styles.submitButton,
						{
							opacity: this.isValid() ? 1: 0.7
						}
					]}
				/>
			</RX.ScrollView>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		padding: 32,
	}),
	submitButton: RX.Styles.createViewStyle({
		marginTop: 16,
	}),
}
