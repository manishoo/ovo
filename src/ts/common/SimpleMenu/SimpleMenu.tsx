/*
 * SimpleMenu.tsx
 * Copyright: Ouranos Studio 2019
 */

import * as _ from 'lodash'
import RX from 'reactxp'
import { ComponentBase } from 'resub'

import KeyCodes from '../../utilities/KeyCodes'

export interface MenuItem {
	text: string;
	command: string;
	disabled?: boolean;
	checked?: boolean;
}

export interface MenuProps extends RX.CommonProps {
	menuItems: MenuItem[];
	menuButtonStyles?: RX.Types.StyleRuleSet<RX.Types.ButtonStyle>;
	menuTextStyles?: RX.Types.StyleRuleSet<RX.Types.TextStyle>;

	onSelectItem: (command: string) => void;

	focusFirst?: boolean;
}

interface MenuState {
	hoverCommand?: string;
	focusedIndex: number;
}

enum Colors {
	menuText = '#666',
	menuTextSelected = '#225577',
	menuTextDisabled = '#bbb',
	menuTextHover = '#000',
	menuItemHover = '#eee',
	menuBackground = '#fff',
	menuBorder = '#bbb',
}

const _styles = {
	menuContainer: RX.Styles.createViewStyle({
		backgroundColor: Colors.menuBackground,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: Colors.menuBorder
	}),
	menuItemContainer: RX.Styles.createButtonStyle({
		minHeight: 30,
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexDirection: 'row'
	}),
	menuItemHover: RX.Styles.createButtonStyle({
		backgroundColor: Colors.menuItemHover
	}),
	menuItemText: RX.Styles.createTextStyle({
		flex: 1,
		// font: Fonts.displayRegular,
		// fontSize: FontSizes.size16,
		color: Colors.menuText,
		marginLeft: 16,
		marginRight: 32,
		marginVertical: 4
	}),
	checkMarkText: RX.Styles.createTextStyle({
		// font: Fonts.displayRegular,
		// fontSize: FontSizes.size16,
		marginRight: 16,
		color: Colors.menuText
	}),
	disabledText: RX.Styles.createTextStyle({
		color: Colors.menuTextDisabled
	}),
	divider: RX.Styles.createViewStyle({
		height: 1,
		marginVertical: 4,
		// backgroundColor: Colors.grayEE
	})
}

const _menuItemPrefix = 'menuitem'

export default class SimpleMenu extends ComponentBase<MenuProps, MenuState> {
	private _mountedRefsMap: { [key: string]: any } = {}

	componentDidMount() {
		super.componentDidMount()

		if (this.props.focusFirst) {
			this.focusFirt()
		}
	}

	componentDidUpdate(prevProps: MenuProps, prevState: MenuState, prevContext: any) {
		super.componentDidUpdate(prevProps, prevState, prevContext)

		if (this.state.focusedIndex !== prevState.focusedIndex) {
			this.focusItem(this.state.focusedIndex)
		}
	}

	focusFirt() {
		this.focusItem(0)
	}

	focusLast() {
		this.focusItem(this.props.menuItems.length - 1)
	}

	focusItem(index = 0) {
		if (index < 0 || index > this.props.menuItems.length - 1) {
			return
		}

		if (this.state.focusedIndex === index) {
			const ref = this._mountedRefsMap.ref(_menuItemPrefix + index)
			if (ref) {
				ref.requestFocus()
			}
		} else {
			this.setState({ focusedIndex: index })
		}
	}

	render() {
		const menuItems = _.map(this.props.menuItems, (item, index) => {
			const buttonContainerStyles = [_styles.menuItemContainer]
			if (item.text === '-') {
				return (
					<RX.View key={'div-' + index} style={_styles.divider} />
				)
			}

			if (this.props.menuButtonStyles) {
				buttonContainerStyles.push(this.props.menuButtonStyles)
			}
			const textStyles = [_styles.menuItemText]
			if (this.props.menuTextStyles) {
				textStyles.push(this.props.menuTextStyles)
			}

			if (item.command === this.state.hoverCommand && !item.disabled) {
				buttonContainerStyles.push(_styles.menuItemHover)
			}

			let accessibilityLabel = item.text
			let selectedCheckMark: JSX.Element | undefined
			if (item.checked) {
				selectedCheckMark = (
					<RX.Text style={_styles.checkMarkText}>
						{''}
					</RX.Text>
				)
			} else if (item.disabled) {
				textStyles.push(_styles.disabledText)
			}

			return (
				<RX.Button
					ref={(elem: any) => this._mountedRefsMap[_menuItemPrefix + index] = elem}
					key={item.command}
					style={buttonContainerStyles}
					onPress={e => this._onClickItem(e, item)}
					onHoverStart={() => this._onMouseEnter(item)}
					onHoverEnd={() => this._onMouseLeave(item)}
					disabled={item.disabled}
					tabIndex={index === this.state.focusedIndex ? 0 : -1}
					accessibilityTraits={RX.Types.AccessibilityTrait.MenuItem}
					accessibilityLabel={accessibilityLabel}
				>
					<RX.Text style={textStyles}>
						{item.text}
					</RX.Text>
					{selectedCheckMark}
				</RX.Button>
			)
		})

		return (
			<RX.View style={_styles.menuContainer} onKeyPress={this._onKeyPress}>
				{menuItems}
			</RX.View>
		)
	}

	protected _buildState(props: MenuProps, initialBuild: boolean): Partial<MenuState> {
		if (initialBuild) {
			return {
				hoverCommand: undefined,
				focusedIndex: -1
			}
		}
		return {}
	}

	private _onKeyPress = (event: RX.Types.KeyboardEvent) => {
		let currentFocusedIndex = this.state.focusedIndex

		if (event.keyCode === KeyCodes.UpArrow || event.keyCode === KeyCodes.LeftArrow) {
			currentFocusedIndex = currentFocusedIndex - 1
		}
		if (event.keyCode === KeyCodes.DownArrow || event.keyCode === KeyCodes.RightArrow) {
			currentFocusedIndex = currentFocusedIndex + 1
		}
		if (currentFocusedIndex < 0 || currentFocusedIndex >= this.props.menuItems.length) {
			return
		}

		this.setState({ focusedIndex: currentFocusedIndex })
	}

	private _onClickItem(e: RX.Types.SyntheticEvent, item: MenuItem) {
		e.stopPropagation()

		if (!item.disabled && this.props.onSelectItem) {
			this.props.onSelectItem(item.command)
		}
	}

	private _onMouseEnter(item: MenuItem) {
		if (!item.disabled && item.command !== this.state.hoverCommand) {
			this.setState({
				hoverCommand: item.command
			})
		}
	}

	private _onMouseLeave(item: MenuItem) {
		if (!item.disabled && item.command === this.state.hoverCommand) {
			this.setState({
				hoverCommand: undefined
			})
		}
	}
}
