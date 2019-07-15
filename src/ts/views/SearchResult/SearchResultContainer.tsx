/*
 * SearchResultContainer.web.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
// import qs from 'query-string'
import SearchResult from './SearchResult'
import AppConfig from 'src/ts/app/AppConfig'

export interface SearchResultParameters {
	q: string
}

export default class SearchResultContainer extends RX.Component {
	parameters: SearchResultParameters = {
		q: '',
	}

	componentWillMount(): void {
		if (AppConfig.getPlatformType() === 'web') {
			//FIXME
			// if (location.search) {
			// 	const parsedQS = qs.parse(location.search)
			// 	this.parameters.q = String(parsedQS.q)
			// }
		}
	}

	render() {
		return (
			<SearchResult
				parameters={this.parameters}
			/>
		)
	}
}
