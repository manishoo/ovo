/*
 * fragments.ts
 * Copyright: Ouranos Studio 2019
 */

import SelectFoodContainer from '@Common/FoodDialog/SelectFood'
import gql from 'graphql-tag'


export const MeFragment = gql`
  fragment MeFragment on User {
    id
    username
    session
    email
    firstName
    middleName
    lastName
    image {
      url
    }
    gender
    bodyFat
    age
    weight {
      value
      unit
    }
    height {
      value
      unit
    }
    caloriesPerDay
  }
`

export const PublicRecipeFragment = gql`
  fragment PublicRecipe on Recipe {
    id
    title {
      text
      locale
    }
    serving
    slug
    author {
      id
      username
      image { url }
    }
    likesCount
    userLikedRecipe
    timing {
      prepTime
      cookTime
      totalTime
    }
    ingredients {
      name {
        text
        locale
      }
      amount
      customUnit
      gramWeight
      thumbnail {
        url
      }
      description {
        text
        locale
      }
      food {...SelectFoodFood}
      weight {
        amount
        gramWeight
        id
        name { text locale }
      }
    }
    instructions {
      step
      text { text locale }
      image { url }
      notes { text locale }
    }
    description { text locale }
    image { url }
    createdAt
    updatedAt
  }

  ${SelectFoodContainer.fragments.food}
`
