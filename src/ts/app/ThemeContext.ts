/*
 * ThemeContext.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { Theme } from '@App/Theme'
import React, { useContext } from 'react'


export const ThemeContext = React.createContext({
  theme: new Theme('light'),
  toggleTheme: (mode: 'dark' | 'light') => {
  },
})

export const useTheme = () => {
  const { theme } = useContext(ThemeContext)

  return theme
}
