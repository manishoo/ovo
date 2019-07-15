/*
 * ServiceRegistrar.ts
 * Copyright: Ouranos Studio 2019
 */

import AppConfig from '../app/AppConfig';
import ServiceManager from './ServiceManager';
import UserStore from '../stores/UserStore';
import LocationStore from 'src/ts/stores/LocationStore'

export default class ServiceRegistrar {
    static init() {
        ServiceManager.registerService(UserStore, UserStore.name);
			  ServiceManager.registerService(LocationStore, LocationStore.name);

        // Web-specific services
        if (AppConfig.getPlatformType() === 'web') {
					// ServiceManager.registerService(PageUrlService, 'PageUrlService');
        }
    }
}
