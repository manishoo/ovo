/*
 * IntroductionButton.tsx
 * Copyright: Ouranos Studio 2019
 */


import LocalizedText from '../../../src/ts/common/LocalizedText/LocalizedText'
import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
import { fullWidth } from '../../../src/ts/utilities'

interface IntroductionButtonProps {
	style?: any,
	onIntroduction: () => {},
}

export default class IntroductionButton extends RX.Component<IntroductionButtonProps> {
	state = {
		large: true,
	}
	widthAnimated: RX.Animated.Value = RX.Animated.createValue(fullWidth() - 48)
	marginTopAnimated: RX.Animated.Value = RX.Animated.createValue(100)
	borderRadiusAnimated: RX.Animated.Value = RX.Animated.createValue(20)

	shrink = () => {
		RX.Animated.parallel([
			RX.Animated.timing(this.widthAnimated, {
				toValue: 120,
				duration: 300,
				easing: RX.Animated.Easing.Out()
			}),
			RX.Animated.timing(this.marginTopAnimated, {
				toValue: 0,
				duration: 300,
				easing: RX.Animated.Easing.Out()
			}),
			RX.Animated.timing(this.borderRadiusAnimated, {
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
			<RX.View
				onPress={large ? this.shrink : () => {
				}}
				activeOpacity={large ? 0.7 : 1}
				style={[
					styles.baseMessage,
					{
						marginTop: this.marginTopAnimated,
						width: this.widthAnimated,
						borderBottomRightRadius: this.borderRadiusAnimated,
					},
					style,
				]}
			>
				<RX.Text style={{
					color: theme.colors.white,
					flex: 1,
					textAlign: 'center'
				}}><LocalizedText>hiCaloria</LocalizedText></RX.Text>
			</RX.View>
		)
	}
}

const styles = {
	baseMessage: RX.Styles.createViewStyle({
		padding: 15,
		paddingBottom: 8,
		justifyContent: 'center',
		minHeight: 30,
		borderRadius: 20,
		// maxWidth: fullWidth() - 150,
		// minWidth: 70,
		margin: 5,
		marginRight: 24,

		backgroundColor: theme.colors.secondary,
		borderBottomRightRadius: 5,
		alignSelf: 'flex-end',
	}),
}
