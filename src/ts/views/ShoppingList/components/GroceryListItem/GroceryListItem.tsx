/*
 * GroceryListItem.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import CheckBox from '@Common/Checkbox/Checkbox'
import HoverView from '@Common/HoverView/HoverButton'
import InputNumber from '@Common/Input/InputNumber'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Select from '@Common/Select/Select'
import Text from '@Common/Text/Text'
import CalendarService from '@Services/CalendarService'
import { renderImageOrPlaceholder } from '@Utils'
import { DayComponentDay_meals_items_item_Food } from '@Views/CalendarScreen/components/DayComponent/types/DayComponentDay'
import RX from 'reactxp'


const MAX_WIDTH = 350

const styles = {
  container: RX.Styles.createViewStyle({
    marginVertical: Styles.values.spacing / 2,
    padding: Styles.values.spacing,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    maxWidth: MAX_WIDTH
  }),
  textsContainer: RX.Styles.createViewStyle({
    [Styles.values.paddingStart]: 16,
    justifyContent: 'center',
  }),
  image: RX.Styles.createImageStyle({
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fafafa',
  }),
  title: RX.Styles.createTextStyle({
    fontWeight: '500',
    [Styles.values.marginEnd]: Styles.values.spacing / 2
  }),
  amountInput: RX.Styles.createViewStyle({
    padding: Styles.values.spacing / 2,
    [Styles.values.paddingEnd]: Styles.values.spacing / 4,
    [Styles.values.borderTopEndRadius]: 0,
    [Styles.values.borderBottomEndRadius]: 0,
  }),
  unitInput: RX.Styles.createViewStyle({
    padding: Styles.values.spacing / 2,
    [Styles.values.paddingStart]: 0,
    [Styles.values.borderTopStartRadius]: 0,
    [Styles.values.borderBottomStartRadius]: 0,
    marginBottom: 0,
  })
}

interface GroceryListItemProps {
  food: DayComponentDay_meals_items_item_Food
  grams: number
  type: 'shoppingList' | 'pantry',
  onUnitChange: (unit: any) => any,
  onAmountChange: (amount: any) => any,
  style?: any,
  editable?: boolean
}

const GroceryListItem = ({ food, grams, type, onUnitChange, onAmountChange, editable = true, style }: GroceryListItemProps) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <RX.View
          activeOpacity={0.7}
          style={[styles.container, {
            backgroundColor: theme.colors.cardBg,
          }, style]}
        >
          {renderImageOrPlaceholder(food.thumbnail, styles.image)}
          <RX.View style={styles.textsContainer}>
            <RX.View
              style={{
                flexDirection: 'row',
                marginBottom: Styles.values.spacing / 4
              }}
            >
              <Text
                translations={food.name || []}
                style={styles.title}
              />
            </RX.View>
            <HoverView
              onRenderChild={isHovering => (
                <RX.View
                  style={{
                    flexDirection: 'row',
                    [Styles.values.marginStart]: -Styles.values.spacing / 2,
                  }}
                >
                  <InputNumber
                    value={grams}
                    editable={editable}
                    // onChange={(value) => this._onMealItemAmountChange(value, mealItem.selectedUnit)}
                    onChange={onAmountChange}
                    textInputStyle={[
                      styles.amountInput,
                      {
                        backgroundColor: isHovering && editable ? theme.colors.textInputBg : 'transparent',
                        width: (String(grams).length * 10) + (Styles.values.spacing / 2) + (Styles.values.spacing / 4)
                      }
                    ]}
                    style={{
                      marginBottom: 0,
                    }}
                  />
                  <Select
                    value={'g'}
                    options={[
                      { value: 'g', text: translate('g') }
                    ]}
                    editable={editable}
                    // onChange={value => this._onMealItemAmountChange(mealItem.amount, value)}
                    onChange={onUnitChange}
                    style={[
                      styles.unitInput,
                      {
                        backgroundColor: isHovering && editable ? theme.colors.textInputBg : 'transparent',
                      },
                    ]}
                  />
                </RX.View>
              )}
            />
          </RX.View>

          <CheckBox
            value={type === 'pantry'}
            style={{
              position: 'absolute',
              [Styles.values.end]: Styles.values.spacing * 2,
              alignSelf: 'center'
            }}
            onChange={() => {
              if (type === 'shoppingList') CalendarService.addPantryItem(food, grams)
              if (type === 'pantry') CalendarService.removePantryItem(food.id)
            }}
          />
        </RX.View>
      )}
    </ThemeContext.Consumer>
  )
}

export default GroceryListItem
