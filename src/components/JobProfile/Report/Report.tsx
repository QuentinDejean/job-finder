import React from 'react'
import styled from 'styled-components'
import HowToRegIcon from '@material-ui/icons/HowToReg'
import Item from '../common/Item'

const Icon = styled(HowToRegIcon)`
  padding-right: 10px;
`

const Manager = styled.div`
  padding: 5px 0;
`

type Props = {
  manager: string
  phone?: string
}

const Report = ({ manager, phone }: Props) => {
  return (
    <Item>
      <Icon fontSize="large" />
      <div>
        <div>
          <strong>
            <small>Report to</small>
          </strong>
          <Manager>
            {manager} {phone && `${phone}`}
          </Manager>
        </div>
      </div>
    </Item>
  )
}

export default Report
