/*
 * ChatInput.tsx
 * Copyright: Ouranos Studio 2019
 */


import _ from 'lodash'
import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
import { Food } from 'src/ts/models/FoodModels'
import { fullWidth, generateHeightRange, generateWeightRange } from '../../../src/ts/utilities'
import { EXPECTATIONS, Item, MessageType } from '../types'
import FoodAutocomplete from './FoodAutocomplete'
import InputForm from './InputForm'
import MealSettings from './MealSettings/MealSettings'
import Picker from './Picker/Picker'
import SubmitButton from './SubmitButton'

// import MealPlanInput from './MealPlanInput/MealPlanInput'

interface MessageInput {
	inputType: MessageType,
	expect: EXPECTATIONS,
	mealPlanSettings: any,
	skip: boolean,
	items?: Item[],
}

interface IntroductionProps {
	style?: any,
	onSubmit: any,
	loading: boolean,
	onHeightChange: (bottomMargin: number, bottomPadding?: number) => any,
	input: MessageInput,
	toggleMainKeyboardAvoidable: (enabled: boolean) => void,
	onOpenMealPlan: () => any,
}

interface IntroductionState {
	message: string,
}

function getKeyboardType(inputType: string) {
	switch (inputType) {
		case MessageType.number:
			return 'number-pad'
		case MessageType.email:
			return 'email-address'
		case MessageType.password:
		case MessageType.text:
		default:
			return 'default'
	}
}

function getPlaceholder(expect: EXPECTATIONS) {
	switch (expect) {
		case EXPECTATIONS.gender:
			return 'Enter your gender'
		case EXPECTATIONS.nickname:
			return 'Enter your first name'
		case EXPECTATIONS.age:
			return 'Enter your age'
		case EXPECTATIONS.weight:
			return 'Enter your weight'
		case EXPECTATIONS.height:
			return 'Enter your height'
		case EXPECTATIONS.activity:
			return 'Enter your activity'
		case EXPECTATIONS.goal:
			return 'Enter your goal'
		case EXPECTATIONS.meals:
			return 'Enter your meals'
		// case EXPECTATIONS.register:
		// 	return 'Enter your register'
		case EXPECTATIONS.allergy:
			return 'Enter your allergies'
		case EXPECTATIONS.dislikedFoods:
			return 'Enter the foods you don\'t like'
		case EXPECTATIONS.diet:
			return 'Enter your diet'
		case EXPECTATIONS.chooseDiet:
			return 'Choose your diet'
		case EXPECTATIONS.meal:
			return 'Enter your meal'
		case EXPECTATIONS.normalRoutine:
			return 'Enter your normal routine'
		default:
			return 'Message'
	}
}

export default class Introduction extends RX.Component<IntroductionProps, IntroductionState> {
	state = {
		message: ''
	}
	animatedBottomValue = RX.Animated.createValue(-330)
	picker: any

	onChangeText = (text: string) => {
		this.setState({
			message: text,
		})
	}

	onFoodSubmit = (data: Food[]) => {
		const { onSubmit } = this.props
		let text = ''
		data.map((f: Food) => {
			text += `${f.name}, `
		})

		onSubmit({
			text,
			data: JSON.stringify({
				foods: data.map(f => f.id)
			}),
		})
	}

	onSkip = (text: string) => {
		const { onSubmit } = this.props

		onSubmit({
			text,
			data: JSON.stringify({
				skip: true,
			}),
		})
	}

	onPickerSubmit = () => {
		const { onSubmit } = this.props
		const pickerValues: { [k: string]: any } = this.picker.getValues()

		onSubmit({
			text: Object.keys(pickerValues).map((i: string) => pickerValues[i]).join(''),
			data: JSON.stringify({
				value: +pickerValues.selectedItem0,
				unit: pickerValues.selectedItem1,
			}),
		})
	}

	onFormSubmit = (formData: any) => {
		const { onSubmit } = this.props

		let message = ''
		for (let key in formData) {
			const item = formData[key]
			if (item.name == 'password') {
				message += `${item.title}: ${item.value.replace(/./g, '•')}\n`
			} else {
				message += `${item.title}: ${item.value}\n`
			}
		}

		onSubmit({
			text: message,
			data: JSON.stringify({
				username: formData.username.value,
				email: formData.email.value,
				password: formData.password.value,
				timeZone: formData.timeZone,
			})
		})
	}

	onTextSubmit = () => {
		this.setState({
			message: '',
		})
		this.props.onSubmit({
			text: this.state.message,
			input: this.props.input,
		})
	}

	onSelectSubmit = ({ text }: { text: string }) => () => {
		switch (this.props.input.expect) {
			case EXPECTATIONS.mealPlan: {
				return this.props.onOpenMealPlan()
			}
			default: {
				this.props.onSubmit({
					text: text,
					input: this.props.input,
				})
			}
		}
	}

	onMealSettingsSubmit = (data: any) => {
		const { onSubmit } = this.props

		onSubmit({
			text: `protein: %${data.mealPlanSettings.protein}\nfat: %${data.mealPlanSettings.fat}\ncarbs: %${data.mealPlanSettings.carbs}\nTDEE: ${data.mealPlanSettings.tdee}calories`,
			data: JSON.stringify(data),
		})
	}

	controlInputPosition = (inputType: MessageType) => {
		const { onHeightChange } = this.props

		switch (inputType) {
			case MessageType.form: {
				let bottomAnimation = RX.Animated.timing(this.animatedBottomValue,
					{ toValue: -30, duration: 350, easing: RX.Animated.Easing.InOut() })

				onHeightChange(350)
				return bottomAnimation.start()
			}
			case MessageType.height:
			case MessageType.weight: {
				let bottomAnimation = RX.Animated.timing(this.animatedBottomValue,
					{ toValue: -140, duration: 500, easing: RX.Animated.Easing.InOut() })

				onHeightChange(250)
				return bottomAnimation.start()
			}
			case MessageType.select: {
				onHeightChange(75, 50)
				let bottomAnimation = RX.Animated.timing(this.animatedBottomValue,
					{
						toValue: -400,
						duration: 350,
						easing: RX.Animated.Easing.InOut(),
					}
				)
				return bottomAnimation.start()
			}
			case MessageType.mealPlanSettings: {
				onHeightChange(310)
				let bottomAnimation = RX.Animated.timing(this.animatedBottomValue,
					{
						toValue: -70,
						duration: 350,
						easing: RX.Animated.Easing.InOut(),
					}
				)
				return bottomAnimation.start()
			}
			case MessageType.text:
			default: {
				onHeightChange(65)
				let bottomAnimation = RX.Animated.timing(this.animatedBottomValue,
					{
						toValue: -330,
						duration: 350,
						easing: RX.Animated.Easing.InOut(),
					}
				)
				bottomAnimation.start()
			}
		}
	}

	shouldComponentUpdate(nextProps: Readonly<IntroductionProps>, nextState: Readonly<IntroductionState>): boolean {
		return !_.isEqual(nextProps.input, this.props.input) || !_.isEqual(nextState, this.state) || !_.isEqual(nextProps.loading, this.props.loading)
	}

	componentWillUpdate(nextProps: Readonly<IntroductionProps>): void {
		this.controlInputPosition(nextProps.input.inputType)
	}

	render() {
		const {
			input: {
				inputType,
				items,
				skip,
				expect,
				mealPlanSettings,
			},
			// onSubmit,
			loading,
			// toggleMainKeyboardAvoidable,
		} = this.props
		const { message } = this.state

		const animatedStyle = RX.Styles.createAnimatedViewStyle({
			bottom: this.animatedBottomValue,
		})

		// const isOpen = (MessageType.form == inputType) || (MessageType.weight == inputType)

		function createViewStyle() {
			if (MessageType.form === inputType) {
				return styles.formContainer
			}
			if (MessageType.weight === inputType) {
				return styles.pickerContainer
			}
			return styles.inputContainer
		}

		switch (inputType) {
			// case MessageType.mealPlan:
			// 	return (
			// 		<MealPlanInput
			// 			skip={skip ? 'Nope' : undefined}
			// 			onSkip={this.onSkip}
			// 			onSubmit={this.onFoodSubmit}
			// 			toggleMainKeyboardAvoidable={toggleMainKeyboardAvoidable}
			// 			style={{
			// 				position: 'absolute',
			// 				bottom: 0,
			// 			}}
			// 		/>
			// 	)
			case MessageType.food:
				return (
					<FoodAutocomplete
						skip={skip ? 'Nope' : undefined}
						onSkip={this.onSkip}
						onSubmit={this.onFoodSubmit}
						style={{
							position: 'absolute',
							bottom: 0,
						}}
					/>
				)
			case MessageType.select:
			case MessageType.weight:
			case MessageType.text:
			case MessageType.password:
			case MessageType.number:
			case MessageType.form:
			default:
				const SelectContainer = (items && items.length <= 2) ? RX.View : RX.ScrollView

				return [
					MessageType.select === inputType && <SelectContainer
            key='sc'
            style={[
							styles.selectItemContainer,
							(items && items.length <= 2) ? {
								justifyContent: 'center',
								alignItems: 'center',
							} : {},
						]}
						// @ts-ignore
            contentContainerStyle={(items && items.length <= 2) ? {
							justifyContent: 'center',
							alignItems: 'center',
						} : {}}
            horizontal
          >
						{
							items.map(item => (
								<RX.View
									key={item.text}
									style={styles.selectItem}
									onPress={this.onSelectSubmit(item)}
									activeOpacity={0.8}
								>
									<RX.Text style={styles.selectItemText}>{item.text}</RX.Text>
								</RX.View>
							))
						}
          </SelectContainer>,
					<RX.Animated.View
						key='scs'
						style={[
							createViewStyle(),
							animatedStyle,
						]}
					>
						{
							(() => {
								if (MessageType.form === inputType) {
									return (
										<InputForm
											onSubmit={this.onFormSubmit}
										/>
									)
								}
								if (MessageType.mealPlanSettings === inputType) {
									return (
										<MealSettings
											onSubmit={this.onMealSettingsSubmit}
											settings={mealPlanSettings}
										/>
									)
								}

								if (MessageType.weight === inputType) {
									return [
										<Picker
											key='picker'
											ref={ref => this.picker = ref}
											defaultValues={[
												'70',
												'kg'
											]}
											pickers={[
												generateWeightRange(),
												[
													{
														label: 'kg',
														value: 'kg',
													},
													{
														label: 'pound',
														value: 'pound',
													},
												],
											]}
										/>,
										<SubmitButton
											key='button'
											disabled={loading}
											style={[
												styles.submitButton,
												{ top: 206 }
											]}
											onPress={this.onPickerSubmit}
										/>
									]
								}

								if (MessageType.height === inputType) {
									return [
										<Picker
											key='h-picker'
											ref={ref => this.picker = ref}
											defaultValues={[
												'170',
												'cm'
											]}
											pickers={[
												generateHeightRange(),
												[
													{
														label: 'cm',
														value: 'cm',
													},
												],
											]}
										/>,
										<SubmitButton
											key='button'
											style={[
												styles.submitButton,
												{ top: 206 }
											]}
											onPress={this.onPickerSubmit}
											disabled={loading}
										/>
									]
								}

								return (
									<RX.View
										style={styles.textInputContainer}
									>
										<RX.TextInput
											key='textinput'
											value={message}
											keyboardType={getKeyboardType(inputType)}
											// multiline
											placeholder={loading ? 'Message' : getPlaceholder(expect)}
											returnKeyType='send'
											secureTextEntry={MessageType.password == inputType}
											style={styles.textInput}
											onChangeText={this.onChangeText}
											onSubmitEditing={this.onTextSubmit}
										/>
										<SubmitButton
											skip={skip ? 'Nope' : undefined}
											style={styles.submitButton}
											onPress={this.onTextSubmit}
											disabled={loading || !message}
										/>
									</RX.View>
								)
							})()
						}
					</RX.Animated.View>
				]
		}

	}
}

const containerStyle: RX.Types.ViewStyle = {
	position: 'absolute',
	backgroundColor: theme.colors.white,
	borderTopLeftRadius: 15,
	borderTopRightRadius: 15,
	borderWidth: 1,
	borderColor: '#eee',
	bottom: 0,
	paddingBottom: 10,
	paddingTop: 10,
	width: fullWidth(),
	height: 400,
}

const styles = {
	textInputContainer: RX.Styles.createViewStyle({
		flexDirection: 'row',
		// justifyContent: 'flex-end',
		paddingRight: 16,
		minHeight: 50,
	}),
	textInput: RX.Styles.createTextInputStyle({
		width: fullWidth() * 0.77,
		borderBottomWidth: 1,
		borderColor: '#eee',
		fontSize: 16,
		marginLeft: 10,
	}),
	selectItemContainer: RX.Styles.createViewStyle({
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: 'transparent',
		// flexDirection: 'row',
		height: 100,
		width: fullWidth(),
		padding: 10,
		flexDirection: 'row',
		// justifyContent: 'flex-end',
		// alignItems: 'stretch',
	}),
	selectItem: RX.Styles.createViewStyle({
		// flex: 1,
		padding: 15,
		borderColor: '#E5E5E5',
		borderWidth: 1,
		backgroundColor: theme.colors.secondary,
		borderRadius: 100,
		// marginRight: 5,
		marginBottom: 5,
		justifyContent: 'center',
		alignItems: 'center',
		// height: 50,
	}),
	selectItemText: RX.Styles.createTextStyle({
		color: theme.colors.white,
		fontWeight: 'bold',
		fontSize: 18,
	}),
	inputContainer: RX.Styles.createViewStyle(containerStyle),
	formContainer: RX.Styles.createViewStyle(containerStyle),
	pickerContainer: RX.Styles.createViewStyle(containerStyle),
	submitButton: RX.Styles.createViewStyle({
		position: 'absolute',
		right: 10,
		bottom: 0,
	})
}
