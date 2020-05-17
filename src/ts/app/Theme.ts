/*
 * Theme.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import DarkPalette from '@App/colors/dark'
import LightPalette from '@App/colors/light'
import { default as FontRefs } from '@Modules/fonts'
import RX from 'reactxp'


export enum ThemeMode {
  light = 'light',
  dark = 'dark',
}

export class Theme {
  public fontSizes = {
    size12: 12,
    size14: 14,
    size16: 16,
    size20: 20,
    size32: 32,

    menuItem: 16
  }
  public fonts = {
    display: {
      fontFamily: FontRefs.display,
    } as RX.Types.FontInfo,
    text: {
      fontFamily: FontRefs.text,
    } as RX.Types.FontInfo,
  }

  constructor(public mode: ThemeMode = ThemeMode.light) {
    // noop
  }

  public get colors() {
    switch (this.mode) {
      case 'dark':
        return DarkPalette
      default:
      case 'light': {
        return LightPalette
      }
    }
  }
}
