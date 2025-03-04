import { defineComponent } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { Presence, type PresenceProps } from '../presence'
import { emits, props } from '../presence/presence.props'
import { getValidChildren } from '../utils'
import { useComboboxContext } from './combobox-context'

export type ComboboxContentProps = HTMLArkProps<'div'> & PresenceProps

export const ComboboxContent = defineComponent({
  name: 'ComboboxContent',
  props,
  emits,
  setup(props, { slots, attrs }) {
    const api = useComboboxContext()

    return () => (
      <Presence {...props} present={props.present !== undefined ? props.present : api.value.isOpen}>
        <ark.div {...api.value.contentProps} {...attrs}>
          {() => getValidChildren(slots)}
        </ark.div>
      </Presence>
    )
  },
})
