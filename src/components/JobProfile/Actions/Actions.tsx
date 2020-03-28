import React, { useContext, useState, useEffect } from 'react'
import { Box, Button, Snackbar } from '@material-ui/core'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'

import styled from 'styled-components'

import HTTPClientContext from 'utils/httpClient'

type Props = {
  jobId: string
}

type ActionState = {
  isPerformingAction: boolean
  isAccepted: boolean
  isRejected: boolean
  hasError: boolean
}

const BoxContainer = styled(Box)`
  padding: 15px;
  width: 50%;
`

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const defaultState: ActionState = {
  isPerformingAction: false,
  isAccepted: false,
  isRejected: false,
  hasError: false,
}

const Actions = ({ jobId }: Props) => {
  const axios = useContext(HTTPClientContext)

  const [actionJob, setJobAction] = useState<ActionState>({
    isPerformingAction: false,
    isAccepted: false,
    isRejected: false,
    hasError: false,
  })

  const acceptJob = async () => {
    try {
      setJobAction({
        ...defaultState,
        isPerformingAction: true,
      })

      await axios.get(`/job/${jobId}/accept`)

      setJobAction({
        ...defaultState,
        isAccepted: true,
      })
    } catch (e) {
      setJobAction({
        ...defaultState,
        hasError: true,
      })
    }
  }

  return (
    <>
      {/* <Snackbar
        open
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success">This is a success message!</Alert>
      </Snackbar> */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <BoxContainer>
          <Button variant="outlined" fullWidth>
            No Thanks
          </Button>
        </BoxContainer>
        <BoxContainer>
          <Button
            disabled={actionJob.isPerformingAction}
            onClick={acceptJob}
            variant="contained"
            color="primary"
            fullWidth
          >
            I'll take it
          </Button>
        </BoxContainer>
      </Box>
    </>
  )
}

export default Actions
