/*
 * InstructionRow.tsx
 * Copyright: Ouranos Studio 2019
 */

import IntlInput from 'common/Input/IntlInput'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import Text from 'common/Text/Text'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import Keys from 'src/ts/utilities/KeyCodes'
import { ProfileRecipesQuery_recipes_recipes_instructions } from 'src/ts/views/ProfileScreen/components/ProfileRecipes/types/ProfileRecipesQuery'


const IMAGE_DIMENSIONS = 50
const CLEAR_DIMENSIONS = 20

interface IngredientRowProps {
  style?: any,
  instruction: ProfileRecipesQuery_recipes_recipes_instructions,
  onChange: (instruction: ProfileRecipesQuery_recipes_recipes_instructions) => void,
  onEnterPressed: (instruction: ProfileRecipesQuery_recipes_recipes_instructions) => void,
  onDeletePressed: (instruction: ProfileRecipesQuery_recipes_recipes_instructions) => void,
  onDelete: (step: number) => void,
  step: number,
}

export default class InstructionRow extends RX.Component<IngredientRowProps> {
  onDeletePress = () => this.props.onDelete(this.props.instruction.step)

  render() {
    const { style, instruction } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View>
            <RX.View
              style={[styles.container, style]}
            >
              <RX.View style={styles.clearWrapper}>
                <Text>{instruction.step}</Text>
              </RX.View>
              <IntlInput
                autoFocus={instruction.step > 1}
                translations={instruction.text}
                onTranslationsChange={translations => this.props.onChange({
                  ...this.props.instruction,
                  text: translations,
                })}
                placeholder={this.props.step === 1 && getLocalizedText('e.g. Cook the Rice...')}
                returnKeyType={'done'}
                style={[styles.textInput, { backgroundColor: theme.colors.createRecipeTextInputBG, }]}
                onKeyPress={e => {
                  if (e.keyCode === Keys.Enter) {
                    this.props.onEnterPressed(instruction)
                  }
                  if (e.keyCode === Keys.Delete) {
                    this.props.onDeletePressed(instruction)
                  }
                }}
              />
            </RX.View>
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }
}

const styles = {
  name: RX.Styles.createTextStyle({
    [Styles.values.marginStart]: Styles.values.spacing,
  }),
  container: RX.Styles.createViewStyle({
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: Styles.values.spacing / 2,
    flex: 1
  }),
  thumbnail: RX.Styles.createImageStyle({
    width: IMAGE_DIMENSIONS,
    height: IMAGE_DIMENSIONS,
    borderRadius: IMAGE_DIMENSIONS / 2,
    marginRight: Styles.values.spacing,
  }),
  clear: RX.Styles.createImageStyle({
    width: CLEAR_DIMENSIONS,
    height: CLEAR_DIMENSIONS,
    borderRadius: CLEAR_DIMENSIONS / 2,
  }),
  clearWrapper: RX.Styles.createViewStyle({
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  textInput: RX.Styles.createTextInputStyle({
    padding: 5,
    borderRadius: 5,
    flex: 1,
    marginBottom: 0,
  })
}
