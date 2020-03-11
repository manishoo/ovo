/*
 * ShoppingList.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import FilledButton from '@Common/FilledButton/FilledButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Page from '@Common/Page'
import Text from '@Common/Text/Text'
import CalendarService, { GroceriesByFoodGroup } from '@Services/CalendarService'
import GroceryList from '@Views/ShoppingList/components/GroceryList/GroceryList'
import GroceryListItem from '@Views/ShoppingList/components/GroceryListItem/GroceryListItem'
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
  public render() {
    return (
      <Page lazyRender
            style={{
          padding: Styles.values.spacing,
        }}
      >
        <RX.View style={{ flexDirection: 'row', marginBottom: Styles.values.spacing }}>
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
      </Page>
    )
  }

  protected _buildState(props: LoginProps, initialBuild: boolean): Partial<LoginState> | undefined {
    return {
      activeTab: initialBuild ? 'shoppingList' : this.state.activeTab,
      shoppingListGroceriesByFoodGroup: CalendarService.getShoppingList(),
      pantryGroceriesByFoodGroup: CalendarService.getPantry(),
    }
  }

  private _renderTabContent = () => {
    const { activeTab, shoppingListGroceriesByFoodGroup, pantryGroceriesByFoodGroup } = this.state

    switch (activeTab) {
      case 'pantry':
        return Object.keys(pantryGroceriesByFoodGroup).map(foodGroupId => {
          const foodItem = pantryGroceriesByFoodGroup[foodGroupId][0]

          if (!foodItem) return null

          return (
            <GroceryList
              title={<Text
                type={Text.types.body}
                translations={foodItem.food.origFoodGroups[0][0].name}
              />}
            >
              {
                pantryGroceriesByFoodGroup[foodGroupId].map(food =>
                  <GroceryListItem
                    food={food.food}
                    type={'pantry'}
                    grams={food.grams}
                    editable={false}
                    onAmountChange={() => {
                      //
                    }}
                    onUnitChange={() => {
                      //
                    }}
                  />
                )
              }
            </GroceryList>
          )
        })
      case 'shoppingList':
        return Object.keys(shoppingListGroceriesByFoodGroup).map(foodGroupId => {
          const foodItem = shoppingListGroceriesByFoodGroup[foodGroupId][0]

          if (!foodItem) return null

          return (
            <GroceryList
              title={<Text
                type={Text.types.body}
                translations={foodItem.food.origFoodGroups[0][0].name}
              />}
            >
              {
                shoppingListGroceriesByFoodGroup[foodGroupId].map(food =>
                  <GroceryListItem
                    food={food.food}
                    type={'shoppingList'}
                    grams={food.grams}
                    editable={false}
                    onAmountChange={() => {
                      //
                    }}
                    onUnitChange={() => {
                      //
                    }}
                  />
                )
              }
            </GroceryList>
          )
        })
    }
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
  }),
  listWrapper: RX.Styles.createViewStyle({
    paddingTop: Styles.values.spacing,
  })
}
