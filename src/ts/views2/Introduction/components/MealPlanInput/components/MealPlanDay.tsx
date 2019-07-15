/*
 * MealPlanDay.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
import MealComponent from './MealComponent'
import {Meal} from 'src/ts/models/FoodModels'

interface MealPlanDayProps {
	style?: any,
	dayName: string,
	meals: Meal[],
	onDragStart: () => any,
	onDragEnd: () => any,
}

interface MealPlanDayState {
	mealTimes: {
		[k: string]: any
	}
}

export default class MealPlanDay extends RX.Component<MealPlanDayProps, MealPlanDayState> {
	constructor(props: MealPlanDayProps) {
		super(props)

		let state: MealPlanDayState = {
			mealTimes: {},
		}
		props.meals.map((meal: Meal) => {
			state.mealTimes[`meal${meal.name}time`] = meal.time
		})
		this.state = state
	}

	render() {
		const {style, dayName, meals} = this.props

		return (
			<RX.View
				style={[styles.container, style]}
			>
				<RX.Text style={styles.heading}>{dayName}</RX.Text>
				<RX.View>
					{
						meals.map((meal: Meal) => (
							<MealComponent
								key={meal.name}
								meal={meal}
							/>
						))
					}
				</RX.View>
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		flex: 1,
		// height: 500,
		// borderWidth: 1,
		// borderColor: '#eee',
		marginBottom: 10,
		// borderRadius: 10,
		padding: 10,
		// backgroundColor: '#f5f5f5'
	}),
	heading: RX.Styles.createTextStyle({
		fontSize: 42,
		color: theme.colors.largeHeading,
		marginBottom: 10,
	}),
	timelineHour: RX.Styles.createTextStyle({
		fontSize: 11,
		color: '#ddd',
		marginBottom: 5
	}),
	timelineContainer: RX.Styles.createViewStyle({
		position: 'absolute',
		left: 0,
		top: 60,
		paddingLeft: 20,
		paddingRight: 30,
	}),
	timeIndicator: RX.Styles.createViewStyle({
		borderRadius: 20,
		// width: 100,
		// height: 20,
		flexDirection: 'row',
		backgroundColor: '#e6e6e6',
		// borderWidth: 1,
		// borderColor: 'red',
		width: 80,
		height: 30,
		position: 'absolute',
		left: 0,
	}),
	timeIndicatorLabel: RX.Styles.createViewStyle({
		// backgroundColor: 'red',
		paddingRight: 10,
		paddingLeft: 10,
		paddingTop: 5,
		paddingBottom: 5,
		// width: 20,
		justifyContent: 'center',
		alignItems: 'center',
	}),
	timeIndicatorValue: RX.Styles.createViewStyle({
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	}),
	timeIndicatorText: RX.Styles.createTextStyle({
		color: theme.colors.mutedBlack,
		fontSize: 12,
	}),
}
