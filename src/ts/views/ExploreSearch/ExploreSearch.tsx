/*
 * ExploreSearch.tsx
 * Copyright: Ouranos Studio 2019
 *
 * User types something. gets autocomplete. selects an item or enters on input. jumps to search results page.
 */

import RX from 'reactxp'
import Input from 'common/Input'
import {getLocalizedText} from 'common/LocalizedText'
import theme from 'src/ts/app/Theme'
import Keys from 'src/ts/utilities/KeyCodes'
import {navigate} from 'src/ts/utilities'

interface ExploreSearchProps {
	style?: any,
	onSubmit: () => void,
}

interface ExploreSearchState {
	searchQuery: string,
}

export default class ExploreSearch extends RX.Component<ExploreSearchProps, ExploreSearchState> {
	render() {
		const {style} = this.props

		return (
			<RX.View
				style={[styles.container, style]}
			>
				<Input
					inputRef={(ref: any) => this._input = ref}
					autoFocus
					value={this.state.searchQuery}
					onChange={searchQuery => this.setState({searchQuery})}
					placeholder={getLocalizedText('SearchRecipes')}
					onKeyPress={(e) => {
						if (e.keyCode === Keys.Return) {
							// FIXME FOR NATIVE
							this.props.onSubmit()
							navigate(this.props, `/recipes/?q=${this.state.searchQuery}`)
							this.setState({searchQuery: ''})
						}
					}}
					textInputStyle={{
						fontSize: theme.fontSizes.size16,
					}}
				/>
			</RX.View>
		)
	}

	public focus = () => this._input.focus()

	state = {
		searchQuery: ''
	}
	_input: any
}

const styles = {
	container: RX.Styles.createViewStyle({

	}),
}
