/*
 * ReviewRecipes.tsx
 * Copyright: Ouranos Studio 2019
 */

import client from '@App/client'
import RecipesList from '@Common/RecipesList/RecipesList'
import UserStore from '@Services/UserStore'
import { ReviewRecipesFragments } from '@Views/ProfileScreen/components/ReviewRecipes/ReviewRecipesFragments'
import {
  ReviewRecipesQuery,
  ReviewRecipesQuery_recipes_recipes,
  ReviewRecipesQueryVariables
} from '@Views/ProfileScreen/components/ReviewRecipes/types/ReviewRecipesQuery'
import { Me } from '@Views/Register/types/Me'
import gql from 'graphql-tag'
import RX from 'reactxp'
import { ComponentBase } from 'resub'


interface ReviewRecipesProps {
  userId: string,
  onHeightChange: (height: number) => void,
}

interface ReviewRecipesState {
  recipes: ReviewRecipesQuery_recipes_recipes[],
  hasNext?: boolean,
  me: Me,
  fetching: boolean,
}

export default class ReviewRecipes extends ComponentBase<ReviewRecipesProps, ReviewRecipesState> {
  componentDidMount() {
    this.fetchMore()
  }

  public render() {
    return (
      <RecipesList
        recipes={this.state.recipes}
        onLayout={e => this.props.onHeightChange(e.height)}
        loading={this.state.fetching}
      />
    )
  }

  public fetchMore = () => {
    if (!this.state.hasNext && this.state.recipes.length > 0) return null
    if (this.state.fetching) return null

    let lastId

    const lastItem = this.state.recipes[this.state.recipes.length - 1]
    if (lastItem) {
      lastId = lastItem.id
    }

    return new Promise(((resolve, reject) => {
      this.setState({ fetching: true }, () => {
        client.query<ReviewRecipesQuery, ReviewRecipesQueryVariables>({
          query: REVIEW_RECIPES_QUERY,
          variables: {
            size: 20,
            lastId
          },
        })
          .then(({ data }) => {
            if (data) {
              this.setState({
                fetching: false,
                recipes: [
                  ...this.state.recipes,
                  ...data.recipes.recipes
                ],
                hasNext: data.recipes.pagination.hasNext,
              }, resolve)
            }
          })
          .catch(reject)
      })
    }))
  }

  protected _buildInitialState(): Readonly<ReviewRecipesState> {
    return {
      recipes: [],
      me: UserStore.getUser(),
      fetching: false,
    }
  }
}

export const REVIEW_RECIPES_QUERY = gql`
  query ReviewRecipesQuery($lastId: ObjectId, $size: Int) {
    recipes(lastId: $lastId, size: $size, status: review) {
      recipes {
        ...MyRecipe
      }
      pagination {
        hasNext
        lastId
      }
    }
  }

  ${ReviewRecipesFragments.myRecipe}
`
