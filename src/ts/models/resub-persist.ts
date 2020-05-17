/*
 * resub-persist.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { IPersistableStore } from 'resub-persist'


export interface IAutoSavablePersistableStore extends IPersistableStore {
  autoSaveTriggerKeys: any
}
