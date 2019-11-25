/*
 * ProfileMealsFragments.ts
 * Copyright: Ouranos Studio 2019
 */

import SelectFood from '@Common/FoodDialog/SelectFood'
import RecipeCard from '@Common/RecipesList/components/RecipeCard/RecipeCard'
import gql from 'graphql-tag'


const ProfileMealsFragments = {
  get myMeal() {
    return gql`
      fragment MyMeal on Meal {
        id
        name {text locale}
        likedByUser
        likesCount
        items {
          amount
          food {
            ...SelectFoodFood
            #            thumbnail {url}
            #            name {text locale}
            #            customUnit
            #            gramWeight
          }
          recipe {...RecipeCardRecipe}
          weight {
            name {text locale}
            amount
            gramWeight
            id
          }
          customUnit
          gramWeight
          description {text locale}
          alternativeMealItems {
            amount
            food {
              ...SelectFoodFood
              #            customUnit
              #            gramWeight
            }
            customUnit
            gramWeight
            description {text locale}
            recipe {...RecipeCardRecipe}
            weight {
              name {text locale}
              amount
              gramWeight
              id
            }
          }
        }
        author {
          id
          username
          avatar {url}
        }
        timing {
          totalTime
        }
      }

      ${RecipeCard.fragments.recipe}
      ${SelectFood.fragments.food}
    `
  },
}

export {
  ProfileMealsFragments
}
