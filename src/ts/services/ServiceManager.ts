/*
 * ServiceManager.ts
 * Copyright: Ouranos Studio 2019
 */

import * as assert from 'assert'
import attempt from 'lodash/attempt'
import find from 'lodash/find'
import isError from 'lodash/isError'
import map from 'lodash/map'
import noop from 'lodash/noop'
import * as SyncTasks from 'synctasks'


export interface Service {
  startup(): SyncTasks.Thenable<void>;
}

interface ServiceInfo {
  service: Service;
  name: string;
  dependencies: Service[];
  startupPromise: SyncTasks.Promise<void> | undefined;
  hasBegunStartingUp: boolean;
  isComplete: boolean;
}

export default class ServiceManager {
  private static _serviceInfos: ServiceInfo[] = []

  static registerService(service: Service, name: string, dependencies: Service[] = []) {
    if (find(ServiceManager._serviceInfos, info => info.service === service)) {
      assert.ok(false, 'Duplicate startup registration for object: ' + ServiceManager._getName(service))
      return
    }

    const serviceInfo: ServiceInfo = {
      service,
      name,
      dependencies,
      startupPromise: undefined,
      hasBegunStartingUp: false,
      isComplete: false
    }
    ServiceManager._serviceInfos.push(serviceInfo)
  }

  static hasStarted(startupable: Service): boolean {
    let startupInfo = find(ServiceManager._serviceInfos, info => info.service === startupable)
    assert.ok(startupInfo, 'Service not found in hasStarted: ' + ServiceManager._getName(startupable))
    return startupInfo!.isComplete
  }

  static ensureStarted(services: Service[]): SyncTasks.Promise<void> {
    return SyncTasks.all(map(services, service =>
      ServiceManager.ensureStartedSingle(service))).then(noop)
  }

  static ensureStartedSingle(service: Service): SyncTasks.Promise<void> {
    let foundInfo = find(ServiceManager._serviceInfos, info => info.service === service)
    if (!foundInfo) {
      assert.ok(false, 'Service not registered for startup: ' + ServiceManager._getName(service))
      return SyncTasks.Rejected<void>('Service not registered for startup: ' +
        ServiceManager._getName(service))
    }
    const startupInfo = foundInfo
    startupInfo.hasBegunStartingUp = true

    if (startupInfo.startupPromise) {
      // Startup has begun and/or completed.
      return startupInfo.startupPromise
    }

    // Pre-wrap this in a promise, since when you async wrap around to cascade
    // dependencies, you need startupPromise to already be set!
    let deferred = SyncTasks.Defer<void>()
    startupInfo.startupPromise = deferred.promise()

    // Make sure all dependencies have launched.
    ServiceManager.ensureStarted(startupInfo.dependencies).then(() => {
      const startupPromise = attempt(() => {
        return service.startup()
      })

      if (isError(startupPromise)) {
        return SyncTasks.Rejected<void>(startupPromise)
      } else {
        return startupPromise
      }
    }).then(() => {
      startupInfo.isComplete = true

      deferred.resolve(void 0)
    }, err => {
      deferred.reject(err)
    })

    return startupInfo.startupPromise
  }

  private static _getName(service: Service): string {
    const startupInfo = find(ServiceManager._serviceInfos, info => info.service === service)
    if (startupInfo) {
      return startupInfo.name
    }

    return 'unknown'
  }
}
