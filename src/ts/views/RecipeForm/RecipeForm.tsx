/*
 * RecipeForm.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ExecutionResult, gql, useMutation, useQuery } from '@apollo/client'
import Storage from '@App/Storage/Storage'
import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import FilledButton from '@Common/FilledButton/FilledButton'
import { FoodPickerMealItem, FoodTypes } from '@Common/FoodPickerDialog/FoodPicker'
import { showFoodPicker } from '@Common/FoodPickerDialog/FoodPickerDialog'
import Image from '@Common/Image/Image'
import Input from '@Common/Input/Input'
import InputNumber from '@Common/Input/InputNumber'
import IntlInput from '@Common/Input/IntlInput'
import { translate } from '@Common/LocalizedText/LocalizedText'
import MealItemComponent from '@Common/MealItemComponent/MealItemComponent'
import Navbar from '@Common/Navbar/Navbar'
import NutritionInfo from '@Common/NutritionInfo/NutritionInfo'
import Page from '@Common/Page'
import Select from '@Common/Select/Select'
import Text from '@Common/Text/Text'
import TextInputAutoGrow from '@Common/TextInputAutoGrow/TextInputAutoGrow'
import { LanguageCode, RecipeDifficulty, RecipeStatus } from '@Models/global-types'
import { useMe } from '@Models/graphql/me/me'
import { Me } from '@Models/graphql/me/types/Me'
import FilePicker from '@Modules/FilePicker'
import SortableList from '@Modules/SortableList'
import LocationStore from '@Services/LocationStore'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import ToastStore, { ToastTypes } from '@Services/ToastStore'
import { getParam } from '@Utils'
import { createId } from '@Utils/create-id'
import getGraphQLUserInputErrors from '@Utils/get-graphql-user-input-errors'
import { calculateMealItemsNutrition } from '@Utils/shared/calculate-meal-nutrition'
import { determineIfIsFood } from '@Utils/transformers/meal.transformer'
import { transformRecipeToRecipeInput } from '@Utils/transformers/recipe.transformer'
import { ProfileRecipesQuery, ProfileRecipesQueryVariables } from '@Views/ProfileScreen/types/ProfileRecipesQuery'
import { PROFILE_RECIPES_QUERY } from '@Views/ProfileScreen/useProfileTabs.hook'
import { RecipeFormExtra } from '@Views/RecipeForm/components/RecipeFormExtra/RecipeFormExtra'
import { fragments as RecipeScreenFragments } from '@Views/RecipeScreen/RecipeScreen'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import InstructionRow from './components/InstructionRow/InstructionRow'
import { RecipeFormCreateMutation, RecipeFormCreateMutationVariables } from './types/RecipeFormCreateMutation'
import {
  RecipeFormQuery,
  RecipeFormQuery_recipe,
  RecipeFormQuery_recipe_ingredients,
  RecipeFormQuery_recipe_instructions,
  RecipeFormQueryVariables
} from './types/RecipeFormQuery'
import { RecipeFormUpdateMutation, RecipeFormUpdateMutationVariables } from './types/RecipeFormUpdateMutation'


interface RecipeFormProps {
  style?: any,
  recipe?: RecipeFormQuery_recipe,
  fieldErrors: { [k: string]: string }
  onCreate: (variables: RecipeFormCreateMutationVariables, userId: string) => Promise<ExecutionResult<RecipeFormCreateMutation>>,
  onUpdate: (variables: RecipeFormUpdateMutationVariables, userId: string) => Promise<ExecutionResult<RecipeFormUpdateMutation>>,
  loading?: boolean,
  me: Me,
}

interface RecipeFormState {
  ingredientModalOpen: boolean,
  recipe: RecipeFormQuery_recipe,
  slugEdited: boolean,
  imagePreview?: any,
  difficulty?: string,
  totalTimeSet?: boolean,
  height?: number,
  hideForm?: boolean
  image?: any,
  thumbnail?: any,
}

class RecipeForm extends ComponentBase<RecipeFormProps, RecipeFormState> {
  private _mainFormOpacityAnimationValue = RX.Animated.createValue(1)
  private _mainFormTranslateYAnimationValue = RX.Animated.createValue(0)
  private _extraFormOpacityAnimationValue = RX.Animated.createValue(0)
  private _extraFormTranslateYAnimationValue = RX.Animated.createValue(-100)
  private _mainFormAnimationStyle = RX.Styles.createAnimatedViewStyle({
    opacity: this._mainFormOpacityAnimationValue,
    transform: [{
      translateY: this._mainFormTranslateYAnimationValue
    }]
  })
  private _extraFormAnimationStyle = RX.Styles.createAnimatedViewStyle({
    opacity: this._extraFormOpacityAnimationValue,
    transform: [{
      translateY: this._extraFormTranslateYAnimationValue
    }]
  })
  private _scrollView: any

  public render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Page
            lazyRender
            scrollViewProps={{
              ref: ref => this._scrollView = ref,
            }}
          >
            <Navbar
              title={translate(this.props.recipe ? 'Edit Recipe' : 'Create Recipe')}
            >
              {
                !this.props.recipe &&
                <FilledButton
                  label={translate('resetAll')}
                  mode={FilledButton.mode.default}
                  onPress={() => {
                    this._clearStateStorage()
                    this.setState(this._getDefaultState())
                  }}
                  style={{
                    [Styles.values.marginStart]: Styles.values.spacing / 2
                  }}
                />
              }
            </Navbar>

            {this._renderFormContent(theme)}
            {this._renderFormExtraContent()}
          </Page>
        )}
      </ThemeContext.Consumer>
    )
  }

  public UNSAFE_componentDidUpdate(prevProps: Readonly<RecipeFormProps>, prevState: RecipeFormState, prevContext: any): void {
    if (!this.props.recipe) {
      this._saveStateToStorage()
    }
  }

  public componentDidMount(): void {
    /**
     * In case we were creating not updating
     * */
    if (!this.props.recipe) {
      this._loadStateFromStorage()
    }
  }

  protected _buildState(props: RecipeFormProps, initialBuild: boolean): Partial<RecipeFormState> | undefined {
    if (!initialBuild) return
    const defaultInstructions = [{
      text: [],
      step: 1,
      // notes: null,
      // image: null,
    }]

    if (props.recipe) {
      this._showExtraForm()

      return {
        ingredientModalOpen: false,
        recipe: {
          ...props.recipe,
          ingredients: props.recipe.ingredients.map(ingredient => ({
            ...ingredient,
            key: createId(),
            description: ingredient.description || [],
          })),
          instructions: props.recipe.instructions.length === 0 ? defaultInstructions : props.recipe.instructions,
          title: props.recipe.title,
          description: props.recipe.description || [],
          slug: props.recipe.slug,
          timing: {
            prepTime: props.recipe.timing.prepTime,
            cookTime: props.recipe.timing.cookTime,
            totalTime: props.recipe.timing.totalTime,
          },
          serving: props.recipe.serving,
        },
        slugEdited: true,
        imagePreview: props.recipe.image ? props.recipe.image.url : undefined,
        height: ResponsiveWidthStore.getHeight(),
      }
    } else {
      return this._getDefaultState()
    }
  }

  private _getDefaultState = () => {
    const defaultInstructions = [{
      text: [],
      step: 1,
      // notes: null,
      // image: null,
    }]
    const author = this.props.me

    return {
      ingredientModalOpen: false,
      recipe: {
        id: 'new',
        description: [],
        ingredients: [],
        instructions: defaultInstructions,
        title: [],
        slug: '',
        timing: {
          prepTime: 0,
          cookTime: 0,
          totalTime: 5,
        },
        likesCount: 0,
        userLikedRecipe: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        difficulty: null,
        author,
        serving: 1,
        image: null,
        nutrition: {
          calories: null,
          proteins: null,
          totalAvailableCarbs: null,
          totalCarbs: null,
          fats: null,
        },
        tags: [],
        status: RecipeStatus.private,
      },
      slugEdited: false,
      imagePreview: undefined,
      height: ResponsiveWidthStore.getHeight(),
      me: author,
      difficulty: undefined,
      totalTimeSet: undefined,
      hideForm: false,
      image: undefined,
      thumbnail: undefined,
    }
  }

  private _renderFormExtraContent = () => {
    if (this.state.recipe.id === 'new') return null
    return (
      <RX.Animated.View
        style={[
          this._extraFormAnimationStyle
        ]}
      >
        {
          !this.props.recipe &&
          <Text translate style={{ fontSize: 16, marginBottom: Styles.values.spacing }}>RecipeExtraGuide</Text>
        }
        <RecipeFormExtra
          recipe={this.state.recipe}
          selectedTags={this.state.recipe.tags}
          user={this.props.me}
          onTagsChange={selectedTags => this.setState(prevState => ({
            recipe: {
              ...prevState.recipe,
              tags: selectedTags,
            }
          }))}
          onSubmit={this._handleUpdate}
        />
      </RX.Animated.View>
    )
  }

  private _instructionsRef: any = {}

  private _renderFormContent = (theme: Theme) => {
    if (this.state.hideForm) return null

    const { fieldErrors } = this.props

    return (
      <RX.Animated.View
        style={[
          this._mainFormAnimationStyle
        ]}
      >
        <RX.View
          style={{
            flex: 1,
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <FilePicker
            onImageChange={(image, thumbnail) => this.setState({ image, thumbnail })}
            onImagePreviewChange={imagePreview => this.setState({ imagePreview })}
            compress
            withThumbnail
            style={{
              width: 350,
              height: 350,
            }}
          >
            <RX.View
              style={{
                flex: 1,
                width: 350,
                height: 350,
                borderWidth: 1,
                borderColor: theme.colors.selectBorderColor,
                borderStyle: 'dashed',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                position: 'absolute',
                top: 0,
                bottom: 0,
              }}
            >
              {
                this.state.imagePreview ?
                  <Image
                    source={this.state.imagePreview}
                    style={styles.image}
                    resizeMode={'cover'}
                  /> :
                  <Text
                    translate
                    style={{
                      color: theme.colors.selectBorderColor,
                      fontSize: theme.fontSizes.size16,
                      fontWeight: 'bold' //displayBold
                    }}
                  >UploadImage</Text>
              }
            </RX.View>
          </FilePicker>
        </RX.View>

        <IntlInput
          autoFocus
          label={translate('Name')}
          required
          placeholder={translate('e.g. Easy Sesame Chicken')}
          translations={this.state.recipe.title || []}
          errorMessage={fieldErrors['title']}
          onTranslationsChange={(title) => this.setState(prevState => ({
            recipe: {
              ...prevState.recipe,
              title,
              slug: this.state.slugEdited ? this.state.recipe.slug : this._generateSlug(title[0].text)
            }
          }))}
          style={[styles.input, { marginBottom: Styles.values.spacing * 2 }]}
        />

        <RX.View
          style={{
            flexDirection: 'row'
          }}
        >
          <RX.View
            style={{
              flex: 2
            }}
          >
            {/**
             * Ingredients Search Input
             * */}
            <Input
              label={translate('Ingredients')}
              placeholder={translate('e.g. Rice')}
              required
              onFocus={() => showFoodPicker({
                foodTypes: [FoodTypes.all, FoodTypes.food, FoodTypes.recipe],
                onDismiss: () => null,
                onSubmit: this._onIngredientAdd,
              })}
              errorMessage={fieldErrors['ingredients']}
              style={{ marginBottom: Styles.values.spacing }}
            />

            {/**
             * Ingredients
             * */}
            <RX.View
              style={{
                marginBottom: this.state.recipe.ingredients.length > 0 ? Styles.values.spacing : 0
              }}
            >
              <SortableList
                items={this.state.recipe.ingredients}
                renderItem={(ingredient, index) => (
                  <MealItemComponent
                    mealItem={ingredient}
                    onMealItemRemove={this._onIngredientDelete(index)}
                    onMealItemChange={this._onIngredientChange}
                    style={[
                      styles.ingredient,
                      {
                        backgroundColor: theme.colors.bg
                      }
                    ]}
                  />
                )}
                // renderItem={(ingredient, index) => (
                //   <IngredientRow
                //     ingredient={ingredient}
                //     onDelete={this._onIngredientDelete(index)}
                //     // onPress={ingredient.food ? () => LocationStore.navigate(this.props, `/food/${ingredient.food.id}/`) : undefined}
                //     onIngredientChange={this._onIngredientChange}
                //     style={styles.ingredient}
                //   />
                // )}
                onItemsChange={(ingredients) => this.setState(prevState => ({
                  recipe: {
                    ...prevState.recipe,
                    ingredients,
                  },
                }))}
              />
            </RX.View>
          </RX.View>
          <RX.View
            style={{
              flex: 1,
            }}
          >
            {
              this.state.recipe.ingredients.length > 0 &&
              <NutritionInfo
                title={translate('Recipe Nutrition')}
                showMacros={false}
                nutrition={calculateMealItemsNutrition(this.state.recipe.ingredients)}
              />
            }
          </RX.View>
        </RX.View>

        {/**
         * Instructions
         * */}
        <Text translate style={{
          marginBottom: Styles.values.spacing / 2,
          fontWeight: '500',
          color: theme.colors.labelInput
        }}>Instructions</Text>
        {
          this.state.recipe.instructions.map(instruction => (
            <InstructionRow
              ref={ref => this._instructionsRef[instruction.step] = ref}
              key={instruction.step}
              step={instruction.step}
              instruction={instruction}
              onEnterPressed={this._onInstructionAdd}
              onDeletePressed={this._handleInstructionDelete}
              onChange={this._onInstructionChange}
            />
          ))
        }

        <RX.View style={{ height: Styles.values.spacing * 2 }} />
        <TextInputAutoGrow
          label={translate('Description')}
          translations={this.state.recipe.description || []}
          placeholder={translate('Describe the story behind your recipe')}
          onTranslationsChange={description => this.setState(prevState => ({
            recipe: {
              ...prevState.recipe,
              description
            },
          }))}
          style={styles.input}
        />
        <RX.View style={{ height: Styles.values.spacing * 2 }} />

        <RX.View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: Styles.values.spacing }}>
          <InputNumber
            label={translate('Serving')}
            required
            value={this.state.recipe.serving}
            onChange={serving => serving && this.setState(prevState => ({
              recipe: {
                ...prevState.recipe,
                serving: Number(serving),
              }
            }))}
            style={[styles.input, styles.smallInput]}
          />
          <InputNumber
            label={translate('PreparationTime')}
            value={this.state.recipe.timing.prepTime}
            onChange={prepTime => this.setState(prevState => ({
              recipe: {
                ...prevState.recipe,
                timing: {
                  ...prevState.recipe.timing,
                  prepTime: Number(prepTime)
                }
              }
            }), this._calculateTotalTime)}
            style={[styles.input, styles.smallInput]}
          />
          <InputNumber
            label={translate('CookingTime')}
            value={this.state.recipe.timing.cookTime}
            onChange={cookTime => this.setState(prevState => ({
              recipe: {
                ...prevState.recipe,
                timing: {
                  ...prevState.recipe.timing,
                  cookTime: Number(cookTime),
                }
              }
            }), this._calculateTotalTime)}
            style={[styles.input, styles.smallInput]}
          />
          <InputNumber
            label={translate('TotalTime')}
            required
            errorMessage={fieldErrors['totalTime']}
            value={this.state.recipe.timing.totalTime}
            onChange={totalTime => this.setState(prevState => ({
              totalTimeSet: true,
              recipe: {
                ...prevState.recipe,
                timing: {
                  ...prevState.recipe.timing,
                  totalTime: Number(totalTime),
                }
              }
            }))}
            style={[styles.input, styles.smallInput]}
          />
          <RX.View>
            <Text translate
                  style={{ fontWeight: '500', marginBottom: Styles.values.spacing / 2, }}>Difficulty</Text>
            <Select
              value={this.state.recipe.difficulty}
              options={[
                { value: null, text: <Text translate>Select</Text> },
                { value: RecipeDifficulty.easy, text: translate('easy') },
                { value: RecipeDifficulty.medium, text: translate('medium') },
                { value: RecipeDifficulty.hard, text: translate('hard') },
                { value: RecipeDifficulty.expert, text: translate('expert') },
              ]}
              onChange={difficulty => this.setState(prevState => ({
                recipe: {
                  ...prevState.recipe,
                  difficulty
                }
              }))}
              style={[styles.input, styles.smallInput]}
            />
          </RX.View>
        </RX.View>

        {
          /**
           * If it was editting, don't show the submit button
           * */
          !this.props.recipe &&
          [
            <RX.View style={{ height: Styles.values.spacing * 2 }} />,
            <FilledButton
              label={translate(this.props.loading ? 'Submitting' : 'Submit')}
              onPress={this._handleCreate}
            />
          ]
        }
      </RX.Animated.View>
    )
  }

  private _calculateTotalTime = () => {
    if (!this.state.totalTimeSet) {
      this.setState(prevState => ({
        recipe: {
          ...prevState.recipe,
          timing: {
            ...prevState.recipe.timing,
            totalTime: (prevState.recipe.timing.cookTime || 0) + (prevState.recipe.timing.prepTime || 0)
          }
        }
      }))
    }
  }

  private _onIngredientDelete = (index: number) => () => {
    this.setState(prevState => ({
      recipe: {
        ...prevState.recipe,
        ingredients: prevState.recipe.ingredients.filter((p, i) => i !== index),
      },
    }))
  }

  private _onIngredientAdd = (mealItem: FoodPickerMealItem) => {
    const ingredients: RecipeFormQuery_recipe_ingredients[] = [...this.state.recipe.ingredients]
    ingredients.push({
      id: createId(),
      ...mealItem,
    })

    let mealItemTiming: any = {}

    if (mealItem.item && !determineIfIsFood(mealItem.item)) {
      mealItemTiming = mealItem.item.timing
    }

    const cookTime = (this.state.recipe.timing.cookTime || 0) + (mealItemTiming.cookTime || 0)
    const prepTime = (this.state.recipe.timing.prepTime || 0) + (mealItemTiming.prepTime || 0)
    const totalTime = (this.state.recipe.timing.totalTime || 0) + (mealItemTiming.totalTime || 0)

    this.setState(prevState => ({
      recipe: {
        ...prevState.recipe,
        timing: {
          ...prevState.recipe.timing,
          cookTime,
          prepTime,
          totalTime: totalTime || 5,
        },
        ingredients,
      }
    }))
  }

  private _handleInstructionDelete = (instruction: RecipeFormQuery_recipe_instructions) => {
    /**
     * If the instruction text was deleted
     * */
    if (
      (instruction.text[0] && instruction.text[0].text.length === 0) &&
      instruction.step !== 1
    ) {
      this.setState(prevState => ({
        recipe: {
          ...prevState.recipe,
          instructions: prevState.recipe.instructions
            .filter(i => i.step !== instruction.step)
            .map((i, index) => {
              i.step = index + 1
              return i
            })
        }
      }), () => {
        if (this._instructionsRef[instruction.step - 1]) {
          setImmediate(() => this._instructionsRef[instruction.step - 1].focus())
        }
      })
      return
    }
  }

  private _onInstructionChange = (instruction: RecipeFormQuery_recipe_instructions) => {
    /**
     * If the instruction was changed
     * */
    this.setState(prevState => ({
      recipe: {
        ...prevState.recipe,
        instructions: prevState.recipe.instructions.map(ins => {
          if (ins.step === instruction.step) {
            return instruction
          }

          return ins
        })
      }
    }))
  }

  private _onInstructionAdd = (instruction: RecipeFormQuery_recipe_instructions) => {
    const instructions = [...this.state.recipe.instructions]

    instructions.splice(
      instruction.step,
      0,
      {
        text: [{
          locale: LanguageCode.en,
          text: ''
        }],
        step: instruction.step + 1,
        // image: null,
        // notes: null,
      }
    )

    this.setState(prevState => ({
      recipe: {
        ...prevState.recipe,
        instructions: instructions.map((i, index) => ({
          ...i,
          index: index + 1
        }))
      }
    }), () => {
      setImmediate(() => this._instructionsRef[instruction.step + 1] && this._instructionsRef[instruction.step + 1].focus())
    })
  }

  private _generateSlug = (title: string) => {
    return title.toLowerCase().replace(/ /g, '-')
  }

  private _handleCreate = () => {
    this.props.onCreate({
      recipe: transformRecipeToRecipeInput(this.state.recipe, this.state.image, this.state.thumbnail),
    }, this.props.me.id)
      .then(({ data }) => {
        if (data) {
          this.setState({
            recipe: {
              ...data.createRecipe,
              ingredients: data.createRecipe.ingredients.map(ingredient => ({
                id: createId(),
                ...ingredient,
              })),
            }
          }, () => {
            this._clearStateStorage()
              .then(async () => {
                this._setUI()
                /**
                 * Update the recipe in state
                 * */

                ToastStore.toast({
                  message: translate('RecipeCreationSuccess'),
                  type: ToastTypes.Success,
                })
              })
          })
        }
      })
  }

  private _handleUpdate = () => {
    this.props.onUpdate({
      id: this.state.recipe.id,
      recipe: transformRecipeToRecipeInput(this.state.recipe, this.state.image, this.state.thumbnail),
    }, this.props.me.id)
      .then(() => {
        ToastStore.toast({
          message: translate('RecipeUpdateSuccess'),
          type: ToastTypes.Success,
        })
        LocationStore.navigate(this.props, 'back')
      })
  }

  private _onIngredientChange = (ingredient: RecipeFormQuery_recipe_ingredients) => {
    this.setState(prevState => ({
      recipe: {
        ...prevState.recipe,
        ingredients: this.state.recipe.ingredients.map(i => {
          if (ingredient.id && (i.id === ingredient.id)) {
            return ingredient
          }

          return i
        })
      }
    }))
  }

  private _setUI = () => {
    if (this._scrollView) {
      this._scrollView.setScrollTop(0, true)
    }

    RX.Animated.parallel([
      RX.Animated.timing(this._mainFormOpacityAnimationValue, { toValue: 0 }),
      RX.Animated.timing(this._mainFormTranslateYAnimationValue, { toValue: 100 }),
    ])
      .start(() => {
        this.setState({
          hideForm: true,
        }, this._showExtraForm)
      })
  }

  private _showExtraForm = () => {
    RX.Animated.parallel([
      RX.Animated.timing(this._extraFormOpacityAnimationValue, { toValue: 1 }),
      RX.Animated.timing(this._extraFormTranslateYAnimationValue, { toValue: 0 }),
    ])
      .start()
  }

  private _saveStateToStorage = async () => {
    const { imagePreview, image, thumbnail, hideForm, height, ...state } = this.state

    if (await Storage.getItem('_RecipeForm')) {
      Storage.setItem('_RecipeForm', JSON.stringify(state))
    }
  }

  private _clearStateStorage = () => {
    return Storage.removeItem('_RecipeForm')
  }

  private _loadStateFromStorage = async () => {
    const stateStringified: string = await Storage.getItem('_RecipeForm')

    let state

    if (stateStringified) {
      state = JSON.parse(stateStringified)
    }

    if (state) {
      this.setState(state)
    } else {
      await Storage.setItem('_RecipeForm', JSON.stringify({}))
    }
  }
}

export default function (props: {}) {
  const { data, error, loading: recipeLoading } = useQuery<RecipeFormQuery, RecipeFormQueryVariables>(gql`
    query RecipeFormQuery($slug: String!) {
      recipe(slug: $slug) {
        ...Recipe
      }
    }

    ${RecipeScreenFragments.recipe}
  `, {
    variables: {
      slug: getParam(props, 'slug'),
    },
    skip: !getParam(props, 'slug'),
    fetchPolicy: 'cache-and-network',
    returnPartialData: true,
  })
  const [createRecipe, { loading: createRecipeLoading, error: createRecipeError }] = useMutation<RecipeFormCreateMutation, RecipeFormCreateMutationVariables>(gql`
    mutation RecipeFormCreateMutation($recipe: RecipeInput!) {
      createRecipe(recipe: $recipe) { ...Recipe }
    }

    ${RecipeScreenFragments.recipe}
  `)
  const [updateRecipe, { loading: updateRecipeLoading, error: updateRecipeError }] = useMutation<RecipeFormUpdateMutation, RecipeFormUpdateMutationVariables>(gql`
    mutation RecipeFormUpdateMutation($id: ObjectId!, $recipe: RecipeInput!) {
      updateRecipe(recipeId: $id, recipe: $recipe) { ...Recipe }
    }

    ${RecipeScreenFragments.recipe}
  `)

  return (
    <RecipeForm
      me={useMe()!}
      recipe={data && data.recipe}
      loading={recipeLoading || createRecipeLoading || updateRecipeLoading}
      fieldErrors={getGraphQLUserInputErrors(error || createRecipeError || updateRecipeError)}
      onCreate={(variables, userId) => createRecipe({
        variables,
        update: (proxy, { data }) => {
          if (!data) return
          const profileRecipes = proxy.readQuery<ProfileRecipesQuery, ProfileRecipesQueryVariables>({
            query: PROFILE_RECIPES_QUERY,
            variables: {
              userId,
              size: 20,
            },
          })
          if (!profileRecipes) return

          proxy.writeQuery({
            query: PROFILE_RECIPES_QUERY,
            variables: {
              userId,
              size: 20,
            },
            data: {
              recipes: {
                ...profileRecipes.recipes,
                recipes: [
                  data.createRecipe,
                  ...profileRecipes.recipes.recipes,
                ]
              },
            }
          })
        }
      })}
      onUpdate={(variables, userId) => updateRecipe({
        variables,
        update: (proxy, { data }) => {
          if (!data) return
          const profileRecipes = proxy.readQuery<ProfileRecipesQuery, ProfileRecipesQueryVariables>({
            query: PROFILE_RECIPES_QUERY,
            variables: {
              userId,
              size: 20,
            },
          })
          if (!profileRecipes) return

          proxy.writeQuery({
            query: PROFILE_RECIPES_QUERY,
            variables: {
              userId,
              size: 20,
            },
            data: {
              recipes: {
                ...profileRecipes.recipes,
                recipes: profileRecipes.recipes.recipes.map((r: any) => {
                  if (r.id === data.updateRecipe.id) {
                    return Object.assign({}, r, data.updateRecipe)
                  }

                  return r
                })
              },
            }
          })
        }
      })}
    />
  )
}

const styles = {
  container: RX.Styles.createViewStyle({
    flex: 1,
    padding: Styles.values.spacing * 2,
  }),
  title: RX.Styles.createTextStyle({
    fontWeight: '500',
  }),
  input: RX.Styles.createTextInputStyle({
    //
  }),
  smallInput: RX.Styles.createTextInputStyle({
    width: 160,
    [Styles.values.marginEnd]: Styles.values.spacing / 2,
  }),
  image: RX.Styles.createImageStyle({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }),
  ingredient: RX.Styles.createViewStyle({
    marginBottom: Styles.values.spacing / 2,
  })
}
