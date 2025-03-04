import { Portal } from 'solid-js/web'
import type { Meta } from 'storybook-solidjs'
import { Dialog } from './'
import './dialog.css'

const meta: Meta = {
  title: 'Dialog',
}

export default meta

export const Basic = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Container>
          <Dialog.Content>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>Dialog Description</Dialog.Description>
            <div>
              <input placeholder="Enter name..." />
              <button>Save</button>
            </div>
            <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Container>
      </Portal>
    </Dialog.Root>
  )
}

export const DialogWithRenderFn = () => {
  return (
    <Dialog.Root>
      {(api) => (
        <>
          <Dialog.Trigger>Open Dialog</Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Container>
              <Dialog.Content>
                <Dialog.Title>Dialog Title</Dialog.Title>
                <Dialog.Description>Dialog Description</Dialog.Description>
                <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
              </Dialog.Content>
            </Dialog.Container>
          </Portal>
          <p>Dialog is {api().isOpen ? 'open' : 'closed'}</p>
        </>
      )}
    </Dialog.Root>
  )
}
