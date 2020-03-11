/*
 * CalendarScreen.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { graphql, withApollo } from '@apollo/react-hoc'
import Styles from '@App/Styles'
import Page from '@Common/Page'
import Carousel from '@Modules/Carousel'
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

export const ANIMATION_DURATION = 300

const DEFAULT = {
  getDayCursor: DateTime.local,
  daysOnEachSide: 5,
  get renderingDays() {
    return generateRenderingDays(this.getDayCursor(), this.daysOnEachSide)
  }
}

class CalendarScreen extends ComponentBase<CalendarProps, CalendarState> {
  private _carousel: Carousel | null = null
  private _control: null | any = null
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
    this.props.getMoreDays(this.state.renderingDates)
  }

  public render() {
    const currentDay = this._getDayByDate(this.state.dayCursor, this.props.calendar)

    return [
      <Page lazyRender
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
          onDateChange={date => this._changeDayCursor(date)}
          width={this.state.width}
          style={{
            marginBottom: Styles.values.spacing,
          }}
        />
        <Carousel
          ref={ref => this._carousel = ref}
          initialSlide={this._daysOnEachSide}
          slidesToShow={1}
          slidesToScroll={1}
          adaptiveHeight
          speed={ANIMATION_DURATION}
        >
          {
            this.state.renderingDates.map(date => (
              <DayComponent
                key={date.toISODate()}
                style={{
                  width: this._dayWidth(),
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
        </Carousel>
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
          bottom: 54, // TODO tabBar
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

  private _dayWidth = () => this.state.width - (Styles.values.spacing * 2)

  private _getDayByDate = (date: DateTime, calendar: Day[]) => {
    /**
     * If the date was far away, don't return the day
     * */
    return calendar.find(day => DateTime.fromISO(day.date).hasSame(date, 'day'))
  }

  private _changeDayCursor = (date: DateTime) => {
    const { renderingDates } = this.state
    const { getMoreDays } = this.props
    const carousel = this._carousel!

    let position = renderingDates.findIndex(p => p.hasSame(date, 'day'))

    const destinationInScrollView: boolean = position >= 0

    const newRenderingDates = generateRenderingDays(date, this._daysOnEachSide)
    const newDatesToGet = newRenderingDates.filter(p => !renderingDates.find(p2 => p.hasSame(p2, 'day')))
    if (newDatesToGet.length > 0) {
      getMoreDays(newDatesToGet)
    }

    if (destinationInScrollView) {
      carousel.goTo(position)
    } else {
      this.setState({
        renderingDates: generateRenderingDays(date, this._daysOnEachSide),
      }, () => carousel.goTo(this._daysOnEachSide, false))
    }
  }
}

export default withApollo(graphql<any, CalendarQuery, CalendarQueryVariables, CalendarProps>(CalendarOperation, {
  options: {
    fetchPolicy: 'cache-only',
    variables: {
      dates: DEFAULT.renderingDays.map(date => date.toISODate()),
    },
    notifyOnNetworkStatusChange: true,
  },
  props: ({ data, ownProps: { client } }) => ({
    calendar: data ? data.calendar || [] : [],
    getMoreDays: dates => data ? data.fetchMore({
      updateQuery: (_previousQueryResult, { fetchMoreResult, variables }) => {
        const previousQueryResult = client.readQuery({
          query: CalendarOperation,
        })
        console.log('previousQueryResult', previousQueryResult)

        if (!fetchMoreResult) return previousQueryResult

        /**
         * If days were removed
         * */
        let newCalendar: CalendarQuery_calendar[] = []
        if (previousQueryResult) {
          newCalendar = previousQueryResult.calendar.map(p => {
            if (dates.find(p1 => DateTime.fromISO(p.date).hasSame(p1, 'day'))) {
              const foundNewDay = fetchMoreResult.calendar.find(p2 => DateTime.fromISO(p.date).hasSame(p2.date, 'day'))

              if (foundNewDay) {
                return foundNewDay
              }
            }

            return p
          })
        }

        const data = {
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

        console.log('data', data)
        client.writeQuery({
          query: CalendarOperation,
          data,
        })
        return data
      },
      variables: {
        dates: dates.map(date => date.toISODate()),
      }
    }) : null,
  }),
})(CalendarScreen))
