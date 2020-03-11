/*
 * CalendarControl.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, graphql } from '@apollo/react-hoc'
import Styles from '@App/Styles'
import FilledButton from '@Common/FilledButton/FilledButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import { Routes } from '@Models/common'
import { DataProvider, LayoutProvider, RecyclerListView } from '@Modules/RecyclerListView'
import LocationStore from '@Services/LocationStore'
import debounce from 'lodash/debounce'
import { DateTime } from 'luxon'
import React from 'react'
import RX from 'reactxp'
import { ANIMATION_DURATION } from '../CalendarScreen'
import generateRenderingDays from '../utils/generate-rendering-days'
import CalendarCircle from './CalendarCircle'
import {
  CalendarControlQuery,
  CalendarControlQuery_calendar,
  CalendarControlQueryVariables
} from './types/CalendarControlQuery'


function lerp(start: number, end: number, t: number) {
  return start * (1 - t) + end * t
}

const CIRCLE_SIZE = 90
const MAX_CONTROL_WIDTH = 4000

interface CalendarControlCommonProps {
  style?: any,
  onDateChange: (date: DateTime) => void,
  width: number,
}

interface CalendarControlProps extends CalendarControlCommonProps {
  days: CalendarControlQuery_calendar[],
  getMoreDays: (dates: DateTime[]) => void,
}

interface CalendarControlState {
  dataProvider: DataProvider,
}

class CalendarControl extends React.PureComponent<CalendarControlProps, CalendarControlState> {
  private _rlv: RecyclerListView<any, any> | null = null
  private _scrollViewWidth = 0
  private _circlesOnEachSide: number
  private _circleWidth = CIRCLE_SIZE + (Styles.values.spacing / 2)
  private _viewportWidth: number
  private readonly _layoutProvider: LayoutProvider
  private readonly _dataProvider: DataProvider
  private _scrollLeft: number
  private _disableAnimation = true
  private _disableScaling = false
  private _disableScrolling = false

  constructor(props: CalendarControlProps) {
    super(props)

    if (props.width > MAX_CONTROL_WIDTH) {
      props.width = MAX_CONTROL_WIDTH
    }
    let numberFittingInScreen = Math.floor(props.width / this._circleWidth)
    if ((numberFittingInScreen % 2) !== 0) {
      // even
      numberFittingInScreen--
    }

    this._circlesOnEachSide = numberFittingInScreen * 2
    this._viewportWidth = (numberFittingInScreen + 1) * this._circleWidth

    const now = DateTime.local()
    const data = generateRenderingDays(now, this._circlesOnEachSide)

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

    this._setScrollLeft = debounce(this._setScrollLeft, 100)
    this.state = {
      // dayCursor: props.dayCursor,
      dataProvider: this._dataProvider.cloneWithRows(data.map((date, index) => ({
        date,
        scale: this._getCalendarCircleScale(date, index, this._scrollLeft),
      })))
    }
  }

  public componentWillReceiveProps(nextProps: Readonly<CalendarControlProps>, nextContext: any): void {
    if (nextProps.width !== this.props.width) {
      this._setCircleNumbers(nextProps.width)
      this.setState({
        dataProvider: this._dataProvider.cloneWithRows(generateRenderingDays(DateTime.local(), this._circlesOnEachSide)),
      })
    }
  }

  render() {
    const { style } = this.props
    const { dataProvider } = this.state

    return (
      <RX.View
        style={[styles.controlWrapper, style]}
      >
        <RX.ScrollView
          scrollEnabled={false}
          style={{
            height: CIRCLE_SIZE,
          }}
        >
          <RX.View
            style={{
              alignItems: 'center'
            }}
          >
            <RecyclerListView
              ref={ref => this._rlv = ref}
              dataProvider={dataProvider}
              layoutProvider={this._layoutProvider}
              rowRenderer={this._rowRenderer}
              isHorizontal
              onScroll={(rawEvent, offsetX, offsetY) => this._onScroll(offsetX)}
              onEndReached={this._reachEndHandler}
              onEndReachedThreshold={100}
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
          onPress={() => this.changeDayCursor(DateTime.local())}
          containerStyle={{
            position: 'absolute',
            top: 0,
            [Styles.values.start]: 0,
          }}
        />
        <FilledButton
          mode={FilledButton.mode.default}
          label={translate(translate.keys.Settings)}
          onPress={() => LocationStore.navigate(this.props, Routes.mealPlanSettings)}
          containerStyle={{
            position: 'absolute',
            top: 0,
            [Styles.values.end]: 0,
          }}
        />
      </RX.View>
    )
  }

  componentDidMount() {
    this.props.getMoreDays(this.state.dataProvider.getAllData().map(d => d.date))

    // go to today
    setImmediate(() => {
      this._goToCenter()
      setTimeout(() => {
        this._disableAnimation = false
      }, 500)
    })
  }

  public changeDayCursor = (date: DateTime) => {
    const { dataProvider } = this.state
    const { getMoreDays } = this.props
    const rlv = this._rlv!
    const allData = dataProvider.getAllData()

    const position = allData.findIndex(p => p.date.hasSame(date, 'day')) - (this._circlesOnEachSide / 4)

    const newRenderingDates = generateRenderingDays(date, this._circlesOnEachSide)
    const newDatesToGet = newRenderingDates.filter(p => !allData.find(p2 => p.hasSame(p2.date, 'day')))
    if (newDatesToGet.length > 0) {
      getMoreDays(newDatesToGet)
    }

    this.props.onDateChange(date)

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
      }, 500)
    }

    setTimeout(() => {
      this._disableScaling = false
    }, 500)
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

  private _rowRenderer = (type: any, { date, scale }: { date: DateTime, scale: number }) => {
    return (
      <CalendarCircle
        disableAnimation={this._disableAnimation}
        size={CIRCLE_SIZE}
        onPress={() => this.changeDayCursor(date)}
        scale={scale}
        date={date}
        day={this._getDayByDate(date, this.props.days)}
      />
    )
  }

  private _getDayByDate = (date: DateTime, calendar: CalendarControlQuery_calendar[]) => {
    return calendar.find(day => DateTime.fromISO(day.date).hasSame(date, 'day'))
  }

  private _getCalendarCircleScale = (date: DateTime, position: number, scrollLeft: number): number => {
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
        newDates.push(lastDay.date.plus({ day: i }))
      }

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
          newDates.push(firstDay.date.minus({ day: i }))
        }
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
      dataProvider: this._dataProvider.cloneWithRows([
        ...prevState.dataProvider.getAllData().map(({ date, scale }, index) => ({
          date,
          scale: this._getCalendarCircleScale(date, index, newScrollLeft),
        }))
      ])
    }))
  }

  private _onScroll = (newScrollLeft: number) => {
    this._scrollLeft = newScrollLeft

    if (this._disableScaling) {
      this._setScrollLeft(newScrollLeft)
    } else {
      this.setState(prevState => ({
        dataProvider: this._dataProvider.cloneWithRows([
          ...prevState.dataProvider.getAllData().map(({ date, scale }, index) => ({
            date,
            scale: this._getCalendarCircleScale(date, index, newScrollLeft),
          }))
        ])
      }))
    }

    this._reachStartHandler(newScrollLeft)
  }

  private _goToCenter = () => {
    this._rlv!.scrollToOffset((this._circlesOnEachSide * 3 / 4) * this._circleWidth, 0, false)
  }
}

export default graphql<CalendarControlCommonProps, CalendarControlQuery, CalendarControlQueryVariables, CalendarControlProps>(gql`
  query CalendarControlQuery($dates: [DateTime!]!) {
    calendar(dates: $dates) @connection(key: "overview") {
      ...CalendarCircleDay
    }
  }

  ${CalendarCircle.fragments.day}
`, {
  withRef: true,
  options: {
    fetchPolicy: 'cache-only',
  },
  props: ({ data, ownProps }) => ({
    ...ownProps,
    days: data ? data.calendar || [] : [],
    getMoreDays: dates => data ? data.fetchMore({
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousQueryResult

        /**
         * If days were removed
         * */
        let newCalendar: CalendarControlQuery_calendar[] = []
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
    }) : null
  }),
})(CalendarControl)

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
