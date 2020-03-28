import React from 'react'
import { Box } from '@material-ui/core'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #1de9b6;
  padding: 15px;
`

const Header = styled(Box)`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
`

const Values = styled(Box)`
  color: white;
  font-size: 20px;
  font-weight: bold;
`

type Props = {
  distance: number
  salary: number
}

const Distance = ({ distance, salary }: Props) => {
  return (
    <Container>
      <Header display="flex" alignItems="center" justifyContent="space-between">
        <Box>Distance</Box>
        <Box>Hourly Rate</Box>
      </Header>
      <Values display="flex" alignItems="center" justifyContent="space-between">
        <Box>{distance} miles</Box>
        <Box>${salary / 100}</Box>
      </Values>
    </Container>
  )
}

export default Distance
