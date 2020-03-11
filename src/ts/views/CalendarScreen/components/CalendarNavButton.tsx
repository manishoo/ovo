/*
 * CalendarNavButton.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import HoverView from '@Common/HoverView/HoverButton'
import LinearGradient from '@Common/LinearGradient/LinearGradient'
import RX from 'reactxp'
import ImageSource from 'src/ts/modules/images/index.web'


interface CalendarNavButtonProps {
  style?: any,
  onPress: () => void,
  direction: 'toRight' | 'toLeft',
}

const CalendarNavButton = ({ style, onPress, direction }: CalendarNavButtonProps) => {
  return (
    <HoverView
      onPress={onPress}
      style={[
        {
          position: 'absolute',
          top: 0,
          bottom: 0,
          cursor: 'pointer',
        },
        style
      ]}
      onRenderChild={isHovering => (
        <RX.View
          style={[
            styles.container,
            {
              opacity: isHovering ? 0.5 : 0.3,
            },
          ]}
        >
          <LinearGradient
            direction={direction}
            colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
          />
          <RX.Image
            source={ImageSource.BackLight}
            style={[
              styles.backImage,
              direction === 'toRight' ? styles.toRightStyle : styles.toLeftStyle,
            ]}
          />
        </RX.View>
      )}
    />
  )
}

export default CalendarNavButton

const styles = {
  container: RX.Styles.createViewStyle({
    flex: 1,
    width: 40,
    alignItems: 'center',
    paddingTop: Styles.values.spacing,
  }),
  backImage: RX.Styles.createImageStyle({
    width: 12,
    height: 21,
  }),
  toLeftStyle: RX.Styles.createImageStyle({
    transform: [{ rotate: '0deg' }]
  }),
  toRightStyle: RX.Styles.createImageStyle({
    transform: [{ rotate: '180deg' }]
  }),
}
