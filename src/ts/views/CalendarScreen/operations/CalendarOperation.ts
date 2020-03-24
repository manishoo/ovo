/*
 * calendar.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import { DayComponent } from '../components/DayComponent/DayComponent'


export const CalendarOperation = gql`
  query CalendarQuery($dates: [DateTime!]!) {
    calendar(dates: $dates) @connection(key: "calendar") {
      ...DayComponentDay
    }
  }

  ${DayComponent.fragments.day}
`

export const CalendarCacheOperation = gql`
  query CalendarCacheQuery {
    calendarCache @client {
      date
      dateQueried
    }
  }
`
