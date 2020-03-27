import React from 'react'

import { render, waitFor } from 'utils/test-utils'

import Header from './Header'
import { skeletonId } from './constants'
import { user } from './mock'

describe('WHEN I visit the Job description page', () => {
  describe('AND I look at the header', () => {
    it('THEN I should see a header loading state', () => {
      const { getByTestId } = render(<Header />)

      expect(getByTestId(skeletonId)).toBeInTheDocument()
    })
  })
})

describe('GIVEN I am on the Job description page', () => {
  describe('WHEN the user profile has finished loading', () => {
    it('THEN I should see the user first name and last name', async () => {
      const { getByText } = render(<Header />, { apiPayload: user })

      await waitFor(() =>
        expect(
          getByText(`${user.firstName} ${user.lastName}`)
        ).toBeInTheDocument()
      )
    })
  })
})
