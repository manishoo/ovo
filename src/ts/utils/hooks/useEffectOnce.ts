/*
 * useEffectOnce.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { useEffect, useRef } from 'react'


export default function useEffectOnce(func: () => any) {
  const count = useRef(0)
  count.current++

  useEffect(() => {
    if (count.current === 1) {
      func()
    }
  }, [])
}
