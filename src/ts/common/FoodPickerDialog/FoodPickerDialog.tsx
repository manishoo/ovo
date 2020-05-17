/*
 * FoodPickerDialog.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ThemeContext } from '@App/ThemeContext'
import Modal from '@Common/Modal/Modal'
import { fullHeight } from '@Utils'
import RX from 'reactxp'
import FoodPicker, { FoodPickerCommonProps } from './FoodPicker'


interface FoodPickerDialogProps extends FoodPickerCommonProps {
}

export const MODAL_ID = 'FoodPickerDialog'

export function showFoodPicker(props: FoodPickerDialogProps) {
  RX.Modal.show(
    <FoodPickerDialog
      {...props}
    />,
    MODAL_ID,
  )
}

export default class FoodPickerDialog extends RX.Component<FoodPickerDialogProps> {
  _opacityAnimatedValue = RX.Animated.createValue(fullHeight())

  componentDidMount(): void {
    RX.Animated.timing(this._opacityAnimatedValue, {
      toValue: 0,
    }).start(() => {
      // this.textInput.focus()
    })
  }

  public render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Modal
            modalId={MODAL_ID}
            theme={theme}
          >
            <RX.View>
              <FoodPicker
                {...this.props}
                onSubmit={(mealItem, userMealId) => {
                  this.props.onSubmit(mealItem, userMealId)
                  this.dismiss()
                }}
              />
            </RX.View>
          </Modal>
        )}
      </ThemeContext.Consumer>
    )
  }

  dismiss = () => {
    const { onDismiss } = this.props

    Modal.dismissAnimated(MODAL_ID)
      .then(() => {
        onDismiss()
      })
  }
}
