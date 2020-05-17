/*
 * Back.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import AppConfig from '@App/AppConfig'
import Styles from '@App/Styles'
import Arrow from '@Common/Arrow/Arrow'
import Text from '@Common/Text/Text'
import RX from 'reactxp'


const _styles = {
  container: RX.Styles.createViewStyle({
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
  }),
  backText: RX.Styles.createTextStyle({
    fontWeight: '500',
    [Styles.values.marginStart]: 5,
  }),
  backImage: RX.Styles.createImageStyle({
    width: 12,
    height: 21,
    transform: [{ rotate: AppConfig.isRTL() ? '180deg' : '0deg' }]
  }),
}

interface BackProps extends RX.Types.ViewProps {
  color?: string,
}

const Back = ({ style, color = '#fff', ...props }: BackProps) => {
  return (
    <RX.View
      {...props}
      style={[
        _styles.container,
        style
      ]}
    >
      <Arrow
        size={30}
        color={color}
        direction={AppConfig.isRTL() ? 'right' : 'left'}
      />
      <Text translate style={[_styles.backText, { color: color }]}>Back</Text>
    </RX.View>
  )
}

export default Back
