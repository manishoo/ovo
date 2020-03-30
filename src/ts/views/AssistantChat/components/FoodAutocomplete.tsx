/*
 * FoodAutocomplete.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import { Query } from '@apollo/react-components'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import { fullWidth } from '@Utils'
import { FoodAutocompleteQuery } from '@Views/AssistantChat/components/types/FoodAutocompleteQuery'
import RX from 'reactxp'
import SubmitButton from './SubmitButton'


interface FoodAutocompleteProps {
  style?: any,
  skip?: string,
  onSubmit: (data: any[]) => void,
  onSkip: (text: string) => void,
}

interface FoodAutocompleteState {
  selectedFoods: any[],
  text: string,
}

class FoodAutocomplete extends RX.Component<FoodAutocompleteProps, FoodAutocompleteState> {
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
        style={styles.textInput}
        onChangeText={this.onChangeText}
        // @ts-ignore
        onKeyPress={this.onKeyPress}
        onBlur={() => null}

        blurOnSubmit={false}
      />
    )
  }

  renderFoods(items: any[]) {
    const onAddedItemPress = (f: any) => () => {
      this.setState(prevState => ({
        selectedFoods: prevState.selectedFoods.filter((food: any) => food.id !== f.id)
      }))
    }

    return items.map((f: any) => {
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

  renderSuggestions = (theme: Theme) => ({ data, error, loading }: any) => {
    const { selectedFoods } = this.state
    if (error || loading || !data) return null

    const onSuggestionPress = (f: any) => () => {
      this.setState(prevState => ({
        selectedFoods: [...prevState.selectedFoods, f],
        text: '',
      }))
      this.input.focus()
    }

    function renderSuggestionItem(f: any) {
      return (
        <RX.View
          key={f.id}
          style={[styles.suggestionItem, { backgroundColor: theme.colors.white }]}
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
          data.searchFoods.filter((i: any) => !selectedFoods.find(j => j.id === i.id)).map((f: any) => renderSuggestionItem(f))
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

  public render() {
    const { style, onSubmit, skip, onSkip } = this.props
    const { selectedFoods, text } = this.state

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[styles.container, style]}
            onPress={() => this.input.focus()}
            activeOpacity={1}
          >
            <Query<FoodAutocompleteQuery>
              query={FOOD_AUTOCOMPLETE_QUERY}
              skip={!text}
              variables={{
                q: text,
              }}
            >
              {this.renderSuggestions(theme)}
            </Query>
            <RX.View
              style={[styles.inputContainer, { backgroundColor: theme.colors.white }]}
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
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default FoodAutocomplete

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
    flexDirection: 'row',
    paddingBottom: 10,
    borderColor: '#eee',
    borderBottomWidth: 1,
    borderWidth: 1,
    flexWrap: 'wrap',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingLeft: 10,
    paddingTop: 10,
    minHeight: 50,
  }),
  suggestionsContainer: RX.Styles.createViewStyle({
    flexDirection: 'row',
    backgroundColor: 'transparent',
    maxHeight: 50,
    marginBottom: 5,
    paddingLeft: 5,
  }),
  suggestionItem: RX.Styles.createViewStyle({
    padding: 16,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#eee',
  }),
  addedFood: RX.Styles.createViewStyle({
    justifyContent: 'center',
    borderColor: '#eee',
    borderWidth: 1,
    alignItems: 'center',
    height: 45,
    borderRadius: 22.5,
    marginRight: 8,
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 5,
  }),
  textInput: RX.Styles.createTextInputStyle({
    minWidth: 100,
    height: 50,
    fontSize: 16,
    marginRight: 50,
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
    foods(nameSearchQuery: $q) {
      foods {
        id
        name {text locale}
      }
    }
  }
`
