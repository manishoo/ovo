/*
 * FoodDialog.tsx
 * Copyright: Ouranos Studio 2019
 */

import Modal from 'common/Modal/Modal'
import SelectDialog from 'common/Select/components/SelectDialog'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import { DishItem, FoodTypes, Weight } from 'src/ts/models/FoodModels'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import { fullHeight } from 'src/ts/utilities'
import SelectFood from './SelectFood'


interface FoodDialogProps {
  style?: any,
  onDismiss: () => void,
  autoFocus: boolean,
  foodTypes: FoodTypes[],
  onSubmit: (dishItem: DishItem) => void,
}

interface FoodDialogState {
  width?: number,
  height?: number,
  searchText: string,
  searchResults: DishItem[],
  selectedItem?: DishItem,

  weights: Weight[],
  selectedWeight?: Weight,
  selectDialogVisible: boolean,
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
  textInput: any
  _opacityAnimatedValue = RX.Animated.createValue(fullHeight())
  _containerAnimationStyle = RX.Styles.createAnimatedViewStyle({
    transform: [{ translateY: this._opacityAnimatedValue }],
  })

  constructor(props: FoodDialogProps) {
    super(props)

    this.state = {
      searchText: '',
      searchResults: [],
      selectDialogVisible: false,
      weights: [],
    }
  }

  protected _buildState(props: FoodDialogProps, initialBuild: boolean): Partial<FoodDialogState> | undefined {
    return {
      width: ResponsiveWidthStore.getWidth(),
      height: ResponsiveWidthStore.getHeight(),
    }
  }

  componentDidMount(): void {
    RX.Animated.timing(this._opacityAnimatedValue, {
      toValue: 0,
    }).start(() => {
      // this.textInput.focus()
    })
  }

  render() {
    return (
      <Modal
        modalId={MODAL_ID}
        // modalWidth={this.state.width}
        // modalHeight={this.state.height}
      >
        <RX.View>
          <SelectFood
            onDismiss={this.dismiss}
            onSubmit={(dishItem) => {
              this.props.onSubmit(dishItem)
              this.dismiss()
            }}
          />
          {this._renderSelectDialog()}
        </RX.View>
      </Modal>
    )
  }

  _renderSelectDialog = () => {
    if (!this.state.selectedItem) return null
    if (!this.state.selectDialogVisible) return null

    return (
      <SelectDialog
        options={[
          { value: 'g', text: 'gram' },
          ...this.state.weights.map(w => ({
            text: w.description,
            value: w.id,
          })),
        ]}
        onOptionSelect={option => this.setState({ selectedWeight: this.state.weights.find(p => p.id === option.value) })}
        onDismiss={() => this.setState({ selectDialogVisible: false })}
      />
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

// @ts-ignore
const styles = {
  wrapper: RX.Styles.createViewStyle({
    //
  }),
}
