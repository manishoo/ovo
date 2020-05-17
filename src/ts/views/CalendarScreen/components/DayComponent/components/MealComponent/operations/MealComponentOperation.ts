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
    mutation MealComponentSuggestMealMutation($dayId: ObjectId!, $dayMealId: ObjectId!, $planId: ObjectId!) {
      suggestMeal(dayId: $dayId, dayMealId: $dayMealId, planId: $planId) {
        ...MealComponentDayMeal
      }
    }

    ${MealComponentFragments.dayMeal}
  `,
  logMeal: gql`
    mutation MealComponentLogMealMutation($date: DateTime, $dayId: ObjectId, $dayMealId: ObjectId!, $mealItems: [IngredientInput!]!, $planId: ObjectId!) {
      logMeal(date: $date, dayId: $dayId, dayMealId: $dayMealId, ingredientInputs: $mealItems, planId: $planId) {
        ...MealComponentDayMeal
      }
    }

    ${MealComponentFragments.dayMeal}
  `,
  eatMeal: gql`
    mutation MealComponentEatMealMutation($dayId: ObjectId!, $eaten: Boolean!, $userMealId: String!, $planId: ObjectId!) {
      eatMeal(dayId: $dayId, eaten: $eaten, userMealId: $userMealId, planId: $planId)
    }
  `,
  moveMealItem: gql`
    mutation MealComponentMoveMealItemMutation($dayId: ObjectId!, $fromUserMealId: String!, $toUserMealId: String!, $toIndex: Int!, $mealItemId: ObjectId!, $planId: ObjectId!) {
      moveMealItem(dayId: $dayId, fromUserMealId: $fromUserMealId, toUserMealId: $toUserMealId, toIndex: $toIndex, mealItemId: $mealItemId, planId: $planId)
    }
  `,
}

export default MealComponentOperations
