/*
 * CalendarScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useQuery } from '@apollo/react-hooks'
import Styles from '@App/Styles'
import Page from '@Common/Page'
import CalendarService from '@Services/CalendarService'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import gql from 'graphql-tag'
import { DateTime } from 'luxon'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import CalendarControl from './components/CalendarControl'
import CalendarFAB from './components/CalendarFAB'
import CalendarNavButton from './components/CalendarNavButton'
import DayComponent from './components/DayComponent'
import { Day } from './components/types/Day'
import { CalendarQuery, CalendarQueryVariables } from './types/CalendarQuery'


interface CalendarProps extends RX.CommonProps {
  style?: any,
  calendar: Day[],
}

interface CalendarState {
  calendar: Day[],
  renderingDates: DateTime[],
  dayCursor: DateTime,
  width: number,
  height: number,
  isSmallOrTinyScreenSize: boolean,
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

  private _scrollView: RX.ScrollView | null = null
  private _control: null | CalendarControl = null
  private _daysOnEachSide = 2

  constructor(props: CalendarProps) {
    super(props)

    RX.StatusBar.setTranslucent(true)
    const dayCursor = DateTime.local()

    this.state = {
      dayCursor,
      calendar: CalendarService.getCalendar(),
      renderingDates: this._generateRenderingDays(dayCursor),
      width: ResponsiveWidthStore.getWidthConsideringMaxWidth(),
      height: ResponsiveWidthStore.getHeight(),
      isSmallOrTinyScreenSize: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
    }
  }

  componentDidMount() {
    const scrollView = this._scrollView

    // go to today
    if (scrollView) {
      setTimeout(() => {
        this._goToCenter()
      }, 0)
    }
  }

  public render() {
    const currentDay = this._getDayByDate(this.state.dayCursor, this.state.calendar)

    return [
      <Page
        style={{
          flex: 1,
        }}
        outerContainerChildren={[
          <CalendarNavButton
            onPress={() => this._control!.changeDayCursor(this.state.dayCursor.minus({ day: 1 }))}
            direction={'toLeft'}
            style={{
              [Styles.values.start]: 0,
            }}
          />,
          <CalendarNavButton
            onPress={() => this._control!.changeDayCursor(this.state.dayCursor.plus({ day: 1 }))}
            direction={'toRight'}
            style={{
              [Styles.values.end]: 0,
            }}
          />
        ]}
      >
        <CalendarControl
          ref={ref => this._control = ref}
          days={this.state.calendar}
          dayCursor={this.state.dayCursor}
          onDateChange={date => this._changeDayCursor(date)}
          width={this.state.width}
          style={{
            marginBottom: Styles.values.spacing,
          }}
        />
        <RX.ScrollView
          style={[
            styles.scrollView,
          ]}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ref={ref => this._scrollView = ref}
        >
          {
            this.state.renderingDates.map(date => (
              <DayComponent
                key={date.toISODate()}
                style={{
                  width: this._getDayWidth(),
                }}
                date={date}
                onTitlePress={date => this._control!.changeDayCursor(date)}
                day={this._getDayByDate(date, this.state.calendar)}
                height={this.state.height}
                width={this.state.width}
                isTinyOrSmall={this.state.isSmallOrTinyScreenSize}
              />
            ))
          }
        </RX.ScrollView>
      </Page>,
      currentDay &&
      <RX.View
        ignorePointerEvents
        // @ts-ignore web
        style={{
          width: this.state.width,
          alignSelf: 'center',
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 54, // TODO navbar
          height: 100,
          margin: 'auto',
        }}
      >
        <CalendarFAB
          day={currentDay}
          style={{
            bottom: Styles.values.spacing,
            [Styles.values.end]: Styles.values.spacing,
            position: 'absolute',
          }}
        />
      </RX.View>
    ]
  }

  protected _buildState(props: CalendarProps, initialBuild: boolean): Partial<CalendarState> | undefined {
    const calendar = CalendarService.getCalendar()

    return {
      calendar,
    }
  }

  private _generateRenderingDays = (dayCursor: DateTime): DateTime[] => {
    const renderingDays: DateTime[] = []
    for (let i = this._daysOnEachSide; i > 0; i--) {
      renderingDays.push(dayCursor.minus({ day: i }))
    }
    renderingDays.push(dayCursor)
    for (let i = 1; i <= this._daysOnEachSide; i++) {
      renderingDays.push(dayCursor.plus({ day: i }))
    }
    return renderingDays
  }

  private _getDayWidth = () => this.state.width - (Styles.values.spacing * 2)

  private _getDayByDate = (date: DateTime, calendar: Day[]) => {
    /**
     * If the date was far away, don't return the day
     * */

    return calendar.find(day => DateTime.fromISO(day.date).hasSame(date, 'day'))
  }

  private _goToCenter = () => this._scrollView!.setScrollLeft(this._getDayWidth() * this._daysOnEachSide, false)

  private _changeDayCursor = (date: DateTime) => {
    const { renderingDates } = this.state
    const scrollView = this._scrollView!

    let position = renderingDates.findIndex(p => p.hasSame(date, 'day'))

    const destinationInScrollView: boolean = position >= 0

    if (destinationInScrollView) scrollView.setScrollLeft(position * this._getDayWidth(), true)
    this.setState({
      dayCursor: date,
    })

    if (position < 2 || position > 9) {
      setTimeout(() => {
        this.setState({
          renderingDates: this._generateRenderingDays(date),
        }, () => scrollView.setScrollLeft(this._daysOnEachSide * this._getDayWidth(), false))
      }, destinationInScrollView ? 1000 : 0)
    }
  }
}

export default (props: CalendarProps) => {
  const { data } = useQuery<CalendarQuery, CalendarQueryVariables>(CalendarScreen.operations.calendar, {
    fetchPolicy: 'cache-and-network',
    variables: {
      startDate: '2019-10-29T16:23:18.758Z',
      endDate: '2020-01-01T16:23:18.758Z',
    }
  })

  return (
    <CalendarScreen
      style={props.style}
      calendar={(data && data.calendar) || []}
    />
  )
}

const styles = {
  scrollView: RX.Styles.createScrollViewStyle({
    // @ts-ignore
    display: 'flex',
  }),
  controlWrapper: RX.Styles.createViewStyle({
    flexDirection: 'row',
    justifyContent: 'space-between',
  }),
  controlButton: RX.Styles.createViewStyle({
    borderRadius: 8,
  }),
}
