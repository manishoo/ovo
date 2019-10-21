/*
 * Introduction.tsx
 * Copyright: Ouranos Studio 2019
 */


import KeyboardAvoidable from '../../src/ts/common/KeyboardAvoidable/KeyboardAvoidable'
import LocalizedText from '../../src/ts/common/LocalizedText/LocalizedText'
import gql from 'graphql-tag'
import Mutation from 'react-apollo/Mutation'
import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
import { navigate } from '../../src/ts/utilities'
import ChatBox from './components/ChatBox'
import ChatInput from './components/ChatInput'
import { EXPECTATIONS, Message, MessageType, SENDERS } from './types'
import { createMessage, getLastInputType } from './utils'

const INITIAL_MESSAGES = [
	{
		text: 'Hello!\n' +
			'My name is Caloria. Your new Personal assistant.',
		type: MessageType.text,
		timestamp: String(Date.now()),
		sender: SENDERS.assistant,
		id: String(Math.random()),
		data: {
			expect: EXPECTATIONS.nickname,
		}
	},
	{
		text: 'I can help you manage eating, activities, habits, and so much more.',
		type: MessageType.text,
		timestamp: String(Date.now()),
		sender: SENDERS.assistant,
		id: String(Math.random()),
		data: {
			expect: EXPECTATIONS.nickname,
		}
	},
	{
		text: 'Hi Caloria',
		type: MessageType.text,
		timestamp: String(Date.now()),
		sender: SENDERS.user,
		id: String(Math.random()),
		data: {
			expect: EXPECTATIONS.nickname,
			isIntroductionButton: true,
		}
	}
]

interface IntroductionProps {
	style?: any,
}

interface IntroductionState {
	showButtons: boolean,
	chatBoxMarginBottom: number,
	chatBoxPaddingBottom: number,
	messages: Message[],
	assistantTalking: boolean,
	keyboardAvoidableEnabled: boolean,
}

export default class Introduction extends RX.Component<IntroductionProps, IntroductionState> {
  // refs
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
		}
	}

  render() {
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
			<Mutation
				mutation={gql`
					mutation IntroductionMutation($token: String, $message: String, $data: String) {
						setupConversation(token: $token, message: $message, data: $data) {
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
									items {
										text
									}
								}
							}
						}
					}
				`}
			>
				{(setupConversation, { loading }) => (
					[
						<KeyboardAvoidable
							keyboardVerticalOffset={20}
							key={1}
							enabled={keyboardAvoidableEnabled}
							style={[styles.container, style]}
						>
							<ChatBox
								ref={ref => this.chatBox = ref}
								loading={loading || assistantTalking}
								bottomMargin={chatBoxMarginBottom}
								bottomPadding={chatBoxPaddingBottom}
								style={[
									isForm ? styles.chatBoxWithForm : {}
								]}
								scrollEnabled={!showIntro}
								messages={messages}
								onIntroduction={this.getStartedPress(setupConversation)}
							/>

							{
								showIntro &&
								this.renderIntro()
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
                  onOpenMealPlan={() => navigate(this.props, 'mealPlan')}
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
								marginTop: 20,
								// height: 66,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<RX.Image
								source={require('src/ts/sharedAssets/Caloria.png')}
								style={styles.logo}
							/>
						</RX.View>
					]
				)}
			</Mutation>
    )
  }

	private scrollDown = () => {
		if (this.chatBox) {
			this.chatBox.scrollToEnd()
		}
	}

	private async addToMessagesSlowly(messages: Message[]) {
		if (messages.length > 1) {
			this.onAssistantTalking(true)
			// let lastMsg: Message = null
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

	private getStartedPress = (setupConversation: any) => async () => {
		this.setState({
			showButtons: false,
		})
		await RX.Storage.removeItem('token')
		// const tok = await RX.Storage.getItem('token')
		const { data: { setupConversation: { token, messages } } } = await setupConversation({
			variables: {
				token: undefined,
				message: undefined,
			}
		})
		await RX.Storage.setItem('token', token)
		this.addToMessagesSlowly(messages)
	}

	private sendMessage = (sendMessage: any) => async ({ text, data }: { text: string, data: any }) => {
		const token = await RX.Storage.getItem('token')

		this.setState(prevState => ({
			messages: [
				...prevState.messages,
				createMessage(text, data),
			]
		}))
		const { data: { setupConversation: { messages } } } = await sendMessage({
			variables: {
				message: text,
				token,
				data,
			},
		})
		this.addToMessagesSlowly(messages)
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

	private renderIntro = () => (
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
					// fontWeight: 'bold',
					marginTop: 20,
					marginBottom: 30,
				}}
			><LocalizedText>IAlreadyHaveAnAccount</LocalizedText></RX.Text>
			<RX.Text
				style={{
					textAlign: 'center',
					fontSize: 10,
					fontWeight: '300',
				}}>By creating a new account or signing in, You are agreeing to Caloria’s Terms of Service and
					 Privacy Policy.</RX.Text>
		</RX.View>
	)
}

const styles = {
	container: RX.Styles.createViewStyle({
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end'
	}),
	logo: RX.Styles.createImageStyle({
		width: 80,
		height: 80,
		// top: 0,
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
}
