/*
 * FilePicker.native.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import FilledButton from 'common/FilledButton'

interface FilePickerProps {
	style?: any,
	onImageChange: (image: any) => void,
	onImagePreviewChange: (image: any) => void,
}

export default class FilePicker extends RX.Component<FilePickerProps> {
	_input: any

	private _openPicker = () => {
		console.log('this._input', this._input)
	}

	render() {
		const {style} = this.props

		return (
			<RX.View
				style={[styles.container, style]}
			>
				<FilledButton label={'Select Image'} onPress={this._openPicker}/>
			</RX.View>
		)
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		//
	}),
}
