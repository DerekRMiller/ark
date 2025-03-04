import { mergeProps } from '@zag-js/solid'
import { ark, type HTMLArkProps } from '../factory'
import { useDatePickerContext } from './date-picker-context'

export interface DatePickerInputProps extends HTMLArkProps<'input'> {}

export const DatePickerInput = (props: DatePickerInputProps) => {
  const api = useDatePickerContext()
  const mergedProps = mergeProps(api().inputProps, props)

  return <ark.input {...mergedProps} />
}
