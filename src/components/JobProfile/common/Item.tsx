import React from 'react'
import styled from 'styled-components'
import { Divider, Box } from '@material-ui/core'

const Container = styled.div`
  padding: 0 15px 10px;
`

const Info = styled.div`
  padding-top: 10px;
`

type Props = {
  children: React.ReactNode
}

const Item = ({ children }: Props) => {
  return (
    <Container>
      <Divider />
      <Info>
        <Box display="flex" alignItems="center">
          {children}
        </Box>
      </Info>
    </Container>
  )
}

export default Item
