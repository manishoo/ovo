// /*
//  * MealPlanScreenContainer.tsx
//  * Copyright: Ouranos Studio 2019
//  */
//
// import gql from 'graphql-tag'
// import { Query } from 'react-apollo'
// import RX from 'reactxp'
// import { MealItemFragment } from 'src/ts/models/GraphQLModels'
// import MealPlanScreen from 'src/ts/views/MealPlanScreen/MealPlanScreen'
//
// export default class MealPlanScreenContainer extends RX.Component {
//   render() {
//     return (
// 			<Query
// 				query={gql`
// 					query MealPlanQuery {
// 						getMealPlan {
//     					id
//     					name
//     					days {
//     					  dayName
//     					  meals {
//     					    name
//     					    time
//     					    energyPercentageOfDay
//     					    availableTime
//     					    cook
//     					    items ${MealItemFragment}
//     					  }
//     					}
//   					}
// 					}
// 				`}
// 			>
// 				{({ data: { getMealPlan } }) => (
// 					getMealPlan ? <MealPlanScreen
// 						mealPlan={getMealPlan}
// 						{...this.props}
// 					/> : null
// 				)}
// 			</Query>
//     )
//   }
// }
