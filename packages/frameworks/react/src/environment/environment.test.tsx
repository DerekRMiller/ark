import { render, screen } from '@testing-library/react'
import { useEffect, useState } from 'react'
import { Environment, useEnvironmentContext } from '.'
import { type EnvironmentContext } from './environment-context'

const PrintEnvironment = () => {
  const getRootNode = useEnvironmentContext()
  const [rootNode, setRootNode] = useState<ReturnType<NonNullable<EnvironmentContext>> | undefined>(
    undefined,
  )
  useEffect(() => {
    setRootNode(getRootNode?.())
  }, [getRootNode])

  return <pre aria-label="environment values">{JSON.stringify(rootNode, null, 2)}</pre>
}

describe('Environment', () => {
  it('should have access to the environment values', async () => {
    const ComponentUnderTest = () => (
      <Environment value={document}>
        <PrintEnvironment />
      </Environment>
    )
    render(<ComponentUnderTest />)

    expect(screen.getByLabelText('environment values').innerHTML).not.toBe('""')
  })
})
