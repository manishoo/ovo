/*
 * InputNumber.tsx
 * Copyright: Mehdi J. Shooshtari 2020
 */

import Text from '@Common/Text/Text'
// @ts-ignore
import persianJs from 'persianjs'
import { useState } from 'react'
import RX from 'reactxp'
import Input, { InputProps } from './Input'


interface InputNumberProps extends Omit<InputProps, 'value' | 'onChange'> {
  value: string | number | null,
  onChange: (value: string) => void,
  autoSize?: boolean,
  autoWidth?: boolean,
  totalHorizontalPadding?: number
}

export default function InputNumber(props: InputNumberProps) {
  const [width, setWidth] = useState(0)

  const _onChange = (value: string) => {
    if (!value) return props.onChange('')
    if (value === '.') return props.onChange('0.')
    if (!/^[0-9]*(\.[0-9]+)?\.?$/g.test(value)) return props.onChange(String(props.value))

    return props.onChange(persianJs(value).persianNumber().toString())
  }

  const textInputStyle = [
    props.textInputStyle
  ]
  if (props.autoWidth) {
    textInputStyle.push({
      width: width + (props.totalHorizontalPadding || 0),
    })
  }

  const value = ((!!props.value) || (props.value === 0)) ? String(props.value) : ''


  return (
    <>
      <RX.View
        ignorePointerEvents
        style={{ position: 'absolute' }}
        onLayout={e => setWidth(e.width)}
      >
        <Text style={{ color: 'transparent' }}>{value}</Text>
      </RX.View>
      {
        // @ts-ignore
        <Input
          {...props}
          value={value}
          textInputStyle={textInputStyle}
          onChange={_onChange}
        />
      }
    </>
  )
}
