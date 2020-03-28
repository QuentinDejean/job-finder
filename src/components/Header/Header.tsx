import React from 'react'
import { Box } from '@material-ui/core'
import styled from 'styled-components'

import UserProfile from './UserProfile'

const Container = styled.header`
  padding: 5px 15px;
`

const BoxContainer = styled(Box)`
  width: 50%;
`

const Header = () => {
  return (
    <Container>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <BoxContainer>
          <img
            alt="SwipeJobs logo"
            data-testid="company-logo"
            height="73px"
            src="/swipejobs-icon.png"
          />
        </BoxContainer>
        <BoxContainer>
          <UserProfile />
        </BoxContainer>
      </Box>
    </Container>
  )
}

export default Header
