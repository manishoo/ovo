/*
 * AppSearchComponent.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import ExploreSearch from '@Views/ExploreSearch/ExploreSearch'
import { SearchResultQueryVariables } from '@Views/SearchResult/types/SearchResultQuery'
import { useState } from 'react'
import RX from 'reactxp'


const AppSearchComponent = ({ onSubmit, inputRef }: any) => {
  const defaultState = { nameSearchQuery: '' }
  const [variables, setVariables] = useState<SearchResultQueryVariables>(defaultState)

  return (
    <ExploreSearch
      ref={inputRef}
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
