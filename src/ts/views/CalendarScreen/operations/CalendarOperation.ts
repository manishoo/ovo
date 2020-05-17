/*
 * calendar.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, useMutation, useQuery } from '@apollo/client'
import client from '@App/client'
import { updateCalendarCache } from '@Views/CalendarScreen/CalendarScreen'
import { CalendarOverviewOperation } from '@Views/CalendarScreen/components/CalendarOverview/operations/CalendarOverviewOperation'
import { CalendarOverviewQuery } from '@Views/CalendarScreen/components/CalendarOverview/operations/types/CalendarOverviewQuery'
import { CalendarQuery, CalendarQueryVariables } from '@Views/CalendarScreen/operations/types/CalendarQuery'
import {
  GenerateDaysMutation,
  GenerateDaysMutationVariables
} from '@Views/CalendarScreen/operations/types/GenerateDaysMutation'
import { haveSame } from '@Views/CalendarScreen/utils/is-same-day'
import DayComponent from '../components/DayComponent/DayComponent'


export const CalendarOperation = gql`
  query CalendarQuery($dates: [DateTime!]!, $planId: ObjectId!) {
    calendar(dates: $dates, planId: $planId) @connection(key: "calendar", filter: ["planId"]) {
      ...DayComponentDay
    }
  }

  ${DayComponent.fragments.day}
`

export const useCalendar = (planId: string, dates: any[]) => {
  return useQuery<CalendarQuery, CalendarQueryVariables>(CalendarOperation, {
    fetchPolicy: 'cache-only',
    variables: {
      planId,
      dates,
    }
  })
}

export const CalendarCacheOperation = gql`
  query CalendarCacheQuery {
    calendarCache @client {
      date
      dateQueried
    }
  }
`

const GENERATE_DAYS_MUTATION = gql`
  mutation GenerateDaysMutation($dates: [DateTime!]!) {
    generateDays(dates: $dates) {
      ...DayComponentDay
    }
  }

  ${DayComponent.fragments.day}
`

export const useGenerateDays = (planId: string) => {
  return useMutation<GenerateDaysMutation, GenerateDaysMutationVariables>(GENERATE_DAYS_MUTATION, {
    update: (cache, fetchMoreResult) => {
      if (!fetchMoreResult.data) return

      const calendarQuery = cache.readQuery<CalendarQuery>({
        query: CalendarOperation,
        variables: {
          planId,
        },
      })
      if (!calendarQuery) return

      cache.writeQuery<CalendarQuery>({
        query: CalendarOperation,
        variables: {
          planId,
        },
        data: {
          calendar: [
            ...fetchMoreResult.data.generateDays,
            /**
             * If days were added
             * */
            ...calendarQuery.calendar.filter(p => !fetchMoreResult.data!.generateDays.find(p1 => haveSame(p1.date, p.date, 'day'))),
            /**
             * Sort days based on date
             * */
          ].sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
        }
      })

      const calendarControlQuery = cache.readQuery<CalendarOverviewQuery>({
        variables: {
          planId,
        },
        query: CalendarOverviewOperation,
      })
      if (!calendarControlQuery) return
      cache.writeQuery({
        query: CalendarOverviewOperation,
        variables: {
          planId,
        },
        data: {
          calendar: [
            ...fetchMoreResult.data.generateDays,
            ...calendarControlQuery.calendar.filter(p => !fetchMoreResult.data!.generateDays.find(p1 => haveSame(p1.date, p.date, 'day'))),
          ]
        }
      })

      updateCalendarCache(client, fetchMoreResult.data.generateDays.map(d => d.date))
    }
  })
}
