/*
 * trim-slashes.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

export function trimSlashes(s: string) {
  if (s[s.length - 1] === '/') {
    s = s.replace(/\/$/, '')
    return s.replace(/.*\//, '')
  }

  return s.replace(/.*\//, '')
}
