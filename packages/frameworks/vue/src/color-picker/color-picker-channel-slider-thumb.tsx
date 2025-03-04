import { defineComponent } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import type { ComponentWithProps } from '../utils'
import { useColorPickerChannelSliderContext } from './color-picker-channel-slider-context'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerChannelSliderThumbProps = HTMLArkProps<'div'>

export const ColorPickerChannelSliderThumb: ComponentWithProps<ColorPickerChannelSliderThumbProps> =
  defineComponent({
    name: 'ColorPickerChannelSliderThumb',
    setup(_, { slots, attrs }) {
      const api = useColorPickerContext()
      const sliderProps = useColorPickerChannelSliderContext()

      return () => (
        <ark.div {...api.value.getChannelSliderThumbProps(sliderProps.value)} {...attrs}>
          {slots.default?.()}
        </ark.div>
      )
    },
  })
