/*
 * CalendarOverviewOperation.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import CalendarCircle from '../../CalendarCircle/CalendarCircle'


export const CalendarOverviewOperation = gql`
  query CalendarOverviewQuery($dates: [DateTime!]!, $planId: ObjectId!) {
    calendar(dates: $dates, planId: $planId) @connection(key: "overview", filter: ["planId"]) {
      ...CalendarCircleDay
    }
  }

  ${CalendarCircle.fragments.day}
`
