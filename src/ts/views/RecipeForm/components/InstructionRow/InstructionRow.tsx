/*
 * InstructionRow.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import Input from '@Common/Input/Input'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import Keys from '@Utils/KeyCodes'
import { InstructionRowInstruction } from '@Views/RecipeForm/components/InstructionRow/types/InstructionRowInstruction'
import { forwardRef, Ref } from 'react'
import RX from 'reactxp'


const IMAGE_DIMENSIONS = 50
const CLEAR_DIMENSIONS = 20

interface InstructionRowProps {
  style?: any,
  instruction: InstructionRowInstruction,
  onChange: (instruction: InstructionRowInstruction) => void,
  onEnterPressed: (instruction: InstructionRowInstruction) => void,
  onDeletePressed: (instruction: InstructionRowInstruction) => void,
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

function InstructionRow(props: InstructionRowProps, ref: Ref<any>) {
  const { style, instruction } = props

  const _onInstructionChange = (value: string) => {
    const { instruction } = props

    const text = instruction.text.length > 0
      ? instruction.text.map((t, index) => index === 0 ? { text: value, locale: t.locale } : t)
      : [{ text: value, locale: AppConfig.locale }]

    props.onChange({
      ...props.instruction,
      text,
    })
  }

  const value = instruction.text[0] ? instruction.text[0].text : ''

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <RX.View
          style={[styles.container, style]}
        >
          <RX.View style={styles.clearWrapper}>
            <Text>{instruction.step}</Text>
          </RX.View>
          <Input
            inputRef={ref}
            // autoFocus={instruction.step > 1 && (instruction.text[0].text.length === 0)}
            value={value}
            // translations={instruction.text}
            onChange={_onInstructionChange}
            placeholder={props.step === 1 && translate('e.g. Cook the Rice...')}
            returnKeyType={'done'}
            style={[styles.textInput, { backgroundColor: theme.colors.createRecipeTextInputBG, }]}
            onKeyPress={e => {
              if (e.keyCode === Keys.Enter) {
                props.onEnterPressed(instruction)
              }
              if (e.keyCode === Keys.Delete) {
                value.length === 0 && props.onDeletePressed(instruction)
              }
            }}
          />
        </RX.View>
      )}
    </ThemeContext.Consumer>
  )
}

export default forwardRef(InstructionRow)

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
