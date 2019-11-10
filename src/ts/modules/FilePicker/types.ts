/*
 * types.ts
 * Copyright: Ouranos Studio 2019
 */

export interface ImageOptions {
  maxSizeMB: number,
  maxWidthOrHeight: number,
  useWebWorker: boolean
}

export interface FilePickerProps {
  style?: any,
  onImageChange: (image: any, thumbnail?: any) => void,
  onImagePreviewChange: (image: any) => void,
  fullImageOptions?: ImageOptions
  thumbImageOptions?: ImageOptions
  compress?: boolean
  withThumbnail?: boolean
}
