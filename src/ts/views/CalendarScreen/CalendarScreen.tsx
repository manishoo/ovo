/*
 * CalendarScreen.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useQuery } from '@apollo/react-hooks'
import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import FilledButton from '@Common/FilledButton/FilledButton'
import Footer from '@Common/Footer/Footer'
import { translate } from '@Common/LocalizedText/LocalizedText'
import { Routes } from '@Models/common'
import CalendarService from '@Services/CalendarService'
import LocationStore from '@Services/LocationStore'
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
  renderingDates: DateTime[],
  dayCursor: DateTime,
  width: number,
  height: number,
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
    const dayCursor = DateTime.local()

    this.state = {
      dayCursor,
      calendar: CalendarService.getCalendar(),
      renderingDates: this._generateRenderingDays(dayCursor),
      width: ResponsiveWidthStore.getWidthConsideringDrawer(),
      height: ResponsiveWidthStore.getHeightNoSubscription(),
    }
  }

  private _scrollView: RX.ScrollView | null = null

  protected _buildState(props: CalendarProps, initialBuild: boolean): Partial<CalendarState> | undefined {
    const calendar = CalendarService.getCalendar()

    return {
      calendar,
      renderingDates: this._generateRenderingDays(this.state.dayCursor),
      width: ResponsiveWidthStore.getWidthConsideringDrawer(),
      height: ResponsiveWidthStore.getHeight(),
    }
  }

  componentDidMount() {
    const scrollView = this._scrollView

    // go to today
    if (scrollView) {
      setTimeout(() => {
        scrollView.setScrollLeft(this._getCurrentDayPosition(), false)
      }, 0)
    }
  }

  public render() {
    return (
      <RX.ScrollView
        style={{
          flex: 1,
          width: this.state.width,
        }}
      >
        {this._renderControl()}
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
                style={{
                  width: this._getDayWidth(),
                }}
                date={date}
                day={this._getDayByDate(date, this.state.calendar)}
              />
            ))
          }
        </RX.ScrollView>
        <Footer />
      </RX.ScrollView>
    )
  }

  private _generateRenderingDays = (dayCursor: DateTime): DateTime[] => {
    const renderingDays: DateTime[] = []
    for (let i = 3; i > 0; i--) {
      renderingDays.push(dayCursor.minus({ day: i }))
    }
    renderingDays.push(dayCursor)
    for (let i = 1; i <= 3; i++) {
      renderingDays.push(dayCursor.plus({ day: i }))
    }
    return renderingDays
  }

  private _renderControl = () => {
    return (
      <RX.View
        style={styles.controlWrapper}
      >
        <RX.View
          style={{
            flexDirection: 'row'
          }}
        >
          <FilledButton
            mode={FilledButton.mode.default}
            label={translate(translate.keys.MealPlanSettings)}
            onPress={() => LocationStore.navigate(this.props, Routes.mealPlanSettings)}
            style={styles.controlButton}
          />
        </RX.View>
        <RX.View
          style={{
            flexDirection: 'row'
          }}
        >
          <FilledButton
            mode={FilledButton.mode.default}
            label={translate('<-')}
            onPress={() => this._changeDayCursor(this.state.dayCursor.minus({ day: 1 }), this._getPrevDayPosition())}
            style={[
              styles.controlButton,
              {

                [Styles.values.borderTopEndRadius]: 0,
                [Styles.values.borderBottomEndRadius]: 0,
                [Styles.values.borderEndWidth]: 0,
              }
            ]}
          />
          <FilledButton
            mode={FilledButton.mode.default}
            label={translate(translate.keys.Today)}
            onPress={() => this._changeDayCursor(DateTime.local(), this._getCurrentDayPosition())}
            style={[
              styles.controlButton,
              {
                borderRadius: 0,
              }
            ]}
          />
          <FilledButton
            mode={FilledButton.mode.default}
            label={translate('->')}
            onPress={() => this._changeDayCursor(this.state.dayCursor.plus({ day: 1 }), this._getNextDayPosition())}
            style={[
              styles.controlButton,
              {
                [Styles.values.borderTopStartRadius]: 0,
                [Styles.values.borderBottomStartRadius]: 0,
                [Styles.values.borderStartWidth]: 0,
              }
            ]}
          />
        </RX.View>
      </RX.View>
    )
  }

  private _getDayWidth = () => this.state.width
  private _getDayByDate = (date: DateTime, calendar: Day[]) => calendar.find(day => DateTime.fromISO(day.date).hasSame(date, 'day'))
  private _getPrevDayPosition = () => this._getDayWidth() * (AppConfig.isRTL() ? 4 : 2)
  private _getCurrentDayPosition = () => this._getDayWidth() * 3
  private _getNextDayPosition = () => this._getDayWidth() * (AppConfig.isRTL() ? 2 : 4)

  private _changeDayCursor = (newDayCursor: DateTime, position: number) => {
    const renderingDates = this._generateRenderingDays(newDayCursor)
    const scrollView = this._scrollView

    if (scrollView) {
      scrollView.setScrollLeft(position, true)
      setTimeout(() => {
        this.setState({
          renderingDates,
          dayCursor: newDayCursor,
        }, () => {
          scrollView.setScrollLeft(this._getCurrentDayPosition(), false)
        })
      }, 300)
    }
  }
}

export default (props: CalendarProps) => {
  const { data } = useQuery<CalendarQuery, CalendarQueryVariables>(CalendarScreen.operations.calendar, {
    fetchPolicy: 'network-only',
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
    padding: Styles.values.spacing,
  }),
  controlButton: RX.Styles.createViewStyle({
    borderRadius: 8,
  })
}
