/*
 * ChatInput.tsx
 * Copyright: Ouranos Studio 2019
 */

import { translate } from 'common/LocalizedText/LocalizedText'
import UserMeals from 'common/UserMeals/UserMeals'
import isEqual from 'lodash/isEqual'
import RX from 'reactxp'
import AppConfig from 'src/ts/app/AppConfig'
import Styles from 'src/ts/app/Styles'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import { Food } from 'src/ts/models/FoodModels'
import { AssistantExpectations, MessageType } from 'src/ts/models/global-types'
import { generateHeightRange, generateWeightRange } from 'src/ts/utilities'
import {
  IntroductionMutation_setup_messages_data,
  IntroductionMutation_setup_messages_data_items, IntroductionMutation_setup_messages_data_user
} from 'src/ts/views/Introduction/types/IntroductionMutation'
import FoodAutocomplete from './FoodAutocomplete'
import InputForm from './InputForm'
import MealSettings from './MealSettings/MealSettings'
import Picker from './Picker/Picker'
import SubmitButton from './SubmitButton'


type Item = IntroductionMutation_setup_messages_data_items

export interface MessageInput {
  inputType: MessageType,
  expect: AssistantExpectations,
  mealPlanSettings: any,
  skip: boolean,
  items?: Item[],
  data: IntroductionMutation_setup_messages_data,
}

interface ChatInputProps {
  style?: any,
  onSubmit: any,
  loading: boolean,
  onHeightChange: (bottomMargin: number, bottomPadding?: number) => any,
  input: MessageInput,
  toggleMainKeyboardAvoidable: (enabled: boolean) => void,
  onOpenMealPlan: (user: IntroductionMutation_setup_messages_data_user) => any,
  introductionWidth: number
}

interface ChatInputState {
  message: string,
}

function getKeyboardType(inputType: string) {
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

function getPlaceholder(expect: AssistantExpectations) {
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
  animatedBottomValue = RX.Animated.createValue(-330)
  picker: any
  userMeals: any

  public render() {
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

    const animatedStyle = RX.Styles.createAnimatedViewStyle({
      bottom: this.animatedBottomValue,
    })

    const createViewStyle = () => {
      if (MessageType.form === inputType) {
        return {
          ...containerStyle,
          width: this.props.introductionWidth,
          height: 400,
        }
      }
      if ((MessageType.weight === inputType) || (MessageType.height === inputType)) {
        return {
          ...containerStyle,
          height: 120,
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
      case MessageType.food:
        return (
          <FoodAutocomplete
            skip={skip ? 'Nope' : undefined}
            onSkip={this.onSkip}
            onSubmit={this.onFoodSubmit}
            style={{
              position: 'absolute',
              bottom: 0,
            }}
          />
        )
      case MessageType.select:
      case MessageType.weight:
      case MessageType.text:
      case MessageType.password:
      case MessageType.number:
      case MessageType.form:
      default:
        return (
          <ThemeContext.Consumer>
            {({ theme }) => (
              [
                ((MessageType.select === inputType) && (items)) && <RX.ScrollView
                  // scrollEnabled={!(items && items.length <= 2)}
                  key='sc'
                  style={[
                    styles.selectItemContainer,
                    { width: this.props.introductionWidth },
                    // (items && items.length <= 2) ? {
                    //   // justifyContent: 'center',
                    //   // alignItems: 'center',
                    // } : {},
                  ]}
                  // @ts-ignore
                  // contentContainerStyle={(items && items.length <= 2) ? {
                  // 	justifyContent: 'center',
                  // 	alignItems: 'center',
                  // } : {}}
                  horizontal={AppConfig.getPlatformType() !== 'web'}
                  vertical={AppConfig.getPlatformType() === 'web'}
                >
                  {
                    items.map(item => (
                      <RX.View
                        key={item.text}
                        style={[styles.selectItem, { backgroundColor: theme.colors.assistantUserMessageBG }]}
                        onPress={this.onSelectSubmit(item)}
                        activeOpacity={0.8}
                      >
                        <RX.Text
                          style={[styles.selectItemText, { color: theme.colors.assistantUserMessageTextColor }]}>{item.text}</RX.Text>
                      </RX.View>
                    ))
                  }
                </RX.ScrollView>,
                <RX.Animated.View
                  key='scs'
                  style={[
                    createViewStyle(),
                    { backgroundColor: theme.colors.white },
                    animatedStyle,
                  ]}
                >
                  {
                    (() => {
                      if (MessageType.form === inputType) {
                        return (
                          <RX.ScrollView>
                            <InputForm
                              onSubmit={this.onFormSubmit}
                            />
                          </RX.ScrollView>
                        )
                      }

                      if (MessageType.mealPlanSettings === inputType) {
                        return (
                          <MealSettings
                            onSubmit={this.onMealSettingsSubmit}
                            settings={mealPlanSettings}
                          />
                        )
                      }

                      if (MessageType.meals === inputType) {
                        return [
                          <RX.ScrollView
                            style={{
                              padding: Styles.values.spacing,
                              paddingBottom: 65,
                            }}
                          >
                            <UserMeals
                              ref={ref => this.userMeals = ref}
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
                            onPress={this.onMealsSubmit}
                            disabled={loading}
                          />
                        ]
                      }

                      if (MessageType.weight === inputType) {
                        return [
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
                          />,
                          <SubmitButton
                            key='button'
                            disabled={loading}
                            style={[
                              styles.submitButton,
                              { bottom: Styles.values.spacing }
                            ]}
                            onPress={this.onPickerSubmit}
                          />
                        ]
                      }

                      if (MessageType.height === inputType) {
                        return [
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
                          />,
                          <SubmitButton
                            key='button'
                            style={[
                              styles.submitButton,
                              { bottom: Styles.values.spacing }
                            ]}
                            onPress={this.onPickerSubmit}
                            disabled={loading}
                          />
                        ]
                      }

                      return (
                        <RX.View
                          style={styles.textInputContainer}
                        >
                          <RX.TextInput
                            key='textinput'
                            value={message}
                            keyboardType={getKeyboardType(inputType)}
                            // multiline
                            placeholder={loading ? translate('AssistantInputPlaceholder') : getPlaceholder(expect)}
                            returnKeyType='send'
                            secureTextEntry={MessageType.password == inputType}
                            style={[styles.textInput, { width: this.props.introductionWidth * 0.77 }]}
                            onChangeText={this.onChangeText}
                            onSubmitEditing={this.onTextSubmit}
                          />
                          <SubmitButton
                            skip={skip ? 'Nope' : undefined}
                            style={styles.submitButton}
                            onPress={this.onTextSubmit}
                            disabled={loading || !message}
                          />
                        </RX.View>
                      )
                    })()
                  }
                </RX.Animated.View>
              ]
            )}
          </ThemeContext.Consumer>
        )
    }
  }

  onChangeText = (text: string) => {
    this.setState({
      message: text,
    })
  }

  onFoodSubmit = (data: Food[]) => {
    const { onSubmit } = this.props
    let text = ''
    data.map((f: Food) => {
      text += `${f.name}, `
    })

    onSubmit({
      text,
      data: JSON.stringify({
        foods: data.map(f => f.id)
      }),
    })
  }

  onSkip = (text: string) => {
    const { onSubmit } = this.props

    onSubmit({
      text,
      data: JSON.stringify({
        skip: true,
      }),
    })
  }

  onPickerSubmit = () => {
    const { onSubmit } = this.props
    const pickerValues: { [k: string]: any } = this.picker.getValues()

    onSubmit({
      text: Object.keys(pickerValues).map((i: string) => pickerValues[i]).join(''),
      data: JSON.stringify({
        value: +pickerValues.selectedItem0,
        unit: pickerValues.selectedItem1,
      }),
    })
  }

  onFormSubmit = (formData: any) => {
    let message = ''
    for (let key in formData) {
      const item = formData[key]
      if (item.name == 'password') {
        message += `${item.title}: ${item.value.replace(/./g, '•')}\n`
      } else {
        message += `${item.title}: ${item.value}\n`
      }
    }

    this.props.onSubmit({
      text: message,
      data: JSON.stringify({
        username: formData.username.value,
        email: formData.email.value,
        password: formData.password.value,
        timeZone: formData.timeZone,
      })
    })
  }

  onTextSubmit = () => {
    this.setState({
      message: '',
    })
    this.props.onSubmit({
      text: this.state.message,
      input: this.props.input,
    })
  }

  onSelectSubmit = ({ text, value }: Item) => () => {
    switch (this.props.input.expect) {
      case AssistantExpectations.mealPlan: {
        return this.props.onOpenMealPlan(this.props.input.data.user)
      }
      default: {
        this.props.onSubmit({
          text: text,
          data: JSON.stringify({
            value,
          }),
          input: this.props.input,
        })
      }
    }
  }

  onMealsSubmit = () => {
    const { onSubmit } = this.props

    if (!this.userMeals) throw new Error('no user meals')

    const meals = this.userMeals.getMeals()

    onSubmit({
      text: meals.map(m => m.name).join(translate(translate.keys.commaAnd)),
      data: JSON.stringify({ meals: meals }),
    })
  }

  onMealSettingsSubmit = (data: any) => {
    const { onSubmit } = this.props

    onSubmit({
      text: `protein: %${data.mealPlanSettings.protein}\nfat: %${data.mealPlanSettings.fat}\ncarbs: %${data.mealPlanSettings.carbs}\nTDEE: ${data.mealPlanSettings.tdee}calories`,
      data: JSON.stringify(data),
    })
  }

  controlInputPosition = (inputType: MessageType) => {
    const { onHeightChange } = this.props

    switch (inputType) {
      case MessageType.meals: {
        let bottomAnimation = RX.Animated.timing(this.animatedBottomValue,
          { toValue: 0, duration: 350, easing: RX.Animated.Easing.InOut() })

        onHeightChange(305)
        return bottomAnimation.start()
      }
      case MessageType.form: {
        let bottomAnimation = RX.Animated.timing(this.animatedBottomValue,
          { toValue: -20, duration: 350, easing: RX.Animated.Easing.InOut() })

        onHeightChange(365)
        return bottomAnimation.start()
      }
      case MessageType.height:
      case MessageType.weight: {
        let bottomAnimation = RX.Animated.timing(this.animatedBottomValue,
          { toValue: 0, duration: 500, easing: RX.Animated.Easing.InOut() })

        onHeightChange(106)
        return bottomAnimation.start()
      }
      case MessageType.select: {
        onHeightChange(75, 50)
        let bottomAnimation = RX.Animated.timing(this.animatedBottomValue,
          {
            toValue: -400,
            duration: 350,
            easing: RX.Animated.Easing.InOut(),
          }
        )
        return bottomAnimation.start()
      }
      case MessageType.mealPlanSettings: {
        onHeightChange(310)
        let bottomAnimation = RX.Animated.timing(this.animatedBottomValue,
          {
            toValue: -70,
            duration: 350,
            easing: RX.Animated.Easing.InOut(),
          }
        )
        return bottomAnimation.start()
      }
      case MessageType.text:
      default: {
        onHeightChange(65)
        let bottomAnimation = RX.Animated.timing(this.animatedBottomValue,
          {
            toValue: -330,
            duration: 350,
            easing: RX.Animated.Easing.InOut(),
          }
        )
        bottomAnimation.start()
      }
    }
  }

  shouldComponentUpdate(nextProps: Readonly<ChatInputProps>, nextState: Readonly<ChatInputState>): boolean {
    return !isEqual(nextProps.input, this.props.input) || !isEqual(nextState, this.state) || !isEqual(nextProps.loading, this.props.loading)
  }

  UNSAFE_componentWillUpdate(nextProps: Readonly<ChatInputProps>): void {
    this.controlInputPosition(nextProps.input.inputType)
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
    borderBottomWidth: 1,
    borderColor: '#eee',
    [Styles.values.marginStart]: Styles.values.spacing,
  }),
  selectItemContainer: RX.Styles.createViewStyle({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    height: 100,
    padding: 10,
    flexDirection: 'row',
  }),
  selectItem: RX.Styles.createViewStyle({
    padding: 15,
    // borderWidth: 1,
    borderRadius: 100,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  selectItemText: RX.Styles.createTextStyle({
    fontWeight: 'bold',
    fontSize: 18,
  }),
  submitButton: RX.Styles.createViewStyle({
    position: 'absolute',
    [Styles.values.end]: 10,
    bottom: 0,
  })
}
