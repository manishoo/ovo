/*
 * ThemeContext.ts
 * Copyright: Ouranos Studio 2019
 */

import { Theme } from '@App/Theme'
import React from 'react'


export const ThemeContext = React.createContext({
  theme: new Theme('light'),
  toggleTheme: (mode: 'dark' | 'light') => {
  },
})
