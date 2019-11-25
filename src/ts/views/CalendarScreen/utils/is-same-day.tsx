/*
 * is-same-day.tsx
 * Copyright: Ouranos Studio 2019
 */

import { DateTime } from 'luxon'


export default function isSameDay(d1: DateTime, d2: DateTime) {
  return d1.toISODate() === d2.toISODate()
}
