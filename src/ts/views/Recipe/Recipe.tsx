/*
 * Recipe.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useQuery } from '@apollo/react-hooks'
import CenterAlignedPageView from 'common/CenterAlignedPageView'
import FilledButton from 'common/FilledButton/FilledButton'
import SelectFoodContainer from 'common/FoodDialog/SelectFood'
import Image from 'common/Image/Image'
import Link from 'common/Link/Link'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import Navbar from 'common/Navbar/Navbar'
import IngredientCard from 'common/recipe/IngredientCard/IngredientCard'
import Text from 'common/Text/Text'
import gql from 'graphql-tag'
// @ts-ignore
import moment from 'moment-jalali'
import { Mutation } from 'react-apollo'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import AppConfig from 'src/ts/app/AppConfig'
import Styles from 'src/ts/app/Styles'
import { Theme } from 'src/ts/app/Theme'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { Role } from 'src/ts/models/global-types'
import LocationStore from 'src/ts/stores/LocationStore'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import UserStore from 'src/ts/stores/UserStore'
import { getParam, navigate } from 'src/ts/utilities'
import trimTypeName from 'src/ts/utilities/trim-type-name'
import { PROFILE_RECIPES_QUERY } from 'src/ts/views/ProfileScreen/components/ProfileRecipes/ProfileRecipes'
import {
  ProfileRecipesQuery,
  ProfileRecipesQueryVariables
} from 'src/ts/views/ProfileScreen/components/ProfileRecipes/types/ProfileRecipesQuery'
import IngredientServingControl from 'src/ts/views/Recipe/components/IngredientServingControl'
import { PublicRecipe } from 'src/ts/views/Recipe/types/PublicRecipe'
import { RecipeDeleteMutation, RecipeDeleteMutationVariables } from 'src/ts/views/Recipe/types/RecipeDeleteMutation'
import { RecipeQuery, RecipeQueryVariables } from 'src/ts/views/Recipe/types/RecipeQuery'
import { Me } from 'src/ts/views/Register/types/Me'
import Instructions from './components/Instructions'


interface RecipeProps extends RX.CommonProps {
  style?: any,
  recipe: PublicRecipe
}

interface RecipeState {
  windowHeight: number,
  windowWidth: number,
  isSmallOrTiny: boolean,
  user?: Me,
  serving: number,
}

class Recipe extends ComponentBase<RecipeProps, RecipeState> {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <CenterAlignedPageView>
            <Navbar>
              {this._renderControlBar()}
            </Navbar>

            {
              this.props.recipe.image &&
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
                  source={this.props.recipe.image.url}
                  resizeMode={'cover'}
                  style={styles.image}
                />
              </RX.View>
            }

            <RX.View style={styles.innerContainer}>
              <Text style={styles.title} translations={this.props.recipe.title} />

              {this._renderAuthorAndDescriptionSection(theme)}

              {this._renderRecipeTimingAndComplexity(theme)}

              {this._renderIngredientsSection(theme)}

              {this._renderInstructionsSection(theme)}

              {this._renderNutritionInfo(theme)}

            </RX.View>
          </CenterAlignedPageView>
        )}
      </ThemeContext.Consumer>
    )
  }

  protected _buildState(props: RecipeProps, initialBuild: boolean): Partial<RecipeState> | undefined {
    return {
      windowHeight: ResponsiveWidthStore.getHeight(),
      windowWidth: ResponsiveWidthStore.getWidth(),
      isSmallOrTiny: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
      user: UserStore.getUser(),
      serving: props.recipe.serving,
    }
  }

  private _renderRecipeTimingAndComplexity = (theme: Theme) => {
    const recipe = this.props.recipe

    return (
      <RX.View style={[styles.instructions.container, { borderColor: theme.colors.recipeSeparatorBorderColor }]}>
        {
          recipe.difficulty && [
            <Text translate style={styles.label}>Complexity</Text>,
            <Text type={Text.types.body} style={{ marginBottom: Styles.values.spacing * 2 }}>{recipe.difficulty}</Text>
          ]
        }

        {(Object.keys(recipe.timing).length > 0) && <Text translate style={styles.label}>Timing</Text>}
        {
          recipe.timing.prepTime !== null &&
          <Text
            type={Text.types.body}
            style={{ marginBottom: 5 }}
          >{getLocalizedText('prepTime')}: {recipe.timing.prepTime}</Text>
        }
        {
          recipe.timing.cookTime !== null &&
          <Text
            type={Text.types.body}
            style={{ marginBottom: 5 }}
          >{getLocalizedText('cookTime')}: {recipe.timing.cookTime}</Text>
        }
        {
          recipe.timing.totalTime !== null &&
          <Text
            type={Text.types.body}
            style={{ marginBottom: 5 }}
          >{getLocalizedText('totalTime')}: {recipe.timing.totalTime}</Text>
        }
      </RX.View>
    )
  }

  private _renderNutritionInfo = (theme: Theme) => {
    const recipe = this.props.recipe

    if (Object.values(trimTypeName(recipe.nutrition)).filter(Boolean).length === 0) return null

    const carbs = (recipe.nutrition.totalCarbs || recipe.nutrition.totalAvailableCarbs || recipe.nutrition.carbsByDifference)

    return (
      <RX.View style={[styles.ingredients.container, { borderColor: theme.colors.recipeSeparatorBorderColor }]}>
        <RX.View>
          <Text
            translate
            type={Text.types.title}
            style={[styles.label, { [Styles.values.marginEnd]: Styles.values.spacing }]}
          >Nutrition (per serving)</Text>

          <Text
            type={Text.types.body}
            style={{ marginBottom: 5 }}
          >{getLocalizedText('calories')}: {recipe.nutrition.calories.amount.toFixed()} {recipe.nutrition.calories.unit}</Text>
          <Text
            type={Text.types.body}
            style={{ marginBottom: 5 }}
          >{getLocalizedText('proteins')}: {recipe.nutrition.proteins.amount.toFixed()} {recipe.nutrition.proteins.unit}</Text>
          <Text
            type={Text.types.body}
            style={{ marginBottom: 5 }}
          >{getLocalizedText('totalCarbs')}: {carbs.amount.toFixed()} {carbs.unit}</Text>
          <Text
            type={Text.types.body}
            style={{ marginBottom: 5 }}
          >{getLocalizedText('fats')}: {recipe.nutrition.fats.amount.toFixed()} {recipe.nutrition.fats.unit}</Text>
        </RX.View>
      </RX.View>
    )
  }

  private _renderIngredientsSection = (theme: Theme) => {
    const recipe = this.props.recipe

    return (
      <RX.View style={[styles.ingredients.container, { borderColor: theme.colors.recipeSeparatorBorderColor }]}>
        <RX.View style={{ flexDirection: 'row' }}>
          <Text translate type={Text.types.title}
                style={[styles.label, { [Styles.values.marginEnd]: Styles.values.spacing }]}>Ingredients</Text>
          <IngredientServingControl
            serving={this.state.serving || recipe.serving}
            onServingChange={serving => serving > 0 && this.setState({ serving })}
          />
        </RX.View>

        <RX.View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {
            recipe.ingredients.map(ingredient => (
              <IngredientCard
                // key={ingredient.i}
                onPress={ingredient.food ? () => LocationStore.navigate(this.props, `/food/${ingredient.food.id}/`) : undefined}
                ingredient={{
                  ...ingredient,
                  amount: (ingredient.amount / recipe.serving) * this.state.serving,
                }}
                size={200}
              />
            ))
          }
        </RX.View>
      </RX.View>
    )
  }

  private _renderInstructionsSection = (theme: Theme) => {
    const recipe = this.props.recipe

    return (
      <RX.View style={[styles.instructions.container, { borderColor: theme.colors.recipeSeparatorBorderColor }]}>
        <Text translate style={styles.label}>Instructions</Text>
        <Instructions instructions={recipe.instructions} />
      </RX.View>
    )
  }

  private _renderAuthorAndDescriptionSection = (theme: Theme) => {
    const recipe = this.props.recipe

    const authorName = this._getAuthorName({ firstName: recipe.author.firstName, lastName: recipe.author.lastName })

    return (
      <RX.View
        style={[styles.authorAndDescriptionSection.container, { borderColor: theme.colors.recipeSeparatorBorderColor }]}>
        <RX.View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: Styles.values.spacing }}>
          <Link to={`/${recipe.author.username}`}>
            <Image
              source={recipe.author.avatar!.url}
              style={styles.authorAndDescriptionSection.avatar}
            />
          </Link>

          <RX.View style={{ [Styles.values.marginStart]: Styles.values.spacing }}>
            {
              authorName &&
              <Text style={{ fontSize: 16, paddingBottom: Styles.values.spacing / 2 }}>{authorName}</Text>
            }
            <Link to={`/${recipe.author.username}`}>
              <Text onPress={() => {
              }}>{`@${recipe.author.username}`}</Text>
            </Link>
            {
              recipe.author.bio &&
              <Text type={Text.types.subtitle}
                    style={{ fontSize: 12, paddingTop: Styles.values.spacing / 2 }}>{recipe.author.bio}</Text>
            }
          </RX.View>
        </RX.View>
        {
          !!recipe.description && recipe.description.length > 0 &&
          <Text
            type={Text.types.body}
            style={{ marginBottom: Styles.values.spacing }}
          >
            “{<Text type={Text.types.body} translations={recipe.description} />}”
          </Text>
        }

        <Text
          style={[styles.authorAndDescriptionSection.date, { color: theme.colors.authorAndDescriptionSectionDateColor }]}
        >
          {moment(recipe.createdAt).format(AppConfig.locale === 'fa' ? 'jYYYY/jMM/jDD hh:mm' : 'YYYY/MM/DD hh:mm')}
        </Text>
      </RX.View>
    )
  }

  private _getAuthorName = (user: { firstName, lastName }) => {
    if (!user.firstName && !user.lastName) return null

    let name = ''
    if (user.firstName) {
      name += user.firstName
    }
    if (user.lastName) {
      if (name.length > 0) {
        name += ` ${user.lastName}`
      } else {
        name += user.lastName
      }
    }
    return name
  }

  private _renderControlBar = () => {
    if (this.state.user && ((this.state.user.id === this.props.recipe.author.id) || (this.state.user.role === Role.operator))) {
      return (
        <RX.View style={{ flexDirection: 'row' }}>
          <Mutation<RecipeDeleteMutation, RecipeDeleteMutationVariables>
            variables={{
              recipeId: this.props.recipe.id,
            }}
            update={(cache) => {
              const { recipes } = cache.readQuery<ProfileRecipesQuery, ProfileRecipesQueryVariables>({
                query: PROFILE_RECIPES_QUERY,
                variables: {
                  userId: this.state.user && this.state.user.id,
                  size: 20,
                }
              })

              cache.writeQuery<ProfileRecipesQuery, ProfileRecipesQueryVariables>({
                query: PROFILE_RECIPES_QUERY,
                data: {
                  recipes: {
                    ...recipes,
                    recipes: recipes.recipes.filter(i => i.id !== this.props.recipe.id)
                  }
                },
                variables: {
                  userId: this.state.user && this.state.user.id,
                  size: 20,
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
              <FilledButton
                label={'Delete Recipe'}
                mode={FilledButton.mode.danger}
                onPress={() => RX.Alert.show(getLocalizedText('deleteRecipe?'), undefined, [{
                  text: getLocalizedText('yes'),
                  onPress: () => mutate().then(() => navigate(this.props, 'back'))
                }, { text: getLocalizedText('no') }])}
              />
            )}
          </Mutation>
          <FilledButton
            label={'Edit Recipe'}
            onPress={() => LocationStore.navigate(this.props, `/recipe/${this.props.recipe.slug}/edit`, { params: {} })}
            style={{
              [Styles.values.marginStart]: Styles.values.spacing / 2
            }}
          />
        </RX.View>
      )
    }

    return null
  }

  private _getMaximum1024 = (width: number) => (width > Styles.values.mainContentMaxWidth ? Styles.values.mainContentMaxWidth : width) // maximum 1024
  private _getWindowWidthConsideringDrawer = () => this._getMaximum1024(this.state.isSmallOrTiny ? this.state.windowWidth : this.state.windowWidth - Styles.values.drawerWidth)
}

export default function RecipeContainer(props: RecipeProps) {
  const { data, loading, error } = useQuery<RecipeQuery, RecipeQueryVariables>(gql`
    query RecipeQuery($slug: String!) {
      recipe(slug: $slug) {
        ...PublicRecipe
      }
    }

    ${RecipeContainer.fragments.recipe}
  `, {
    fetchPolicy: 'cache-and-network',
    variables: {
      slug: getParam(props, 'slug'),
    }
  })

  return (
    <RX.View>
      {!!data && !!data.recipe && <Recipe recipe={data.recipe} />}
      {!!loading && <RX.Text>Loading</RX.Text>}
      {!!error && <RX.Text>Error</RX.Text>}
    </RX.View>
  )
}

RecipeContainer.fragments = {
  recipe: gql`
    fragment PublicRecipe on Recipe {
      id
      title {
        text
        locale
      }
      serving
      slug
      author {
        id
        username
        firstName
        lastName
        bio
        avatar { url }
      }
      likesCount
      userLikedRecipe
      timing {
        prepTime
        cookTime
        totalTime
      }
      ingredients { ...IngredientCardIngredient }
      instructions {
        step
        text { text locale }
        image { url }
        notes { text locale }
      }
      nutrition {
        calories {...NutrientUnit}
        proteins {...NutrientUnit}
        totalCarbs {...NutrientUnit}
        totalAvailableCarbs {...NutrientUnit}
        carbsByDifference {...NutrientUnit}
        fats {...NutrientUnit}
      }
      difficulty
      description { text locale }
      image { url }
      createdAt
      updatedAt
    }

    fragment NutrientUnit on NutrientUnit {
      amount
      id
      unit
    }

    ${IngredientCard.fragments.ingredient}
    ${SelectFoodContainer.fragments.food}
  `
}

const styles = {
  container: RX.Styles.createViewStyle({
    flex: 1,
    maxWidth: Styles.values.mainContentMaxWidth,
    alignSelf: 'center',
  }),
  innerContainer: RX.Styles.createViewStyle({
    // padding: Styles.values.spacing,
    paddingVertical: Styles.values.spacing,
  }),
  coverContainer: RX.Styles.createViewStyle({}),
  image: RX.Styles.createImageStyle({
    flex: 1,
  }),
  title: RX.Styles.createTextStyle({
    fontSize: Styles.fontSizes.size32,
    fontWeight: '500',
    marginBottom: 10,
  }),
  label: RX.Styles.createTextStyle({
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  }),
  subLabel: RX.Styles.createTextStyle({
    fontSize: Styles.fontSizes.size12,
    fontWeight: '300',
    marginTop: 3,
  }),
  authorAndDescriptionSection: {
    container: RX.Styles.createViewStyle({
      alignItems: 'flex-start',
      borderTopWidth: 1,
      borderStyle: 'dashed',
      // padding: Styles.values.spacing * 2,
      marginTop: Styles.values.spacing,
      paddingTop: Styles.values.spacing * 2,
      paddingBottom: Styles.values.spacing * 3,
    }),
    avatar: RX.Styles.createImageStyle({
      width: 80,
      height: 80,
      borderRadius: 40,
    }),
    date: RX.Styles.createTextStyle({
      position: 'absolute',
      fontSize: Styles.fontSizes.size12,
      fontWeight: '100',
      bottom: Styles.values.spacing,
      [Styles.values.start]: 0,
    }),
  },
  ingredients: {
    container: RX.Styles.createViewStyle({
      borderTopWidth: 1,
      borderStyle: 'dashed',
      paddingVertical: Styles.values.spacing * 2,
    })
  },
  instructions: {
    container: RX.Styles.createViewStyle({
      borderTopWidth: 1,
      borderStyle: 'dashed',
      paddingVertical: Styles.values.spacing * 2,
    })
  }
}
