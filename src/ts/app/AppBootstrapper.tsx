/*
 * AppBootstrapper.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import AppConfig from './AppConfig'
import * as SyncTasks from 'synctasks'
import ServiceManager, {Service} from '../services/ServiceManager'
import ServiceRegistrar from '../services/ServiceRegistrar'
import UserStore from '../stores/UserStore'
import LocationStore from 'src/ts/stores/LocationStore'
import { persistCache } from 'apollo-cache-persist'
import {cache} from 'src/ts/app/client-cache'
import Storage from './Storage/Storage'

export default abstract class AppBootstrapper {
	constructor() {
		RX.International.allowRTL(true)
		RX.App.initialize(__DEV__, __DEV__)

		ServiceRegistrar.init()

		this._startCriticalServices()
			.thenAsync(value => {
				// Convert the initial URL into a navigation context.
				this._getInitialUrl().then(url => {
					if (url) {
						// do something with the url
						LocationStore.setPath(url) // TODO probably something else should be called
					}

					persistCache({
						cache,
						// @ts-ignore
						storage: Storage
					})
						.then(() => {
							RX.UserInterface.setMainView(this._renderRootView())
							RX.International.forceRTL(AppConfig.isRTL())
						})
				})
			})
	}

	private _startCriticalServices(): SyncTasks.Promise<void> {
		let servicesToStart: Service[] = [UserStore]

		if (AppConfig.getPlatformType() === 'web') {
			// servicesToStart.push(PageUrlService)
		}

		return ServiceManager.ensureStarted(servicesToStart)
	}

	protected abstract _renderRootView(): any

	protected abstract _getInitialUrl(): SyncTasks.Promise<string | undefined>;
}
