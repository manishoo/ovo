/*
 * ExploreSearch.tsx
 * Copyright: Ouranos Studio 2019
 */

import Input from 'common/Input/Input'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { navigate } from 'src/ts/utilities'
import Keys from 'src/ts/utilities/KeyCodes'

interface ExploreSearchProps {
	style?: any,
	onSubmit: () => void,
}

interface ExploreSearchState {
	searchQuery: string,
}

export default class ExploreSearch extends RX.Component<ExploreSearchProps, ExploreSearchState> {
	state = {
		searchQuery: ''
	}
	_input: any

	render() {
		const { style } = this.props

		return (
			<RX.View
				style={[styles.container, style]}
			>
				<Input
					inputRef={(ref: any) => this._input = ref}
					autoFocus
					value={this.state.searchQuery}
					onChange={searchQuery => this.setState({ searchQuery })}
					placeholder={getLocalizedText('SearchRecipes')}
					onKeyPress={(e) => {
						if (e.keyCode === Keys.Return) {
							// FIXME FOR NATIVE
							this.props.onSubmit()
							navigate(this.props, `/recipes/?q=${this.state.searchQuery}`)
							this.setState({ searchQuery: '' })
						}
					}}
					textInputStyle={{
						fontSize: Styles.fontSizes.size16,
					}}
				/>
			</RX.View>
		)
	}

	public focus = () => this._input.focus()
}

const styles = {
	container: RX.Styles.createViewStyle({}),
}
