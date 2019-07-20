/*
 * SelectDialog.tsx
 * Copyright: Ouranos Studio 2019
 */


import { Option } from 'common/Select/Select'
import RX from 'reactxp'
import { ComponentBase } from 'resub'
import theme from 'src/ts/app/Theme'
import ResponsiveWidthStore from 'src/ts/stores/ResponsiveWidthStore'
import { fullHeight } from 'src/ts/utilities'

interface SelectDialogProps {
	style?: any,
	onDismiss?: () => void,
	options: Option[],
	onOptionSelect: (option: Option) => void,
}

interface SelectDialogState {
	height: number,
}

export const MODAL_ID = 'selectDialog'

export function showSelectDialog(props: SelectDialogProps) {
	RX.Modal.show(
		<SelectDialog
			{...props}
		/>,
		MODAL_ID
	)
}

export default class SelectDialog extends ComponentBase<SelectDialogProps & RX.CommonProps, SelectDialogState> {
	_containerBottomAnimatedValue: RX.Animated.Value = RX.Animated.createValue(fullHeight()) //FIXME wrong!
	_backDropOpacityAnimatedValue: RX.Animated.Value = RX.Animated.createValue(0)
	private _containerAnimationStyle = RX.Styles.createAnimatedViewStyle({
		transform: [{ translateY: this._containerBottomAnimatedValue }]
	})
	private _backDropAnimationStyle = RX.Styles.createAnimatedViewStyle({
		opacity: this._backDropOpacityAnimatedValue,
	})

	render() {
		const { style } = this.props

		return (
			<RX.View style={styles.topContainer}>
				<RX.Animated.View
					onPress={this._dismiss}
					style={[styles.backDrop, this._backDropAnimationStyle]}
				/>
				<RX.Animated.View
					style={[
						{
							position: 'absolute',
							bottom: 0,
							left: 0,
							right: 0,
						},
						this._containerAnimationStyle,
					]}
				>
					<RX.View style={[styles.container, style]}>
						{
							this.props.options.map(option => (
								this._renderOption(option)
							))
						}
					</RX.View>
				</RX.Animated.View>
			</RX.View>
		)
	}

	_renderOption = (option: Option) => {
		return (
			<RX.View
				style={styles.searchResultItemContainer}
				onPress={this._onOptionPress(option)}
			>
				<RX.Text>
					{option.text}
				</RX.Text>
			</RX.View>
		)
	}

	_onOptionPress = (option: Option) => () => {
		this.props.onOptionSelect(option)
		this._dismiss()
	}

	componentDidMount(): void {
		this._setUI(true)
	}

	protected _buildState(props: SelectDialogProps, initialBuild: boolean): Partial<SelectDialogState> | undefined {
		return {
			height: ResponsiveWidthStore.getHeight(),
		}
	}

	private _setUI = (show: boolean, cb?: () => void) => {
		RX.Animated.parallel([
			RX.Animated.timing(this._backDropOpacityAnimatedValue, {
				toValue: show ? 0.8 : 0,
			}),
			RX.Animated.timing(this._containerBottomAnimatedValue, {
				toValue: show ? 0 : this.state.height,
			}),
		]).start(cb)
	}

	private _dismiss = () => {
		const { onDismiss } = this.props

		this._setUI(false, () => {
			RX.Modal.dismiss(MODAL_ID)
			onDismiss ? onDismiss() : null
		})
	}
}

const styles = {
	topContainer: RX.Styles.createViewStyle({
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		width: RX.UserInterface.measureWindow().width,
		height: RX.UserInterface.measureWindow().height,
	}),
	container: RX.Styles.createViewStyle({
		backgroundColor: theme.colors.white,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		paddingTop: 80,
		padding: 20,
	}),
	inputContainer: RX.Styles.createViewStyle({
		alignSelf: 'stretch',
		borderRadius: 10,
		backgroundColor: theme.colors.foodDialogSearchBG,
		paddingHorizontal: 10,
		justifyContent: 'center',
	}),
	textInput: RX.Styles.createTextInputStyle({
		borderBottomWidth: 0,
		flex: 1,
	}),
	cancelButton: RX.Styles.createViewStyle({
		width: 40,
		height: 40,
		position: 'absolute',
		top: 40,
		left: 20,
	}),
	cancelText: RX.Styles.createTextStyle({
		color: theme.colors.labelInput,
	}),
	searchResultItemContainer: RX.Styles.createViewStyle({
		height: 40,
		borderBottomWidth: 1,
		borderColor: '#eee',
		justifyContent: 'center',
	}),
	backDrop: RX.Styles.createViewStyle({
		position: 'absolute',
		left: 0,
		top: 0,
		bottom: 0,
		right: 0,
		backgroundColor: '#000',
	})
}
