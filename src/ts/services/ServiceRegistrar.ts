/*
 * ServiceRegistrar.ts
 * Copyright: Ouranos Studio 2019
 */

import LocationStore from 'src/ts/stores/LocationStore'
import AppConfig from '../app/AppConfig'
import UserStore from '../stores/UserStore'
import ServiceManager from './ServiceManager'


export default class ServiceRegistrar {
  static init() {
    ServiceManager.registerService(UserStore, UserStore.name)
    ServiceManager.registerService(LocationStore, LocationStore.name)

    // Web-specific services
    if (AppConfig.getPlatformType() === 'web') {
      // ServiceManager.registerService(PageUrlService, 'PageUrlService');
    }
  }
}
