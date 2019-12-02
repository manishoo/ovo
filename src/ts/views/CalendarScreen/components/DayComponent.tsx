/*
 * Day.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useMutation } from '@apollo/react-hooks'
import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import HoverView from '@Common/HoverView/HoverButton'
import Text from '@Common/Text/Text'
import CalendarService from '@Services/CalendarService'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import DayEmpty from '@Views/CalendarScreen/components/DayEmpty'
import ItemControl from '@Views/CalendarScreen/components/ItemControl'
import { Day } from '@Views/CalendarScreen/components/types/Day'
import gql from 'graphql-tag'
import { DateTime } from 'luxon'
import { ExecutionResult } from 'react-apollo'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import MealComponent from './MealComponent'
import {
  DayComponentMealSuggestionMutation,
  DayComponentMealSuggestionMutationVariables
} from './types/DayComponentMealSuggestionMutation'


const MEAL_MAX_WIDTH = 350

interface DayComponentProps {
  style?: any,
  day?: Day,
  date: DateTime,
  dayRegenerating?: boolean,
  isPrevDayFilled?: boolean,
  isNextDayFilled?: boolean,

  onDayRegenerate: () => Promise<ExecutionResult<DayComponentMealSuggestionMutation>>,
}

interface DayComponentState {
  width: number
  height: number
  isTinyOrSmall: boolean,
  // day: Day,
}

class DayComponent extends ComponentBase<DayComponentProps, DayComponentState> {
  static fragments = {
    day: gql`
      fragment Day on Day {
        id
        date
        meals {
          ...DayMeal
        }
      }

      ${MealComponent.fragments.dayMeal}
    `,
  }
  static operations = {
    suggestDay: gql`
      mutation DayComponentMealSuggestionMutation($date: DateTime!) {
        suggestDay(date: $date) {
          ...Day
        }
      }

      ${DayComponent.fragments.day}
    `
  }

  constructor(props) {
    super(props)
    this.state = {
      // day: props.day,
      width: ResponsiveWidthStore.getWidthConsideringDrawer(),
      height: ResponsiveWidthStore.getHeight(),
      isTinyOrSmall: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
    }
  }

  protected _buildState(props: DayComponentProps, initialBuild: boolean): Partial<DayComponentState> | undefined {
    return {
      width: ResponsiveWidthStore.getWidthConsideringDrawer(),
      height: ResponsiveWidthStore.getHeight(),
      isTinyOrSmall: ResponsiveWidthStore.isSmallOrTinyScreenSize(),
    }
  }

  render() {
    const { style, day } = this.props

    return (
      <RX.View
        style={style}
      >
        <RX.ScrollView>
          <RX.View
            style={{
              alignItems: 'center',
            }}
          >
            {this._renderDayTitle()}

            {
              !day &&
              <RX.View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: Styles.values.spacing,
                }}
              >
                <DayEmpty
                  {...this.props}
                  onDayRegenerate={this._onDayRegenerate}
                />
              </RX.View>
            }

            {
              day &&
              <RX.View
                style={[
                  styles.container,
                  {
                    minHeight: this.state.height,
                    minWidth: this.state.width,
                  }
                ]}
                // animateChildEnter
                // animateChildLeave
                // onLayout={e => {
                //   if (day.height !== e.height) {
                //     CalendarService.setDay({
                //       ...day,
                //       template: null,
                //       height: e.height + 80,
                //     })
                //   }
                // }}
              >
                {
                  day.meals.map(meal => (
                    <MealComponent
                      key={meal.id}
                      meal={meal}
                      dayId={day.id}
                      style={[
                        {
                          margin: Styles.values.spacing,
                        },
                        this.state.isTinyOrSmall ?
                          {
                            alignSelf: 'stretch',
                          } :
                          {
                            alignSelf: 'center',
                            width: MEAL_MAX_WIDTH,
                          }
                      ]}
                    />
                  ))
                }
              </RX.View>
            }
          </RX.View>
        </RX.ScrollView>
      </RX.View>
    )
  }

  private _isToday = () => this.props.date.hasSame(DateTime.local(), 'day')

  private _renderDayTitle = () => {
    const { dayRegenerating, date } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <HoverView
            onRenderChild={isHovering => (
              <RX.View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: Styles.values.spacing,
                  width: MEAL_MAX_WIDTH,
                }}
              >
                <Text
                  style={[
                    styles.dayName,
                    {
                      color: this._isToday() ? theme.colors.primary : theme.colors.calendarDayName,
                    }
                  ]}
                >{date.toLocaleString({
                  day: date.diff(DateTime.local()).as('days') > 7 ? '2-digit' : undefined,
                  month: date.diff(DateTime.local()).as('days') > 7 ? 'short' : undefined,
                  weekday: 'long',
                  locale: AppConfig.locale
                })}</Text>

                <ItemControl
                  visible={isHovering || dayRegenerating}
                  onRegenerate={this._onDayRegenerate}
                  regenerating={dayRegenerating}
                />
              </RX.View>
            )}
          />
        )}
      </ThemeContext.Consumer>
    )
  }

  private _onDayRegenerate = () => {
    if (this.props.dayRegenerating) return

    this.props.onDayRegenerate()
  }
}

function DayComponentContainer(props: Omit<DayComponentProps, 'onDayRegenerate' | 'dayRegenerating'>) {
  const [suggestDay, { loading }] = useMutation<DayComponentMealSuggestionMutation, DayComponentMealSuggestionMutationVariables>(DayComponent.operations.suggestDay, {
    update: (proxy, { data: { suggestDay } }) => CalendarService.setDay(suggestDay),
  })

  return (
    <DayComponent
      {...props}
      dayRegenerating={loading}
      onDayRegenerate={() =>
        suggestDay({
          variables: {
            date: props.date.toJSDate(),
          }
        })
      }
    />
  )
}

DayComponentContainer.fragments = DayComponent.fragments
DayComponentContainer.operations = DayComponent.operations

export default DayComponentContainer

const styles = {
  container: RX.Styles.createViewStyle({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  circle: RX.Styles.createViewStyle({
    paddingTop: 60,
    alignItems: 'center',
  }),
  dayName: RX.Styles.createTextInputStyle({
    fontSize: 25,
    fontWeight: 'bold',
  })
}
