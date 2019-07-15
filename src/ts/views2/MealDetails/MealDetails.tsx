/*
 * MealDetails.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import {getParam} from 'src/ts/utilities'
import {Meal} from 'src/ts/models/FoodModels'
import Navbar from 'common/Navbar/Navbar'
import theme from 'src/ts/app/Theme'
import MealItem from 'src/ts/views/MealPlan/components/MealItem'
import moment from 'moment'

interface MealDetailsProps {
	style?: any,
}

interface MealDetailsStates {
	meal?: Meal,
	datetime?: string,
}

export default class MealDetails extends RX.Component<MealDetailsProps, MealDetailsStates> {
	constructor(props: MealDetailsProps) {
		super(props)

		const meal: Meal = getParam(props, 'meal')
		const datetime: string = getParam(props, 'datetime')
		console.log('MEAL', meal)
		// @ts-ignore
		console.log('this.props', props.navigation)

		this.state = {
			meal,
			datetime,
		}
	}

	getNavbarName = () => {
		if (!this.state.meal) return ''
		const weekDay = moment.weekdays(moment(this.state.datetime).weekday())
		const mealName = this.state.meal.name

		// TODO fix month for earlier or future dates
		return `${weekDay}'s ${mealName}`
	}

	render() {
		const {style} = this.props

		if (!this.state.meal) return null

		return (
			<RX.View
				style={[styles.container, style]}
			>
				<Navbar
					title={this.getNavbarName()}
				/>
				<RX.ScrollView>
					{
						this.state.meal.items.map(mealItem => <MealItem key={mealItem.id} mealItem={mealItem} />)
					}
				</RX.ScrollView>
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		flex: 1,
		paddingTop: theme.styles.navBarHeight,
	}),
}
