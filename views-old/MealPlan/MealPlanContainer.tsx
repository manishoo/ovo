/*
 * MealPlanContainer.tsx
 * Copyright: Ouranos Studio 2019
 */


import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import RX from 'reactxp'
import MealPlan from 'src/ts/views/MealPlan/MealPlan'

export default class MealPlanContainer extends RX.Component {
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
    					    items {
    					      title
    					      id
    					      type
    					      subtitle
    					      thumbnail {
    					      	url
    					      }
    					      amount
    					      totalTime
    					      seq
    					      unitDescription
    					    }
    					  }
    					}
  					}
					}
				`}
			>
				{({ data: { getMealPlan } }) => (
					getMealPlan ? <MealPlan
						mealPlan={getMealPlan}
						{...this.props}
					/> : null
				)}
			</Query>
    )
  }
}