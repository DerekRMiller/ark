import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { useState } from 'react'
import { Presence, type PresenceProps } from './presence'

const ComponentUnderTest = (props: Omit<PresenceProps, 'present' | 'children'>) => {
  const [present, setPresent] = useState(false)
  return (
    <div>
      <button onClick={() => setPresent(!present)}>Toggle</button>
      <Presence present={present} {...props}>
        <span data-testid="box">I am a red box</span>
      </Presence>
    </div>
  )
}

describe('Presence', () => {
  it('should control presence when not lazy mounting and not unmounting on exit', async () => {
    render(<ComponentUnderTest />)
    expect(screen.queryByTestId('box')).not.toBeVisible()

    await user.click(screen.getByRole('button'))
    expect(screen.queryByTestId('box')).toBeVisible()

    await user.click(screen.getByRole('button'))
    expect(screen.queryByTestId('box')).not.toBeVisible()
  })

  it('should control presence when lazy mounting and not unmounting on exit', async () => {
    render(<ComponentUnderTest lazyMount />)
    expect(screen.queryByTestId('box')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button'))
    expect(screen.queryByTestId('box')).toBeVisible()

    await user.click(screen.getByRole('button'))
    expect(screen.queryByTestId('box')).not.toBeVisible()
  })

  it('should control presence when not lazy mounting and unmounting on exit ', async () => {
    render(<ComponentUnderTest unmountOnExit />)
    expect(screen.queryByTestId('box')).not.toBeVisible()

    await user.click(screen.getByRole('button'))
    expect(screen.queryByTestId('box')).toBeVisible()

    await user.click(screen.getByRole('button'))
    expect(screen.queryByTestId('box')).not.toBeInTheDocument()
  })

  it('should control presence when lazy mounting and unmounting on exit', async () => {
    render(<ComponentUnderTest lazyMount unmountOnExit />)

    expect(screen.queryByTestId('box')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button'))
    expect(screen.queryByTestId('box')).toBeVisible()

    await user.click(screen.getByRole('button'))
    expect(screen.queryByTestId('box')).not.toBeInTheDocument()
  })
})
