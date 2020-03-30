/*
 * AssistantChat.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ApolloClient, ExecutionResult, gql, useMutation } from '@apollo/client'
import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import Assistant from '@Common/Assistant/Assistant'
import { translate } from '@Common/LocalizedText/LocalizedText'
import { Routes } from '@Models/common'
import { AssistantExpectations, MessageSender, MessageType } from '@Models/global-types'
import { MeFragment, MeOperation } from '@Models/graphql/me/me'
import { MeQuery } from '@Models/graphql/me/types/MeQuery'
import KeyboardAvoidable from '@Modules/KeyboardAvoidable'
import LocationStore from '@Services/LocationStore'
import { createId } from '@Utils/create-id'
import {
  AssistantChatMutation,
  AssistantChatMutation_setup_messages,
  AssistantChatMutationVariables
} from '@Views/AssistantChat/types/AssistantChatMutation'
import MealSettingsScreen from '@Views/MealSettingsScreen/MealSettingsScreen'
import { useCallback } from 'react'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import ChatBox from './components/ChatBox'
import ChatInput from './components/ChatInput'
import { createMessage, getLastInputType } from './utils'


const MIN_DELAY = 1000

function sleep(t: number) {
  return new Promise((resolve) => setTimeout(resolve, t))
}

const INITIAL_MESSAGES: AssistantChatMutation_setup_messages[] = [
  {
    text: translate('assistantIntro1'),
    type: MessageType.text,
    timestamp: String(Date.now()),
    sender: MessageSender.assistant,
    id: createId(),
    data: {
      expect: null,
      skip: false,
      items: [],
      mealPlanSettings: null,
      meals: [],
      user: null,
    },
  },
  {
    text: translate('assistantIntro2'),
    type: MessageType.ack,
    timestamp: String(Date.now()),
    sender: MessageSender.assistant,
    id: createId(),
    data: {
      expect: AssistantExpectations.nickname,
      skip: false,
      items: [],
      mealPlanSettings: null,
      meals: [],
      user: null,
    },
  },
]

interface AssistantChatProps {
  style?: any,
  sendMessage: (vars: AssistantChatMutationVariables) => Promise<ExecutionResult<AssistantChatMutation>>,
  loading?: boolean,
  setScrollTop: (top: number) => void,
  width: number,
  height: number,
  client: ApolloClient<any>,
  onClose: () => void,
}

interface AssistantChatState {
  showButtons: boolean,
  chatBoxMarginBottom: number,
  chatBoxPaddingBottom: number,
  messages: AssistantChatMutation_setup_messages[],
  assistantTalking: boolean,
  avoidKeyboard: boolean,
}

export const ASSISTANT_PADDING = 132
export const CHAT_BOX_MAX_WIDTH = 451

class AssistantChat extends ComponentBase<AssistantChatProps, AssistantChatState> {
  private chatBox: any
  private chatInput: ChatInput | null = null

  constructor(props: AssistantChatProps) {
    super(props)

    this.state = {
      showButtons: true,
      chatBoxMarginBottom: 0,
      chatBoxPaddingBottom: 0,
      messages: [],
      assistantTalking: false,
      avoidKeyboard: true,
    }
  }

  public componentWillUpdate(nextProps: Readonly<AssistantChatProps>, nextState: Readonly<AssistantChatState>, nextContext: any): void {
    RX.Storage.setItem('introduction:messages', JSON.stringify(nextState.messages))
  }

  public async componentDidMount() {
    const messagesStringified = await RX.Storage.getItem('introduction:messages')

    if (messagesStringified) {
      try {
        const messages = JSON.parse(messagesStringified)

        this.setState({ messages })
      } catch (e) {
        console.error(e)
      }
    } else {
      this.setState({ messages: INITIAL_MESSAGES })
    }
  }

  public render() {
    const { style, loading } = this.props
    const {
      showButtons: showIntro,
      messages,
      assistantTalking,
      avoidKeyboard,
    } = this.state

    const input = messages.length > 0 ? getLastInputType(messages) : undefined
    const isForm = input && input.inputType == MessageType.form

    const introductionWidth = this.props.width > CHAT_BOX_MAX_WIDTH ? CHAT_BOX_MAX_WIDTH : this.props.width

    return (
      <KeyboardAvoidable
        keyboardVerticalOffset={20}
        enabled={avoidKeyboard}
        style={[
          styles.container,
          {
            height: this.props.height,
            width: this.props.width,
          },
          style,
        ]}
      >
        <ChatBox
          ref={ref => this.chatBox = ref}
          loading={loading || assistantTalking}
          style={[
            {
              paddingTop: ASSISTANT_PADDING,
              marginBottom: this.state.chatBoxMarginBottom,
              paddingBottom: this.state.chatBoxPaddingBottom,
              width: this.props.width + AppConfig.defaultScrollBarWidth,
              [Styles.values.paddingEnd]: AppConfig.defaultScrollBarWidth,
            },
            isForm ? styles.chatBoxWithForm : null
          ]}
          messages={messages}
        />

        {
          input &&
          <ChatInput
            ref={ref => this.chatInput = ref}
            loading={loading || assistantTalking}
            input={input}
            onSubmit={this.sendMessage}
            onHeightChange={this.onHeightChange}
            toggleMainKeyboardAvoidable={this.onMainKeyboardAvoidableToggle}
            onGetStartedPress={this.getStartedPress}
            onOpenMealPlan={this.props.onClose}
            introductionWidth={introductionWidth}
          />
        }

        <RX.View
          ignorePointerEvents
          style={{
            alignItems: 'center',
            padding: Styles.values.spacing,
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
          }}
        >
          <Assistant
            size={100}
            playful
          />
        </RX.View>
      </KeyboardAvoidable>
    )
  }

  private scrollDown = () => this.chatBox.scrollDown()

  private async addToMessagesSlowly(messages: AssistantChatMutation_setup_messages[], sentMessageAt: Date) {
    const timeElapsedSinceSentMessage = Date.now() - Number(sentMessageAt)

    if (timeElapsedSinceSentMessage < MIN_DELAY) await sleep(MIN_DELAY)

    if (messages.length > 1) {
      for (let i = 0; i < messages.length; i++) {
        const msg = messages[i]
        const delay = messages[i].text.length * 15

        await new Promise((resolve) => {
          setTimeout(() => {
            this.setState(prevState => ({
              messages: [
                ...prevState.messages,
                msg,
              ]
            }), this.scrollDown)
            resolve()
          }, delay)
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

  private getStartedPress = async () => {
    this.setState(prevState => ({
      showButtons: false,
      messages: [
        ...prevState.messages,
        {
          text: translate('hiAssistant'),
          type: MessageType.text,
          timestamp: String(Date.now()),
          sender: MessageSender.user,
          id: createId(),
          data: {
            expect: AssistantExpectations.nickname,
            skip: false,
            items: [],
            mealPlanSettings: null,
            meals: [],
            user: null,
          },
        }
      ]
    }))
    await RX.Storage.removeItem('token') // FIXME
    const sentMessageAt = new Date()
    this.chatInput!.close()
    this.onAssistantTalking(true)

    const result = await this.props.sendMessage({
      token: undefined,
      message: undefined,
    })

    if (!result) return
    if (!result.data) return

    if (result.data.setup.token) {
      await RX.Storage.setItem('token', result.data.setup.token) // FIXME
    }
    this.addToMessagesSlowly(result.data.setup.messages, sentMessageAt)
      .then(() => {
        this.onAssistantTalking(false)
        this.chatInput!.open(result.data!.setup.messages[result.data!.setup.messages.length - 1].type)
      })
  }

  private sendMessage = async ({ message, data }: AssistantChatMutationVariables) => {
    const token = await RX.Storage.getItem('token')

    this.setState(prevState => ({
      messages: [
        ...prevState.messages,
        createMessage(message || '', data),
      ]
    }), () => setTimeout(this.scrollDown, 100))
    this.chatInput!.close()

    const sentMessageAt = new Date()
    this.onAssistantTalking(true)
    const result = await this.props.sendMessage({
      message,
      token,
      data,
    })

    if (!result) return
    if (!result.data) return

    if (result.data.setup.messages.length > 0) {
      const lastMessage = result.data!.setup.messages[result.data!.setup.messages.length - 1]

      if (lastMessage.data && lastMessage.data.user) {
        this.props.client.writeQuery<MeQuery>({
          query: MeOperation,
          data: {
            me: lastMessage.data.user,
          }
        })
      }

      this.addToMessagesSlowly(result.data.setup.messages, sentMessageAt)
        .then(() => {
          this.onAssistantTalking(false)
          this.chatInput!.open(lastMessage.type)

          if (lastMessage.data && lastMessage.data.user) {
            LocationStore.getHistory().push({
              pathname: Routes.setupProcess,
              key: 'setup',
              state: {
                background: {
                  pathname: Routes.calendar,
                }
              },
            })
          }
        })
    } else {
      this.onAssistantTalking(false)
    }
  }

  private onHeightChange = (bottomPadding: number = 0, bottomMargin: number = 0) => {
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
      avoidKeyboard: enabled,
    })
  }
}

export default function AssistantChatContainer(props: Omit<AssistantChatProps, 'sendMessage' | 'client'>) {
  const [sendMessage, { loading, client }] = useMutation<AssistantChatMutation, AssistantChatMutationVariables>(gql`
    mutation AssistantChatMutation($token: String, $message: String, $data: String) {
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
    ${MeFragment}
  `)

  return (
    <AssistantChat
      {...props}
      sendMessage={useCallback(variables => sendMessage({ variables }), [])}
      loading={loading}
      client={client!}
      onClose={props.onClose}
    />
  )
}

const styles = {
  container: RX.Styles.createViewStyle({
    flex: 1,
    justifyContent: 'flex-end',
  }),
  logo: RX.Styles.createImageStyle({
    width: 80,
    height: 80,
  }),
  chatBoxWithForm: RX.Styles.createViewStyle({}),
  backImage: RX.Styles.createImageStyle({
    width: 12,
    height: 21,
    transform: [{ rotate: AppConfig.isRTL() ? '180deg' : '0deg' }]
  }),
}
