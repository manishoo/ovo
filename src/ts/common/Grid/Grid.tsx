/*
 * Grid.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import { ResponsiveWidth } from '@Models/ResponsiveWidthModels'
import ResponsiveWidthStore from '@Services/ResponsiveWidthStore'
import ServiceConsumer from '@Services/utils/ServiceConsumer'
import { FC, useCallback } from 'react'
import RX from 'reactxp'

// export { Col as Col } from 'react-grid-system'
// export { Row as Row } from 'react-grid-system'
// export { Container as Container } from 'react-grid-system'

const _styles = {
  container: RX.Styles.createViewStyle({}),
  row: RX.Styles.createViewStyle({
    flexDirection: 'row',
    flexWrap: 'wrap',
  }),
}

interface Container extends RX.Types.ViewProps {
  style?: any
}

export const Container: FC<Container> = (props) => {
  return (
    <RX.View
      {...props}
      style={[
        _styles.container,
        props.style,
      ]}
    />
  )
}

interface RowProps extends RX.Types.ViewProps {
  style?: any
}

export const Row: FC<RowProps> = (props) => {
  return (
    <RX.View
      {...props}
      style={[
        _styles.row,
        props.style,
      ]}
    />
  )
}

interface ColProps extends RX.Types.ViewProps {
  style?: any,

  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

export const Col: FC<ColProps> = (props) => {
  const _getResponsiveStyle = useCallback((rw: ResponsiveWidth) => {
    let flex = 1
    switch (rw) {
      case ResponsiveWidth.Tiny:
        flex = props.xs || 1
        break
      case ResponsiveWidth.Small:
        flex = props.sm || props.xs || 1
        break
      case ResponsiveWidth.Medium:
        flex = props.md || props.sm || props.xs || 1
        break
      case ResponsiveWidth.Large:
        flex = props.lg || props.md || props.sm || props.xs || 1
        break
    }

    return [
      RX.Styles.createViewStyle({
        flex,
      }, false),
      props.style
    ]
  }, [
    props.xs,
    props.sm,
    props.md,
    props.lg,
    props.style,
  ])

  return (
    <ServiceConsumer
      state={{
        responsiveWidth: () => ResponsiveWidthStore.getResponsiveWidth(),
      }}
    >
      {({ responsiveWidth }) => (
        <RX.View
          {...props}
          style={_getResponsiveStyle(responsiveWidth)}
        />
      )}
    </ServiceConsumer>
  )
}
