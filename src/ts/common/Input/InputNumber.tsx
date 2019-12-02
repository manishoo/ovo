/*
 * IntlInput.tsx
 * Copyright: Ouranos Studio 2019
 */

import persianJs from 'persianjs'
import RX from 'reactxp'
import Input, { InputProps } from './Input'


interface InputNumberProps extends Omit<InputProps, 'value' | 'onChange'> {
  value: number,
  onChange: (value: number) => void,
  autoSize?: boolean,
}

export default function InputNumber(props: InputNumberProps) {
  const _onChange = (value: string) => {
    props.onChange(Number(persianJs(value).persianNumber().toString()))
  }

  return (
    // @ts-ignore
    <Input
      {...props}
      value={props.value ? String(props.value) : undefined}
      onChange={_onChange}
    />
  )
}
