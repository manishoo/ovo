/*
 * IngredientRow.tsx
 * Copyright: Ouranos Studio 2019
 */


import Image from 'common/Image/Image'
import Input from 'common/Input/Input'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import Text from 'common/Text/Text'
import ImageSource from 'modules/images'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { Ingredient } from 'src/ts/models/FoodModels'

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
	constructor(props: IngredientRowProps) {
		super(props)

		this.state = {
			description: '',
			name: props.ingredient.name || '',
			amount: props.ingredient.amount,
			customUnit: props.ingredient.unit,
		}
	}

	render() {
		const { style, ingredient } = this.props

		return (
			<RX.View
				style={[styles.container, style]}
			>
				{/*Delete*/}
				<RX.View style={styles.clearWrapper} onPress={this._onDeletePress}>
					<RX.Image
						source={ImageSource.Clear}
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
							<RX.View style={[styles.thumbnail, { backgroundColor: '#eee' }]} />
					}
				</RX.View>

				<Input
					value={this.state.name}
					defaultValue={ingredient.name}
					onChange={name => this.setState({ name }, this._onChange)}
					style={styles.input}
					placeholder={ingredient.name}
				/>

				{/*Amount and Unit FIXME!!!!!!*/}
				<Input
					value={String(this.state.amount)}
					onChange={amount => this.setState({ amount: Number(amount) }, this._onChange)}
					style={{ width: 35, marginBottom: 0 }}
				/>

				{
					ingredient.weight ?
						<Text translate>{this._getUnit(ingredient)}</Text> :
						<Input
							value={this.state.customUnit || ''}
							style={{ width: 50, marginBottom: 0, [Styles.values.marginStart]: Styles.values.spacing }}
							onChange={value => this.setState({ customUnit: value }, this._onChange)}
						/>
				}

				<Input
					value={this.state.description}
					onChange={description => this.setState({ description }, this._onChange)}
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
}

const styles = {
	container: RX.Styles.createViewStyle({
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: Styles.values.spacingLarge / 2
	}),
	name: RX.Styles.createTextStyle({
		[Styles.values.marginEnd]: Styles.values.spacing,
	}),
	thumbnail: RX.Styles.createImageStyle({
		width: IMAGE_DIMENSIONS,
		height: IMAGE_DIMENSIONS,
		borderRadius: IMAGE_DIMENSIONS / 2,
		[Styles.values.marginEnd]: Styles.values.spacing,
		[Styles.values.marginStart]: Styles.values.spacing / 2,
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
		marginHorizontal: Styles.values.spacing,
		marginBottom: 0,
	})
}
