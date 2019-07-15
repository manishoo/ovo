/*
 * MealPlan.ios.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import Meal from './components/Meal'
import {MealPlan as MealPlanType, Meal as MealType} from 'src/ts/models/FoodModels'
import {SectionList, StatusBar} from 'react-native'
// import MealComponent from 'src/views/MealPlan/components/MealPlanInput/components/MealComponent'
// import {getLocalizedText} from '@common/LocalizedText'
import SubmitButton from 'src/ts/views/Introduction/components/SubmitButton'
import theme from 'src/ts/app/Theme'
import AddMealItemDialog from 'src/ts/views/MealPlan/components/AddMealItemDialog'
import {getDayColor, navigate} from 'src/ts/utilities'
import {getLocalizedText} from 'common/LocalizedText'

interface MealPlanProps {
	style?: any,
	mealPlan: MealPlanType,
}

interface MealPlanState {
	mealPlan: MealPlanType,
}

export default class MealPlan extends RX.Component<MealPlanProps, MealPlanState> {
	constructor(props: MealPlanProps) {
		super(props)

		this.state = {
			mealPlan: props.mealPlan,
		}
	}

	showAddModal = () => {
		RX.Modal.show(
			<AddMealItemDialog
				onDismiss={() => {}}
			/>,
			'addMealItem'
		)
	}

	render() {
		const {style} = this.props

		return (
			<RX.View
				style={[styles.container, style]}
			>
				<SectionList
					// @ts-ignore
					renderItem={({item, section: {title}}: {item: MealType, section: {title: string}}) => (
						<RX.View style={{backgroundColor: getDayColor(title)}}>
							<Meal
								meal={item}
								style={{
									marginRight: 16,
									marginLeft: 16,
								}}
							/>
						</RX.View>
					)}
					renderSectionHeader={({section: {title}}) => (
						<RX.View key={title} style={[styles.headingContainer, { backgroundColor: getDayColor(title) }]}>
							<RX.Text style={styles.heading}>{getLocalizedText(title)}</RX.Text>
						</RX.View>
					)}
					sections={this.state.mealPlan.days.map(day => ({
						title: day.dayName,
						data: day.meals,
					}))}
					keyExtractor={(item, index) => item + index}
				/>
				<SubmitButton
					onPress={() => navigate(this.props, 'home')}
					label='✓'
					style={styles.submitButton}
				/>
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		backgroundColor: '#FFCC00',
	}),
	dayName: RX.Styles.createTextStyle({
		fontSize: 25,
		color: '#fff',
		fontWeight: 'bold',
		alignSelf: 'center',
	}),
	submitButton: RX.Styles.createViewStyle({
		position: 'absolute',
		right: 10,
		bottom: 10,
		width: 70,
		height: 70,
		borderRadius: 35,
		backgroundColor: theme.colors.submitButtonBackgroundColor,
		borderWidth: 1,
	}),
	heading: RX.Styles.createTextStyle({
		fontSize: 25,
		color: theme.colors.mealPlanDayName,
		textAlign: 'center',
		fontWeight: 'bold',
		// marginBottom: 10,
	}),
	headingContainer: RX.Styles.createViewStyle({
		padding: 25,
	}),
}
