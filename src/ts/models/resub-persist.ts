/*
 * resub-persist.ts
 * Copyright: Ouranos Studio 2019
 */

import { IPersistableStore } from 'resub-persist'

export interface IAutoSavablePersistableStore extends IPersistableStore {
  autoSaveTriggerKeys: any
}
