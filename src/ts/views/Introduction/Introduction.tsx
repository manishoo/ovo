/*
 * Introduction.tsx
 * Copyright: Ouranos Studio 2019
 */

import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import Assistant from '@Common/Assistant/Assistant'
import LinearGradient from '@Common/LinearGradient/LinearGradient'
import LocalizedText, { translate } from '@Common/LocalizedText/LocalizedText'
import { Routes } from '@Models/common'
import { AssistantExpectations, MessageSender, MessageType } from '@Models/global-types'
import KeyboardAvoidable from '@Modules/KeyboardAvoidable'
import LocationStore from '@Services/LocationStore'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import UserStore from '@Services/UserStore'
import { navigate } from '@Utils'
import {
  IntroductionMutation,
  IntroductionMutation_setup_messages,
  IntroductionMutationVariables
} from '@Views/Introduction/types/IntroductionMutation'
import MealSettingsScreen from '@Views/MealSettingsScreen/MealSettingsScreen'
import { RegisterForm } from '@Views/Register/RegisterForm'
import gql from 'graphql-tag'
import { Mutation, MutationFn } from 'react-apollo'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import ChatBox from './components/ChatBox'
import ChatInput from './components/ChatInput'
import { createMessage, getLastInputType } from './utils'


const INITIAL_MESSAGES: IntroductionMutation_setup_messages[] = [
  {
    text: translate('assistantIntro1'),
    type: MessageType.text,
    timestamp: String(Date.now()),
    sender: MessageSender.assistant,
    id: String(Math.random()),
    data: {
      expect: AssistantExpectations.nickname,
      skip: false,
      items: [],
      mealPlanSettings: undefined,
      meals: [],
      user: null,
    },
  },
  {
    text: translate('assistantIntro2'),
    type: MessageType.text,
    timestamp: String(Date.now()),
    sender: MessageSender.assistant,
    id: String(Math.random()),
    data: {
      expect: AssistantExpectations.nickname,
      skip: false,
      items: [],
      mealPlanSettings: undefined,
      meals: [],
      user: null,
    },
  },
  {
    text: translate('hiAssistant'),
    type: MessageType.text,
    timestamp: String(Date.now()),
    sender: MessageSender.user,
    id: String(Math.random()),
    data: {
      expect: AssistantExpectations.nickname,
      skip: false,
      items: [],
      mealPlanSettings: undefined,
      meals: [],
      user: null,
      // @ts-ignore
      isIntroductionButton: true,
    },
  }
]

interface IntroductionProps extends RX.CommonProps {
  style?: any,
  introductionWidth?: number,
  introductionHeight?: number,
}

interface IntroductionState {
  showButtons: boolean,
  chatBoxMarginBottom: number,
  chatBoxPaddingBottom: number,
  messages: IntroductionMutation_setup_messages[],
  assistantTalking: boolean,
  keyboardAvoidableEnabled: boolean,
  width: number,
  height: number,
}

export default class Introduction extends ComponentBase<IntroductionProps, IntroductionState> {
  private chatBox: any

  constructor(props: IntroductionProps) {
    super(props)

    this.state = {
      showButtons: true,
      chatBoxMarginBottom: 0,
      chatBoxPaddingBottom: 0,
      messages: INITIAL_MESSAGES,
      assistantTalking: false,
      keyboardAvoidableEnabled: true,
      width: ResponsiveWidthStore.getWidth(),
      height: ResponsiveWidthStore.getHeight(),
    }
  }

  public render() {
    const { style } = this.props
    const {
      showButtons: showIntro,
      messages,
      chatBoxMarginBottom,
      chatBoxPaddingBottom,
      assistantTalking,
      keyboardAvoidableEnabled,
    } = this.state

    const isForm = getLastInputType(messages).inputType == MessageType.form

    return (
      <Mutation<IntroductionMutation, IntroductionMutationVariables>
        mutation={gql`
					mutation IntroductionMutation($token: String, $message: String, $data: String) {
						setup(token: $token, message: $message, data: $data) {
							token
							messages {
								id
								text
								timestamp
								sender
								type
								data {
									expect
									skip
									mealPlanSettings {
										carbs
										fat
										protein
										tdee
									}
									meals {
									  ...MealSettingsMeal
									}
									user {
									  ...Me
									}
									items {
										text
										value
									}
								}
							}
						}
					}

					${MealSettingsScreen.fragments.mealSettingsMeal}
					${RegisterForm.fragments.me}
				`}
      >
        {(setupConversation, { loading }) => (
          <ThemeContext.Consumer>
            {({ theme }) => (
              [
                <KeyboardAvoidable
                  keyboardVerticalOffset={20}
                  key={1}
                  enabled={keyboardAvoidableEnabled}
                  style={[styles.container, style]}
                >
                  {false && <LinearGradient
                    colors={[theme.colors.assistantLinearGradient1, theme.colors.assistantLinearGradient2]}
                  />}
                  <ChatBox
                    ref={ref => this.chatBox = ref}
                    loading={loading || assistantTalking}
                    bottomMargin={chatBoxMarginBottom}
                    bottomPadding={chatBoxPaddingBottom}
                    style={[
                      isForm ? styles.chatBoxWithForm : {},
                    ]}
                    scrollEnabled={!showIntro}
                    messages={messages}
                    introductionWidth={this.props.introductionWidth || this.state.width}
                    introductionHeight={this.props.introductionHeight || this.state.height}
                    onIntroduction={this.getStartedPress(setupConversation)}
                  />

                  {
                    false &&
                    this.renderIntro(theme)
                  }

                  {
                    !showIntro &&
                    <ChatInput
                      style={styles.chatInput}
                      loading={loading || assistantTalking}
                      input={getLastInputType(messages)}
                      onSubmit={this.sendMessage(setupConversation)}
                      onHeightChange={this.onHeightChange}
                      toggleMainKeyboardAvoidable={this.onMainKeyboardAvoidableToggle}
                      onOpenMealPlan={(user) => {
                        UserStore.setUser(user)
                        LocationStore.navigate(this.props, Routes.calendar)
                      }}
                      introductionWidth={this.props.introductionWidth || this.state.width}
                    />
                  }
                </KeyboardAvoidable>,
                <RX.View
                  key={2}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    marginTop: Styles.values.spacing / 2,
                    // borderTopWidth: 0,
                    // borderLeftWidth: 0,
                    // borderRightWidth: 0,
                    // paddingTop: Styles.values.spacing / 2,
                    // paddingBottom: Styles.values.spacing / 2,
                    // borderBottomWidth: 1,
                    // borderColor: theme.colors.borderLight,
                    alignItems: 'center',
                    // backgroundColor: theme.colors.bg,
                    paddingRight: Styles.values.spacing / 2,
                    paddingLeft: Styles.values.spacing / 2,
                    flexDirection: 'row-reverse',
                  }}
                >
                  {/*<RX.Image
                    source={theme.mode === 'light' ? ImageSource.BackDark : ImageSource.BackLight}
                    style={[
                      styles.backImage,
                      {
                        [Styles.values.marginEnd]: Styles.values.spacing / 2,
                      }
                    ]}
                  />*/}
                  <Assistant
                    size={50}
                  />
                </RX.View>
              ]
            )}
          </ThemeContext.Consumer>
        )}
      </Mutation>
    )
  }

  protected _buildState(props: IntroductionProps, initialBuild: boolean): Partial<IntroductionState> | undefined {
    return {
      width: ResponsiveWidthStore.getWidth(),
      height: ResponsiveWidthStore.getHeight(),
    }
  }

  private scrollDown = () => {
    if (this.chatBox) {
      this.chatBox.scrollToEnd()
    }
  }

  private async addToMessagesSlowly(messages: IntroductionMutation_setup_messages[]) {
    if (messages.length > 1) {
      this.onAssistantTalking(true)
      for (let i = 0; i < messages.length; i++) {
        const msg = messages[i]
        const isLast = i === (messages.length - 1)

        await new Promise((resolve) => {
          setTimeout(() => {
            this.setState(prevState => ({
              messages: [
                ...prevState.messages,
                msg,
              ]
            }), this.scrollDown)
            if (isLast) {
              this.onAssistantTalking(false)
            }
            resolve()
          }, msg.text.length * 10)
        })
      }
    } else {
      if (messages[messages.length - 1].type == MessageType.form) {
        setTimeout(() => {
          this.scrollDown()
        }, 500)
      }
      this.setState(prevState => ({
        messages: [
          ...prevState.messages,
          ...messages,
        ]
      }), this.scrollDown)
    }
  }

  private getStartedPress = (setupConversation: MutationFn<IntroductionMutation, IntroductionMutationVariables>) => async () => {
    this.setState({
      showButtons: false,
    })
    await RX.Storage.removeItem('token')
    const result = await setupConversation({
      variables: {
        token: undefined,
        message: undefined,
      }
    })

    if (!result) return
    if (!result.data) return

    await RX.Storage.setItem('token', result.data.setup.token)
    this.addToMessagesSlowly(result.data.setup.messages)
  }

  private sendMessage = (sendMessage: MutationFn<IntroductionMutation, IntroductionMutationVariables>) => async ({ text, data }: { text: string, data: any }) => {
    const token = await RX.Storage.getItem('token')

    this.setState(prevState => ({
      messages: [
        ...prevState.messages,
        createMessage(text, data),
      ]
    }))
    const result = await sendMessage({
      variables: {
        message: text,
        token,
        data,
      },
    })

    if (!result) return
    if (!result.data) return

    this.addToMessagesSlowly(result.data.setup.messages)
  }

  private onHeightChange = (bottomMargin: number, bottomPadding: number = 0) => {
    this.setState({
      chatBoxMarginBottom: bottomMargin,
      chatBoxPaddingBottom: bottomPadding,
    })
  }

  private onAssistantTalking = (talking: boolean) => {
    this.setState({
      assistantTalking: talking,
    })
  }

  private onMainKeyboardAvoidableToggle = (enabled: boolean) => {
    return this.setState({
      keyboardAvoidableEnabled: enabled,
    })
  }

  private renderIntro = (theme: Theme) => (
    <RX.View
      style={{
        margin: 24,
        marginTop: 0,
      }}
    >
      <RX.Text
        onPress={() => navigate(this.props, 'login')}
        style={{
          color: theme.colors.secondary,
          textAlign: 'center',
          marginTop: 20,
          marginBottom: 30,
        }}
      ><LocalizedText>IAlreadyHaveAnAccount</LocalizedText></RX.Text>
      <RX.Text
        style={{
          textAlign: 'center',
          fontSize: 10,
          fontWeight: '300',
        }}>By creating a new account or signing in, You are agreeing to Prana’s Terms of Service and
           Privacy Policy.</RX.Text>
    </RX.View>
  )
}

const styles = {
  container: RX.Styles.createViewStyle({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  }),
  logo: RX.Styles.createImageStyle({
    width: 80,
    height: 80,
  }),
  chatBoxWithForm: RX.Styles.createViewStyle({
    bottom: 230,
  }),
  chatInput: RX.Styles.createViewStyle({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }),
  backImage: RX.Styles.createImageStyle({
    width: 12,
    height: 21,
    transform: [{ rotate: AppConfig.isRTL() ? '180deg' : '0deg' }]
  }),
}
