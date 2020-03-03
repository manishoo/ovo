/*
 * InstructionRow.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import IntlInput from '@Common/Input/IntlInput'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import Keys from '@Utils/KeyCodes'
import { InstructionRowInstruction } from '@Views/RecipeForm/components/InstructionRow/types/InstructionRowInstruction'
import gql from 'graphql-tag'
import RX from 'reactxp'


const IMAGE_DIMENSIONS = 50
const CLEAR_DIMENSIONS = 20

interface InstructionRowProps {
  style?: any,
  instruction: InstructionRowInstruction,
  onChange: (instruction: InstructionRowInstruction) => void,
  onEnterPressed: (instruction: InstructionRowInstruction) => void,
  onDeletePressed: (instruction: InstructionRowInstruction) => void,
  onDelete: (step: number) => void,
  step: number,
}

export const fragments = {
  instruction: gql`
    fragment InstructionRowInstruction on Instruction {
      step
      text { text locale }
    }
  `
}

export default class InstructionRow extends RX.Component<InstructionRowProps> {
  onDeletePress = () => this.props.onDelete(this.props.instruction.step)

  public render() {
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
                autoFocus={instruction.step > 1 && (instruction.text[0].text.length === 0)}
                translations={instruction.text}
                onTranslationsChange={translations => this.props.onChange({
                  ...this.props.instruction,
                  text: translations,
                })}
                placeholder={this.props.step === 1 && translate('e.g. Cook the Rice...')}
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
