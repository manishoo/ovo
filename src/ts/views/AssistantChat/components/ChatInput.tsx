/*
 * ChatInput.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import FilledButton from '@Common/FilledButton/FilledButton'
import Input from '@Common/Input/Input'
import InputNumber from '@Common/Input/InputNumber'
import { translate } from '@Common/LocalizedText/LocalizedText'
import UserMeals from '@Common/UserMeals/UserMeals'
import { AssistantExpectations, MessageType } from '@Models/global-types'
import { generateHeightRange, generateWeightRange } from '@Utils'
// @ts-ignore FIXME
import pSBC from '@Utils/pSBC'
import {
  AssistantChatMutation_setup_messages_data,
  AssistantChatMutation_setup_messages_data_items,
  AssistantChatMutationVariables
} from '@Views/AssistantChat/types/AssistantChatMutation'
import { RegisterForm } from '@Views/Register/RegisterForm'
import { DateTime } from 'luxon'
import RX from 'reactxp'
import FoodAutocomplete from './FoodAutocomplete'
import MealSettings from './MealSettings/MealSettings'
import Picker from './Picker/Picker'
import SubmitButton from './SubmitButton'


type Item = AssistantChatMutation_setup_messages_data_items

export interface MessageInput {
  inputType: MessageType,
  expect: AssistantExpectations,
  mealPlanSettings: any,
  skip: boolean,
  items?: Item[],
  data: AssistantChatMutation_setup_messages_data,
}

interface ChatInputProps {
  style?: any,
  onSubmit: (vars: AssistantChatMutationVariables) => any,
  loading: boolean,
  onHeightChange: (bottomMargin: number, bottomPadding?: number) => any,
  input: MessageInput,
  toggleMainKeyboardAvoidable: (enabled: boolean) => void,
  onOpenMealPlan: () => any,
  introductionWidth: number,
  onGetStartedPress: () => void,
}

interface ChatInputState {
  message: string,
}

function _getKeyboardType(inputType: string) {
  switch (inputType) {
    case MessageType.number:
      return 'number-pad'
    case MessageType.email:
      return 'email-address'
    case MessageType.password:
    case MessageType.text:
    default:
      return 'default'
  }
}

function _getPlaceholder(expect: AssistantExpectations) {
  switch (expect) {
    case AssistantExpectations.gender:
      return 'Enter your gender'
    case AssistantExpectations.nickname:
      return translate('getNamePlaceholder')
    case AssistantExpectations.age:
      return translate('getAgePlaceholder')
    case AssistantExpectations.weight:
      return 'Enter your weight'
    case AssistantExpectations.height:
      return 'Enter your height'
    case AssistantExpectations.activity:
      return 'Enter your activity'
    case AssistantExpectations.goal:
      return 'Enter your goal'
    case AssistantExpectations.meals:
      return 'Enter your meals'
    case AssistantExpectations.allergy:
      return 'Enter your allergies'
    case AssistantExpectations.dislikedFoods:
      return 'Enter the foods you don\'t like'
    case AssistantExpectations.diet:
      return 'Enter your diet'
    case AssistantExpectations.chooseDiet:
      return 'Choose your diet'
    case AssistantExpectations.meal:
      return 'Enter your meal'
    case AssistantExpectations.normalRoutine:
      return 'Enter your normal routine'
    default:
      return 'Message'
  }
}

export default class ChatInput extends RX.Component<ChatInputProps, ChatInputState> {
  state = {
    message: ''
  }
  private _animatedBottomValue = RX.Animated.createValue(400)
  private _animatedStyle = RX.Styles.createAnimatedViewStyle({
    transform: [{ translateY: this._animatedBottomValue }]
  })
  private picker: any
  private _userMeals: UserMeals | null = null
  private _inputRef: any

  public render() {

    return (
      <ThemeContext.Consumer>
        {({ theme }) => this._renderInput(theme)}
      </ThemeContext.Consumer>
    )
  }

  public close = () => {
    const { onHeightChange } = this.props

    let bottomAnimation = RX.Animated.timing(this._animatedBottomValue,
      { toValue: 400, duration: 350, easing: RX.Animated.Easing.InOut() })

    onHeightChange(0)
    return bottomAnimation.start()
  }

  public open = (inputType: MessageType) => {
    const { onHeightChange } = this.props

    switch (inputType) {
      case MessageType.meals: {
        let bottomAnimation = RX.Animated.timing(this._animatedBottomValue,
          { toValue: 20, duration: 350, easing: RX.Animated.Easing.InOut() })

        onHeightChange(305)
        return bottomAnimation.start()
      }
      case MessageType.form: {
        let bottomAnimation = RX.Animated.timing(this._animatedBottomValue,
          { toValue: 20, duration: 350, easing: RX.Animated.Easing.InOut() })

        onHeightChange(385)
        return bottomAnimation.start()
      }
      case MessageType.height:
      case MessageType.weight: {
        let bottomAnimation = RX.Animated.timing(this._animatedBottomValue,
          { toValue: 0, duration: 500, easing: RX.Animated.Easing.InOut() })

        onHeightChange(65 + 16)
        return bottomAnimation.start()
      }
      case MessageType.select: {
        onHeightChange(65 + 16)
        let bottomAnimation = RX.Animated.timing(this._animatedBottomValue,
          {
            toValue: 330,
            duration: 350,
            easing: RX.Animated.Easing.InOut(),
          }
        )
        return bottomAnimation.start()
      }
      case MessageType.mealPlanSettings: {
        onHeightChange(310)
        let bottomAnimation = RX.Animated.timing(this._animatedBottomValue,
          {
            toValue: 70,
            duration: 350,
            easing: RX.Animated.Easing.InOut(),
          }
        )
        return bottomAnimation.start()
      }
      case MessageType.text:
      default: {
        if (this._inputRef) {
          this._forceFocusInput()
        }

        onHeightChange(65 + 16)
        let bottomAnimation = RX.Animated.timing(this._animatedBottomValue, {
          toValue: 330,
          duration: 350,
          easing: RX.Animated.Easing.InOut(),
        })
        bottomAnimation.start()
      }
    }
  }

  componentDidMount() {
    this.open(this.props.input.inputType)
  }

  private _renderInput = (theme: Theme) => {
    const {
      input: {
        inputType,
        items,
        skip,
        expect,
        mealPlanSettings,
        data
      },
      loading,
    } = this.props
    const { message } = this.state

    const createViewStyle = () => {
      if (MessageType.form === inputType) {
        return {
          ...containerStyle,
          width: this.props.introductionWidth,
          paddingBottom: 0,
          height: 400,
        }
      }
      if ((MessageType.weight === inputType) || (MessageType.height === inputType)) {
        return {
          ...containerStyle,
          height: 67,
          width: this.props.introductionWidth,
        }
      }
      if (MessageType.meals === inputType) {
        return {
          ...containerStyle,
          width: this.props.introductionWidth,
          height: 320,
        }
      }
      return {
        ...containerStyle,
        width: this.props.introductionWidth,
      }
    }

    switch (inputType) {
      case MessageType.ack:
        return (
          <RX.View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: Styles.values.spacing,
            }}
          >
            <FilledButton
              label={expect === AssistantExpectations.mealPlan ? translate(translate.keys.Ok) : translate(translate.keys.hiAssistant)}
              onPress={expect === AssistantExpectations.mealPlan ? this.props.onOpenMealPlan : this.props.onGetStartedPress}
            />
          </RX.View>
        )
      case MessageType.food:
        return (
          <FoodAutocomplete
            skip={skip ? 'Nope' : undefined}
            onSkip={this._onSkip}
            onSubmit={this._onFoodsSubmit}
            style={{
              position: 'absolute',
              bottom: 0,
            }}
          />
        )
      case MessageType.select:
        return (
          <RX.ScrollView
            // scrollEnabled={false}
            horizontal
            style={styles.selectItemContainer}
          >
            {
              items.map(item => (
                <RX.View
                  key={item.text}
                  style={[styles.selectItem, {
                    backgroundColor: theme.colors.assistantUserMessageBG,
                    borderWidth: 2,
                    borderColor: pSBC(-0.5, theme.colors.assistantUserMessageBG)
                  }]}
                  onPress={this._onSelectSubmit(item)}
                  activeOpacity={0.8}
                >
                  <RX.Text
                    style={[styles.selectItemText, { color: theme.colors.assistantUserMessageTextColor }]}>{item.text}</RX.Text>
                </RX.View>
              ))
            }
          </RX.ScrollView>
        )
      default:
        return (
          <RX.Animated.View
            key='scs'
            style={[
              createViewStyle(),
              { backgroundColor: theme.colors.white },
              this._animatedStyle,
            ]}
          >
            {
              (() => {
                switch (inputType) {
                  case MessageType.height:
                    return (
                      <RX.View style={{ flexDirection: 'row' }}>
                        <Picker
                          key='h-picker'
                          ref={ref => this.picker = ref}
                          defaultValues={[
                            '170',
                            'cm'
                          ]}
                          pickers={[
                            generateHeightRange(),
                            [
                              {
                                label: 'cm',
                                value: 'cm',
                              },
                            ],
                          ]}
                        />
                        <SubmitButton
                          key='button'
                          disabled={loading}
                          onPress={this._onPickerSubmit}
                        />
                      </RX.View>
                    )
                  case MessageType.weight:
                    return (
                      <RX.View style={{ flexDirection: 'row' }}>
                        <Picker
                          key='picker'
                          ref={ref => this.picker = ref}
                          defaultValues={[
                            '70',
                            'kg'
                          ]}
                          pickers={[
                            generateWeightRange(),
                            [
                              {
                                label: 'kg',
                                value: 'kg',
                              },
                              {
                                label: 'pound',
                                value: 'pound',
                              },
                            ],
                          ]}
                        />
                        <SubmitButton
                          key='button'
                          disabled={loading}
                          onPress={this._onPickerSubmit}
                        />
                      </RX.View>
                    )
                  case MessageType.meals:
                    return [
                      <RX.ScrollView
                        style={{
                          padding: Styles.values.spacing,
                          paddingBottom: 65,
                        }}
                      >
                        <UserMeals
                          ref={ref => this._userMeals = ref}
                          meals={data.meals}
                        />
                      </RX.ScrollView>,
                      <SubmitButton
                        key='button'
                        style={[
                          styles.submitButton,
                          {
                            bottom: Styles.values.spacing
                          }
                        ]}
                        onPress={this._onMealsSubmit}
                        disabled={loading}
                      />
                    ]
                  case MessageType.mealPlanSettings:
                    return (
                      <MealSettings
                        onSubmit={this._onMealSettingsSubmit}
                        settings={mealPlanSettings}
                      />
                    )
                  case MessageType.form:
                    return (
                      <RX.ScrollView>
                        <RegisterForm
                          maxWidth
                          onSubmit={this._onFormSubmit}
                        />
                      </RX.ScrollView>
                    )
                  case MessageType.text:
                  case MessageType.password:
                  case MessageType.number:
                    let InputComponent

                    if (inputType === MessageType.number) {
                      InputComponent = InputNumber
                    } else {
                      InputComponent = Input
                    }

                    return (
                      <RX.View
                        style={styles.textInputContainer}
                      >
                        <InputComponent
                          inputRef={(ref: any) => this._inputRef = ref}
                          value={message}
                          keyboardType={_getKeyboardType(inputType)}
                          placeholder={loading ? translate('AssistantInputPlaceholder') : _getPlaceholder(expect)}
                          returnKeyType='send'
                          textInputStyle={{ flex: 1, backgroundColor: 'transparent', borderWidth: 0 }}
                          secureTextEntry={MessageType.password == inputType}
                          style={[styles.textInput, { width: this.props.introductionWidth * 0.77 }]}
                          onChange={this._onChangeText}
                          onSubmitEditing={this._onTextSubmit}
                        />
                        <SubmitButton
                          skip={skip ? 'Nope' : undefined}
                          style={styles.submitButton}
                          onPress={this._onTextSubmit}
                          disabled={loading || !message}
                        />
                      </RX.View>
                    )
                }
              })()
            }
          </RX.Animated.View>
        )
    }
  }

  private _onChangeText = (message: string) => {
    this.setState({
      message,
    })
  }

  private _onFoodsSubmit = (data: any[]) => {
    const { onSubmit } = this.props
    let message = ''

    data.map((f: any) => {
      message += `${f.name}, `
    })

    onSubmit({
      message,
      data: JSON.stringify({
        foods: data.map(f => f.id)
      }),
    })
  }

  private _onSkip = (message: string) => {
    const { onSubmit } = this.props

    onSubmit({
      message,
      data: JSON.stringify({
        skip: true,
      }),
    })
  }

  private _onPickerSubmit = () => {
    const { onSubmit } = this.props
    const pickerValues: { [k: string]: any } = this.picker.getValues()

    onSubmit({
      message: Object.keys(pickerValues).map((i: string) => pickerValues[i]).join(''),
      data: JSON.stringify({
        value: +pickerValues.selectedItem0,
        unit: pickerValues.selectedItem1,
      }),
    })
  }

  private _onFormSubmit = ({ user }: any) => {
    let message = ''
    for (let key in user) {
      const item = user[key]
      if (key == 'password') {
        message += `${key}: ${item.replace(/./g, '•')}\n\n`
      } else {
        message += `${key}: ${item}\n\n`
      }
    }

    this.props.onSubmit({
      message,
      data: JSON.stringify({
        username: user.username,
        email: user.email,
        password: user.password,
        timeZone: DateTime.local().zoneName,
      })
    })
  }

  private _onTextSubmit = () => {
    this.setState({
      message: '',
    })

    this.props.onSubmit({
      message: this.state.message,
    })
  }

  private _onSelectSubmit = ({ text, value }: Item) => () => {
    this.props.onSubmit({
      message: text,
      data: JSON.stringify({
        value,
      }),
    })
  }

  private _onMealsSubmit = () => {
    const { onSubmit } = this.props

    if (!this._userMeals) throw new Error('no user meals')

    const meals = this._userMeals.getMeals()

    onSubmit({
      message: meals.map(m => m.name).join(translate(translate.keys.commaAnd)),
      data: JSON.stringify({ meals: meals }),
    })
  }

  private _onMealSettingsSubmit = (data: any) => {
    const { onSubmit } = this.props

    onSubmit({
      message: `protein: %${data.mealPlanSettings.protein}\nfat: %${data.mealPlanSettings.fat}\ncarbs: %${data.mealPlanSettings.carbs}\nTDEE: ${data.mealPlanSettings.tdee}calories`,
      data: JSON.stringify(data),
    })
  }

  private _forceFocusInput = () => {
    setTimeout(() => {
      if (this._inputRef) {
        this._inputRef.focus()
      } else {
        this._forceFocusInput()
      }
    }, 500)
  }
}

const containerStyle: RX.Types.ViewStyle = {
  position: 'absolute',
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  borderWidth: 1,
  borderColor: '#eee',
  bottom: 0,
  paddingBottom: 10,
  paddingTop: 10,
  height: 400,
}

const styles = {
  textInputContainer: RX.Styles.createViewStyle({
    flexDirection: 'row',
    [Styles.values.paddingEnd]: Styles.values.spacing * 3,
    minHeight: 50,
  }),
  textInput: RX.Styles.createTextInputStyle({
    flex: 1,
    // borderBottomWidth: 1,
    // borderColor: '#eee',
    [Styles.values.marginStart]: Styles.values.spacing,
    marginBottom: 0,
  }),
  selectItemContainer: RX.Styles.createViewStyle({
    // @ts-ignore web
    display: 'flex',

    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // backgroundColor: 'transparent',
    height: 51 + AppConfig.defaultScrollBarWidth,
    paddingBottom: AppConfig.defaultScrollBarWidth,
    flexDirection: 'row',
  }),
  selectItem: RX.Styles.createViewStyle({
    paddingHorizontal: 15,
    paddingVertical: 10,
    // borderWidth: 1,
    borderRadius: 100,
    // marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    minHeight: 51,
    [Styles.values.marginEnd]: Styles.values.spacing / 2,
  }),
  selectItemText: RX.Styles.createTextStyle({
    fontWeight: 'bold',
    // fontSize: 18,
  }),
  submitButton: RX.Styles.createViewStyle({
    position: 'absolute',
    [Styles.values.end]: 10,
    bottom: 0,
  })
}
