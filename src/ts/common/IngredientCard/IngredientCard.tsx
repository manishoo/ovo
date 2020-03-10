/*
 * IngredientCard.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import { showFoodPreviewModal } from '@Common/FoodPickerDialog/components/FoodPreview'
import Image from '@Common/Image/Image'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import { IngredientFoodFragment, IngredientFragment, IngredientRecipeFragment } from '@Models/ingredients'
import { Ingredient } from '@Models/types/Ingredient'
import ImageSource from '@Modules/images'
import { createId } from '@Utils/create-id'
import { determineIfIsFood } from '@Utils/transformers/meal.transformer'
import RX from 'reactxp'


const CLEAR_ICON_DIMENSION = 20

interface IngredientCardProps {
  style?: any,
  ingredient: Ingredient,
  onIngredientChange?: (ingredient: Ingredient) => void,
  onDelete?: () => void,
  onPress?: (e: RX.Types.SyntheticEvent) => void,
  size: number,
  hideUnits?: boolean,
  hideTitle?: boolean,
}

export default class IngredientCard extends RX.Component<IngredientCardProps> {
  static fragments = {
    ingredient: IngredientFragment,
    food: IngredientFoodFragment,
    recipe: IngredientRecipeFragment,
  }
  private _previewScaleAnimatedValue = RX.Animated.createValue(1)
  private _previewAnimatedStyle = RX.Styles.createAnimatedViewStyle({
    transform: [{ scale: this._previewScaleAnimatedValue }]
  })

  public render() {
    const { style, ingredient } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.Animated.View
            onMouseEnter={this._onHoverStart}
            onMouseLeave={this._onHoverEnd}
            style={[
              styles.container,
              {
                width: this.props.size,
                cursor: this.props.onPress ? 'pointer' : undefined,
              },
              style,
            ]}
          >
            {/**
             * Food Image
             * */}
            <RX.View
              style={{
                width: this.props.size,
                height: this.props.size,
                borderRadius: this.props.size / 20,
                backgroundColor: theme.colors.recipeCardImagePlaceholderBG,
              }}
            >
              {
                ingredient.item && ingredient.item.thumbnail &&
                <RX.Animated.Image
                  source={ingredient.item.thumbnail.url}
                  style={[styles.image, this._previewAnimatedStyle]}
                  resizeMode={'cover'}
                />
              }
            </RX.View>

            {/**
             * Food name
             * */}
            {
              !this.props.hideTitle &&
              <>
                <Text translations={this._getIngredientTitle() || []} style={styles.name} />{/*FIXME remove !*/}
                {ingredient.description &&
                <Text translations={ingredient.description}
                      style={{ color: theme.colors.subtitle, marginBottom: 5, }} />}
              </>
            }

            <RX.View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              {/**
               * Food unit
               * */}
              {
                !this.props.hideUnits &&
                <RX.View
                  onPress={this.props.onIngredientChange ? this._handleUnitPress : undefined}
                  style={[styles.unitWrapper, {
                    cursor: this.props.onIngredientChange ? 'pointer' : undefined,
                    backgroundColor: theme.colors.recipeIngredientUnitBG
                  }]}
                >
                  <Text style={[{
                    color: theme.colors.recipeIngredientUnitTextColor,
                    fontSize: Styles.fontSizes.size12
                  }]}>{ingredient.amount}</Text>
                  <Text
                    translations={ingredient.unit ? ingredient.unit.name : undefined}
                    style={[
                      styles.unitText,
                      {
                        color: theme.colors.recipeIngredientUnitTextColor,
                      }
                    ]}
                  >{!ingredient.unit && ingredient.item && !determineIfIsFood(ingredient.item) ? translate('serving') : translate('g')}</Text>
                </RX.View>
              }

              {/**
               * isOptional label
               * */}
              {
                ingredient.isOptional &&
                <RX.View
                  onPress={this.props.onIngredientChange ? this._handleUnitPress : undefined}
                  style={[styles.unitWrapper, {
                    cursor: this.props.onIngredientChange ? 'pointer' : undefined,
                    backgroundColor: theme.colors.recipeIngredientRequiredBG
                  }]}
                >
                  <Text style={[{
                    color: theme.colors.recipeIngredientRequiredTextColor,
                    fontSize: Styles.fontSizes.size12
                  }]} translate={'optional'} />
                </RX.View>
              }
            </RX.View>

            {/**
             * Delete button
             * */}
            {
              this.props.onDelete &&
              <RX.View
                style={styles.clearWrapper}
                onPress={this._handleOnDelete}
              >
                <Image
                  source={ImageSource.Clear}
                  style={styles.clearIcon}
                />
              </RX.View>
            }

          </RX.Animated.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _getIngredientTitle = () => {
    const { ingredient } = this.props

    if (!ingredient.item) return ingredient.name

    if (determineIfIsFood(ingredient.item)) {
      return ingredient.item.name
    } else {
      return ingredient.item.title
    }
  }

  private _handleOnDelete = () => {
    this.props.onDelete!()

    // RX.Animated.timing(this._containerAnimatedScale, {
    //   toValue: 0,
    //   easing: RX.Animated.Easing.Out(),
    //   duration: 300,
    // })
    //   .start(() => {
    //     this.props.onDelete()
    //   })
  }

  private _handleUnitPress = () => {
    showFoodPreviewModal({
      mealItem: {
        id: createId(),
        ...this.props.ingredient,
      },
      inputRef: () => null,
      onDismiss: () => null,
      onSubmit: (mealItem => {
        if (this.props.onIngredientChange) {
          this.props.onIngredientChange(mealItem)
        }
      }),
      height: 400,
    })
    return
  }

  private _setUI = (isHovering: boolean) => {
    if (!this.props.onPress) return

    RX.Animated.timing(this._previewScaleAnimatedValue, {
      toValue: isHovering ? 1.1 : 1,
      duration: 300,
    }).start()
  }

  private _onHoverStart = () => {
    this._setUI(true)
  }

  private _onHoverEnd = () => {
    this._setUI(false)
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    position: 'relative',
    alignItems: 'flex-start',
  }),
  name: RX.Styles.createTextStyle({
    marginVertical: Styles.values.spacing / 4,
  }),
  image: RX.Styles.createImageStyle({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }),
  clearIcon: RX.Styles.createImageStyle({
    width: CLEAR_ICON_DIMENSION,
    height: CLEAR_ICON_DIMENSION,
  }),
  clearWrapper: RX.Styles.createViewStyle({
    position: 'absolute',
    top: Styles.values.spacing / 2,
    [Styles.values.start]: Styles.values.spacing / 2,
    cursor: 'pointer',
  }),
  unitWrapper: RX.Styles.createViewStyle({
    padding: 5,
    paddingHorizontal: 8,
    flex: 0,
    flexDirection: 'row',
    borderRadius: 20,
  }),
  unitText: RX.Styles.createTextStyle({
    fontSize: Styles.fontSizes.size12,
    [Styles.values.marginStart]: Styles.values.spacing / 4,
  }),
}
