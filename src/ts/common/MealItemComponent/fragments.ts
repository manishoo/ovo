/*
 * fragments.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import FoodPreview from '@Common/FoodPickerDialog/components/FoodPreview'
import { IngredientFoodFragment, IngredientRecipeFragment } from '@Models/ingredients'


export const MealItemComponentFragment = gql`
  fragment MealItemComponentCommonMealItem on MealItem {
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
      ... on Food {
        ...IngredientFood
      }
      ... on Recipe {
        ...IngredientRecipe
      }
    }

    ${IngredientFoodFragment}
    ${IngredientRecipeFragment}
  }

  ${FoodPreview.fragments.mealItemIngredientItem}
`
