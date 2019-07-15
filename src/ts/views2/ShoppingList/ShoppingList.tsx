/*
 * ShoppingList.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import {getLocalizedText} from 'common/LocalizedText'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'
import Navbar from 'common/Navbar/Navbar'
import theme from 'src/ts/app/Theme'
import {navigate} from 'src/ts/utilities'

const FORM_WIDTH = 270

interface LoginProps {
	style?: any,
}

export default class ShoppingList extends RX.Component<LoginProps> {
	state = {
		username: '',
		password: '',
	}

	onChange = (fieldName: string) => (value: string) => {
		this.setState({
			[fieldName]: value,
		})
	}

	isValid = () => {
		return !!this.state.username && !!this.state.password
	}

	handleSubmit = (mutate: any) => () => {
		if (!this.isValid()) return () => {}

		return mutate()
			.then(async ({data: {login}}: {data: {login: any}}) => {
				/**
				 * Login Success
				 * */
				await RX.Storage.setItem('token', login.session)
				return navigate(this.props, 'App', {
					replace: true,
				})
			})
	}

	render() {
		const {style} = this.props

		return (
      <Mutation
        variables={{
					username: this.state.username,
					password: this.state.password,
				}}
        mutation={gql`
						mutation Login($username: String!, $password: String!) {
						  login(username: $username, password: $password) {
						    username
						    session
						  }
						}
					`}
      >
				{(mutate) => (
					<RX.View
						style={[styles.container, style]}
					>
						<Navbar title={getLocalizedText('ShoppingList')}/>
						{/*<RX.View style={styles.inputContainer}>
							<Input
								value={this.state.username}
								onChange={this.onChange('username')}
								label={getLocalizedText('Username')}
								autoCapitalize='none'
							/>
							<Input
								value={this.state.password}
								onChange={this.onChange('password')}
								label={getLocalizedText('Password')}
								secureTextEntry
							/>

							<FilledButton
								label={getLocalizedText('Login')}
								onPress={this.handleSubmit(mutate)}
								style={[
									styles.submitButton,
									{
										opacity: this.isValid() ? 1: 0.7
									}
								]}
							/>
						</RX.View>*/}
					</RX.View>
				)}
      </Mutation>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	}),
	inputContainer: RX.Styles.createViewStyle({
		width: FORM_WIDTH,
	}),
	textInput: RX.Styles.createTextInputStyle({
		//
	}),
	submitButton: RX.Styles.createViewStyle({
		marginTop: theme.styles.spacing * 2
	})
}
