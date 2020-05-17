/*
 * ShoppingList.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import CheckBox from '@Common/Checkbox/Checkbox'
import FilledButton from '@Common/FilledButton/FilledButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import MealItemComponent from '@Common/MealItemComponent/MealItemComponent'
import Page from '@Common/Page'
import Text from '@Common/Text/Text'
import CalendarService, { GroceriesByFoodGroup } from '@Services/CalendarService'
import ServiceConsumer from '@Services/utils/ServiceConsumer'
import GroceryList from '@Views/ShoppingList/components/GroceryList/GroceryList'
import { useCallback, useState } from 'react'
import RX from 'reactxp'


const _styles = {
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

interface LoginProps {
  style?: any,
}

export default function ShoppingList() {
  const [activeTab, setActiveTab] = useState<'shoppingList' | 'pantry'>('shoppingList')

  const _renderTabContent = useCallback((shoppingListGroceriesByFoodGroup: GroceriesByFoodGroup, pantryGroceriesByFoodGroup: GroceriesByFoodGroup) => {
    switch (activeTab) {
      case 'pantry':
        return Object.keys(pantryGroceriesByFoodGroup).map(foodGroupId => {
          const foodItem = pantryGroceriesByFoodGroup[foodGroupId][0]

          if (!foodItem) return null

          return (
            <GroceryList
              title={<Text
                type={Text.types.title}
                translations={foodItem.food.origFoodGroups[0][0].name}
              />}
            >
              {
                pantryGroceriesByFoodGroup[foodGroupId].map(food =>
                  <MealItemComponent
                    mealItem={{
                      amount: food.grams,
                      item: food.food,
                      id: food.food.id,
                      name: [],
                      description: [],
                      customUnit: null,
                      isOptional: false,
                      unit: null,
                    }}
                  >
                    <CheckBox
                      value={true}
                      onChange={() => CalendarService.removePantryItem(food.food.id)}
                    />
                  </MealItemComponent>
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
                type={Text.types.title}
                translations={foodItem.food.origFoodGroups[0][0].name}
              />}
            >
              {
                shoppingListGroceriesByFoodGroup[foodGroupId].map(food =>
                  <MealItemComponent
                    mealItem={{
                      amount: food.grams,
                      item: food.food,
                      id: food.food.id,
                      name: [],
                      description: [],
                      customUnit: null,
                      isOptional: false,
                      unit: null,
                    }}
                  >
                    <CheckBox
                      value={false}
                      onChange={() => CalendarService.addPantryItem(food.food, food.grams)}
                    />
                  </MealItemComponent>
                )
              }
            </GroceryList>
          )
        })
    }
  }, [activeTab])

  return (
    <Page
      style={{
        padding: Styles.values.spacing,
      }}
    >
      <RX.View style={{ flexDirection: 'row', marginBottom: Styles.values.spacing }}>
        <FilledButton
          label={translate(translate.keys.ShoppingList)}
          onPress={useCallback(() => setActiveTab('shoppingList'), [])}
          mode={activeTab === 'shoppingList' ? FilledButton.mode.primary : FilledButton.mode.default}
          style={{
            padding: 16
          }}
          fontSize={16}
          containerStyle={_styles.tabButton}
        />
        <FilledButton
          label={translate(translate.keys.Pantry)}
          onPress={useCallback(() => setActiveTab('pantry'), [])}
          mode={activeTab === 'pantry' ? FilledButton.mode.primary : FilledButton.mode.default}
          style={{
            padding: 16
          }}
          fontSize={16}
          containerStyle={_styles.tabButton}
        />
      </RX.View>

      <ServiceConsumer
        state={{
          shoppingList: () => CalendarService.getShoppingList(),
          pantry: () => CalendarService.getPantry()
        }}
      >
        {({ shoppingList, pantry }) => _renderTabContent(shoppingList, pantry)}
      </ServiceConsumer>
    </Page>
  )
}
