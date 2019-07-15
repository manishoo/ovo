/*
 * MealPlanContainer.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import gql from 'graphql-tag'
import {Query} from 'react-apollo'
import MealPlanScreen from 'src/ts/views/MealPlanScreen/MealPlanScreen'
import {MealItemFragment} from 'src/ts/models/GraphQLModels'

export default class MealPlanScreenContainer extends RX.Component {
	render() {
		return (
			<Query
				query={gql`
					query MealPlanQuery {
						getMealPlan {
    					id
    					name
    					days {
    					  dayName
    					  meals {
    					    name
    					    time
    					    energyPercentageOfDay
    					    availableTime
    					    cook
    					    items ${MealItemFragment}
    					  }
    					}
  					}
					}
				`}
			>
				{({data: { getMealPlan }}) => (
					getMealPlan ? <MealPlanScreen
						mealPlan={getMealPlan}
						{...this.props}
					/> : null
				)}
			</Query>
		)
	}
}