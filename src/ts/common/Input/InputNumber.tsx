/*
 * IntlInput.tsx
 * Copyright: Ouranos Studio 2019
 */

// @ts-ignore
import persianJs from 'persianjs'
import RX from 'reactxp'
import Input, { InputProps } from './Input'


interface InputNumberProps extends Omit<InputProps, 'value' | 'onChange'> {
  value: number | null,
  onChange: (value: number | null) => void,
  autoSize?: boolean,
}

export default function InputNumber(props: InputNumberProps) {
  const _onChange = (value: string) => {
    if (value) {
      return props.onChange(Number(persianJs(value).persianNumber().toString()))
    }

    return props.onChange(null)
  }

  return (
    // @ts-ignore
    <Input
      {...props}
      value={props.value ? String(props.value) : ''}
      onChange={_onChange}
    />
  )
}
