import React from 'react'

import { render, waitFor } from 'utils/test-utils'

import { skeletonId } from './constants'
import JobProfile from './JobProfile'
import { jobs } from './mock'

describe('WHEN I visit the Job page', () => {
  describe('AND I look at the description', () => {
    it.skip('THEN I should see a loading state', () => {
      const { getByTestId } = render(<JobProfile />)
      expect(getByTestId(skeletonId)).toBeInTheDocument()
    })
  })
})

describe('GIVEN I am on the Job description page', () => {
  describe('WHEN the user profile has finished loading', () => {
    it('THEN I should see the company data', async () => {
      const { getByText } = render(<JobProfile />, { apiPayload: jobs })

      const {
        jobTitle: { name },
      } = jobs[1]

      await waitFor(() => expect(getByText(name)).toBeInTheDocument())
    })
  })
})
