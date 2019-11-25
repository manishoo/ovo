/*
 * ServiceRegistrar.ts
 * Copyright: Ouranos Studio 2019
 */

import CalendarService from '@Services/CalendarService'
import LocationStore from '@Services/LocationStore'
import UserStore from '@Services/UserStore'
import AppConfig from '../app/AppConfig'
import ServiceManager from './ServiceManager'


export default class ServiceRegistrar {
  static init() {
    ServiceManager.registerService(UserStore, UserStore.name)
    ServiceManager.registerService(LocationStore, LocationStore.name)
    ServiceManager.registerService(CalendarService, CalendarService.name)

    // Web-specific services
    if (AppConfig.getPlatformType() === 'web') {
      // ServiceManager.registerService(PageUrlService, 'PageUrlService');
    }
  }
}
