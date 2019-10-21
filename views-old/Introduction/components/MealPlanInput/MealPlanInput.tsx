/*
 * MealPlanInput.tsx
 * Copyright: Ouranos Studio 2019
 */


import FlatButton from '../../../../src/ts/common/FlatButton/FlatButton'
import { getLocalizedText } from '../../../../src/ts/common/LocalizedText/LocalizedText'
import { SectionList } from 'react-native'
import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
import { Food, Meal } from 'src/ts/models/FoodModels'
import { fullWidth } from '../../../../src/ts/utilities'
import SubmitButton from '../SubmitButton'
import AddMealItemDialog from './components/AddMealItemDialog'
import MealComponent from './components/MealComponent'

interface MealPlanInputProps {
	style?: any,
	skip?: string,
	onSubmit: (data: Food[]) => void,
	onSkip: (text: string) => void,
	toggleMainKeyboardAvoidable: (enabled: boolean) => void,
}

interface MealPlanInputState {
	open: boolean,
	scrollEnabled: boolean,
}

function generateFakeMeals(): Meal[] {
	return [{
		name: 'Breakfast',
		time: '02:00',
		foods: [{
			amount: 1,
			unit: 'g',
			food: {
				name: 'Cranberry',
				id: '1',
				image: {
					url: 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/d83512a0fe4e2d338f89ccde0c5de227646921cf',
				},
			}
		}, {
			amount: 1,
			unit: 'g',
			food: {
				name: 'Cranberry',
				id: '1',
				image: {
					url: 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/d83512a0fe4e2d338f89ccde0c5de227646921cf',
				},
			}
		}, {
			amount: 1,
			unit: 'g',
			food: {
				name: 'Cranberry',
				id: '1',
				image: {
					url: 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/d83512a0fe4e2d338f89ccde0c5de227646921cf',
				},
			}
		}],
		cook: true,
		recipes: [],
	}, {
		name: 'Launch',
		time: '14:00',
		foods: [{
			amount: 1,
			unit: 'g',
			food: {
				name: 'Cranberry',
				id: '2',
				image: {
					url: 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/d83512a0fe4e2d338f89ccde0c5de227646921cf',
				},
			}
		}],
		cook: true,
		recipes: [],
	}, {
		name: 'Dinner',
		time: '23:30',
		foods: [{
			amount: 1,
			unit: 'g',
			food: {
				name: 'Cranberry',
				id: '3',
				image: {
					url: 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/d83512a0fe4e2d338f89ccde0c5de227646921cf',
				},
			}
		}],
		cook: true,
		recipes: [],
	}]
}

export default class MealPlanInput extends RX.Component<MealPlanInputProps, MealPlanInputState> {
	animatedHeight = RX.Animated.createValue(75)
	input: any

	constructor(props: MealPlanInputProps) {
		super(props)

		this.state = {
			open: false,
			scrollEnabled: true,
		}
	}

	toggleOpen = (open: boolean) => {
		RX.Animated.timing(this.animatedHeight, {
			toValue: open ? RX.UserInterface.measureWindow().height : 75,
			duration: 350,
			// easing: RX.Animated.Easing.Default(),
		}).start()
		this.setState({
			open,
		})
	}

	showAddModal = () => {
		this.props.toggleMainKeyboardAvoidable(false)
		RX.Modal.show(
			<AddMealItemDialog
				onDismiss={() => this.props.toggleMainKeyboardAvoidable(true)}
			/>,
			'addMealItem'
		)
	}

	render() {
		const { style } = this.props
		const { open } = this.state

		return (
			<RX.View
				style={[styles.container, style]}
				activeOpacity={1}
			>
				<RX.Animated.View
					style={[
						styles.inputContainer,
						{
							height: this.animatedHeight,
						}
					]}
				>
					{
						!open &&
            <FlatButton
              label={getLocalizedText('viewMealPlan')}
              style={{
								padding: 15
							}}
              onPress={() => this.toggleOpen(true)}
            />
					}

					{
						open && [
							<SectionList
								style={{
									marginTop: 80,
								}}
								renderItem={({ item }) => (
									<MealComponent
										key={item.id}
										meal={item}
										onAdd={this.showAddModal}
										style={{
											marginLeft: 10,
											marginRight: 10,
										}}
										//
									/>
								)}
								renderSectionHeader={({ section: { title } }) => (
									<RX.View key={title} style={styles.headingContainer}>
										<RX.Text style={styles.heading}>{title}</RX.Text>
									</RX.View>
								)}
								sections={[
									{ title: getLocalizedText('Saturday'), data: generateFakeMeals() },
									{ title: getLocalizedText('Sunday'), data: generateFakeMeals() },
									{ title: getLocalizedText('Monday'), data: generateFakeMeals() },
									{ title: getLocalizedText('Tuesday'), data: generateFakeMeals() },
									{ title: getLocalizedText('Wednesday'), data: generateFakeMeals() },
									{ title: getLocalizedText('Thursday'), data: generateFakeMeals() },
									{ title: getLocalizedText('Friday'), data: generateFakeMeals() },
								]}
								keyExtractor={(item, index) => item + index}
							/>,
							<SubmitButton
								onPress={() => {
									//
								}}
								label='✓'
								style={styles.submitButton}
							/>
						]
					}
				</RX.Animated.View>
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		width: fullWidth(),
		position: 'relative',
		justifyContent: 'flex-end',
		backgroundColor: 'transparent'
	}),
	borderBottom: RX.Styles.createViewStyle({
		width: fullWidth() * 0.77,
		position: 'absolute',
		bottom: 8,
		left: 10,
		right: 0,
		height: 1,
		backgroundColor: '#eee',
	}),
	inputContainer: RX.Styles.createViewStyle({
		// flex: 1,
		flexDirection: 'row',
		borderColor: '#eee',
		borderBottomWidth: 1,
		borderWidth: 1,
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.colors.white,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		// backgroundColor: theme.colors.white,
		// width: fullWidth(),
		minHeight: 50,
	}),
	suggestionsContainer: RX.Styles.createViewStyle({
		// flex: 1,
		flexDirection: 'row',
		backgroundColor: 'transparent',
		// width: fullWidth(),
		maxHeight: 50,
		marginBottom: 5,
		paddingLeft: 5,
	}),
	suggestionItem: RX.Styles.createViewStyle({
		backgroundColor: theme.colors.white,
		padding: 16,
		borderRadius: 20,
		marginRight: 8,
		borderWidth: 1,
		borderColor: '#eee',
	}),
	addedFood: RX.Styles.createViewStyle({
		// backgroundColor: theme.colors.yellow,
		justifyContent: 'center',
		borderColor: '#eee',
		borderWidth: 1,
		alignItems: 'center',
		height: 45,
		// padding: 5,
		borderRadius: 22.5,
		marginRight: 8,
		paddingRight: 10,
		paddingLeft: 10,
		marginBottom: 5,
	}),
	textInput: RX.Styles.createTextInputStyle({
		minWidth: 100,
		// maxHeight: 60,
		height: 50,
		// borderBottomWidth: 1,
		fontSize: 16,
		// borderColor: 'transparent',
		marginRight: 50,
		// borderColor: '#eee',
		borderBottomWidth: 0,
	}),
	submitButton: RX.Styles.createViewStyle({
		position: 'absolute',
		right: 10,
		bottom: 10,
		width: 70,
		height: 70,
		borderRadius: 35,
	}),
	daysContainer: RX.Styles.createViewStyle({
		marginTop: 85,
		flexDirection: 'column',
		// padding: 10,
	}),
	heading: RX.Styles.createTextStyle({
		fontSize: 42,
		color: theme.colors.secondary,
		textAlign: 'left',
		marginBottom: 10,
	}),
	headingContainer: RX.Styles.createViewStyle({
		padding: 10,
		paddingBottom: 0,
		backgroundColor: '#fff'
	}),
}
