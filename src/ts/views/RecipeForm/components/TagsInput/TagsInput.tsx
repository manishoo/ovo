/*
 * TagsInput.tsx
 * Copyright: Ouranos Studio 2019
 */

import Text from 'common/Text/Text'
import gql from 'graphql-tag'
import { Query, QueryResult } from 'react-apollo'
import RX from 'reactxp'
import { Tag } from 'src/ts/models/FoodModels'
import { TagFragment } from 'src/ts/models/GraphQLModels'

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

	private _renderContent = ({ data, loading, error }: QueryResult) => {
		const { style } = this.props

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
}

const styles = {
	container: RX.Styles.createViewStyle({
		//
	}),
}
