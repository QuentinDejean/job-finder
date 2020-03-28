import React from 'react'
import styled from 'styled-components'
import { Container } from '@material-ui/core'

const AppContainer = styled.section`
  background-color: #f9f7fc;
`

type Props = {
  children: React.ReactNode
}

function App({ children }: Props) {
  return (
    <Container maxWidth="xs">
      <AppContainer>
        <>{children}</>
      </AppContainer>
    </Container>
  )
}

export default App
