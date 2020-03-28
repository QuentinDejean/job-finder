import React from 'react'
import styled from 'styled-components'
import { Divider, Box } from '@material-ui/core'
import RoomIcon from '@material-ui/icons/Room'

const Container = styled.div`
  padding: 0 15px;
`

const Icon = styled(RoomIcon)`
  padding-right: 10px;
`

const Info = styled.div`
  padding-top: 10px;
`

const Address = styled.div`
  padding: 5px 0;
`

const Distance = styled.em`
  font-size: 12px;
`

type Props = {
  address: string
  distance: number
}

const Location = ({ address, distance }: Props) => {
  return (
    <Container>
      <Divider />
      <Info>
        <Box display="flex" alignItems="center">
          <Icon fontSize="large" />
          <div>
            <div>
              <strong>
                <small>Location</small>
              </strong>
              <Address>{address}</Address>
              <Distance>{distance} away from your seach location</Distance>
            </div>
          </div>
        </Box>
      </Info>
    </Container>
  )
}

export default Location
