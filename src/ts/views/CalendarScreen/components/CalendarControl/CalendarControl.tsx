/*
 * CalendarOverview.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import AddCell from '@Common/AddCell/AddCell'
import { PageScrollContext } from '@Common/Page'
import { getDayColorByDay } from '@Utils'
import CalendarCircle from '@Views/CalendarScreen/components/CalendarCircle/CalendarCircle'
import { CalendarQuery_calendar } from '@Views/CalendarScreen/operations/types/CalendarQuery'
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react'
import RX from 'reactxp'


const CIRCLE_SIZE = 90

const _styles = {
  add: RX.Styles.createViewStyle({
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,

    borderWidth: 2,
    borderStyle: 'dashed',
  }),
  controlWrapper: RX.Styles.createViewStyle({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Styles.values.spacing,
  }),
}

interface CalendarOverviewProps {
  style?: any,
  days: CalendarQuery_calendar[],
  onDayPress: (id?: string, date?: Date) => void,
}

const CalendarControl = ({ style, days, onDayPress }: CalendarOverviewProps, ref: any) => {
  const [activeId, setActiveId] = useState<string>()

  useImperativeHandle(ref, () => ({
    changeDayCursor: (date: Date) => {
      //
    },
  }))

  const _scrollViewRef = useRef<RX.ScrollView | null>(null)
  const _scrollLeft = useRef(0)

  const _onScrollWheel = useCallback((gestureState: RX.Types.ScrollWheelGestureState) => {
    _scrollViewRef.current!.setScrollLeft(_scrollLeft.current + gestureState.scrollAmount, false)

    // this._scrollOffset = this._scrollLeft + (gestureState.scrollAmount)
  }, [])

  const __onMouseEnter = useCallback((setScrollEnabled: (enabled: boolean) => void) => (e: RX.Types.MouseEvent) => {
    setScrollEnabled(false)
  }, [])

  const _onMouseLeave = useCallback((setScrollEnabled: (enabled: boolean) => void) => (e: RX.Types.MouseEvent) => {
    setScrollEnabled(true)
  }, [])

  const _onScroll = useCallback((newScrollTop: number, newScrollLeft: number) => {
    _scrollLeft.current = newScrollLeft
  }, [])

  const _addWrapperStyle = useMemo(() => RX.Styles.createViewStyle({
    marginHorizontal: 0,
    transform: [{ scale: 0.7 }]
  }, false), [])

  const _addInnerContainerStyle = useMemo(() => RX.Styles.createViewStyle({
    marginBottom: 0,
    borderRadius: CIRCLE_SIZE,
  }, false), [])

  return (
    <PageScrollContext.Consumer>
      {({ setScrollEnabled }) => (
        <RX.GestureView
          style={[
            _styles.controlWrapper,
            style,
          ]}
          onScrollWheel={AppConfig.isTouchInterface() ? undefined : _onScrollWheel}
        >
          <RX.ScrollView
            scrollEnabled={false}
            style={{
              height: CIRCLE_SIZE,
            }}
          >
            <RX.View
              onMouseEnter={__onMouseEnter(setScrollEnabled)}
              onMouseLeave={_onMouseLeave(setScrollEnabled)}
              style={{
                alignItems: 'center',
              }}
            >
              <RX.ScrollView
                ref={ref => _scrollViewRef.current = ref}
                horizontal
                onScroll={_onScroll}
                style={{
                  // @ts-ignore web
                  display: 'flex',

                  // width: this._viewportWidth,

                  // To hide the scrollbar
                  height: CIRCLE_SIZE + Styles.values.spacing,
                  paddingBottom: Styles.values.spacing,
                }}
              >
                {
                  days.map((day, index) => (
                    <CalendarCircle
                      // loading={!!loadingDays.find(d => haveSame(d, date, 'day'))}
                      active={activeId === day.id}
                      dayNumber={index + 1}
                      disableAnimation={true}
                      size={CIRCLE_SIZE}
                      onPress={() => {
                        onDayPress(day.id)
                        setActiveId(day.id)
                      }}
                      scale={1}
                      date={day.date ? new Date(day.date) : undefined}
                      day={day}
                    />
                  ))
                }

                <AddCell
                  size={CIRCLE_SIZE}
                  wrapperStyle={_addWrapperStyle}
                  innerContainerStyle={_addInnerContainerStyle}
                  color={getDayColorByDay((days.length + 1) % 7)}
                  onPress={() => {
                    onDayPress('new')
                    setActiveId('new')
                  }}
                />
                {/*<RX.View
                  style={_addStyle}

                />*/}
              </RX.ScrollView>
            </RX.View>
          </RX.ScrollView>
        </RX.GestureView>
      )}
    </PageScrollContext.Consumer>
  )
}

export default forwardRef(CalendarControl)
