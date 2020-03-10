/*
 * CalendarScreen.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { graphql } from '@apollo/react-hoc'
import Styles from '@App/Styles'
import Page from '@Common/Page'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { DateTime } from 'luxon'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import CalendarControl from './components/CalendarControl'
import CalendarFAB from './components/CalendarFAB'
import CalendarNavButton from './components/CalendarNavButton'
import DayComponent from './components/DayComponent'
import { Day } from './components/types/Day'
import { CalendarOperation } from './operations/calendar'
import { CalendarQuery, CalendarQuery_calendar, CalendarQueryVariables } from './types/CalendarQuery'
import generateRenderingDays from './utils/generate-rendering-days'


interface CalendarProps extends RX.CommonProps {
  style?: any,
  calendar: Day[],
  getMoreDays: (dates: DateTime[]) => void,
}

interface CalendarState {
  renderingDates: DateTime[],
  dayCursor: DateTime,
  width: number,
  height: number,
  isSmallOrTinyScreenSize: boolean,
}

const DEFAULT = {
  getDayCursor: DateTime.local,
  daysOnEachSide: 2,
  get renderingDays() {
    return generateRenderingDays(this.getDayCursor(), this.daysOnEachSide)
  }
}

class CalendarScreen extends ComponentBase<CalendarProps, CalendarState> {
  private _scrollView: RX.ScrollView | null = null
  private _control: null | CalendarControl = null
  private _daysOnEachSide = DEFAULT.daysOnEachSide

  constructor(props: CalendarProps) {
    super(props)

    RX.StatusBar.setTranslucent(true)

    this.state = {
      dayCursor: DEFAULT.getDayCursor(),
      renderingDates: DEFAULT.renderingDays,
      width: ResponsiveWidthStore.getWidthConsideringMaxWidth(),
      height: ResponsiveWidthStore.getHeight(),
      isSmallOrTinyScreenSize: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
    }
  }

  componentDidMount() {
    const scrollView = this._scrollView

    this.props.getMoreDays(this.state.renderingDates)
    // go to today
    if (scrollView) {
      setTimeout(() => {
        this._goToCenter()
      }, 0)
    }
  }

  public render() {
    const currentDay = this._getDayByDate(this.state.dayCursor, this.props.calendar)

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
          dayCursor={this.state.dayCursor}
          onDateChange={date => this._changeDayCursor(date)}
          width={this.state.width}
          getDayByDate={date => this._getDayByDate(date, this.props.calendar)}
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
                day={this._getDayByDate(date, this.props.calendar)}
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
    const { getMoreDays } = this.props
    const scrollView = this._scrollView!

    let position = renderingDates.findIndex(p => p.hasSame(date, 'day'))

    const destinationInScrollView: boolean = position >= 0

    if (destinationInScrollView) scrollView.setScrollLeft(position * this._getDayWidth(), true)
    this.setState({
      dayCursor: date,
    })

    const newRenderingDates = generateRenderingDays(date, this._daysOnEachSide)
    const newDatesToGet = newRenderingDates.filter(p => !renderingDates.find(p2 => p.hasSame(p2, 'day')))
    if (newDatesToGet.length > 0) {
      getMoreDays(newDatesToGet)
    }

    if (position < 2 || position > 9) {
      setTimeout(() => {
        this.setState({
          renderingDates: generateRenderingDays(date, this._daysOnEachSide),
        }, () => scrollView.setScrollLeft(this._daysOnEachSide * this._getDayWidth(), false))
      }, destinationInScrollView ? 1000 : 0)
    }
  }
}

export default graphql<{}, CalendarQuery, CalendarQueryVariables, CalendarProps>(CalendarOperation, {
  options: {
    fetchPolicy: 'cache-only',
    variables: {
      dates: DEFAULT.renderingDays.map(date => date.toISODate()),
    },
  },
  props: ({ data }) => ({
    calendar: data ? data.calendar || [] : [],
    getMoreDays: dates => data ? data.fetchMore({
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousQueryResult

        /**
         * If days were removed
         * */
        let newCalendar: CalendarQuery_calendar[] = []
        if (previousQueryResult) {
          newCalendar = previousQueryResult.calendar.filter(p => {
            if (dates.find(p1 => DateTime.fromISO(p.date).hasSame(p1, 'day'))) {
              return !!fetchMoreResult.calendar.find(p2 => DateTime.fromISO(p.date).hasSame(p2.date, 'day'))
            }

            return true
          })
        }

        return {
          ...previousQueryResult,
          calendar: [
            ...newCalendar,
            /**
             * If days were added
             * */
            ...fetchMoreResult.calendar.filter(p => !newCalendar.find(p1 => p1.id === p.id)),
            /**
             * Sort days based on date
             * */
          ].sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
        }
      },
      variables: {
        dates: dates.map(date => date.toISODate()),
      }
    }) : null,
  }),
})(CalendarScreen)

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
