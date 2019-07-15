/*
 * FilePicker.native.tsx
 * Copyright: Ouranos Studio 2019
 */

import RX from 'reactxp'
import FilledButton from 'common/FilledButton'
import AppConfig from 'src/ts/app/AppConfig'

let reader: any

if (!AppConfig.isNode()) {
	reader = new FileReader()
}

interface FilePickerProps {
	style?: any,
	onImageChange: (image: any) => void,
	onImagePreviewChange: (image: any) => void,
	label?: string
}

export default class FilePicker extends RX.Component<FilePickerProps> {
	render() {
		const {style} = this.props

		return (
			<RX.View
				style={[styles.container, style]}
			>
				<FilledButton label={this.props.label} onPress={this._openPicker}/>
				<input
					ref={ref => this._input = ref}
					type="file"
					required
					style={{display: 'none'}}
					// @ts-ignore
					onChange={({target: {validity, files: [file], result}}) => {
						if (reader) {
							if (!file) return null
								// @ts-ignore
							reader.onload = (event) => {
								this.props.onImagePreviewChange(event.target.result)
							}

							reader.readAsDataURL(file)
							return validity.valid && this.props.onImageChange(file)
						}
					}}
				/>
			</RX.View>
		)
	}

	static defaultProps = {
		label: 'Select Image'
	}

	_input: any

	private _openPicker = () => {
		this._input.click()
	}
}

const styles = {
	container: RX.Styles.createViewStyle({
		//
	}),
}
