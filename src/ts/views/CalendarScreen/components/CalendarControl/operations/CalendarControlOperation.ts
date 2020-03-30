/*
 * CalendarControlOperation.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import CalendarCircle from '../components/CalendarCircle/CalendarCircle'


export const CalendarControlOperation = gql`
  query CalendarControlQuery($dates: [DateTime!]!) {
    calendar(dates: $dates) @connection(key: "overview") {
      ...CalendarCircleDay
    }
  }

  ${CalendarCircle.fragments.day}
`
