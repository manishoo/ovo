/*
 * Meal.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import {Meal as MealType} from 'src/ts/models/FoodModels'
import MealItem from './MealItem'
import theme from 'src/ts/app/Theme'

interface MealProps {
	style?: any,
	meal: MealType,
}

export default class Meal extends RX.Component<MealProps> {
	render() {
		const {style} = this.props

		return (
			<RX.View
				style={[styles.container, style]}
			>
				<RX.Text style={styles.mealName}>{this.props.meal.name}</RX.Text>
				{/*<MoreButton onPress={() => {}} style={styles.moreButton}/>*/}
				{
					this.props.meal.items.map(mealItem => (
						<MealItem
							mealItem={mealItem}
						/>
					))
				}
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		flex: 1,
		backgroundColor: theme.colors.mealCardBackgroundColor,
		borderRadius: 25,
		borderColor: '#ECECEC',
		borderWidth: 1,
		marginBottom: 10,
	}),
	mealName: RX.Styles.createTextStyle({
		fontSize: 16,
		fontWeight: '500',
		marginLeft: 20,
		marginTop: 20,
	}),
	moreButton: RX.Styles.createViewStyle({
		position: 'absolute',
		top: 28,
		right: 20,
	})
}
