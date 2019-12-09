/*
 * capitalize.ts
 * Copyright: Ouranos Studio 2019
 */

export const capitalize = (s: string) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
