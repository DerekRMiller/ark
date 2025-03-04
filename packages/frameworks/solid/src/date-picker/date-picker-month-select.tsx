import { mergeProps } from '@zag-js/solid'
import { ark, type HTMLArkProps } from '../factory'
import { useDatePickerContext } from './date-picker-context'

export interface DatePickerMonthSelectProps extends HTMLArkProps<'select'> {}

export const DatePickerMonthSelect = (props: DatePickerMonthSelectProps) => {
  const api = useDatePickerContext()
  const mergedProps = mergeProps(api().monthSelectProps, props)

  return (
    <ark.select {...mergedProps}>
      {api()
        .getMonths()
        .map((month) => (
          <option value={month.value}>{month.label}</option>
        ))}
    </ark.select>
  )
}
