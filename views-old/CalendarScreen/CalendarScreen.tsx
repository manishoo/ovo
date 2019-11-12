/*
 * CalendarScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useQuery } from '@apollo/react-hooks'
import CalendarStore, { DayItem } from '@Services/CalendarStore'
import gql from 'graphql-tag'
import { DateTime } from 'luxon'
import RX from 'reactxp'
import { VirtualListView, VirtualListViewCellRenderDetails } from 'reactxp-virtuallistview'
import { VirtualListViewItemInfo } from 'reactxp-virtuallistview/src/VirtualListView'
import { ComponentBase } from 'resub'
import DayComponentContainer, { DayComponent } from './components/DayComponent'
import { CalendarQuery, CalendarQueryVariables } from './types/CalendarQuery'
import { Day } from './types/Day'


interface CalendarProps extends RX.CommonProps {
  style?: any,
  calendar: DayItem[],
}

interface CalendarState {
  calendar: DayItem[],
}

export class CalendarScreen extends ComponentBase<CalendarProps, CalendarState> {
  constructor(props: CalendarProps) {
    super(props)

    RX.StatusBar.setTranslucent(true)
    this.state = {
      calendar: CalendarStore.getCalendar(),
    }
  }

  protected _buildState(props: CalendarProps, initialBuild: boolean): Partial<CalendarState> | undefined {
    return {
      calendar: CalendarStore.getCalendar(),
    }
  }

  public render() {
    return (
      <VirtualListView
        itemList={this.state.calendar}
        renderItem={this._renderItem}
      />
    )
  }

  private _renderItem = ({ item: day }: VirtualListViewCellRenderDetails<VirtualListViewItemInfo & Day>) => {
    return (
      <DayComponentContainer
        day={day}
        isPrevDayFilled={this._isPrevDayFilled(day)}
        isNextDayFilled={this._isNextDayFilled(day)}
      />
    )
  }

  private _isPrevDayFilled = (day: Day) => {
    const foundDay = this.state.calendar
      .find(p => DateTime.fromJSDate(p.date).toISODate() === DateTime.fromJSDate(day.date).minus({ day: 1 }).toISODate())

    /**
     * If it was the first day (ever!)
     * */
    if (!foundDay) return true

    return foundDay && foundDay.meals.length > 0
  }

  private _isNextDayFilled = (day: Day) => {
    const foundDay = this.state.calendar
      .find(p => DateTime.fromJSDate(p.date).toISODate() === DateTime.fromJSDate(day.date).plus({ day: 1 }).toISODate())

    /**
     * If it was the last day (ever!)
     * */
    if (!foundDay) return true

    return foundDay && foundDay.meals.length > 0
  }

  static operations = {
    calendar: gql`
      query CalendarQuery($startDate: DateTime!, $endDate: DateTime!) {
        calendar(startDate: $startDate, endDate: $endDate) {
          ...Day
        }
      }

      ${DayComponent.fragments.day}
    `
  }
}

export default () => {
  const { data } = useQuery<CalendarQuery, CalendarQueryVariables>(CalendarScreen.operations.calendar, {
    variables: {
      startDate: '2019-10-29T16:23:18.758Z',
      endDate: '2019-10-29T16:23:18.758Z',
    }
  })

  return (
    <CalendarScreen
      calendar={(data && data.calendar) || []}
      {...this.props}
    />
  )
}
//
// const styles = {
//   container: RX.Styles.createViewStyle({
//     //
//   }),
//   dayName: RX.Styles.createTextStyle({
//     fontSize: 25,
//     color: '#fff',
//     fontWeight: 'bold',
//     alignSelf: 'center',
//     margin: 25,
//   })
// }
