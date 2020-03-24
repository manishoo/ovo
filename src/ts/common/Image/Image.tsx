/*
 * Image.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { gql } from '@apollo/client'
import ImageSource from '@Modules/images'
import RX, { Types } from 'reactxp'


export interface ImageProps extends Types.ImageProps {
  style?: any,
}

export default class Image extends RX.Component<ImageProps> {
  static source = ImageSource
  static fragments = {
    image: gql`
      fragment Image on Image {
        url
      }
    `
  }

  public render() {
    const { style } = this.props

    return (
      <RX.Image
        style={[styles.container, style]}
        resizeMode={'cover'}
        {...this.props}
      />
    )
  }
}

const styles = {
  container: RX.Styles.createViewStyle({
    //
  }),
}
