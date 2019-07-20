/*
 * Instructions.tsx
 * Copyright: Ouranos Studio 2019
 */

import FilledButton from 'common/FilledButton/FilledButton'
import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
import { Instruction } from 'src/ts/models/FoodModels'
import InstructionRow from './components/InstructionRow/InstructionRow'

interface InstructionsProps {
	style?: any,
	instructions: Instruction[],
	onAddNewInstruction: () => void,
	onInstructionChange: (instruction: Instruction) => void,
	onInstructionDelete: (id: string) => void,
}

export default class Instructions extends RX.Component<InstructionsProps> {
	render() {
		const { style } = this.props

		return (
			<RX.View
				style={[styles.container, style]}
			>
				{/*List current ones*/}
				{
					this.props.instructions.map(instruction => (
						<InstructionRow
							instruction={instruction}
							onChange={this.props.onInstructionChange}
							onDelete={this.props.onInstructionDelete}
						/>
					))
				}

				{/*Add new*/}
				<FilledButton label={'Add Instruction'} onPress={this.props.onAddNewInstruction}
											containerStyle={{ marginTop: theme.styles.spacing }} />
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		//
	}),
}
