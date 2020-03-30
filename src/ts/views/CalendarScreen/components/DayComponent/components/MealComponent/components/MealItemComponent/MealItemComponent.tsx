/*
 * MealItemComponent.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, useMutation } from '@apollo/client'
import FoodPreview from '@Common/FoodPickerDialog/components/FoodPreview'
import MealItemComponent, { MealItemComponentCommonProps } from '@Common/MealItemComponent/MealItemComponent'
import CalendarService from '@Services/CalendarService'
import React, { useCallback } from 'react'
import RX from 'reactxp'
import { MealItemComponentMutation, MealItemComponentMutationVariables } from './types/MealItemComponentMutation'


const MealItemComponentContainer = (props: MealItemComponentCommonProps) => {
  const [suggestMealItem, { loading }] = useMutation<MealItemComponentMutation, MealItemComponentMutationVariables>(MealItemComponentContainer.operations.suggestMealItem)

  return (
    <MealItemComponent
      {...props}
      mealItemRegenerating={loading}
      showDescription={false}
      onMealItemRegenerate={props.meal && useCallback(() => suggestMealItem({
        variables: {
          date: props.meal!.time,
          userMealId: props.meal!.userMeal.id,
          mealItemId: props.mealItem.id,
        },
        update: (proxy, { data }) => data && props.dayId && CalendarService.setMealItem(proxy, props.meal!.id, props.mealItem, data.suggestMealItem),
      }), [
        props.meal.time,
        props.meal.userMeal.id,
        props.mealItem.id,
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
    mutation MealItemComponentMutation($userMealId: String!, $mealItemId: String!, $date: DateTime!) {
      suggestMealItem(userMealId: $userMealId, mealItemId: $mealItemId, date: $date) {
        ...MealItemComponentMealItem
      }
    }

    ${MealItemComponentContainer.fragments.mealItem}
  `
}

export default MealItemComponentContainer
