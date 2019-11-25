/*
 * ReviewRecipesFragments.ts
 * Copyright: Ouranos Studio 2019
 */

import IngredientCard from '@Common/recipe/IngredientCard/IngredientCard'
import gql from 'graphql-tag'


const ReviewRecipesFragments = {
  get myRecipe() {
    return gql`
      fragment MyRecipe on Recipe {
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
          avatar { url }
        }
        likesCount
        userLikedRecipe
        timing {
          prepTime
          cookTime
          totalTime
        }
        ingredients { ...IngredientCardIngredient }
        instructions {
          step
          text { text locale }
          image { url }
          notes { text locale }
        }
        difficulty
        description { text locale }
        image { url }
        tags
        createdAt
        updatedAt
        status
      }

      ${IngredientCard.fragments.ingredient}
    `
  }
}

export {
  ReviewRecipesFragments
}
