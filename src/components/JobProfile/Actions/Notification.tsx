import { Snackbar } from '@material-ui/core'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import React from 'react'

import {
  notificationId,
  jobAppliedSuccessMessage,
  jobDeclinedSuccessMessage,
  alreadyTakenErrorMessage,
  unknownErrorMessage,
} from './constants'

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

type Props = {
  isAccepted: boolean
  isDeclined: boolean
  hasError?: {
    alreadyTaken: boolean
    unknown: boolean
  }
  onClose: () => void
}

const Notification = ({ isAccepted, isDeclined, hasError, onClose }: Props) => {
  let Message

  if (!isAccepted && !isDeclined && !hasError) {
    return null
  }

  if (isAccepted) {
    Message = (
      <Alert onClose={onClose} severity="success">
        {jobAppliedSuccessMessage}
      </Alert>
    )
  }

  if (isDeclined) {
    Message = (
      <Alert onClose={onClose} severity="info">
        {jobDeclinedSuccessMessage}
      </Alert>
    )
  }

  if (hasError) {
    Message = (
      <Alert onClose={onClose} severity="error">
        {hasError.alreadyTaken && alreadyTakenErrorMessage}
        {hasError.unknown && unknownErrorMessage}
      </Alert>
    )
  }

  return (
    <Snackbar
      data-testid={notificationId}
      open={true}
      onClose={onClose}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      {Message}
    </Snackbar>
  )
}

export default Notification
