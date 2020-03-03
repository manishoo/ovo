/*
 * IntlInput.tsx
 * Copyright: Ouranos Studio 2019
 */

// @ts-ignore
import persianJs from 'persianjs'
import RX from 'reactxp'
import Input, { InputProps } from './Input'


interface InputNumberProps extends Omit<InputProps, 'value' | 'onChange'> {
  value: string | number | null,
  onChange: (value: string | null) => void,
  autoSize?: boolean,
}

export default function InputNumber(props: InputNumberProps) {
  const _onChange = (value: string) => {
    if (!value) return props.onChange('')
    if (value === '.') return props.onChange('0.')
    if (!/^[0-9]*(\.[0-9]+)?\.?$/g.test(value)) return props.onChange(String(props.value))

    return props.onChange(persianJs(value).persianNumber().toString())
  }

  return (
    // @ts-ignore
    <Input
      {...props}
      value={!!props.value ? String(props.value) : ''}
      onChange={_onChange}
    />
  )
}
