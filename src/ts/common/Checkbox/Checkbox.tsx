/*
 * Checkbox.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'

interface CheckboxProps {
	style?: any,
	size: number,
	filledColor?: string,
	emptyColor?: string,
	borderWidth?: number,
	borderColor?: string,
	onChange: (checked: boolean) => void,
	value: boolean,
}

export default class Checkbox extends RX.Component<CheckboxProps, RX.Stateless> {
	public static defaultProps = {
		size: 20,
		filledColor: 'red',
		emptyColor: '#fff',
		borderWidth: 3,
		borderColor: '#eee',
	}

	render() {
		const { style } = this.props

		return (
			<RX.View
				style={[
					styles.container,
					{
						width: this.props.size,
						height: this.props.size,
						borderRadius: this.props.size / 5,
						borderWidth: this.props.borderWidth,
						borderColor: this.props.borderColor,
					},
					style,
					{
						backgroundColor: this.props.value ? this.props.filledColor : this.props.emptyColor,
					}
				]}
				onPress={this._onPress}
			/>
		)
	}

	private _onPress = () => {
		this.props.onChange(!this.props.value)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		cursor: 'pointer',
	}),
}
