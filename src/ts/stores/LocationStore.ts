/*
 * LocationStore.ts
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import {StoreBase, AutoSubscribeStore, autoSubscribe} from 'resub'
import {IPersistableStore} from 'resub-persist'
import * as SyncTasks from 'synctasks'
import {Routes} from 'src/ts/navigator/routes'
// import AppConfig from 'src/ts/app/AppConfig'

// export let history: any

// if (AppConfig.isNode()) {
// 	history = require('history').createMemoryHistory()
// } else {
// 	history = require('history').createBrowserHistory()
// }

@AutoSubscribeStore
class LocationStore extends StoreBase implements IPersistableStore {
	public name = 'LocationStore'
	private path: string | undefined = undefined
	private history: any

	// private _handlingPopState = false;
	// private _navigatingToNewPlace = false;

	startup(): SyncTasks.Thenable<void> {
		let deferred = SyncTasks.Defer<void>()

		deferred.resolve(void 0)
		window.addEventListener('popstate', e => this._onUrlChange(e))
		// 	history.listen(this._handleLocationChange)


		return deferred.promise()
	}

	setHistory(history: any) {
		this.history = history
		this.trigger()
	}

	setPath(path: string) {
		this.path = path
		this.trigger()
	}

	getPropKeys() {
		return [
			'path',
			'history',
		]
	}

	navigate(props: any, route: Routes | string, config: any = {params: {}}): void {
		const type = RX.Platform.getType()
		const params = config.params || {}
		const replace = config.params && config.params.replace
		let routeName = String(route)

		if (type === 'web') {
			Object.keys(params).forEach(key => {
				routeName = routeName.replace(`/:${key}`, `/${params[key]}`)
			})

			this.setPath(routeName)

			if (routeName === 'back') {
				return this.history.goBack()
			}

			this.history.push(routeName)
		} else {
			Object.keys(params).forEach(key => {
				routeName = routeName.replace(`/:${key}`, '')
			})

			if (routeName === 'back') {
				return props.navigation.goBack()
			}

			if (replace) {
				return props.navigation.replace(routeName, params)
			}
			props.navigation.navigate({
				routeName,
				params,
			})
		}
	}

	@autoSubscribe
	getPath(): string | undefined {
		return this.path
	}

	// private _onNavigationChange() {
	// // Prevent reentrancy.
	// if (!this._handlingPopState) {
	// 	const navContext = NavContextStore.getNavContext();
	// 	let newUrl = DeepLinkConverter.getUrlFromContext(navContext);
	//
	// 	this._navigatingToNewPlace = true;
	// 	window.history.pushState(null, '', newUrl);
	// 	this._navigatingToNewPlace = false;
	// }
	// }

	private _onUrlChange(e: any) {
		// // If the URL is changing because we're programatically changing it, ignore.
		// if (this._navigatingToNewPlace) {
		// 	return;
		// }
		//
		// // Remember that we're popping state. When we navigate, there's no need to push a new state because we're just
		// // returning to an existing one on the stack.
		// this._handlingPopState = true;
		//
		// // Check if we're going back to a previous nav context.
		// const navContext = DeepLinkConverter.getContextFromUrl(window.location.href, NavContextStore.isUsingStackNav());
		// if (navContext) {
		// 	NavContextStore.setNavContext(navContext);
		// }
		//
		// // We're done with the navigation change.
		// this._handlingPopState = false;
	}
}

export default new LocationStore()
