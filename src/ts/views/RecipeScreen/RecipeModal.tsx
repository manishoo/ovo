/*
 * RecipeModal.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ThemeContext } from '@App/ThemeContext'
import Modal from '@Common/Modal/Modal'
import RX from 'reactxp'
import RecipeContainer from './RecipeScreen'


export const MODAL_ID = 'RecipeModal'
export const MODAL_MAX_WIDTH = 800

const RecipeModal = (props: any) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Modal
          key={MODAL_ID}
          modalId={MODAL_ID}
          // fullWidth
          maxWidth={MODAL_MAX_WIDTH}
          fullHeight
          theme={theme}
        >
          <RecipeContainer
            {...props}
          />
        </Modal>
      )}
    </ThemeContext.Consumer>
  )
}

export default RecipeModal
