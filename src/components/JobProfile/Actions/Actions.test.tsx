import React from 'react'

import { render, waitFor, fireEvent } from 'utils/test-utils'

import Actions from './Actions'
import {
  acceptJobLabel,
  alreadyTakenErrorMessage,
  declineJobLabel,
  jobAppliedSuccessMessage,
  notificationId,
  jobDeclinedSuccessMessage,
  unknownErrorMessage,
} from './constants'

const jobId = 'some-job-id'

describe('WHEN I visit the Job page', () => {
  describe('AND I look at the actions', () => {
    it('THEN I should see 2 buttons', () => {
      const { getByText } = render(<Actions jobId={jobId} />)

      expect(getByText(acceptJobLabel)).toBeInTheDocument()
      expect(getByText(declineJobLabel)).toBeInTheDocument()
    })

    it('THEN I should not see any notification', () => {
      const { queryByTestId } = render(<Actions jobId={jobId} />)

      expect(queryByTestId(notificationId)).not.toBeInTheDocument()
    })
  })
})

describe('GIVEN I am on the Job description page', () => {
  describe('WHEN I accept a job', () => {
    describe('AND the job is still available', () => {
      it('THEN I should see a successful notification', async () => {
        const apiPayload = { success: true }
        const { getByText } = render(<Actions jobId={jobId} />, { apiPayload })

        fireEvent.click(getByText(acceptJobLabel))

        await waitFor(() =>
          expect(getByText(jobAppliedSuccessMessage)).toBeInTheDocument()
        )
      })
    })

    describe('AND the job is no longer available', () => {
      it('THEN I should see an error notification', async () => {
        const apiPayload = { success: false }
        const { getByText } = render(<Actions jobId={jobId} />, { apiPayload })

        fireEvent.click(getByText(acceptJobLabel))

        await waitFor(() =>
          expect(getByText(alreadyTakenErrorMessage)).toBeInTheDocument()
        )
      })
    })
  })

  describe('WHEN I decline a job', () => {
    describe('AND the job is successfully declined', () => {
      it('THEN I should see a successful notification', async () => {
        const apiPayload = { success: true }
        const { getByText } = render(<Actions jobId={jobId} />, { apiPayload })

        fireEvent.click(getByText(declineJobLabel))

        await waitFor(() =>
          expect(getByText(jobDeclinedSuccessMessage)).toBeInTheDocument()
        )
      })
    })

    describe('AND the job is no longer available', () => {
      it('THEN I should see an error notification', async () => {
        const apiPayload = { success: false }
        const { getByText } = render(<Actions jobId={jobId} />, { apiPayload })

        fireEvent.click(getByText(declineJobLabel))

        await waitFor(() =>
          expect(getByText(unknownErrorMessage)).toBeInTheDocument()
        )
      })
    })
  })
})
