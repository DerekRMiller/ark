import { mergeProps } from '@zag-js/solid'
import { ark, type HTMLArkProps } from '../factory'
import { useDatePickerContext } from './date-picker-context'

export interface DatePickerTriggerProps extends HTMLArkProps<'button'> {}

export const DatePickerTrigger = (props: DatePickerTriggerProps) => {
  const api = useDatePickerContext()
  const mergedProps = mergeProps(api().triggerProps, props)

  return <ark.button {...mergedProps} />
}
