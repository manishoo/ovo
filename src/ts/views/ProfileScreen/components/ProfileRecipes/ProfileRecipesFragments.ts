/*
 * ProfileRecipesFragments.ts
 * Copyright: Ouranos Studio 2019
 */

import IngredientCard from 'common/recipe/IngredientCard/IngredientCard'
import gql from 'graphql-tag'


const ProfileRecipesFragments = {
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
          imageUrl { url }
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
        coverImage { url }
        tags
        createdAt
        updatedAt
      }

      ${IngredientCard.fragments.ingredient}
    `
  }
}

export {
  ProfileRecipesFragments
}
