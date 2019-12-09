/*
 * ShoppingList.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import CheckBox from '@Common/Checkbox/Checkbox'
import FilledButton from '@Common/FilledButton/FilledButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import CalendarService, { GroceriesByFoodGroup } from '@Services/CalendarService'
import { renderImageOrPlaceholder } from '@Utils'
import { Day_meals_items_item_Food } from '@Views/CalendarScreen/components/types/Day'
import RX from 'reactxp'
import { ComponentBase } from 'resub'


interface LoginProps {
  style?: any,
}

interface LoginState {
  shoppingListGroceriesByFoodGroup: GroceriesByFoodGroup,
  pantryGroceriesByFoodGroup: GroceriesByFoodGroup,
  activeTab: 'shoppingList' | 'pantry'
}

export default class ShoppingList extends ComponentBase<LoginProps, LoginState> {
  protected _buildState(props: LoginProps, initialBuild: boolean): Partial<LoginState> | undefined {
    return {
      activeTab: initialBuild ? 'shoppingList' : this.state.activeTab,
      shoppingListGroceriesByFoodGroup: CalendarService.getShoppingList(),
      pantryGroceriesByFoodGroup: CalendarService.getPantry(),
    }
  }

  public render() {
    return (
      <RX.View>
        <RX.View style={{ flexDirection: 'row', marginTop: Styles.values.spacing * 2 }}>
          <FilledButton
            label={translate(translate.keys.ShoppingList)}
            onPress={() => this.setState({ activeTab: 'shoppingList' })}
            mode={this.state.activeTab === 'shoppingList' ? FilledButton.mode.primary : FilledButton.mode.default}
            style={{
              padding: 16
            }}
            fontSize={16}
            containerStyle={styles.tabButton}
          />
          <FilledButton
            label={translate(translate.keys.Pantry)}
            onPress={() => this.setState({ activeTab: 'pantry' })}
            mode={this.state.activeTab === 'pantry' ? FilledButton.mode.primary : FilledButton.mode.default}
            style={{
              padding: 16
            }}
            fontSize={16}
            containerStyle={styles.tabButton}
          />
        </RX.View>

        {this._renderTabContent()}
      </RX.View>
    )
  }

  private _renderTabContent = () => {
    const { activeTab, shoppingListGroceriesByFoodGroup, pantryGroceriesByFoodGroup } = this.state

    switch (activeTab) {
      case 'pantry':
        return Object.keys(pantryGroceriesByFoodGroup).map(foodGroupId => {
          const foodItem = pantryGroceriesByFoodGroup[foodGroupId][0]

          if (!foodItem) return null

          return (
            <RX.View>
              <Text
                type={Text.types.title}
                translations={foodItem.food.origFoodGroups[0][0].name}
              />
              {
                pantryGroceriesByFoodGroup[foodGroupId].map(food => this._renderShoppingListItem(food.food, food.grams, 'pantry'))
              }
            </RX.View>
          )
        })
      case 'shoppingList':
        return Object.keys(shoppingListGroceriesByFoodGroup).map(foodGroupId => {
          const foodItem = shoppingListGroceriesByFoodGroup[foodGroupId][0]

          if (!foodItem) return null

          return (
            <RX.View>
              <Text
                type={Text.types.title}
                translations={foodItem.food.origFoodGroups[0][0].name}
              />
              {
                shoppingListGroceriesByFoodGroup[foodGroupId].map(food => this._renderShoppingListItem(food.food, food.grams, 'shoppingList'))
              }
            </RX.View>
          )
        })
    }
  }

  private _renderShoppingListItem = (food: Day_meals_items_item_Food, grams: number, type: 'shoppingList' | 'pantry') => {
    return (
      <RX.View
        style={styles.container}
      >
        {renderImageOrPlaceholder(food.thumbnail, styles.image)}
        <RX.View style={styles.textsContainer}>
          <Text translations={food.name} style={styles.title} />
        </RX.View>
        <CheckBox
          value={type === 'pantry'}
          onChange={() => {
            if (type === 'shoppingList') CalendarService.addPantryItem(food, grams)
            if (type === 'pantry') CalendarService.removePantryItem(food.id)
          }}
        />
      </RX.View>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    padding: Styles.values.spacing,
    paddingHorizontal: Styles.values.spacingLarge,
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 8,
  }),
  textsContainer: RX.Styles.createViewStyle({
    [Styles.values.marginStart]: 16,
  }),
  image: RX.Styles.createImageStyle({
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fafafa',
  }),
  title: RX.Styles.createTextStyle({
    fontWeight: '500',
  }),
  tabButton: RX.Styles.createViewStyle({
    [Styles.values.marginEnd]: Styles.values.spacing,
  })
}
