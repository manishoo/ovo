/*
 * IngredientCard.tsx
 * Copyright: Ouranos Studio 2019
 */

import { showFoodPreviewModal } from 'common/FoodDialog/components/FoodPreview'
import Image from 'common/Image/Image'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import Text from 'common/Text/Text'
import ImageSource from 'modules/images'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { IngredientWithKey } from 'src/ts/views/RecipeForm/RecipeForm'

// const INGREDIENT_CARD_WIDTH = 100
// const INGREDIENT_CARD_HEIGHT = 100
const CLEAR_ICON_DIMENSION = 20

interface IngredientCardProps {
  style?: any,
  ingredient: IngredientWithKey,
  onIngredientChange?: (ingredient: IngredientWithKey) => void,
  onDelete?: () => void,
  size: number
}

export default class IngredientCard extends RX.Component<IngredientCardProps> {
  render() {
    const { style, ingredient } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.Animated.View
            style={[
              styles.container,
              { width: this.props.size, paddingTop: this.props.size },
              this._containerAnimationStyle,
              style,
            ]}
          >
            {/**
             * Food Image
             * */}
            <Image
              source={ingredient.thumbnail ? ingredient.thumbnail.url : ''}
              style={[styles.image, { height: this.props.size }]}
            />

            {/**
             * Food name
             * */}
            <Text translations={ingredient.name!} style={styles.name} />{/*FIXME remove !*/}
            {ingredient.description &&
            <Text translations={ingredient.description} style={{ color: theme.colors.subtitle, marginBottom: 5, }} />}

            {/**
             * Food unit
             * */}
            <RX.View
              onPress={this.props.onIngredientChange ? this._handleUnitPress : undefined}
              style={[styles.unitWrapper, {
                cursor: this.props.onIngredientChange ? 'pointer' : 'default',
                backgroundColor: theme.colors.recipeIngredientUnitBG
              }]}
            >
              <Text style={[{
                color: theme.colors.recipeIngredientUnitTextColor,
                fontSize: Styles.fontSizes.size12
              }]}>{ingredient.amount}</Text>
              {
                ingredient.weight ?
                  <Text
                    translations={ingredient.weight.name}
                    style={[
                      styles.unitText,
                      {
                        color: theme.colors.recipeIngredientUnitTextColor,
                      }
                    ]}
                  /> :
                  <Text
                    style={[
                      styles.unitText,
                      {
                        color: theme.colors.recipeIngredientUnitTextColor,
                      }
                    ]}
                  >{ingredient.customUnit || getLocalizedText('g')}</Text>
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

  componentDidMount() {
    RX.Animated.timing(this._containerAnimatedScale, {
      toValue: 0.9,
      easing: RX.Animated.Easing.OutBack(),
      duration: 500,
    })
      .start()
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
      item: {
        amount: this.props.ingredient.amount,
        food: this.props.ingredient.food!,
        weight: this.props.ingredient.weight || undefined,
        customUnit: this.props.ingredient.customUnit || null,
        gramWeight: this.props.ingredient.gramWeight || null,
        description: this.props.ingredient.description || null,
      },
      inputRef: () => null,
      onDismiss: () => null,
      onSelectPress: () => null,
      onSubmit: ((food, amount, weight, customUnit, gramWeight, description) => {
        this.props.onIngredientChange!({
          ...this.props.ingredient,
          food,
          amount,
          weight: weight || null,
          customUnit: customUnit || null,
          gramWeight: gramWeight || null,
          description: description || null,
        })
      }),
      height: 400,
    })
    return
  }

  private _containerAnimatedScale = RX.Animated.createValue(0)
  private _containerAnimationStyle = RX.Styles.createAnimatedViewStyle({
    transform: [{
      scale: this._containerAnimatedScale
    }]
  })
}

const styles = {
  container: RX.Styles.createViewStyle({
    position: 'relative',
    alignItems: 'flex-start'
  }),
  name: RX.Styles.createTextStyle({
    marginVertical: Styles.values.spacing / 4,
  }),
  image: RX.Styles.createImageStyle({
    // width: INGREDIENT_CARD_WIDTH,
    // height: INGREDIENT_CARD_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
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
