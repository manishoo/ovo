/*
 * SearchResultRecipes.tsx
 * Copyright: Ouranos Studio 2019
 */

import client from '@App/client'
import IngredientCard from '@Common/IngredientCard/IngredientCard'
import RecipesList from '@Common/RecipesList/RecipesList'
import UserStore from '@Services/UserService'
import { Me } from '@Services/types/Me'
import {
  SearchResultQuery,
  SearchResultQuery_recipes_recipes,
  SearchResultQueryVariables
} from '@Views/SearchResult/types/SearchResultQuery'
import gql from 'graphql-tag'
import RX from 'reactxp'
import { ComponentBase } from 'resub'


interface SearchResultRecipesProps {
  onHeightChange: (height: number) => void,
  variables?: SearchResultQueryVariables,
}

interface SearchResultRecipesState {
  recipes: SearchResultQuery_recipes_recipes[],
  hasNext?: boolean,
  me: Me | null,
  fetching: boolean
}

export default class SearchResultRecipes extends ComponentBase<SearchResultRecipesProps, SearchResultRecipesState> {
  componentDidMount() {
    this.fetchMore(this.props.variables, true)
  }

  public render() {
    return (
      <RecipesList
        recipes={this.state.recipes}
        onLayout={e => this.props.onHeightChange(e.height)}
      />
    )
  }

  public fetchMore = async (variables?: SearchResultQueryVariables, refetch?: boolean) => {
    if (this.state.fetching) return

    if (!refetch) {
      if (!this.state.hasNext && this.state.recipes.length > 0) return
    }

    let lastId: any

    const lastItem = this.state.recipes[this.state.recipes.length - 1]
    if (lastItem) {
      lastId = lastItem.id
    }

    return new Promise(((resolve, reject) => {
      this.setState({ fetching: true }, () => {
        client.query<SearchResultQuery, SearchResultQueryVariables>({
          query: SEARCH_RESULT_RECIPES_QUERY,
          fetchPolicy: 'network-only',
          variables: {
            nameSearchQuery: '',
            ...this.props.variables,
            ...variables,
            lastId: refetch ? null : lastId,
          },
        })
          .then(({ data }) => {
            if (data) {
              this.setState({
                fetching: false,
                recipes: refetch ? data.recipes.recipes : [
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

  protected _buildInitialState(): Readonly<SearchResultRecipesState> {
    return {
      recipes: [],
      me: UserStore.getUser(),
      fetching: false,
    }
  }
}

export const SEARCH_RESULT_RECIPES_QUERY = gql`
  query SearchResultQuery($nameSearchQuery: String!, $lastId: ObjectId, $tags: [String!]) {
    recipes(nameSearchQuery: $nameSearchQuery, lastId: $lastId, tags: $tags) {
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
