/*
 * ChatBox.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import {fullHeight, fullWidth} from 'src/ts/utilities'
import {Message, SENDERS} from '../types'
import theme from 'src/ts/app/Theme'
import Markdown from 'common/Markdown/Markdown'
import ChatTyping from './Typing'
import IntroductionButton from 'src/ts/views/Introduction/components/IntroductionButton'

interface ChatBoxProps {
	style?: any,
	messages: Message[],
	scrollEnabled?: boolean,
	bottomMargin: number,
	bottomPadding: number,
	loading: boolean,
	onIntroduction: () => {},
}

export const AssistantMessage = ({text, style}: { text: string, style?: any }) => (
	<RX.View
		style={[styles.baseMessage, {width: text.length * 10}, style]}
	>
		<Markdown style={{lineHeight: RX.Platform.select({default: 20, web: 2}), color: theme.colors.white}}>{text}</Markdown>
	</RX.View>
)

export default class ChatBox extends RX.Component<ChatBoxProps> {
	scrollView: any
	introButton: any
	initialState: boolean = true

	renderMessage(msg: Message) {
		switch (msg.sender) {
			case SENDERS.assistant:
				return this.renderAssistantMessage(msg)
			case SENDERS.user:
				return this.renderUserMessage(msg)
			default:
				return null
		}
	}

	renderSpacing(n: number = 80) {
		return (
			<RX.View key={Math.random()} style={{height: n}} />
		)
	}

	renderAssistantMessage(msg: Message) {
		return (
			<AssistantMessage
				style={{
					margin: 5,
					marginLeft: 19,
				}}
				key={Math.random()}
				text={msg.text}
			/>
		)
	}

	renderUserMessage(msg: Message) {
		if (msg.data && msg.data.isIntroductionButton) {
			return <IntroductionButton
				key={'introButton'}
				onIntroduction={this.props.onIntroduction}
				ref={ref => this.introButton = ref}
			/>
		}

		return this._renderBaseMessage(msg, {
			containerStyle: styles.userMessage,
			textStyle: styles.userText,
		})
	}

	_renderBaseMessage(
		msg: Message,
		options: {
			containerStyle?: RX.Types.StyleRuleSetRecursive<RX.Types.ViewStyleRuleSet>,
			textStyle?: any,
		},
	) {
		return (
			<RX.View
				key={msg.id}
				style={[styles.baseMessage, options.containerStyle, {width: msg.text.length * 10}]}
			>
				<Markdown style={{lineHeight: RX.Platform.select({default: 20, web: 2}), ...options.textStyle}}>{msg.text}</Markdown>
				{/*<RX.Text>{msg.text}</RX.Text>*/}
			</RX.View>
		)
	}

	// called from outside
	scrollToEnd = () => {
		// console.log('ali')
		// this.scrollView.setScrollTop()
	}

	renderTyping = () => {
		return (
			<RX.View
				style={{
					padding: 10,
				}}
			>
				<ChatTyping />
			</RX.View>
		)
	}

	onContentSizeChanged = (_: any, height: number) => {
		if (this.scrollView) {
			this.scrollView.setScrollTop(height - fullHeight() + 20, !this.initialState)
			if (this.initialState) {
				this.initialState = false
			}
		}
	}

	render() {
		const {style, messages, scrollEnabled, loading, bottomMargin, bottomPadding} = this.props

		return (
			<RX.ScrollView
				style={[styles.container, style, {bottom: bottomMargin}]}
				onContentSizeChange={messages.length > 4 ? this.onContentSizeChanged : undefined}
				ref={(ref: any) => this.scrollView = ref}
				scrollEnabled={scrollEnabled}
			>
				{
					this.renderSpacing(80)
				}
				{
					messages.map((msg: Message) => this.renderMessage(msg))
				}
				{
					loading ? this.renderTyping() : null
				}
				{
					this.renderSpacing(120 + bottomPadding)
				}
			</RX.ScrollView>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		flex: 1,
		width: fullWidth(),
		paddingTop: 95,
		// bottom: 80,
		// marginBottom: 200,
	}),
	userText: {
		color: theme.colors.white,
		fontWeight: 'bold',
	},
	assistantText: RX.Styles.createTextStyle({
		color: theme.colors.white,
	}),
	baseMessage: RX.Styles.createViewStyle({
		padding: 15,
		paddingBottom: 8,
		justifyContent: 'center',
		backgroundColor: theme.colors.primary,
		minHeight: 30,
		borderRadius: 20,
		borderTopLeftRadius: 5,
		maxWidth: fullWidth() - 150,
		minWidth: 70,
	}),
	userMessage: RX.Styles.createViewStyle({
		backgroundColor: theme.colors.secondary,
		borderTopLeftRadius: 20,
		borderBottomRightRadius: 5,
		alignSelf: 'flex-end',
		marginRight: 19,
	}),
}