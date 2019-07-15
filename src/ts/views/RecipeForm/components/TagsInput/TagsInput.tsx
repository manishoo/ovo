/*
 * TagsInput.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import {Query, QueryResult} from 'react-apollo'
import gql from 'graphql-tag'
import {TagFragment} from 'src/ts/models/GraphQLModels'
import Text from 'common/Text'
import {Tag} from 'src/ts/models/FoodModels'
// import Input from 'common/Input'

interface TagsInputProps {
	style?: any,
	selectedTags: string[],
	onTagsChange: (selectedTags: string[]) => void,
}

export default class TagsInput extends RX.Component<TagsInputProps> {
	render() {
		return (
			<Query
				query={gql`
					query TagsInputQuery {
						getTags ${TagFragment}
					}
				`}
			>
				{this._renderContent}
			</Query>
		)
	}

	private _renderContent = ({data, loading, error}: QueryResult) => {
		const {style} = this.props

		if (error) {
			console.error(error)
			return null
		}

		if (!data && loading) {
			return this._renderLoading()
		}

		return (
			<RX.View style={[styles.container, style]}>
				{
					data.getTags.map((tag: Tag) => (
						<Text>{tag.title}.</Text>
					))
				}
				{loading && this._renderLoading()}
			</RX.View>
		)
	}

	private _renderLoading = () => {
		return (
			<Text>Loading</Text>
		)
	}

	// private _renderTagForm = () => {
	// 	return (
	// 		<RX.View>
	// 			<Input label={'slug'} value={this.state.slug} onChange={this._onChange('slug')}/>
	// 			<Input label={'title'} value={this.state.title} onChange={this._onChange('title')}/>
	//
	// 		</RX.View>
	// 	)
	// }
}

const styles = {
	container: RX.Styles.createViewStyle({
		//
	}),
}
