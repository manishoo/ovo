/*
 * CalendarService.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ApolloCache } from '@apollo/client'
import client from '@App/client'
import { FoodPreviewMealItem } from '@Common/FoodPickerDialog/components/types/FoodPreviewMealItem'
import { MeOperation } from '@Models/graphql/me/me'
import { MeQuery } from '@Models/graphql/me/types/MeQuery'
import { IAutoSavablePersistableStore } from '@Models/resub-persist'
import { calculateMealItemsNutrition } from '@Utils/shared/calculate-meal-nutrition'
import { CalendarOverviewOperation } from '@Views/CalendarScreen/components/CalendarOverview/operations/CalendarOverviewOperation'
import { CalendarOverviewQuery } from '@Views/CalendarScreen/components/CalendarOverview/operations/types/CalendarOverviewQuery'
import { MealItemComponentMealItem } from '@Views/CalendarScreen/components/DayComponent/components/MealComponent/components/MealItemComponent/types/MealItemComponentMealItem'
import { MealComponentFragments } from '@Views/CalendarScreen/components/DayComponent/components/MealComponent/operations/MealComponentOperation'
import {
  MealComponentDayMeal,
  MealComponentDayMeal_items_item_Food
} from '@Views/CalendarScreen/components/DayComponent/components/MealComponent/operations/types/MealComponentDayMeal'
import {
  DayComponentDay,
  DayComponentDay_meals_items,
  DayComponentDay_meals_items_item_Food
} from '@Views/CalendarScreen/components/DayComponent/types/DayComponentDay'
import { CalendarOperation } from '@Views/CalendarScreen/operations/CalendarOperation'
import { CalendarQuery } from '@Views/CalendarScreen/operations/types/CalendarQuery'
import { DateTime } from 'luxon'
import { autoSubscribe, AutoSubscribeStore, StoreBase } from 'resub'
import * as SyncTasks from 'synctasks'


function determineIfIsFood(toBeDetermined: any): toBeDetermined is DayComponentDay_meals_items_item_Food {
  // @ts-ignore __typename
  return toBeDetermined.__typename === 'Food'
}

export function calculateMealItemAmount(mealItem: DayComponentDay_meals_items): number {
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
  food: DayComponentDay_meals_items_item_Food,
  grams: number,
  dateAdded?: Date,
}

interface GroceriesByFood {
  [k: string]: GroceryItem
}

export interface GroceriesByFoodGroup {
  [k: string]: { food: MealComponentDayMeal_items_item_Food, grams: number, dateAdded?: Date }[]
}

enum TriggerKeys {
  calendar,
  shoppingListGroceriesByFoodGroup,
  pantryGroceriesByFoodGroup,
}

@AutoSubscribeStore
export class CalendarService extends StoreBase implements IAutoSavablePersistableStore {
  public name = 'CalendarService'
  public autoSaveTriggerKeys = TriggerKeys
  private shoppingListGroceriesByFoodGroup: GroceriesByFoodGroup = {}
  private pantryGroceriesByFoodGroup: GroceriesByFoodGroup = {}

  startup(): SyncTasks.Thenable<void> {
    let deferred = SyncTasks.Defer<void>()

    setImmediate(() => this._handleShoppingList())
    deferred.resolve(void 0)

    return deferred.promise()
  }

  setDay(cache: ApolloCache<any>, day: DayComponentDay, planId: string, affectOverview: boolean = true) {
    const calendarQuery = cache.readQuery<CalendarQuery>({
      query: CalendarOperation,
      variables: {
        planId,
      }
    })
    if (!calendarQuery) return
    cache.writeQuery({
      query: CalendarOperation,
      variables: {
        planId,
      },
      data: {
        ...calendarQuery,
        calendar: [
          ...calendarQuery.calendar.filter(d => d.id !== day.id).filter(d => !DateTime.fromISO(d.date).hasSame(DateTime.fromISO(day.date), 'day')),
          day,
        ],
      }
    })
    if (affectOverview) {
      const calendarControlQuery = cache.readQuery<CalendarOverviewQuery>({
        variables: {
          planId,
        },
        query: CalendarOverviewOperation,
      })
      if (!calendarControlQuery) return
      cache.writeQuery({
        query: CalendarOverviewOperation,
        variables: {
          planId,
        },
        data: {
          ...calendarControlQuery,
          calendar: [
            ...calendarControlQuery.calendar.filter(d => d.id !== day.id).filter(d => !DateTime.fromISO(d.date).hasSame(DateTime.fromISO(day.date), 'day')),
            day,
          ]
        }
      })
    }

    this._handleShoppingList()
    this.trigger()
  }

  removeDay(cache: ApolloCache<any>, dayId: string, planId: string, affectOverview: boolean = true) {
    const calendarQuery = cache.readQuery<CalendarQuery>({
      query: CalendarOperation,
      variables: {
        planId,
      },
    })
    if (!calendarQuery) return
    cache.writeQuery({
      query: CalendarOperation,
      variables: {
        planId,
      },
      data: {
        ...calendarQuery,
        calendar: calendarQuery.calendar.filter(day => day.id !== dayId)
      }
    })

    if (affectOverview) {
      const calendarControlQuery = cache.readQuery<CalendarOverviewQuery>({
        query: CalendarOverviewOperation,
        variables: {
          planId,
        },
      })
      if (!calendarControlQuery) return
      cache.writeQuery({
        query: CalendarOverviewOperation,
        variables: {
          planId,
        },
        data: {
          calendar: calendarControlQuery.calendar.filter(day => day.id !== dayId)
        }
      })
    }

    this._handleShoppingList()
    this.trigger()
  }

  setMeal(cache: ApolloCache<any>, meal: MealComponentDayMeal, updateShoppingList: boolean = true) {
    cache.writeFragment({
      fragmentName: 'MealComponentDayMeal',
      fragment: MealComponentFragments.dayMeal,
      id: `DayMeal:${meal.id}`,
      data: meal
    })

    if (updateShoppingList) {
      this._handleShoppingList()
      this.trigger()
    }
  }

  moveMealItem(cache: ApolloCache<any>, fromMealId: string, toMealId: string, toIndex: number, mealItemId: string) {
    const fromMeal = this.getMeal(cache, fromMealId)
    if (!fromMeal) throw new Error('fromMeal not found')

    let movedMealItem: undefined | MealItemComponentMealItem = undefined

    this.setMeal(cache, {
      ...fromMeal,
      items: fromMeal.items.filter(p => {
        if (String(p.id) !== String(mealItemId)) {
          return true
        } else {
          movedMealItem = p
          return false
        }
      })
    }, false)

    if (!movedMealItem) throw new Error('mealItem not found')

    const toMeal = this.getMeal(cache, toMealId)
    if (!toMeal) throw new Error('toMeal not found')

    const items = [...toMeal.items]
    items.splice(toIndex, 0, movedMealItem!)

    this.setMeal(cache, {
      ...toMeal,
      items,
    }, false)

    this._handleShoppingList()
    this.trigger()
  }

  getMeal(cache: ApolloCache<any>, mealId: string): MealComponentDayMeal | null {
    return cache.readFragment({
      fragmentName: 'MealComponentDayMeal',
      fragment: MealComponentFragments.dayMeal,
      id: `DayMeal:${mealId}`,
    })
  }

  setMealItem(cache: ApolloCache<any>, mealId: string, prevMealItem: MealItemComponentMealItem, newMealItem: MealItemComponentMealItem) {
    const meal = cache.readFragment<MealComponentDayMeal>({
      fragmentName: 'MealComponentDayMeal',
      fragment: MealComponentFragments.dayMeal,
      id: `DayMeal:${mealId}`,
    }, true)
    if (!meal) return

    this.setMeal(cache, {
      ...meal,
      items: meal.items.map(mealItem => {
        if (mealItem.id === prevMealItem.id) {
          return newMealItem
        }

        return mealItem
      })
    })

    // console.log('BEFORE ====>>>')
    // console.log(prevMealItem.id, cache.readFragment({
    //   fragmentName: 'MealItem',
    //   fragment: MealItemComponentContainer.fragments.mealItem,
    //   id: prevMealItem.id,
    // }))
    // console.log(newMealItem.id, cache.readFragment({
    //   fragmentName: 'MealItem',
    //   fragment: MealItemComponentContainer.fragments.mealItem,
    //   id: newMealItem.id,
    // }))
    //
    // cache.writeFragment({
    //   fragmentName: 'MealItem',
    //   fragment: MealItemComponentContainer.fragments.mealItem,
    //   id: prevMealItem.id,
    //   data: newMealItem,
    // })
    //
    // console.log('AFTER ====>>>')
    // console.log(prevMealItem.id, cache.readFragment({
    //   fragmentName: 'MealItem',
    //   fragment: MealItemComponentContainer.fragments.mealItem,
    //   id: prevMealItem.id,
    // }))
    // console.log(newMealItem.id, cache.readFragment({
    //   fragmentName: 'MealItem',
    //   fragment: MealItemComponentContainer.fragments.mealItem,
    //   id: newMealItem.id,
    // }))

    this._handleShoppingList()
    this.trigger()
  }

  public addPantryItem(food: DayComponentDay_meals_items_item_Food, grams: number) {
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

  private _getMyCalendar() {
    const meQuery = client.readQuery<MeQuery>({
      query: MeOperation,
    })
    if (!meQuery) throw new Error('no meQuery')

    if (!meQuery.me) return []

    const calendarQuery = client.readQuery<CalendarQuery>({
      query: CalendarOperation,
      variables: {
        planId: meQuery.me.plan,
      },
    })
    if (!calendarQuery) throw new Error('no calendarQuery')

    return calendarQuery.calendar
  }

  @autoSubscribe
  getShoppingList() {
    return this.shoppingListGroceriesByFoodGroup
  }

  @autoSubscribe
  getPantry() {
    return this.pantryGroceriesByFoodGroup
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

  // @autoSubscribe
  // getCalendar(): DayComponentDay[] {
  //   return this.calendar
  // }

  public calculateMealTotalCalorie = (meal: MealComponentDayMeal) => {
    // let unit = AppConfig.calorieMeasurementUnit
    const nutrition = calculateMealItemsNutrition(meal.items)
    return Math.round(nutrition.calories ? nutrition.calories.amount : 0)
  }

  private _handleShoppingList() {
    const calendar = this._getMyCalendar()

    const foods: GroceriesByFood = {}

    /**
     * Unique by food id
     * */
    function handleFood(food: DayComponentDay_meals_items_item_Food, grams: number) {
      console.log('food', food, grams)
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

    const now = DateTime.local()
    calendar
    /**
     * Only days in the future
     * */
      .filter(day => Math.round(DateTime.fromISO(day.date).diff(now).as('days')) >= 0)
      .map(day => {
        day.meals
        /**
         * Only meals in the future
         * */
          .filter(meal => Math.round(DateTime.fromISO(meal.time).diff(now).as('minutes')) >= 0)
          .map(meal => {
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

    const groceriesByFoodGroup: GroceriesByFoodGroup = {}
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

  private _draggingMealItem?: FoodPreviewMealItem

  public setDraggingMealItem(mealItem?: FoodPreviewMealItem) {
    this._draggingMealItem = mealItem
    this.trigger()
  }

  @autoSubscribe
  public getDraggingMealItem() {
    return this._draggingMealItem
  }
}

export default new CalendarService()
