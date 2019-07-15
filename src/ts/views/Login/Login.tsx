/*
 * Login.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import Input from 'common/Input'
import {getLocalizedText} from 'common/LocalizedText'
import FilledButton from 'common/FilledButton'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'
import Navbar from 'common/Navbar/Navbar'
import theme from 'src/ts/app/Theme'
import {navigate} from 'src/ts/utilities'
import {Routes} from 'src/ts/navigator/routes'
import ImageSource from 'modules/images'
import UserStore from 'src/ts/stores/UserStore'
import {User} from 'src/ts/models/FoodModels'
import {SelfUserFragment} from 'src/ts/models/GraphQLModels'

const FORM_WIDTH = 270

interface LoginProps {
	style?: any,
}


export default class Login extends RX.Component<LoginProps> {
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
			.then(async ({data: {login}}: {data: {login: User}}) => {
				/**
				 * Login Success
				 * */
				UserStore.setUser(login)
				return navigate(this.props, Routes.home, {
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
						  login(username: $username, password: $password) ${SelfUserFragment}
						}
					`}
      >
				{(mutate) => (
					<RX.View
						style={[styles.container, style]}
					>
						<Navbar />
						<RX.Image
							source={ImageSource.OvocadoTypo}
							style={styles.logo}
						/>
						<RX.View style={styles.inputContainer}>
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
								disabled={!this.isValid()}
								containerStyle={styles.submitButton}
							/>
						</RX.View>
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
	}),
	logo: RX.Styles.createImageStyle({
		width: 150,
		height: 50,
		marginBottom: theme.styles.spacing * 2
	})
}
