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
import { translate } from '@Common/LocalizedText/LocalizedText'
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
import { useMemo, useRef, useState } from 'react'
import { Col, Container, Row, useScreenClass } from 'react-grid-system'
import RX from 'reactxp'


const MEAL_WIDTH = 350

export interface GeneratorSampleProps {
  style?: any,
  screenWidth: number,
}

export default function GeneratorSample({ style, screenWidth }: GeneratorSampleProps) {
  const open = useRef(false)
  const [userMeals, setUserMeals] = useState<UserMealInput[]>(AppConfig.defaultUserMeals)
  const [calories, setCalories] = useState(AppConfig.defaultCalories)
  const [viewHeight] = useState(RX.Animated.createValue(0))
  const nutritionProfile = {
    mode: NutritionProfileMode.range,
    calories: calories,
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
  }
  const _userMealsRef = useRef<any>()
  const [suggestDayGuest, { loading, data }] = useMutation<GeneratorSampleMutation, GeneratorSampleMutationVariables>(gql`
    mutation GeneratorSampleMutation($userMeals: [UserMealInput!]!, $dietId: ObjectId, $nutritionProfile: NutritionProfileInput!) {
      suggestDayGuest(userMeals: $userMeals, dietId: $dietId, nutritionProfile: $nutritionProfile) {
        ...MealComponentDayMeal
      }
    }

    ${MealComponentFragments.dayMeal}
  `, {
    variables: {
      nutritionProfile,
      userMeals,
    }
  })
  const setHeight = (height: number) => RX.Animated.timing(viewHeight, { toValue: height }).start()

  const mealWidth = screenWidth > MEAL_WIDTH ? MEAL_WIDTH : screenWidth
  const _mealStyle = useMemo(() => ({
      width: mealWidth,
      maxWidth: MEAL_WIDTH,
      alignSelf: 'center',
    }
  ), [screenWidth])
  const screenClass = useScreenClass()

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
            <InputNumber value={calories} onChange={value => setCalories(Number(value))} label={'Calories'} />
            <FlatButton
              onPress={() => {
                setHeight((open.current ? 0 : (_userMealsRef.current.getMeals().length + 1) * 44))
                open.current = !open.current
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
                ref={ref => _userMealsRef.current = ref}
                // @ts-ignore
                meals={userMeals}
                onMealsChange={(meals) => setHeight((meals.length + 1) * 44)}
              />
            </RX.Animated.View>
            <FilledButton
              label={translate(data && data.suggestDayGuest.length > 0 ? 'Regenerate' : 'Generate')}
              onPress={() => suggestDayGuest({
                variables: {
                  nutritionProfile,
                  userMeals: _userMealsRef.current.getMeals(),
                }
              })}
              suffix={(
                loading &&
                <LoadingIndicator size={17} />
              )}
            />
          </RX.View>,
          data && data.suggestDayGuest.length > 0 &&
          <Container>
            <Row nogutter>
              <Col
                sm={12}
                md={6}
              >
                <RX.View
                  style={[
                    {
                      alignItems: 'center',
                      padding: Styles.values.spacing,
                    },
                    !['xs', 'sm'].includes(screenClass) ? {
                      [Styles.values.paddingEnd]: Styles.values.spacing * 2,
                      borderWidth: 0,
                      [Styles.values.borderEndWidth]: 1,
                      borderColor: theme.colors.borderLight,
                    } : undefined
                  ]}
                >
                  {
                    data && data.suggestDayGuest.map(dayMeal => (
                      <MealComponentContainer editable={false} meal={dayMeal} style={_mealStyle} />
                    ))
                  }
                </RX.View>
              </Col>
              <Col
                sm={12}
                md={6}
              >
                <RX.View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                  }}
                >
                  <RX.View
                    style={{
                      maxWidth: 270 + 32,
                      padding: Styles.values.spacing,
                    }}
                  >
                    <Text translate={'Ready for more?'} type={Text.types.title} />
                    <Text
                      translate={'With a free account, you can customize your preferences, track your intake, create recipes, and much more.'}
                      type={Text.types.body}
                    />

                    <RegisterForm />
                  </RX.View>

                </RX.View>
              </Col>
            </Row>
          </Container>
        ]
      )}
    </ThemeContext.Consumer>
  )
}
