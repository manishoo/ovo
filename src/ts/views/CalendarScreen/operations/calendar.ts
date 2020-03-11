/*
 * calendar.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import DayComponent from '../components/DayComponent'


export const CalendarOperation = gql`
  query CalendarQuery($dates: [DateTime!]!) {
    calendar(dates: $dates) @connection(key: "days") {
      ...Day
    }
  }

  ${DayComponent.fragments.day}
`
