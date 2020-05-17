/*
 * is-touch.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

export function isTouchDevice() {
  if (typeof window === 'undefined') return false

  return !!('ontouchstart' in window) // works on most browsers
    || !!('onmsgesturechange' in window) // works on ie10
}
