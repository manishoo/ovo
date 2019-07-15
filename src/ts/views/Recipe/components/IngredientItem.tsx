/*
 * IngredientItem.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import {Ingredient} from 'src/ts/models/FoodModels'
import theme from 'src/ts/app/Theme'
import Text from 'common/Text'

const IngredientItem = ({ingredient, unitsVisible = true}: {ingredient: Ingredient, unitsVisible: boolean}) => {
	function _getUnit() {
		if (ingredient.unit) {
			return ingredient.unit
		}

		if (ingredient.weight) {
			return ingredient.weight.description
		}

		return null
	}

	return (
		<RX.View
			style={styles.container}
		>
			{
				ingredient.thumbnail ?
					<RX.Image
						source={ingredient.thumbnail ? ingredient.thumbnail.url : ''}
						resizeMode={'cover'}
						style={styles.image}
					/> :
					<RX.View
						style={styles.image}
					>
						<Text>{ ingredient.name && ingredient.name[0] }</Text>
					</RX.View>
			}
			<Text style={styles.title}>{ingredient.name}</Text>
			{ unitsVisible && <Text style={styles.amountText}>{ingredient.amount} {_getUnit()}</Text> }
		</RX.View>
	)
}
const styles = {
	container: RX.Styles.createViewStyle({
		flexDirection: 'row',
		// justifyContent: 'center',
		alignItems: 'center',
		// paddingTop: 5,
		// paddingBottom: 5,
		// padding: 20,
	}),
	image: RX.Styles.createViewStyle({
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: '#ddd',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.styles.marginEnd]: theme.styles.spacing,
		marginVertical: theme.styles.spacingLarge / 4,
	}),
	title: RX.Styles.createTextStyle({
		[theme.styles.marginEnd]: theme.styles.spacingLarge,
	}),
	amountText: RX.Styles.createTextStyle({
		// color: theme.colors.ingredientUnit,
		marginLeft: theme.styles.spacing / 2,
	})
}

export default IngredientItem