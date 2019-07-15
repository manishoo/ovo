/*
 * Instructions.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
import {Instruction} from 'src/ts/models/FoodModels'
import Text from 'common/Text'

const Instructions = ({instructions = []}: { instructions: Instruction[] }) => (
	<RX.View>
		{
			instructions.map((instruction, index) => (
				<RX.View
					key={instruction.step}
					style={[styles.instructionStep, {backgroundColor: index % 2 == 0 ? '#f5f5f5' : '#fff'}]}
				>
					{/*
					{
						instruction.actionPhrases.map((ap, index2) => [
							<RX.View
								key={ap.action}
								style={[
									styles.instructionIngredientsContainer,
								]}
							>
								{
									ap.ingredients.map((ingredient) => (
										<IngredientItem
											key={ingredient.originalText}
											ingredient={ingredient}
											unitsVisible={false}
										/>
									))
								}
								{
									ap.utensil &&
									<UtensilItem
										utensil={ap.utensil}
										style={styles.utensilItem}
									/>
								}
							</RX.View>,
							<RX.Text style={styles.action}>
								{index + 1}){`${instruction.actionPhrases.length > 1 ? '.' + index2 + 1 : ''}`}
								<RX.Text style={[styles.actionText, ap.temperature ? {color: 'orange'} : {}]}>{ap.action}</RX.Text>
								<RX.Text style={styles.actionTextTemp}> {ap.temperature}</RX.Text>
							</RX.Text>,
						])
					}
*/}
					<Text style={styles.step}>{instruction.step}.</Text>
					<Text style={styles.originalText}>{instruction.text}</Text>
				</RX.View>
			))
		}
	</RX.View>
)

const styles = {
	instructionStep: RX.Styles.createViewStyle({
		padding: 20,
	}),
	instructionIngredientsContainer: RX.Styles.createViewStyle({
		flexDirection: 'row',
	}),
	utensilItem: RX.Styles.createViewStyle({
		position: 'absolute',
		// TODO: change this to multilingual
		right: 0,
		top: 0,
	}),
	action: RX.Styles.createTextStyle({
		fontSize: 25,
		fontWeight: 'bold',
	}),
	actionText: RX.Styles.createTextStyle({
		fontSize: 25,
		fontWeight: 'bold',
	}),
	actionTextTemp: RX.Styles.createTextStyle({
		fontSize: 12,
		fontWeight: '200',
	}),
	originalText: RX.Styles.createTextStyle({
		color: theme.colors.grey1
	}),
	step: RX.Styles.createTextStyle({
		// color: theme.colors.grey1
		fontWeight: 'bold',
	}),
}

export default Instructions