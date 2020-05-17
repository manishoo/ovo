/*
 * ToastStore.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { createId } from '@Utils/create-id'
import { autoSubscribe, AutoSubscribeStore, StoreBase } from 'resub'
import { IPersistableStore } from 'resub-persist'
import * as SyncTasks from 'synctasks'


const DEFAULT_TIMEOUT = 5000

export interface Toast {
  _id?: string
  message: string,
  type?: ToastTypes
  timeout?: number,
}

export enum ToastTypes {
  Success = 'Success',
  Error = 'Error',
}

@AutoSubscribeStore
class ToastStore extends StoreBase implements IPersistableStore {
  public name = 'ToastStore'
  public Types = ToastTypes
  private toasts: Toast[] = []

  startup(): SyncTasks.Thenable<void> {
    let deferred = SyncTasks.Defer<void>()

    return deferred.promise()
  }

  public toast(toast: Toast) {
    toast._id = createId()
    this.toasts.push(toast)

    setTimeout(() => {
      this.toasts = this.toasts.filter(t => t._id !== toast._id)

      this.trigger()
    }, toast.timeout || DEFAULT_TIMEOUT)

    this.trigger()
  }

  getPropKeys() {
    return [
      'toasts',
    ]
  }

  @autoSubscribe
  getToasts(): Toast[] {
    return this.toasts
  }
}

export default new ToastStore()
