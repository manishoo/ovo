/*
 * Picker.ios.tsx
 * Copyright: Ouranos Studio 2019
 */


import { Picker as RNPicker, PickerItemProps } from 'react-native'
import RX from 'reactxp'
import { fullWidth } from 'src/ts/utilities'

interface PickerProps {
	style?: any,
	pickers: PickerItemProps[][],
	defaultValues: any[]
}

interface PickerState {
	[k: string]: any,
}

export default class Picker extends RX.Component<PickerProps, PickerState> {
	constructor(props: PickerProps) {
		super(props)

		this.state = Object.assign(
			{},
			...props.defaultValues.map((item, index) => ({ [`selectedItem${index}`]: item })),
			{}
		)
	}

	getValues = () => {
		return this.state
	}

	render() {
		const { pickers } = this.props

		return (
			<RX.View
				style={{
					flexDirection: 'row',
					width: fullWidth(),
					height: 300, //FIXME please
				}}
			>
				{
					pickers.map((pickerItems, index) => (
						<RNPicker
							key={index}
							selectedValue={this.state[`selectedItem${index}`]}
							onValueChange={(itemValue) => this.setState({ [`selectedItem${index}`]: itemValue })}
							style={{ flex: 1, height: 50, width: 100 }} //FIXME please
						>
							{
								pickerItems.map((item) => (
									<RNPicker.Item
										key={item.value}
										{...item}
									/>
								))
							}
						</RNPicker>
					))
				}
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({}),
}
