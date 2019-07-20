/*
 * Select.tsx
 * Copyright: Ouranos Studio 2019
 */


import { showSelectDialog } from 'common/Select/components/SelectDialog'
import Text from 'common/Text/Text'
import RX from 'reactxp'

export interface Option {
	value: any,
	text: string,
}

interface SelectProps {
	style?: any,
	value?: any,
	options: Option[],
	onChange: (value: any) => void,
}

interface SelectState {
	selectedOption?: Option,
}

export default class Select extends RX.Component<SelectProps, SelectState> {
	constructor(props: SelectProps) {
		super(props)

		this.state = {
			selectedOption: undefined,
		}
	}

	render() {
		const { style } = this.props

		return (
			<RX.View
				style={[styles.container, style]}
				onPress={() => showSelectDialog({
					onOptionSelect: (option => this.setState({ selectedOption: option })),
					options: this.props.options,
				})}
			>
				<Text>{this.state.selectedOption ? this.state.selectedOption.text : '-'}</Text>
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		//
	}),
}
