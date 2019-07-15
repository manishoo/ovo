/*
 * Assistant.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import ImageSource from 'modules/images'
import theme from 'src/ts/app/Theme'
import Image from 'common/Image/Image'

function getRandomFromArray(array: any[]): any {
	return array[Math.floor(Math.random() * array.length)]
}

interface AssistantProps {
	style?: any,
	size: number,
	onPress?: () => any,
	onMouseOver?: () => any,
	onMouseLeave?: () => any,
	glowMode?: 'light' | 'dark'
}

interface AssistantState {
	eyesClosed: boolean,
	mouthBorderBottom: number,
	mouthOpen: boolean,
}

export default class Assistant extends RX.Component<AssistantProps, AssistantState> {
	state = {
		eyesClosed: false,
		mouthBorderBottom: 2,
		mouthOpen: true
	}

	render() {
		const {style, size} = this.props

		return (
			<RX.View
				onPress={this.props.onPress}
				activeOpacity={1}
				onMouseOver={this.props.onMouseOver}
				onMouseLeave={this.props.onMouseLeave}
				style={[
					styles.container,
					style,
					{
						width: this.props.size * 2,
						height: this.props.size * 2,
						padding: -this.props.size * 2
					}
				]}
			>
				{this._renderExtra()}
				<Image
					source={ImageSource.Assistant}
					style={{
						width: size,
						height: size,
					}}
				/>
				{/*{this._renderMouth()}*/}
				{this._renderEyeLids()}
			</RX.View>
		)
	}

	componentDidMount(): void {
		this._blink()
		this._glow(this._getGlowTime())
		// setTimeout(this._blink, this._getBlinkTime())
		// setTimeout(this._glow, this._getGlowTime())
	}

	private _renderExtra = () => {
		return (
			<RX.Animated.Image
				source={this.props.glowMode === 'dark' ? ImageSource.AssistantExtra : ImageSource.AssistantExtraWhite}
				style={[
					styles.extra,
					{
						height: this.props.size * 2,
						width: this.props.size * 2,
					},
					this._glowAnimationStyle
				]}
			/>
		)
	}

	private _getBlinkTime = () => {
		return getRandomFromArray([
			500,
			2000,
			2000,
			3000,
			5000,
			5000,
			200,
		])
	}

	private _getGlowTime = () => {
		return getRandomFromArray([
			5000,
			5000,
			6000,
			7000,
			7000,
		])
	}

	private _glow = (duration: number) => {
		RX.Animated.timing(this._glowScaleAnimationValue, {
			toValue: 0.9,
			duration: duration / 2,
		})
			.start(() => {
				RX.Animated.timing(this._glowScaleAnimationValue, {
					toValue: 0.8,
					duration: duration / 2,
				})
					.start(() => {
						this._glow(this._getGlowTime())
					})
			})
	}

	private _blink = () => {
		this.setState({eyesClosed: true}, () => {
			setTimeout(() => {
				this.setState({eyesClosed: false}, () => {
					setTimeout(this._blink, this._getBlinkTime())
				})
			}, 25)
		})
	}

	// private _renderMouth = () => {
	// 	const { size } = this.props
	//
	// 	const width = size / 5
	//
	// 	return [
	// 		<RX.Animated.View
	// 			style={[
	// 				{
	// 					width,
	// 					height: width / 2,
	// 					borderTopLeftRadius: width,
	// 					borderTopRightRadius: width,
	// 					borderBottomLeftRadius: width * 3.5,
	// 					borderBottomRightRadius: width * 3.5,
	// 					borderColor: '#4a4a4a',
	// 					borderWidth: 2,
	// 					position: 'absolute',
	// 					top: size * 1.15,
	// 					borderTopWidth: 0,
	// 					borderBottomWidth: this.state.mouthBorderBottom,
	// 					borderRightWidth: 2,
	// 					borderLeftWidth: 2,
	// 					alignItems: 'center',
	// 				},
	//
	// 			]}
	// 		/>,
	// 		this.state.mouthOpen && <RX.View
	// 			style={{
	// 				width: width / 2,
	// 				height: width / 5,
	// 				borderRadius: width,
	// 				backgroundColor: '#FF8A31',
	// 				position: 'absolute',
	// 				top: size * 1.19,
	// 			}}
	// 		/>
	// 	]
	// }
	//
	// private _getMouthOpenBorderBottomValue = () => {
	// 	const { size } = this.props
	//
	// 	return size / 9
	// }
	//
	// private _getMouthClosedBorderBottomValue = () => {
	// 	return 2
	// }
	//
	// private _toggleMouthOpen = (open: boolean) => async () => {
	// 	if (open) {
	// 		this.setState({mouthOpen: true})
	// 		for (let i = 1; i < new Array(this._getMouthOpenBorderBottomValue()).length; i++) {
	// 			await new Promise(res => {
	// 				this.setState({
	// 					mouthBorderBottom: i
	// 				}, () => {
	// 					setTimeout(res, 15)
	// 				})
	// 			})
	// 		}
	// 	} else {
	// 		this.setState({mouthOpen: false})
	// 		for (let i = this._getMouthOpenBorderBottomValue(); i > this._getMouthClosedBorderBottomValue(); i--) {
	// 			await new Promise(res => {
	// 				this.setState({
	// 					mouthBorderBottom: i
	// 				}, () => {
	// 					setTimeout(res, 15)
	// 				})
	// 			})
	// 		}
	// 	}
	// }

	private _renderEyeLids = () => {
		if (!this.state.eyesClosed) return null

		const eyeLidSize = (this.props.size || 65) / 3

		return (
			<RX.View style={[styles.eyeContainer, {width: this.props.size}]}>
				<RX.View style={[styles.eyeLid, {width: eyeLidSize, height: eyeLidSize * 1.2}]} />
				<RX.View style={[styles.eyeLid, {width: eyeLidSize, height: eyeLidSize * 1.2}]} />
			</RX.View>
		)
	}

	private _glowScaleAnimationValue = RX.Animated.createValue(0.8)
	private _glowAnimationStyle = RX.Styles.createAnimatedViewStyle({
		transform: [
			{scale: this._glowScaleAnimationValue}
		]
	})
}

const styles = {
	container: RX.Styles.createViewStyle({
		justifyContent: 'center',
		alignItems: 'center',
	}),
	eyeLid: RX.Styles.createViewStyle({
		borderRadius: 40,
		backgroundColor: theme.colors.assistantFaceColor,
	}),
	eyeContainer: RX.Styles.createViewStyle({
		position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		paddingBottom: 5
	}),
	extra: RX.Styles.createImageStyle({
		position: 'absolute',
		top: 0,
	})
}
