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
import { areOnSameDay } from '@Views/CalendarScreen/utils/is-same-day'
import addDays from 'date-fns/addDays'
import subDays from 'date-fns/subDays'
import uniqBy from 'lodash/uniqBy'
import { PureComponent } from 'react'
import RX from 'reactxp'
import CalendarCarousel from './components/CalendarCarousel/CalendarCarousel'
import CalendarControl from './components/CalendarControl/CalendarControl'
import CalendarFAB from './components/CalendarFAB/CalendarFAB'
import CalendarNavButton from './components/CalendarNavButton/CalendarNavButton'
import { DayComponentDay } from './components/DayComponent/types/DayComponentDay'
import { CalendarCacheOperation, CalendarOperation } from './operations/CalendarOperation'
import { CalendarQuery, CalendarQuery_calendar, CalendarQueryVariables } from './operations/types/CalendarQuery'
import generateRenderingDays from './utils/generate-rendering-days'


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

    // this._dayCursor = DEFAULT.getDayCursor()
    this.state = {
      dayCursor: DEFAULT.getDayCursor,
      renderingDates: DEFAULT.renderingDays,
      width: ResponsiveWidthStore.getWidthConsideringMaxWidth(),
      height: ResponsiveWidthStore.getHeight() - Styles.values.spacing * 2,
      isSmallOrTinyScreenSize: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
      loadingDays: [],
    }
  }

  componentDidMount() {
    this._getMoreDays(this.state.renderingDates)
  }

  public render() {
    const { days } = this.props
    const { loadingDays } = this.state
    const currentDay = this._getDayByDate(this.state.dayCursor, days)

    return (
      <>
        <Page
          lazyRender
          style={{
            flex: 1,
          }}
          innermostViewStyle={{
            padding: 0,
          }}
          outerContainerChildren={<>
            <CalendarNavButton
              onPress={this._onPrevSlide}
              direction={'toLeft'}
              chevronStyle={{
                marginTop: this.state.height / 2,
              }}
              style={{
                [Styles.values.start]: 0,
              }}
            />
            <CalendarNavButton
              onPress={this._onNextSlide}
              direction={'toRight'}
              chevronStyle={{
                marginTop: this.state.height / 2,
              }}
              style={{
                [Styles.values.end]: 0,
              }}
            />
          </>}
        >
          <CalendarControl
            ref={(ref: any) => {
              if (!ref) return
              this._control = ref.wrappedInstance
            }}
            onDateChange={date => this._changeDayCursor(date)}
            width={this.state.width}
            style={{
              marginBottom: Styles.values.spacing,
            }}
          />
          <CalendarCarousel
            ref={ref => this._carousel = ref}
            onNextSlide={this._onNextSlide}
            onPrevSlide={this._onPrevSlide}
            slideWidth={this._dayWidth()}
            initialSlide={this._daysOnEachSide}
            getDay={date => this._getDayByDate(date, days)}
            onTitlePress={date => this._control!.changeDayCursor(date)}
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

  private _onPrevSlide = () => {
    const { dayCursor } = this.state
    this._control!.changeDayCursor(subDays(dayCursor, 1))
  }

  private _onNextSlide = () => {
    const { dayCursor } = this.state
    this._control!.changeDayCursor(addDays(dayCursor, 1))
  }

  private _dayWidth = () => this.state.width

  private _getDayByDate = (date: Date, calendar: DayComponentDay[]) => {
    // const { dayCursor } = this.state

    /**
     * If it was in two days away
     * */
    // if (Math.abs(date.diff(dayCursor, 'day').as('day')) > 1) return

    /**
     * If the date was far away, don't return the day
     * */
    return calendar.find(day => areOnSameDay(day.date, date))
  }

  private _changeDayCursor = (date: Date) => {
    const { renderingDates } = this.state
    const carousel = this._carousel!

    let position = renderingDates.findIndex(p => areOnSameDay(p, date))

    const destinationInScrollView: boolean = position >= 0

    const newRenderingDates = generateRenderingDays(date, this._daysOnEachSide)
    const newDatesToGet = newRenderingDates.filter(p => !renderingDates.find(p2 => areOnSameDay(p2, p)))

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
            dateQueried: dates.find(d => areOnSameDay(d, dayCache.date)) ? new Date() : dayCache.dateQueried,
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

  return dates.filter(p1 => !calendarCache.find(p2 => areOnSameDay(p1, p2.date)))
}

export default withApollo(graphql<any, CalendarQuery, CalendarQueryVariables, CalendarProps>(CalendarOperation, {
  options: {
    fetchPolicy: 'cache-only',
  },
  props: ({ data, ownProps: { client } }) => ({
    days: data ? data.calendar || [] : [],
    getMoreDays: dates => data!.fetchMore({
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
            if (dates.find(p1 => areOnSameDay(p1, p.date))) {
              const foundNewDay = fetchMoreResult.calendar.find(p2 => areOnSameDay(p.date, p2.date))

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
    }),
  }),
})(CalendarScreen))
