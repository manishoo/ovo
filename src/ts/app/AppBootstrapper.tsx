/*
 * AppBootstrapper.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { cache } from '@App/client-cache'
import { ThemeMode } from '@App/Theme'
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
    if (typeof window !== 'undefined') {
      locale = await Storage.setItem('locale', LanguageCode.en)
    } else {
      locale = await Storage.setItem('locale', LanguageCode.en)
    }
  }

  return locale!
}

async function getTheme(): Promise<ThemeMode> {
  let theme: ThemeMode = await Storage.getItem('theme')

  if (!theme) {
    return ThemeMode.light
  }

  return theme!
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
    this._initiate()
  }

  private async _initiate() {
    RX.International.allowRTL(true)
    RX.App.initialize(__DEV__, __DEV__)

    ServiceRegistrar.init()

    await persistCache({
      cache,
      // @ts-ignore
      storage: Storage
    })

    const theme = await getTheme()

    await persistAndRehydrate()

    await this._startCriticalServices().toEs6Promise()

    const locale = await getSetLocale()

    const url = await this._getInitialUrl()

    if (url) {
      // do something with the url
      LocationStore.setPath(url)
    }

    // set locale
    AppConfig.setLocale(locale)
    // set theme
    AppConfig.setTheme(theme)

    // persist apollo cache

    // init the app
    RX.UserInterface.setMainView(this._renderRootView())
    // RX.UserInterface.useCustomScrollbars(true)
    RX.International.forceRTL(AppConfig.isRTL())
    this._hideSplash()
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
