/*
 * FoodContainer.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import {getParam} from 'src/ts/utilities'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import Food from 'src/ts/views/Food/Food'

export default class FoodContainer extends RX.Component {
	render() {
		return (
			<Query
				variables={{
					id: getParam(this.props, 'foodId'),
				}}
				query={gql`
					query GetFood($id:String!) {
					  getFood(id: $id) {
					    name
					    id
					    description
					    fullDescription
					    foodGroup
					    image {
					    	url
					    }
					  }
					}
				`}
			>
				{({data: {getFood}}) => (
					getFood ? <Food food={getFood}/> : null
				)}
			</Query>
		)
	}
}