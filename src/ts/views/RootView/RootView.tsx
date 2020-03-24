/*
 * RootView.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'
import { Theme } from '@App/Theme'
import { ThemeContext } from '@App/ThemeContext'
import SafeArea from '@Common/SafeArea/SafeArea'
import ToastContainer from '@Common/ToastContainer/ToastContainer'
import { MeContext, useMe } from '@Models/graphql/me/me'
import Navigator from '@Modules/navigator'
import { useState } from 'react'
import RX from 'reactxp'


interface RootViewProps extends RX.CommonProps {
  onLayout?: (e: RX.Types.ViewOnLayoutEvent) => void;
  history?: any
}

export default function RootView({ onLayout, history }: RootViewProps) {
  const [theme, setTheme] = useState<Theme>(() => new Theme('light'))
  const me = useMe()

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: (mode: 'dark' | 'light') => setTheme(new Theme(mode))
      }}
    >
      <MeContext.Provider
        value={{
          me,
        }}
      >
        <RX.View
          style={[
            styles.root,
            {
              backgroundColor: theme.colors.bg,
            }
          ]}
          onLayout={onLayout}
        >
          {AppConfig.getPlatformType() === 'ios' && <SafeArea />}
          <Navigator
            history={history}
            me={me}
          />

          <ToastContainer />
        </RX.View>
      </MeContext.Provider>
    </ThemeContext.Provider>
  )
}

const styles = {
  root: RX.Styles.createViewStyle({
    flex: 1,
    alignSelf: 'stretch',
  })
}
