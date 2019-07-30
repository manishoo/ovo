/*
 * Picker.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'

interface PickerProps {
	style?: any,
	defaultValues: any[],
	pickers: any[],
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

	render() {
		const { style } = this.props

		return (
			<RX.View
				style={[styles.container, style]}
			>
				{
					this.props.pickers.map((pickerItems, index) => (
						<RX.Picker
							selectedValue={this.state[`selectedItem${index}`]}
							onValueChange={(itemValue) => this.setState({ [`selectedItem${index}`]: itemValue })}
							items={pickerItems}
							style={styles.picker}
						/>
					))
				}
			</RX.View>
		)
	}

	getValues = () => {
		return this.state
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		flexDirection: 'row',
	}),
	picker: RX.Styles.createPickerStyle({
		flex: 1,
		marginHorizontal: Styles.values.spacing
	})
}
