/*
 * IngredientRow.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import HoverView from '@Common/HoverView/HoverButton'
import Image from '@Common/Image/Image'
import InputNumber from '@Common/Input/InputNumber'
import Select from '@Common/Select/Select'
import Text from '@Common/Text/Text'
import TextInputAutoGrow from '@Common/TextInputAutoGrow/TextInputAutoGrow'
import { IngredientFoodFragment, IngredientFragment, IngredientRecipeFragment } from '@Models/ingredients'
import { Ingredient } from '@Models/types/Ingredient'
import { renderImageOrPlaceholder } from '@Utils'
import getFloatFromString from '@Utils/get-float-from-string'
import { getIngredientCommonFields, handleIngredientAmountChange, handleIngredientUnitChange } from '@Utils/ingredients'
import RX from 'reactxp'
import ImageSource from 'src/ts/modules/images/index.web'


interface IngredientRowProps {
  style?: any,
  ingredient: Ingredient,
  onIngredientChange: (ingredient: Ingredient) => void,
  onDelete?: () => void
}

export default class IngredientRow extends RX.Component<IngredientRowProps> {
  static fragments = {
    ingredient: IngredientFragment,
    food: IngredientFoodFragment,
    recipe: IngredientRecipeFragment,
  }

  render() {
    const { style, onIngredientChange } = this.props

    const ingredient = getIngredientCommonFields(this.props.ingredient)

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <HoverView
            id='handler'
            // @ts-ignore
            style={{
              cursor: 'all-scroll'
            }}
            onRenderChild={isHovering => (
              <RX.View
                style={[
                  styles.container,
                  {
                    [Styles.values.paddingEnd]: Styles.values.spacing * 2,
                    backgroundColor: theme.colors.cardBg,
                    borderRadius: 10
                  },
                  style
                ]}
              >
                <RX.View
                  style={{
                    marginTop: Styles.values.spacing / 2,
                    [Styles.values.marginEnd]: Styles.values.spacing / 2,
                  }}
                >
                  {
                    renderImageOrPlaceholder(
                      ingredient.thumbnail,
                      {
                        width: 50,
                        height: 50,
                        borderRadius: 10,
                      },
                      () => null
                    )
                  }
                </RX.View>
                <RX.View
                  style={{
                    [Styles.values.marginStart]: Styles.values.spacing / 2,
                  }}
                >
                  <RX.View
                    style={{
                      flexDirection: 'row',
                      paddingTop: Styles.values.spacing / 2,
                      paddingBottom: 1,
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text
                      translations={ingredient.title || []}
                      style={styles.title}
                    />
                    <RX.View
                      style={{
                        flexDirection: 'row',
                        [Styles.values.marginStart]: -Styles.values.spacing / 2,
                        marginTop: -Styles.values.spacing / 2,
                      }}
                    >
                      <InputNumber
                        value={ingredient.amount && Number(ingredient.amount.toFixed(1))}
                        onChange={value => handleIngredientAmountChange(this.props.ingredient, getFloatFromString(value), ingredient.selectedUnit, onIngredientChange)}
                        textInputStyle={[
                          styles.amountInput,
                          {
                            backgroundColor: isHovering ? theme.colors.textInputBg : 'transparent',
                            width: ((ingredient.amount ? ingredient.amount.toFixed(1) : '').length * 7) + 8,
                            minWidth: 22
                          }
                        ]}
                        style={{
                          marginBottom: 0,
                        }}
                      />
                      <Select
                        value={ingredient.selectedUnit}
                        options={ingredient.units}
                        onChange={handleIngredientUnitChange(this.props.ingredient, onIngredientChange)}
                        style={[
                          styles.unitInput,
                          {
                            backgroundColor: isHovering ? theme.colors.textInputBg : 'transparent',
                          },
                        ]}
                      />
                    </RX.View>
                  </RX.View>
                  <TextInputAutoGrow
                    translations={ingredient.description || []}
                    onTranslationsChange={description => onIngredientChange({
                      ...this.props.ingredient,
                      description
                    })}
                    style={[
                      styles.subtitle,
                      {
                        color: theme.colors.subtitle,
                      }
                    ]}
                    wrapperStyle={{
                      backgroundColor: isHovering ? theme.colors.textInputBg : 'transparent',
                      padding: 0,
                      marginBottom: 0,
                      borderRadius: 4
                    }}
                  />
                </RX.View>
                {/**
                 * Delete button
                 * */}
                {
                  (this.props.onDelete && isHovering) &&
                  <RX.View
                    style={styles.clearWrapper}
                    onPress={this.props.onDelete}
                  >
                    <Image
                      source={ImageSource.Clear}
                      style={styles.clearIcon}
                    />
                  </RX.View>
                }
              </RX.View>
            )}
          />
        )}
      </ThemeContext.Consumer>
    )
  }
}

const CLEAR_ICON_DIMENSION = 20

const styles = {
  container: RX.Styles.createViewStyle({
    flexDirection: 'row',
  }),
  amountInput: RX.Styles.createViewStyle({
    padding: Styles.values.spacing / 2,
    [Styles.values.paddingEnd]: Styles.values.spacing / 4,
    [Styles.values.marginStart]: Styles.values.spacing,
    [Styles.values.borderTopEndRadius]: 0,
    [Styles.values.borderBottomEndRadius]: 0,
  }),
  unitInput: RX.Styles.createViewStyle({
    padding: Styles.values.spacing / 2,
    [Styles.values.paddingStart]: 0,
    [Styles.values.borderTopStartRadius]: 0,
    [Styles.values.borderBottomStartRadius]: 0,
    marginBottom: 0,
  }),
  title: RX.Styles.createTextStyle({
    fontSize: Styles.fontSizes.size16,
    [Styles.values.marginEnd]: Styles.values.spacing / 2
  }),
  clearIcon: RX.Styles.createImageStyle({
    width: CLEAR_ICON_DIMENSION,
    height: CLEAR_ICON_DIMENSION,
  }),
  clearWrapper: RX.Styles.createViewStyle({
    position: 'absolute',
    [Styles.values.end]: Styles.values.spacing / 2,
    cursor: 'pointer',
    padding: Styles.values.spacing / 2,
  }),
  subtitle: RX.Styles.createTextStyle({
    fontWeight: '300',
    fontSize: 12,
  }),
}
