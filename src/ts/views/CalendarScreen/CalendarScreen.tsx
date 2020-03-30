/*
 * CalendarScreen.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ApolloClient, ApolloQueryResult, graphql, withApollo } from '@apollo/react-hoc'
import client from '@App/client'
import Styles from '@App/Styles'
import Page from '@Common/Page'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { CalendarCacheQuery } from '@Views/CalendarScreen/operations/types/CalendarCacheQuery'
import { haveSame } from '@Views/CalendarScreen/utils/is-same-day'
import addDays from 'date-fns/addDays'
import subDays from 'date-fns/subDays'
import uniqBy from 'lodash/uniqBy'
import { PureComponent, useCallback } from 'react'
import RX from 'reactxp'
import CalendarCarousel from './components/CalendarCarousel/CalendarCarousel'
import CalendarControl from './components/CalendarControl/CalendarControl'
import CalendarFAB from './components/CalendarFAB/CalendarFAB'
import CalendarNavButton from './components/CalendarNavButton/CalendarNavButton'
import { DayComponentDay } from './components/DayComponent/types/DayComponentDay'
import { CalendarCacheOperation, CalendarOperation } from './operations/CalendarOperation'
import { CalendarQuery, CalendarQuery_calendar, CalendarQueryVariables } from './operations/types/CalendarQuery'
import generateRenderingDays from './utils/generate-rendering-days'


const styles = {
  calendarControlStyle: RX.Styles.createViewStyle({
    marginBottom: Styles.values.spacing,
  }),
  prevNavButton: RX.Styles.createViewStyle({
    [Styles.values.start]: 0,
  }),
  nextNavButton: RX.Styles.createViewStyle({
    [Styles.values.end]: 0,
  }),
}

interface CalendarProps extends RX.CommonProps {
  style?: any,
  days: DayComponentDay[],
  getMoreDays: (dates: Date[]) => Promise<ApolloQueryResult<CalendarQuery>>,
}

interface CalendarState {
  renderingDates: Date[],
  dayCursor: Date,
  width: number,
  height: number,
  isSmallOrTinyScreenSize: boolean,
  loadingDays: Date[],
  scrollTop: number,
}

export const ANIMATION_DURATION = 200

const DEFAULT = {
  get getDayCursor() {
    return new Date()
  },
  daysOnEachSide: 5,
  get renderingDays() {
    return generateRenderingDays(this.getDayCursor, this.daysOnEachSide)
  }
}

class CalendarScreen extends PureComponent<CalendarProps, CalendarState> {
  private _carousel: CalendarCarousel | null = null
  private _control: null | any = null
  private _daysOnEachSide = DEFAULT.daysOnEachSide

  // private _dayCursor: Date

  constructor(props: CalendarProps) {
    super(props)

    RX.StatusBar.setTranslucent(true)

    // this._onScroll = debounce(this._onScroll, 1000)
    // this._dayCursor =
    // DEFAULT.getDayCursor()
    this.state = {
      dayCursor: DEFAULT.getDayCursor,
      renderingDates: DEFAULT.renderingDays,
      width: ResponsiveWidthStore.getWidthConsideringMaxWidth(),
      height: ResponsiveWidthStore.getHeight() - Styles.values.spacing * 2,
      isSmallOrTinyScreenSize: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
      loadingDays: [],
      scrollTop: 0,
    }
  }

  componentDidMount() {
    this._getMoreDays(this.state.renderingDates)
  }

  public render() {
    const { days } = this.props
    const { loadingDays } = this.state
    const currentDay = this._getDayByDate(this.state.dayCursor, days)

    const _calendarNavButtonChevronStyle = RX.Styles.createViewStyle({
      marginTop: this.state.height / 2,
    }, false)

    return (
      <>
        <Page
          setScrollContext
          lazyRender
          style={{
            flex: 1,
          }}
          innermostViewStyle={{
            padding: 0,
          }}
          // scrollViewProps={{
          //   onScroll: this._onScroll
          // }}
          outerContainerChildren={<>
            <CalendarNavButton
              onPress={this._onPrevSlide}
              direction={'toLeft'}
              chevronStyle={_calendarNavButtonChevronStyle}
              style={styles.prevNavButton}
            />
            <CalendarNavButton
              onPress={this._onNextSlide}
              direction={'toRight'}
              chevronStyle={_calendarNavButtonChevronStyle}
              style={styles.nextNavButton}
            />
          </>}
        >
          <CalendarControl
            ref={(ref: any) => this._control = ref}
            onDateChange={this._changeDayCursor}
            width={this.state.width}
            style={styles.calendarControlStyle}
          />
          <CalendarCarousel
            ref={ref => this._carousel = ref}
            onNextSlide={this._onNextSlide}
            onPrevSlide={this._onPrevSlide}
            initialSlide={this._daysOnEachSide}
            days={this.props.days}
            onTitlePress={this._onTitlePress}
            height={this.state.height}
            width={this.state.width}
            isTinyOrSmall={this.state.isSmallOrTinyScreenSize}
            loadingDays={loadingDays}
            renderingDates={this.state.renderingDates}
          />

        </Page>
        {
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
              bottom: 0, // TODO tabBar
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
        }
      </>
    )
  }

  // private _onSlideChange = (slide: number) => {
  //   const { renderingDates } = this.state
  //
  //   // this._dayCursor = renderingDates[slide]
  //   this._control!.changeDayCursor(renderingDates[slide])
  // }

  private _onTitlePress = (date: Date) => this._control!.changeDayCursor(date)

  private _onPrevSlide = () => {
    const { dayCursor } = this.state
    this._control!.changeDayCursor(subDays(dayCursor, 1))
  }

  private _onNextSlide = () => {
    const { dayCursor } = this.state
    this._control!.changeDayCursor(addDays(dayCursor, 1))
  }

  private _getDayByDate = (date: Date, calendar: DayComponentDay[]) => {
    // const { dayCursor } = this.state

    /**
     * If it was in two days away
     * */
    // if (Math.abs(date.diff(dayCursor, 'day').as('day')) > 1) return

    /**
     * If the date was far away, don't return the day
     * */
    return calendar.find(day => haveSame(day.date, date, 'day'))
  }

  private _changeDayCursor = (date: Date) => {
    const { renderingDates } = this.state
    const carousel = this._carousel!

    let position = renderingDates.findIndex(p => haveSame(p, date, 'day'))

    const destinationInScrollView: boolean = position >= 0

    const newRenderingDates = generateRenderingDays(date, this._daysOnEachSide)
    const newDatesToGet = newRenderingDates.filter(p => !renderingDates.find(p2 => haveSame(p2, p, 'day')))

    // // FIXME
    // this.setState({
    //   dayCursor: date,
    // })
    //
    // setTimeout(() => {
    //   if (newDatesToGet.length > 0) {
    //     console.log('newDatesToGet', newDatesToGet)
    //     this._getMoreDays(newDatesToGet)
    //   }
    // }, 1000)

    this.setState({
      dayCursor: date,
      loadingDays: filterDatesWithCache(client, newDatesToGet),
    }, () => {
      if (destinationInScrollView) {
        carousel.goTo(position)
      } else {
        carousel.goTo(this._daysOnEachSide, false)
      }

      // this.props.getMoreDays(newDatesToGet)
      //   .then(() => {
      //     this.setState({
      //       loadingDays: [],
      //     })
      //   })
      // setTimeout(() => {
      if (newDatesToGet.length > 0) {
        this.setState({
          renderingDates: destinationInScrollView ? this.state.renderingDates : newRenderingDates,
        })
        this.props.getMoreDays(newDatesToGet)
          .then(() => {
            this.setState({
              loadingDays: [],
              // dayCursor: date,
            })
          })
      } else {
        this.setState({
          loadingDays: [],
          renderingDates: destinationInScrollView ? this.state.renderingDates : newRenderingDates,
          // dayCursor: date,
        })
      }
      // }, 1000)
    })

    /*
        this.setState({
          dayCursor: date,
          loadingDays: filterDatesWithCache(client, newDatesToGet),
          renderingDates: destinationInScrollView ? this.state.renderingDates : newRenderingDates,
        }, () => {
          if (destinationInScrollView) {
            carousel.goTo(position)
          } else {
            carousel.goTo(this._daysOnEachSide, false)
          }

          // this.props.getMoreDays(newDatesToGet)
          //   .then(() => {
          //     this.setState({
          //       loadingDays: [],
          //     })
          //   })
          // setTimeout(() => {
            if (newDatesToGet.length > 0) {
              this.props.getMoreDays(newDatesToGet)
                .then(() => {
                  this.setState({
                    loadingDays: [],
                    // dayCursor: date,
                  })
                })
            } else {
              this.setState({
                loadingDays: [],
                // dayCursor: date,
              })
            }
          // }, 1000)
        })
    */

    if (destinationInScrollView) {
      carousel.goTo(position)
    } else {
      this.setState({
        renderingDates: newRenderingDates,
      }, () => carousel.goTo(this._daysOnEachSide, false))
    }
  }

  private _getMoreDays = (dates: Date[]) => {
    this.setState({
      loadingDays: filterDatesWithCache(client, dates),
    }, () => {
      this.props.getMoreDays(dates)
        .then(({ loading }) => {
          this.setState({
            loadingDays: [],
          })
        })
    })
  }
}

// export default function() {
//   const [dates, setDates] = useState<Date[]>([])
//   const { data, variables, loading, fetchMore } = useQuery<CalendarQuery, CalendarQueryVariables>(CalendarOperation, {
//     fetchPolicy: 'cache-only',
//     variables: {
//       dates: dates.map(date => date.toJSDate()),
//     }
//   })
// console.log('data', data)
// console.log('variables', variables)
// console.log('loading', loading)
//   return (
//     <CalendarScreen
//       days={data ? data.calendar || [] : []}
//       loadingDays={loading ? variables.dates.map(d => Date.fromISO(d)) : []}
//       getMoreDays={dates => {
//         // setDates(dates)
//         data ? fetchMore({
//           variables: {
//             dates: dates.map(date => date.toJSDate()),
//           },
//           updateQuery: (_previousQueryResult, { fetchMoreResult }) => {
//             // const previousQueryResult: CalendarQuery | null = client.readQuery({
//             //   query: CalendarOperation,
//             // })
//             if (!fetchMoreResult) return _previousQueryResult
//
//             /**
//              * If days were removed
//              * */
//             let newCalendar: CalendarQuery_calendar[] = []
//             if (_previousQueryResult) {
//               newCalendar = _previousQueryResult.calendar.map(p => {
//                 if (dates.find(p1 => Date.fromISO(p.date).hasSame(p1, 'day'))) {
//                   const foundNewDay = fetchMoreResult.calendar.find(p2 => Date.fromISO(p.date).hasSame(p2.date, 'day'))
//
//                   if (foundNewDay) {
//                     return foundNewDay
//                   }
//                 }
//
//                 return p
//               })
//             }
//
//             const data = {
//               ..._previousQueryResult,
//               calendar: [
//                 ...newCalendar,
//                 /**
//                  * If days were added
//                  * */
//                 ...fetchMoreResult.calendar.filter(p => !newCalendar.find(p1 => p1.id === p.id)),
//                 /**
//                  * Sort days based on date
//                  * */
//               ].sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
//             }
//
//             // client.writeQuery({
//             //   query: CalendarOperation,
//             //   data,
//             // })
//             return data
//           }
//         }) : null
//       }}
//     />
//   )
// }

export function updateCalendarCache(client: ApolloClient<any>, dates: Date[]) {
  const { calendarCache } = client.readQuery<CalendarCacheQuery>({
    query: CalendarCacheOperation
  })!

  client.writeQuery({
    query: CalendarCacheOperation,
    data: {
      calendarCache: uniqBy([
        ...calendarCache.map(dayCache => ({
            date: dayCache.date,
            dateQueried: dates.find(d => haveSame(d, dayCache.date, 'day')) ? new Date() : dayCache.dateQueried,
          }
        )),
        ...dates.map(date => ({
          dateQueried: new Date(),
          date,
        }))
      ], 'date')
    },
  })
}

export function filterDatesWithCache(client: ApolloClient<any>, dates: Date[]): Date[] {
  const { calendarCache } = client.readQuery<CalendarCacheQuery>({
    query: CalendarCacheOperation
  })!

  return dates.filter(p1 => !calendarCache.find(p2 => haveSame(p1, p2.date, 'day')))
}

export default withApollo(graphql<any, CalendarQuery, CalendarQueryVariables, CalendarProps>(CalendarOperation, {
  options: {
    fetchPolicy: 'cache-only',
  },
  props: ({ data, ownProps: { client } }) => ({
    days: data ? data.calendar || [] : [],
    getMoreDays: useCallback(dates => data!.fetchMore({
      variables: {
        dates,
      },
      updateQuery: (_previousQueryResult, { fetchMoreResult }) => {
        const previousQueryResult: CalendarQuery = client.readQuery({
          query: CalendarOperation,
        })
        if (!fetchMoreResult) return previousQueryResult

        /**
         * If days were removed
         * */
        let newCalendar: CalendarQuery_calendar[] = []
        if (previousQueryResult) {
          newCalendar = previousQueryResult.calendar.map(p => {
            if (dates.find(p1 => haveSame(p1, p.date, 'day'))) {
              const foundNewDay = fetchMoreResult.calendar.find(p2 => haveSame(p.date, p2.date, 'day'))

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

        updateCalendarCache(client, dates)
        // client.writeQuery({
        //   query: CalendarOperation,
        //   data,
        // })
        return data
      }
    }), []),
  }),
})(CalendarScreen))
