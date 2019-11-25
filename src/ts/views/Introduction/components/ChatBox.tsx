/*
 * ChatBox.tsx
 * Copyright: Ouranos Studio 2019
 */

import Styles from '@App/Styles'
import { ThemeContext } from '@App/ThemeContext'
import Markdown from '@Common/Markdown/Markdown'
import { MessageSender } from '@Models/global-types'
import IntroductionButton from '@Views/Introduction/components/IntroductionButton'
import { IntroductionMutation_setup_messages } from '@Views/Introduction/types/IntroductionMutation'
import RX from 'reactxp'
import ChatTyping from './Typing'


type Message = IntroductionMutation_setup_messages

interface ChatBoxProps {
  style?: any,
  messages: IntroductionMutation_setup_messages[],
  scrollEnabled?: boolean,
  bottomMargin: number,
  bottomPadding: number,
  loading: boolean,
  onIntroduction: () => {},
  introductionWidth: number
  introductionHeight: number
}

export const AssistantMessage = ({ text, style }: { text: string, style?: any }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <RX.View
        style={{
          flexDirection: 'row-reverse',
        }}
      >
        <RX.View
          style={[
            styles.baseMessage, {
              // width: text.length * 10,
              backgroundColor: theme.colors.bg,
              borderWidth: 1,
              borderColor: theme.colors.borderLight,
              [Styles.values.borderTopEndRadius]: 5,
              margin: 5,
              [Styles.values.marginEnd]: 10,
            }, style
          ]}
        >
          <Markdown
            style={{
              lineHeight: RX.Platform.select({ default: 20, web: 2 }),
              color: theme.colors.text
            }}>{text}</Markdown>
        </RX.View>
      </RX.View>
    )}
  </ThemeContext.Consumer>
)

export default class ChatBox extends RX.Component<ChatBoxProps> {
  scrollView: any
  introButton: any
  initialState: boolean = true
  private _contentSize = 0

  renderMessage(msg: Message) {
    switch (msg.sender) {
      case MessageSender.assistant:
        return this.renderAssistantMessage(msg)
      case MessageSender.user:
        return this.renderUserMessage(msg)
      default:
        return null
    }
  }

  renderSpacing(n: number = 80) {
    return (
      <RX.View key={Math.random()} style={{ height: n }} />
    )
  }

  renderAssistantMessage(msg: Message) {
    return (
      <AssistantMessage
        key={Math.random()}
        text={msg.text}
      />
    )
  }

  renderUserMessage(msg: Message) {
    if (
      msg.data &&
      // @ts-ignore
      msg.data.isIntroductionButton
    ) {
      return (
        <IntroductionButton
          key={'introButton'}
          introductionWidth={this.props.introductionWidth}
          onIntroduction={this.props.onIntroduction}
          ref={ref => this.introButton = ref}
        />
      )
    }

    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          this._renderBaseMessage(msg, {
            outerContainerStyle: {
              // flexDirection: 'row',
              // justifyContent: 'flex-end'
            },
            containerStyle: [styles.userMessage, { backgroundColor: theme.colors.assistantUserMessageBG }],
            textStyle: [styles.userText, { color: theme.colors.assistantUserMessageTextColor }],
          })
        )}
      </ThemeContext.Consumer>
    )
  }

  _renderBaseMessage(
    msg: Message,
    options: {
      outerContainerStyle?: RX.Types.StyleRuleSetRecursive<RX.Types.ViewStyleRuleSet>,
      containerStyle?: RX.Types.StyleRuleSetRecursive<RX.Types.ViewStyleRuleSet>,
      textStyle?: RX.Types.StyleRuleSetRecursive<RX.Types.TextStyleRuleSet>[],
    },
  ) {
    return (
      <RX.View
        style={options.outerContainerStyle}
      >
        <RX.View
          key={msg.id}
          style={[
            styles.baseMessage, options.containerStyle
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
              ...options.textStyle,
            ]}
          >{msg.text}</Markdown>
        </RX.View>
      </RX.View>
    )
  }

  // called from outside
  scrollToEnd = () => {
    this.scrollView.setScrollTop(this._contentSize - this.props.introductionHeight + 20, true)
  }

  renderTyping = () => {
    return (
      <RX.View
        style={{
          padding: 10,
          flexDirection: 'row-reverse'
        }}
      >
        <ChatTyping />
      </RX.View>
    )
  }

  onContentSizeChanged = (_: any, height: number) => {
    this._contentSize = height
    if (this.scrollView) {
      this.scrollView.setScrollTop(this._contentSize - this.props.introductionHeight + 20, !this.initialState)
      if (this.initialState) {
        this.initialState = false
      }
    }
  }

  public render() {
    const { style, messages, scrollEnabled, loading, bottomMargin, bottomPadding } = this.props

    return (
      <RX.ScrollView
        style={[styles.container, style, { bottom: bottomMargin }]}
        onContentSizeChange={messages.length > 4 ? this.onContentSizeChanged : undefined}
        ref={(ref: any) => this.scrollView = ref}
        scrollEnabled={scrollEnabled}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        bounces
      >
        {
          messages.map((msg: Message) => this.renderMessage(msg))
        }
        {
          loading ? this.renderTyping() : null
        }
        {
          this.renderSpacing(16 + bottomPadding) //FIXME mobiile
        }
      </RX.ScrollView>
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    flex: 1,
    paddingTop: 65,
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
    [Styles.values.borderBottomStartRadius]: 5,
    [Styles.values.marginStart]: 10,
  }),
}
