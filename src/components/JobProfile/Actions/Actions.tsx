import React from 'react'
import { Box, Button, Snackbar } from '@material-ui/core'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'

import styled from 'styled-components'

type Props = {
  jobId: string
}

const BoxContainer = styled(Box)`
  padding: 15px;
  width: 50%;
`

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const Actions = ({ jobId }: Props) => {
  return (
    <>
      <Snackbar
        open
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success">This is a success message!</Alert>
      </Snackbar>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <BoxContainer>
          <Button variant="outlined" fullWidth>
            No Thanks
          </Button>
        </BoxContainer>
        <BoxContainer>
          <Button variant="contained" color="primary" fullWidth>
            I'll take it
          </Button>
        </BoxContainer>
      </Box>
    </>
  )
}

export default Actions
