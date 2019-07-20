/*
 * MealPlan.tsx
 * Copyright: Ouranos Studio 2019
 */


import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import RX from 'reactxp'
import { MealPlan as MealPlanType } from 'src/ts/models/FoodModels'
import { getDayColor } from 'src/ts/utilities'
import Meal from './components/Meal'

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

		RX.StatusBar.setTranslucent(true)
		this.state = {
			mealPlan: props.mealPlan,
		}
	}


	render() {
		const { style } = this.props

		return (
			<RX.ScrollView
				style={[styles.container, style]}
			>

				{/*<RX.StatusBar/>*/}
				{
					this.state.mealPlan.days.map((day) => (
						<RX.View
							key={day.dayName}
							style={{
								backgroundColor: getDayColor(day.dayName),
							}}
						>
							<RX.Text style={styles.dayName}>{getLocalizedText(day.dayName)}</RX.Text>
							{
								day.meals.map(meal => (
									<Meal
										meal={meal}
										style={{
											marginTop: 0,
											margin: 16,
										}}

									/>
								))
							}
						</RX.View>
					))
				}
			</RX.ScrollView>
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
		margin: 25,
		// margin: 25
	})
}
