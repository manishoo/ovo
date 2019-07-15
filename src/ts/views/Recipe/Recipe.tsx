/*
 * Recipe.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import IngredientItem from 'src/ts/views/Recipe/components/IngredientItem'
import {Recipe as RecipeType, User} from 'src/ts/models/FoodModels'
import Navbar from 'common/Navbar/Navbar'
import theme from 'src/ts/app/Theme'
import {ComponentBase} from 'resub'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import Text from 'common/Text'
import Instructions from './components/Instructions'
import UserStore from 'src/ts/stores/UserStore'
import FilledButton from 'common/FilledButton'
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag'
import {navigate} from 'src/ts/utilities'
import Image from 'common/Image/Image'
// @ts-ignore
import moment from 'moment-jalali'
import AppConfig from 'src/ts/app/AppConfig'
import Link from 'common/Link/Link'
import {PROFILE_RECIPES_QUERY} from 'src/ts/views/ProfileScreen/ProfileScreen'
import LocationStore from 'src/ts/stores/LocationStore'
import {getLocalizedText} from 'common/LocalizedText'


interface RecipeProps extends RX.CommonProps {
	style?: any,
	recipe: RecipeType
}

interface RecipeState {
	windowHeight: number,
	windowWidth: number,
	isSmallOrTiny: boolean,
	user?: User,
}

export default class Recipe extends ComponentBase<RecipeProps, RecipeState> {
	render() {
		return (
			<RX.View style={{flex: 1}}>
				<RX.ScrollView
					style={[
						styles.container,
						{
							width: this._getWindowWidthConsideringDrawer(),
							padding: this.state.isSmallOrTiny ? 0 : theme.styles.spacing
						}
					]}
				>
					{this._renderControlBar()}
					<RX.View
						style={[
							styles.coverContainer,
							{
								height: this._getWindowWidthConsideringDrawer() / 2,
								borderRadius: this.state.isSmallOrTiny ? 0 : 20,
							}
						]}
					>
						<RX.Image
							source={this.props.recipe.coverImage ? this.props.recipe.coverImage.url : ''}
							resizeMode={'cover'}
							style={styles.coverImage}
						/>
					</RX.View>

					<RX.View style={styles.innerContainer}>
						<Text style={styles.title}>{this.props.recipe.title}</Text>

						{this._renderAuthorAndDescriptionSection()}

						{this._renderIngredientsSection()}

						{this._renderInstructionsSection()}

					</RX.View>

					<Navbar />
				</RX.ScrollView>
			</RX.View>
		)
	}

	private _renderIngredientsSection = () => {
		const recipe = this.props.recipe

		return (
			<RX.View style={styles.ingredients.container}>
				<RX.View style={{flexDirection: 'row'}}>
					<Text translate style={[styles.label, {[theme.styles.marginEnd]: theme.styles.spacing}]}>Ingredients</Text>
					<Text translate variables={{number: '2' /*TODO use state*/}} style={styles.subLabel}>IngredientsYieldLabel</Text>
				</RX.View>

				{
					recipe.ingredients.map((ingredient: any) => (
						<IngredientItem
							ingredient={ingredient}
							unitsVisible
							key={ingredient.name}
						/>
					))
				}
			</RX.View>
		)
	}

	private _renderInstructionsSection = () => {
		const recipe = this.props.recipe

		return (
			<RX.View style={styles.instructions.container}>
				<Text translate style={styles.label}>Instructions</Text>
				<Instructions instructions={recipe.instructions} />
			</RX.View>
		)
	}

	private _renderAuthorAndDescriptionSection = () => {
		const recipe = this.props.recipe

		return (
			<RX.View style={styles.authorAndDescriptionSection.container}>
				<RX.View style={{flexDirection: 'column', alignItems: 'center', marginBottom: theme.styles.spacing}}>
					<Link to={`/${recipe.author.username}/`}>
						<Image
							source={recipe.author.avatar.url}
							style={styles.authorAndDescriptionSection.avatar}
						/>
					</Link>
					<Text>{recipe.author.firstName || `${recipe.author.username}@`}</Text>
					{/*<RX.View style={{justifyContent: 'center'}}>
						<Text>{recipe.author.firstName || `${recipe.author.username}@`}</Text>
					</RX.View>*/}
				</RX.View>
				{
					!!recipe.description &&
          <Text>
            “{recipe.description}”
          </Text>
				}

				<Text
					style={styles.authorAndDescriptionSection.date}
				>
					{moment(recipe.createdAt).format(AppConfig.locale === 'en' ? 'jMMM jDo jYYYY' : 'jYYYY/jM/jD')}
				</Text>
			</RX.View>
		)
	}


	private _renderControlBar = () => {
    if (this.state.user && this.state.user.id === this.props.recipe.author.id) {
      return (
				<RX.View style={{flexDirection: 'row'}}>
					<Mutation
						variables={{
							recipeId: this.props.recipe.id,
						}}
						update={(cache) => {
							// @ts-ignore
							const {listMyRecipes} = cache.readQuery({query: PROFILE_RECIPES_QUERY})

							cache.writeQuery({
								query: PROFILE_RECIPES_QUERY,
								data: {
									listMyRecipes: {
										...listMyRecipes,
										recipes: listMyRecipes.recipes.filter((i: any) => i.id !== this.props.recipe.id)
									}
								}
							})
						}}
						mutation={gql`
							mutation RecipeDeleteMutation($recipeId: String!) {
								deleteRecipe(recipeId: $recipeId)
							}
						`}
					>
						{(mutate) => (
							<FilledButton label={'Delete Recipe'} onPress={() => RX.Alert.show(getLocalizedText('deleteRecipe?'), undefined, [{text: getLocalizedText('yes'), onPress: () => mutate().then(() => navigate(this.props, 'back'))}, {text: getLocalizedText('no')}])} />
						)}
					</Mutation>
					<FilledButton label={'Edit Recipe'} onPress={() => LocationStore.navigate(this.props, `/recipe/${this.props.recipe.slug}/edit`, {params: {}})} />
				</RX.View>
      )
    }

		return null
  }

  // private _handleRecipeDelete = () => {
  // 	alert('Delete Recipe')
  // }

	protected _buildState(props: RecipeProps, initialBuild: boolean): Partial<RecipeState> | undefined {
		return {
			windowHeight: ResponsiveWidthStore.getHeight(),
			windowWidth: ResponsiveWidthStore.getWidth(),
			isSmallOrTiny: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
			user: UserStore.getUser(),
		}
	}

	private _getMaximum1024 = (width: number) => (width > theme.styles.mainContentMaxWidth ? theme.styles.mainContentMaxWidth : width) // maximum 1024
	private _getWindowWidthConsideringDrawer = () => this._getMaximum1024(this.state.isSmallOrTiny ? this.state.windowWidth : this.state.windowWidth - theme.styles.drawerWidth)
}

const dashedTopLine = {
	borderTopWidth: 1,
	borderStyle: 'dashed',
	borderColor: theme.colors.recipeSeparatorBorderColor,
	padding: theme.styles.spacing * 2,
}

const styles = {
	container: RX.Styles.createViewStyle({
		flex: 1,
		// minHeight: 400,
		maxWidth: theme.styles.mainContentMaxWidth,
		alignSelf: 'center',

	}),
	innerContainer: RX.Styles.createViewStyle({
		padding: theme.styles.spacing,
	}),
	coverContainer: RX.Styles.createViewStyle({}),
	coverImage: RX.Styles.createImageStyle({
		flex: 1,
	}),
	title: RX.Styles.createTextStyle({
		fontSize: theme.fontSizes.size32,
		fontWeight: '500',
		marginBottom: 10,
	}),
	label: RX.Styles.createTextStyle({
		fontSize: 16,
		fontWeight: '500',
		marginBottom: 10,
	}),
	subLabel: RX.Styles.createTextStyle({
		fontSize: theme.fontSizes.size12,
		fontWeight: '300',
	}),
	authorAndDescriptionSection: {
		// @ts-ignore
		container: RX.Styles.createViewStyle({
			alignItems: 'flex-start',
			...dashedTopLine,
			paddingBottom: theme.styles.spacing * 4,
		}),
		avatar: RX.Styles.createImageStyle({
			width: 80,
			height: 80,
			borderRadius: 40,
		}),
		date: RX.Styles.createTextStyle({
			position: 'absolute',
			fontSize: theme.fontSizes.size12,
			fontWeight: '100',
			color: theme.colors.authorAndDescriptionSectionDateColor,
			bottom: theme.styles.spacing,
			[theme.styles.end]: theme.styles.spacing,
		}),
	},
	ingredients: {
		// @ts-ignore
		container: RX.Styles.createViewStyle({
			...dashedTopLine,
		})
	},
	instructions: {
		// @ts-ignore
		container: RX.Styles.createViewStyle({
			...dashedTopLine,
		})
	}
}