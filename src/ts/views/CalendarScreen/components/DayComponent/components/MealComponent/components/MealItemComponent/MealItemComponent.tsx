/*
 * MealItemComponent.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, useMutation } from '@apollo/client'
import FoodPreview from '@Common/FoodPickerDialog/components/FoodPreview'
import MealItemComponent, { MealItemComponentCommonProps } from '@Common/MealItemComponent/MealItemComponent'
import CalendarService from '@Services/CalendarService'
import { useCalendarContext } from '@Views/CalendarScreen/CalendarScreen'
import { MealComponentDayMeal_items } from '@Views/CalendarScreen/components/DayComponent/components/MealComponent/operations/types/MealComponentDayMeal'
import React, { useCallback } from 'react'
import RX from 'reactxp'
import { MealItemComponentMutation, MealItemComponentMutationVariables } from './types/MealItemComponentMutation'


const MealItemComponentContainer = (props: Omit<MealItemComponentCommonProps, 'mealItem'> & { mealItem: MealComponentDayMeal_items }) => {
  const { planId } = useCalendarContext()
  const [suggestMealItem, { loading }] = useMutation<MealItemComponentMutation, MealItemComponentMutationVariables>(MealItemComponentContainer.operations.suggestMealItem)

  return (
    <MealItemComponent
      {...props}
      mealItemRegenerating={loading}
      showDescription={false}
      onMealItemRegenerate={props.meal && useCallback(() => suggestMealItem({
        variables: {
          mealItemId: props.mealItem.id,
          dayId: props.dayId,
          dayMealId: props.meal!.id,
          planId,
        },
        update: (proxy, { data }) => data && props.dayId && CalendarService.setMealItem(proxy, props.meal!.id, props.mealItem, data.suggestMealItem),
      }), [
        props.meal.time,
        props.meal.userMeal.id,
        props.mealItem.id,
        planId,
      ])}
    />
  )
}

MealItemComponentContainer.fragments = {
  mealItem: gql`
    fragment MealItemComponentMealItem on MealItem {
      id
      name {text locale}
      description {text locale}
      amount
      customUnit {
        gramWeight
        name { text locale }
      }
      unit {
        ... on Weight {
          amount
          gramWeight
          id
          name { text locale }
        }
        ... on CustomUnit {
          gramWeight
          name { text locale }
        }
      }
      isOptional
      hasAlternatives
      item {
        ...FoodPreviewMealItemIngredientItem
      }
    }

    ${FoodPreview.fragments.mealItemIngredientItem}
  `
}

MealItemComponentContainer.operations = {
  suggestMealItem: gql`
    mutation MealItemComponentMutation($dayId: ObjectId!, $dayMealId: ObjectId!, $planId: ObjectId!, $mealItemId: ObjectId!) {
      suggestMealItem(dayId: $dayId, dayMealId: $dayMealId, planId: $planId, mealItemId: $mealItemId) {
        ...MealItemComponentMealItem
      }
    }

    ${MealItemComponentContainer.fragments.mealItem}
  `
}

export default MealItemComponentContainer
