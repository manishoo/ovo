/*
 * FoodDialog.tsx
 * Copyright: Ouranos Studio 2019
 */

import Modal from '@Common/Modal/Modal'
import { FoodTypes } from '@Models/FoodModels'
import { fullHeight } from '@Utils'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import SelectFood, { SelectFoodMealItem } from './SelectFood'


interface FoodDialogProps {
  style?: any,
  onDismiss: () => void,
  autoFocus: boolean,
  foodTypes: FoodTypes[],
  onSubmit: (mealItem: SelectFoodMealItem) => void,
}

interface FoodDialogState {
  width?: number,
  height?: number,
  // searchText: string,

  // weights: Weight[],
  // selectedWeight?: Weight,
  // selectDialogVisible: boolean,
}

export const MODAL_ID = 'foodDialog'

export function showFoodModal(props: FoodDialogProps) {
  RX.Modal.show(
    <FoodDialog
      {...props}
    />,
    MODAL_ID,
  )
}

export default class FoodDialog extends ComponentBase<FoodDialogProps & RX.CommonProps, FoodDialogState> {
  // textInput: any
  _opacityAnimatedValue = RX.Animated.createValue(fullHeight())
  // _containerAnimationStyle = RX.Styles.createAnimatedViewStyle({
  //   transform: [{ translateY: this._opacityAnimatedValue }],
  // })

  constructor(props: FoodDialogProps) {
    super(props)

    this.state = {
      // selectDialogVisible: false,
      // weights: [],
    }
  }

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
          <SelectFood
            onDismiss={this.dismiss}
            foodTypes={this.props.foodTypes}
            onSubmit={(mealItem) => {
              this.props.onSubmit(mealItem)
              this.dismiss()
            }}
          />
          {/*{this._renderSelectDialog()}*/}
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

  // _renderSelectDialog = () => {
  //   if (!this.state.selectDialogVisible) return null
  //
  //   return (
  //     <SelectDialog
  //       options={[
  //         { value: 'g', text: 'gram' },
  //         ...this.state.weights.map(w => ({
  //           text: w.description,
  //           value: w.id,
  //         })),
  //       ]}
  //       onOptionSelect={option => this.setState({ selectedWeight: this.state.weights.find(p => p.id === option.value) })}
  //       onDismiss={() => this.setState({ selectDialogVisible: false })}
  //     />
  //   )
  // }
}
