/*
 * IntroductionButton.tsx
 * Copyright: Ouranos Studio 2019
 */

import LocalizedText from 'common/LocalizedText/LocalizedText'
import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
import { fullWidth } from 'src/ts/utilities'

interface IntroductionButtonProps {
	style?: any,
	introductionWidth?: number,
	onIntroduction: () => {},
}

export default class IntroductionButton extends RX.Component<IntroductionButtonProps, { large: boolean }> {
	private _widthAnimated: any
	private _marginTopAnimated: any
	private _borderRadiusAnimated: any

	constructor(props: IntroductionButtonProps) {
		super(props)

		this.state = {
			large: true,
		}
		this._widthAnimated = RX.Animated.createValue(props.introductionWidth ? (props.introductionWidth - 20) : (fullWidth() - 20))
		this._marginTopAnimated = RX.Animated.createValue(100)
		this._borderRadiusAnimated = RX.Animated.createValue(20)
	}

	shrink = () => {
		RX.Animated.parallel([
			RX.Animated.timing(this._widthAnimated, {
				toValue: 150,
				duration: 300,
				easing: RX.Animated.Easing.Out()
			}),
			RX.Animated.timing(this._marginTopAnimated, {
				toValue: 0,
				duration: 300,
				easing: RX.Animated.Easing.Out()
			}),
			RX.Animated.timing(this._borderRadiusAnimated, {
				toValue: 5,
				duration: 300,
				easing: RX.Animated.Easing.Out()
			}),
		]).start(() => {
			this.props.onIntroduction()
			this.setState({
				large: false,
			})
		})
	}

	render() {
		const { style } = this.props
		const { large } = this.state

		return (
			[
				<RX.Animated.View
					style={[
						{
							width: 1,
							height: this._marginTopAnimated,
						}
					]}
				/>,
				<RX.View style={{
					flexDirection: 'row-reverse',
					cursor: large ? 'pointer' : 'default',
				}}>
					<RX.Animated.View
						onPress={large ? this.shrink : () => null}
						activeOpacity={large ? 0.7 : 1}
						style={[
							styles.baseMessage,
							{ width: this._widthAnimated },
							style,
							large ? {} : { [theme.styles.borderBottomEndRadius]: 5 }
						]}
					>
						<RX.Text
							style={{
								color: theme.colors.assistantUserMessageTextColor,
								flex: 1,
								textAlign: 'center',
								fontSize: large ? theme.fontSizes.size16 : theme.fontSizes.size14,
								font: large ? theme.fonts.displayBold : theme.fonts.displayRegular,
							}}
						><LocalizedText>hiAssistant</LocalizedText></RX.Text>
					</RX.Animated.View>
				</RX.View>
			]
		)
	}
}

const styles = {
	baseMessage: RX.Styles.createViewStyle({
		padding: 15,
		justifyContent: 'center',
		minHeight: 30,
		borderRadius: 25,
		margin: 5,
		[theme.styles.marginEnd]: 10,
		backgroundColor: theme.colors.assistantUserMessageBG,
	}),
}
