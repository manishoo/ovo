/*
 * create-id.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

export function createId(seed?: string) {
  return `${Math.random()}-client`
}

export function isClientId(id: string) {
  return id.includes('-client')
}

export function getOrigId(id: string) {
  if (isClientId(id)) return null

  return id
}
