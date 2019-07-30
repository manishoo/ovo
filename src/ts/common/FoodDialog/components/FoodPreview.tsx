/*
 * FoodPreview.tsx
 * Copyright: Ouranos Studio 2019
 */


import FilledButton from 'common/FilledButton/FilledButton'
import Image from 'common/Image/Image'
import Input from 'common/Input/Input'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import Text from 'common/Text/Text'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import RX from 'reactxp'
import client from 'src/ts/app/client'
import Styles from 'src/ts/app/Styles'
import { Theme } from 'src/ts/app/Theme'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { Food, MealItem, Weight } from 'src/ts/models/FoodModels'
import { FoodFragment } from 'src/ts/models/GraphQLModels'

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
		const { style } = this.props

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
				{({ data, loading }) => (
					<ThemeContext.Consumer>
						{({ theme }) => (
							<RX.View
								style={[styles.previewContainer, style]}
							>
								{this._renderContent(theme, data, loading)}

								<RX.View
									onPress={this._dismiss}
									style={styles.cancelSelectedMealContainer}
								>
									<Text translate style={[styles.cancelText, { color: theme.colors.primary }]}>Cancel</Text>
								</RX.View>
							</RX.View>
						)}
					</ThemeContext.Consumer>
				)}
			</Query>
    )
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

	private _renderContent = (theme: Theme, data: { getFoodVariety: Food }, loading: boolean) => {
		if (loading) {
			return this._renderLoading()
		}

		if (!data) {
			return this._renderNotAvailable()
		}

		return this._renderAmountSelection(theme, data.getFoodVariety)
	}

	private _renderLoading = () => {
		return (
			<Text translate>Loading</Text>
		)
	}

	private _renderAmountSelection = (theme: Theme, food: Food) => {
		const { inputRef } = this.props

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
						style={[styles.subtitle, { color: theme.colors.subtitle }]}
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
						onChange={(amount: string) => this.setState({ amount: Number(amount) })}
						label={getLocalizedText('Amount')}
						keyboardType={'number-pad'}
					/>
					<Text translate style={[styles.label, { color: theme.colors.labelInput }]}>Unit</Text>
					<RX.View style={styles.selectContainer} onPress={() => this.props.onSelectPress(food.weights || [])}
									 activeOpacity={0.4}>
						<RX.Text>{this.getSelectedWeight()}</RX.Text>
					</RX.View>
				</RX.View>
				<RX.View
					style={styles.chartContainer}
				>
					<RX.Text
						style={[styles.chartTextContainer, { color: theme.colors.subtitle }]}
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
}

const styles = {
	previewContainer: RX.Styles.createViewStyle({
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		padding: Styles.values.spacing,
		// paddingTop: 70,
	}),
	cancelSelectedMealContainer: RX.Styles.createViewStyle({
		position: 'absolute',
		[Styles.values.end]: Styles.values.spacing,
		top: Styles.values.spacing,
		// width: 50,
		// height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		padding: Styles.values.spacing,
		cursor: 'pointer',
	}),
	cancelText: RX.Styles.createTextInputStyle({
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
		[Styles.values.marginEnd]: 50
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
		marginTop: Styles.values.spacing,
		flex: 1,
	}),
	label: RX.Styles.createTextStyle({
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
		marginBottom: Styles.values.spacing,
		[Styles.values.marginEnd]: Styles.values.spacing,
	}),
}
