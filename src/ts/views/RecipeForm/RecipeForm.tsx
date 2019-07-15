/*
 * RecipeForm.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
import Navbar from 'common/Navbar/Navbar'
import {getLocalizedText} from 'common/LocalizedText'
import Ingredients from './components/Ingredients/Ingredients'
import Text from 'common/Text'
import {FoodTypes, Ingredient, Instruction, MealItem, Weight, Recipe} from 'src/ts/models/FoodModels'
import {showFoodModal} from 'common/FoodDialog/FoodDialog'
import Input from 'common/Input'
import Instructions from './components/Instructions/Instructions'
import FilledButton from 'common/FilledButton'
import {Mutation, MutationFn} from 'react-apollo'
import gql from 'graphql-tag'
import {RecipeFragment} from 'src/ts/models/GraphQLModels'
import FilePicker from 'common/FilePicker/FilePicker'
import Image from 'common/Image/Image'
import {PROFILE_RECIPES_QUERY} from 'src/ts/views/ProfileScreen/ProfileScreen'
import LocationStore from 'src/ts/stores/LocationStore'

const WINDOW_MAX_WIDTH = 975

interface RecipeFormProps {
	style?: any,
	recipe?: Recipe,
}

interface RecipeFormState {
	ingredientModalOpen: boolean,
	ingredients: Ingredient[],
	instructions: Instruction[],

	title: string,
	description: string,
	recipeYield?: number,
	totalTime?: number,
	prepTime?: number,
	cookTime?: number,
	slug: string,
	slugEdited: boolean,
	coverImage?: any,
	coverImagePreview?: any,
}

export default class RecipeForm extends RX.Component<RecipeFormProps, RecipeFormState> {
	constructor(props: RecipeFormProps) {
		super(props)

		if (props.recipe) {
			this.state = {
				ingredientModalOpen: false,
				ingredients: props.recipe.ingredients.map(ingredient => ({
					...ingredient,
					key: String(Math.random()),
				})),
				instructions: props.recipe.instructions,
				title: props.recipe.title,
				description: props.recipe.description || '',
				slug: props.recipe.slug,
				slugEdited: true,
				prepTime: props.recipe.timing.prepTime,
				cookTime: props.recipe.timing.cookTime,
				totalTime: props.recipe.timing.totalTime,
				recipeYield: props.recipe.yield,
				coverImage: undefined,
				coverImagePreview: props.recipe.coverImage ? props.recipe.coverImage.url : undefined,
			}
		} else {
			this.state = {
				ingredientModalOpen: false,
				ingredients: [],
				instructions: [],
				title: '',
				description: '',
				slug: '',
				slugEdited: false,
				prepTime: undefined,
				cookTime: undefined,
				totalTime: undefined,
				recipeYield: undefined,
				coverImage: undefined,
				coverImagePreview: undefined,
			}
		}
	}

	render() {
		const {style, recipe} = this.props

		const mutationField = recipe ? 'updateRecipe' : 'createRecipe'

		return (
			<RX.View
				style={[styles.container, style]}
			>
				<RX.ScrollView>
					{
						this.state.coverImagePreview &&
            <Image source={this.state.coverImagePreview} style={styles.coverImage} resizeMode={'cover'} />
					}
					<RX.View style={styles.innerContainer}>
						<FilePicker
							label={this.state.coverImagePreview ? 'Replace Image' : undefined}
							onImageChange={coverImage => {
								console.log('coverImage', coverImage)
								this.setState({coverImage})
							}}
							onImagePreviewChange={coverImagePreview => {
								this.setState({coverImagePreview})
							}}
						/>

						<Input
							label={getLocalizedText('Name')}
							value={this.state.title}
							onChange={(title: string) => this.setState({
								title,
								slug: this.state.slugEdited ? this.state.slug : this._generateSlug(title)
							})}
							style={styles.input}
						/>

						<Input
							label={getLocalizedText('Slug')}
							value={this.state.slug}
							onChange={(slug: string) => this.setState({slug, slugEdited: true})}
							style={styles.input}
						/>

						<Input
							label={getLocalizedText('Description')}
							autoGrow
							value={this.state.description}
							onChange={(description: string) => this.setState({description})}
							style={styles.input}
						/>

						{/*Ingredients*/}
						<Text translate>Ingredients</Text>
						<Ingredients
							ingredients={this.state.ingredients}
							onIngredientChange={this._onIngredientChange}
							onAddNewIngredient={() => showFoodModal({
								autoFocus: true,
								foodTypes: [FoodTypes.food],
								onDismiss: () => {
								},
								onSubmit: this._onIngredientAdd,
							})}
							onIngredientDelete={this._onIngredientDelete}
						/>
						{/*Instructions*/}
						<Text translate>Instructions</Text>
						<Instructions
							instructions={this.state.instructions}
							onAddNewInstruction={() => this.setState(prevState => ({
								instructions: [...prevState.instructions, {
									text: '',
									id: String(Math.random()),
									step: prevState.instructions.length + 1
								}]
							}))}
							onInstructionChange={this._onInstructionChange}
							onInstructionDelete={this._onInstructionDelete}
						/>
						<Input
							label={getLocalizedText('PreparationTime')}
							value={this.state.prepTime ? String(this.state.prepTime) : ''}
							onChange={(prepTime: string) => this.setState({prepTime: prepTime ? Number(prepTime) : undefined})}
							style={styles.input}
						/>
						<Input
							label={getLocalizedText('CookingTime')}
							value={this.state.cookTime ? String(this.state.cookTime) : ''}
							onChange={(cookTime: string) => this.setState({cookTime: cookTime ? Number(cookTime) : undefined})}
							style={styles.input}
						/>
						<Input
							label={getLocalizedText('TotalTime')}
							value={this.state.totalTime ? String(this.state.totalTime) : ''}
							onChange={(totalTime: string) => this.setState({totalTime: totalTime ? Number(totalTime) : undefined})}
							style={styles.input}
						/>
						<Input
							label={getLocalizedText('Yield')}
							value={this.state.recipeYield ? String(this.state.recipeYield) : ''}
							onChange={(recipeYield: string) => this.setState({recipeYield: recipeYield ? Number(recipeYield) : undefined})}
							style={styles.input}
						/>

						<Mutation
							key={recipe ? recipe.id : undefined}
							variables={{
								id: recipe ? recipe.id : undefined,
								recipe: this._getRecipe(),
							}}
							mutation={recipe ? UPDATE_QUERY : CREATE_QUERY}
							update={(cache, {data, data: {[mutationField]: fieldData}}) => {
								// @ts-ignore
								const {listMyRecipes} = cache.readQuery({query: PROFILE_RECIPES_QUERY})
								let recipes = [...listMyRecipes.recipes]
								if (recipe) {
									recipes = listMyRecipes.recipes.map((r: Recipe) => {
										if (r.id === recipe.id) {
											return Object.assign({}, r, fieldData)
										}

										return r
									})
								} else {
									recipes = [fieldData, ...recipes]
								}
								cache.writeQuery({
									query: PROFILE_RECIPES_QUERY,
									data: {
										listMyRecipes: {
											...listMyRecipes,
											recipes,
										},
									}
								})
							}}
						>
							{(mutate, {loading, error}) => (
								<FilledButton
									label={loading ? 'Loading' : 'Submit'}
									onPress={this._onSubmit(mutate)}
								/>
							)}
						</Mutation>
					</RX.View>
				</RX.ScrollView>

				<Navbar title={getLocalizedText('CreateRecipe')} />
			</RX.View>
		)
	}

	private _onSubmit = (mutate: MutationFn<any, any>) => () => {
		mutate()
			.then(() => {
				LocationStore.navigate(this.props, 'back')
			})
	}

	private _onIngredientDelete = (key: string) => {
		// CHECKME
		this.setState(prevState => ({
			ingredients: prevState.ingredients.filter(p => p.key !== key),
		}))
	}

	private _onIngredientAdd = (mealItem: MealItem, amount: number, weight?: Weight) => {
		const ingredients = [...this.state.ingredients]
		ingredients.push({
			key: mealItem.key,
			name: mealItem.title,
			thumbnail: mealItem.thumbnail,
			// description: mealItem.unitDescription,
			unit: mealItem.customUnit,
			amount,
			foodId: mealItem.id,
			weight,
		})
		this.setState({
			ingredients,
		})
	}

	private _onInstructionChange = (instruction: Instruction) => {
		const instructions = [...this.state.instructions]

		const foundInstruction = instructions.find(p => p.id === instruction.id)
		if (!foundInstruction) {
			console.error('Instruction not found')
			return
		}

		foundInstruction.text = instruction.text
		foundInstruction.image = instruction.image

		this.setState({instructions})
	}

	private _onInstructionDelete = (id: string) => {
		this.setState(prevState => ({
			instructions: prevState.instructions.filter(p => p.id !== id)
		}))
	}

	private _generateSlug = (title: string) => {
		return title.toLowerCase().replace(/ /g, '-')
	}

	private _getRecipe = () => {
		console.log('this.state.ingredients', this.state.ingredients)
		return {
			title: this.state.title,
			description: this.state.description,
			ingredients: this.state.ingredients.map(ingredient => ({
				foodId: ingredient.foodId,
				name: ingredient.name,
				amount: ingredient.amount,
				weightId: ingredient.weight ? ingredient.weight.id : undefined,
				customUnit: ingredient.unit,
				description: ingredient.description,
			})),
			instructions: this.state.instructions.map((instruction, index) => ({
				text: instruction.text,
				step: index + 1,
			})),
			yield: this.state.recipeYield,
			totalTime: this.state.totalTime,
			prepTime: this.state.prepTime,
			cookTime: this.state.cookTime,
			slug: this.state.slug,
			coverImage: this.state.coverImage,
		}
	}

	private _onIngredientChange = (key: any, ingredient: Ingredient) => {
		this.setState({
			ingredients: this.state.ingredients.map(i => {
				if (key && (i.key === key)) {
					return ingredient
				}

				return i
			})
		})
	}
}

const CREATE_QUERY = gql`
  mutation RecipeFormMutation($recipe: RecipeInput!) {
    createRecipe(recipe: $recipe) ${RecipeFragment}
  }
`
const UPDATE_QUERY = gql`
  mutation RecipeFormMutation($id: String!, $recipe: RecipeInput!) {
    updateRecipe(id: $id, recipe: $recipe) ${RecipeFragment}
  }
`

const styles = {
	container: RX.Styles.createViewStyle({
		padding: theme.styles.spacing * 2,
		paddingTop: theme.styles.navBarHeight,
		flex: 1,
		overflow: 'visible',
		maxWidth: WINDOW_MAX_WIDTH,
	}),
	innerContainer: RX.Styles.createViewStyle({
		// alignItems: 'flex-start',
	}),
	title: RX.Styles.createTextStyle({
		fontWeight: '500',
	}),
	input: RX.Styles.createTextInputStyle({
		// width: 200,
	}),
	coverImage: RX.Styles.createImageStyle({
		height: WINDOW_MAX_WIDTH / 2,
		borderRadius: 15,
		marginBottom: theme.styles.spacing,
	})
}
