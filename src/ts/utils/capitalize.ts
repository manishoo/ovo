/*
 * capitalize.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

export const capitalize = (s: string) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
