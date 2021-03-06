/*
 * AppBootstrapper.tsx
 * Copyright: Ouranos Studio 2019
 */

import { persistCache } from 'apollo-cache-persist'
import RX from 'reactxp'
import { cache } from 'src/ts/app/client-cache'
import LocationStore from 'src/ts/stores/LocationStore'
import UserStore from 'src/ts/stores/UserStore'
import * as SyncTasks from 'synctasks'
import ServiceManager, { Service } from '../services/ServiceManager'
import ServiceRegistrar from '../services/ServiceRegistrar'
import AppConfig from './AppConfig'
import Storage from './Storage/Storage'

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
							// do something with the url
							LocationStore.setPath(url)
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
								RX.International.forceRTL(AppConfig.isRTL())
							})
					})
			})
	}

	protected abstract _renderRootView(): any

	protected abstract _getInitialUrl(): SyncTasks.Promise<string | undefined>;

	private _startCriticalServices(): SyncTasks.Promise<void> {
		let servicesToStart: Service[] = [
			UserStore,
		]

		if (AppConfig.getPlatformType() === 'web') {
			// web specific services
		}

		return ServiceManager.ensureStarted(servicesToStart)
	}
}
