/*
 * ThemeContext.ts
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'
import { Theme, ThemeMode } from '@App/Theme'
import React, { useContext } from 'react'


export const ThemeContext = React.createContext({
  theme: new Theme(AppConfig.theme),
  toggleTheme: (mode: ThemeMode) => {
  },
})

export const useTheme = () => {
  const { theme } = useContext(ThemeContext)

  return theme
}
