/*
 * LocationStore.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { Action, History, Location, LocationDescriptorObject } from 'history'
import RX from 'reactxp'
import { autoSubscribe, AutoSubscribeStore, StoreBase } from 'resub'
import { IPersistableStore } from 'resub-persist'
import * as SyncTasks from 'synctasks'
import LocationDescriptor = History.LocationDescriptor


@AutoSubscribeStore
class LocationStore extends StoreBase implements IPersistableStore {
  public name = 'LocationStore'
  private path: string | null = null
  private history: History | null = null

  startup(): SyncTasks.Thenable<void> {
    let deferred = SyncTasks.Defer<void>()

    deferred.resolve(void 0)

    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', e => this._onUrlChange(e))
    }

    return deferred.promise()
  }

  setHistory(history: History) {
    this.history = history

    history.listen(this._handleLocationChange)

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

  pushHistory(routeName: string) {
    if (!this.history) return

    this.history.push(routeName)
  }

  goBack() {
    if (!this.history) return

    this.history.goBack()
  }

  navigate(props: any, route: LocationDescriptor<History.PoorMansUnknown>, config: any = { params: {} }): void {
    if (!this.history) return

    const type = RX.Platform.getType()
    const params = config.params || {}
    const replace = config.params && config.params.replace

    if (type === 'web') {
      // Object.keys(params).forEach(key => {
      //   routeName = routeName.replace(`/:${key}`, `/${params[key]}`)
      // })

      if (route === 'back') {
        return this.history.goBack()
      }

      if (replace) {
        return this.history.replace(route as LocationDescriptorObject)
      }

      this.history.push(route as LocationDescriptorObject)
    } else {
      let routeName = String(route)
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
  getPath(): string {
    if (!this.path) throw new Error('no path available')
    return this.path
  }

  getHistory(): History {
    if (!this.history) throw new Error('no history available')
    return this.history
  }

  private _handleLocationChange = (location: Location, action?: Action) => {
    this.setPath(location.pathname)
  }

  private _onUrlChange(e: any) {
    console.log('POPSTATE')
  }
}

export default new LocationStore()
