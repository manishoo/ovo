/*
 * RegisterModal.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import Register from 'src/ts/views/Register/Register'
import {ComponentBase} from 'resub'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import theme from 'src/ts/app/Theme'
import {navigate} from 'src/ts/utilities'

const REGISTER_WINDOW_DIMENSION = 600
const REGISTER_WINDOW_BORDER_RADIUS = 20

interface RegisterModalState {
	isTinyOrSmall: boolean
}

export default class RegisterModal extends ComponentBase<{}, RegisterModalState> {
	private _modalOpacity = RX.Animated.createValue(0)
	private _modalAnimatedStyle = RX.Styles.createAnimatedViewStyle({
		opacity: this._modalOpacity,
	})

	protected _buildState(props: RX.CommonProps, initialBuild: boolean): Partial<RegisterModalState> | undefined {
		return {
			isTinyOrSmall: ResponsiveWidthStore.isSmallOrTinyScreenSize()
		}
	}

	componentDidMount(): void {
		RX.Animated.timing(this._modalOpacity, {
			toValue: 1,
		}).start()
	}

	public dismiss = (callback: () => void) => {
		RX.Animated.timing(this._modalOpacity, {
			toValue: 0,
		}).start(callback)
	}

	render() {
		const RegisterWindow = () => (
			<RX.Animated.View style={this.state.isTinyOrSmall ? [styles.container, this._modalAnimatedStyle] : styles.login}>
				<Register {...this.props}/>
				<RX.Text style={styles.closeButton} onPress={() => this.dismiss(() => navigate(this.props, 'back'))}>X</RX.Text>
			</RX.Animated.View>
		)

		if (this.state.isTinyOrSmall) {
			return <RegisterWindow />
		}

		return (
			<RX.Animated.View
				style={[styles.container, {backgroundColor: theme.colors.modalBackDrop}, this._modalAnimatedStyle]}
			>
				<RegisterWindow />
			</RX.Animated.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	}),
	login: RX.Styles.createViewStyle({
		flex: 0,
		width: REGISTER_WINDOW_DIMENSION,
		height: REGISTER_WINDOW_DIMENSION,
		backgroundColor: theme.colors.loginModalBG,
		borderRadius: REGISTER_WINDOW_BORDER_RADIUS
	}),
	closeButton: RX.Styles.createViewStyle({
		padding: theme.styles.spacing,
		position: 'absolute',
		top: 0,
		left: 0,
	})
}
