/*
 * SearchResultContainer.tsx
 * Copyright: Ouranos Studio 2019
 */

import qs from 'qs'
import RX from 'reactxp'
import AppConfig from 'src/ts/app/AppConfig'
import SearchResult from './SearchResult'


export interface SearchResultParameters {
  q: string
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
      <SearchResult
        parameters={this.parameters}
      />
    )
  }
}
