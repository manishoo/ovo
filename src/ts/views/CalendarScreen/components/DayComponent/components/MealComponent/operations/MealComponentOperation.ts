/*
 * MealComponentOperation.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import MealItemComponent
  from '@Views/CalendarScreen/components/DayComponent/components/MealComponent/components/MealItemComponent/MealItemComponent'
import MealSettingsScreen from '@Views/MealSettingsScreen/MealSettingsScreen'


export const MealComponentFragments = {
  dayMeal: gql`
    fragment MealComponentDayMeal on DayMeal {
      id
      time
      mealId
      ate
      userMeal {
        ...MealSettingsMeal
      }
      items {
        ...MealItemComponentMealItem
      }
    }

    ${MealSettingsScreen.fragments.mealSettingsMeal}
    ${MealItemComponent.fragments.mealItem}
  `
}

const MealComponentOperations = {
  suggestMeal: gql`
    mutation MealComponentSuggestMealMutation($userMealId: String!, $date: DateTime!) {
      suggestMeal(userMealId: $userMealId, date: $date) {
        ...MealComponentDayMeal
      }
    }

    ${MealComponentFragments.dayMeal}
  `,
  logMeal: gql`
    mutation MealComponentLogMealMutation($date: DateTime!, $userMealId: String!, $mealItems: [IngredientInput!]!) {
      logMeal(date: $date, userMealId: $userMealId, mealItems: $mealItems) {
        ...MealComponentDayMeal
      }
    }

    ${MealComponentFragments.dayMeal}
  `,
  eatMeal: gql`
    mutation MealComponentEatMealMutation($dayId: ObjectId!, $eaten: Boolean!, $userMealId: String!) {
      eatMeal(dayId: $dayId, eaten: $eaten, userMealId: $userMealId)
    }
  `,
  moveMealItem: gql`
    mutation MealComponentMoveMealItemMutation($dayId: ObjectId!, $fromUserMealId: String!, $toUserMealId: String!, $toIndex: Int!, $mealItemId: ObjectId!) {
      moveMealItem(dayId: $dayId, fromUserMealId: $fromUserMealId, toUserMealId: $toUserMealId, toIndex: $toIndex, mealItemId: $mealItemId)
    }
  `,
}

export default MealComponentOperations
