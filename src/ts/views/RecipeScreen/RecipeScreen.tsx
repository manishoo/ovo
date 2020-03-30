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
import IngredientRow from '@Common/IngredientRow/IngredientRow'
import Input from '@Common/Input/Input'
import Link from '@Common/Link/Link'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
import { translate } from '@Common/LocalizedText/LocalizedText'
import MealItemComponent from '@Common/MealItemComponent/MealItemComponent'
import { ModalContext } from '@Common/Modal/Modal'
import Navbar from '@Common/Navbar/Navbar'
import NutritionInfo from '@Common/NutritionInfo/NutritionInfo'
import Page from '@Common/Page'
import Text from '@Common/Text/Text'
import { RecipeStatus, Role } from '@Models/global-types'
import { useMe } from '@Models/graphql/me/me'
import { Me } from '@Models/graphql/me/types/Me'
import NutritionFragment from '@Models/nutrition'
import LocationStore from '@Services/LocationStore'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import ToastStore, { ToastTypes } from '@Services/ToastStore'
import { getParam, navigate } from '@Utils'
import { ProfileRecipesQuery, ProfileRecipesQueryVariables } from '@Views/ProfileScreen/types/ProfileRecipesQuery'
import { PROFILE_RECIPES_QUERY } from '@Views/ProfileScreen/useProfileTabs.hook'
import IngredientServingControl from '@Views/RecipeScreen/components/IngredientServingControl'
import PublishRecipe from '@Views/RecipeScreen/components/PublishRecipe'
import RecipeModal, { MODAL_ID, MODAL_MAX_WIDTH } from '@Views/RecipeScreen/RecipeModal'
import { Recipe, Recipe_author } from '@Views/RecipeScreen/types/Recipe'
import { RecipeDeleteMutation, RecipeDeleteMutationVariables } from '@Views/RecipeScreen/types/RecipeDeleteMutation'
import { RecipeQuery, RecipeQueryVariables } from '@Views/RecipeScreen/types/RecipeQuery'
import { DateTime } from 'luxon'
import { useCallback } from 'react'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import ImageSource from 'src/ts/modules/images/index.web'
import Instructions from './components/Instructions'


export interface RecipeCommonProps {
  style?: any,
  slug?: string,
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
  private _linkInputRef: any

  static showModal = (props: RecipeCommonProps) => (
    RX.Modal.show(
      <RecipeModal />,
      MODAL_ID,
    )
  )

  protected _buildState(props: RecipeProps, initialBuild: boolean): Partial<RecipeState> | undefined {
    return {
      windowHeight: ResponsiveWidthStore.getHeight(),
      windowWidth: ResponsiveWidthStore.getWidth(),
      isSmallOrTiny: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
      serving: props.recipe ? props.recipe.serving : (initialBuild ? 1 : this.state.serving) // TODO instead of 1, it should be the number of user's family
    }
  }

  public render() {
    const { recipe } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <ModalContext.Consumer>
            {({ modalId }) => (
              <Page
                lazyRender
                maxWidth={modalId ? MODAL_MAX_WIDTH : undefined}
                style={{
                  borderRadius: 10,
                }}
              >
                <Navbar>
                  {this._renderControlBar()}
                </Navbar>

                {
                  recipe.image &&
                  <RX.View
                    style={[
                      styles.coverContainer,
                      {
                        height: this._getWindowWidthConsideringDrawer() * 2 / 3,
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
                    <Text style={styles.title} translations={recipe.title} onPress={() => {
                    }} />
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
                  {/*{this._renderNutritionInfo(theme)}*/}
                  {this._renderLink()}
                </RX.View>
              </Page>
            )}
          </ModalContext.Consumer>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _renderLink = () => {
    const link = `${AppConfig.getFrontendBaseUrl()}/recipe/${this.props.recipe.slug}`

    const onPress = (e: RX.Types.SyntheticEvent) => {
      e.preventDefault()
      e.stopPropagation()

      if (this._linkInputRef) {
        setImmediate(() => this._linkInputRef.selectAll())
        RX.Clipboard.setText(link)
        ToastStore.toast({
          type: ToastTypes.Success,
          message: translate('Copied to Clipboard!')
        })
      }
    }

    return (
      <RX.View>
        <RX.View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
          onPress={onPress}
        >
          <FilledButton
            label={translate('Copy link')}
            pressed
            style={{
              [Styles.values.borderTopEndRadius]: 0,
              [Styles.values.borderBottomEndRadius]: 0,
              marginTop: 0,
              borderWidth: 0,
            }}
          />
          <Input
            inputRef={(ref: any) => this._linkInputRef = ref}
            value={link}
            style={{
              flex: 1,
              marginBottom: 0,
            }}
            textInputStyle={{
              [Styles.values.borderTopStartRadius]: 0,
              [Styles.values.borderBottomStartRadius]: 0,
              padding: 10,
            }}
          />
        </RX.View>
      </RX.View>
    )
  }

  private _renderRecipeTimingAndComplexity = (theme: Theme) => {
    const recipe = this.props.recipe
    const VictoryPieLazy = require('reactxp-chart').VictoryPie
    const VictoryLabel = require('reactxp-chart').VictoryLabel

    const _getLabel = ({ datum }: any) => {
      switch (datum._x) {
        case 0:
          return translate('prepTime')
        case 1:
          return translate('cookTime')
        case 2:
          return translate('totalTime')
      }
    }

    const timingChartData = []

    if (recipe.timing.prepTime) timingChartData.push({ x: 'prepTime', y: recipe.timing.prepTime })
    if (recipe.timing.cookTime) timingChartData.push({ x: 'cookTime', y: recipe.timing.cookTime })

    const prepTimeColor = '#cddc39'
    const cookTimeColor = '#ffb300'

    return (
      <RX.View style={[styles.instructions.container, { borderColor: theme.colors.recipeSeparatorBorderColor }]}>
        {(Object.keys(recipe.timing).length > 0) && <Text translate style={styles.label}>Timing</Text>}

        <RX.View
          style={{
            flexDirection: 'row',
          }}
        >
          <RX.View
            style={{
              width: 65,
              height: 65,
              alignItems: 'center',
              justifyContent: 'center',
              [Styles.values.marginEnd]: Styles.values.spacing
            }}
          >
            <VictoryPieLazy
              innerRadius={() => 130}
              labelRadius={() => 50}
              padding={0}
              labels={() => null}
              style={{
                data: {
                  fill: ({ datum }: any) => {
                    switch (datum.x) {
                      case 'prepTime':
                        return prepTimeColor
                      case 'cookTime':
                        return cookTimeColor
                    }
                  },
                }
              }}
              data={timingChartData}
            />

            <Text
              style={{
                position: 'absolute',
                fontWeight: 'bold',
                fontSize: 24,
              }}
            >{recipe.timing.totalTime}</Text>
          </RX.View>
          <RX.View>
            {
              recipe.timing.prepTime !== null &&
              <Text
                type={Text.types.body}
                style={{ marginBottom: 5, color: prepTimeColor, fontWeight: '500' }}
              >{translate('prepTime')}: <Text
                style={{ color: theme.colors.text }}>{recipe.timing.prepTime}</Text></Text>
            }
            {
              recipe.timing.cookTime !== null &&
              <Text
                type={Text.types.body}
                style={{ marginBottom: 5, color: cookTimeColor, fontWeight: '500' }}
              >{translate('cookTime')}: <Text
                style={{ color: theme.colors.text }}>{recipe.timing.cookTime}</Text></Text>
            }
            {
              recipe.timing.totalTime !== null &&
              <Text
                type={Text.types.body}
                style={{ marginBottom: 5, fontWeight: 'bold' }}
              >{translate('totalTime')}: {recipe.timing.totalTime} {translate(translate.keys.min)}</Text>
            }
          </RX.View>
        </RX.View>

        {
          recipe.difficulty && [
            <Text translate style={[styles.label, { marginTop: Styles.values.spacing * 2 }]}>Complexity</Text>,
            <Text type={Text.types.body}>{recipe.difficulty}</Text>
          ]
        }
      </RX.View>
    )
  }

  // private _renderNutritionInfo = (theme: Theme) => {
  //   const recipe = this.props.recipe
  //
  //   if (!recipe.nutrition) return null
  //
  //   if (Object.values(trimTypeName(recipe.nutrition)).filter(Boolean).length === 0) return null
  //
  //   const carbs = (recipe.nutrition.totalCarbs || recipe.nutrition.totalAvailableCarbs)
  //
  //   return (
  //     <RX.View style={[styles.ingredients.container, { borderColor: theme.colors.recipeSeparatorBorderColor }]}>
  //       <RX.View>
  //         <Text
  //           translate
  //           type={Text.types.title}
  //           style={[styles.label, { [Styles.values.marginEnd]: Styles.values.spacing }]}
  //         >Nutrition (per serving)</Text>
  //
  //         {
  //           recipe.nutrition.calories &&
  //           <Text
  //             type={Text.types.body}
  //             style={{ marginBottom: 5 }}
  //           >{translate('calories')}: {recipe.nutrition.calories.amount.toFixed()} {translate(recipe.nutrition.calories.unit)}</Text>
  //         }
  //         {
  //           recipe.nutrition.proteins && <Text
  //             type={Text.types.body}
  //             style={{ marginBottom: 5 }}
  //           >{translate('proteins')}: {recipe.nutrition.proteins.amount.toFixed()} {translate(recipe.nutrition.proteins.unit)}</Text>
  //         }
  //         {
  //           carbs &&
  //           <Text
  //             type={Text.types.body}
  //             style={{ marginBottom: 5 }}
  //           >{translate('carbs')}: {carbs.amount.toFixed()} {translate(carbs.unit)}</Text>}
  //         {
  //           recipe.nutrition.fats &&
  //           <Text
  //             type={Text.types.body}
  //             style={{ marginBottom: 5 }}
  //           >{translate('fats')}: {recipe.nutrition.fats.amount.toFixed()} {translate(recipe.nutrition.fats.unit)}</Text>
  //         }
  //       </RX.View>
  //     </RX.View>
  //   )
  // }

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

        <RX.View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <RX.View>
            {
              recipe.ingredients.map(ingredient => (
                <MealItemComponent
                  key={ingredient.id}
                  mealItem={{
                    ...ingredient,
                    hasAlternatives: false,
                    amount: Number(Number(((ingredient.amount || 0) / recipe.serving) * this.state.serving).toFixed(1)),
                  }}
                  style={{
                    // marginBottom: Styles.values.spacing,
                    backgroundColor: theme.colors.bg,
                    [Styles.values.paddingStart]: 0,
                  }}
                />
              ))
            }
          </RX.View>

          {
            recipe.nutrition &&
            <NutritionInfo
              title={translate('Nutrition per serving')}
              nutrition={recipe.nutrition}
              showMacros={false}
            />
          }
        </RX.View>

        {/*
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
*/}
      </RX.View>
    )
  }

  private _renderInstructionsSection = (theme: Theme) => {
    const recipe = this.props.recipe

    if (recipe.instructions.length === 0) return null

    return (
      <RX.View style={[styles.instructions.container, { borderColor: theme.colors.recipeSeparatorBorderColor }]}>
        <Text translate style={styles.label}>Instructions</Text>

        {
          recipe.origin && recipe.origin.url && recipe.origin.sourceUrl
            ? <FilledButton label={translate('Read Instructions')}
                            onPress={() => RX.Linking.openUrl(`${recipe.origin!.sourceUrl}/${recipe.origin!.url}`)} />
            : <Instructions instructions={recipe.instructions} />
        }
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

const useRecipeData = ({ slug }: { slug: string }) => {
  const me = useMe()
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
      slug,
    }
  })

  const [deleteRecipe] = useMutation<RecipeDeleteMutation, RecipeDeleteMutationVariables>(gql`
    mutation RecipeDeleteMutation($recipeId: ObjectId!) {
      deleteRecipe(recipeId: $recipeId)
    }
  `)

  const onDeleteRecipe = useCallback(({ recipeId, userId }) => deleteRecipe({
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
  }), [])

  return {
    me,
    data,
    loading,
    error,
    onDeleteRecipe,
  }
}

export default function RecipeContainer(props: RecipeCommonProps) {
  const {
    data,
    error,
    me,
    onDeleteRecipe,
    loading,
  } = useRecipeData({ slug: props.slug || getParam(props, 'slug') })

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
  if (!data) return null
  if (error) {
    return (
      <ErrorComponent
        error={error}
      />
    )
  }

  return (
    <RecipeScreen
      {...props}
      recipe={data.recipe}
      loading={loading}
      me={me}
      onDelete={onDeleteRecipe}
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
      origin {
        url
        sourceUrl
      }
      ingredients { ...BasicIngredient }
      instructions {
        step
        text { text locale }
        #        image { url }
        #        notes { text locale }
      }
      nutrition {
        ...Nutrition
        #        calories {...NutrientUnit}
        #        proteins {...NutrientUnit}
        #        totalCarbs {...NutrientUnit}
        #        totalAvailableCarbs {...NutrientUnit}
        #        fats {...NutrientUnit}
      }
      difficulty
      description { text locale }
      image { url }
      createdAt
      updatedAt
      status
      tags
    }

    #    fragment NutrientUnit on NutrientUnit {
    #      amount
    #      id
    #      unit
    #    }

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
    paddingVertical: Styles.values.spacingLarge,
  }),
  coverContainer: RX.Styles.createViewStyle({}),
  image: RX.Styles.createImageStyle({
    flex: 1,
  }),
  title: RX.Styles.createTextStyle({
    fontSize: 36,
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
      // borderTopWidth: 1,
      // borderStyle: 'dashed',
      // padding: Styles.values.spacing * 2,
      marginTop: Styles.values.spacing,
      // paddingTop: Styles.values.spacing * 2,
      paddingBottom: Styles.values.spacing * 2,
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
