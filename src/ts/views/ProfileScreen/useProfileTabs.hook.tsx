/*
 * useProfileTabs.hook.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql, QueryResult, useQuery } from '@apollo/client'
import RX from 'reactxp'
import IngredientCard from '../../common/IngredientCard/IngredientCard'
import MealCell from './components/MealsList/components/MealCell/MealCell'
import { ProfileScreenProps } from './ProfileScreen'
import { ProfileMealsQuery, ProfileMealsQueryVariables } from './types/ProfileMealsQuery'
import { ProfileRecipesQuery, ProfileRecipesQueryVariables } from './types/ProfileRecipesQuery'
import { ProfileReviewRecipesQuery, ProfileReviewRecipesQueryVariables } from './types/ProfileReviewRecipesQuery'


export const PROFILE_MEALS_QUERY = gql`
  query ProfileMealsQuery($lastId: String, $userId: ObjectId) {
    meals(lastId: $lastId, authorId: $userId) @connection(key: "meals") {
      meals {
        ...MealCellMeal
      }
      pagination {
        hasNext
        lastId
      }
    }
  }

  ${MealCell.fragments.meal}
`
export const PROFILE_RECIPES_QUERY = gql`
  query ProfileRecipesQuery($lastId: ObjectId, $userId: ObjectId, $size: Int) {
    recipes(lastId: $lastId, userId: $userId, size: $size) @connection(key: "recipes") {
      recipes {
        ...IngredientRecipe
      }
      pagination {
        hasNext
        lastId
      }
    }
  }

  ${IngredientCard.fragments.recipe}
`
export const PROFILE_REVIEW_RECIPES_QUERY = gql`
  query ProfileReviewRecipesQuery($lastId: ObjectId, $size: Int) {
    recipes(lastId: $lastId, size: $size, status: review) @connection(key: "reviewRecipes") {
      recipes {
        ...IngredientRecipe
      }
      pagination {
        hasNext
        lastId
      }
    }
  }

  ${IngredientCard.fragments.recipe}
`

interface ProfileTabsProps {
  userId: string,
}

export interface ProfileTabsResult {
  meals: QueryResult<ProfileMealsQuery, ProfileMealsQueryVariables>,
  recipes: QueryResult<ProfileRecipesQuery, ProfileRecipesQueryVariables>,
  reviewRecipes: QueryResult<ProfileReviewRecipesQuery, ProfileReviewRecipesQueryVariables>
}

function useProfileTabs({ userId }: ProfileTabsProps): ProfileTabsResult {
  const meals = useQuery<ProfileMealsQuery, ProfileMealsQueryVariables>(PROFILE_MEALS_QUERY, {
    fetchPolicy: 'cache-and-network',
    returnPartialData: true,
    variables: {
      userId,
    }
  })
  const recipes = useQuery<ProfileRecipesQuery, ProfileRecipesQueryVariables>(PROFILE_RECIPES_QUERY, {
    fetchPolicy: 'cache-and-network',
    returnPartialData: true,
    variables: {
      size: 20,
      userId,
    },
  })
  const reviewRecipes = useQuery<ProfileReviewRecipesQuery, ProfileReviewRecipesQueryVariables>(PROFILE_REVIEW_RECIPES_QUERY, {
    fetchPolicy: 'cache-and-network',
    returnPartialData: true,
    variables: {
      size: 20,
    },
  })

  return {
    meals,
    recipes,
    reviewRecipes,
  }
}

export default function useProfileTabsHOC(Component: any) {
  return (props: ProfileScreenProps) => {
    const {
      meals,
      recipes,
      reviewRecipes,
    } = useProfileTabs({
      userId: props.user.id,
    })

    return (
      <Component
        {...props}
        meals={meals}
        recipes={recipes}
        reviewRecipes={reviewRecipes}
      />
    )
  }
}
