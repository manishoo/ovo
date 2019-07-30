/*
 * Input.tsx
 * Copyright: Ouranos Studio 2019
 */


import RX from 'reactxp'
import Styles from 'src/ts/app/Styles'
import { ThemeContext } from 'src/ts/app/ThemeContext'
import TextInputAutoGrow from 'src/ts/common/TextInputAutoGrow/TextInputAutoGrow'

interface InputProps extends RX.Types.TextInputProps {
	style?: any,
	textInputStyle?: any,
	value: string,
	onChange: (value: string) => void,
	label?: string,
	inputRef?: any,
	autoGrow?: boolean,

	[k: string]: any,
}

export default class Input extends RX.Component<InputProps> {
	onChangeText = (v: any) => {
		return this.props.onChange(v)
	}

	render() {
		const {
			style,
			value,
			label,
			textInputStyle,
			inputRef,
			autoGrow,
			...props
		} = this.props

		const InputComponent = autoGrow ? TextInputAutoGrow : RX.TextInput

		return (
			<ThemeContext.Consumer>
				{({ theme }) => (
					<RX.View
						style={[styles.container, { borderColor: theme.colors.inputBorderColor }, style]}
					>
						{!!label && <RX.Text style={[styles.label, { color: theme.colors.labelInput }]}>{label}</RX.Text>}
						<InputComponent
							ref={inputRef}
							value={value}
							onChangeText={this.onChangeText}
							style={[styles.textInput, textInputStyle]}
							{...props}
						/>
					</RX.View>
				)}
			</ThemeContext.Consumer>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		marginBottom: Styles.values.spacing,
		borderBottomWidth: 2,
		paddingBottom: 5,
	}),
	label: RX.Styles.createTextStyle({
		fontWeight: '500',
	}),
	textInput: RX.Styles.createTextInputStyle({
		padding: 5,
	}),
}
