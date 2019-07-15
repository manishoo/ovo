/*
 * Input.tsx
 * Copyright: Ouranos Studio 2019
 */

// import React from 'react'
import RX from 'reactxp'
import theme from 'src/ts/app/Theme'
import TextInputAutoGrow from 'src/ts/controls/TextInputAutoGrow'

interface InputProps extends RX.Types.TextInputProps {
	[k: string]: any,
	style?: any,
	textInputStyle?: any,
	value: string,
	onChange: (value: string) => void,
	label?: string,
	inputRef?: any,
	autoGrow?: boolean,
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
			<RX.View
				style={[styles.container, style]}
			>
				{!!label && <RX.Text style={styles.label}>{label}</RX.Text>}
				<InputComponent
					ref={inputRef}
					value={value}
					onChangeText={this.onChangeText}
					style={[styles.textInput, textInputStyle]}
					{...props}
				/>
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		borderColor: theme.colors.inputBorderColor,
		borderBottomWidth: 2,
		paddingBottom: 5,
		marginBottom: theme.styles.spacing,
	}),
	label: RX.Styles.createTextStyle({
		color: theme.colors.labelInput,
		fontWeight: '500',
	}),
	textInput: RX.Styles.createTextInputStyle({
		padding: 5,
	}),
}
