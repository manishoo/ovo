/*
 * _RecipeForm.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useMutation, useQuery } from '@apollo/react-hooks'
import CenterAlignedPageView from 'common/CenterAlignedPageView'
import FilePicker from 'common/FilePicker/FilePicker'
import FilledButton from 'common/FilledButton/FilledButton'
import { showFoodModal } from 'common/FoodDialog/FoodDialog'
import Image from 'common/Image/Image'
import Input from 'common/Input/Input'
import IntlInput from 'common/Input/IntlInput'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import IngredientCard from 'common/recipe/IngredientCard/IngredientCard'
import Select from 'common/Select/Select'
import Text from 'common/Text/Text'
import TextInputAutoGrow from 'common/TextInputAutoGrow/TextInputAutoGrow'
import gql from 'graphql-tag'
import { ExecutionResult } from 'react-apollo'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import Styles from 'src/ts/app/Styles'
import { Theme } from 'src/ts/app/Theme'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { DishItem, FoodTypes, Recipe, User } from 'src/ts/models/FoodModels'
import {
  IngredientInput,
  InstructionInput,
  LanguageCode,
  RecipeDifficulty,
  RecipeInput
} from 'src/ts/models/global-types'
import LocationStore from 'src/ts/stores/LocationStore'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import UserStore from 'src/ts/stores/UserStore'
import { getParam } from 'src/ts/utilities'
import getGraphQLUserInputErrors from 'src/ts/utilities/get-graphql-user-input-errors'
import ProfileRecipes, { PROFILE_RECIPES_QUERY } from 'src/ts/views/ProfileScreen/components/ProfileRecipes'
import {
  RecipesListQuery_recipes_recipes,
  RecipesListQuery_recipes_recipes_ingredients,
  RecipesListQuery_recipes_recipes_instructions
} from 'src/ts/views/ProfileScreen/types/RecipesListQuery'
import { RecipeFormExtra } from 'src/ts/views/RecipeForm/components/RecipeFormExtra/RecipeFormExtra'
import {
  RecipeFormExtraUpdateMutation,
  RecipeFormExtraUpdateMutationVariables
} from 'src/ts/views/RecipeForm/components/RecipeFormExtra/types/RecipeFormExtraUpdateMutation'
import InstructionRow from './components/InstructionRow/InstructionRow'
import { RecipeFormCreateMutation, RecipeFormCreateMutationVariables } from './types/RecipeFormCreateMutation'
import { RecipeFormQuery, RecipeFormQueryVariables } from './types/RecipeFormQuery'
import { RecipeFormUpdateMutationVariables } from './types/RecipeFormUpdateMutation'


interface RecipeFormProps {
  style?: any,
  recipe?: Recipe,
  fieldErrors: { [k: string]: string }
  onCreate: (variables: RecipeFormCreateMutationVariables) => Promise<ExecutionResult<RecipeFormCreateMutation>>,
  onUpdate: (variables: RecipeFormUpdateMutationVariables, userId: string) => Promise<any>,
}

export type IngredientWithKey = (RecipesListQuery_recipes_recipes_ingredients & { key: string })

interface RecipeFormState {
  ingredientModalOpen: boolean,
  recipe: Omit<RecipesListQuery_recipes_recipes, 'ingredients'> & { ingredients: IngredientWithKey[] },
  slugEdited: boolean,
  coverImagePreview?: any,
  difficulty?: string,
  totalTimeSet?: boolean,
  height?: number,
  me?: User,
  hideForm?: boolean
  coverImage?: any,
}

class RecipeForm extends ComponentBase<RecipeFormProps, RecipeFormState> {
  protected _buildState(props: RecipeFormProps, initialBuild: boolean): Partial<RecipeFormState> | undefined {
    if (!initialBuild) return null

    if (props.recipe) {
      this._showExtraForm()

      return {
        ingredientModalOpen: false,
        recipe: {
          ...props.recipe,
          ingredients: props.recipe.ingredients.map(ingredient => ({
            key: String(Math.random()),
            ...ingredient,
          })),
          instructions: props.recipe.instructions,
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
        coverImagePreview: props.recipe.coverImage ? props.recipe.coverImage.url : undefined,
        height: ResponsiveWidthStore.getHeight(),
        me: UserStore.getUser(),
      }
    } else {
      return {
        ingredientModalOpen: false,
        recipe: {
          id: 'new',
          description: [],
          ingredients: [],
          instructions: [{
            text: [],
            step: 1,
            notes: null,
            image: null,
          }],
          title: [],
          slug: '',
          timing: {
            prepTime: null,
            cookTime: null,
            totalTime: 0,
          },
          likesCount: 0,
          userLikedRecipe: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          difficulty: null,
          author: {
            id: '',
            username: '',
            imageUrl: {
              url: ''
            }
          },
          serving: 1,
          coverImage: null,
          tags: [],
        },
        slugEdited: false,
        coverImagePreview: undefined,
        height: ResponsiveWidthStore.getHeight(),
        me: UserStore.getUser(),
      }
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <CenterAlignedPageView
            scrollViewProps={{
              ref: ref => this._scrollView = ref,
            }}
          >
            {this._renderFormContent(theme)}
            {this._renderFormExtraContent()}
          </CenterAlignedPageView>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _renderFormExtraContent = () => {
    if (this.state.recipe.id === 'new') return null

    return (
      <RX.Animated.View
        style={[
          this._extraFormAnimationStyle
        ]}
      >
        <RecipeFormExtra
          recipe={this.state.recipe}
          userId={this.state.me.id}
          selectedTags={this.state.recipe.tags}
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

  private _renderFormContent = (theme: Theme) => {
    if (this.state.hideForm) return null

    const { fieldErrors } = this.props

    return (
      <RX.Animated.View
        style={[
          styles.innerContainer,
          this._mainFormAnimationStyle
        ]}
      >
        <IntlInput
          autoFocus
          label={getLocalizedText('Name')}
          placeholder={getLocalizedText('e.g Easy Sesame Chicken')}
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

        {/**
         * Ingredients
         * */}
        <RX.View
          style={{
            flexDirection: 'row',
            marginBottom: this.state.recipe.ingredients.length > 0 ? Styles.values.spacing : 0
          }}
        >
          {
            this.state.recipe.ingredients.map((ingredient, index) => (
              <IngredientCard
                size={200}
                ingredient={ingredient}
                onDelete={this._onIngredientDelete(index)}
                onIngredientChange={this._onIngredientChange}
                style={{
                  [Styles.values.marginEnd]: Styles.values.spacing,
                }}
              />
            ))
          }
        </RX.View>

        {/**
         * Ingredient input
         * */}
        <Input
          label={getLocalizedText('Ingredients')}
          placeholder={getLocalizedText('Search foods')}
          onFocus={() => showFoodModal({
            autoFocus: true,
            foodTypes: [FoodTypes.food],
            onDismiss: () => null,
            onSubmit: this._onIngredientAdd,
          })}
          errorMessage={fieldErrors['ingredients']}
          style={{ marginBottom: Styles.values.spacing * 2 }}
        />

        {/**
         * Instructions
         * */}
        <Text translate style={{ marginBottom: Styles.values.spacing / 2 }}>Instructions</Text>
        {
          this.state.recipe.instructions.map(instruction => (
            <InstructionRow
              key={instruction.step}
              instruction={instruction}
              onEnterPressed={this._onInstructionAdd}
              onDeletePressed={ins => this._handleInstructionDelete(ins)}
              onChange={this._onInstructionChange}
              onDelete={this._onInstructionDelete}
            />
          ))
        }

        <RX.View style={{ height: Styles.values.spacing * 2 }} />
        <TextInputAutoGrow
          label={getLocalizedText('Description')}
          translations={this.state.recipe.description || []}
          placeholder={getLocalizedText('Describe the story behind your recipe')}
          onTranslationsChange={description => this.setState(prevState => ({
            recipe: {
              ...prevState.recipe,
              description
            },
          }))}
          style={styles.input}
        />
        <RX.View style={{ height: Styles.values.spacing * 2 }} />

        <RX.View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: Styles.values.spacing * 2 }}>
          <Input
            label={getLocalizedText('Serving')}
            value={this.state.recipe.serving ? String(this.state.recipe.serving) : ''}
            onChange={(serving: string) => this.setState(prevState => ({
              recipe: {
                ...prevState.recipe,
                serving: serving ? Number(serving) : 1,
              }
            }))}
            style={[styles.input, styles.smallInput]}
          />
          <Input
            label={getLocalizedText('PreparationTime')}
            value={this.state.recipe.timing.prepTime ? String(this.state.recipe.timing.prepTime) : ''}
            onChange={(prepTime: string) => this.setState(prevState => ({
              recipe: {
                ...prevState.recipe,
                timing: {
                  ...prevState.recipe.timing,
                  prepTime: prepTime ? Number(prepTime) : null
                }
              }
            }), this._calculateTotalTime)}
            style={[styles.input, styles.smallInput]}
          />
          <Input
            label={getLocalizedText('CookingTime')}
            value={this.state.recipe.timing.cookTime ? String(this.state.recipe.timing.cookTime) : ''}
            onChange={(cookTime: string) => this.setState(prevState => ({
              recipe: {
                ...prevState.recipe,
                timing: {
                  ...prevState.recipe.timing,
                  cookTime: cookTime ? Number(cookTime) : null,
                }
              }
            }), this._calculateTotalTime)}
            style={[styles.input, styles.smallInput]}
          />
          <Input
            label={getLocalizedText('TotalTime')}
            value={this.state.recipe.timing.totalTime ? String(this.state.recipe.timing.totalTime) : ''}
            onChange={(totalTime: string) => this.setState(prevState => ({
              totalTimeSet: true,
              recipe: {
                ...prevState.recipe,
                timing: {
                  ...prevState.recipe.timing,
                  totalTime: totalTime ? Number(totalTime) : 0,
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
                ...Object.keys(RecipeDifficulty).map(difficulty => ({
                  value: RecipeDifficulty[difficulty],
                  text: <Text translate>{difficulty}</Text>,
                })),
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

        <FilePicker
          label={this.state.coverImagePreview ? 'Replace Image' : undefined}
          onImageChange={coverImage => this.setState({ coverImage })}
          onImagePreviewChange={coverImagePreview => this.setState({ coverImagePreview })}
          style={{
            flex: 1,
            height: 400,
            borderRadius: 8,
            marginBottom: Styles.values.spacing,
          }}
        >
          <RX.View
            style={{
              flex: 1,
              backgroundColor: theme.colors.textInputBg,
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {
              this.state.coverImagePreview &&
              <Image
                source={this.state.coverImagePreview}
                style={styles.coverImage}
                resizeMode={'cover'}
              />
            }
            <RX.View
              style={{
                flex: 1,
                width: 300,
                borderWidth: 1,
                borderColor: theme.colors.selectBorderColor,
                borderStyle: 'dashed',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
                position: 'absolute',
                top: 0,
                bottom: 0,
              }}
            >
              {
                !this.state.coverImagePreview &&
                <Text
                  translate
                  style={{
                    color: theme.colors.selectBorderColor,
                    fontSize: theme.fontSizes.size16,
                    font: theme.fonts.displayBold
                  }}
                >UploadImage</Text>
              }
            </RX.View>
          </RX.View>
        </FilePicker>
        <RX.View style={{ height: Styles.values.spacing * 2 }} />

        {
          /**
           * If it was editting, don't show the submit button
           * */
          !this.props.recipe &&
          <FilledButton
            label={'Submit'}
            onPress={this._handleCreate}
          />
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

  private _onIngredientAdd = (dishItem: DishItem) => {
    const ingredients: IngredientWithKey[] = [...this.state.recipe.ingredients]
    ingredients.push({
      key: String(Math.random()),
      amount: dishItem.amount!,
      food: dishItem.food!,
      name: dishItem.food!.name,
      customUnit: dishItem.customUnit || null,
      description: dishItem.description || [],
      gramWeight: dishItem.gramWeight || null,
      thumbnail: dishItem.food!.thumbnailUrl || null,
      weight: dishItem.weight || null,
    })
    this.setState(prevState => ({
      recipe: {
        ...prevState.recipe,
        ingredients,
      }
    }))
  }

  private _handleInstructionDelete = (instruction: RecipesListQuery_recipes_recipes_instructions) => {
    const instructions = [...this.state.recipe.instructions]

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
          instructions: instructions
            .filter(i => i.step !== instruction.step)
            .map((i, index) => {
              i.step = index + 1
              return i
            })
        }
      }))
      return
    }
  }

  private _onInstructionChange = (instruction: RecipesListQuery_recipes_recipes_instructions) => {
    const instructions = [...this.state.recipe.instructions]

    const foundInstruction = instructions.find(p => p.step === instruction.step)
    if (!foundInstruction) {
      console.error('Instruction not found')
      return
    }

    foundInstruction.text = instruction.text
    foundInstruction.image = instruction.image

    /**
     * If the instruction text was deleted
     * */
    // if (
    //   instruction.text[0] &&
    //   instruction.text[0].text.length === 0 &&
    //   instruction.step !== 1
    // ) {
    //   this.setState(prevState => ({
    //     recipe: {
    //       ...prevState.recipe,
    //       instructions: instructions
    //         .filter(i => i.step !== instruction.step)
    //         .map((i, index) => {
    //           i.step = index + 1
    //           return i
    //         })
    //     }
    //   }))
    //   return
    // }

    /**
     * If the instruction was changed
     * */
    this.setState(prevState => ({
      recipe: {
        ...prevState.recipe,
        instructions
      }
    }))
  }

  private _onInstructionAdd = (instruction: RecipesListQuery_recipes_recipes_instructions) => {
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
        image: null,
        notes: null,
      }
    )

    this.setState(prevState => ({
      recipe: {
        ...prevState.recipe,
        instructions: instructions.map((i, index) => {
          i.step = index + 1
          return i
        })
      }
    }))
  }

  private _onInstructionDelete = (step: number) => {
    this.setState(prevState => ({
      recipe: {
        ...prevState.recipe,
        instructions: prevState.recipe.instructions.filter(p => p.step !== step)
      },
    }))
  }

  private _generateSlug = (title: string) => {
    return title.toLowerCase().replace(/ /g, '-')
  }

  private _getRecipe = (): RecipeInput => {
    return {
      title: this.state.recipe.title.map(i => ({ locale: i.locale, text: i.text })),
      description: this.state.recipe.description.map(i => ({ locale: i.locale, text: i.text })),
      ingredients: this.state.recipe.ingredients.map(ingredient => ({
        food: ingredient.food && ingredient.food.id,
        name: ingredient.name && ingredient.name.map(tr => ({ text: tr.text, locale: tr.locale })),
        amount: ingredient.amount,
        weight: ingredient.weight ? ingredient.weight.id : undefined,
        customUnit: ingredient.customUnit,
        description: ingredient.description,
      }) as IngredientInput),
      instructions: this.state.recipe.instructions.map(instruction => ({
        text: instruction.text.map(i => ({ locale: i.locale, text: i.text })),
        step: instruction.step,
      }) as InstructionInput),
      serving: this.state.recipe.serving,
      timing: {
        totalTime: this.state.recipe.timing.totalTime,
        prepTime: this.state.recipe.timing.prepTime,
        cookTime: this.state.recipe.timing.cookTime,
      },
      tags: this.state.recipe.tags,
      difficulty: this.state.recipe.difficulty,
      slug: this.state.recipe.slug,
      coverImage: this.state.coverImage,
    }
  }

  private _handleCreate = () => {
    this.props.onCreate({
      recipe: this._getRecipe(),
    })
      .then(({ data }) => {
        if (data) {
          this._setUI()
          this.setState({
            recipe: {
              ...data.createRecipe,
              ingredients: data.createRecipe.ingredients.map(ingredient => ({
                key: String(Math.random()),
                ...ingredient,
              })),
            }
          })
        }
      })
  }

  private _handleUpdate = () => {
    this.props.onUpdate({
      id: this.state.recipe.id,
      recipe: this._getRecipe(),
    }, this.state.me.id)
  }

  private _onIngredientChange = (ingredient: IngredientWithKey) => {
    this.setState(prevState => ({
      recipe: {
        ...prevState.recipe,
        ingredients: this.state.recipe.ingredients.map(i => {
          if (ingredient.key && (i.key === ingredient.key)) {
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
        }, () => {
          RX.Animated.parallel([
            RX.Animated.timing(this._extraFormOpacityAnimationValue, { toValue: 1 }),
            RX.Animated.timing(this._extraFormTranslateYAnimationValue, { toValue: 0 }),
          ])
            .start()
        })
      })
  }

  private _showExtraForm = () => {
    RX.Animated.parallel([
      RX.Animated.timing(this._extraFormOpacityAnimationValue, { toValue: 1 }),
      RX.Animated.timing(this._extraFormTranslateYAnimationValue, { toValue: 0 }),
    ])
      .start()
  }

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
}

export default function (props: {}) {
  const { data, error } = useQuery<RecipeFormQuery, RecipeFormQueryVariables>(gql`
    query RecipeFormQuery($slug: String!) {
      recipe(slug: $slug) {
        ...MyRecipe
      }
    }

    ${ProfileRecipes.fragments.myRecipe}
  `, {
    variables: {
      slug: getParam(props, 'slug'),
    },
    skip: !getParam(props, 'slug'),
    fetchPolicy: 'cache-and-network'
  })
  const [createRecipe, { error: createRecipeError }] = useMutation<RecipeFormCreateMutation, RecipeFormCreateMutationVariables>(gql`
    mutation RecipeFormCreateMutation($recipe: RecipeInput!) {
      createRecipe(recipe: $recipe) { ...MyRecipe }
    }

    ${ProfileRecipes.fragments.myRecipe}
  `)
  const [updateRecipe, { error: updateRecipeError }] = useMutation<RecipeFormExtraUpdateMutation, RecipeFormExtraUpdateMutationVariables>(gql`
    mutation RecipeFormUpdateMutation($id: String!, $recipe: RecipeInput!) {
      updateRecipe(recipeId: $id, recipe: $recipe) { ...MyRecipe }
    }

    ${ProfileRecipes.fragments.myRecipe}
  `)

  return (
    <RecipeForm
      recipe={data && data.recipe}
      fieldErrors={getGraphQLUserInputErrors(error || createRecipeError || updateRecipeError)}
      onCreate={variables => createRecipe({ variables })}
      onUpdate={(variables, userId) => updateRecipe({
        variables,
        update: (proxy, { data }) => {
          const { recipes } = proxy.readQuery({
            query: PROFILE_RECIPES_QUERY,
            variables: {
              userId,
            },
          })

          proxy.writeQuery({
            query: PROFILE_RECIPES_QUERY,
            variables: {
              userId,
            },
            data: {
              ...recipes,
              recipes: recipes.recipes.map((r: any) => {
                if (r.id === data.updateRecipe.id) {
                  return Object.assign({}, r, data.updateRecipe)
                }

                return r
              })
            }
          })
          LocationStore.navigate(props, 'back')
        }
      })}
    />
  )
}

const styles = {
  container: RX.Styles.createViewStyle({
    padding: Styles.values.spacing * 2,
    // paddingTop: Styles.values.navBarHeight,
    // flex: 1,
    // overflow: 'visible',
    // maxWidth: Styles.values.mainContentMaxWidth,
    // alignSelf: 'center',
  }),
  innerContainer: RX.Styles.createViewStyle({
    //
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
  coverImage: RX.Styles.createImageStyle({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  })
}
