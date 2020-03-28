import React from 'react'
import styled from 'styled-components'
import BuildIcon from '@material-ui/icons/Build'
import Item from '../common/Item'

const Icon = styled(BuildIcon)`
  padding-right: 10px;
`

const Checklist = styled.div`
  padding: 5px 0;
`

const Requirements = () => {
  return (
    <Item>
      <Icon fontSize="large" />
      <div>
        <div>
          <strong>
            <small>Requirements</small>
          </strong>
          <Checklist>
            <div>- Safety Vest</div>
            <div>- Hard Hat</div>
          </Checklist>
        </div>
      </div>
    </Item>
  )
}

export default Requirements
