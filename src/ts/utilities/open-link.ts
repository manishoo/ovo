/*
 * open-link.ts
 * Copyright: Ouranos Studio 2019
 */

import AppConfig from 'src/ts/app/AppConfig'


export default function openLink(url: string) {
  if (AppConfig.getPlatformType() === 'web') {
    window.open(url, '_blank')
  }
}
