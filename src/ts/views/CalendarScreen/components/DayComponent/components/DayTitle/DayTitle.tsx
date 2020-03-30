/*
 * DayTitle.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Text from '@Common/Text/Text'
import ItemControl from '@Views/CalendarScreen/components/ItemControl/ItemControl'
import { haveSame } from '@Views/CalendarScreen/utils/is-same-day'
import { DateTime } from 'luxon'
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
  date: Date,
  dayRegenerating?: boolean,
  onRegenerate: () => void,
  color: string,
  style?: any,
  itemControlVisible?: boolean,
  onTitlePress: () => void,
  children?: any,
}

const DayTitle = ({ dayRegenerating, date, color, onRegenerate, style, itemControlVisible, onTitlePress, children }: DayTitleProps) => {
  const today = new Date()
  const isOnSameWeek = haveSame(today, date, 'week')
  const isToday = haveSame(date, today, 'day')
  const datetime = DateTime.fromJSDate(date)
  const isTomorrow = Math.round(datetime.diffNow('day').as('day')) === 1
  const isYesterday = Math.round(datetime.diffNow('day').as('day')) === -1

  let text = datetime.toLocaleString({
    day: isOnSameWeek ? undefined : '2-digit',
    month: isOnSameWeek ? undefined : 'short',
    weekday: 'long',
  })

  if (isToday) {
    text = translate(translate.keys.Today)
  }
  if (isTomorrow) {
    text = translate(translate.keys.Tomorrow)
  }
  if (isYesterday) {
    text = translate(translate.keys.Yesterday)
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
      >{text}</Text>

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
