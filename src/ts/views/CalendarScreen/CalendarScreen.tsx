/*
 * CalendarScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useQuery } from '@apollo/react-hooks'
import Styles from '@App/Styles'
import CalendarService from '@Services/CalendarService'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import gql from 'graphql-tag'
import { DateTime } from 'luxon'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import DayComponent from './components/DayComponent'
import { Day } from './components/types/Day'
import { CalendarQuery, CalendarQueryVariables } from './types/CalendarQuery'


interface CalendarProps extends RX.CommonProps {
  style?: any,
  calendar: Day[],
}

interface CalendarState {
  calendar: Day[],
  dayCursor: DateTime,
  width: number,
}

export class CalendarScreen extends ComponentBase<CalendarProps, CalendarState> {
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

  constructor(props: CalendarProps) {
    super(props)

    RX.StatusBar.setTranslucent(true)
    this.state = {
      dayCursor: DateTime.local(),
      calendar: CalendarService.getCalendar(),
      width: ResponsiveWidthStore.getWidthConsideringDrawer(),
    }
  }

  protected _buildState(props: CalendarProps, initialBuild: boolean): Partial<CalendarState> | undefined {
    return {
      calendar: CalendarService.getCalendar(),
      width: ResponsiveWidthStore.getWidthConsideringDrawer(),
    }
  }

  public render() {
    return null

    return (
      <RX.ScrollView
        style={[
          styles.scrollView,
          {
            width: this.state.width,
          }
        ]}
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        // pagingEnabled
        // snapToInterval={1}
      >
        {/*<DayComponent
          style={{
            width: this._getDayWidth(),
          }}
          date={this.state.dayCursor.plus({ day: 1 })}
          day={this._getDayByDate(this.state.dayCursor.plus({ day: 1 }))}
        />*/}
        <DayComponent
          style={{
            width: this._getDayWidth(),
          }}
          date={this.state.dayCursor}
          day={this._getDayByDate(this.state.dayCursor)}
        />
        {/*<DayComponent
          style={{
            width: this._getDayWidth(),
          }}
          date={this.state.dayCursor.minus({ day: 1 })}
          day={this._getDayByDate(this.state.dayCursor.minus({ day: 1 }))}
        />*/}
        {this._renderNextControl()}
        {this._renderPrevControl()}
      </RX.ScrollView>
    )
  }

  private _renderNextControl = () => {
    return (
      <RX.View
        onPress={this._onNextDay}
        style={{
          position: 'absolute',
          [Styles.values.end]: 0,
          width: 50,
          top: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <RX.Text>{'->'}</RX.Text>
      </RX.View>
    )
  }

  private _renderPrevControl = () => {
    return (
      <RX.View
        onPress={this._onPrevDay}
        style={{
          position: 'absolute',
          [Styles.values.start]: 0,
          width: 50,
          top: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <RX.Text>{'<-'}</RX.Text>
      </RX.View>
    )
  }

  private _getDayWidth = () => {
    return this.state.width
  }

  private _getDayByDate = (date: DateTime) => {
    const { calendar } = this.state

    return calendar.find(day => DateTime.fromISO(day.date).hasSame(date, 'day'))
  }

  private _onNextDay = () => {
    this.setState(prevState => ({
      dayCursor: prevState.dayCursor.plus({ day: 1 })
    }))
  }

  private _onPrevDay = () => {
    this.setState(prevState => ({
      dayCursor: prevState.dayCursor.minus({ day: 1 })
    }))
  }

  /*private _isPrevDayFilled = (day: Day) => {
    const foundDay = this.state.calendar
      .find(p => DateTime.fromJSDate(p.date).toISODate() === DateTime.fromJSDate(day.date).minus({ day: 1 }).toISODate())

    /!**
     * If it was the first day (ever!)
     * *!/
    if (!foundDay) return true

    return foundDay && foundDay.meals.length > 0
  }

  private _isNextDayFilled = (day: Day) => {
    const foundDay = this.state.calendar
      .find(p => DateTime.fromJSDate(p.date).toISODate() === DateTime.fromJSDate(day.date).plus({ day: 1 }).toISODate())

    /!**
     * If it was the last day (ever!)
     * *!/
    if (!foundDay) return true

    return foundDay && foundDay.meals.length > 0
  }*/
}

export default () => {
  const { data } = useQuery<CalendarQuery, CalendarQueryVariables>(CalendarScreen.operations.calendar, {
    variables: {
      startDate: '2019-10-29T16:23:18.758Z',
      endDate: '2020-01-01T16:23:18.758Z',
    }
  })

  return (
    <CalendarScreen
      calendar={(data && data.calendar) || []}
      {...this.props}
    />
  )
}

const styles = {
  scrollView: RX.Styles.createScrollViewStyle({
    // @ts-ignore
    display: 'flex',
  })
}
