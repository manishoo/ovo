/*
 * FoodPickerDialog.tsx
 * Copyright: Ouranos Studio 2019
 */

import Modal from '@Common/Modal/Modal'
import { fullHeight } from '@Utils'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import FoodPicker, { FoodPickerMealItem, FoodTypes } from './FoodPicker'


interface FoodPickerDialogProps {
  style?: any,
  onDismiss: () => void,
  autoFocus: boolean,
  foodTypes: FoodTypes[],
  onSubmit: (mealItem: FoodPickerMealItem) => void,
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
      <Modal
        modalId={MODAL_ID}
      >
        <RX.View>
          <FoodPicker
            onDismiss={this.dismiss}
            foodTypes={this.props.foodTypes}
            onSubmit={(mealItem) => {
              this.props.onSubmit(mealItem)
              this.dismiss()
            }}
          />
        </RX.View>
      </Modal>
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
