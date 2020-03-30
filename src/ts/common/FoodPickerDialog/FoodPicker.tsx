/*
 * FoodPicker.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, useQuery } from '@apollo/client'
import client from '@App/client'
import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import FlatButton from '@Common/FlatButton/FlatButton'
import {
  FoodPreviewMealItem,
  FoodPreviewMealItem_item,
  FoodPreviewMealItem_item_Food,
  FoodPreviewMealItem_item_Recipe,
} from '@Common/FoodPickerDialog/components/types/FoodPreviewMealItem'
import {
  FoodPickerQuery,
  FoodPickerQuery_foods_foods,
  FoodPickerQuery_recipes_recipes,
  FoodPickerQueryVariables
} from '@Common/FoodPickerDialog/types/FoodPickerQuery'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Navbar from '@Common/Navbar/Navbar'
import Text from '@Common/Text/Text'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { createId } from '@Utils/create-id'
import getDefaultMealItem from '@Utils/get-default-meal-item'
import debounce from 'lodash/debounce'
import { useState } from 'react'
import RX from 'reactxp'
import { VirtualListView } from 'reactxp-virtuallistview'
import { ComponentBase } from 'resub'
import FoodPreview, { FoodPreviewOnSubmit } from './components/FoodPreview'


const CONTAINER_MAX_WIDTH = 500
const LIST_ITEM_HEIGHT = 50
const CONTAINER_MAX_HEIGHT = 500

export enum FoodTypes {
  all = 'All',
  food = 'Foods',
  recipe = 'Recipes',
  meal = 'Meals',
}

export interface FoodPickerMealItem extends FoodPreviewMealItem {
}

export interface FoodPickerCommonProps {
  style?: any,
  onDismiss: () => void,
  onSubmit: FoodPreviewOnSubmit,
  foodTypes: FoodTypes[],
  selectProps?: any,
  showOptional?: boolean,
  submitButtonLabel?: string,
}

interface FoodPickerProps extends FoodPickerCommonProps {
  foods: FoodPickerQuery_foods_foods[],
  recipes: FoodPickerQuery_recipes_recipes[],
  onSearch: (nameSearchQuery: string) => void,
  loading?: boolean,
  hasMoreFoods?: boolean,
  hasMoreRecipes?: boolean,
  onLoadMoreFoods: () => void,
  onLoadMoreRecipes: () => void,
}

interface FoodPickerState {
  width: number,
  height: number,
  selectedItem?: FoodPreviewMealItem_item,
  mode: FoodTypes,
  searchQuery?: string,
}

class FoodPicker extends ComponentBase<FoodPickerProps & RX.CommonProps, FoodPickerState> {
  textInput: any
  previewInput: any
  inputContainerAnimatedHeight = RX.Animated.createValue(50)

  constructor(props: FoodPickerProps & RX.CommonProps) {
    super(props)

    this._onSearch = debounce(this._onSearch, 500)
  }

  public render() {
    const { style } = this.props

    const isSmallSize = this.state.width < CONTAINER_MAX_WIDTH

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[
              styles.container,
              {
                height: this.state.height,
                maxHeight: isSmallSize ? undefined : CONTAINER_MAX_HEIGHT,
                width: this.state.width,
                backgroundColor: theme.colors.white,
                borderRadius: isSmallSize ? 0 : 10,
                padding: isSmallSize ? Styles.values.spacing : Styles.values.spacing * 2,
              },
              style,
            ]}
          >
            {
              isSmallSize &&
              <Navbar
                style={{
                  paddingBottom: 0
                }}
              />
            }

            <RX.Animated.View
              style={[
                styles.inputContainer,
                {
                  height: this.inputContainerAnimatedHeight,
                }
              ]}
            >
              {
                !this.state.selectedItem &&
                <RX.TextInput
                  ref={(ref: any) => this.textInput = ref}
                  value={this.state.searchQuery}
                  onChangeText={searchQuery => this.setState({ searchQuery }, () => this.state.searchQuery && this._onSearch(this.state.searchQuery))}
                  style={styles.textInput}
                  autoFocus
                  placeholder={translate('mealItemExample')}
                />
              }

              {this.state.selectedItem && this._renderPreview(this.state.selectedItem)}
            </RX.Animated.View>

            <RX.View
              style={styles.buttonsContainer}>
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

  protected _buildState(props: FoodPickerProps & RX.CommonProps, initialBuild: boolean): Partial<FoodPickerState> | undefined {
    const state: Partial<FoodPickerState> = {
      width: ResponsiveWidthStore.getWidth(),
      height: ResponsiveWidthStore.getHeight(),
    }

    if (initialBuild) {
      state.mode = props.foodTypes[0]
    }

    return state
  }

  private readonly _onSearch = (text: string) => {
    return this.props.onSearch(text)
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

  private _getTabContentHeight = () => this.state.height - (77 + 64 + 72)

  private _renderTabContent = () => {
    const { mode } = this.state

    const itemInfo = {
      height: LIST_ITEM_HEIGHT,
      template: '_mealItem',
    }

    const contentHeight = this._getTabContentHeight()

    switch (mode) {
      case FoodTypes.all:
        return (
          <RX.ScrollView
            style={{
              height: contentHeight,
              maxHeight: this.state.width > 500 ? CONTAINER_MAX_HEIGHT : undefined,
              paddingBottom: Styles.values.spacing,
            }}
          >
            {
              this.props.foods.length > 0 &&
              [
                <RX.View style={styles.titleWrapper}>
                  <Text style={styles.title} translate='Foods' />
                  {
                    this.props.foods.length > 5 &&
                    <Text style={styles.moreButton} translate='More'
                          onPress={() => this.setState({ mode: FoodTypes.food })} />
                  }
                </RX.View>,
                // @ts-ignore
                this.props.foods.slice(0, 5).map(food => this._renderFoodItem({ item: { food } }))
              ]
            }
            {
              this.props.recipes.length > 0 &&
              [
                <RX.View style={styles.titleWrapper}>
                  <Text style={styles.title} translate='Recipes' />
                  {
                    this.props.recipes.length > 5 &&
                    <Text style={styles.moreButton} translate='More'
                          onPress={() => this.setState({ mode: FoodTypes.recipe })} />
                  }
                </RX.View>,
                // @ts-ignore
                this.props.recipes.slice(0, 5).map(recipe => this._renderRecipeItem({ item: { recipe } }))
              ]
            }
          </RX.ScrollView>
        )
      case FoodTypes.food: {
        const itemList: any = this.props.foods.map(f => ({
          food: f,
          key: f.id,
          ...itemInfo,
        }))

        if (this.props.hasMoreFoods) {
          itemList.push({
            ...itemInfo,
            template: 'moreButton',
            key: 'more',
            food: null,
          })
        }

        return (
          <RX.View
            style={{
              height: contentHeight,
              maxHeight: this.state.width > 500 ? CONTAINER_MAX_HEIGHT : undefined,
            }}
          >
            <VirtualListView
              key={1}
              keyboardShouldPersistTaps
              itemList={itemList}
              renderItem={this._renderFoodItem}
            />
          </RX.View>
        )
      }
      case FoodTypes.recipe: {
        const itemList: any = this.props.recipes.map(f => ({
          recipe: f,
          key: f.id,
          ...itemInfo,
        }))

        if (this.props.hasMoreRecipes) {
          itemList.push({
            ...itemInfo,
            template: 'moreButton',
            key: 'more',
            recipe: null,
          })
        }

        return (
          <RX.View
            style={{
              height: contentHeight,
              maxHeight: this.state.width > 500 ? CONTAINER_MAX_HEIGHT : undefined,
            }}
          >
            <VirtualListView
              key={2}
              keyboardShouldPersistTaps
              itemList={itemList}
              renderItem={this._renderRecipeItem}
            />
          </RX.View>
        )
      }
    }

    throw new Error('no food or recipe')
  }

  private _renderLoadMoreButton = (onLoadMore: () => void) => (
    <RX.View
      style={{
        padding: Styles.values.spacing,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FlatButton
        label={translate('loadMore')}
        onPress={onLoadMore}
        borderless
      />
    </RX.View>
  )

  private _renderRecipeItem = ({ item: { recipe, template } }: any) => {
    if (template === 'moreButton') {
      return this._renderLoadMoreButton(this.props.onLoadMoreRecipes)
    }

    return this._renderRecipe(recipe)
  }

  private _renderRecipe = (recipe: FoodPreviewMealItem_item_Recipe) => (
    <RX.View
      style={styles.searchResultItemContainer}
      onPress={this._onResultPress(recipe)}
    >
      <Text translations={recipe.title} />
    </RX.View>
  )

  private _renderFoodItem = ({ item: { food, template } }: any) => {
    if (template === 'moreButton') {
      return this._renderLoadMoreButton(this.props.onLoadMoreFoods)
    }

    return this._renderFood(food)
  }

  private _renderFood = (food: FoodPreviewMealItem_item_Food) => (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <RX.View
          style={styles.searchResultItemContainer}
          onPress={this._onResultPress(food)}
        >
          <Text translations={food.name} />
          <Text translations={food.description || []}
                style={{ [Styles.values.marginStart]: Styles.values.spacing / 2, color: theme.colors.subtitle }} />
        </RX.View>
      )}
    </ThemeContext.Consumer>
  )

  private _renderPreview = (mealItemItem: FoodPreviewMealItem_item) => {
    if (!mealItemItem) return null

    return (
      <FoodPreview
        mealItem={getDefaultMealItem(mealItemItem)}
        inputRef={(ref: any) => this.previewInput = ref}
        onDismiss={this._cancelSelection}
        onSubmit={this._onFoodSubmit}
        height={CONTAINER_MAX_HEIGHT}
        selectProps={this.props.selectProps}
        showOptional={this.props.showOptional}
        submitButtonLabel={this.props.submitButtonLabel}
      />
    )
  }

  private _onResultPress = (item: FoodPreviewMealItem_item) => async () => {
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
        toValue: on ? this.state.height : 50,
        duration: on ? 400 : 200,
        easing: RX.Animated.Easing.Default(),
      }).start(resolve)
    })
  }

  private _onFoodSubmit = (mealItem: FoodPreviewMealItem, userMealId?: string) => {
    if (!this.state.selectedItem) return

    this.props.onSubmit({
      id: createId(),
      ...mealItem,
    }, userMealId)
  }
}

export function useFoodsSearch(nameSearchQuery: string, recipesPage?: number, foodsPage?: number) {
  return useQuery<FoodPickerQuery, FoodPickerQueryVariables>(gql`
    query FoodPickerQuery($nameSearchQuery: String, $foodsPage: Int, $skipFoods: Boolean!, $recipesPage: Int, $skipRecipes: Boolean!) {
      foods (nameSearchQuery: $nameSearchQuery, page: $foodsPage) @skip(if: $skipFoods) {
        foods {
          ...FoodPreviewFood
        }
        pagination {
          page
          hasNext
        }
      }
      recipes (nameSearchQuery: $nameSearchQuery, page: $recipesPage) @skip(if: $skipRecipes) {
        recipes { ...FoodPreviewRecipe }
        pagination {
          page
          hasNext
        }
      }
    }

    ${FoodPreview.fragments.food}
    ${FoodPreview.fragments.recipe}
  `, {
    fetchPolicy: 'cache-and-network',
    skip: nameSearchQuery.length === 0,
    variables: {
      nameSearchQuery,
      recipesPage: recipesPage,
      foodsPage: foodsPage,
      skipRecipes: false,
      skipFoods: false,
    },
    client,
    returnPartialData: true,
  })
}

function FoodPickerContainer(props: FoodPickerCommonProps) {
  const [nameSearchQuery, setNameSearchQuery] = useState('')
  const [foodsPage, setFoodsPage] = useState(1)
  const [recipesPage, setRecipesPage] = useState(1)
  const { data, loading, fetchMore } = useFoodsSearch(nameSearchQuery)

  return (
    <FoodPicker
      {...props}
      loading={loading}
      foods={(data && data.foods && data.foods.foods) || []}
      hasMoreFoods={data && data.foods && data.foods.pagination.hasNext}
      onLoadMoreFoods={() => fetchMore({
        variables: {
          nameSearchQuery,
          foodsPage: foodsPage + 1,
          skipRecipes: true,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev

          setFoodsPage(foodsPage + 1)
          return Object.assign({}, prev, {
            foods: {
              ...prev.foods,
              foods: [
                ...prev.foods.foods,
                ...fetchMoreResult.foods.foods,
              ],
              pagination: fetchMoreResult.foods.pagination,
            }
          })
        }
      })}
      recipes={(data && data.recipes && data.recipes.recipes) || []}
      hasMoreRecipes={data && data.recipes && data.recipes.pagination.hasNext}
      onLoadMoreRecipes={() => fetchMore({
        variables: {
          nameSearchQuery,
          recipesPage: recipesPage + 1,
          skipFoods: true
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev

          setRecipesPage(recipesPage + 1)
          return Object.assign({}, prev, {
            recipes: {
              ...prev.recipes,
              recipes: [
                ...prev.recipes.recipes,
                ...fetchMoreResult.recipes.recipes,
              ],
              pagination: fetchMoreResult.recipes.pagination,
            }
          })
        }
      })}
      onSearch={searchQuery => setNameSearchQuery(searchQuery)}
    />
  )
}

export default FoodPickerContainer

const styles = {
  container: RX.Styles.createViewStyle({
    maxWidth: CONTAINER_MAX_WIDTH,
  }),
  inputContainer: RX.Styles.createViewStyle({
    alignSelf: 'stretch',
    borderRadius: 10,
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
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
    cursor: 'pointer',
  }),
  createNewFoodButton: RX.Styles.createViewStyle({
    position: 'absolute',
    [Styles.values.end]: Styles.values.spacing * 2,
    bottom: Styles.values.spacing,
  }),
  title: RX.Styles.createTextStyle({
    fontSize: 16,
    fontWeight: 'bold',
  }),
  titleWrapper: RX.Styles.createViewStyle({
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: Styles.values.spacing,
    marginBottom: Styles.values.spacing / 2
  }),
  moreButton: RX.Styles.createTextStyle({
    fontSize: 12,
    [Styles.values.marginStart]: Styles.values.spacing / 2,
  }),
  buttonsContainer: RX.Styles.createViewStyle({
    flexDirection: 'row',
    marginVertical: Styles.values.spacing / 2,
  })
}
