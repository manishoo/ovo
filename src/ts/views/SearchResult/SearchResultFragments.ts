/*
 * fragments.ts
 * Copyright: Ouranos Studio 2019
 */

import gql from 'graphql-tag'


const SearchResultFragments = {
  get SearchResultRecipe() {
    return gql`
      fragment SearchResultRecipe on Recipe {
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
          food {...SearchResultFood}
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
        difficulty
        description { text locale }
        image { url }
        tags
        createdAt
        updatedAt
      }

      ${this.SearchResultFood}
    `
  },
  SearchResultFood: gql`
    fragment SearchResultFood on IngredientFood {
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
    }
  `
}

export {
  SearchResultFragments
}
