import React, { useContext, useState } from 'react'
import { Box, Button } from '@material-ui/core'

import styled from 'styled-components'

import HTTPClientContext from 'utils/httpClient'

import Notification from './Notification'
import { declineJobLabel, acceptJobLabel } from './constants'

type Props = {
  jobId: string
}

type ActionState = {
  isPerformingAction: boolean
  isAccepted: boolean
  isDeclined: boolean
  hasError?: {
    alreadyTaken: boolean
    unknown: boolean
  }
}

const BoxContainer = styled(Box)`
  padding: 15px;
  width: 50%;
`

const defaultState: ActionState = {
  isPerformingAction: false,
  isAccepted: false,
  isDeclined: false,
  hasError: undefined,
}

const Actions = ({ jobId }: Props) => {
  const axios = useContext(HTTPClientContext)

  const [actionJob, setJobAction] = useState<ActionState>(defaultState)

  const acceptJob = async () => {
    setJobAction({
      ...defaultState,
      isPerformingAction: true,
    })

    const {
      data: { success },
    } = await axios.get(`/job/${jobId}/accept`)

    setJobAction({
      ...defaultState,
      ...(success
        ? {
            isAccepted: true,
          }
        : {
            hasError: { alreadyTaken: true, unknown: false },
          }),
    })
  }

  const declineJob = async () => {
    setJobAction({
      ...defaultState,
      isPerformingAction: true,
    })

    const {
      data: { success },
    } = await axios.get(`/job/${jobId}/reject`)

    setJobAction({
      ...defaultState,
      ...(success
        ? {
            isDeclined: true,
          }
        : {
            hasError: { alreadyTaken: false, unknown: true },
          }),
    })
  }

  const { isPerformingAction, isAccepted, isDeclined, hasError } = actionJob

  return (
    <>
      <Notification
        isAccepted={isAccepted}
        isDeclined={isDeclined}
        hasError={hasError}
        onClose={() => setJobAction(defaultState)}
      />
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <BoxContainer>
          <Button
            disabled={isPerformingAction}
            onClick={declineJob}
            variant="outlined"
            fullWidth
          >
            {declineJobLabel}
          </Button>
        </BoxContainer>
        <BoxContainer>
          <Button
            disabled={isPerformingAction}
            onClick={acceptJob}
            variant="contained"
            color="primary"
            fullWidth
          >
            {acceptJobLabel}
          </Button>
        </BoxContainer>
      </Box>
    </>
  )
}

export default Actions
