/*
 * cache-defaults.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ApolloCache } from '@apollo/client'
import { MeOperation } from '@Models/graphql/me/me'
import { CalendarControlOperation } from '@Views/CalendarScreen/components/CalendarControl/operations/CalendarControlOperation'
import { CalendarControlQuery } from '@Views/CalendarScreen/components/CalendarControl/operations/types/CalendarControlQuery'
import { CalendarCacheOperation, CalendarOperation } from '@Views/CalendarScreen/operations/CalendarOperation'
import { CalendarCacheQuery } from '@Views/CalendarScreen/operations/types/CalendarCacheQuery'
import { CalendarQuery } from '@Views/CalendarScreen/operations/types/CalendarQuery'


export default function writeDefaults(cache: ApolloCache<any>) {
  cache.writeQuery<CalendarQuery>({
    query: CalendarOperation,
    data: {
      calendar: []
    }
  })
  cache.writeQuery<CalendarControlQuery>({
    query: CalendarControlOperation,
    data: {
      calendar: []
    }
  })
  cache.writeQuery({
    query: MeOperation,
    data: {
      me: null,
    }
  })
  cache.writeQuery<CalendarCacheQuery>({
    query: CalendarCacheOperation,
    data: {
      calendarCache: [],
    }
  })
}
