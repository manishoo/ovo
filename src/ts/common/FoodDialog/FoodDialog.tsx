/*
 * FoodDialog.tsx
 * Copyright: Ouranos Studio 2019
 */


import FlatButton from 'common/FlatButton/FlatButton'
import Image from 'common/Image/Image'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import SelectDialog from 'common/Select/components/SelectDialog'
import Text from 'common/Text/Text'
import gql from 'graphql-tag'
import ImageSource from 'modules/images'
import { Query } from 'react-apollo'
import RX from 'reactxp'
import { VirtualListView, VirtualListViewItemInfo } from 'reactxp-virtuallistview'
import { ComponentBase } from 'resub'
import client from 'src/ts/app/client'
import Styles from 'src/ts/app/Styles'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { Food, FoodTypes, MealItem, Weight } from 'src/ts/models/FoodModels'
import { MealItemFragment } from 'src/ts/models/GraphQLModels'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import { fullHeight } from 'src/ts/utilities'
import FoodPreview from './components/FoodPreview'

const WINDOW_MAX_WIDTH = 500
const INNER_CONTAINER_HEIGHT = 500

interface FoodDialogProps {
	style?: any,
	onDismiss: () => void,
	autoFocus: boolean,
	foodTypes: FoodTypes[],
	onSubmit: (mealItem: MealItem, amount: number, weight?: Weight) => void,
}

interface FoodDialogState {
	width?: number,
	height?: number,
	searchText: string,
	searchResults: MealItem[],
	selectedItem?: MealItem,

	weights: Weight[],
	selectedWeight?: Weight,
	selectDialogVisible: boolean,
}

export const MODAL_ID = 'foodDialog'

export function showFoodModal(props: FoodDialogProps) {
	RX.Modal.show(
		<FoodDialog
			{...props}
		/>,
		MODAL_ID,
	)
}

export default class FoodDialog extends ComponentBase<FoodDialogProps & RX.CommonProps, FoodDialogState> {
	textInput: any
	preview: any
	inputContainerAnimatedHeight = RX.Animated.createValue(50)
	_opacityAnimatedValue = RX.Animated.createValue(fullHeight())
	_containerAnimationStyle = RX.Styles.createAnimatedViewStyle({
		transform: [{ translateY: this._opacityAnimatedValue }],
	})

	constructor(props: FoodDialogProps) {
		super(props)

		this.state = {
			searchText: '',
			searchResults: [],
			selectDialogVisible: false,
			weights: [],
		}
	}

  render() {
		const { style } = this.props

    return (
			<ThemeContext.Consumer>
				{({ theme }) => (
					<RX.View>
						<RX.Animated.View
							style={[
								this._containerAnimationStyle
							]}
						>
							<Query
								query={gql`
							query SearchMealItemsQuery($q: String!) {
								searchMealItems(q: $q) ${MealItemFragment}
							}
						`}
								client={client}
								skip={!this.state.searchText}
								variables={{
									q: this.state.searchText,
								}}
							>
								{({ data }) => (
									(
										<RX.View
											style={[
												styles.container,
												{ backgroundColor: theme.colors.white },
												{
													width: this.state.width,
													height: this.state.height,
												},
												style,
											]}
										>
											<RX.View style={[styles.innerContainer, { width: this.state.width }]}>
												<RX.Animated.View
													style={[
														styles.inputContainer,
														{ backgroundColor: theme.colors.foodDialogSearchBG },
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
                              onChangeText={this._onTextChange}
                              style={styles.textInput}
                              placeholder={getLocalizedText('mealItemExample')}
                            />
													}

													{this.state.selectedItem && this._renderPreview(this.state.selectedItem)}
												</RX.Animated.View>

												{
													(() => {
														if (!this.state.selectedItem) {
															if (!this.state.searchText) {
																// return [
																// 	<FlatButton
																// 		label={'Browse Foods & Recipes'}
																// 		onPress={() => {
																// 			//
																// 		}}
																// 		style={{borderWidth: 0, marginTop: 10,}}
																// 		labelStyle={{color: theme.colors.secondary, fontSize: 16}}
																// 	/>,
																// 	<FlatButton
																// 		label={'Create A New Dish'}
																// 		onPress={() => {
																// 			//
																// 		}}
																// 		style={{borderWidth: 0}}
																// 		labelStyle={{color: theme.colors.secondary, fontSize: 16}}
																// 	/>,
																// ]
															}

															if (data && data.searchMealItems && data.searchMealItems.length === 0) {
																return (
																	<FlatButton
																		label={getLocalizedText('createX', { name: this.state.searchText })}
																		onPress={() => {
																			const key = String(Math.random())
																			this.props.onSubmit({
																				key,
																				title: this.state.searchText,
																				type: 'food',
																				// height: 40,
																				// template: '_mealItem',
																				customUnit: getLocalizedText('g'),
																				weights: [],
																				slug: key,
																			}, 1)
																			this.dismiss()
																		}}
																		style={{ borderWidth: 0, marginTop: 10, }}
																	/>
																)
															}

															if (data && data.searchMealItems) {
																return (
																	<VirtualListView
																		style={{
																			marginTop: Styles.values.spacing,
																		}}
																		keyboardShouldPersistTaps
																		itemList={data.searchMealItems.map((i: any) => ({
																			...i,
																			height: 40,
																			template: '_mealItem',
																			key: i.id,
																		}))}
																		renderItem={this._renderMealItem}
																	/>
																)
															}
														}

														return null
													})()
												}
											</RX.View>

											<RX.View
												onPress={this.dismiss}
												style={styles.cancelButton}
											>
												<Image
													source={ImageSource.CrossIcon}
													style={styles.cancelIcon}
													resizeMode={'cover'}
												/>
											</RX.View>
										</RX.View>
									)
								)}
							</Query>
						</RX.Animated.View>

						{this.renderSelectDialog()}
					</RX.View>
				)}
			</ThemeContext.Consumer>
    )
  }

	componentDidMount(): void {
		RX.Animated.timing(this._opacityAnimatedValue, {
			toValue: 0,
		}).start(() => {
			this.textInput.focus()
		})
	}

	renderSelectDialog = () => {
		if (!this.state.selectedItem) return null
		if (!this.state.selectDialogVisible) return null

		return (
			<SelectDialog
				options={[
					{ value: 'g', text: 'gram' },
					...this.state.weights.map(w => ({
						text: w.description,
						value: w.id,
					})),
				]}
				onOptionSelect={option => this.setState({ selectedWeight: this.state.weights.find(p => p.id === option.value) })}
				onDismiss={() => this.setState({ selectDialogVisible: false })}
			/>
		)
	}

	_renderMealItem = (item: VirtualListViewItemInfo & MealItem) => {
		return (
			<RX.View
				style={styles.searchResultItemContainer}
				onPress={this._onResultPress(item)}
			>
				<Text>
					{item.title}
				</Text>
				<Text style={{ color: '#e4e4e4' }}>
					{item.subtitle}
				</Text>
			</RX.View>
		)
	}

	dismiss = () => {
		const { onDismiss } = this.props

		RX.Animated.timing(this._opacityAnimatedValue, {
			toValue: this.state.height || fullHeight(),
		}).start(() => {
			RX.Modal.dismiss(MODAL_ID)
			onDismiss()
		})
	}

	protected _buildState(props: FoodDialogProps, initialBuild: boolean): Partial<FoodDialogState> | undefined {
		return {
			width: ResponsiveWidthStore.getWidth(),
			height: ResponsiveWidthStore.getHeight(),
		}
	}

	private _renderPreview = (item: MealItem) => {
		if (!item) return null

		switch (item.type) {
			case FoodTypes.recipe:
				return (
					<RX.View>

					</RX.View>
				)
			case FoodTypes.food:
			default:
				return (
					<FoodPreview
						item={item}
						inputRef={(ref: any) => this.preview = ref}
						onDismiss={this._cancelSelection}
						selectedWeight={this.state.selectedWeight}
						onSelectPress={(weights) => this.setState({ selectDialogVisible: true, weights })}
						onSubmit={this._onSubmit}
						height={INNER_CONTAINER_HEIGHT}
					/>
				)
		}
	}

	private _onTextChange = (value: string) => {
		this.setState({
			searchText: value,
		})
	}

	private _onResultPress = (item: MealItem) => () => {
		this.setState({
			selectedItem: item,
		}, () => {
			// this.preview.focus() FIXME
		})

		RX.Animated.timing(this.inputContainerAnimatedHeight, {
			toValue: INNER_CONTAINER_HEIGHT,
			duration: 400,
			easing: RX.Animated.Easing.Out(),
		}).start()
	}

	private _cancelSelection = () => {
		RX.Animated.timing(this.inputContainerAnimatedHeight, {
			toValue: 50,
			duration: 200,
			easing: RX.Animated.Easing.Out(),
		}).start(() => {
			this.setState({
				selectedItem: undefined,
			})
		})
	}

	private _onSubmit = (food: Food, amount: number, weight?: Weight) => {
		if (!this.state.selectedItem) return null
		const id = String(Math.random())
		this.props.onSubmit({
			title: food.name,
			weights: food.weights || [],
			key: id,
			type: 'food',
			thumbnail: food.thumbnail,
			id: food.id,
			subtitle: food.foodGroup.join(', '),
			slug: food.id,
		}, amount, weight)
		return this.dismiss()
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		paddingTop: 80,
		padding: 20,
		alignItems: 'center',
	}),
	innerContainer: RX.Styles.createViewStyle({
		maxWidth: WINDOW_MAX_WIDTH,
	}),
	inputContainer: RX.Styles.createViewStyle({
		alignSelf: 'stretch',
		borderRadius: 10,
		paddingHorizontal: 10,
		marginTop: 60,
		justifyContent: 'center',
	}),
	textInput: RX.Styles.createTextInputStyle({
		borderBottomWidth: 0,
		flex: 1,
		backgroundColor: 'transparent',
	}),
	cancelButton: RX.Styles.createViewStyle({
		position: 'absolute',
		top: Styles.values.spacing,
		left: Styles.values.spacing,
		padding: Styles.values.spacing,
		cursor: 'pointer',
	}),
	cancelIcon: RX.Styles.createImageStyle({
		width: 20,
		height: 20,
	}),
	searchResultItemContainer: RX.Styles.createViewStyle({
		height: 40,
		borderBottomWidth: 1,
		borderColor: '#eee',
		justifyContent: 'center',
		cursor: 'pointer',
	}),
}
