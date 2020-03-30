/*
 * TrashCan.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { useTheme } from '@App/ThemeContext'
import React, { useMemo } from 'react'
import RX from 'reactxp'


const _styles = {
  container: RX.Styles.createViewStyle({
    //
    alignItems: 'center',
    justifyContent: 'flex-end'
  }),
  trashCan: RX.Styles.createViewStyle({
    //
    flexDirection: 'row',
    justifyContent: 'space-between',
  }),
  trashBar: RX.Styles.createViewStyle({
    borderRadius: 100,
  }),
  trashLid: RX.Styles.createViewStyle({
    marginTop: 1,
  }),
  trashLidContainer: RX.Styles.createViewStyle({
    alignItems: 'center',

    // @ts-ignore web
    transformOrigin: 'right',
    // @ts-ignore web
    transition: 'all 0.3s'
  })
}

interface TrashCanProps {
  style?: any,
  size?: number,
  isHovering?: boolean,
  color?: string,
}

const TrashCan: React.FC<TrashCanProps> = ({ style, size = 50, isHovering, color }) => {
  const theme = useTheme()

  let primaryColor = color || theme.colors.red

  const _containerStyle = useMemo(() => RX.Styles.createViewStyle({
    padding: size / 10,
    height: size * 2.5,
    top: -size / 4,
  }, false), [size])

  const _trashHandleStyle = useMemo(() => RX.Styles.createViewStyle({
    width: size / 2.5,
    height: size / 10,

    borderTopLeftRadius: size / 5,
    borderTopRightRadius: size / 5,

    backgroundColor: primaryColor,
  }, false), [size])

  const _trashLidStyle = useMemo(() => RX.Styles.createViewStyle({
    width: size * 1.1,
    height: size / 9,

    borderTopLeftRadius: size / 5,
    borderTopRightRadius: size / 5,

    backgroundColor: primaryColor,
  }, false), [size])

  const _trashCanStyle = useMemo(() => RX.Styles.createViewStyle({
    width: size,
    padding: size / 6,

    borderBottomLeftRadius: size / 5,
    borderBottomRightRadius: size / 5,

    marginTop: size / 20,
    backgroundColor: primaryColor,
  }, false), [size])

  const _trashBarStyle = useMemo(() => RX.Styles.createViewStyle({
    width: size / 12,
    height: size,

    backgroundColor: theme.colors.cardBg,
  }, false), [size])

  const _trashLidContainerStyle = useMemo(() => RX.Styles.createViewStyle({
    transform: isHovering ? [{ rotate: '45deg' }] : undefined
  }, false), [isHovering])

  return (
    <RX.View
      ignorePointerEvents
      style={[
        _styles.container,
        _containerStyle,
        style,
      ]}
    >
      <RX.View ignorePointerEvents style={[_styles.trashLidContainer, _trashLidContainerStyle]}>
        <RX.View ignorePointerEvents style={_trashHandleStyle} />
        <RX.View ignorePointerEvents style={[_styles.trashLid, _trashLidStyle]} />
      </RX.View>
      <RX.View ignorePointerEvents style={[_styles.trashCan, _trashCanStyle]}>
        <RX.View ignorePointerEvents style={[_styles.trashBar, _trashBarStyle]} />
        <RX.View ignorePointerEvents style={[_styles.trashBar, _trashBarStyle]} />
        <RX.View ignorePointerEvents style={[_styles.trashBar, _trashBarStyle]} />
      </RX.View>
    </RX.View>
  )
}

export default TrashCan
