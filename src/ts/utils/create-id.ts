/*
 * create-id.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

const ObjectId = require('@Utils/object-id.js')

export function createId(seed?: string) {
  return `${ObjectId()}-client`
}

export function isClientId(id: string) {
  return id.includes('-client')
}

export function getOrigId(id: string) {
  if (isClientId(id)) return null

  return id
}
