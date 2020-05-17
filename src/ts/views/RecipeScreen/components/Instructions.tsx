/*
 * Instructions.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import { ThemeContext } from '@App/ThemeContext'
import Text from '@Common/Text/Text'
import { InstructionsInstruction } from '@Views/RecipeScreen/components/types/InstructionsInstruction'
import RX from 'reactxp'


export const fragments = {
  instruction: gql`
    fragment InstructionsInstruction on Instruction {
      step
      text { text locale }
    }
  `
}

const Instructions = ({ instructions = [] }: { instructions: InstructionsInstruction[] }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <RX.View>
        {
          instructions.map((instruction, index) => (
            <RX.View
              key={instruction.step}
              style={[styles.instructionStep, { backgroundColor: index % 2 == 0 ? '#f5f5f5' : '#fff' }]}
            >
              <Text style={styles.step}>{instruction.step}.</Text>
              <Text style={{ color: theme.colors.grey1 }} translations={instruction.text} />
            </RX.View>
          ))
        }
      </RX.View>
    )}
  </ThemeContext.Consumer>
)

const styles = {
  instructionStep: RX.Styles.createViewStyle({
    padding: 20,
  }),
  instructionIngredientsContainer: RX.Styles.createViewStyle({
    flexDirection: 'row',
  }),
  utensilItem: RX.Styles.createViewStyle({
    position: 'absolute',
    // TODO: change this to multilingual
    right: 0,
    top: 0,
  }),
  action: RX.Styles.createTextStyle({
    fontSize: 25,
    fontWeight: 'bold',
  }),
  actionText: RX.Styles.createTextStyle({
    fontSize: 25,
    fontWeight: 'bold',
  }),
  actionTextTemp: RX.Styles.createTextStyle({
    fontSize: 12,
    fontWeight: '200',
  }),
  step: RX.Styles.createTextStyle({
    fontWeight: 'bold',
  }),
}

export default Instructions
