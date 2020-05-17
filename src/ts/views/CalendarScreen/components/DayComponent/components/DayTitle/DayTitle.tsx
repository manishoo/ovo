/*
 * DayTitle.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { useTheme } from '@App/ThemeContext'
import Text from '@Common/Text/Text'
import ItemControl from '@Views/CalendarScreen/components/ItemControl/ItemControl'
import RX from 'reactxp'


const _styles = {
  dayDate: RX.Styles.createTextStyle({
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 0,
  }),
  titleContainer: RX.Styles.createViewStyle({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: Styles.values.spacing / 2,
    paddingHorizontal: Styles.values.spacing / 2,
  })
}

interface DayTitleProps {
  title: string,
  dayRegenerating?: boolean,
  onRegenerate: () => void,
  color?: string,
  style?: any,
  itemControlVisible?: boolean,
  onTitlePress: () => void,
  children?: any,
}

const DayTitle = ({ dayRegenerating, title, color, onRegenerate, style, itemControlVisible, onTitlePress, children }: DayTitleProps) => {
  const theme = useTheme()

  if (!color) {
    color = theme.colors.text
  }

  return (
    <RX.View
      style={[
        _styles.titleContainer,
        style
      ]}
    >
      <Text
        onPress={onTitlePress}
        type={Text.types.title}
        style={[
          _styles.dayDate,
          { color }
        ]}
      >{title}</Text>

      {
        itemControlVisible &&
        <ItemControl
          visible={itemControlVisible}
          onRegenerate={onRegenerate}
          regenerating={dayRegenerating}
        >
          {children}
        </ItemControl>
      }
    </RX.View>
  )
}

export default DayTitle
