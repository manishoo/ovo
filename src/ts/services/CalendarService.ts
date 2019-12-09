/*
 * CalendarService.ts
 * Copyright: Ouranos Studio 2019
 */

import { IAutoSavablePersistableStore } from '@Models/resub-persist'
import {
  Day,
  Day_meals_items,
  Day_meals_items_item,
  Day_meals_items_item_Food
} from '@Views/CalendarScreen/components/types/Day'
import { DayMeal } from '@Views/CalendarScreen/components/types/DayMeal'
import { MealItem } from '@Views/CalendarScreen/components/types/MealItem'
import { DateTime } from 'luxon'
import { autoSubscribe, AutoSubscribeStore, StoreBase } from 'resub'
import * as SyncTasks from 'synctasks'


function determineIfIsFood(toBeDetermined: Partial<Day_meals_items_item>): toBeDetermined is Day_meals_items_item_Food {
  return toBeDetermined.hasOwnProperty('weights')
}

export function calculateMealItemAmount(mealItem: Day_meals_items): number {
  let grams = 0

  if (mealItem.unit) {
    // TODO: take weight amount into account
    grams = (mealItem.amount || 0) * (mealItem.unit.gramWeight || 0)
  } else {
    grams = (mealItem.amount || 0)
  }

  return grams
}

export interface GroceryItem {
  food: Day_meals_items_item_Food,
  grams: number,
  dateAdded?: Date,
}

interface GroceriesByFood {
  [k: string]: GroceryItem
}

export interface GroceriesByFoodGroup {
  [k: string]: { food: Day_meals_items_item_Food, grams: number, dateAdded?: Date }[]
}

enum TriggerKeys {
  calendar,
  shoppingListGroceriesByFoodGroup,
  pantryGroceriesByFoodGroup,
}

@AutoSubscribeStore
export class CalendarService extends StoreBase implements IAutoSavablePersistableStore {
  public name = 'CalendarService'
  private calendar: Day[] = []
  private shoppingListGroceriesByFoodGroup: GroceriesByFoodGroup = {}
  private pantryGroceriesByFoodGroup: GroceriesByFoodGroup = {}
  public autoSaveTriggerKeys = TriggerKeys

  startup(): SyncTasks.Thenable<void> {
    let deferred = SyncTasks.Defer<void>()

    this._handleShoppingList()
    deferred.resolve(void 0)

    return deferred.promise()
  }

  setCalendar(calendar?: Day[]) {
    if (calendar) {
      this.calendar = calendar
    } else {
      this.calendar = []
    }

    this._handleShoppingList()
    this.trigger()
  }

  setDay(day: Day) {
    const foundDayIndex = this.calendar.findIndex(p => DateTime.fromISO(p.date).hasSame(DateTime.fromISO(day.date), 'day'))

    if (foundDayIndex !== -1) {
      this.calendar[foundDayIndex] = day
    } else {
      this.calendar.push(day)
      this.calendar.sort((a, b) => a.date - b.date)
    }

    this._handleShoppingList()
    this.trigger()
  }

  setMeal(dayId: string, meal: DayMeal) {
    const foundDay = this.calendar.find(p => p.id === dayId)
    if (!foundDay) throw new Error('day not found')

    foundDay.meals = foundDay.meals.map(m => {
      if (m.id === meal.id) {
        return meal
      }

      return m
    })

    this._handleShoppingList()
    this.trigger()
  }

  setMealItem(dayId: string, mealId: string, prevMealItemId: string, mealItem: MealItem) {
    const foundDay = this.calendar.find(p => p.id === dayId)
    if (!foundDay) throw new Error('day not found')

    foundDay.meals = foundDay.meals.map(meal => {
      if (meal.id === mealId) {
        return {
          ...meal,
          items: meal.items.map(mi => {
            if (mi.id === prevMealItemId) {
              return mealItem
            }

            return mi
          })
        }
      }
      return meal
    })
    this._handleShoppingList()
    this.trigger()
  }

  private _handleShoppingList() {
    const calendar = this.calendar

    const foods: GroceriesByFood = {}
    const groceriesByFoodGroup: GroceriesByFoodGroup = {}

    /**
     * Unique by food id
     * */
    function handleFood(food: Day_meals_items_item_Food, grams: number) {
      if (foods[food.id]) {
        foods[food.id] = {
          ...foods[food.id],
          grams: foods[food.id].grams + grams
        }
      } else {
        foods[food.id] = {
          food,
          grams,
        }
      }
    }

    calendar.map(day => {
      day.meals.map(meal => {
        meal.items.map(mealItem => {
          if (mealItem.item) {
            if (determineIfIsFood(mealItem.item)) {
              handleFood(mealItem.item, calculateMealItemAmount(mealItem))
            } else {
              mealItem.item.ingredients.map(ingredient => {
                if (ingredient.item) {
                  if (determineIfIsFood(ingredient.item)) {
                    handleFood(ingredient.item, calculateMealItemAmount(mealItem))
                  }
                }
              })
            }
          }
        })
      })
    })

    /**
     * Unique by food group
     * */
    Object.keys(foods).map(foodId => {
      const food = foods[foodId]

      const foodGroupId = food.food.origFoodGroups[0][0].id
      if (!foodGroupId) throw new Error('food group not found')

      if (groceriesByFoodGroup[foodGroupId]) {
        groceriesByFoodGroup[foodGroupId] = [
          ...groceriesByFoodGroup[foodGroupId],
          food
        ]
      } else {
        groceriesByFoodGroup[foodGroupId] = [
          food
        ]
      }
    })

    this.shoppingListGroceriesByFoodGroup = this._excludePantryItemsFromShoppingList(groceriesByFoodGroup, this.pantryGroceriesByFoodGroup)
  }

  private _excludePantryItemsFromShoppingList(shoppingList: GroceriesByFoodGroup, pantry: GroceriesByFoodGroup): GroceriesByFoodGroup {
    const finalShoppingList: GroceriesByFoodGroup = {}

    Object.keys(shoppingList).map(shoppingListFoodGroupId => {
      function addGroceryItemToShoppingList(groceryItem: GroceryItem) {
        if (finalShoppingList[shoppingListFoodGroupId]) {
          finalShoppingList[shoppingListFoodGroupId] = [
            ...finalShoppingList[shoppingListFoodGroupId],
            groceryItem
          ]
        } else {
          finalShoppingList[shoppingListFoodGroupId] = [
            groceryItem
          ]
        }
      }

      const foodGroupGroceries = shoppingList[shoppingListFoodGroupId]

      foodGroupGroceries.map(shoppingListGroceryItem => {
        let requiredAmount = shoppingListGroceryItem.grams
        /**
         * Check whether it exists in pantry
         * */
        if (pantry[shoppingListFoodGroupId]) {
          const foundGroceryItem = pantry[shoppingListFoodGroupId].find(p => p.food.id === shoppingListGroceryItem.food.id)

          /**
           * Check whether the amount exists
           * */
          if (foundGroceryItem) {
            /**
             * The amount that we need minus the amount that we have
             * */
            requiredAmount = requiredAmount - foundGroceryItem.grams
          }
        }

        /**
         * Insufficient amount. Needs to be added to shopping list
         * */
        if (requiredAmount > 0) {
          addGroceryItemToShoppingList({
            food: shoppingListGroceryItem.food,
            grams: requiredAmount,
          })
        }
      })
    })

    return finalShoppingList
  }

  @autoSubscribe
  getShoppingList() {
    return this.shoppingListGroceriesByFoodGroup
  }

  @autoSubscribe
  getPantry() {
    return this.pantryGroceriesByFoodGroup
  }

  public addPantryItem(food: Day_meals_items_item_Food, grams: number) {
    const foodGroupId = food.origFoodGroups[0][0].id

    const item = {
      food,
      grams,
      dateAdded: new Date()
    }

    /**
     * 1) Add to pantry
     * */
    if (this.pantryGroceriesByFoodGroup[foodGroupId]) {
      const foodAlreadyExists = this.pantryGroceriesByFoodGroup[foodGroupId].find(p => p.food.id === food.id)

      if (foodAlreadyExists) {
        this.pantryGroceriesByFoodGroup[foodGroupId] = this.pantryGroceriesByFoodGroup[foodGroupId].map(grocery => {
          grocery.grams += grams
          grocery.dateAdded = new Date()

          return grocery
        })
      } else {
        this.pantryGroceriesByFoodGroup[foodGroupId] = [
          ...this.pantryGroceriesByFoodGroup[foodGroupId],
          item,
        ]
      }
    } else {
      this.pantryGroceriesByFoodGroup[foodGroupId] = [item]
    }

    /**
     * 2) Remove from shoppingList
     * */
    this.shoppingListGroceriesByFoodGroup[foodGroupId] = this.shoppingListGroceriesByFoodGroup[foodGroupId].filter(p => p.food.id !== food.id)

    this.trigger([
      TriggerKeys.pantryGroceriesByFoodGroup,
      TriggerKeys.shoppingListGroceriesByFoodGroup,
    ])
  }

  public removePantryItem(foodId: string) {
    /**
     * Remove from pantry and add to shopping list if needed
     * */
    Object.keys(this.pantryGroceriesByFoodGroup).map(pantryFoodGroupId => {
      const pantryGroceryItems = this.pantryGroceriesByFoodGroup[pantryFoodGroupId]
      this.pantryGroceriesByFoodGroup[pantryFoodGroupId] = pantryGroceryItems.filter(p => p.food.id !== foodId)
    })
    this._handleShoppingList()
    this.trigger([
      TriggerKeys.pantryGroceriesByFoodGroup,
      TriggerKeys.shoppingListGroceriesByFoodGroup,
    ])
  }

  public editPantryItem(foodId: string, grams: number) {
    /**
     * Remove from pantry and add to shopping list if needed
     * */
    Object.keys(this.pantryGroceriesByFoodGroup).map(pantryFoodGroupId => {
      const pantryGroceryItems = this.pantryGroceriesByFoodGroup[pantryFoodGroupId]
      this.pantryGroceriesByFoodGroup[pantryFoodGroupId] = pantryGroceryItems.map(pantryGroceryItem => {
        if (pantryGroceryItem.food.id === foodId) {
          return {
            ...pantryGroceryItem,
            grams,
          }
        }

        return pantryGroceryItem
      })
    })
    this._handleShoppingList()
    this.trigger([
      TriggerKeys.pantryGroceriesByFoodGroup,
      TriggerKeys.shoppingListGroceriesByFoodGroup,
    ])
  }

  public getPropKeys() {
    return [
      'calendar',
      'pantryGroceriesByFoodGroup',
      'shoppingListGroceriesByFoodGroup',
    ]
  }

  @autoSubscribe
  getCalendar(): Day[] {
    return this.calendar
  }
}

export default new CalendarService()
