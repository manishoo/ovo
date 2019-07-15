/*
 * Introduction.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import KeyboardAvoidable from 'common/KeyboardAvoidable/KeyboardAvoidable'
import gql from 'graphql-tag'
import {Mutation} from 'react-apollo'
import {EXPECTATIONS, Message, MessageType, SENDERS} from './types'
import ChatInput from './components/ChatInput'
import ChatBox from './components/ChatBox'
import LocalizedText, {getLocalizedText} from 'common/LocalizedText'
import theme from 'src/ts/app/Theme'
import {createMessage, getLastInputType} from './utils'
import {fullHeight, fullWidth, navigate} from 'src/ts/utilities'
import Assistant from 'common/Assistant/Assistant'
import {ComponentBase} from 'resub'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import UserStore from 'src/ts/stores/UserStore'
import LocationStore from 'src/ts/stores/LocationStore'
import {Routes} from 'src/ts/navigator/routes'
import LinearGradient from 'src/ts/common/LinearGradient/LinearGradient'

const INITIAL_MESSAGES = [
	{
		text: getLocalizedText('assistantIntro1'),
		type: MessageType.text,
		timestamp: String(Date.now()),
		sender: SENDERS.assistant,
		id: String(Math.random()),
		data: {
			expect: EXPECTATIONS.nickname,
		}
	},
	{
		text: getLocalizedText('assistantIntro2'),
		type: MessageType.text,
		timestamp: String(Date.now()),
		sender: SENDERS.assistant,
		id: String(Math.random()),
		data: {
			expect: EXPECTATIONS.nickname,
		}
	},
	{
		text: getLocalizedText('hiAssistant'),
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

interface IntroductionProps extends RX.CommonProps {
	style?: any,
	introductionWidth?: number,
	introductionHeight?: number,
}

interface IntroductionState {
	showButtons: boolean,
	chatBoxMarginBottom: number,
	chatBoxPaddingBottom: number,
	messages: Message[],
	assistantTalking: boolean,
	keyboardAvoidableEnabled: boolean,
	width: number,
	height: number,
}

export default class Introduction extends ComponentBase<IntroductionProps, IntroductionState> {
	constructor(props: IntroductionProps) {
		super(props)

		this.state = {
			showButtons: true,
			chatBoxMarginBottom: 0,
			chatBoxPaddingBottom: 0,
			messages: INITIAL_MESSAGES,
			assistantTalking: false,
			keyboardAvoidableEnabled: true,
			width: fullWidth(),
			height: fullHeight(),
		}
	}

	protected _buildState(props: IntroductionProps, initialBuild: boolean): Partial<IntroductionState> | undefined {
		return {
			width: ResponsiveWidthStore.getWidth(),
			height: ResponsiveWidthStore.getHeight(),
		}
	}

  render() {
		const {style} = this.props
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
										value
									}
								}
							}
						}
					}
				`}
			>
				{(setupConversation, {loading}) => (
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
									isForm ? styles.chatBoxWithForm : {}
								]}
								scrollEnabled={!showIntro}
								messages={messages}
								introductionWidth={this.props.introductionWidth || this.state.width}
								introductionHeight={this.props.introductionHeight || this.state.height}
								onIntroduction={this.getStartedPress(setupConversation)}
							/>

							{
								false &&
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
									onOpenMealPlan={() => {
										return //FIXME
										UserStore.getAndSetUser()
											.then(() => {
												LocationStore.navigate(this.props, Routes.mealPlan)
											})
									}}
									introductionWidth={this.props.introductionWidth || this.state.width}
								/>
							}
						</KeyboardAvoidable>,
						<RX.View
							key={2}
							style={{
								position: 'absolute',
								top: -25,
								left: 0,
								right: 0,
								marginTop: 20,
								// height: 66,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Assistant
								size={90}
							/>
						</RX.View>
					]
				)}
			</Mutation>
    )
  }

  // refs
	private chatBox: any

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
		const {data: {setupConversation: {token, messages}}} = await setupConversation({
			variables: {
				token: undefined,
				message: undefined,
			}
		})
		await RX.Storage.setItem('token', token)
		this.addToMessagesSlowly(messages)
	}

	private sendMessage = (sendMessage: any) => async ({text, data}: { text: string, data: any }) => {
		const token = await RX.Storage.getItem('token')

		this.setState(prevState => ({
			messages: [
				...prevState.messages,
				createMessage(text, data),
			]
		}))
		const {data: {setupConversation: {messages}}} = await sendMessage({
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
		justifyContent: 'flex-end',
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
