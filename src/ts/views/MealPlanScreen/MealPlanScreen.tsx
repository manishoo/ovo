/*
 * MealPlanScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import Meal from './components/Meal'
import {MealPlan as MealPlanType} from 'src/ts/models/FoodModels'
import {getLocalizedText} from 'common/LocalizedText'
import {getDayColor} from 'src/ts/utilities'
import {ComponentBase} from 'resub'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'

interface MealPlanProps extends RX.CommonProps {
	style?: any,
	mealPlan: MealPlanType,
}

interface MealPlanState {
	mealPlan: MealPlanType,
	isTinyOrSmall?: boolean
}

export default class MealPlanScreen extends ComponentBase<MealPlanProps, MealPlanState> {
	constructor(props: MealPlanProps) {
		super(props)

		RX.StatusBar.setTranslucent(true)
		this.state = {
			mealPlan: props.mealPlan,
		}
	}

	protected _buildState(props: MealPlanProps, initialBuild: boolean): Partial<MealPlanState> | undefined {
		return {
			isTinyOrSmall: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
		}
	}

	render() {
		const {style} = this.props

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
										style={[
											{
												marginTop: 0,
												margin: 16,
											},
											this.state.isTinyOrSmall ?
												{} :
												{
													alignSelf: 'center',
													width: 500,
												}
										]}
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
