import React from 'react'

import { render } from 'utils/test-utils'

import Title from './Title'

describe('WHEN I visit the Job description page', () => {
  describe('AND I look at the title', () => {
    it('THEN I should see a the company name', () => {
      const props = {
        name: 'company name',
        imageUrl: 'img-url',
      }

      const { getByText } = render(<Title {...props} />)

      expect(getByText(props.name)).toBeInTheDocument()
    })
  })
})
