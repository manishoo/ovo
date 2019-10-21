/*
 * FoodAutocomplete.tsx
 * Copyright: Ouranos Studio 2019
 */


import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
import { Food } from 'src/ts/models/FoodModels'
// import {MessageType} from './types'
import { fullWidth } from '../../../src/ts/utilities'
import SubmitButton from './SubmitButton'

interface FoodAutocompleteProps {
	style?: any,
	skip?: string,
	onSubmit: (data: Food[]) => void,
	onSkip: (text: string) => void,
}

interface FoodAutocompleteState {
	selectedFoods: Food[],
	text: string,
}

export default class FoodAutocomplete extends RX.Component<FoodAutocompleteProps, FoodAutocompleteState> {
	input: any

	constructor(props: FoodAutocompleteProps) {
		super(props)

		this.state = {
			selectedFoods: [],
			text: '',
		}
	}

	onChangeText = (text: string) => {
		this.setState({
			text,
		})
	}

	onKeyPress = (e: KeyboardEvent) => {
		// console.log('e.code =======>', e.code)
		// console.log('e.key =======>', e.key)
		// console.log('e.key =======>', e.key)
		//TODO change to a better solution
		if (e.keyCode === 8) {
			// delete
			if (this.state.text === '') {
				this.setState(prevState => {
					const pS = prevState.selectedFoods
					pS.pop()
					return {
						selectedFoods: pS
					}
				})
			}
		}
	}

	renderInput = () => {
		const { text } = this.state

		return (
			<RX.TextInput
				ref={(ref: any) => this.input = ref}
				key='textinput'
				value={text}
				placeholder='Enter food name'
				// keyboardType={getKeyboardType(inputType)}
				// multiline
				style={styles.textInput}
				onChangeText={this.onChangeText}
				// @ts-ignore
				onKeyPress={this.onKeyPress}
				onBlur={() => null}

				blurOnSubmit={false}
			/>
		)
	}

	renderFoods(items: Food[]) {
		const onAddedItemPress = (f: Food) => () => {
			this.setState(prevState => ({
				selectedFoods: prevState.selectedFoods.filter((food: Food) => food.id !== f.id)
			}))
		}

		return items.map((f: Food) => {
			return (
				<RX.View
					key={f.id}
					style={styles.addedFood}
					onPress={onAddedItemPress(f)}
				>
					<RX.Text>{f.name}</RX.Text>
				</RX.View>
			)
		})
	}

	renderSuggestions = ({ data, error, loading }: any) => {
		const { selectedFoods } = this.state
		if (error || loading || !data) return null

		const onSuggestionPress = (f: Food) => () => {
			// e.preventDefault()
			this.setState(prevState => ({
				selectedFoods: [...prevState.selectedFoods, f],
				text: '',
			}))
			this.input.focus()
		}

		function renderSuggestionItem(f: Food) {
			return (
				<RX.View
					key={f.id}
					style={styles.suggestionItem}
					onPress={onSuggestionPress(f)}
				>
					<RX.Text>{f.name}</RX.Text>
				</RX.View>
			)
		}

		return (
			<RX.ScrollView
				style={styles.suggestionsContainer}
				horizontal
				keyboardShouldPersistTaps
			>
				{
					data.searchFoods.filter((i: Food) => !selectedFoods.find(j => j.id === i.id)).map((f: Food) => renderSuggestionItem(f))
				}
			</RX.ScrollView>
		)
	}

	renderBorderBottom = () => {
		return (
			<RX.View
				style={styles.borderBottom}
			/>
		)
	}

	render() {
		const { style, onSubmit, skip, onSkip } = this.props
		const { selectedFoods, text } = this.state

		return (
			<RX.View
				style={[styles.container, style]}
				onPress={() => this.input.focus()}
				activeOpacity={1}
			>
				<Query
					query={FOOD_AUTOCOMPLETE_QUERY}
					skip={!text}
					variables={{
						q: text,
					}}
				>
					{this.renderSuggestions}
				</Query>
				<RX.View
					style={styles.inputContainer}
				>
					{this.renderFoods(selectedFoods)}
					{this.renderInput()}
					{this.renderBorderBottom()}
					<SubmitButton
						style={styles.submitButton}
						skip={selectedFoods.length > 0 ? undefined : skip}
						onPress={() => onSubmit(selectedFoods)}
						onSkip={() => onSkip('Nope')}
					/>
				</RX.View>
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		width: fullWidth(),
		position: 'relative',
		justifyContent: 'flex-end',
		backgroundColor: 'transparent'
	}),
	borderBottom: RX.Styles.createViewStyle({
		width: fullWidth() * 0.77,
		position: 'absolute',
		bottom: 8,
		left: 10,
		right: 0,
		height: 1,
		backgroundColor: '#eee',
	}),
	inputContainer: RX.Styles.createViewStyle({
		// flex: 1,
		flexDirection: 'row',
		paddingBottom: 10,
		borderColor: '#eee',
		borderBottomWidth: 1,
		borderWidth: 1,
		flexWrap: 'wrap',
		backgroundColor: theme.colors.white,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		paddingLeft: 10,
		paddingTop: 10,
		// backgroundColor: theme.colors.white,
		// width: fullWidth(),
		minHeight: 50,
	}),
	suggestionsContainer: RX.Styles.createViewStyle({
		// flex: 1,
		flexDirection: 'row',
		backgroundColor: 'transparent',
		// width: fullWidth(),
		maxHeight: 50,
		marginBottom: 5,
		paddingLeft: 5,
	}),
	suggestionItem: RX.Styles.createViewStyle({
		backgroundColor: theme.colors.white,
		padding: 16,
		borderRadius: 20,
		marginRight: 8,
		borderWidth: 1,
		borderColor: '#eee',
	}),
	addedFood: RX.Styles.createViewStyle({
		// backgroundColor: theme.colors.yellow,
		justifyContent: 'center',
		borderColor: '#eee',
		borderWidth: 1,
		alignItems: 'center',
		height: 45,
		// padding: 5,
		borderRadius: 22.5,
		marginRight: 8,
		paddingRight: 10,
		paddingLeft: 10,
		marginBottom: 5,
	}),
	textInput: RX.Styles.createTextInputStyle({
		minWidth: 100,
		// maxHeight: 60,
		height: 50,
		// borderBottomWidth: 1,
		fontSize: 16,
		// borderColor: 'transparent',
		marginRight: 50,
		// borderColor: '#eee',
		borderBottomWidth: 0,
	}),
	submitButton: RX.Styles.createViewStyle({
		position: 'absolute',
		right: 10,
		bottom: 10,
	})
}

const FOOD_AUTOCOMPLETE_QUERY = gql`
	query FoodAutocompleteQuery($q: String!) {
		searchFoods(q: $q) {
			id
			name
		}
	}
`
