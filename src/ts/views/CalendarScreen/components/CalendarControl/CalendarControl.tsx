/*
 * CalendarControl.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ApolloQueryResult, useQuery } from '@apollo/react-hoc'
import AppConfig from '@App/AppConfig'
import client from '@App/client'
import Styles from '@App/Styles'
import FilledButton from '@Common/FilledButton/FilledButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import { PageScrollContext } from '@Common/Page'
import { Routes } from '@Models/common'
import { DataProvider, LayoutProvider, RecyclerListView } from '@Modules/RecyclerListView'
import LocationStore from '@Services/LocationStore'
import { DayComponentDay } from '@Views/CalendarScreen/components/DayComponent/types/DayComponentDay'
import { haveSame } from '@Views/CalendarScreen/utils/is-same-day'
import addDays from 'date-fns/addDays'
import subDays from 'date-fns/subDays'
import debounce from 'lodash/debounce'
import React, { forwardRef, useCallback } from 'react'
import RX from 'reactxp'
import { ANIMATION_DURATION, filterDatesWithCache, updateCalendarCache } from '../../CalendarScreen'
import generateRenderingDays from '../../utils/generate-rendering-days'
import CalendarCircle from './components/CalendarCircle/CalendarCircle'
import { CalendarControlOperation } from './operations/CalendarControlOperation'
import {
  CalendarControlQuery,
  CalendarControlQuery_calendar,
  CalendarControlQueryVariables
} from './operations/types/CalendarControlQuery'


function lerp(start: number, end: number, t: number) {
  return start * (1 - t) + end * t
}

const CIRCLE_SIZE = 90
const MAX_CONTROL_WIDTH = 875

interface CalendarControlCommonProps {
  style?: any,
  onDateChange: (date: Date) => void,
  width: number,
}

interface CalendarControlProps extends CalendarControlCommonProps {
  days: CalendarControlQuery_calendar[],
  getMoreDays: (dates: Date[]) => Promise<ApolloQueryResult<CalendarControlQuery>>,
}

interface CalendarControlState {
  dataProvider: DataProvider,
  loadingDays: Date[]
}

export class CalendarControl extends React.PureComponent<CalendarControlProps, CalendarControlState> {
  private _rlv: RecyclerListView<any, any> | null = null
  private _scrollViewWidth = 0
  private _circlesOnEachSide: number
  public static height = CIRCLE_SIZE + Styles.values.spacing
  private _viewportWidth: number
  private readonly _layoutProvider: LayoutProvider
  private readonly _dataProvider: DataProvider
  private _scrollLeft: number
  private _disableAnimation = true
  private _disableScaling = false
  private _disableScrolling = false
  private _circleWidth = CIRCLE_SIZE // + (Styles.values.spacing / 2)
  private _currentActiveDate: Date | null = null
  private _scrollOffset: number

  constructor(props: CalendarControlProps) {
    super(props)

    let numberFittingInScreen = Math.floor((props.width > MAX_CONTROL_WIDTH ? MAX_CONTROL_WIDTH : props.width) / this._circleWidth)
    if ((numberFittingInScreen % 2) !== 0) {
      // even
      numberFittingInScreen--
    }

    this._circlesOnEachSide = numberFittingInScreen * 2
    this._viewportWidth = (numberFittingInScreen + 1) * this._circleWidth

    const data = generateRenderingDays(new Date(), this._circlesOnEachSide)

    this._dataProvider = new DataProvider(
      (r1, r2) => r1.scale !== r2.scale
    )
    this._layoutProvider = new LayoutProvider(
      index => 0,
      (type, dim, index) => {
        dim.width = this._circleWidth
        dim.height = CIRCLE_SIZE
      }
    )
    this._scrollLeft = (this._circlesOnEachSide / 2) * this._circleWidth
    this._scrollOffset = (this._circlesOnEachSide / 2) * this._circleWidth

    this._setScrollLeft = debounce(this._setScrollLeft, 100)
    this.changeDayCursor = debounce(this.changeDayCursor, 200)
    this.state = {
      // dayCursor: props.dayCursor,
      loadingDays: [],
      dataProvider: this._dataProvider.cloneWithRows(data.map((date, index) => ({
        date,
        scale: this._getCalendarCircleScale(date, index, this._scrollLeft),
      })))
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: Readonly<CalendarControlProps>, nextContext: any): void {
    if (nextProps.width !== this.props.width) {
      this._setCircleNumbers(nextProps.width)
      this.setState({
        dataProvider: this._dataProvider.cloneWithRows(generateRenderingDays(new Date(), this._circlesOnEachSide).map((date, index) => ({
          date,
          scale: this._getCalendarCircleScale(date, index, this._scrollLeft),
        }))),
      })
    }
  }

  render() {
    const { style } = this.props
    const { dataProvider, loadingDays } = this.state

    return (
      <PageScrollContext.Consumer>
        {({ setScrollEnabled }) => (
          <RX.GestureView
            style={[styles.controlWrapper, style]}
            onScrollWheel={AppConfig.isTouchInterface() ? undefined : this._onScrollWheel}
          >
            <RX.ScrollView
              scrollEnabled={false}
              style={{
                height: CIRCLE_SIZE,
              }}
            >
              <RX.View
                onMouseEnter={this._onMouseEnter(setScrollEnabled)}
                onMouseLeave={this.onMouseLeave(setScrollEnabled)}
                style={{
                  alignItems: 'center',
                }}
              >
                <RecyclerListView
                  ref={ref => this._rlv = ref}
                  dataProvider={dataProvider}
                  layoutProvider={this._layoutProvider}
                  // @ts-ignore
                  rowRenderer={this._rowRenderer}
                  initialOffset={(this._circlesOnEachSide * 3 / 4) * this._circleWidth}
                  isHorizontal
                  onScroll={(rawEvent, offsetX, offsetY) => this._onScroll(offsetX)}
                  onEndReached={this._reachEndHandler}
                  onEndReachedThreshold={100}
                  renderAheadOffset={100}
                  extendedState={{
                    days: this.props.days,
                    loadingDays,
                  }}
                  style={{
                    width: this._viewportWidth,

                    // To hide the scrollbar
                    height: CIRCLE_SIZE + Styles.values.spacing,
                    paddingBottom: Styles.values.spacing,
                  }}
                  scrollViewProps={{
                    onContentSizeChanged: (width: number) => this._scrollViewWidth = width,
                  } as RX.Types.ScrollViewProps}
                />
              </RX.View>
            </RX.ScrollView>

            <FilledButton
              mode={FilledButton.mode.default}
              label={translate(translate.keys.Today)}
              onPress={() => this.changeDayCursor(new Date)}
              containerStyle={{
                position: 'absolute',
                top: 0,
                [Styles.values.start]: Styles.values.spacing,
              }}
            />
            <FilledButton
              mode={FilledButton.mode.default}
              label={translate(translate.keys.Settings)}
              onPress={() => LocationStore.navigate(this.props, Routes.mealPlanSettings)}
              containerStyle={{
                position: 'absolute',
                top: 0,
                [Styles.values.end]: Styles.values.spacing,
              }}
            />
          </RX.GestureView>
        )}
      </PageScrollContext.Consumer>
    )
  }

  private _onMouseEnter = (setScrollEnabled: (enabled: boolean) => void) => (e: RX.Types.MouseEvent) => {
    console.log('_onMouseEnter')
    setScrollEnabled(false)
  }

  private onMouseLeave = (setScrollEnabled: (enabled: boolean) => void) => (e: RX.Types.MouseEvent) => {
    console.log('onMouseLeave')
    setScrollEnabled(true)
  }

  private _onScrollWheel = (gestureState: RX.Types.ScrollWheelGestureState) => {
    this._rlv!.scrollToOffset(this._scrollLeft + (gestureState.scrollAmount), 0, false)

    this._scrollOffset = this._scrollLeft + (gestureState.scrollAmount)
  }

  componentDidMount() {
    this._getMoreDays(this.state.dataProvider.getAllData().map(d => d.date))

    // go to today
    // setImmediate(() => {
    //   this._goToCenter()
    //   setTimeout(() => {
    //     this._disableAnimation = false
    //   }, 500)
    // })
  }

  public changeDayCursor = (date: Date) => {
    const { dataProvider } = this.state
    const rlv = this._rlv!
    const allData = dataProvider.getAllData()

    const position = allData.findIndex(p => haveSame(p.date, date, 'day')) - (this._circlesOnEachSide / 4)

    const newRenderingDates = generateRenderingDays(date, this._circlesOnEachSide)
    const newDatesToGet = newRenderingDates.filter(p => allData.find(p2 => haveSame(p, p2.date, 'day')))

    if (!(this._currentActiveDate && haveSame(this._currentActiveDate, date, 'day'))) {
      this.props.onDateChange(date)
    }

    this._disableScaling = true
    this._disableScrolling = true

    /**
     * If in viewport, scroll
     * If not in viewport, change renderingDays and set scroll to center
     * */
    if (position >= 0) {
      setTimeout(() => {
        rlv.scrollToOffset(position * this._circleWidth, 0, true)
        this._disableScrolling = false
        setTimeout(() => {
          if (newDatesToGet.length > 0) {
            this._getMoreDays(newDatesToGet)
          }
        }, 1000)
      }, ANIMATION_DURATION)
    } else {
      this.setState({
        dataProvider: this._dataProvider.cloneWithRows(newRenderingDates.map((date, index) => ({
          date,
          scale: this._getCalendarCircleScale(date, index, this._scrollLeft)
        })))
      }, this._goToCenter)
      setTimeout(() => {
        this._disableScrolling = false
        if (newDatesToGet.length > 0) {
          this._getMoreDays(newDatesToGet)
        }
      }, 1000)
    }

    setTimeout(() => {
      this._disableScaling = false
    }, ANIMATION_DURATION)

    this._currentActiveDate = date
  }

  private _getMoreDays = (dates: Date[]) => {
    const { getMoreDays } = this.props

    this.setState({
      loadingDays: filterDatesWithCache(client, dates),
    }, () => {
      getMoreDays(dates)
        .then(() => {
          this.setState({
            loadingDays: [],
          })
        })
    })
  }

  private _setCircleNumbers = (screenPureWidth: number) => {
    if (screenPureWidth > MAX_CONTROL_WIDTH) {
      screenPureWidth = MAX_CONTROL_WIDTH
    }
    let numberFittingInScreen = Math.floor(screenPureWidth / this._circleWidth)
    if ((numberFittingInScreen % 2) !== 0) {
      // even
      numberFittingInScreen--
    }

    this._circlesOnEachSide = numberFittingInScreen * 2
    this._viewportWidth = (numberFittingInScreen + 1) * this._circleWidth
  }

  private _onCirclePress = (date: Date) => this.changeDayCursor(date)

  private _rowRenderer = (type: any, { date, scale }: { date: Date, scale: number }, _index: number, { days, loadingDays }: { days: DayComponentDay[], loadingDays: Date[] }) => (
    <CalendarCircle
      loading={!!loadingDays.find(d => haveSame(d, date, 'day'))}
      disableAnimation={this._disableAnimation}
      size={CIRCLE_SIZE}
      onPress={this._onCirclePress}
      scale={scale}
      date={date}
      day={this._getDayByDate(date, days)}
    />
  )

  private _getDayByDate = (date: Date, days: CalendarControlQuery_calendar[]) => {
    return days.find(day => haveSame(date, day.date, 'day'))
  }

  private _getCalendarCircleScale = (date: Date, position: number, scrollLeft: number): number => {
    const endOfViewport = scrollLeft + this._viewportWidth
    const circleStartPosition = (position * this._circleWidth)
    const circleCentralPosition = circleStartPosition + (this._circleWidth / 2)
    const circleEndPosition = circleStartPosition + this._circleWidth
    const centerOfViewport = scrollLeft + (this._viewportWidth / 2)

    let scale
    /**
     * if this circle was in viewport give it scale
     * */
    if ((scrollLeft < circleEndPosition) && (circleStartPosition < endOfViewport)) {
      /**
       * Give it a scale relative to the center of viewport
       * */
      const diff = Math.abs(centerOfViewport - circleCentralPosition)
      const max = this._viewportWidth / 2

      let r = ((100 * diff) / max) / 100

      scale = Math.abs(lerp(CalendarCircle.config.scale.inactive, CalendarCircle.config.scale.active, 1 - r))
    }

    if (!scale) scale = CalendarCircle.config.scale.inactive

    return scale
  }

  private _reachEndHandler = (/*newScrollLeft: number, offset: number*/) => {
    this.setState(prevState => {
      const allData = prevState.dataProvider.getAllData()
      const newDates = []
      const lastDay = allData[allData.length - 1]
      for (let i = 1; i <= this._circlesOnEachSide; i++) {
        newDates.push(addDays(lastDay.date, i))
      }

      this._getMoreDays(newDates)

      return {
        dataProvider: this._dataProvider.cloneWithRows([
          ...allData,
          ...newDates.map((date, index) => ({
            date,
            scale: this._getCalendarCircleScale(date, allData.length + index, this._scrollLeft)
          })),
        ]/*.sort((a, b) => a.date.diff(b.date).as('day'))*/)
      }
    })
  }

  private _reachStartHandler = (newScrollLeft: number) => {
    if (this._disableScrolling) return

    if (newScrollLeft === 0) {
      this._disableScrolling = true
      this.setState(prevState => {
        const allData = prevState.dataProvider.getAllData()
        const newDates = []
        const firstDay = allData[0]
        for (let i = this._circlesOnEachSide; i > 0; i--) {
          newDates.push(subDays(firstDay.date, i))
        }

        this._getMoreDays(newDates)

        return {
          dataProvider: this._dataProvider.cloneWithRows([
            ...newDates.map((date, index) => ({
              date,
              scale: this._getCalendarCircleScale(date, index, this._scrollLeft)
            })),
            ...allData,
          ]/*.sort((a, b) => a.date.diff(b.date).as('day'))*/)
        }
      }, () => {
        this._rlv!.scrollToOffset((this._circlesOnEachSide * this._circleWidth) + 1, 0, false)

        // }, 2000)
        setTimeout(() => {
          this._disableScrolling = false
        }, 200)
      })
    }
  }

  private _setScrollLeft = (newScrollLeft: number) => {
    this.setState(prevState => ({
      dataProvider: this._dataProvider.cloneWithRows(prevState.dataProvider.getAllData().map(({ date, scale }, index) => ({
        date,
        scale: this._getCalendarCircleScale(date, index, newScrollLeft),
      })))
    }))
  }

  private _onScroll = (newScrollLeft: number) => {
    this._scrollLeft = newScrollLeft

    if (this._disableScaling) {
      this._setScrollLeft(newScrollLeft)
    } else {
      this.setState(prevState => ({
        dataProvider: this._dataProvider.cloneWithRows(prevState.dataProvider.getAllData().map(({ date, scale }, index) => ({
          date,
          scale: this._getCalendarCircleScale(date, index, newScrollLeft),
        })))
      }))
    }

    this._reachStartHandler(newScrollLeft)
  }

  private _goToCenter = () => {
    this._rlv!.scrollToOffset((this._circlesOnEachSide * 3 / 4) * this._circleWidth, 0, false)
  }
}

export default forwardRef<CalendarControl, CalendarControlCommonProps>(function CalendarControlContainer(props: CalendarControlCommonProps, ref) {
    const { data, fetchMore } = useQuery<CalendarControlQuery, CalendarControlQueryVariables>(CalendarControlOperation, {
      fetchPolicy: 'cache-only'
    })

    return (
      <CalendarControl
        {...props}
        ref={ref}
        days={data ? data.calendar || [] : []}
        getMoreDays={useCallback(dates => fetchMore({
          updateQuery: (previousQueryResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) return previousQueryResult

            /**
             * If days were removed
             * */
            let newCalendarDays: CalendarControlQuery_calendar[] = []
            if (previousQueryResult) {
              newCalendarDays = previousQueryResult.calendar.map(p => {
                if (dates.find(p1 => haveSame(p1, p.date, 'day'))) {
                  const foundNewDay = fetchMoreResult.calendar.find(p2 => haveSame(p.date, p2.date, 'day'))
                  if (foundNewDay) {
                    return foundNewDay
                  }
                }

                return p
              })
            }

            updateCalendarCache(client, dates)
            return {
              ...previousQueryResult,
              calendar: [
                ...newCalendarDays,
                /**
                 * If days were added
                 * */
                ...fetchMoreResult.calendar.filter(p => !newCalendarDays.find(p1 => p1.id === p.id)),
                /**
                 * Sort days based on date
                 * */
              ].sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
            }
          },
          variables: {
            dates: dates.map(d => d.toISOString()),
          },
        }), [])}
      />
    )
  }
)
const styles = {
  controlWrapper: RX.Styles.createViewStyle({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Styles.values.spacing,
  }),
  controlButton: RX.Styles.createViewStyle({
    borderRadius: 8,
  }),
  circleContainer: RX.Styles.createViewStyle({
    paddingTop: Styles.values.spacing / 4,
    flexDirection: 'row',
  }),
}
