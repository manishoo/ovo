/*
 * AddMealItemDialog.tsx
 * Copyright: Ouranos Studio 2019
 */


import FlatButton from 'common/FlatButton/FlatButton'
import Glass from 'common/Glass/Glass'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import RX from 'reactxp'
import { VirtualListView } from 'reactxp-virtuallistview'
import client from 'src/ts/app/client'
import theme from 'src/ts/app/Theme'
import FoodPreview from './FoodPreview'

interface AddMealItemDialogProps {
	style?: any,
	onDismiss: () => void,
}

interface AddMealItemDialogState {
	searchText: string,
	searchResults: SearchResultItem[],
	selectedItem?: SearchResultItem,
}

export interface SearchResultItem {
	id: string,
	title: string,
	type: 'recipe' | 'food' | 'dish',
	subtitle?: string,
	imageUrl?: string,
	height: number,
	template: string,
	key: any
}

export default class AddMealItemDialog extends RX.Component<AddMealItemDialogProps, AddMealItemDialogState> {
	textInput: any
	preview: any
	inputContainerAnimatedHeight: RX.Animated.Value = RX.Animated.createValue(50)
	opacityAnimatedValue: RX.Animated.Value = RX.Animated.createValue(0)

	constructor(props: AddMealItemDialogProps) {
		super(props)

		this.state = {
			searchText: '',
			searchResults: [],
		}
	}

	componentDidMount(): void {
		RX.Animated.timing(this.opacityAnimatedValue, {
			toValue: 1,
			duration: 200,
			easing: RX.Animated.Easing.Out()
		}).start(() => {
			this.textInput.focus()
		})
	}

	dismiss = () => {
		const { onDismiss } = this.props

		RX.Animated.timing(this.opacityAnimatedValue, {
			toValue: 0,
			duration: 200,
			easing: RX.Animated.Easing.In()
		}).start(() => {
			RX.Modal.dismiss('addMealItem')
			onDismiss()
		})
	}

	onTextChange = (refetch: () => any) => (value: string) => {
		this.setState({
			searchText: value,
		})
	}

	onResultPress = (item: SearchResultItem) => () => {
		this.setState({
			selectedItem: item,
		}, () => {
			this.preview.focus()
		})

		RX.Animated.timing(this.inputContainerAnimatedHeight, {
			duration: 400,
			toValue: 400,
			easing: RX.Animated.Easing.Out(),
		}).start()
	}

	cancelSelection = () => {
		this.setState({
			selectedItem: undefined,
		})
		RX.Animated.timing(this.inputContainerAnimatedHeight, {
			duration: 200,
			toValue: 50,
			easing: RX.Animated.Easing.Out(),
		}).start()
	}

	renderPreview = (item: SearchResultItem) => {
		if (!item) return null

		switch (item.type) {
			default:
			case 'food':
				return (
					<FoodPreview
						item={item}
						inputRef={(ref: any) => this.preview = ref}
						onDismiss={this.cancelSelection}
					/>
				)
			case 'recipe':
				return (
					<RX.View>

					</RX.View>
				)
			case 'dish':
				return null
		}
	}

	render() {
		const { style } = this.props

		return (
			<RX.View>
				<RX.Animated.View
					style={{
						opacity: this.opacityAnimatedValue
					}}
				>
					<Query
						query={SEARCH_MEAL_ITEMS}
						client={client}
						skip={!this.state.searchText}
						variables={{
							q: this.state.searchText,
						}}
					>
						{({ data, refetch }) => (
							(
								<Glass
									blurType='xlight'
									style={[styles.container, style]}
								>
									<RX.View
										onPress={this.dismiss}
										style={styles.cancelButton}
									>
										<RX.Text style={styles.cancelText}>Back</RX.Text>
									</RX.View>
									<RX.Animated.View
										style={[
											styles.inputContainer,
											{
												height: this.inputContainerAnimatedHeight,
											}
										]}
									>
										{
											!this.state.selectedItem &&
                      <RX.TextInput
                        ref={(ref: any) => this.textInput = ref}
                        value={this.state.searchText}
                        onChangeText={this.onTextChange(refetch)}
                        style={styles.textInput}
                        placeholder={getLocalizedText('mealItemExample')}
                      />
										}

										{this.state.selectedItem && this.renderPreview(this.state.selectedItem)}
									</RX.Animated.View>

									{
										(() => {
											if (!this.state.selectedItem) {
												if (!this.state.searchText) {
													return [
														<FlatButton
															label={'Browse Foods & Recipes'}
															onPress={() => {
																//
															}}
															style={{ borderWidth: 0, marginTop: 10, }}
															labelStyle={{ color: theme.colors.secondary, fontSize: 16 }}
														/>,
														<FlatButton
															label={'Create A New Dish'}
															onPress={() => {
																//
															}}
															style={{ borderWidth: 0 }}
															labelStyle={{ color: theme.colors.secondary, fontSize: 16 }}
														/>,
													]
												}

												if (data && data.searchMealItems) {
													return (
														<VirtualListView
															keyboardShouldPersistTaps
															// keyboardDismissMode={'none'}
															itemList={data.searchMealItems.map((i: any) => ({
																...i,
																height: 40,
																template: '_mealItem',
																key: i.id,
															}))}
															renderItem={this._renderSearchResultItem}
														/>
													)
												}
											}

											return null
										})()
									}
								</Glass>
							)
						)}
					</Query>

				</RX.Animated.View>
			</RX.View>
		)
	}

	_renderSearchResultItem = (item: SearchResultItem) => {
		return (
			<RX.View
				style={styles.searchResultItemContainer}
				onPress={this.onResultPress(item)}
			>
				<RX.Text>
					{item.title}
				</RX.Text>
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		width: RX.UserInterface.measureWindow().width,
		height: RX.UserInterface.measureWindow().height,
		paddingTop: 100,
		padding: 20,
	}),
	inputContainer: RX.Styles.createViewStyle({
		alignSelf: 'stretch',
		borderRadius: 10,
		backgroundColor: '#fff',
		borderColor: '#f5f5f5',
		borderWidth: 1,
		paddingHorizontal: 10,
		justifyContent: 'center',
		// alignItems: 'center',
	}),
	textInput: RX.Styles.createTextInputStyle({
		borderBottomWidth: 0,
		flex: 1,
	}),
	cancelButton: RX.Styles.createViewStyle({
		width: 40,
		height: 40,
		position: 'absolute',
		top: 40,
		left: 20,
	}),
	cancelText: RX.Styles.createTextStyle({
		color: theme.colors.inputLabel
	}),
	searchResultItemContainer: RX.Styles.createViewStyle({
		height: 40,
		borderBottomWidth: 1,
		borderColor: '#eee',
		justifyContent: 'center',
	}),
}

const SEARCH_MEAL_ITEMS = gql`
	query SearchMealItemsQuery($q: String!) {
		searchMealItems(q: $q) {
			id
			title
		}
	}
`
