/*
 * Recipe-backup.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import IngredientItem from 'src/ts/views/Recipe/components/IngredientItem'
import Instructions from 'src/ts/views/Recipe/components/Instructions'
import {fullWidth, getParam} from '../utilities'
import {Recipe as RecipeType} from 'src/ts/models/FoodModels'
import gql from 'graphql-tag'

interface RecipeProps {
	style?: any,
	recipe: RecipeType
}

function transformIngredients(ingredients) {
	return ingredients.map(ingr => {
		let data = {
			id: ingr.food && ingr.food.foodId,
			name: ingr.foods.join(' '),
			amount: ingr.amount,
			unit: ingr.unit,
			description: ingr.description,
		}
		if (ingr.food && ingr.food.foodImage) {
			data['image'] = {
				url: ingr.food.foodImage,
			}
		}
		return data
	})
}

const data = {
	recipe: {
		title: 'Fresh Broccoli Salad',
		servings: 3,
		coverImage: {
			url: 'https://images.media-allrecipes.com/userphotos/720x405/4550791.jpg'
		},
		'ingredients': transformIngredients([
			{
				'amount': '1 1/4',
				'unit': 'pounds',
				'amountAlt': null,
				'unitAlt': null,
				'foods': [
					'chicken',
					'breast',
					'halves'
				],
				'foodAdjectives': 'skinless , boneless',
				'description': null,
				'originalText': '1 1/4 pounds skinless , boneless chicken breast halves .',
				'parsedText': '1 1/4__CD pounds__UNIT skinless__VBP ,__, boneless__JJ chicken__FOOD breast__NN halves__NNS .__.',
				'food': {
					'originalName': 'chicken',
					'name': 'Chicken (Cock, Hen, Rooster)',
					'foodId': 334,
					'foodImage': 'http://foodb.ca/system/foods/pictures/334/full/334.png',
					'sourceDatabase': 'foodb'
				}
			},
			{
				'amount': '1',
				'unit': 'tablespoon',
				'amountAlt': null,
				'unitAlt': null,
				'foods': [
					'vegetable',
					'oil'
				],
				'foodAdjectives': null,
				'description': null,
				'originalText': '1 tablespoon vegetable oil .',
				'parsedText': '1__CD tablespoon__UNIT vegetable__FOOD oil__FOOD .__.',
				'food': {
					'originalName': 'oil',
					'name': 'Oil palm',
					'foodId': 605,
					'foodImage': 'http://foodb.ca/system/foods/pictures/605/full/605.png',
					'sourceDatabase': 'foodb'
				}
			},
			{
				'amount': '®',
				'unit': null,
				'amountAlt': null,
				'unitAlt': null,
				'foods': [
					'Campbell',
					'Cream',
					'Chicken',
					'Soup',
					'Campbell',
					'%',
					'Fat',
					'Free',
					'Cream',
					'Chicken',
					'Soup'
				],
				'foodAdjectives': 'Condensed',
				'description': null,
				'originalText': '1 can Campbell \'s ® Condensed Cream of Chicken Soup or Campbell \'s ® Condensed 98 % Fat Free Cream of Chicken Soup .',
				'parsedText': '1__LS can__MD Campbell__NNP \'s__POS ®__CD Condensed__JJ Cream__FOOD of__IN Chicken__FOOD Soup__FOOD or__CC Campbell__NNP \'s__POS ®__CD Condensed__JJ 98__CD %__NN Fat__FOOD Free__FOOD Cream__FOOD of__IN Chicken__FOOD Soup__FOOD .__.',
				'food': {
					'originalName': 'Soup',
					'name': 'Soup',
					'foodId': 692,
					'foodImage': 'http://foodb.ca/system/foods/pictures/692/full/692.png',
					'sourceDatabase': 'foodb'
				}
			},
			{
				'amount': '1 1/2',
				'unit': 'cups',
				'amountAlt': null,
				'unitAlt': null,
				'foods': [
					'water'
				],
				'foodAdjectives': null,
				'description': null,
				'originalText': '1 1/2 cups water .',
				'parsedText': '1 1/2__CD cups__UNIT water__FOOD .__.',
				'food': {
					'originalName': 'water',
					'name': 'Chinese water chestnut',
					'foodId': 337,
					'foodImage': 'http://foodb.ca/system/foods/pictures/337/full/337.png',
					'sourceDatabase': 'foodb'
				}
			},
			{
				'amount': '1/4',
				'unit': 'teaspoon',
				'amountAlt': null,
				'unitAlt': null,
				'foods': [
					'paprika'
				],
				'foodAdjectives': null,
				'description': null,
				'originalText': '1/4 teaspoon paprika .',
				'parsedText': '1/4__CD teaspoon__UNIT paprika__NN .__.',
				'food': {
					'originalName': 'paprika',
					'sourceDatabase': null
				}
			},
			{
				'amount': '1/4',
				'unit': 'teaspoon',
				'amountAlt': null,
				'unitAlt': null,
				'foods': [
					'ground',
					'pepper'
				],
				'foodAdjectives': 'black',
				'description': null,
				'originalText': '1/4 teaspoon ground black pepper .',
				'parsedText': '1/4__CD teaspoon__UNIT ground__FOOD black__JJ pepper__FOOD .__.',
				'food': {
					'originalName': 'pepper',
					'name': 'Pepper (Spice)',
					'foodId': 139,
					'foodImage': 'http://foodb.ca/system/foods/pictures/139/full/139.png',
					'sourceDatabase': 'foodb'
				}
			},
			{
				'amount': '2',
				'unit': 'cups',
				'amountAlt': null,
				'unitAlt': null,
				'foods': [
					'instant',
					'rice'
				],
				'foodAdjectives': 'uncooked',
				'description': null,
				'originalText': '2 cups uncooked instant white rice .',
				'parsedText': '2__CD cups__UNIT uncooked__JJ instant__NN white__JJ rice__FOOD .__.',
				'food': {
					'originalName': 'rice',
					'name': 'Rice',
					'foodId': 125,
					'foodImage': 'http://foodb.ca/system/foods/pictures/125/full/125.png',
					'sourceDatabase': 'foodb'
				}
			},
			{
				'amount': '2',
				'unit': 'cups',
				'amountAlt': null,
				'unitAlt': null,
				'foods': [
					'broccoli',
					'florets'
				],
				'foodAdjectives': 'fresh or frozen',
				'description': null,
				'originalText': '2 cups fresh or frozen broccoli florets .',
				'parsedText': '2__CD cups__UNIT fresh__JJ or__CC frozen__JJ broccoli__FOOD florets__NNS .__.',
				'food': {
					'originalName': 'broccoli',
					'name': 'Broccoli',
					'foodId': 34,
					'foodImage': 'http://foodb.ca/system/foods/pictures/34/full/34.png',
					'sourceDatabase': 'foodb'
				}
			}
		]),
		'instructions': [
			{
				'actionPhrases': [
					{
						'action': 'Season',
						'utensil': null,
						'ingredients': [
							{
								'amount': '1 1/4',
								'unit': 'pounds',
								'amountAlt': null,
								'unitAlt': null,
								'foods': [
									'chicken',
									'breast',
									'halves'
								],
								'foodAdjectives': 'skinless , boneless',
								'description': null,
								'originalText': '1 1/4 pounds skinless , boneless chicken breast halves .',
								'parsedText': '1 1/4__CD pounds__UNIT skinless__VBP ,__, boneless__JJ chicken__FOOD breast__NN halves__NNS .__.',
								'food': {
									'originalName': 'chicken',
									'name': 'Chicken (Cock, Hen, Rooster)',
									'foodId': 334,
									'foodImage': 'http://foodb.ca/system/foods/pictures/334/full/334.png',
									'sourceDatabase': 'foodb'
								}
							}
						],
						'recipient': null,
						'temperature': null
					}
				],
				'duration': null,
				'parsedText': 'Season__VB the__DT chicken__FOOD as__IN desired__VBN .__.',
				'originalText': 'Season the chicken as desired .'
			},
			{
				'actionPhrases': [
					{
						'action': 'Heat',
						'utensil': {
							'utensilId': '5beaed43f2d0e6980cf9d7d8',
							'name': 'skillet'
						},
						'ingredients': [
							{
								'amount': '1',
								'unit': 'tablespoon',
								'amountAlt': null,
								'unitAlt': null,
								'foods': [
									'vegetable',
									'oil'
								],
								'foodAdjectives': null,
								'description': null,
								'originalText': '1 tablespoon vegetable oil .',
								'parsedText': '1__CD tablespoon__UNIT vegetable__FOOD oil__FOOD .__.',
								'food': {
									'originalName': 'oil',
									'name': 'Oil palm',
									'foodId': 605,
									'foodImage': 'http://foodb.ca/system/foods/pictures/605/full/605.png',
									'sourceDatabase': 'foodb'
								}
							}
						],
						'recipient': null,
						'temperature': 'over medium-high heat'
					}
				],
				'duration': null,
				'parsedText': 'Heat__VB the__DT oil__FOOD in__IN a__DT 12-inch__JJ skillet__TOOL over__IN medium-high__JJ heat__TEMP_UNIT .__.',
				'originalText': 'Heat the oil in a 12-inch skillet over medium-high heat .'
			},
			{
				'actionPhrases': [
					{
						'action': 'Add',
						'utensil': null,
						'ingredients': [
							{
								'amount': '1 1/4',
								'unit': 'pounds',
								'amountAlt': null,
								'unitAlt': null,
								'foods': [
									'chicken',
									'breast',
									'halves'
								],
								'foodAdjectives': 'skinless , boneless',
								'description': null,
								'originalText': '1 1/4 pounds skinless , boneless chicken breast halves .',
								'parsedText': '1 1/4__CD pounds__UNIT skinless__VBP ,__, boneless__JJ chicken__FOOD breast__NN halves__NNS .__.',
								'food': {
									'originalName': 'chicken',
									'name': 'Chicken (Cock, Hen, Rooster)',
									'foodId': 334,
									'foodImage': 'http://foodb.ca/system/foods/pictures/334/full/334.png',
									'sourceDatabase': 'foodb'
								}
							}
						],
						'recipient': null,
						'temperature': null
					}
				],
				'duration': '10 minute',
				'parsedText': 'Add__VB the__DT chicken__FOOD and__CC cook__NN for__IN 10__CD minutes__NNS or__CC until__IN well__RB browned__JJ on__IN both__DT sides__NNS .__.',
				'originalText': 'Add the chicken and cook for 10 minutes or until well browned on both sides .'
			},
			{
				'actionPhrases': [
					{
						'action': 'Remove',
						'utensil': {
							'utensilId': '5beaed43f2d0e6980cf9d7d8',
							'name': 'skillet'
						},
						'ingredients': [
							{
								'amount': '1 1/4',
								'unit': 'pounds',
								'amountAlt': null,
								'unitAlt': null,
								'foods': [
									'chicken',
									'breast',
									'halves'
								],
								'foodAdjectives': 'skinless , boneless',
								'description': null,
								'originalText': '1 1/4 pounds skinless , boneless chicken breast halves .',
								'parsedText': '1 1/4__CD pounds__UNIT skinless__VBP ,__, boneless__JJ chicken__FOOD breast__NN halves__NNS .__.',
								'food': {
									'originalName': 'chicken',
									'name': 'Chicken (Cock, Hen, Rooster)',
									'foodId': 334,
									'foodImage': 'http://foodb.ca/system/foods/pictures/334/full/334.png',
									'sourceDatabase': 'foodb'
								}
							}
						],
						'recipient': null,
						'temperature': null
					}
				],
				'duration': null,
				'parsedText': 'Remove__VB the__DT chicken__FOOD from__IN the__DT skillet__TOOL .__.',
				'originalText': 'Remove the chicken from the skillet .'
			},
			{
				'actionPhrases': [
					{
						'action': 'Stir',
						'utensil': {
							'utensilId': '5beaed43f2d0e6980cf9d7d8',
							'name': 'skillet'
						},
						'ingredients': [
							{
								'amount': '®',
								'unit': null,
								'amountAlt': null,
								'unitAlt': null,
								'foods': [
									'Campbell',
									'Cream',
									'Chicken',
									'Soup',
									'Campbell',
									'%',
									'Fat',
									'Free',
									'Cream',
									'Chicken',
									'Soup'
								],
								'foodAdjectives': 'Condensed',
								'description': null,
								'originalText': '1 can Campbell \'s ® Condensed Cream of Chicken Soup or Campbell \'s ® Condensed 98 % Fat Free Cream of Chicken Soup .',
								'parsedText': '1__LS can__MD Campbell__NNP \'s__POS ®__CD Condensed__JJ Cream__FOOD of__IN Chicken__FOOD Soup__FOOD or__CC Campbell__NNP \'s__POS ®__CD Condensed__JJ 98__CD %__NN Fat__FOOD Free__FOOD Cream__FOOD of__IN Chicken__FOOD Soup__FOOD .__.',
								'food': {
									'originalName': 'Soup',
									'name': 'Soup',
									'foodId': 692,
									'foodImage': 'http://foodb.ca/system/foods/pictures/692/full/692.png',
									'sourceDatabase': 'foodb'
								}
							},
							{
								'amount': '1 1/2',
								'unit': 'cups',
								'amountAlt': null,
								'unitAlt': null,
								'foods': [
									'water'
								],
								'foodAdjectives': null,
								'description': null,
								'originalText': '1 1/2 cups water .',
								'parsedText': '1 1/2__CD cups__UNIT water__FOOD .__.',
								'food': {
									'originalName': 'water',
									'name': 'Chinese water chestnut',
									'foodId': 337,
									'foodImage': 'http://foodb.ca/system/foods/pictures/337/full/337.png',
									'sourceDatabase': 'foodb'
								}
							},
							{
								'amount': '1/4',
								'unit': 'teaspoon',
								'amountAlt': null,
								'unitAlt': null,
								'foods': [
									'paprika'
								],
								'foodAdjectives': null,
								'description': null,
								'originalText': '1/4 teaspoon paprika .',
								'parsedText': '1/4__CD teaspoon__UNIT paprika__NN .__.',
								'food': {
									'originalName': 'paprika',
									'sourceDatabase': null
								}
							},
							{
								'amount': '1/4',
								'unit': 'teaspoon',
								'amountAlt': null,
								'unitAlt': null,
								'foods': [
									'ground',
									'pepper'
								],
								'foodAdjectives': 'black',
								'description': null,
								'originalText': '1/4 teaspoon ground black pepper .',
								'parsedText': '1/4__CD teaspoon__UNIT ground__FOOD black__JJ pepper__FOOD .__.',
								'food': {
									'originalName': 'pepper',
									'name': 'Pepper (Spice)',
									'foodId': 139,
									'foodImage': 'http://foodb.ca/system/foods/pictures/139/full/139.png',
									'sourceDatabase': 'foodb'
								}
							}
						],
						'recipient': null,
						'temperature': null
					}
				],
				'duration': null,
				'parsedText': 'Stir__VB the__DT soup__FOOD ,__, water__FOOD ,__, paprika__NN and__CC black__JJ pepper__FOOD in__IN the__DT skillet__TOOL and__CC heat__TEMP_UNIT to__TO a__DT boil__NN .__.',
				'originalText': 'Stir the soup , water , paprika and black pepper in the skillet and heat to a boil .'
			},
			{
				'actionPhrases': [
					{
						'action': 'Stir',
						'utensil': null,
						'ingredients': [
							{
								'amount': '2',
								'unit': 'cups',
								'amountAlt': null,
								'unitAlt': null,
								'foods': [
									'instant',
									'rice'
								],
								'foodAdjectives': 'uncooked',
								'description': null,
								'originalText': '2 cups uncooked instant white rice .',
								'parsedText': '2__CD cups__UNIT uncooked__JJ instant__NN white__JJ rice__FOOD .__.',
								'food': {
									'originalName': 'rice',
									'name': 'Rice',
									'foodId': 125,
									'foodImage': 'http://foodb.ca/system/foods/pictures/125/full/125.png',
									'sourceDatabase': 'foodb'
								}
							},
							{
								'amount': '2',
								'unit': 'cups',
								'amountAlt': null,
								'unitAlt': null,
								'foods': [
									'broccoli',
									'florets'
								],
								'foodAdjectives': 'fresh or frozen',
								'description': null,
								'originalText': '2 cups fresh or frozen broccoli florets .',
								'parsedText': '2__CD cups__UNIT fresh__JJ or__CC frozen__JJ broccoli__FOOD florets__NNS .__.',
								'food': {
									'originalName': 'broccoli',
									'name': 'Broccoli',
									'foodId': 34,
									'foodImage': 'http://foodb.ca/system/foods/pictures/34/full/34.png',
									'sourceDatabase': 'foodb'
								}
							}
						],
						'recipient': null,
						'temperature': null
					}
				],
				'duration': null,
				'parsedText': 'Stir__VB in__IN the__DT rice__FOOD and__CC broccoli__FOOD .__.',
				'originalText': 'Stir in the rice and broccoli .'
			},
			{
				'actionPhrases': [
					{
						'action': 'Reduce',
						'utensil': null,
						'ingredients': [],
						'recipient': null,
						'temperature': 'heat'
					}
				],
				'duration': null,
				'parsedText': 'Reduce__VB the__DT heat__TEMP_UNIT to__TO low__JJ .__.',
				'originalText': 'Reduce the heat to low .'
			},
			{
				'actionPhrases': [
					{
						'action': 'Return',
						'utensil': {
							'utensilId': '5beaed43f2d0e6980cf9d7d8',
							'name': 'skillet'
						},
						'ingredients': [
							{
								'amount': '1 1/4',
								'unit': 'pounds',
								'amountAlt': null,
								'unitAlt': null,
								'foods': [
									'chicken',
									'breast',
									'halves'
								],
								'foodAdjectives': 'skinless , boneless',
								'description': null,
								'originalText': '1 1/4 pounds skinless , boneless chicken breast halves .',
								'parsedText': '1 1/4__CD pounds__UNIT skinless__VBP ,__, boneless__JJ chicken__FOOD breast__NN halves__NNS .__.',
								'food': {
									'originalName': 'chicken',
									'name': 'Chicken (Cock, Hen, Rooster)',
									'foodId': 334,
									'foodImage': 'http://foodb.ca/system/foods/pictures/334/full/334.png',
									'sourceDatabase': 'foodb'
								}
							}
						],
						'recipient': null,
						'temperature': null
					}
				],
				'duration': null,
				'parsedText': 'Return__VB the__DT chicken__FOOD to__TO the__DT skillet__TOOL .__.',
				'originalText': 'Return the chicken to the skillet .'
			},
			{
				'actionPhrases': [
					{
						'action': 'Sprinkle',
						'utensil': null,
						'ingredients': [
							{
								'amount': '1 1/4',
								'unit': 'pounds',
								'amountAlt': null,
								'unitAlt': null,
								'foods': [
									'chicken',
									'breast',
									'halves'
								],
								'foodAdjectives': 'skinless , boneless',
								'description': null,
								'originalText': '1 1/4 pounds skinless , boneless chicken breast halves .',
								'parsedText': '1 1/4__CD pounds__UNIT skinless__VBP ,__, boneless__JJ chicken__FOOD breast__NN halves__NNS .__.',
								'food': {
									'originalName': 'chicken',
									'name': 'Chicken (Cock, Hen, Rooster)',
									'foodId': 334,
									'foodImage': 'http://foodb.ca/system/foods/pictures/334/full/334.png',
									'sourceDatabase': 'foodb'
								}
							},
							{
								'amount': '1/4',
								'unit': 'teaspoon',
								'amountAlt': null,
								'unitAlt': null,
								'foods': [
									'paprika'
								],
								'foodAdjectives': null,
								'description': null,
								'originalText': '1/4 teaspoon paprika .',
								'parsedText': '1/4__CD teaspoon__UNIT paprika__NN .__.',
								'food': {
									'originalName': 'paprika',
									'sourceDatabase': null
								}
							}
						],
						'recipient': null,
						'temperature': null
					}
				],
				'duration': null,
				'parsedText': 'Sprinkle__VB the__DT chicken__FOOD with__IN additional__JJ paprika__NN .__.',
				'originalText': 'Sprinkle the chicken with additional paprika .'
			},
			{
				'actionPhrases': [
					{
						'action': 'Cover and cook',
						'utensil': null,
						'ingredients': [],
						'recipient': null,
						'temperature': null
					}
				],
				'duration': '5 minute',
				'parsedText': 'Cover__VB and__CC cook__VB for__IN 5__CD minutes__NNS or__CC until__IN the__DT chicken__FOOD is__VBZ cooked__VBN through__IN .__.',
				'originalText': 'Cover and cook for 5 minutes or until the chicken is cooked through .'
			},
			{
				'actionPhrases': [
					{
						'action': 'Season',
						'utensil': null,
						'ingredients': [],
						'recipient': null,
						'temperature': null
					}
				],
				'duration': null,
				'parsedText': 'Season__VB to__TO taste__NN .__.',
				'originalText': 'Season to taste .'
			}
		].map((inst) => {
			inst.actionPhrases = inst.actionPhrases.map(i => {
				i.ingredients = transformIngredients(i.ingredients)
				return i
			})
			inst.originalText = inst.originalText.replace(/ \.$/, '')
			return inst
		})
	}
}

const QUERY = gql`
  query RecipeInfo($id: ID!) {
    recipe(id: $id) {
      title
      coverImage {
        url
      }
      images {
        url
      }
      ingredients {
        image {
          url
        }
        id
        name
        amount
        unit
        # description
      }
      # instructions {
      #   actions {
      #     actionName
      #     ingredient {
      #       id
      #       name
      #       image
      #       amount
      #       unit
      #     }
      #     utensil {
      #       image
      #       name
      #       id
      #     }
      #     recipient
      #   }
      # }
    }
  }
`

export default class Recipe extends RX.Component<RecipeProps> {
	componentDidMount(): void {
		const recipeId = getParam(this.props, 'recipeId')
	}

	render() {
		const {style} = this.props

		return (
			<RX.ScrollView
				style={styles.container}
			>
				<RX.View
					style={styles.coverContainer}
				>
					{
						data.recipe.coverImage &&
            <RX.Image
              source={data.recipe.coverImage.url}
              style={styles.coverImage}
            />
					}
				</RX.View>

				<RX.Text style={RX.Styles.createTextStyle({fontSize: 30})}>{data.recipe.title}</RX.Text>

				{/*<RX.Text style={RX.Styles.createTextStyle({fontSize: 20})}>Ingredients</RX.Text>*/}

				<RX.View
					style={RX.Styles.createViewStyle({
						flexDirection: 'row',
						flexWrap: 'wrap',
					})}
				>
					{
						data.recipe.ingredients.map((ingredient: any) => (
							<IngredientItem
								ingredient={ingredient}
								key={ingredient.name}
							/>
						))
					}
				</RX.View>
				{/*<RX.Text style={RX.Styles.createTextStyle({fontSize: 20})}>Instructions</RX.Text>*/}
				{/*<Instructions instructions={data.recipe.instructions} />*/}
			</RX.ScrollView>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		// flex: 1
		// minHeight: 400,
	}),
	coverContainer: RX.Styles.createViewStyle({
		height: 215,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		backgroundColor: 'transparent'
	}),
	coverImage: RX.Styles.createImageStyle({
		flex: 1,
		width: fullWidth(),
	})
}