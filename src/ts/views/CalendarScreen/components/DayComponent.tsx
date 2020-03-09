/*
 * Day.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useMutation } from '@apollo/react-hooks'
import Styles from '@App/Styles'
import { translate } from '@Common/LocalizedText/LocalizedText'
import MenuItem from '@Common/MenuItem/MenuItem'
import Text from '@Common/Text/Text'
import CalendarService from '@Services/CalendarService'
import { Me } from '@Services/types/Me'
import { getDayColor } from '@Utils'
import { calculateDayNutrition } from '@Utils/shared/calculate-meal-nutrition'
import DayEmpty from '@Views/CalendarScreen/components/DayEmpty'
import DayPayWall from '@Views/CalendarScreen/components/DayPayWall'
import ItemControl from '@Views/CalendarScreen/components/ItemControl'
import MacroTargets from '@Views/CalendarScreen/components/NutritionInfo/MacroTargets'
import NutritionInfo from '@Views/CalendarScreen/components/NutritionInfo/NutritionInfo'
import { Day } from '@Views/CalendarScreen/components/types/Day'
import gql from 'graphql-tag'
import { DateTime } from 'luxon'
import { ExecutionResult } from 'react-apollo'
import RX from 'reactxp'
import MealComponent from './MealComponent'
import {
  DayComponentMealSuggestionMutation,
  DayComponentMealSuggestionMutationVariables
} from './types/DayComponentMealSuggestionMutation'


const MEAL_WIDTH = 350

export interface DayComponentProps {
  style?: any,
  day?: Day,
  date: DateTime,
  dayRegenerating?: boolean,

  onDayRegenerate: () => Promise<ExecutionResult<DayComponentMealSuggestionMutation>>,
  onTitlePress: (date: DateTime) => void,

  width: number
  height: number
  isTinyOrSmall: boolean,
  me?: Me,
}

//public shouldComponentUpdate(nextProps: Readonly<DayComponentProps>, nextState: Readonly<{}>, nextContext: any): boolean {
//     return (nextProps.dayRegenerating !== this.props.dayRegenerating)
//   }

interface DayTitleProps {
  date: DateTime,
  dayRegenerating?: boolean,
  onRegenerate: () => void,
  color: string,
  style?: any,
  itemControlVisible?: boolean,
  onTitlePress: () => void,
  children?: any,
}

const DayTitle = ({ dayRegenerating, date, color, onRegenerate, style, itemControlVisible, onTitlePress, children }: DayTitleProps) => {
  const today = DateTime.local()
  const isOnSameWeek = today.hasSame(date, 'week')
  const isToday = date.hasSame(today, 'day')
  const isTomorrow = Math.round(date.diffNow('day').as('day')) === 1
  const isYesterday = Math.round(date.diffNow('day').as('day')) === -1

  let text = date.toLocaleString({
    day: isOnSameWeek ? undefined : '2-digit',
    month: isOnSameWeek ? undefined : 'short',
    weekday: 'long',
  })

  if (isToday) {
    text = translate(translate.keys.Today)
  }
  if (isTomorrow) {
    text = translate(translate.keys.Tomorrow)
  }
  if (isYesterday) {
    text = translate(translate.keys.Yesterday)
  }

  return (
    <RX.View
      style={[
        styles.titleContainer,
        style
      ]}
    >
      <Text
        onPress={onTitlePress}
        style={[
          styles.dayDate,
          { color }
        ]}
      >{text}</Text>

      {
        itemControlVisible &&
        <ItemControl
          visible={itemControlVisible}
          onRegenerate={onRegenerate}
          regenerating={dayRegenerating}
        >
          {children}
        </ItemControl>
      }
    </RX.View>
  )
}

const DayComponent = (props: DayComponentProps) => {
  const {
    style,
    day,
    height,
    width,
    date,
    isTinyOrSmall,
    // me,
    dayRegenerating,
    onDayRegenerate,
    onTitlePress,
  } = props

  const mealWidth = width > MEAL_WIDTH ? MEAL_WIDTH : width
  // const isToday = date.hasSame(DateTime.local(), 'day')
  const _isFreeUser = false // && (Math.round(date.diff(DateTime.local()).as('day')) > 0) && (me && !me!.membership)

  const _onClearDay = () => {

  }

  return (
    <RX.View
      style={[
        style,
        {
          alignItems: 'center',
        }
      ]}
    >
      {
        !day &&
        <RX.View
          style={{
            flex: 1,
            alignItems: 'center',
            // justifyContent: 'center',
            marginTop: Styles.values.spacing,
            minHeight: height,
            minWidth: width - Styles.values.spacing * 2,
          }}
        >
          {
            // is it in the future?
            _isFreeUser ?
              <DayPayWall /> :
              [
                <DayTitle
                  date={date}
                  onRegenerate={onDayRegenerate}
                  color={getDayColor(date.toJSDate())}
                  dayRegenerating={dayRegenerating}
                  itemControlVisible={false}
                  onTitlePress={() => onTitlePress(date)}
                />,
                <DayEmpty
                  {...props}
                  onDayRegenerate={onDayRegenerate}
                />
              ]
          }
        </RX.View>
      }

      {
        day &&
        <RX.View
          style={{
            flex: 1,
            flexDirection: isTinyOrSmall ? 'column' : 'row',
            minHeight: height,
            minWidth: width - Styles.values.spacing * 2,
            alignItems: isTinyOrSmall ? 'center' : 'flex-start',
            justifyContent: isTinyOrSmall ? 'flex-start' : 'center',
            alignSelf: 'stretch',
          }}
        >
          <RX.View
            style={styles.container}
          >
            <DayTitle
              date={date}
              onRegenerate={onDayRegenerate}
              color={getDayColor(date.toJSDate())}
              dayRegenerating={dayRegenerating}
              itemControlVisible
              onTitlePress={() => onTitlePress(date)}
              style={{
                [Styles.values.marginStart]: Styles.values.spacing / 2,
              }}
            >

              <MenuItem
                label={translate(translate.keys.ClearDay)}
                onPress={_onClearDay}
              />
            </DayTitle>

            {
              day.meals.map(meal => (
                <MealComponent
                  key={meal.id}
                  meal={meal}
                  dayId={day.id}
                  style={{
                    width: mealWidth,
                    maxWidth: MEAL_WIDTH,
                  }}
                />
              ))
            }
          </RX.View>
          {
            day.meals.filter(m => m.items.length > 0).length > 0 &&
            <NutritionInfo
              title={translate('Total Nutrition')}
              nutrition={calculateDayNutrition(day)}
              nutritionProfile={day.nutritionProfile}
              style={{
                marginTop: isTinyOrSmall ? undefined : 45,
                [Styles.values.marginStart]: isTinyOrSmall ? undefined : Styles.values.spacing,
              }}
            />
          }
        </RX.View>
      }
    </RX.View>
  )
}

const DayComponentContainer = (props: Omit<DayComponentProps, 'onDayRegenerate' | 'dayRegenerating'>) => {
  const [suggestDay, { loading }] = useMutation<DayComponentMealSuggestionMutation, DayComponentMealSuggestionMutationVariables>(DayComponentContainer.operations.suggestDay, {
    update: (proxy, { data }) => data && CalendarService.setDay(data.suggestDay),
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

DayComponentContainer.fragments = {
  day: gql`
    fragment Day on Day {
      id
      date
      nutritionProfile {
        ...NutritionProfile
      }
      meals {
        ...DayMeal
      }
    }

    ${MealComponent.fragments.dayMeal}
    ${MacroTargets.fragments.nutritionProfile}
  `,
}

DayComponentContainer.operations = {
  suggestDay: gql`
    mutation DayComponentMealSuggestionMutation($date: DateTime!) {
      suggestDay(date: $date) {
        ...Day
      }
    }

    ${DayComponentContainer.fragments.day}
  `
}

export default DayComponentContainer

const styles = {
  container: RX.Styles.createViewStyle({
    // alignItems: 'center',
    alignSelf: 'stretch',
  }),
  circle: RX.Styles.createViewStyle({
    paddingTop: 60,
    alignItems: 'center',
  }),
  dayName: RX.Styles.createTextStyle({
    fontSize: 12,
  }),
  dayDate: RX.Styles.createTextStyle({
    fontSize: 30,
    fontWeight: 'bold',
  }),
  titleContainer: RX.Styles.createViewStyle({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: Styles.values.spacing,
    paddingHorizontal: Styles.values.spacingLarge / 2,
  })
}
