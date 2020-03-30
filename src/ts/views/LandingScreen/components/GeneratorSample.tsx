/*
 * GeneratorSample.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, useMutation } from '@apollo/client'
import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import FilledButton from '@Common/FilledButton/FilledButton'
import FlatButton from '@Common/FlatButton/FlatButton'
import InputNumber from '@Common/Input/InputNumber'
import LoadingIndicator from '@Common/LoadingIndicator/LoadingIndicator'
import Text from '@Common/Text/Text'
import UserMeals from '@Common/UserMeals/UserMeals'
import { NutritionProfileMode, UserMealInput } from '@Models/global-types'
import MealComponentContainer
  from '@Views/CalendarScreen/components/DayComponent/components/MealComponent/MealComponent'
import { MealComponentFragments } from '@Views/CalendarScreen/components/DayComponent/components/MealComponent/operations/MealComponentOperation'
import {
  GeneratorSampleMutation,
  GeneratorSampleMutationVariables
} from '@Views/LandingScreen/components/types/GeneratorSampleMutation'
import RegisterForm from '@Views/Register/RegisterForm'
import { useState } from 'react'
import RX from 'reactxp'


export interface GeneratorSampleProps {
  style: any,
}

export default function GeneratorSample({ style }: GeneratorSampleProps) {
  const [open, setOpen] = useState(false)
  const [userMeals, setUserMeals] = useState<UserMealInput[]>(AppConfig.defaultUserMeals)
  const viewHeight = RX.Animated.createValue(0)
  const [suggestDayGuest, { loading, data }] = useMutation<GeneratorSampleMutation, GeneratorSampleMutationVariables>(gql`
    mutation GeneratorSampleMutation($userMeals: [UserMealInput!]!, $dietId: ObjectId, $nutritionProfile: NutritionProfileInput!) {
      suggestDayGuest(userMeals: $userMeals, dietId: $dietId, nutritionProfile: $nutritionProfile) {
        ...MealComponentDayMeal
      }
    }

    ${MealComponentFragments.dayMeal}
  `, {
    variables: {
      nutritionProfile: {
        mode: NutritionProfileMode.range,
        calories: 2300,
        protein: {
          max: 1000,
          min: 0,
        },
        carbs: {
          max: 1000,
          min: 0,
        },
        fat: {
          max: 1000,
          min: 0,
        },
        isStrict: false,
      },
      userMeals,
    }
  })

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        [
          <RX.View
            style={{
              backgroundColor: theme.colors.cardBg,
              borderWidth: 1,
              borderColor: theme.colors.borderLight,
              padding: Styles.values.spacing,
              width: 300,
              borderRadius: 20,
            }}
          >
            <InputNumber value={2300} onChange={() => {
            }} label={'Calories'} />
            <FlatButton
              onPress={() => {
                RX.Animated.timing(viewHeight, { toValue: open ? 0 : 250 }).start()
                setOpen(!open)
              }}
              borderless label={'Advanced Options'} />
            <RX.Animated.View
              style={[
                {
                  height: viewHeight,
                }
              ]}
            >
              <UserMeals
                // @ts-ignore
                meals={userMeals}
                onMealsChange={meals => setUserMeals(meals)}
              />
            </RX.Animated.View>
            <FilledButton
              label={'Generate'}
              onPress={() => suggestDayGuest()}
              suffix={(
                loading &&
                <LoadingIndicator size={17} />
              )}
            />
          </RX.View>,
          data && data.suggestDayGuest.length > 0 &&
          <RX.View style={{ flexDirection: 'row', alignSelf: 'stretch' }}>
            <RX.View style={{ flex: 1, alignItems: 'center', paddingTop: Styles.values.spacing }}>
              <RX.View style={{ width: 270 }}>
                <Text translate={'Ready for more?'} type={Text.types.title} />
                <Text
                  translate={'With a free account, you can customize your preferences, track your intake, create recipes, and much more.'}
                  type={Text.types.body} />
              </RX.View>
              <RegisterForm />
            </RX.View>
            <RX.View style={{
              flex: 1,
              padding: Styles.values.spacing,
              borderWidth: 0,
              [Styles.values.borderStartWidth]: 1,
              borderColor: theme.colors.borderLight
            }}>
              {
                data && data.suggestDayGuest.map(dayMeal => (
                  <MealComponentContainer meal={dayMeal} />
                ))
              }
              {/*<DayComponentContainer date={DateTime.local()} />*/}
            </RX.View>
          </RX.View>
        ]
      )}
    </ThemeContext.Consumer>
  )
}
