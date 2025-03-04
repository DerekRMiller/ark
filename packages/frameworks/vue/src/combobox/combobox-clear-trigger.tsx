import { defineComponent } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { useComboboxContext } from './combobox-context'

export type ComboboxClearTriggerProps = HTMLArkProps<'button'>

export const ComboboxClearTrigger = defineComponent({
  setup(_, { slots, attrs }) {
    const api = useComboboxContext()

    return () => (
      <ark.button {...api.value.clearTriggerProps} {...attrs}>
        {slots.default?.()}
      </ark.button>
    )
  },
})
