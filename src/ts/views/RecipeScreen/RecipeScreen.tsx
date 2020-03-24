/*
 * RecipeScreen.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, useMutation, useQuery } from '@apollo/client'
import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import ErrorComponent from '@Common/ErrorComponent/ErrorComponent'
import FilledButton from '@Common/FilledButton/FilledButton'
import Image from '@Common/Image/Image'
import IngredientCard from '@Common/IngredientCard/IngredientCard'
import IngredientRow from '@Common/IngredientRow/IngredientRow'
import Link from '@Common/Link/Link'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Modal from '@Common/Modal/Modal'
import Navbar from '@Common/Navbar/Navbar'
import Page from '@Common/Page'
import Text from '@Common/Text/Text'
import { RecipeStatus, Role } from '@Models/global-types'
import { useMe } from '@Models/graphql/me/me'
import { Me } from '@Models/graphql/me/types/Me'
import NutritionFragment from '@Models/nutrition'
import LocationStore from '@Services/LocationStore'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { getParam, navigate } from '@Utils'
import trimTypeName from '@Utils/trim-type-name'
import { ProfileRecipesQuery, ProfileRecipesQueryVariables } from '@Views/ProfileScreen/types/ProfileRecipesQuery'
import { PROFILE_RECIPES_QUERY } from '@Views/ProfileScreen/useProfileTabs.hook'
import IngredientServingControl from '@Views/RecipeScreen/components/IngredientServingControl'
import PublishRecipe from '@Views/RecipeScreen/components/PublishRecipe'
import { Recipe, Recipe_author } from '@Views/RecipeScreen/types/Recipe'
import { RecipeDeleteMutation, RecipeDeleteMutationVariables } from '@Views/RecipeScreen/types/RecipeDeleteMutation'
import { RecipeQuery, RecipeQueryVariables } from '@Views/RecipeScreen/types/RecipeQuery'
import { DateTime } from 'luxon'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import ImageSource from 'src/ts/modules/images/index.web'
import Instructions from './components/Instructions'


const MODAL_ID = 'recipe-modal'
const MODAL_MAX_WIDTH = 800

interface RecipeCommonProps {
  style?: any,
  slug?: string,
  modalId?: string,
}

interface RecipeProps extends RecipeCommonProps {
  recipe: Recipe,
  loading?: boolean,
  onDelete: (options: { userId: string, recipeId: string }) => any,
  me: Me | null,
}

interface RecipeState {
  windowHeight: number,
  windowWidth: number,
  isSmallOrTiny: boolean,
  serving: number,
}

export class RecipeScreen extends ComponentBase<RecipeProps, RecipeState> {
  static showModal = (props: RecipeCommonProps) => (
    RX.Modal.show(
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Modal
            key={MODAL_ID}
            modalId={MODAL_ID}
            maxWidth={MODAL_MAX_WIDTH}
            // fullWidth
            fullHeight
            theme={theme}
          >
            <RecipeContainer
              {...props}
              modalId={MODAL_ID}
            />
          </Modal>
        )}
      </ThemeContext.Consumer>,
      MODAL_ID,
    )
  )

  public render() {
    const { recipe, loading, modalId } = this.props

    if (loading) {
      return (
        <RX.View
          ignorePointerEvents
          style={Styles.values.absolutelyExtended}
        >
          <LoadingIndicator />
        </RX.View>
      )
    }

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Page
            lazyRender
            maxWidth={modalId ? MODAL_MAX_WIDTH : undefined}
            withFooter={!this.props.modalId}
          >
            <Navbar
              modalId={modalId}
            >
              {this._renderControlBar()}
            </Navbar>

            {
              recipe.image &&
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
                  source={recipe.image.url}
                  resizeMode={'cover'}
                  style={styles.image}
                />
              </RX.View>
            }

            <RX.View style={styles.innerContainer}>
              <RX.View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}
              >
                <Text style={styles.title} translations={recipe.title} />
                {
                  (
                    (recipe.status === RecipeStatus.public) ||
                    (recipe.status === RecipeStatus.review)
                  ) &&
                  <Image
                    source={recipe.status === RecipeStatus.public ? ImageSource.VerifiedBadge : ImageSource.VerifyingBadge}
                    style={styles.verifiedBadge}
                    resizeMode={'cover'}
                  />
                }
              </RX.View>

              {this._renderAuthorAndDescriptionSection(theme)}

              {this._renderRecipeTimingAndComplexity(theme)}

              {this._renderIngredientsSection(theme)}

              {this._renderInstructionsSection(theme)}

              {this._renderNutritionInfo(theme)}

            </RX.View>
          </Page>
        )}
      </ThemeContext.Consumer>
    )
  }

  protected _buildState(props: RecipeProps, initialBuild: boolean): Partial<RecipeState> | undefined {
    return {
      windowHeight: ResponsiveWidthStore.getHeight(),
      windowWidth: ResponsiveWidthStore.getWidth(),
      isSmallOrTiny: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
      serving: props.recipe ? props.recipe.serving : (initialBuild ? 1 : this.state.serving) // TODO instead of 1, it should be the number of user's family
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
          >{translate('prepTime')}: {recipe.timing.prepTime}</Text>
        }
        {
          recipe.timing.cookTime !== null &&
          <Text
            type={Text.types.body}
            style={{ marginBottom: 5 }}
          >{translate('cookTime')}: {recipe.timing.cookTime}</Text>
        }
        {
          recipe.timing.totalTime !== null &&
          <Text
            type={Text.types.body}
            style={{ marginBottom: 5 }}
          >{translate('totalTime')}: {recipe.timing.totalTime}</Text>
        }
      </RX.View>
    )
  }

  private _renderNutritionInfo = (theme: Theme) => {
    const recipe = this.props.recipe

    if (!recipe.nutrition) return null

    if (Object.values(trimTypeName(recipe.nutrition)).filter(Boolean).length === 0) return null

    const carbs = (recipe.nutrition.totalCarbs || recipe.nutrition.totalAvailableCarbs)

    return (
      <RX.View style={[styles.ingredients.container, { borderColor: theme.colors.recipeSeparatorBorderColor }]}>
        <RX.View>
          <Text
            translate
            type={Text.types.title}
            style={[styles.label, { [Styles.values.marginEnd]: Styles.values.spacing }]}
          >Nutrition (per serving)</Text>

          {
            recipe.nutrition.calories &&
            <Text
              type={Text.types.body}
              style={{ marginBottom: 5 }}
            >{translate('calories')}: {recipe.nutrition.calories.amount.toFixed()} {translate(recipe.nutrition.calories.unit)}</Text>
          }
          {
            recipe.nutrition.proteins && <Text
              type={Text.types.body}
              style={{ marginBottom: 5 }}
            >{translate('proteins')}: {recipe.nutrition.proteins.amount.toFixed()} {translate(recipe.nutrition.proteins.unit)}</Text>
          }
          {
            carbs &&
            <Text
              type={Text.types.body}
              style={{ marginBottom: 5 }}
            >{translate('carbs')}: {carbs.amount.toFixed()} {translate(carbs.unit)}</Text>}
          {
            recipe.nutrition.fats &&
            <Text
              type={Text.types.body}
              style={{ marginBottom: 5 }}
            >{translate('fats')}: {recipe.nutrition.fats.amount.toFixed()} {translate(recipe.nutrition.fats.unit)}</Text>
          }
        </RX.View>
      </RX.View>
    )
  }

  private _renderIngredientsSection = (theme: Theme) => {
    const recipe = this.props.recipe

    return (
      <RX.View style={[styles.ingredients.container, { borderColor: theme.colors.recipeSeparatorBorderColor }]}>
        <RX.View style={{ flexDirection: 'row', marginBottom: Styles.values.spacing / 2 }}>
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
                key={ingredient.id}
                // onPress={ingredient.item ? () => LocationStore.navigate(this.props, `/food/${ingredient.food.id}/`) : undefined}
                ingredient={{
                  ...ingredient,
                  amount: Number(Number(((ingredient.amount || 0) / recipe.serving) * this.state.serving).toFixed(1)),
                }}
                style={{
                  [Styles.values.marginEnd]: Styles.values.spacing,
                  marginBottom: Styles.values.spacing,
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

    if (recipe.instructions.length === 0) return null

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
          {
            DateTime.fromISO(recipe.createdAt)
              .reconfigure({ outputCalendar: AppConfig.calendarSystem })
              .setLocale(AppConfig.locale)
              .toLocaleString(DateTime.DATE_FULL)
          }
        </Text>
      </RX.View>
    )
  }

  private _getAuthorName = (user: Partial<Recipe_author>) => {
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
    if (this.props.me && ((this.props.me.id === this.props.recipe.author.id) || (this.props.me.role === Role.operator))) {
      return (
        <RX.View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <FilledButton
            label={translate('Delete Recipe')}
            mode={FilledButton.mode.danger}
            onPress={() => RX.Alert.show(translate('deleteRecipe?'), undefined, [{
              text: translate('yes'),
              onPress: () => this.props.onDelete({
                recipeId: this.props.recipe.id,
                userId: this.props.me!.id,
              }).then(() => navigate(this.props, 'back'))
            }, { text: translate('no') }])}
          />
          <FilledButton
            label={translate('Edit Recipe')}
            mode={FilledButton.mode.default}
            onPress={() => LocationStore.navigate(this.props, `/recipe/${this.props.recipe.slug}/edit`, { params: {} })}
            style={{
              [Styles.values.marginStart]: Styles.values.spacing / 2
            }}
          />
          <PublishRecipe
            recipe={this.props.recipe}
            user={this.props.me}
          />
        </RX.View>
      )
    }

    return null
  }

  private _getMaximum1024 = (width: number) => (width > Styles.values.mainContentMaxWidth ? Styles.values.mainContentMaxWidth : width) // maximum 1024

  private _getWindowWidthConsideringDrawer = () => this._getMaximum1024(this.state.isSmallOrTiny ? this.state.windowWidth : this.state.windowWidth - Styles.values.drawerWidth)
}

export default function RecipeContainer(props: RecipeCommonProps) {
  const { data, loading, error } = useQuery<RecipeQuery, RecipeQueryVariables>(gql`
    query RecipeQuery($slug: String!) {
      recipe(slug: $slug) {
        ...Recipe
      }
    }

    ${RecipeContainer.fragments.recipe}
  `, {
    fetchPolicy: 'cache-and-network',
    returnPartialData: true,
    variables: {
      slug: props.slug || getParam(props, 'slug'),
    }
  })

  if (!data) return <LoadingIndicator />
  if (error) {
    return (
      <ErrorComponent
        error={error}
      />
    )
  }

  const [deleteRecipe] = useMutation<RecipeDeleteMutation, RecipeDeleteMutationVariables>(gql`
    mutation RecipeDeleteMutation($recipeId: ObjectId!) {
      deleteRecipe(recipeId: $recipeId)
    }
  `)

  return (
    <RecipeScreen
      {...props}
      recipe={data.recipe}
      loading={loading}
      me={useMe()}
      onDelete={({ recipeId, userId }) => deleteRecipe({
        variables: {
          recipeId,
        },
        update: (cache) => {
          const profileRecipesQuery = cache.readQuery<ProfileRecipesQuery, ProfileRecipesQueryVariables>({
            query: PROFILE_RECIPES_QUERY,
            variables: {
              userId,
              size: 20,
            }
          })
          if (!profileRecipesQuery) return

          cache.writeQuery<ProfileRecipesQuery, ProfileRecipesQueryVariables>({
            query: PROFILE_RECIPES_QUERY,
            data: {
              recipes: {
                ...profileRecipesQuery.recipes,
                recipes: profileRecipesQuery.recipes.recipes.filter(i => i.id !== recipeId)
              }
            },
            variables: {
              userId,
              size: 20,
            }
          })
        },
      })}
    />
  )
}

export const fragments = {
  recipe: gql`
    fragment Recipe on Recipe {
      id
      title {
        text
        locale
      }
      serving
      slug
      status
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
      ingredients { ...BasicIngredient }
      instructions {
        step
        text { text locale }
        #        image { url }
        #        notes { text locale }
      }
      nutrition {
        calories {...NutrientUnit}
        proteins {...NutrientUnit}
        totalCarbs {...NutrientUnit}
        totalAvailableCarbs {...NutrientUnit}
        fats {...NutrientUnit}
      }
      difficulty
      description { text locale }
      image { url }
      createdAt
      updatedAt
      status
      tags
    }

    fragment NutrientUnit on NutrientUnit {
      amount
      id
      unit
    }

    ${IngredientRow.fragments.ingredient}
    ${NutritionFragment}
  `
}

RecipeContainer.fragments = fragments

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
  },
  verifiedBadge: RX.Styles.createImageStyle({
    width: 15,
    height: 15,
    [Styles.values.marginStart]: Styles.values.spacing / 2,
    marginTop: Styles.values.spacing / 2
  })
}
