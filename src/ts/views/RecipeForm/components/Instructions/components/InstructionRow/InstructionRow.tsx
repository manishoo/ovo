/*
 * InstructionRow.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
import {Instruction} from 'src/ts/models/FoodModels'
import TextInputAutoGrow from 'src/ts/controls/TextInputAutoGrow'
// import Image from 'common/Image'
// import FilePicker from 'common/FilePicker/FilePicker'

const IMAGE_DIMENSIONS = 50
const CLEAR_DIMENSIONS = 20

interface IngredientRowProps {
	style?: any,
	instruction: Instruction,
	onChange: (instruction: Instruction) => void,
	onDelete: (id: string) => void,
}

export default class InstructionRow extends RX.Component<IngredientRowProps> {
	onDeletePress = () => this.props.onDelete(this.props.instruction.id)

	render() {
		const {style, instruction: {text}} = this.props

		return (
			<RX.View>
				<RX.View>
					{/*{
						this.state.coverImagePreview &&
            <Image source={this.state.coverImagePreview} style={styles.coverImage} resizeMode={'cover'} />
					}
					<FilePicker
						label={this.state.coverImagePreview ? 'Replace Image' : undefined}
						onImageChange={coverImage => {
							console.log('coverImage', coverImage)
							this.setState({coverImage})
						}}
						onImagePreviewChange={coverImagePreview => {
							this.setState({coverImagePreview})
						}}
					/>*/}
				</RX.View>

				<RX.View
					style={[styles.container, style]}
				>
					{/*Delete*/}
					<RX.View style={styles.clearWrapper} onPress={this.onDeletePress}>
						<RX.Image
							source={require('src/ts/sharedAssets/Clear.png')}
							style={styles.clear}
						/>
					</RX.View>

					<TextInputAutoGrow
						value={text}
						returnKeyType={'done'}
						onChangeText={(newText) => this.props.onChange({
							...this.props.instruction,
							text: newText,
						})}
						style={styles.textInput}
						wrapperStyle={{flex: 1}}
					/>
				</RX.View>
			</RX.View>
		)
	}
}

const styles = {
	name: RX.Styles.createTextStyle({
		[theme.styles.marginStart]: theme.styles.spacing,
	}),
	container: RX.Styles.createViewStyle({
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: theme.styles.spacing / 2,
		flex: 1
	}),
	thumbnail: RX.Styles.createImageStyle({
		width: IMAGE_DIMENSIONS,
		height: IMAGE_DIMENSIONS,
		borderRadius: IMAGE_DIMENSIONS / 2,
		marginRight: theme.styles.spacing,
	}),
	clear: RX.Styles.createImageStyle({
		width: CLEAR_DIMENSIONS,
		height: CLEAR_DIMENSIONS,
		borderRadius: CLEAR_DIMENSIONS / 2,
	}),
	clearWrapper: RX.Styles.createViewStyle({
		padding: 5,
		cursor: 'pointer'
	}),
	textInput: RX.Styles.createTextInputStyle({
		padding: 5,
		backgroundColor: theme.colors.createRecipeTextInputBG,
		borderRadius: 5,
		flex: 1,
	})
}
