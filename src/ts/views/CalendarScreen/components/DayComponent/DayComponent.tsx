/*
 * DayComponent.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import { graphql, MutationFunctionOptions, MutationResult } from '@apollo/react-hoc'
import Styles from '@App/Styles'
import { translate } from '@Common/LocalizedText/LocalizedText'
import MenuItem from '@Common/MenuItem/MenuItem'
import Text from '@Common/Text/Text'
import { DayInput } from '@Models/global-types'
import { useMe } from '@Models/graphql/me/me'
import { Me, Me_meals, Me_nutritionProfile } from '@Models/graphql/me/types/Me'
import CalendarService from '@Services/CalendarService'
import { getDayColor } from '@Utils'
import areFieldsEqual from '@Utils/areFieldsEqual'
import { calculateDayNutrition } from '@Utils/shared/calculate-meal-nutrition'
import trimTypeName from '@Utils/trim-type-name'
import {
  DayComponentClearDayMutation,
  DayComponentClearDayMutationVariables
} from '@Views/CalendarScreen/components/DayComponent/types/DayComponentClearDayMutation'
import { DayComponentDay } from '@Views/CalendarScreen/components/DayComponent/types/DayComponentDay'
import {
  DayComponentNewDayMutation,
  DayComponentNewDayMutation_newDay,
  DayComponentNewDayMutationVariables
} from '@Views/CalendarScreen/components/DayComponent/types/DayComponentNewDayMutation'
import { DateTime } from 'luxon'
import React, { FunctionComponent } from 'react'
import RX from 'reactxp'
import { compose } from 'redux'
import DayEmpty from '../DayEmpty/DayEmpty'
import DayPayWall from '../DayPayWall/DayPayWall'
import ItemControl from '../ItemControl/ItemControl'
import MealComponent from '../MealComponent/MealComponent'
import MacroTargets from '../NutritionInfo/MacroTargets'
import NutritionInfo from '../NutritionInfo/NutritionInfo'


const ObjectId = require('../../../../utils/object-id.js')
const MEAL_WIDTH = 350

const createDayInput = (date: DateTime, meals: Me_meals[], nutritionProfile: Me_nutritionProfile, optimistic?: boolean) => {
  const day = {
    meals: meals.map(userMeal => {
      const mealDate = date
      mealDate.set({
        hour: Number(userMeal.time.split(':')[0]),
        minute: Number(userMeal.time.split(':')[1])
      })

      return {
        items: [],
        userMeal: trimTypeName(userMeal),
        time: mealDate.toISODate(),
        id: ObjectId(),
        ate: false,
      }
    }),
    id: ObjectId(),
    date: date.toISODate(),
    nutritionProfile: trimTypeName(nutritionProfile),
  } as DayInput

  if (optimistic) {
    // @ts-ignore
    day.__typename = 'Day'
    day.meals = day.meals.map(dayMeal => {
      // @ts-ignore
      dayMeal.__typename = 'DayMeal'
      // @ts-ignore
      dayMeal.mealId = null
      return dayMeal
    })
  }

  return day as DayComponentNewDayMutation_newDay & DayInput
}

interface DayComponentCommonProps {
  style?: any,
  day?: DayComponentDay,
  date: DateTime,
  width: number
  minHeight: number
  isTinyOrSmall: boolean,
  me?: Me,
  onTitlePress: (date: DateTime) => void,
  loading?: boolean,
}

export interface DayComponentProps extends DayComponentCommonProps {
  newDayResult: MutationResult<DayComponentNewDayMutation>,
  newDay: (args: MutationFunctionOptions<DayComponentNewDayMutation, DayComponentNewDayMutationVariables>) => Promise<MutationResult<DayComponentNewDayMutation>>,

  generateDayResult: MutationResult<DayComponentNewDayMutation>,
  generateDay: (args: MutationFunctionOptions<DayComponentNewDayMutation, DayComponentNewDayMutationVariables>) => Promise<MutationResult<DayComponentNewDayMutation>>,

  clearDayResult: MutationResult<DayComponentClearDayMutation>,
  clearDay: (args: MutationFunctionOptions<DayComponentClearDayMutation, DayComponentClearDayMutationVariables>) => Promise<MutationResult<DayComponentClearDayMutation>>,
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

/*
class DayComponent extends React.PureComponent<DayComponentProps> {
  // public shouldComponentUpdate(nextProps: Readonly<DayComponentProps>, nextState: Readonly<{}>, nextContext: any): boolean {
  //   return (
  //     (nextProps.height !== this.props.height) ||
  //     (nextProps.width !== this.props.width) ||
  //     (nextProps.isTinyOrSmall !== this.props.isTinyOrSmall) ||
  //     (nextProps.dayRegenerating !== this.props.dayRegenerating) ||
  //     (nextProps.dayCreating !== this.props.dayCreating) ||
  //     (JSON.stringify(nextProps.day) !== JSON.stringify(this.props.day))
  //   )
  // }

  public render(): React.ReactNode {
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
      onClearDay,
    } = this.props

    const mealWidth = width > MEAL_WIDTH ? MEAL_WIDTH : width
    // const isToday = date.hasSame(DateTime.local(), 'day')
    const _isFreeUser = false // && (Math.round(date.diff(DateTime.local()).as('day')) > 0) && (me && !me!.membership)

    return (
      <RX.View
        style={[
          style,
          {
            flex: 1,
            alignItems: 'center',
            minHeight: height,
            maxWidth: width - Styles.values.spacing * 2,
          }
        ]}
      >
        {
          !day &&
          <RX.View
            style={{
              position: 'absolute',
              // flex: 1,
              alignItems: 'center',
              // justifyContent: 'center',
              // marginTop: Styles.values.spacing,
              top: Styles.values.spacing,
              left: 0,
              right: 0,
              bottom: 0,
              // minHeight: height,
              // minWidth: width - Styles.values.spacing * 2,
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
                    {...this.props}
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
              // minHeight: height,
              // minWidth: width - Styles.values.spacing * 2,
              alignItems: isTinyOrSmall ? 'center' : 'flex-start',
              justifyContent: isTinyOrSmall ? 'flex-start' : 'center',
              alignSelf: 'stretch',
              marginTop: Styles.values.spacing,
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
                  onPress={onClearDay}
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
}
*/

export function DayComponent(props: DayComponentProps) {
  const {
    style,
    day,
    minHeight,
    width,
    date,
    isTinyOrSmall,
    // me,
    onTitlePress,
    newDayResult: { loading: newDayLoading },
    newDay,
    generateDayResult: { loading: generateDayLoading },
    generateDay,
    clearDayResult: { loading: clearDayLoading },
    clearDay,
    loading,
  } = props

  const me = useMe()!

  const mealWidth = width > MEAL_WIDTH ? MEAL_WIDTH : width
  // const isToday = date.hasSame(DateTime.local(), 'day')
  const _isFreeUser = false // && (Math.round(date.diff(DateTime.local()).as('day')) > 0) && (me && !me!.membership)

  const dayInput = createDayInput(props.date, me.meals, me.nutritionProfile)
  const dayOptimisticResponse = createDayInput(props.date, me.meals, me.nutritionProfile, true)

  const onClearDay = () => {
    if (!props.day) return

    return clearDay({
      variables: {
        dayId: props.day.id,
      },
      optimisticResponse: {
        clearDay: props.day.id,
      }
    })
  }
  const onDayCreate = () => newDay({
    variables: {
      day: dayInput
    },
    optimisticResponse: {
      newDay: dayOptimisticResponse
    }
  })
  const dayRegenerating = generateDayLoading
  const onDayRegenerate = () => generateDay({
    variables: {
      day: dayInput,
      generate: true,
    }
  })

  return (
    <RX.View
      style={[
        style,
        {
          flex: 1,
          alignItems: 'center',
          minHeight,
          maxWidth: width - Styles.values.spacing * 2,
        }
      ]}
    >
      {
        !day &&
        <RX.View
          style={{
            position: 'absolute',
            alignItems: 'center',
            top: Styles.values.spacing,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          {
            // is it in the future?
            _isFreeUser ?
              <DayPayWall /> :
              <>
                <DayTitle
                  date={date}
                  onRegenerate={onDayRegenerate}
                  color={getDayColor(date.toJSDate())}
                  dayRegenerating={dayRegenerating || loading}
                  itemControlVisible={false}
                  onTitlePress={() => onTitlePress(date)}
                />
                <DayEmpty
                  {...props}
                  loading={loading}
                  onDayRegenerate={onDayRegenerate}
                  dayRegenerating={dayRegenerating}
                  dayCreating={newDayLoading}
                  onDayCreate={onDayCreate}
                />
              </>
          }
        </RX.View>
      }

      {
        day &&
        <RX.View
          style={{
            flex: 1,
            flexDirection: isTinyOrSmall ? 'column' : 'row',
            alignItems: isTinyOrSmall ? 'center' : 'flex-start',
            justifyContent: isTinyOrSmall ? 'flex-start' : 'center',
            alignSelf: 'stretch',
            marginTop: Styles.values.spacing,
          }}
        >
          <RX.View
            style={styles.container}
          >
            <DayTitle
              date={date}
              onRegenerate={onDayRegenerate}
              color={getDayColor(date.toJSDate())}
              dayRegenerating={dayRegenerating || loading}
              itemControlVisible
              onTitlePress={() => onTitlePress(date)}
              style={{
                [Styles.values.marginStart]: Styles.values.spacing / 2,
              }}
            >
              <MenuItem
                label={translate(translate.keys.ClearDay)}
                onPress={onClearDay}
              />
            </DayTitle>

            {
              day.meals.map(meal => (
                <MealComponent
                  key={meal.userMeal!.id}
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
              }}
            />
          }
        </RX.View>
      }
    </RX.View>
  )
}

DayComponent.fragments = {
  day: gql`
    fragment DayComponentDay on Day {
      id
      date
      nutritionProfile {
        ...NutritionProfile
      }
      meals {
        ...MealComponentDayMeal
      }
    }

    ${MacroTargets.fragments.nutritionProfile}
    ${MealComponent.fragments.dayMeal}
  `
}

DayComponent.operations = {
  newDay: gql`
    mutation DayComponentNewDayMutation($day: DayInput!, $generate: Boolean) {
      newDay(day: $day, generate: $generate) {
        ...DayComponentDay
      }
    }

    ${DayComponent.fragments.day}
  `,
  clearDay: gql`
    mutation DayComponentClearDayMutation($dayId: ObjectId!) {
      clearDay(dayId: $dayId)
    }
  `
}

export default compose<FunctionComponent<DayComponentCommonProps>>(
  graphql<DayComponentCommonProps, DayComponentNewDayMutation, DayComponentNewDayMutationVariables, DayComponentProps>(DayComponent.operations.newDay, {
    name: 'newDay',
    options: {
      ignoreResults: false,
      notifyOnNetworkStatusChange: true,
      update: (proxy, { data }) => data && CalendarService.setDay(proxy, data.newDay),
    }
  }),
  graphql<DayComponentCommonProps, DayComponentNewDayMutation, DayComponentNewDayMutationVariables, DayComponentProps>(DayComponent.operations.newDay, {
    name: 'generateDay',
    options: {
      ignoreResults: false,
      notifyOnNetworkStatusChange: true,
      update: (proxy, { data }) => data && CalendarService.setDay(proxy, data.newDay),
    }
  }),
  graphql<DayComponentCommonProps, DayComponentClearDayMutation, DayComponentClearDayMutationVariables, DayComponentProps>(DayComponent.operations.clearDay, {
    name: 'clearDay',
    options: {
      ignoreResults: false,
      notifyOnNetworkStatusChange: true,
      update: (proxy, { data }) => data && CalendarService.removeDay(proxy, data.clearDay),
    }
  }),
)(React.memo(DayComponent, areFieldsEqual([
  'height',
  'width',
  'isTinyOrSmall',
  'clearDayResult',
  'newDayResult',
  'generateDayResult',
  'day',
  'date',
  'loading',
])))

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
