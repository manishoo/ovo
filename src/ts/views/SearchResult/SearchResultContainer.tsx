/*
 * SearchResultContainer.tsx
 * Copyright: Ouranos Studio 2019
 */

import AppConfig from '@App/AppConfig'
import IngredientCard from '@Common/IngredientCard/IngredientCard'
import { SearchResultQuery, SearchResultQueryVariables } from '@Views/SearchResult/types/SearchResultQuery'
import gql from 'graphql-tag'
// @ts-ignore
import qs from 'qs'
import RX from 'reactxp'
import SearchResult from './SearchResult'
import { Query } from 'react-apollo'


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


export interface SearchResultParameters {
  q?: string
}

export default class SearchResultContainer extends RX.Component {
  parameters: SearchResultParameters = {
    q: '',
  }

  componentWillMount(): void {
    if (AppConfig.getPlatformType() === 'web') {
      let q

      if (location.search) {
        if (location.search[0] === '?') {
          q = location.search.replace('?', '')
        }

        const parsedQS = qs.parse(q)
        this.parameters.q = String(parsedQS.q)
      }
    }
  }

  public render() {
    return (
      <Query<SearchResultQuery, SearchResultQueryVariables>
        query={SEARCH_RESULT_RECIPES_QUERY}
        variables={{
          nameSearchQuery: '',
        }}
        fetchPolicy={'cache-and-network'}
        returnPartialData={true}
      >
        {(data) => (
          <SearchResult
            parameters={this.parameters}
            recipesData={data}
          />
        )}
      </Query>
    )
  }
}

