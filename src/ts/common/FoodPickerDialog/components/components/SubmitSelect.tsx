/*
 * SubmitSelect.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Styles from '@App/Styles'
import { useTheme } from '@App/ThemeContext'
import FilledButton from '@Common/FilledButton/FilledButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Select, { Option } from '@Common/Select/Select'
import pSBC from '@Utils/pSBC'
import { useState } from 'react'
import RX from 'reactxp'


export interface SubmitSelectProps {
  options: Option[],
  defaultValue?: string,
  onSubmit?: (userMealId: string) => void,
}

const SubmitSelect = ({ options, defaultValue, onSubmit }: SubmitSelectProps) => {
  const theme = useTheme()
  const [selectedValue, setSelectedValue] = useState(defaultValue)

  return (
    <RX.View style={styles.submitButtonContainer}>
      <FilledButton
        label={translate('Add to')}
        onPress={() => {
          if (!onSubmit) return
          if (!selectedValue) return

          onSubmit(selectedValue)
        }}
        style={styles.button}
        pressed
        containerStyle={styles.containerStyle}
      />
      <Select
        value={selectedValue}
        options={options}
        onChange={selectedValue => setSelectedValue(selectedValue)}
        style={[styles.select, {
          backgroundColor: theme.colors.primary,
          borderColor: pSBC(-0.5, theme.colors.primary)
        }]}
        textStyle={{ color: '#fff', fontWeight: 'bold' }}
      />
    </RX.View>
  )
}

export default SubmitSelect

const styles = {
  submitButtonContainer: RX.Styles.createViewStyle({
    flexDirection: 'row',
    flex: 1,
  }),
  button: RX.Styles.createViewStyle({
    [Styles.values.borderTopEndRadius]: 0,
    [Styles.values.borderBottomEndRadius]: 0,
  }),
  containerStyle: RX.Styles.createButtonStyle({
    flex: 3,
  }),
  select: RX.Styles.createViewStyle({
    flex: 1,
    marginBottom: 0,

    borderRadius: 10,

    [Styles.values.marginStart]: 2,

    marginTop: 2,
    borderBottomWidth: 1,

    [Styles.values.borderTopStartRadius]: 0,
    [Styles.values.borderBottomStartRadius]: 0,
  })
}

