/*
 * _FoodPreview.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import FilledButton from 'common/FilledButton'
import theme from 'src/ts/app/Theme'
import Input from 'common/Input'
import Image from 'common/Image/Image'
import Text from 'common/Text'
import {getLocalizedText} from 'common/LocalizedText'
import {Food, MealItem, Weight} from 'src/ts/models/FoodModels'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import {FoodFragment} from 'src/ts/models/GraphQLModels'
import client from 'src/ts/app/client'

const TEXT_HEADING_WIDTH = 200

interface FoodPreviewProps {
	style?: any,
	onDismiss: () => any,
	inputRef: (ref: any) => any,
	item: MealItem,
	onSelectPress: (weights: Weight[]) => void,
	selectedWeight?: Weight,
	onSubmit: (food: Food, amount: number, weight?: Weight) => void,
	height: number
}

interface FoodPreviewState {
	amount: number,
}

export default class FoodPreview extends RX.Component<FoodPreviewProps, FoodPreviewState> {
	constructor(props: FoodPreviewProps) {
		super(props)

		this.state = {
			amount: 1,
		}
	}

  render() {
		const {style} = this.props

    return (
			<Query
				client={client}
				variables={{
					id: this.props.item.id,
				}}
				query={gql`
					query FoodPreviewQuery($id: String!) {
						getFoodVariety(id: $id) ${FoodFragment}
					}
				`}
			>
				{({data, loading}) => (
					<RX.View
						style={[styles.previewContainer, style]}
					>
						{this._renderContent(data, loading)}

						<RX.View
							onPress={this._dismiss}
							style={styles.cancelSelectedMealContainer}
						>
							<Text translate style={styles.cancelText}>Cancel</Text>
						</RX.View>
					</RX.View>
				)}
			</Query>
    )
  }

	private _renderContent = (data: { getFoodVariety: Food }, loading: boolean) => {
		if (loading) {
			return this._renderLoading()
		}

		if (!data) {
			return this._renderNotAvailable()
		}

		return this._renderAmountSelection(data.getFoodVariety)
	}

	private _renderLoading = () => {
		return (
			<Text translate>Loading</Text>
		)
	}

	private _renderAmountSelection = (food: Food) => {
		const {inputRef} = this.props

		return [
			<RX.View
				style={styles.firstRow}
			>
				<Image
					source={food.thumbnail ? food.thumbnail.url : ''}
					style={styles.imageStyle}
					resizeMode={'cover'}
				/>
				<RX.View>
					<RX.View
						style={styles.textHeadingContainer}
					>
						<RX.Text
							style={styles.bigTitle}
						>{food.name}</RX.Text>
					</RX.View>
					<RX.Text
						style={styles.subtitle}
					>{food.foodGroup.map(i => i.name).join(', ')}</RX.Text>
				</RX.View>
			</RX.View>,
			<RX.View
				style={styles.secondRow}
			>
				<RX.View
					style={styles.flex1}
				>
					<Input
						autoFocus
						inputRef={inputRef}
						value={String(this.state.amount)}
						onChange={(amount: string) => this.setState({amount: Number(amount)})}
						label={getLocalizedText('Amount')}
						keyboardType={'number-pad'}
					/>
					<Text translate style={styles.label}>Unit</Text>
					<RX.View style={styles.selectContainer} onPress={() => this.props.onSelectPress(food.weights || [])} activeOpacity={0.4}>
						<RX.Text>{this.getSelectedWeight()}</RX.Text>
					</RX.View>
				</RX.View>
				<RX.View
					style={styles.chartContainer}
				>
					<RX.Text
						style={styles.chartTextContainer}
					>MacroNutrients Chart</RX.Text>
				</RX.View>
			</RX.View>,
			<FilledButton
				label='Add to Meal'
				onPress={this.onSubmit(food)}
				containerStyle={styles.addToMeal}
			/>
		]
	}

	private _renderNotAvailable = () => {
  	return (
  		<RX.View>
				<Text>This food is not available</Text>
			</RX.View>
		)
	}

	private _dismiss = () => {
		this.props.onDismiss()
	}

	getSelectedWeight = () => {
		if (this.props.selectedWeight) {
			return this.props.selectedWeight.description
		}

		return getLocalizedText('g')
	}

	onSubmit = (food: Food) => () => {
		return this.props.onSubmit(
			food,
			this.state.amount,
			this.props.selectedWeight,
		)
	}
}

const styles = {
	previewContainer: RX.Styles.createViewStyle({
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		padding: theme.styles.spacing,
		// paddingTop: 70,
	}),
	cancelSelectedMealContainer: RX.Styles.createViewStyle({
		position: 'absolute',
		[theme.styles.end]: theme.styles.spacing,
		top: theme.styles.spacing,
		// width: 50,
		// height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.styles.spacing,
		cursor: 'pointer',
	}),
	cancelText: RX.Styles.createTextInputStyle({
		color: theme.colors.primary,
		fontWeight: 'bold',
	}),
	firstRow: RX.Styles.createViewStyle({
		flexDirection: 'row',
		paddingTop: 0,
	}),
	textHeadingContainer: RX.Styles.createViewStyle({
		// flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		[theme.styles.marginEnd]: 50
	}),
	bigTitle: RX.Styles.createTextStyle({
		fontSize: 25,
		width: TEXT_HEADING_WIDTH,
		// wordBreak: 'break-word',
		top: 2
	}),
	smallTitle: RX.Styles.createTextStyle({
		color: 'red',
	}),
	subtitle: RX.Styles.createTextStyle({
		fontSize: 12,
		color: theme.colors.subtitle,
	}),
	secondRow: RX.Styles.createViewStyle({
		flexDirection: 'row',
		// alignItems: 'flex-end',
	}),
	flex1: RX.Styles.createViewStyle({
		flex: 1,
	}),
	chartContainer: RX.Styles.createViewStyle({
		flex: 1,
		borderColor: '#eee',
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 120,
		borderRadius: 10,
		marginLeft: 20,
	}),
	chartTextContainer: RX.Styles.createTextStyle({
		fontSize: 12,
		color: theme.colors.subtitle,
		width: 100,
		textAlign: 'center',
	}),
	previewStyle: RX.Styles.createImageStyle({
		width: 80,
		height: 80,
		marginRight: 16,
		borderRadius: 20,
		backgroundColor: '#eee'
	}),
	addToMeal: RX.Styles.createViewStyle({
		marginTop: theme.styles.spacing,
		flex: 1,
	}),
	label: RX.Styles.createTextStyle({
		color: theme.colors.labelInput,
		fontWeight: '500',
	}),
	selectContainer: RX.Styles.createViewStyle({
		padding: 5,
		backgroundColor: '#dddddd',
		borderRadius: 5,
		marginTop: 5,
	}),
	imageStyle: RX.Styles.createImageStyle({
		width: 80,
		height: 80,
		borderRadius: 40,
		backgroundColor: '#ddd',
		marginBottom: theme.styles.spacing,
		[theme.styles.marginEnd]: theme.styles.spacing,
	}),
	foodVarietyRow: RX.Styles.createViewStyle({
		padding: theme.styles.spacing,
		borderBottomWidth: 1,
		borderColor: theme.colors.previewRowBorderColor,
		cursor: 'pointer',
	})
}
