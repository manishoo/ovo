/*
 * AppSearchComponent.tsx
 * Copyright: Ouranos Studio 2019
 */

import { useState } from 'react'
import RX from 'reactxp'
import ExploreSearch from 'src/ts/views/ExploreSearch/ExploreSearch'
import { SearchResultQueryVariables } from 'src/ts/views/SearchResult/types/SearchResultQuery'


const AppSearchComponent = ({ onSubmit }) => {
  const defaultState = { nameSearchQuery: '' }
  const [variables, setVariables] = useState<SearchResultQueryVariables>(defaultState)

  return (
    <ExploreSearch
      ref={(ref: any) => this._searchInput = ref}
      variables={{
        nameSearchQuery: variables.nameSearchQuery,
      }}
      onChange={variables => setVariables(variables)}
      onSubmit={() => {
        onSubmit()
        setVariables(defaultState)
      }}
    />
  )
}

export default AppSearchComponent
