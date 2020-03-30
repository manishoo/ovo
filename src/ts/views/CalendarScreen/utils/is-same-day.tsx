/*
 * is-same-day.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

// import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'
import { DateTime } from 'luxon'


export default function isSameDay(d1: DateTime, d2: DateTime) {
  return d1.toISODate() === d2.toISODate()
}

const getDate = (d: string | Date) => {
  switch (typeof d) {
    case 'string':
      return new Date(d)
    case 'object':
      return d
  }
}

export function haveSame(d1: Date, d2: Date, unit: 'day' | 'week' = 'day') {
  return DateTime.fromJSDate(getDate(d1)).hasSame(DateTime.fromJSDate(getDate(d2)), unit)
}
