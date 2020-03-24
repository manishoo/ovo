/*
 * AppBootstrapper.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { cache } from '@App/client-cache'
import { LanguageCode } from '@Models/global-types'
import { IAutoSavablePersistableStore } from '@Models/resub-persist'
import CalendarService from '@Services/CalendarService'
import LocationStore from '@Services/LocationStore'
import { persistCache } from 'apollo-cache-persist'
import RX from 'reactxp'
import { autoSave, rehydrate } from 'resub-persist'
import * as SyncTasks from 'synctasks'
import ServiceManager, { Service } from '../services/ServiceManager'
import ServiceRegistrar from '../services/ServiceRegistrar'
import AppConfig from './AppConfig'
import Storage from './Storage/Storage'


const persistableStores: IAutoSavablePersistableStore[] = [
  CalendarService,
]

async function getSetLocale(): Promise<LanguageCode> {
  let locale: LanguageCode = await Storage.getItem('locale')

  if (!locale) {
    locale = await Storage.setItem('locale', LanguageCode.en)
  }

  return locale!
}

async function persistAndRehydrate() {
  persistableStores.forEach(store => {
    Object.keys(store.autoSaveTriggerKeys)
      .map(key => {
        autoSave(Storage, store, key)
      })
  })
  return rehydrate(Storage, persistableStores)
}

export default abstract class AppBootstrapper {
  constructor() {
    RX.International.allowRTL(true)
    RX.App.initialize(__DEV__, __DEV__)

    ServiceRegistrar.init()

    this._startCriticalServices()
      .thenAsync(value => {
        getSetLocale()
          .then(locale => {
            this._getInitialUrl()
              .then(url => {
                if (url) {
                  // do something with the url
                  LocationStore.setPath(url)
                  // set locale
                  AppConfig.setLocale(locale)
                }

                // persist apollo cache
                persistCache({
                  cache,
                  // @ts-ignore
                  storage: Storage
                })
                  .then(() => {
                    persistAndRehydrate()
                      .then(() => {
                        // init the app
                        RX.UserInterface.setMainView(this._renderRootView())
                        // RX.UserInterface.useCustomScrollbars(true)
                        RX.International.forceRTL(AppConfig.isRTL())
                        this._hideSplash()
                      })
                  })
              })

          })
      })
  }

  protected abstract _renderRootView(): any

  protected abstract _hideSplash(): any

  protected abstract _getInitialUrl(): Promise<string | undefined>;

  private _startCriticalServices(): SyncTasks.Promise<void> {
    let servicesToStart: Service[] = [
      CalendarService,
    ]

    if (AppConfig.getPlatformType() === 'web') {
      // web specific services
    }

    return ServiceManager.ensureStarted(servicesToStart)
  }
}
