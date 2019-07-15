/*
 * IngredientRow.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import {Ingredient} from 'src/ts/models/FoodModels'
import Text from 'common/Text'
import Image from 'common/Image/Image'
import theme from 'src/ts/app/Theme'
import Input from 'common/Input'
import {getLocalizedText} from 'common/LocalizedText'

const IMAGE_DIMENSIONS = 50
const CLEAR_DIMENSIONS = 20

interface IngredientRowProps {
	style?: any,
	ingredient: Ingredient,
	onDelete: (id: string) => void,
	onIngredientChange: (key: any, ingredient: Ingredient) => void,
}

interface IngredientRowState {
	description: string,
	name: string,
	amount: number,
	customUnit?: string,
}

export default class IngredientRow extends RX.Component<IngredientRowProps, IngredientRowState> {
	render() {
		const {style, ingredient} = this.props

		return (
			<RX.View
				style={[styles.container, style]}
			>
				{/*Delete*/}
				<RX.View style={styles.clearWrapper} onPress={this._onDeletePress}>
					<RX.Image
						source={require('src/ts/sharedAssets/Clear.png')}
						style={styles.clear}
					/>
				</RX.View>
				{/*Image*/}
				<RX.View>
					{
						ingredient.thumbnail ?
							<Image
								source={ingredient.thumbnail.url}
								style={styles.thumbnail}
							/> :
							<RX.View style={[styles.thumbnail, {backgroundColor: '#eee'}]}/>
					}
				</RX.View>

				{/*Text*/}
				{/*<Text style={styles.name}>{ingredient.name}</Text>*/}
				<Input
					value={this.state.name}
					defaultValue={ingredient.name}
					onChange={name => this.setState({name}, this._onChange)}
					style={styles.input}
					placeholder={ingredient.name}
				/>

				{/*Amount and Unit FIXME!!!!!!*/}
				<Input
					value={String(this.state.amount)}
					onChange={amount => this.setState({amount: Number(amount)}, this._onChange)}
					style={{width: 35, marginBottom: 0}}
					// placeholder={getLocalizedText('description')}
				/>

				{
					ingredient.weight ?
						<Text translate>{this._getUnit(ingredient)}</Text> :
						<Input
							value={this.state.customUnit || ''}
							style={{width: 50, marginBottom: 0, [theme.styles.marginStart]: theme.styles.spacing}}
							onChange={value => this.setState({customUnit: value}, this._onChange)}
						/>
				}

				<Input
					value={this.state.description}
					onChange={description => this.setState({description}, this._onChange)}
					style={styles.input}
					placeholder={getLocalizedText('description')}
				/>
			</RX.View>
		)
	}

	private _onChange = () => {
		this.props.onIngredientChange(this.props.ingredient.key, {
			...this.props.ingredient,
			description: this.state.description,
			name: this.state.name,
			amount: this.state.amount,
			unit: this.state.customUnit,
		})
	}

	private _getUnit = (ingredient: Ingredient) => {
		if (ingredient && ingredient.weight) {
			return ingredient.weight.description
		}

		return getLocalizedText('g')
	}

	private _onDeletePress = () => this.props.onDelete(this.props.ingredient.key)

	constructor(props: IngredientRowProps) {
		super(props)

		this.state = {
			description: '',
			name: props.ingredient.name || '',
			amount: props.ingredient.amount,
			customUnit: props.ingredient.unit,
		}
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: theme.styles.spacingLarge / 2
	}),
	name: RX.Styles.createTextStyle({
		[theme.styles.marginEnd]: theme.styles.spacing,
	}),
	thumbnail: RX.Styles.createImageStyle({
		width: IMAGE_DIMENSIONS,
		height: IMAGE_DIMENSIONS,
		borderRadius: IMAGE_DIMENSIONS / 2,
		[theme.styles.marginEnd]: theme.styles.spacing,
		[theme.styles.marginStart]: theme.styles.spacing / 2,
	}),
	clear: RX.Styles.createImageStyle({
		width: CLEAR_DIMENSIONS,
		height: CLEAR_DIMENSIONS,
		borderRadius: CLEAR_DIMENSIONS / 2,
	}),
	clearWrapper: RX.Styles.createViewStyle({
		padding: 15,
		cursor: 'pointer',
	}),
	input: RX.Styles.createTextInputStyle({
		flex: 1,
		marginHorizontal: theme.styles.spacing,
		marginBottom: 0,
	})
}
