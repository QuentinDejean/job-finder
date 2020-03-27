import React from 'react'
import { render } from 'utils/test-utils'

import App from './App'
import { companyLogoId } from './Header/constants'

describe('WHEN I visit the Job description page', () => {
  it('THEN I should see the company logo', () => {
    const { getByTestId } = render(<App />)

    expect(getByTestId(companyLogoId)).toBeInTheDocument()
  })
})
