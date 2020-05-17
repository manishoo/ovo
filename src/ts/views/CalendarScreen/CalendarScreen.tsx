/*
 * CalendarScreen.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ApolloClient, ApolloQueryResult } from '@apollo/react-hoc'
import client from '@App/client'
import Styles from '@App/Styles'
import Assistant from '@Common/Assistant/Assistant'
import { FoodPreviewMealItem } from '@Common/FoodPickerDialog/components/types/FoodPreviewMealItem'
import Link from '@Common/Link/Link'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Page from '@Common/Page'
import { Routes } from '@Models/common'
import { MeContext, useMe } from '@Models/graphql/me/me'
import CalendarService from '@Services/CalendarService'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import { getParam } from '@Utils'
import PlanEdit from '@Views/CalendarScreen/components/PlanEdit/PlanEdit'
import { CalendarCacheQuery } from '@Views/CalendarScreen/operations/types/CalendarCacheQuery'
import { haveSame } from '@Views/CalendarScreen/utils/is-same-day'
import addDays from 'date-fns/addDays'
import subDays from 'date-fns/subDays'
import uniqBy from 'lodash/uniqBy'
import { createContext, useCallback, useContext } from 'react'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import CalendarCarousel from './components/CalendarCarousel/CalendarCarousel'
import CalendarControl from './components/CalendarControl/CalendarControl'
import CalendarFAB from './components/CalendarFAB/CalendarFAB'
import CalendarNavButton from './components/CalendarNavButton/CalendarNavButton'
import CalendarOverview from './components/CalendarOverview/CalendarOverview'
import { DayComponentDay } from './components/DayComponent/types/DayComponentDay'
import { CalendarCacheOperation, useCalendar } from './operations/CalendarOperation'
import { CalendarQuery, CalendarQuery_calendar } from './operations/types/CalendarQuery'
import generateRenderingDays from './utils/generate-rendering-days'


const CALENDAR_FOOTER_HEIGHT = 100

const styles = {
  calendarControlStyle: RX.Styles.createViewStyle({
    // marginBottom: Styles.values.spacing,
  }),
  prevNavButton: RX.Styles.createViewStyle({
    [Styles.values.start]: -4,
  }),
  nextNavButton: RX.Styles.createViewStyle({
    [Styles.values.end]: -4,
  }),
  pageInner: RX.Styles.createViewStyle({
    padding: 0,
    paddingBottom: CALENDAR_FOOTER_HEIGHT,
  }),
  flex: RX.Styles.createViewStyle({
    flex: 1,
  }),
  footerContainer: RX.Styles.createViewStyle({
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0, // TODO tabBar
    height: CALENDAR_FOOTER_HEIGHT,

    // @ts-ignore web
    margin: 'auto',
  })
}

interface CalendarProps {
  style?: any,
  days: DayComponentDay[],
  getMoreDays: (dates: Date[]) => Promise<ApolloQueryResult<CalendarQuery>>,

  location: any, // FIXME in mobile

  planId?: string,
}

interface CalendarState {
  renderingDates: Date[],
  dayCursor: Date,
  width: number,
  height: number,
  isSmallOrTinyScreenSize: boolean,
  loadingDays: Date[],
  scrollTop: number,
  draggingMealItem?: FoodPreviewMealItem
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

const CalendarContext = createContext<{ planId: string, defaultPlan: boolean } | undefined>(undefined)

export function useCalendarContext() {
  return useContext(CalendarContext)!
}

class CalendarScreen extends ComponentBase<CalendarProps, CalendarState> {
  private _carousel: any = null
  private _overview: null | any = null
  private _daysOnEachSide = DEFAULT.daysOnEachSide

  constructor(props: CalendarProps) {
    super(props)

    RX.StatusBar.setTranslucent(true)

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

  private _assistantRef: Assistant | null = null

  componentDidMount() {
    this._getMoreDays(this.state.renderingDates)

    /**
     * If the user haven't finished setup or the assistant has something
     * to say
     * */
    if (this._assistantRef) {
      this._assistantRef.say(translate(translate.keys.finishSetup))
    }
  }

  public render() {
    const { days, planId } = this.props
    const { loadingDays } = this.state
    const currentDay = this._getDayByDate(this.state.dayCursor, days)

    return (
      <MeContext.Consumer>
        {({ me }) => (
          <CalendarContext.Provider
            value={{
              planId: planId || (me ? me.plan : null),
              defaultPlan: !planId,
            }}
          >
            <Page
              setScrollContext
              style={styles.flex}
              innermostViewStyle={styles.pageInner}
              outerContainerChildren={this._renderControls()}
            >
              {
                planId &&
                <PlanEdit />
              }

              {
                planId
                  ? <CalendarControl
                    ref={(ref: any) => this._overview = ref}
                    onDayPress={this._changeDayCursor}
                    days={days}
                    // width={this.state.width}
                    style={styles.calendarControlStyle}
                    // planId={planId}
                  />
                  : <CalendarOverview
                    ref={(ref: any) => this._overview = ref}
                    onDateChange={this._changeDayCursor}
                    width={this.state.width}
                    style={styles.calendarControlStyle}
                    planId={planId}
                  />
              }
              <CalendarCarousel
                ref={ref => this._carousel = ref}
                onNextSlide={this._onNextSlide}
                onSlideChange={this._onSlideChange}
                onPrevSlide={this._onPrevSlide}
                initialSlide={this._daysOnEachSide}
                days={this.props.days}
                onTitlePress={this._onTitlePress}
                height={this.state.height}
                width={this.state.width}
                isTinyOrSmall={this.state.isSmallOrTinyScreenSize}
                loadingDays={loadingDays}
                renderingDates={planId ? this.props.days.map(d => new Date(d.date)) : this.state.renderingDates}
                draggingMealItem={this.state.draggingMealItem}
                fixedDays={!!planId}
              />
            </Page>

            <RX.View
              ignorePointerEvents
              // @ts-ignore web
              style={[
                styles.footerContainer,
                { width: this.state.width }
              ]}
            >
              <MeContext.Consumer>
                {({ me }) => (
                  me && !me.achievements.finishedSetup &&
                  <Link
                    to={{
                      pathname: Routes.setupProcess,
                      state: { background: { ...this.props.location, state: { isInBackground: true } } }
                    }}
                    style={{
                      position: 'absolute',
                      bottom: Styles.values.spacing,
                      [Styles.values.start]: Styles.values.spacingLarge,
                    }}
                  >
                    <Assistant
                      ref={ref => this._assistantRef = ref}
                      size={70}
                      playful
                    />
                  </Link>
                )}
              </MeContext.Consumer>


              {
                currentDay &&
                <CalendarFAB
                  day={currentDay}
                  style={{
                    position: 'absolute',
                    bottom: Styles.values.spacing,
                    [Styles.values.end]: Styles.values.spacingLarge,
                  }}
                />
              }
            </RX.View>
          </CalendarContext.Provider>
        )}
      </MeContext.Consumer>
    )
  }

  protected _buildState(props: CalendarProps, initialBuild: boolean): Partial<CalendarState> | undefined {
    return {
      width: ResponsiveWidthStore.getWidthConsideringMaxWidth(),
      height: ResponsiveWidthStore.getHeight() - Styles.values.spacing * 2,
      isSmallOrTinyScreenSize: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
      draggingMealItem: CalendarService.getDraggingMealItem()
    }
  }

  private _renderControls = () => {
    const _calendarNavButtonChevronStyle = RX.Styles.createViewStyle({
      marginTop: this.state.height / 2,
    }, false)

    return (
      <>
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
      </>
    )
  }

  private _onSlideChange = (slide: number) => {
    const { renderingDates } = this.state

    this.setState({
      dayCursor: renderingDates[slide]
    })
    // this._dayCursor = renderingDates[slide]
    // this._overview!.changeDayCursor(renderingDates[slide])
  }

  private _onTitlePress = (date?: Date) => date && this._overview!.changeDayCursor(date)

  private _onPrevSlide = () => {
    const { dayCursor } = this.state
    this._overview!.changeDayCursor(subDays(dayCursor, 1))
  }

  private _onNextSlide = () => {
    const { dayCursor } = this.state
    this._overview!.changeDayCursor(addDays(dayCursor, 1))
  }

  private _getDayByDate = (date: Date, calendar: DayComponentDay[]) => calendar.find(day => haveSame(day.date, date, 'day'))

  private _changeDayCursor = (id?: string, date?: Date) => {
    const { renderingDates } = this.state
    const carousel = this._carousel!

    if (id) {
      if (id === 'new') {
        carousel.goTo(this.props.days.length)
      } else {
        carousel.goTo(this.props.days.findIndex(d => d.id === id))
      }
      return
    }

    if (!date) throw new Error('Something is wrong')

    let position = renderingDates.findIndex(p => haveSame(p, date, 'day'))

    const destinationInScrollView: boolean = position >= 0

    // this.setState({
    //   dayCursor: date,
    //   loadingDays: filterDatesWithCache(client, newDatesToGet),
    // }, () => {
    //   if (destinationInScrollView) {
    //     carousel.goTo(position)
    //   } else {
    //     carousel.goTo(this._daysOnEachSide, false)
    //   }
    //
    //   if (newDatesToGet.length > 0) {
    //     this.setState({
    //       renderingDates: destinationInScrollView ? this.state.renderingDates : newRenderingDates,
    //     })
    //     this.props.getMoreDays(newDatesToGet)
    //       .then(() => {
    //         this.setState({
    //           loadingDays: [],
    //         })
    //       })
    //   } else {
    //     this.setState({
    //       loadingDays: [],
    //       renderingDates: destinationInScrollView ? this.state.renderingDates : newRenderingDates,
    //     })
    //   }
    // })

    if (destinationInScrollView) {
      carousel.goTo(position)
    } else {
      const newRenderingDates = generateRenderingDays(date, this._daysOnEachSide)
      const newDatesToGet = newRenderingDates.filter(p => !renderingDates.find(p2 => haveSame(p2, p, 'day')))

      if (newDatesToGet.length > 0) {
        setTimeout(() => this.props.getMoreDays(newDatesToGet), 1000)
      }

      if (!destinationInScrollView) {
        this.setState({
          renderingDates: newRenderingDates,
        })
        carousel.goTo(this._daysOnEachSide, false)
      }
    }

    // this.setState({
    //   dayCursor: date,
    //   loadingDays: filterDatesWithCache(client, newDatesToGet),
    // }, () => {
    //   if (destinationInScrollView) {
    //     carousel.goTo(position)
    //   } else {
    //     carousel.goTo(this._daysOnEachSide, false)
    //   }
    //
    //   if (newDatesToGet.length > 0) {
    //     this.setState({
    //       renderingDates: destinationInScrollView ? this.state.renderingDates : newRenderingDates,
    //     })
    //     this.props.getMoreDays(newDatesToGet)
    //       .then(() => {
    //         this.setState({
    //           loadingDays: [],
    //         })
    //       })
    //   } else {
    //     this.setState({
    //       loadingDays: [],
    //       renderingDates: destinationInScrollView ? this.state.renderingDates : newRenderingDates,
    //     })
    //   }
    // })

    // if (destinationInScrollView) {
    //   carousel.goTo(position)
    // } else {
    //   this.setState({
    //     renderingDates: newRenderingDates,
    //   }, () => carousel.goTo(this._daysOnEachSide, false))
    // }
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

export function updateCalendarCache(client: ApolloClient<any>, dates: Date[]) {
  const { calendarCache } = client.readQuery<CalendarCacheQuery>({
    query: CalendarCacheOperation
  })!

  client.writeQuery({
    query: CalendarCacheOperation,
    data: {
      calendarCache: uniqBy([
        ...calendarCache.map(dayCache => ({
            date: new Date(dayCache.date),
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

export default function CalendarScreenContainer(props: CalendarProps) {
  const me = useMe()!
  const planId = getParam(props, 'id')

  const { data, fetchMore } = useCalendar(planId || me.plan, [])

  const calendarScreenProps: CalendarProps = {
    ...props,
    days: data ? data.calendar || [] : [],
    planId,
    getMoreDays: useCallback(dates => fetchMore({
      variables: {
        dates,
        planId: planId || me.plan,
      },
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousQueryResult

        // const previousQueryResult: CalendarQuery | null = client.readQuery({
        //   query: CalendarOperation,
        // })

        /**
         * If days were removed
         * */
        let newCalendar: CalendarQuery_calendar[] = []
        if (previousQueryResult) {
          newCalendar = previousQueryResult.calendar.map(p => {
            if (dates.find(p1 => haveSame(p1, p.date, 'day'))) {
              const foundNewDay = fetchMoreResult!.calendar.find(p2 => haveSame(p.date, p2.date, 'day'))

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
        return data
      }
    }), [me.plan, planId]),
  }

  return (
    <CalendarScreen
      {...calendarScreenProps}
    />
  )
}
