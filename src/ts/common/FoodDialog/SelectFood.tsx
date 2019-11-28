/*
 * SelectFood.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useQuery } from '@apollo/react-hooks'
import client from '@App/client'
import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import FlatButton from '@Common/FlatButton/FlatButton'
import RecipePreview from '@Common/FoodDialog/components/RecipePreview'
import { SelectFoodFood, SelectFoodFood_weights } from '@Common/FoodDialog/types/SelectFoodFood'
import {
  SelectFoodQuery,
  SelectFoodQuery_foods_foods,
  SelectFoodQuery_foods_foods_weights,
  SelectFoodQuery_recipes_recipes,
  SelectFoodQueryVariables
} from '@Common/FoodDialog/types/SelectFoodQuery'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
import { translate } from '@Common/LocalizedText/LocalizedText'
import RecipeCard from '@Common/RecipesList/components/RecipeCard/RecipeCard'
import { RecipeCardRecipe } from '@Common/RecipesList/components/RecipeCard/types/RecipeCardRecipe'
import Text from '@Common/Text/Text'
import { Translation } from '@Models/common'
import { FoodTypes, Weight } from '@Models/FoodModels'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import gql from 'graphql-tag'
import { useState } from 'react'
import RX from 'reactxp'
import { VirtualListView, VirtualListViewCellRenderDetails } from 'reactxp-virtuallistview'
import { ComponentBase } from 'resub'
import FoodPreview from './components/FoodPreview'


const WINDOW_MAX_WIDTH = 500

const LIST_ITEM_HEIGHT = 50
const INNER_CONTAINER_HEIGHT = 500

export interface SelectFoodMealItem {
  amount?: number
  food?: SelectFoodFood
  recipe?: RecipeCardRecipe
  weight?: SelectFoodFood_weights
  id: string,
  customUnit?: string
  gramWeight?: number
  description?: Translation[]
}

interface SelectFoodCommonProps {
  style?: any,
  onDismiss: () => void,
  onSubmit: (mealItem: SelectFoodMealItem) => any,
  foodTypes: FoodTypes[],
}

interface SelectFoodProps extends SelectFoodCommonProps {
  nameSearchQuery: string

  foods: SelectFoodQuery_foods_foods[],
  recipes: SelectFoodQuery_recipes_recipes[],
  onSearch: (nameSearchQuery: string) => void,
  loading?: boolean,
}

interface SelectFoodState {
  width?: number,
  height?: number,
  selectedItem?: SelectFoodMealItem,

  weights: Weight[],
  mode: FoodTypes,
}

class SelectFood extends ComponentBase<SelectFoodProps & RX.CommonProps, SelectFoodState> {
  textInput: any
  previewInput: any
  inputContainerAnimatedHeight = RX.Animated.createValue(50)

  constructor(props: SelectFoodProps & RX.CommonProps) {
    super(props)

    this.state = {
      weights: [],
      mode: FoodTypes.food,
    }
  }

  public render() {
    const { style } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[
              styles.container,
              { backgroundColor: theme.colors.white },
              {
                height: this.state.height,
                maxHeight: INNER_CONTAINER_HEIGHT,
              },
              style,
            ]}
          >
            <RX.View style={[styles.innerContainer, { width: this.state.width }]}>
              <RX.Animated.View
                style={[
                  styles.inputContainer,
                  // this.state.selectedItem ? {} : { backgroundColor: theme.colors.foodDialogSearchBG },
                  {
                    height: this.inputContainerAnimatedHeight,
                  }
                ]}
              >
                {
                  !this.state.selectedItem &&
                  <>
                    <RX.TextInput
                      ref={(ref: any) => this.textInput = ref}
                      value={this.props.nameSearchQuery}
                      onChangeText={this.props.onSearch}
                      style={styles.textInput}
                      autoFocus
                      placeholder={translate('mealItemExample')}
                    />
                  </>
                }

                {this.state.selectedItem && this._renderPreview(this.state.selectedItem)}
              </RX.Animated.View>

              <RX.View
                style={{ flexDirection: 'row', marginTop: Styles.values.spacing, marginBottom: Styles.values.spacing }}>
                {
                  this.props.foodTypes.map(foodType => (
                    <FlatButton
                      label={translate(foodType)}
                      onPress={() => this.setState({ mode: foodType })}
                      {...this._getModeButtonStyle(theme, foodType)}
                    />
                  ))
                }
              </RX.View>

              {
                this._renderTabContent()
              }

            </RX.View>

            {
              !this.state.selectedItem &&
              <FlatButton
                label={translate('createX', { name: this.props.nameSearchQuery })}
                onPress={() => {
                  // const key = String(Math.random())
                  // this.props.onSubmit({
                  //   key,
                  //   title: this.props.nameSearchQuery,
                  //   type: 'food',
                  //   // height: 40,
                  //   // template: '_mealItem',
                  //   customUnit: translate('g'),
                  //   weights: [],
                  //   slug: key,
                  // }, 1)
                  this.props.onDismiss()
                }}
                style={styles.createNewFoodButton}
              />
            }
            {
              this.props.loading &&
              <RX.View
                ignorePointerEvents
                style={Styles.values.absolutelyExtended}
              >
                <LoadingIndicator />
              </RX.View>
            }
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  protected _buildState(props: SelectFoodProps & RX.CommonProps, initialBuild: boolean): Partial<SelectFoodState> | undefined {
    return {
      width: ResponsiveWidthStore.getWidth(),
      height: ResponsiveWidthStore.getHeight(),
    }
  }

  private _getModeButtonStyle = (theme: Theme, itemMode: FoodTypes) => {
    const { mode } = this.state

    return {
      labelStyle: {
        color: itemMode === mode ? theme.colors.flatButtonTextColor : theme.colors.flatButtonInactiveTextColor,
      },
      style: {
        [Styles.values.marginEnd]: Styles.values.spacing / 2,
        borderColor: itemMode === mode ? theme.colors.flatButtonBorderColor : theme.colors.flatButtonInactiveBorderColor,
      },
    }
  }

  private _renderTabContent = () => {
    const { mode } = this.state

    const itemInfo = {
      height: LIST_ITEM_HEIGHT,
      template: '_mealItem',
    }

    switch (mode) {
      case FoodTypes.food:
        return (
          <RX.View
            style={{
              height: INNER_CONTAINER_HEIGHT - (77 + 64),
            }}
          >
            <VirtualListView
              key={1}
              keyboardShouldPersistTaps
              itemList={this.props.foods.map(f => ({
                id: f.id,
                food: f,
                key: f.id,
                ...itemInfo,
              }))}
              renderItem={this._renderFoodItem}
            />
          </RX.View>
        )
      case FoodTypes.recipe:
        return (
          <RX.View
            style={{
              height: INNER_CONTAINER_HEIGHT - (77 + 64),
            }}
          >
            <VirtualListView
              key={2}
              keyboardShouldPersistTaps
              itemList={this.props.recipes.map(r => ({
                id: r.id,
                recipe: r,
                key: r.id,
                ...itemInfo,
              }))}
              renderItem={this._renderRecipeItem}
            />
          </RX.View>
        )
    }

    throw new Error('no food or recipe')
  }

  private _renderRecipeItem = ({ item }: VirtualListViewCellRenderDetails<any> & SelectFoodMealItem) => (
    <RX.View
      style={styles.searchResultItemContainer}
      onPress={this._onResultPress(item)}
    >
      <Text translations={item.recipe.title} />
    </RX.View>
  )

  private _renderFoodItem = ({ item }: VirtualListViewCellRenderDetails<any> & SelectFoodMealItem) => (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <RX.View
          style={styles.searchResultItemContainer}
          onPress={this._onResultPress(item)}
        >
          <Text translations={item.food.name} />
          <Text translations={item.food.description}
                style={{ [Styles.values.marginStart]: Styles.values.spacing / 2, color: theme.colors.subtitle }} />
        </RX.View>
      )}
    </ThemeContext.Consumer>
  )

  private _renderPreview = (item: SelectFoodMealItem) => {
    if (!item) return null

    if (item.food) {
      return (
        <FoodPreview
          item={item}
          inputRef={(ref: any) => this.previewInput = ref}
          onDismiss={this._cancelSelection}
          onSubmit={this._onFoodSubmit}
          height={INNER_CONTAINER_HEIGHT}
        />
      )
    }

    if (item.recipe) {
      return (
        <RecipePreview
          onDismiss={this._cancelSelection}
          inputRef={(ref: any) => this.previewInput = ref}
          recipe={item.recipe}
          onSubmit={this._onRecipeSubmit}
          height={INNER_CONTAINER_HEIGHT}
        />
      )
    }

    return null
  }

  private _onResultPress = (item: SelectFoodMealItem) => async () => {
    // showFoodPreviewModal({
    //   item,
    //   inputRef: (ref: any) => this.previewInput = ref,
    //   onDismiss: this._cancelSelection,
    //   onSelectPress: () => null,
    //   onSubmit: this._onSubmit,
    //   height: INNER_CONTAINER_HEIGHT,
    // })
    // return
    this.setState({
      selectedItem: item,
    }, () => {
      this.previewInput.focus()
    })

    return this._toggleInputContainer(true)
  }

  private _cancelSelection = async () => {
    await this._toggleInputContainer(false)
    this.setState({
      selectedItem: undefined,
    })
  }

  private _toggleInputContainer = (on: boolean) => {
    return new Promise((resolve) => {
      RX.Animated.timing(this.inputContainerAnimatedHeight, {
        toValue: on ? INNER_CONTAINER_HEIGHT : 50,
        duration: on ? 400 : 200,
        easing: RX.Animated.Easing.Default(),
      }).start(resolve)
    })
  }

  private _onFoodSubmit = (food: SelectFoodQuery_foods_foods, amount: number, weight?: SelectFoodQuery_foods_foods_weights, customUnit?: string, gramWeight?: number, description?: Translation[]) => {
    if (!this.state.selectedItem) return

    this.props.onSubmit({
      id: String(Math.random()),
      food,
      amount,
      weight,
      customUnit: weight ? undefined : customUnit,
      gramWeight: weight ? undefined : gramWeight,
      description,
    })
  }

  private _onRecipeSubmit = (recipe: SelectFoodQuery_recipes_recipes, serving: number) => {
    if (!this.state.selectedItem) return

    this.props.onSubmit({
      id: String(Math.random()),
      recipe,
      amount: serving,
    })
  }
}

function SelectFoodContainer(props: SelectFoodCommonProps) {
  const [nameSearchQuery, setNameSearchQuery] = useState('')
  const { data, loading } = useQuery<SelectFoodQuery, SelectFoodQueryVariables>(gql`
    query SelectFoodQuery($nameSearchQuery: String) {
      foods (nameSearchQuery: $nameSearchQuery) {
        foods {
          ...SelectFoodFood
        }
      }
      recipes (nameSearchQuery: $nameSearchQuery) {
        recipes { ...RecipeCardRecipe }
      }
    }

    ${SelectFoodContainer.fragments.food}
    ${RecipeCard.fragments.recipe}
  `, {
    skip: nameSearchQuery.length === 0,
    variables: {
      nameSearchQuery
    },
    client
  })

  return (
    <SelectFood
      {...props}
      loading={loading}
      nameSearchQuery={nameSearchQuery}
      foods={(data && data.foods && data.foods.foods) || []}
      recipes={(data && data.recipes && data.recipes.recipes) || []}
      onSearch={searchQuery => setNameSearchQuery(searchQuery)}
    />
  )
}

SelectFoodContainer.fragments = {
  food: gql`
    fragment SelectFoodFood on Food {
      id
      name { text locale }
      description { text locale }
      weights {
        amount
        gramWeight
        id
        name { text locale }
      }
      image {url}
      thumbnail {url}
    }
  `
}

export default SelectFoodContainer

const styles = {
  container: RX.Styles.createViewStyle({
    // paddingTop: 80,
    padding: Styles.values.spacing * 2,
    alignItems: 'center',
    borderRadius: 8,
  }),
  innerContainer: RX.Styles.createViewStyle({
    maxWidth: WINDOW_MAX_WIDTH,
  }),
  inputContainer: RX.Styles.createViewStyle({
    alignSelf: 'stretch',
    borderRadius: 10,
    paddingHorizontal: 10,
    // marginTop: 60,
    justifyContent: 'center',
  }),
  textInput: RX.Styles.createTextInputStyle({
    borderBottomWidth: 0,
    flex: 1,
    backgroundColor: 'transparent',
    fontSize: Styles.fontSizes.size20
  }),
  cancelButton: RX.Styles.createViewStyle({
    position: 'absolute',
    top: Styles.values.spacing,
    left: Styles.values.spacing,
    padding: Styles.values.spacing,
    cursor: 'pointer',
  }),
  cancelIcon: RX.Styles.createImageStyle({
    width: 20,
    height: 20,
  }),
  searchResultItemContainer: RX.Styles.createViewStyle({
    flexDirection: 'row',
    height: LIST_ITEM_HEIGHT,
    padding: Styles.values.spacing / 2,
    borderBottomWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
    cursor: 'pointer',
  }),
  createNewFoodButton: RX.Styles.createViewStyle({
    position: 'absolute',
    [Styles.values.end]: Styles.values.spacing * 2,
    bottom: Styles.values.spacing,
  })
}
