/*
 * index.native.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import FilledButton from '@Common/FilledButton/FilledButton'
import RX from 'reactxp'


interface FilePickerProps {
  style?: any,
  onImageChange: (image: any) => void,
  onImagePreviewChange: (image: any) => void,
}

export default class FilePicker extends RX.Component<FilePickerProps> {
  _input: any

  public render() {
    const { style } = this.props

    return (
      <RX.View
        style={[styles.container, style]}
      >
        <FilledButton label={'Select Image'} onPress={this._openPicker} />
      </RX.View>
    )
  }

  private _openPicker = () => {
    //
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    //
  }),
}
