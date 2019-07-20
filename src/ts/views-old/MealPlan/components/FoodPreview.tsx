/*
 * FoodPreview.tsx
 * Copyright: Ouranos Studio 2019
 */


// import Input from '../../Input'
import FilledButton from 'common/FilledButton/FilledButton'
import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
import { SearchResultItem } from './AddMealItemDialog'

interface FoodPreviewProps {
	style?: any,
	onDismiss: () => any,
	inputRef: (ref: any) => any,
	item: SearchResultItem,
}

const imageStyle = RX.Styles.createImageStyle({
	width: 80,
	height: 80,
	marginRight: 16,
	borderRadius: 20,
	backgroundColor: '#ddd'
})

export default class FoodPreview extends RX.Component<FoodPreviewProps> {
	dismiss = () => {
		this.props.onDismiss()
	}

	render() {
		const { style, item, inputRef } = this.props

		return (
			<RX.View
				style={[styles.previewContainer, style]}
			>
				<RX.View
					onPress={this.dismiss}
					style={styles.cancelSelectedMealContainer}
				>
					<RX.Text>X</RX.Text>
				</RX.View>
				<RX.View
					style={styles.firstRow}
				>
					<RX.Image
						source={item.imageUrl}
						style={imageStyle}
					/>
					<RX.View>
						<RX.View
							style={styles.textHeadingContainer}
						>
							<RX.Text
								style={styles.bigTitle}
							>Bananas</RX.Text>
							<RX.Text
								style={styles.smallTitle}
							>, raw, bashed, shit</RX.Text>
						</RX.View>
						<RX.Text
							style={styles.subtitle}
						>fruits</RX.Text>
					</RX.View>
				</RX.View>
				<RX.View
					style={styles.secondRow}
				>
					<RX.View
						style={styles.flex1}
					>
						{/*<Input
							inputRef={inputRef}
							value={'1'}
							onChange={() => {}}
							label={'Amount'}
							keyboardType={'number-pad'}
						/>
						<Input
							value={'-'}
							onChange={() => {}}
							label={'Unit'}
							onFocus={() => {

							}}
						/>*/}
					</RX.View>
					<RX.View
						style={styles.chartContainer}
					>
						<RX.Text
							style={styles.chartTextContainer}
						>MacroNutrients Chart</RX.Text>
					</RX.View>
				</RX.View>

				<FilledButton
					label='Add to Meal'
					onPress={() => {
					}}
					style={styles.addToMeal}
				/>
			</RX.View>
		)
	}
}

const styles = {
	previewContainer: RX.Styles.createViewStyle({
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
	}),
	cancelSelectedMealContainer: RX.Styles.createViewStyle({
		// position: 'absolute',
		// left: 10,
		// top: 10,
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
	}),
	firstRow: RX.Styles.createViewStyle({
		flexDirection: 'row',
		padding: 16,
		paddingTop: 0,
	}),
	textHeadingContainer: RX.Styles.createViewStyle({
		flexDirection: 'row',
		alignItems: 'flex-end',
	}),
	bigTitle: RX.Styles.createTextStyle({
		fontSize: 30,
		top: 2
	}),
	smallTitle: RX.Styles.createTextStyle({
		color: theme.colors.inputLabel,
	}),
	subtitle: RX.Styles.createTextStyle({
		fontSize: 12,
		color: theme.colors.subtitle,
	}),
	secondRow: RX.Styles.createViewStyle({
		flexDirection: 'row',
		// alignItems: 'flex-end',
		padding: 20,
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
		flex: 1,
		margin: 20,
		marginTop: 0,
	}),
}
