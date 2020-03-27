import React from 'react'
import { Box } from '@material-ui/core'
import styled from 'styled-components'
import UserProfile from './UserProfile'

const Container = styled.header`
  background-color: white;
  padding: 10px;
`

const Header = () => {
  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <img src="/swipejobs-icon.png" alt="SwipeJobs logo" />
        </Box>
        <Box>
          <UserProfile />
        </Box>
      </Box>
    </Container>
  )
}

export default Header
