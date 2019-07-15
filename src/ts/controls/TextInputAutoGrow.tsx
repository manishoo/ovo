/*
 * TextInputAutoGrow.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'

interface TextInputAutoGrowProps extends RX.Types.TextInputProps {
	style?: any,
	wrapperStyle?: any,
}

export default class TextInputAutoGrow extends RX.Component<TextInputAutoGrowProps> {
	state = {
		height: undefined,
	}

	render() {
		const {wrapperStyle, style, value, onChangeText, ...props} = this.props

		return (
			<RX.View style={wrapperStyle}>
				<RX.View
					ignorePointerEvents
					style={{position: 'absolute'}}
					onLayout={e => {
						this.setState({height: e.height + 28})
					}}
				>
					<RX.Text
						style={styles.text}
					>{value}</RX.Text>
				</RX.View>
				{
					// @ts-ignore
					<RX.TextInput
						value={value}
						multiline
						onChangeText={onChangeText}
						style={[{height: this.state.height, minHeight: 56}, style]}
						{...props}
					/>
				}
			</RX.View>
		)
	}
}

const styles = {
	textInput: RX.Styles.createViewStyle({
		//
	}),
	text: RX.Styles.createTextStyle({
		color: 'transparent',
	}),
}
