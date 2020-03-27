import React from 'react'
import { render } from 'utils/test-utils'

import App from './App'

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const content = getByText(/First/i)
  expect(content).toBeInTheDocument()
})
