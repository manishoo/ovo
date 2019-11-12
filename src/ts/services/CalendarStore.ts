/*
 * CalendarStore.ts
 * Copyright: Ouranos Studio 2019
 */

import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { DateTime } from 'luxon'
import RX from 'reactxp'
import { VirtualListViewItemInfo } from 'reactxp-virtuallistview/src/VirtualListView'
import { autoSubscribe, AutoSubscribeStore, StoreBase } from 'resub'
import { IPersistableStore } from 'resub-persist'
import { Day } from 'src/ts/views/CalendarScreen/types/Day'
import * as SyncTasks from 'synctasks'


export type DayItem = VirtualListViewItemInfo & Day

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
class CalendarStore extends StoreBase implements IPersistableStore {
  public name = 'CalendarStore'
  private calendar: DayItem[] = []

  startup(): SyncTasks.Thenable<void> {
    let deferred = SyncTasks.Defer<void>()

    const height = ResponsiveWidthStore.getHeight()

    RX.Storage.getItem(STORAGE_KEYS.calendar)
      .then(CalendarJSONString => {
        if (!CalendarJSONString) {
          for (let i = 0; i < (365 * 2); i++) {
            const id = String(Math.random()) + String(Date.now())
            this.calendar.push({
              id,
              date: DateTime.local().plus({day: i}).toJSDate(),
              meals: [],
              measureHeight: false,
              template: DayTemplate.empty,
              height,
              key: id,
              // isNavigable: false,
              // disableTouchOpacityAnimation: false,
            })
          }

          RX.Storage.setItem(STORAGE_KEYS.calendar, JSON.stringify(this.calendar))

          deferred.resolve(void 0)
          return
        }

        try {
          const calendar = JSON.parse(CalendarJSONString) as DayItem[]
          this.calendar = calendar.map(day => ({
            ...day,
            date: new Date(day.date),
          }))
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

  setCalendar(calendar?: DayItem[]) {
    if (calendar) {
      RX.Storage.setItem(STORAGE_KEYS.calendar, JSON.stringify(calendar))
      this.calendar = calendar
    } else {
      RX.Storage.removeItem(STORAGE_KEYS.calendar)
      this.calendar = null
    }

    this.trigger()
  }

  setDay(day: DayItem) {
    const foundDayIndex = this.calendar.findIndex(p => DateTime.fromJSDate(p.date).toISODate() === DateTime.fromJSDate(day.date).toISODate())

    if (foundDayIndex !== -1) {
      this.calendar[foundDayIndex] = day
    } else {
      this.calendar.push(day)
      this.calendar.sort((a, b) => a.date - b.date)
    }

    RX.Storage.setItem(STORAGE_KEYS.calendar, JSON.stringify(this.calendar))

    this.trigger()
  }

  updateDay(day: DayItem) {

  }

  getPropKeys() {
    return [
      'calendar',
    ]
  }

  @autoSubscribe
  getCalendar(): DayItem[] {
    return this.calendar
  }
}

export default new CalendarStore()
