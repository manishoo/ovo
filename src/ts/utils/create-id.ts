/*
 * create-id.ts
 * Copyright: Ouranos Studio 2019
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
