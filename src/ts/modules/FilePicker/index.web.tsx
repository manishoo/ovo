/*
 * FilePicker.tsx
 * Copyright: Ouranos Studio 2019
 */

import imageCompression from 'browser-image-compression'
import React from 'react'
import RX from 'reactxp'
import AppConfig from 'src/ts/app/AppConfig'
import { FilePickerProps } from 'src/ts/modules/FilePicker/types'


export default class FilePicker extends RX.Component<FilePickerProps> {
  constructor(props: FilePickerProps) {
    super(props)

    if (!AppConfig.isNode()) {
      this.reader = new FileReader()
    }
  }

  _input: any
  reader: FileReader

  public render() {
    const { style } = this.props

    return (
      <RX.View
        style={[styles.container, style]}
        onPress={this._openPicker}
      >
        {this.props.children}
        <input
          ref={ref => this._input = ref}
          type="file"
          required
          style={{ display: 'none' }}
          onChange={this._onChange}
        />
      </RX.View>
    )
  }

  private _onChange = ({ target: { validity, files } }: React.ChangeEvent<HTMLInputElement>) => {
    const file = files[0]

    if (this.reader) {
      if (!file) return null

      this.reader.onload = (event) => {
        this.props.onImagePreviewChange(event.target.result)
      }

      this.reader.readAsDataURL(file)

      if (!validity.valid) return null

      if (this.props.compress) {
        this._compressImage(file)
          .then(({ full, thumb }) => this.props.onImageChange(full, thumb))
      } else {
        this.props.onImageChange(file)
      }
    }
  }

  private _compressImage = async (image: File) => {
    return {
      full: await imageCompression(image, this.props.fullImageOptions || {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true
      }),
      thumb: this.props.withThumbnail && await imageCompression(image, this.props.thumbImageOptions || {
        maxSizeMB: 0.2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      }),
    }
  }

  private _openPicker = () => {
    this._input.click()
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    cursor: 'pointer',
  }),
}
