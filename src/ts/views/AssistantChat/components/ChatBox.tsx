/*
 * ChatBox.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import Markdown from '@Common/Markdown/Markdown'
import { MessageSender } from '@Models/global-types'
// @ts-ignore FIXME
import pSBC from '@Utils/pSBC'

import { AssistantChatMutation_setup_messages } from '@Views/AssistantChat/types/AssistantChatMutation'
import { useEffect, useMemo, useState } from 'react'
import RX from 'reactxp'
import ChatTyping from './Typing'


type Message = AssistantChatMutation_setup_messages

interface ChatBoxProps {
  style?: any,
  messages: AssistantChatMutation_setup_messages[],
  loading: boolean,
  scrollViewProps?: RX.Types.ScrollViewProps,
}

const useMessageAnimation = () => {
  const [animatedValue] = useState(RX.Animated.createValue(100))
  const animatedStyle = useMemo(() => RX.Styles.createAnimatedViewStyle({
    transform: [{ translateY: animatedValue }]
  }), [animatedValue])

  useEffect(() => {
    RX.Animated.timing(animatedValue, {
      toValue: 0,
    }).start()
  }, [])

  return animatedStyle
}

export const AssistantMessage = ({ text, style }: { text: string, style?: any }) => {
  const animatedStyle = useMessageAnimation()

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <RX.Animated.View
          style={[
            {
              flexDirection: 'row',
            },
            animatedStyle
          ]}
        >
          <RX.View
            style={[
              styles.baseMessage, {
                // width: text.length * 10,
                backgroundColor: theme.colors.cardBg,
                borderWidth: 1,
                borderColor: theme.colors.borderLight,
                [Styles.values.borderBottomStartRadius]: 5,
                margin: 5,
                [Styles.values.marginStart]: 10,
              }, style
            ]}
          >
            <Markdown
              style={{
                lineHeight: RX.Platform.select({ default: 20, web: 2 }),
                color: theme.colors.text
              }}>{text}</Markdown>
          </RX.View>
        </RX.Animated.View>
      )}
    </ThemeContext.Consumer>
  )
}
export const UserMessage = ({ message, style }: { message: AssistantChatMutation_setup_messages, style?: any }) => {
  const animatedStyle = useMessageAnimation()

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <RX.Animated.View
          style={[
            {
              flexDirection: 'row-reverse',
            },
            animatedStyle
          ]}
        >
          <RX.Animated.View
            key={message.id}
            style={[
              styles.baseMessage,
              styles.userMessage,
              {
                backgroundColor: theme.colors.assistantUserMessageBG,
                borderWidth: 2,
                borderColor: pSBC(-0.5, theme.colors.assistantUserMessageBG)
              },
              animatedStyle,
            ]}
          >
            <Markdown
              style={[
                {
                  lineHeight: RX.Platform.select({
                    default: 20,
                    web: 2
                  }),
                },
                styles.userText,
                { color: theme.colors.assistantUserMessageTextColor },
              ]}
            >{message.text}</Markdown>
          </RX.Animated.View>
        </RX.Animated.View>
      )}
    </ThemeContext.Consumer>
  )
}
export default class ChatBox extends RX.Component<ChatBoxProps> {
  private _chatBoxHeight = 0
  private _scrollViewRef: null | RX.ScrollView = null

  renderMessage(msg: Message) {
    switch (msg.sender) {
      case MessageSender.assistant:
        return (
          <AssistantMessage
            key={msg.id}
            text={msg.text}
          />
        )
      case MessageSender.user:
        return (
          <UserMessage
            message={msg}
          />
        )
      default:
        return null
    }
  }

  componentDidMount() {
    setTimeout(() => this.scrollDown(), 300) // FIXME
  }

  renderTyping = () => {
    return (
      <RX.View
        style={{
          padding: 10,
          flexDirection: 'row'
        }}
      >
        <ChatTyping />
      </RX.View>
    )
  }

  public render() {
    const { style, messages, loading, children, scrollViewProps } = this.props

    return (
      <RX.ScrollView
        {...scrollViewProps}
        ref={ref => this._scrollViewRef = ref}
        onContentSizeChange={messages.length > 4 ? this._onContentSizeChanged : undefined}
        style={[
          styles.container,
          style,
        ]}
      >
        {
          messages.map((msg: Message) => this.renderMessage(msg))
        }
        {
          loading ? this.renderTyping() : null
        }
        {children}
      </RX.ScrollView>
    )
  }

  // called from outside
  public scrollDown = () => {
    if (!this._scrollViewRef) return

    this._scrollViewRef.setScrollTop(this._chatBoxHeight, true)
  }

  private _onContentSizeChanged = (width: number, height: number) => {
    this._chatBoxHeight = height
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    flex: 1,
  }),
  userText: RX.Styles.createTextStyle({
    fontWeight: 'bold',
  }),
  baseMessage: RX.Styles.createViewStyle({
    padding: 15,
    paddingBottom: 8,
    justifyContent: 'center',
    minHeight: 30,
    borderRadius: 20,
    maxWidth: 200,
    minWidth: 70,
  }),
  userMessage: RX.Styles.createViewStyle({
    [Styles.values.borderBottomEndRadius]: 5,
    [Styles.values.marginEnd]: 10,
  }),
}
