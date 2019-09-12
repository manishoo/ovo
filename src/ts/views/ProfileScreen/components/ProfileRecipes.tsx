/*
 * ProfileRecipesList.tsx
 * Copyright: Ouranos Studio 2019
 */

import SelectFoodContainer from 'common/FoodDialog/SelectFood'
import RecipesList from 'common/RecipesList/RecipesList'
import gql from 'graphql-tag'
import RX from 'reactxp'
import client from 'src/ts/app/client'
import { UserRole } from 'src/ts/models/global-types'
import {
  RecipesListQuery,
  RecipesListQuery_recipes_recipes,
  RecipesListQueryVariables
} from 'src/ts/views/ProfileScreen/types/RecipesListQuery'
import { Me } from 'src/ts/views/Register/types/Me'


interface ProfileRecipesProps {
  // userId: string,
  onHeightChange: (height: number) => void,
  me: Me,
}

interface ProfileRecipesState {
  recipes: RecipesListQuery_recipes_recipes[],
  hasNext?: boolean
}

export default class ProfileRecipes extends RX.Component<ProfileRecipesProps, ProfileRecipesState> {
  state: ProfileRecipesState = {
    recipes: [],
  }

  componentDidMount() {
    this.fetchMore()
  }

  render() {
    return (
      <RecipesList
        recipes={this.state.recipes}
        showAddRecipe
        hideAvatar={this.props.me.role === UserRole.user}
        onLayout={e => this.props.onHeightChange(e.height)}
      />
    )
  }

  public fetchMore = () => {
    if (!this.state.hasNext && this.state.recipes.length > 0) return

    let lastId

    const lastItem = this.state.recipes[this.state.recipes.length - 1]
    if (lastItem) {
      lastId = lastItem.id
    }

    client.query<RecipesListQuery, RecipesListQueryVariables>({
      query: PROFILE_RECIPES_QUERY,
      fetchPolicy: 'cache-first',
      variables: {
        userId: this.props.me.id,
        lastId
      },
    })
      .then(({ data }) => {
        if (data) {
          this.setState({
            recipes: [
              ...this.state.recipes,
              ...data.recipes.recipes
            ],
            hasNext: data.recipes.pagination.hasNext,
          })
        }
      })
  }

  static fragments = {
    myRecipe: gql`
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
        difficulty
        description { text locale }
        coverImage { url }
        tags
        createdAt
        updatedAt
      }

      ${SelectFoodContainer.fragments.food}
    `
  }
}

export const PROFILE_RECIPES_QUERY = gql`
  query ProfileRecipesQuery($lastId: String, $userId: String) {
    recipes(lastId: $lastId, userId: $userId) {
      recipes {
        ...MyRecipe
      }
      pagination {
        hasNext
        lastId
      }
    }
  }

  ${ProfileRecipes.fragments.myRecipe}
`
