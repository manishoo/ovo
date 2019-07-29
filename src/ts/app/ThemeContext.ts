/*
 * ThemeContext.ts
 * Copyright: Ouranos Studio 2019
 */

import React from 'react'
import { Theme } from 'src/ts/app/Theme'


export const ThemeContext = React.createContext({
	theme: new Theme('light'),
	toggleTheme: (mode: 'dark' | 'light') => {},
})