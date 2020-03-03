/*
 * SubmitSelect.tsx
 * Copyright: Ouranos Studio 2020
 */

import Styles from '@App/Styles'
import FilledButton from '@Common/FilledButton/FilledButton'
import { translate } from '@Common/LocalizedText/LocalizedText'
import Select, { Option } from '@Common/Select/Select'
import { useState } from 'react'
import RX from 'reactxp'


export interface SubmitSelectProps {
  options: Option[],
  defaultValue?: string,
  onSubmit?: (userMealId: string) => void,
}

const SubmitSelect = ({ options, defaultValue, onSubmit }: SubmitSelectProps) => {
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
        containerStyle={styles.containerStyle}
        suffix={
          <Select
            value={selectedValue}
            options={options}
            onChange={selectedValue => setSelectedValue(selectedValue)}
            style={styles.select}
            textStyle={{ color: '#fff' }}
          />
        }
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
  }),
  containerStyle: RX.Styles.createButtonStyle({
    flex: 3,
  }),
  select: RX.Styles.createViewStyle({
    marginBottom: 0,
    [Styles.values.marginStart]: Styles.values.spacing / 2,
    backgroundColor: '#1bce88'
  })
}

