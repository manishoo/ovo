/*
 * CalendarService.ts
 * Copyright: Ouranos Studio 2019
 */

import { Day } from '@Views/CalendarScreen/components/types/Day'
import { DayMeal } from '@Views/CalendarScreen/components/types/DayMeal'
import { MealItem } from '@Views/CalendarScreen/components/types/MealItem'
import { DateTime } from 'luxon'
import RX from 'reactxp'
import { autoSubscribe, AutoSubscribeStore, StoreBase } from 'resub'
import { IPersistableStore } from 'resub-persist'
import * as SyncTasks from 'synctasks'


export enum DayTemplate {
  empty = 'empty',
  fullTopBottomEmpty = 'fullTopBottomEmpty',
  fullTopFull = 'fullTopFull',
  fullBottomFull = 'fullBottomFull',
  fullTopBottomFull = 'fullTopBottomFull',
}

const STORAGE_KEYS = {
  calendar: 'calendar',
  token: 'token',
}

export enum TriggerKeys {
  //
}

@AutoSubscribeStore
class CalendarService extends StoreBase implements IPersistableStore {
  public name = 'CalendarService'
  private calendar: Day[] = []

  startup(): SyncTasks.Thenable<void> {
    let deferred = SyncTasks.Defer<void>()

    RX.Storage.getItem(STORAGE_KEYS.calendar)
      .then(CalendarJSONString => {
        try {
          this.calendar = JSON.parse(CalendarJSONString) as Day[]
        } catch (e) {
          RX.Storage.removeItem(STORAGE_KEYS.calendar)
        }
        deferred.resolve(void 0)
      })
      .catch(error => {
        deferred.reject(error)
      })

    return deferred.promise()
  }

  setCalendar(calendar?: Day[]) {
    if (calendar) {
      RX.Storage.setItem(STORAGE_KEYS.calendar, JSON.stringify(calendar))
      this.calendar = calendar
    } else {
      RX.Storage.removeItem(STORAGE_KEYS.calendar)
      this.calendar = null
    }

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

    RX.Storage.setItem(STORAGE_KEYS.calendar, JSON.stringify(this.calendar))
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

    RX.Storage.setItem(STORAGE_KEYS.calendar, JSON.stringify(this.calendar))
    this.trigger()
  }

  setMealItem(dayId: string, mealId: string, mealItem: MealItem) {
    const foundDay = this.calendar.find(p => p.id === dayId)
    if (!foundDay) throw new Error('day not found')

    foundDay.meals = foundDay.meals.map(meal => {
      if (meal.id === mealId) {
        return {
          ...meal,
          items: meal.items.map(mi => {
            if (mi.id === mealItem.id) {
              return mealItem
            }

            return mi
          })
        }
      }
      return meal
    })
    RX.Storage.setItem(STORAGE_KEYS.calendar, JSON.stringify(this.calendar))
    this.trigger()
  }

  updateDay(day: Day) {

  }

  getPropKeys() {
    return [
      'calendar',
    ]
  }

  @autoSubscribe
  getCalendar(): Day[] {
    return this.calendar
  }
}

export default new CalendarService()
