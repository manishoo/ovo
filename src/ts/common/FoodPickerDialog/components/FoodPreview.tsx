/*
 * FoodPreview.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import FilledButton from '@Common/FilledButton/FilledButton'
import {
  FoodPreviewMealItem,
  FoodPreviewMealItem_unit,
  FoodPreviewMealItem_unit_Weight
} from '@Common/FoodPickerDialog/components/types/FoodPreviewMealItem'
import Image from '@Common/Image/Image'
import IngredientCard from '@Common/IngredientCard/IngredientCard'
import InputNumber from '@Common/Input/InputNumber'
import IntlInput from '@Common/Input/IntlInput'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Modal from '@Common/Modal/Modal'
import Select, { Option } from '@Common/Select/Select'
import Text from '@Common/Text/Text'
import { determineIfIsFood } from '@Utils/transformers/meal.transformer'
import gql from 'graphql-tag'
import RX from 'reactxp'


export function determineIfIsWeight(toBeDetermined: FoodPreviewMealItem_unit): toBeDetermined is FoodPreviewMealItem_unit_Weight {
  return toBeDetermined.hasOwnProperty('id')
}

const MODAL_ID = 'FoodPreview'
const TEXT_HEADING_WIDTH = 200

interface FoodPreviewProps {
  style?: any,
  onDismiss: () => any,
  inputRef: (ref: any) => any,
  mealItem: FoodPreviewMealItem,
  onSubmit: (mealItem: FoodPreviewMealItem) => void,
  height: number
}

interface FoodPreviewState {
  mealItem: FoodPreviewMealItem,
  selectedWeightValue?: string,
}

export default class FoodPreview extends RX.Component<FoodPreviewProps, FoodPreviewState> {
  static fragments = {
    mealItem: gql`
      fragment FoodPreviewMealItem on MealItem {
        id
        name {text locale}
        description {text locale}
        amount
        customUnit {
          gramWeight
          name { text locale }
        }
        isOptional
        unit {
          ... on Weight {
            amount
            gramWeight
            id
            name { text locale }
          }
          ... on CustomUnit {
            gramWeight
            name { text locale }
          }
        }
        item {
          ... on Food {
            ...IngredientFood
          }
          ... on Recipe {
            ...IngredientRecipe
          }
        }
      }

      ${IngredientCard.fragments.food}
      ${IngredientCard.fragments.recipe}
    `
  }

  constructor(props: FoodPreviewProps) {
    super(props)

    let selectedWeightValue

    if (this.props.mealItem.unit) {
      if (determineIfIsWeight(this.props.mealItem.unit)) {
        selectedWeightValue = this.props.mealItem.unit.id
      } else {
        selectedWeightValue = 'custom'
      }
    }

    this.state = {
      mealItem: this.props.mealItem,
      selectedWeightValue
    }
  }

  public render() {
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

  private _onSubmit = () => {
    this.props.onSubmit(this.state.mealItem)
    this.props.onDismiss()
  }

  private _onMealItemChange = (mealItem: Partial<FoodPreviewMealItem>) => {
    this.setState(prevState => ({
      mealItem: {
        ...prevState.mealItem,
        ...mealItem,
      }
    }))
  }

  private _renderContent = (theme: Theme) => {
    const { mealItem } = this.state
    const { inputRef } = this.props

    if (!mealItem.item) return null

    const units: Option[] = [
      { value: undefined, text: determineIfIsFood(mealItem.item) ? translate('g') : translate('serving') },
      { value: 'custom', text: translate('Custom Weight') },
    ]

    if (determineIfIsFood(mealItem.item)) {
      units.splice(1, 0, ...mealItem.item.weights.map(w => ({
        value: w.id,
        text: <Text translations={w.name} />,
      })))
    }

    return [
      <RX.View
        style={styles.firstRow}
      >
        <Image
          source={mealItem.item.thumbnail ? mealItem.item.thumbnail.url : ''}
          style={styles.imageStyle}
          resizeMode={'cover'}
        />
        <RX.View>
          <RX.View
            style={styles.textHeadingContainer}
          >
            <Text
              style={styles.bigTitle}
              translations={determineIfIsFood(mealItem.item) ? mealItem.item.name : mealItem.item.title}
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
          <InputNumber
            autoFocus
            inputRef={inputRef}
            value={mealItem.amount}
            onChange={amount => this._onMealItemChange({ amount })}
            label={translate('Amount')}
            keyboardType={'number-pad'}
            style={[styles.row, { [Styles.values.marginEnd]: Styles.values.spacing / 2 }]}
          />
          <RX.View style={[styles.row, { [Styles.values.marginStart]: Styles.values.spacing / 2 }]}>
            <Text translate style={[styles.label, { color: theme.colors.labelInput }]}>Unit</Text>
            <Select
              value={this.state.selectedWeightValue}
              options={units}
              onChange={(value) => this.setState({
                selectedWeightValue: value,
              }, () => {
                let unit: FoodPreviewMealItem_unit | null = null
                let customUnit = mealItem.customUnit

                if (value) {
                  if (value === 'custom') {
                    customUnit = mealItem.customUnit || {
                      name: [],
                      gramWeight: null
                    }
                    unit = customUnit
                  } else if (mealItem.item && determineIfIsFood(mealItem.item)) {
                    unit = mealItem.item.weights.find(p => p.id === value) || null
                  }
                }

                this._onMealItemChange({
                  unit,
                  customUnit
                })
              })}
            />
          </RX.View>
        </RX.View>
        {
          mealItem.unit && !determineIfIsWeight(mealItem.unit) &&
          <RX.View
            style={styles.flex1}
          >
            <IntlInput
              autoFocus
              inputRef={inputRef}
              translations={mealItem.unit.name}
              onTranslationsChange={customUnitName => this._onMealItemChange({
                unit: {
                  ...mealItem.unit,
                  gramWeight: mealItem.unit!.gramWeight,
                  name: customUnitName
                },
                customUnit: {
                  gramWeight: mealItem.unit!.gramWeight,
                  name: customUnitName
                }
              })}
              label={translate('weightName')}
              style={[styles.row, { [Styles.values.marginEnd]: Styles.values.spacing / 2 }]}
            />
            <InputNumber
              inputRef={inputRef}
              value={mealItem.unit.gramWeight}
              onChange={gramWeight => this._onMealItemChange({
                unit: {
                  ...mealItem.unit,
                  name: mealItem.unit!.name,
                  gramWeight,
                },
                customUnit: {
                  name: mealItem.unit!.name,
                  gramWeight,
                }
              })}
              label={translate('gramWeight')}
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
            translations={mealItem.description || []}
            onTranslationsChange={description => this._onMealItemChange({ description })}
            label={translate('Description')}
            style={{ flex: 1 }}
          />
        </RX.View>
      </RX.View>,
      <FilledButton
        label={translate('AddIngredient')}
        onPress={this._onSubmit}
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
            width: 500,
            height: 500,
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
