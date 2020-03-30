/*
 * usePrevious.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { useEffect, useRef } from 'react'


export default function usePrevious(value: any) {
  const ref = useRef(value)
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
