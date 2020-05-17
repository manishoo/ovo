/*
 * open-link.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'


export default function openLink(url: string) {
  if (AppConfig.getPlatformType() === 'web' && typeof window !== 'undefined') {
    window.open(url, '_blank')
  }
}
