/*
 * SelectFood.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useQuery } from '@apollo/react-hooks'
import FlatButton from 'common/FlatButton/FlatButton'
import {
  SelectFoodQuery,
  SelectFoodQuery_foods_foods,
  SelectFoodQuery_foods_foods_weights,
  SelectFoodQueryVariables
} from 'common/FoodDialog/types/SelectFoodQuery'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import Text from 'common/Text/Text'
import gql from 'graphql-tag'
import { useState } from 'react'
import RX from 'reactxp'
import { VirtualListView, VirtualListViewItemInfo } from 'reactxp-virtuallistview'
import { ComponentBase } from 'resub'
import client from 'src/ts/app/client'
import Styles from 'src/ts/app/Styles'
import { Theme } from 'src/ts/app/Theme'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { Translation } from 'src/ts/models/common'
import { DishItem, Weight } from 'src/ts/models/FoodModels'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import FoodPreview from './components/FoodPreview'
// import FoodPreview from './components/FoodPreview'

const WINDOW_MAX_WIDTH = 500

enum SelectFoodMode {
  foods = 'foods',
  recipes = 'recipes',
}

const LIST_ITEM_HEIGHT = 50
const INNER_CONTAINER_HEIGHT = 500

interface SelectFoodCommonProps {
  style?: any,
  onDismiss: () => void,
  onSubmit: (dishItem: DishItem) => any,
}

interface SelectFoodProps extends SelectFoodCommonProps {
  nameSearchQuery: string
  // autoFocus: boolean,
  // foodTypes: FoodTypes[],
  // _onSubmit: (mealItem: DishItem, amount: number, weight?: Weight) => void,

  foods: SelectFoodQuery_foods_foods[],
  onSearch: (nameSearchQuery: string) => void,
}

interface SelectFoodState {
  width?: number,
  height?: number,
  selectedItem?: DishItem,

  weights: Weight[],
  mode: SelectFoodMode,
}

class SelectFood extends ComponentBase<SelectFoodProps & RX.CommonProps, SelectFoodState> {
  constructor(props: SelectFoodProps & RX.CommonProps) {
    super(props)

    this.state = {
      weights: [],
      mode: SelectFoodMode.foods,
    }
  }

  protected _buildState(props: SelectFoodProps & RX.CommonProps, initialBuild: boolean): Partial<SelectFoodState> | undefined {
    return {
      width: ResponsiveWidthStore.getWidth(),
      height: ResponsiveWidthStore.getHeight(),
    }
  }

  render() {
    const { style } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[
              styles.container,
              { backgroundColor: theme.colors.white },
              {
                // flex: 1,
                // width: this.state.width,
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
                      placeholder={getLocalizedText('mealItemExample')}
                    />
                  </>
                }

                {this.state.selectedItem && this._renderPreview(this.state.selectedItem)}
              </RX.Animated.View>

              <RX.View style={{ flexDirection: 'row', marginTop: Styles.values.spacing, marginBottom: Styles.values.spacing }}>
                <FlatButton
                  label={'Foods'}
                  onPress={() => this.setState({ mode: SelectFoodMode.foods })}
                  {...this._getModeButtonStyle(theme, SelectFoodMode.foods)}
                />
                <FlatButton
                  label={'Recipes'}
                  onPress={() => this.setState({ mode: SelectFoodMode.recipes })}
                  {...this._getModeButtonStyle(theme, SelectFoodMode.recipes)}
                />
              </RX.View>

              {
                (() => {
                  return (
                    <RX.View
                      style={{
                        height: INNER_CONTAINER_HEIGHT - (77 + 64),
                      }}
                    >
                      <VirtualListView
                        keyboardShouldPersistTaps
                        itemList={this._getItemList()}
                        renderItem={this._renderDishItem}
                      />
                    </RX.View>
                  )
                })()
              }

            </RX.View>

            {
              !this.state.selectedItem &&
              <FlatButton
                label={getLocalizedText('createX', { name: this.props.nameSearchQuery })}
                onPress={() => {
                  // const key = String(Math.random())
                  // this.props.onSubmit({
                  //   key,
                  //   title: this.props.nameSearchQuery,
                  //   type: 'food',
                  //   // height: 40,
                  //   // template: '_mealItem',
                  //   customUnit: getLocalizedText('g'),
                  //   weights: [],
                  //   slug: key,
                  // }, 1)
                  this.props.onDismiss()
                }}
                style={styles.createNewFoodButton}
              />
            }
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _getItemList = () => {
    const itemInfo = {
      height: LIST_ITEM_HEIGHT,
      template: '_mealItem',
    }

    if (this.state.mode === SelectFoodMode.foods) {
      return this.props.foods.map((i: any) => ({
        food: i,
        key: i.id,
        ...itemInfo,
      }))
    } else if (this.state.mode === SelectFoodMode.recipes) {
      // this.props.recipes.map((i: any) => ({
      //   ...i,
      //   key: i.id,
      //   ...itemInfo,
      // }))
    }

    return []
  }

  private _getModeButtonStyle = (theme: Theme, itemMode: SelectFoodMode) => {
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

  private _renderDishItem = (item: VirtualListViewItemInfo & DishItem) => {
    if (item.food) {
      return (
        <RX.View
          style={styles.searchResultItemContainer}
          onPress={this._onResultPress(item)}
        >
          <Text translations={item.food.name} />
          {/*<Text style={{ color: '#e4e4e4' }}>
          {item.subtitle}
        </Text>*/}
        </RX.View>
      )
    } else if (item.recipe) {
      return (
        <RX.View
          style={styles.searchResultItemContainer}
          onPress={this._onResultPress(item)}
        >
          {/*<Text translations={item.name} />*/}
          {/*<Text style={{ color: '#e4e4e4' }}>
          {item.subtitle}
        </Text>*/}
        </RX.View>
      )
    }

    throw new Error('no food or recipe')
  }

  private _renderPreview = (item: DishItem) => {
    if (!item) return null

    if (item.food) {
      return (
        <FoodPreview
          item={item}
          inputRef={(ref: any) => this.previewInput = ref}
          onDismiss={this._cancelSelection}
          onSelectPress={(weights) => {
          }/*this.setState({ selectDialogVisible: true, weights })*/}
          onSubmit={this._onSubmit}
          height={INNER_CONTAINER_HEIGHT}
        />
      )
    }

    return null
  }

  private _onResultPress = (item: DishItem) => async () => {
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

  private _onSubmit = (food: SelectFoodQuery_foods_foods, amount: number, weight?: SelectFoodQuery_foods_foods_weights, customUnit?: string, gramWeight?: number, description?: Translation[]) => {
    if (!this.state.selectedItem) return

    // const id = String(Math.random())
    this.props.onSubmit({
        food,
        amount,
        weight,
        customUnit: weight ? undefined : customUnit,
        gramWeight: weight ? undefined : gramWeight,
        description,
      }
      //   {
      //   title: food.name,
      //   weights: food.weights || [],
      //   key: id,
      //   type: 'food',
      //   thumbnail: food.thumbnail,
      //   id: food.id,
      //   subtitle: food.foodGroup.join(', '),
      //   slug: food.id,
      // }, amount, weight
    )
  }

  textInput: any
  previewInput: any
  inputContainerAnimatedHeight = RX.Animated.createValue(50)
}

function SelectFoodContainer(props: SelectFoodCommonProps) {
  const [nameSearchQuery, setNameSearchQuery] = useState('')
  const { data } = useQuery<SelectFoodQuery, SelectFoodQueryVariables>(gql`
    query SelectFoodQuery($nameSearchQuery: String) {
      foods (nameSearchQuery: $nameSearchQuery) {
        foods {
          ...SelectFoodFood
        }
      }
    }
    
    ${SelectFoodContainer.fragments.food}
  `, {
    skip: nameSearchQuery.length === 0,
    // fetchPolicy: 'network-only',
    variables: {
      nameSearchQuery
    },
    client
  })

  return (
    <SelectFood
      {...props}
      nameSearchQuery={nameSearchQuery}
      foods={(data && data.foods && data.foods.foods) || []}
      onSearch={searchQuery => setNameSearchQuery(searchQuery)}
    />
  )
}

SelectFoodContainer.fragments = {
  food: gql`
    fragment SelectFoodFood on Food {
      id
      name { text locale }
      weights {
        amount
        gramWeight
        id
        name { text locale }
      }
      imageUrl {url}
      thumbnailUrl {url}
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
    height: LIST_ITEM_HEIGHT,
    padding: Styles.values.spacing / 2,
    borderBottomWidth: 1,
    borderColor: '#eee',
    justifyContent: 'center',
    cursor: 'pointer',
  }),
  createNewFoodButton: RX.Styles.createViewStyle({
    position: 'absolute',
    [Styles.values.end]: Styles.values.spacing * 2,
    bottom: Styles.values.spacing,
  })
}
