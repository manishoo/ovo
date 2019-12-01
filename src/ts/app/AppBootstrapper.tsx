/*
 * AppBootstrapper.tsx
 * Copyright: Ouranos Studio 2019
 */

import { cache } from '@App/client-cache'
import { LanguageCode } from '@Models/global-types'
import CalendarService from '@Services/CalendarService'
import LocationStore from '@Services/LocationStore'
import UserStore from '@Services/UserStore'
import { persistCache } from 'apollo-cache-persist'
import RX from 'reactxp'
import * as SyncTasks from 'synctasks'
import ServiceManager, { Service } from '../services/ServiceManager'
import ServiceRegistrar from '../services/ServiceRegistrar'
import AppConfig from './AppConfig'
import Storage from './Storage/Storage'


function getLocaleFromUrl(url: string): { urlWithoutLocale: string, locale: LanguageCode } {
  const splitUrl = url.split('/')
  const locale = splitUrl.splice(1, 1)

  return {
    locale: locale[0] as LanguageCode,
    urlWithoutLocale: splitUrl.join('/') || '/'
  }
}

export default abstract class AppBootstrapper {
  constructor() {
    RX.International.allowRTL(true)
    RX.App.initialize(__DEV__, __DEV__)

    ServiceRegistrar.init()

    this._startCriticalServices()
      .thenAsync(value => {
        this._getInitialUrl()
          .then(url => {
            if (url) {
              const { urlWithoutLocale, locale } = getLocaleFromUrl(url)
              // do something with the url
              LocationStore.setPath(urlWithoutLocale)
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
                // init the app
                RX.UserInterface.setMainView(this._renderRootView())
                // RX.UserInterface.useCustomScrollbars(true)
                RX.International.forceRTL(AppConfig.isRTL())
                this._hideSplash()
              })
          })
      })
  }

  protected abstract _renderRootView(): any

  protected abstract _hideSplash(): any

  protected abstract _getInitialUrl(): Promise<string | undefined>;

  private _startCriticalServices(): SyncTasks.Promise<void> {
    let servicesToStart: Service[] = [
      UserStore,
      CalendarService,
      // LocationStore,
    ]

    if (AppConfig.getPlatformType() === 'web') {
      // web specific services
    }

    return ServiceManager.ensureStarted(servicesToStart)
  }
}
