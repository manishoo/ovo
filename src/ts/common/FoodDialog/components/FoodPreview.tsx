/*
 * FoodPreview.tsx
 * Copyright: Ouranos Studio 2019
 */

import FilledButton from 'common/FilledButton/FilledButton'
import {
  SelectFoodQuery_foods_foods,
  SelectFoodQuery_foods_foods_weights
} from 'common/FoodDialog/types/SelectFoodQuery'
import Image from 'common/Image/Image'
import Input from 'common/Input/Input'
import IntlInput from 'common/Input/IntlInput'
import { getLocalizedText } from 'common/LocalizedText/LocalizedText'
import Modal from 'common/Modal/Modal'
import Select from 'common/Select/Select'
import Text from 'common/Text/Text'
import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { Theme } from 'src/ts/app/Theme'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { Translation } from 'src/ts/models/common'
import { MealItem } from 'src/ts/models/FoodModels'


const MODAL_ID = 'FoodPreview'
const TEXT_HEADING_WIDTH = 200

interface FoodPreviewProps {
  style?: any,
  onDismiss: () => any,
  inputRef: (ref: any) => any,
  item: MealItem,
  onSubmit: (food: SelectFoodQuery_foods_foods, amount: number, weight?: SelectFoodQuery_foods_foods_weights, customUnit?: string, gramWeight?: number, description?: Translation[]) => void,
  height: number
}

interface FoodPreviewState {
  amount: number,
  description: Translation[],
  selectedWeight?: SelectFoodQuery_foods_foods_weights,
  weight?: SelectFoodQuery_foods_foods_weights,
  customUnit?: string,
  gramWeight: number,
  selectedWeightValue?: string,
}

export default class FoodPreview extends RX.Component<FoodPreviewProps, FoodPreviewState> {
  constructor(props: FoodPreviewProps) {
    super(props)


    let selectedWeightValue

    if (props.item.customUnit && !props.item.weight) {
      selectedWeightValue = 'custom'
    }

    if (props.item.weight) {
      selectedWeightValue = props.item.weight.id
    }



    this.state = {
      amount: props.item.amount || 1,
      description: props.item.description || [],
      weight: props.item.weight || {
        amount: 1,
        gramWeight: 1,
        id: String(Math.random()),
        name: [],
      },
      gramWeight: props.item.gramWeight || 1,
      customUnit: props.item.customUnit,
      selectedWeightValue,
      selectedWeight: props.item.weight,
    }
  }

  render() {
    const { style } = this.props

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <RX.View
            style={[styles.previewContainer, style]}
          >
            {this._renderContent(theme)}

            <RX.View
              onPress={this._dismiss}
              style={styles.cancelSelectedMealContainer}
            >
              <Text translate style={[styles.cancelText, { color: theme.colors.primary }]}>Cancel</Text>
            </RX.View>
          </RX.View>
        )}
      </ThemeContext.Consumer>
    )
  }

  private _onSubmit = (food: SelectFoodQuery_foods_foods) => () => {
    this.props.onSubmit(
      food,
      this.state.amount,
      this.state.selectedWeight,
      this.state.selectedWeightValue === 'custom' ? this.state.customUnit : undefined,
      this.state.selectedWeightValue === 'custom' ? this.state.gramWeight : undefined,
      this.state.description,
    )
    this.props.onDismiss()
  }

  private _renderContent = (theme: Theme) => {
    const { inputRef, item } = this.props

    const food = item.food!

    return [
      <RX.View
        style={styles.firstRow}
      >
        <Image
          source={food.thumbnailUrl ? food.thumbnailUrl.url : ''}
          style={styles.imageStyle}
          resizeMode={'cover'}
        />
        <RX.View>
          <RX.View
            style={styles.textHeadingContainer}
          >
            <Text
              style={styles.bigTitle}
              translations={food.name}
            />
          </RX.View>
        </RX.View>
      </RX.View>,
      <RX.View
        style={styles.secondRow}
      >
        <RX.View
          style={styles.flex1}
        >
          <Input
            autoFocus
            inputRef={inputRef}
            value={String(this.state.amount)}
            onChange={(amount: string) => this.setState({ amount: Number(amount) })}
            label={getLocalizedText('Amount')}
            keyboardType={'number-pad'}
            style={[styles.row, { [Styles.values.marginEnd]: Styles.values.spacing / 2 }]}
          />
          <RX.View style={[styles.row, { [Styles.values.marginStart]: Styles.values.spacing / 2 }]}>
            <Text translate style={[styles.label, { color: theme.colors.labelInput }]}>Unit</Text>
            <Select
              value={this.state.selectedWeightValue}
              options={[
                { value: undefined, text: <Text translate>g</Text> },
                ...food.weights.map(w => ({
                  value: w.id,
                  text: <Text translations={w.name} />,
                })),
                { value: 'custom', text: <Text>Custom Weight</Text> },
              ]}
              onChange={(value) => this.setState({
                selectedWeightValue: value,
                selectedWeight: food.weights.find(p => p.id === value),
              })}
            />
          </RX.View>
        </RX.View>
        {
          this.state.selectedWeightValue === 'custom' &&
          <RX.View
            style={styles.flex1}
          >
            <Input
              autoFocus
              inputRef={inputRef}
              value={this.state.customUnit}
              onChangeText={customWeight => this.setState({ customUnit: customWeight })}
              label={getLocalizedText('weightName')}
              keyboardType={'number-pad'}
              style={[styles.row, { [Styles.values.marginEnd]: Styles.values.spacing / 2 }]}
            />
            <Input
              inputRef={inputRef}
              value={String(this.state.gramWeight)}
              onChangeText={gramWeight => this.setState({ gramWeight: Number(gramWeight) })}
              label={getLocalizedText('gramWeight')}
              keyboardType={'number-pad'}
              style={[styles.row, { [Styles.values.marginStart]: Styles.values.spacing / 2 }]}
            />
          </RX.View>
        }
        <RX.View
          style={styles.flex1}
        >
          <IntlInput
            inputRef={inputRef}
            translations={this.state.description}
            onTranslationsChange={translations => this.setState({ description: translations })}
            label={getLocalizedText('Description')}
            style={{ flex: 1 }}
          />
        </RX.View>
        {/*<RX.View
          style={styles.chartContainer}
        >
          <RX.Text
            style={[styles.chartTextContainer, { color: theme.colors.subtitle }]}
          >MacroNutrients Chart</RX.Text>
        </RX.View>*/}
      </RX.View>,
      <FilledButton
        label={getLocalizedText('AddIngredient')}
        onPress={this._onSubmit(food)}
        containerStyle={styles.addToMeal}
      />
    ]
  }

  private _dismiss = () => {
    this.props.onDismiss()
  }
}

export function showFoodPreviewModal(props: FoodPreviewProps) {
  RX.Modal.show(
    <Modal
      modalId={MODAL_ID}
      modalWidth={500}
      modalHeight={500}
    >
      <RX.View
        style={[
          {
            flex: 1,
            backgroundColor: '#fff',
            borderRadius: 8,
          }
        ]}
      >
        <FoodPreview
          {...props}
          style={{
            position: 'absolute',
            top: Styles.values.spacing * 2,
            left: Styles.values.spacing * 2,
            right: Styles.values.spacing * 2,
          }}
          onDismiss={() => Modal.dismissAnimated(MODAL_ID)}
        />
      </RX.View>
    </Modal>,
    MODAL_ID
  )
}

const styles = {
  previewContainer: RX.Styles.createViewStyle({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // padding: Styles.values.spacing,
    // paddingTop: 70,
  }),
  cancelSelectedMealContainer: RX.Styles.createViewStyle({
    position: 'absolute',
    [Styles.values.end]: -16,
    top: -16,
    // width: 50,
    // height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Styles.values.spacing,
    cursor: 'pointer',
  }),
  cancelText: RX.Styles.createTextInputStyle({
    fontWeight: 'bold',
  }),
  firstRow: RX.Styles.createViewStyle({
    flexDirection: 'row',
    paddingTop: 0,
  }),
  textHeadingContainer: RX.Styles.createViewStyle({
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    [Styles.values.marginEnd]: 50
  }),
  bigTitle: RX.Styles.createTextStyle({
    fontSize: 25,
    width: TEXT_HEADING_WIDTH,
    // wordBreak: 'break-word',
    top: 2
  }),
  smallTitle: RX.Styles.createTextStyle({
    color: 'red',
  }),
  subtitle: RX.Styles.createTextStyle({
    fontSize: 12,
  }),
  secondRow: RX.Styles.createViewStyle({
    // flexDirection: 'row',
    // alignItems: 'flex-end',
  }),
  flex1: RX.Styles.createViewStyle({
    flex: 1,
    flexDirection: 'row',
  }),
  chartContainer: RX.Styles.createViewStyle({
    flex: 1,
    borderColor: '#eee',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    borderRadius: 10,
    marginLeft: 20,
  }),
  chartTextContainer: RX.Styles.createTextStyle({
    fontSize: 12,
    width: 100,
    textAlign: 'center',
  }),
  previewStyle: RX.Styles.createImageStyle({
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 20,
    backgroundColor: '#eee'
  }),
  addToMeal: RX.Styles.createViewStyle({
    marginTop: Styles.values.spacing,
    flex: 1,
  }),
  label: RX.Styles.createTextStyle({
    fontWeight: '500',
    marginBottom: Styles.values.spacing / 2,
  }),
  imageStyle: RX.Styles.createImageStyle({
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#ddd',
    marginBottom: Styles.values.spacing,
    [Styles.values.marginEnd]: Styles.values.spacing,
  }),
  row: RX.Styles.createViewStyle({
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  })
}
