/*
 * ingredients.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'


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
    #    image {url}
    thumbnail {url}
    origFoodClassSlug
    #    nutrition {
    #      ...Nutrition
    #    }

    # FIXME? like this?
    origFoodGroups { id name { text locale } }
  }

  # {NutritionFragment}
`

export const IngredientRecipeFragment = gql`
  fragment IngredientRecipe on Recipe {
    id
    slug
    title {text locale}
    servingName {text locale}
    #    image {url}
    timing {
      cookTime
      prepTime
      totalTime
    }
    status
    #    likesCount
    #    userLikedRecipe
    thumbnail {url}

    # FIXME maybe not include recipe ingredients in foodpicker?
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
        }
      }
    }

    author {
      id
      username
      firstName
      lastName
      avatar {url}
    }
    #    nutrition {
    #      ...Nutrition
    #    }
  }

  ${IngredientFoodFragment}
`

export const IngredientFragment = gql`
  fragment BasicIngredient on Ingredient {
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
