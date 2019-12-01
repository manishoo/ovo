/*
 * LocationStore.ts
 * Copyright: Ouranos Studio 2019
 */

import { Routes } from '@Models/common'
import { Action, History, Location } from 'history'
import RX from 'reactxp'
import { autoSubscribe, AutoSubscribeStore, StoreBase } from 'resub'
import { IPersistableStore } from 'resub-persist'
import * as SyncTasks from 'synctasks'


@AutoSubscribeStore
class LocationStore extends StoreBase implements IPersistableStore {
  public name = 'LocationStore'
  private path: string | undefined = undefined
  private history: History

  startup(): SyncTasks.Thenable<void> {
    let deferred = SyncTasks.Defer<void>()

    deferred.resolve(void 0)
    window.addEventListener('popstate', e => this._onUrlChange(e))

    return deferred.promise()
  }

  setHistory(history: any) {
    this.history = history

    this.history.listen(this._handleLocationChange)

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

  navigate(props: any, route: Routes | string, config: any = { params: {} }): void {
    const type = RX.Platform.getType()
    const params = config.params || {}
    const replace = config.params && config.params.replace
    let routeName = String(route)

    if (type === 'web') {
      Object.keys(params).forEach(key => {
        routeName = routeName.replace(`/:${key}`, `/${params[key]}`)
      })

      if (routeName === 'back') {
        return this.history.goBack()
      }

      this.setPath(routeName)

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

  getHistory(): History | undefined {
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
