/*
 * Register.tsx
 * Copyright: Ouranos Studio 2019
 */

import FilledButton from 'common/FilledButton/FilledButton'
import Input from 'common/Input/Input'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import Navbar from 'common/Navbar/Navbar'
import gql from 'graphql-tag'
import ImageSource from 'modules/images'
import moment from 'moment-timezone'
import { Mutation } from 'react-apollo'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { Theme } from 'src/ts/app/Theme'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import Checkbox from 'src/ts/common/Checkbox/Checkbox'
import { User } from 'src/ts/models/FoodModels'
import { SelfUserFragment } from 'src/ts/models/GraphQLModels'
import { Routes } from 'src/ts/navigator/routes'
import UserStore from 'src/ts/stores/UserStore'
import { isEmailValid, navigate } from 'src/ts/utilities'

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
		if (!this.isValid()) return () => {
		}

		return mutate()
			.then(async ({ data: { register } }: { data: { register: User } }) => {
				/**
				 * Register Success
				 * */
				UserStore.setUser(register)
				return navigate(this.props, Routes.home, {
					replace: true,
				})
			})
	}

	renderAcceptTerms = (theme: Theme) => {
		return (
			<RX.View style={styles.termsContainer}>
				<Checkbox
					filledColor={theme.colors.checkboxFilled}
					onChange={this.onChange('termsAccepted')}
					value={this.state.termsAccepted}
					size={25}
				/>
				<RX.Text style={[styles.termsText, { color: theme.colors.mutedText }]}>{getLocalizedText('terms')}</RX.Text>
			</RX.View>
		)
	}

  render() {
		const { style } = this.props

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
					<ThemeContext.Consumer>
						{({ theme }) => (
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
									<RX.Text
										style={[styles.ensureSafeAccountText, { color: theme.colors.mutedText }]}>{getLocalizedText('ensureSafeAccount')}</RX.Text>

									{this.renderAcceptTerms(theme)}

									<FilledButton
										label={getLocalizedText('Register')}
										onPress={this.handleSubmit(mutate)}
										disabled={!this.isValid()}
										containerStyle={styles.submitButton}
									/>
								</RX.View>
							</RX.View>
						)}
					</ThemeContext.Consumer>
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
		padding: Styles.values.spacing,
	}),
	inputContainer: RX.Styles.createViewStyle({
		width: FORM_WIDTH,
	}),
	textInput: RX.Styles.createTextInputStyle({
		//
	}),
	submitButton: RX.Styles.createViewStyle({
		marginTop: Styles.values.spacing * 2
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
