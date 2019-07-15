/*
 * Register.tsx
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
import {isEmailValid, navigate} from 'src/ts/utilities'
import {Routes} from 'src/ts/navigator/routes'
import ImageSource from 'modules/images'
import Checkbox from 'src/ts/controls/Checkbox'
import moment from 'moment-timezone'
import UserStore from 'src/ts/stores/UserStore'
import {User} from 'src/ts/models/FoodModels'
import {SelfUserFragment} from 'src/ts/models/GraphQLModels'


const FORM_WIDTH = 270

interface RegisterProps {
	style?: any,
}


export default class Register extends RX.Component<RegisterProps> {
	state = {
		username: '',
		password: '',
		password2: '',
		email: '',
		gender: undefined,
		termsAccepted: false,
	}

	onChange = (fieldName: string) => (value: any) => {
		this.setState({
			[fieldName]: value,
		})
	}

	isValid = () => {
		return !!this.state.username &&
			!!this.state.password &&
			!!this.state.password2 &&
			(this.state.password == this.state.password2) &&
			(isEmailValid(this.state.email)) &&
			!!this.state.termsAccepted
	}

	handleSubmit = (mutate: any) => () => {
		if (!this.isValid()) return () => {}

		return mutate()
			.then(async ({data: {register}}: { data: { register: User } }) => {
				/**
				 * Register Success
				 * */
				UserStore.setUser(register)
				return navigate(this.props, Routes.home, {
					replace: true,
				})
			})
	}

	renderAcceptTerms = () => {
		return (
			<RX.View style={styles.termsContainer}>
				<Checkbox
					filledColor={theme.colors.checkboxFilled}
					onChange={this.onChange('termsAccepted')}
					value={this.state.termsAccepted}
					size={25}
				/>
				<RX.Text style={styles.termsText}>{getLocalizedText('terms')}</RX.Text>
			</RX.View>
		)
	}

  render() {
		const {style} = this.props

    return (
			<Mutation
				variables={{
					username: this.state.username,
					password: this.state.password,
					email: this.state.email,
					gender: this.state.gender,
					timeZone: moment.tz.guess(),
				}}
				mutation={gql`
						mutation RegisterMutation($username: String!, $password: String!, $email: String!, $timeZone: String!) {
						  register(username: $username, password: $password, email: $email, timeZone: $timeZone) ${SelfUserFragment}
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
								value={this.state.email}
								onChange={this.onChange('email')}
								label={getLocalizedText('Email')}
								autoCapitalize='none'
							/>
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
							<Input
								value={this.state.password2}
								onChange={this.onChange('password2')}
								label={getLocalizedText('PasswordAgain')}
								secureTextEntry
							/>
							<RX.Text style={styles.ensureSafeAccountText}>{getLocalizedText('ensureSafeAccount')}</RX.Text>

							{this.renderAcceptTerms()}

							<FilledButton
								label={getLocalizedText('Register')}
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
		padding: theme.styles.spacing,
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
	}),
	termsContainer: RX.Styles.createViewStyle({
		flexDirection: 'row',
		marginTop: theme.styles.spacing * 2,
		alignItems: 'center',
	}),
	termsText: RX.Styles.createTextStyle({
		marginLeft: theme.styles.spacing / 2,
		fontSize: theme.fontSizes.size12,
		color: theme.colors.mutedText,
		wordBreak: 'break-word',
		width: 200,
	}),
	ensureSafeAccountText: RX.Styles.createTextStyle({
		color: theme.colors.mutedText,
		fontSize: theme.fontSizes.size12,
	})
}
