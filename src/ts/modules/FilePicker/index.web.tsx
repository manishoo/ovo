/*
 * index.web.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'
import React from 'react'
import RX from 'reactxp'
import { FilePickerProps } from './types'


export default class FilePicker extends RX.Component<FilePickerProps> {
  _input: any
  private readonly _reader: FileReader | null = null

  constructor(props: FilePickerProps) {
    super(props)

    if (!AppConfig.isNode()) {
      this._reader = new FileReader()
    }
  }

  public render() {
    const { style } = this.props

    return [
      <RX.View
        style={[styles.container, style]}
        onPress={this._openPicker}
      >
        {this.props.children}
      </RX.View>,
      <input
        ref={ref => this._input = ref}
        type="file"
        required
        style={{ display: 'none' }}
        onChange={this._onChange}
      />
    ]

  }

  private _onChange = ({ target: { validity, files } }: React.ChangeEvent<HTMLInputElement>) => {
    const file = files![0]

    if (this._reader) {
      if (!file) return null

      this._reader.onload = (event) => {
        this.props.onImagePreviewChange(event.target!.result)
      }

      this._reader.readAsDataURL(file)

      if (!validity.valid) return null

      if (this.props.compress) {
        this._compressImage(file)
          .then(({ full, thumb }) => this.props.onImageChange(full, thumb))
      } else {
        this.props.onImageChange(file)
      }
    }
  }

  private _compressImage = async (image: any) => {
    if (typeof File === undefined) throw new Error('No File')

    const imageCompression = require('browser-image-compression').default

    return {
      full: await imageCompression(image, this.props.fullImageOptions || {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        onProgress: () => null,
      }),
      thumb: this.props.withThumbnail && await imageCompression(image, this.props.thumbImageOptions || {
        maxSizeMB: 0.08,
        maxWidthOrHeight: 500,
        useWebWorker: true,
        onProgress: () => null,
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
