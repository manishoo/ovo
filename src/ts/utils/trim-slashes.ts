/*
 * trim-slashes.ts
 * Copyright: Ouranos Studio 2019
 */

export function trimSlashes(s: string) {
  if (s[s.length - 1] === '/') {
    s = s.replace(/\/$/, '')
    return s.replace(/.*\//, '')
  }

  return s.replace(/.*\//, '')
}
