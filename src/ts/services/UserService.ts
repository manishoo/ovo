/*
 * UserStore.ts
 * Copyright: Ouranos Studio 2019
 */

import client from '@App/client'
import { IAutoSavablePersistableStore } from '@Models/resub-persist'
import MealSettingsScreen from '@Views/MealSettingsScreen/MealSettingsScreen'
import gql from 'graphql-tag'
import { autoSubscribe, AutoSubscribeStore, StoreBase } from 'resub'
import * as SyncTasks from 'synctasks'
import { Me } from './types/Me'
import RX from 'reactxp'
import Storage from '@App/Storage/Storage'

enum TriggerKeys {
  me,
  token,
}

@AutoSubscribeStore
class UserService extends StoreBase implements IAutoSavablePersistableStore {
  public name = 'UserService'
  private me: Me | null = null
  private token: string | null = null
  public autoSaveTriggerKeys = TriggerKeys

  startup(): SyncTasks.Thenable<void> {
    let deferred = SyncTasks.Defer<void>()

    deferred.resolve(void 0)

    return deferred.promise()
  }

  setUser(me?: Me) {
    if (me) {
      this.me = me
    } else {
      this.me = null
    }

    this.trigger(TriggerKeys.me)
  }

  getPropKeys() {
    return [
      'me',
      'token',
    ]
  }

  @autoSubscribe
  getUser(): Me | null {
    return this.me
  }

  setSession(token: string | null) {
    this.token = token

    this.trigger()
  }

  @autoSubscribe
  async getSession(): Promise<string | null> {
    return this.token
  }

  logOut() {
    this.setSession(null)
    this.setUser()
    RX.Storage.clear()
    Storage.clear()
    client.resetStore()
  }

  public fragments = {
    me: gql`
      fragment Me on User {
        id
        username
        session
        email
        firstName
        lastName
        avatar {
          url
        }
        gender
        bodyFat
        age
        bio
        weight {
          value
          unit
        }
        height {
          value
          unit
        }
        caloriesPerDay
        socialNetworks {
          instagram
          twitter
          website
          pinterest
        }
        role
        meals {
          ...MealSettingsMeal
        }
      }

      ${MealSettingsScreen.fragments.mealSettingsMeal}
    `
  }
}

export default new UserService()
