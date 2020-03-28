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
  showDivider?: boolean
}

const Item = ({ children, showDivider }: Props) => {
  return (
    <Container>
      {showDivider && <Divider />}
      <Info>
        <Box display="flex" alignItems="center">
          {children}
        </Box>
      </Info>
    </Container>
  )
}

Item.defaultProps = {
  showDivider: true,
}

export default Item
