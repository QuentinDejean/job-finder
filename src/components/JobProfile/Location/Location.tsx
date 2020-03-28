import React from 'react'
import styled from 'styled-components'
import RoomIcon from '@material-ui/icons/Room'
import Item from '../common/Item'

const Icon = styled(RoomIcon)`
  padding-right: 10px;
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
    <Item showDivider={false}>
      <Icon fontSize="large" />
      <div>
        <div>
          <strong>
            <small>Location</small>
          </strong>
          <Address>{address}</Address>
          <Distance>{distance} miles away from your seach location</Distance>
        </div>
      </div>
    </Item>
  )
}

export default Location
