/*
 * LoginModal.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import { ComponentBase } from 'resub'
import theme from 'src/ts/app/Theme'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import { navigate } from 'src/ts/utilities'
import Login from 'src/ts/views/Login/Login'

const LOGIN_WINDOW_DIMENSION = 450
const LOGIN_WINDOW_BORDER_RADIUS = 20

interface LoginModalState {
	isTinyOrSmall: boolean
}

export default class LoginModal extends ComponentBase<{}, LoginModalState> {
	private _modalOpacity = RX.Animated.createValue(0)
	private _modalAnimatedStyle = RX.Styles.createAnimatedViewStyle({
		opacity: this._modalOpacity,
	})

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
		const LoginWindow = () => (
			<RX.Animated.View style={this.state.isTinyOrSmall ? [styles.container, this._modalAnimatedStyle] : styles.login}>
				<Login {...this.props} />
				<RX.Text style={styles.closeButton} onPress={() => this.dismiss(() => navigate(this.props, 'back'))}>X</RX.Text>
			</RX.Animated.View>
		)

		if (this.state.isTinyOrSmall) {
			return <LoginWindow />
		}

		return (
			<RX.Animated.View
				style={[styles.container, { backgroundColor: theme.colors.modalBackDrop }, this._modalAnimatedStyle]}
			>
				<LoginWindow />
			</RX.Animated.View>
		)
	}

	protected _buildState(props: RX.CommonProps, initialBuild: boolean): Partial<LoginModalState> | undefined {
		return {
			isTinyOrSmall: ResponsiveWidthStore.isSmallOrTinyScreenSize()
		}
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
		width: LOGIN_WINDOW_DIMENSION,
		height: LOGIN_WINDOW_DIMENSION,
		backgroundColor: theme.colors.loginModalBG,
		borderRadius: LOGIN_WINDOW_BORDER_RADIUS
	}),
	closeButton: RX.Styles.createViewStyle({
		padding: theme.styles.spacing,
		position: 'absolute',
		top: 0,
		left: 0,
	})
}
