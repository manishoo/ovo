/*
 * UserStore.ts
 * Copyright: Ouranos Studio 2019
 */

import client from '@App/client'
import NutritionProfileForm from '@Common/NutritionProfileForm/NutritionProfileForm'
import { IAutoSavablePersistableStore } from '@Models/resub-persist'
import MacroTargets from '@Views/CalendarScreen/components/NutritionInfo/MacroTargets'
import MealSettingsScreen from '@Views/MealSettingsScreen/MealSettingsScreen'
import gql from 'graphql-tag'
import { autoSubscribe, AutoSubscribeStore, StoreBase } from 'resub'
import * as SyncTasks from 'synctasks'
import { Me, Me_nutritionProfile } from './types/Me'
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

  setNutritionProfile(nutritionProfile: Me_nutritionProfile) {
    if (!this.me) return

    this.me.nutritionProfile = nutritionProfile

    this.trigger()
  }

  @autoSubscribe
  async getSession(): Promise<string | null> {
    return this.token
  }

  logOut() {
    this.setSession(null)
    this.setUser()
    client.clearStore()
    RX.Storage.clear()
    Storage.clear()
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
        socialNetworks {
          instagram
          twitter
          website
          pinterest
        }
        nutritionProfile { ...NutritionProfileFormNutritionProfile }
        membership {
          type
        }
        role
        meals {
          ...MealSettingsMeal
        }
      }

      ${MealSettingsScreen.fragments.mealSettingsMeal}
      ${NutritionProfileForm.fragments.nutritionProfile}
    `
  }
}

export default new UserService()
