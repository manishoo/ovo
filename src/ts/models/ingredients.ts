/*
 * ingredients.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import NutritionFragment from '@Models/nutrition'


export const IngredientFoodFragment = gql`
  fragment IngredientFood on Food {
    id
    name { text locale }
    description { text locale }
    weights {
      amount
      gramWeight
      id
      name { text locale }
    }
    image {url}
    thumbnail {url}
    origFoodClassSlug
    nutrition {
      ...Nutrition
    }
    origFoodGroups { id name { text locale } }
  }

  ${NutritionFragment}
`

export const IngredientRecipeFragment = gql`
  fragment IngredientRecipe on Recipe {
    id
    slug
    title {text locale}
    image {url}
    timing {
      cookTime
      prepTime
      totalTime
    }
    status
    likesCount
    userLikedRecipe
    thumbnail {url}
    ingredients {
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
      item {
        ... on Food {
          ...IngredientFood
        }
        ... on Recipe {
          id
          slug
          title {text locale}
          nutrition {
            calories { amount unit }
          }
        }
      }
    }
    author {
      id
      username
      avatar {url}
    }
    nutrition {
      ...Nutrition
    }
  }

  ${IngredientFoodFragment}
  ${NutritionFragment}
`

export const IngredientFragment = gql`
  fragment Ingredient on Ingredient {
    id
#    name {text locale}
#    description {text locale}
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
    item {
      ... on Food {
        ...IngredientFood
      }
      ... on Recipe {
        ...IngredientRecipe
      }
    }
  }

  ${IngredientFoodFragment}
  ${IngredientRecipeFragment}
`
