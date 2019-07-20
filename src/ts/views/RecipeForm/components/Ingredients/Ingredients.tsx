/*
 * Ingredients.tsx
 * Copyright: Ouranos Studio 2019
 */


import FilledButton from 'common/FilledButton/FilledButton'
import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
import { Ingredient } from 'src/ts/models/FoodModels'
import IngredientRow from 'src/ts/views/RecipeForm/components/Ingredients/components/IngredientRow/IngredientRow'

interface IngredientsProps {
	style?: any,
	ingredients: Ingredient[],
	onAddNewIngredient: () => void,
	onIngredientDelete: (id: string) => void,
	onIngredientChange: (key: any, ingredient: Ingredient) => void,
}

export default class Ingredients extends RX.Component<IngredientsProps> {
	render() {
		const { style } = this.props

		return (
			<RX.View
				style={[styles.container, style]}
			>
				{/*List current ones*/}
				{
					this.props.ingredients.map(ingredient => (
						<IngredientRow
							ingredient={ingredient}
							onIngredientChange={this.props.onIngredientChange}
							onDelete={this.props.onIngredientDelete}
						/>
					))
				}

				{/*Add new*/}

				<FilledButton label={'Add Ingredient'} onPress={this.props.onAddNewIngredient}
											containerStyle={{ marginTop: theme.styles.spacing }} />
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		//
	}),
}
